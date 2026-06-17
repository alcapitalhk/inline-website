# Deployment

Hosted on **GitHub Pages** from the `main` branch of
`alcapitalhk/inline-website`, served at the custom domain **inline.com.hk**
(set via the `CNAME` file).

## Update the live site
Any push to `main` rebuilds and redeploys automatically:
```
git add -A
git commit -m "your change"
git push
```

## DNS configuration (one-time, at your domain's DNS provider)

> ⚠️ Only add/replace the **web** records below. **Do NOT touch the `MX` records
> or email-related `TXT` (SPF/DKIM) records** — those keep admin@inline.com.hk working.

### Apex domain `inline.com.hk` — four A records
| Type | Host/Name | Value           |
|------|-----------|-----------------|
| A    | @         | 185.199.108.153 |
| A    | @         | 185.199.109.153 |
| A    | @         | 185.199.110.153 |
| A    | @         | 185.199.111.153 |

(Optional IPv6 — four AAAA records on `@`:)
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

### `www` subdomain — one CNAME record
| Type  | Host/Name | Value                  |
|-------|-----------|------------------------|
| CNAME | www       | alcapitalhk.github.io  |

If an old A record or website record already exists on `@`, replace it with the
four above. DNS changes can take 30 min – 24 h to propagate.

## After DNS propagates
GitHub auto-issues a free Let's Encrypt certificate. Then enable HTTPS:
`Repo → Settings → Pages → ✅ Enforce HTTPS`
(or it can be set via the API once the domain verifies).
