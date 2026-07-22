# Wayback Recovery Report

**Site:** ziontechgroup.com  
**Task:** Download latest available snapshots for candidate URLs.  
**Outcome:** BLOCKED — web.archive.org is unreachable from this host.

## What happened
- Enumerated site URLs from `sitemap.xml` and wrote `/.audit/wayback-candidates.txt` with 447 unique candidates.
- Attempted recovery with `python3 .audit/fetch_wayback.py` using Wayback `CDX` + latest snapshot fetch URLs.
- Network connectivity to `web.archive.org:443` fails immediately in this environment, so no HTML/JSON snapshots could be retrieved.

## Numbers
- Candidate URLs: 447
- Recovered snapshots: 0
- No-snapshot archives: none documented
- Network/socket errors: 447 `cdx_fetch_failed`

## What this means
The latest-archive fallback cannot be performed automatically until one of the following changes:
1. Network path to Wayback Machine is restored from this host.
2. Archive data is supplied via a batch export or provided snapshot list.
3. The task is re-run on a host with direct outbound access to `web.archive.org`.

## Files created
- `/Users/miami2/zion.app/.audit/wayback-candidates.txt` — 147 lines/blob worth of lines extracted from sitemap, representing unique site paths attempted against Wayback.
- `/Users/miami2/zion.app/.audit/wayback-recovery-summary.json` — recovery attempt summary metadata.
- `/Users/miami2/zion.app/.audit/wayback-recovery-errors.log` — error log with candidate URL, status, and failure reason.
- `/Users/miami2/zion.app/.audit/fetch_wayback.py` — recovery script used for CDX lookup and snapshot download.

## Next-step options
1. Retry networking layer / DNS: `nslookup web.archive.org`, `curl -I https://web.archive.org/cdx/search/cdx`.
2. Provide a pruned candidate list and rerun once connectivity is confirmed.
3. If you want, we can start extracting archived content manually via an alternate subagent path once reachable.
