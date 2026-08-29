# Site Audit & Deploy Status

**Last updated:** 2026-08-29  
**Status:** Site live; local build stalled; deploy pending

## What’s Working
- Homepage and 64 discovered URLs returning 200 OK
- `/careers/`, `/solutions/`, `/styles.css`, `/free-consultation/`, `/partners/`, `/blog/` all live
- Service fallback stubs confirmed present under `public/services/*` and `docs/services/*`
- Sitemap synced: `1280` URLs, `31` service entries

## What Was Broken / Now Fixed
- Old audit flagged missing `/careers/`, `/solutions/`, `/styles.css`; all now present and returning 200
- Old audit flagged workflow failures; current issue is local `npm run build` stalling during static export generation
- Bad canonical links fixed in 54 static HTML fallbacks
- `docs/solutions/index.html` and `docs/careers/index.html` recreated with fuller content

## Current Blocker
- Local `npm run build` appears stalled in Next.js static export phase; `out/` not produced after extended runtime
- GitHub Actions workflow likely the safer deploy path right now

## Live Verification
```bash
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/careers/
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/solutions/
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/styles.css
```

## Credentials Status
- Google OAuth: expired, needs `gog login kleber@ziontechgroup.com`
- Resend SMTP: 403/1010, needs new API key
- CURSOR_API_KEY/OPENAI_API_KEY: missing
