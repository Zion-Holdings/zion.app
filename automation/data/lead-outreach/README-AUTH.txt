Gmail auth is required before live outreach/hot-followup can run.

Manual OAuth fallback:
1. Run: gog auth add kleber@ziontechgroup.com --services gmail --force-consent --remote --step 1 --timeout 10m
2. Open the printed URL and approve access.
3. Run again with --remote --step 2 --auth-url <the final redirect URL from your browser>.
