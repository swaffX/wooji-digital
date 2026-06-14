# Deployment notes

## Cloudflare origin lock (rate-limiter hardening)

The contact/newsletter rate limiter trusts the `CF-Connecting-IP` header. That
is only safe if the origin refuses non-Cloudflare traffic. `cloudflare-allowlist.caddy`
provides a `(cloudflare_only)` Caddy snippet that 403s any direct-to-origin request.

### Apply on the VDS (run these yourself — do not share root credentials)

```bash
# 1. Back up the current config first
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.$(date +%s)

# 2. Add the snippet. Either copy this file next to the Caddyfile and import it,
#    or paste the (cloudflare_only) block near the top of /etc/caddy/Caddyfile.
#    Then add `import cloudflare_only` as the FIRST line inside the
#    woojidigital.com { ... } site block, e.g.:
#
#    woojidigital.com {
#        import cloudflare_only
#        encode zstd gzip
#        reverse_proxy 127.0.0.1:3000
#    }

# 3. Validate BEFORE reloading (never reload an invalid config on a live site)
caddy validate --config /etc/caddy/Caddyfile

# 4. Reload with zero downtime
systemctl reload caddy   # or: caddy reload --config /etc/caddy/Caddyfile

# 5. Verify: a request with a spoofed CF-Connecting-IP from a non-Cloudflare
#    source should now get 403 at the edge (the app never sees it).
```

Keep Cloudflare's SSL/TLS mode at **Full (strict)** so the origin still serves
HTTPS behind the proxy. Refresh the IP ranges in `cloudflare-allowlist.caddy`
periodically from <https://www.cloudflare.com/ips/>.

### Defense in depth (optional)

Restrict the firewall so ports 80/443 only accept Cloudflare ranges (`ufw`/`nftables`),
and keep the Node app bound to `127.0.0.1:3000` (not `0.0.0.0`) so it is never
directly reachable.

## Security baseline reminders

- Use **SSH key auth**; disable password login (`PasswordAuthentication no`).
- Install `fail2ban`.
- Rotate any credential that has ever been committed or shared in plaintext.
