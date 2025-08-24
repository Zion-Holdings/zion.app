# Layout Audit: Agent Factory Proposals

- Generated: 2025-08-16T20:52:22.299Z
- Overflow ratio: 0.0%

## Proposed Agents & Workflows

- Agent: Layout Overflow Auditor (Playwright)
  - Crawls routes, flags horizontal overflow and missing image dimensions
  - Outputs JSON reports and annotated offenders
- Agent: Layout Fix Suggester
  - Suggests Tailwind classes (max-w-full, overflow-x-auto, whitespace-normal)
  - Applies guarded global CSS fallback when widespread issues are detected
- Agent: PR Commenter
  - Posts a summary table and top offenders per route on PRs

### GitHub Actions Workflow Suggestion
```yaml
name: layout-audit
on:
  pull_request:
    paths:
      - "pages/**"
      - "components/**"
      - "styles/**"
  schedule:
    - cron: "0 3 * * *"
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - name: Build
        run: npm run build
      - name: Start server
        run: npx serve -s out -l 3000 &
      - name: Crawl & Audit
        run: node automation/layout-crawler.cjs
        env:
          BASE_URL: http://localhost:3000
      - name: Suggest Fixes
        run: node automation/layout-fixer.cjs
      - name: Upload Report Artifact
        uses: actions/upload-artifact@v4
        with:
          name: layout-report
          path: data/reports/layout-audit
```

## Top Offenders by Route