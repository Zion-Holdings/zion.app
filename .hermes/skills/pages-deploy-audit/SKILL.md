name: pages-deploy-audit
description: Use when auditing GitHub Pages deploy status for zion-support.github.io. Checks latest Pages run, workflow drift, and critical route health.
trigger: "auditar deploy Pages"
tools: [terminal]
scripts:
  - scripts/pages_deploy_audit.cjs
steps:
  - name: latest-pages-run
    command: gh run list --workflow=.github/workflows/deploy-to-github-pages.yml --repo Zion-support/zion-support.github.io --limit 1 --json databaseId,conclusion,status,url --jq '.[0]'
  - name: workflow-diff
    command: git diff -- .github/workflows/deploy-to-github-pages.yml
  - name: critical-routes
    command: node scripts/checks/service_routes_healthcheck.cjs
  - name: full-smoke
    command: node scripts/checks/smoke-routes-check.cjs
  - name: report
    format: concise delta-report
