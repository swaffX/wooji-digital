interface Entry { count: number; reset: number }

const store = new Map<string, Entry>()

export function rateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.reset) {
    store.set(ip, { count: 1, reset: now + windowMs })
    return true
  }

  if (entry.count >= limit) return false
  entry.count++
  return true
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}
