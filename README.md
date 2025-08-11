# Link Auditor

A simple async site crawler to detect broken links and assets, with a CLI to produce CSV/JSON reports and naive fix suggestions.

## Quickstart

1. Install dependencies:

```
pip install -r requirements.txt
```

2. Crawl your site:

```
python -m link_auditor.cli crawl https://example.com --max-pages 5000 --concurrency 12 --timeout 15 --include-external --output-dir ./link_audit_report
```

3. Generate fix suggestions from the JSON report:

```
python -m link_auditor.cli suggest-fixes ./link_audit_report/report.json
```

Outputs:
- `broken_links.csv`: list of broken links/assets with source pages
- `report.json`: full crawl summary
- `report.suggestions.json`: naive suggestions (https/www/trailing slash toggles)

## CI (template)

Add `.github/workflows/link-check.yml` to run weekly and on PRs.