---
name: pages-deploy-audit
description: Audit GitHub Pages deploy health for zion-support.github.io. Use when asked to verify Pages deploy, check workflow runs, inspect artifacts, or diagnose 404s after push.
category: devops
---

# Pages Deploy Audit

## When to Use
- User asks to check Pages deploy status
- Diagnosing 404s after push to `main`
- Verifying workflow run success/failure
- Inspecting artifact contents or live routes

## Procedure
1. List recent workflow runs: `gh run list --workflow=.github/workflows/deploy-to-github-pages.yml --limit 5`
2. Inspect latest run: `gh run view <run_id> --json status,conclusion,startedAt,updatedAt,url,jobs`
3. If `conclusion` is not `success`, check job steps for failures
4. Verify live routes with `python scripts/checks/service_routes_healthcheck.py` or equivalent
5. Check `_redirects` rules if 404s persist
6. Review `next.config.mjs` for memory/export settings if OOM suspected

## Pitfalls
- Workflow `concurrency: cancel-in-progress` can kill runs; check if cancelled
- `tsc --noEmit` failures block build; workflow may use `|| true` to bypass
- OOM requires `NODE_OPTIONS=--max-old-space-size=16384` and memory-saving config
- `public/tools/` stubs are copied explicitly to artifact; verify copy step succeeded
- `app/services/[slug]/page.tsx` should NOT have `generateStaticParams` for static stub fallback

## Verification
- All monitored routes return HTTP 200
- Latest workflow run shows `conclusion: success`
- Artifact contains `public/services/` and `public/tools/` directories
