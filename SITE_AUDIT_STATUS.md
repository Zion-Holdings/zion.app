# Site Audit & Deploy Status

**Last updated:** 2026-08-25  
**Status:** BLOCKED — Pages artifact not updating

## What’s Working
- 24 routes return 200 OK
- `/faq/` fixed and live
- All stubs committed/pushed to `main` and `gh-pages`

## What’s Broken
- `/careers/` → 404
- `/solutions/` → 404
- `/styles.css` → 404
- Multiple deep crawl routes → 404

## Root Cause
- GitHub Pages artifact last updated: `2026-08-25T13:56:04Z`
- Workflow runs `32860912488` and `32861355778` cancelled/not completing
- Pages source: `gh-pages` branch, `build_type: workflow`
- Code is ready; deploy pipeline is failing

## Manual Actions Needed
1. Open **Actions → Continuous Pages Deploy**
2. Check why runs are failing/cancelling
3. Fix workflow blocker
4. Trigger new deploy manually

## Verification
After deploy, check:
```bash
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/careers/
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/solutions/
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/styles.css
```

## Credentials Status
- Google OAuth: expired, needs `gog login kleber@ziontechgroup.com`
- Resend SMTP: 403/1010, needs new API key
- CURSOR_API_KEY/OPENAI_API_KEY: missing
