interface Entry { count: number; reset: number }

const store = new Map<string, Entry>()

// Hard cap on tracked keys. A flood of distinct keys cannot grow memory
// unbounded regardless of source. Tune to expected legitimate unique-IP volume.
const MAX_ENTRIES = 10_000

// Secondary sweep: purge expired entries every 5 minutes. Primary purge happens
// on access (see rateLimit) so memory is reclaimed without waiting for this tick.
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (now > entry.reset) store.delete(key)
  }
}, 5 * 60 * 1000)

export function rateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now()

  // Purge on access: an expired window is reclaimed immediately rather than
  // waiting for the 5-minute sweep.
  const existing = store.get(ip)
  if (existing && now > existing.reset) store.delete(ip)

  const entry = store.get(ip)
  if (!entry) {
    // Memory ceiling: once full, deny new keys rather than grow unbounded.
    if (store.size >= MAX_ENTRIES) return false
    store.set(ip, { count: 1, reset: now + windowMs })
    return true
  }

  if (entry.count >= limit) return false
  entry.count++
  return true
}

// Deployment chain: Client -> Cloudflare -> Caddy -> Node (127.0.0.1:3000).
// Cloudflare sets CF-Connecting-IP to the real client IP and Caddy forwards it.
// We trust ONLY this header. X-Forwarded-For is attacker-controllable — its
// left-most value is whatever the client sent — so it must never key the limiter.
// If CF-Connecting-IP is absent the request did not arrive through Cloudflare
// (misconfig or a direct-to-origin bypass), so bucket all such traffic under one
// shared key instead of granting a per-request free pass. Additionally lock
// Caddy/firewall to Cloudflare IP ranges so this header cannot be spoofed by
// reaching the origin directly. See: https://www.cloudflare.com/ips/
export function getClientIp(req: Request): string {
  const cf = req.headers.get('cf-connecting-ip')
  if (cf) return cf.trim()
  return 'untrusted'
}
