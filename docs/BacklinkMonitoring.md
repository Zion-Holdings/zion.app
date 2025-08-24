# Backlink Monitoring

This project includes a script to check the site's backlink profile on a regular basis.
The script pulls backlink data from a third‑party SEO provider, compares it with
the previous run and stores a report highlighting:

- New backlinks
- Lost backlinks
- Potentially toxic links (spam score ≥ 50)

## Usage

1. Set the environment variables `BACKLINK_API_URL` and `BACKLINK_API_KEY` to
   your SEO provider's endpoint and API key.
2. Run `node scripts/monitor-backlinks.js`.
3. Results are stored in the `seo/` folder:
   - `backlinks.json` holds the latest raw backlink data
   - `backlink-report.json` summarises new, lost and toxic links

This information can be used to adjust link‑building strategies and to disavow
harmful backlinks via Google Search Console or a similar tool.
