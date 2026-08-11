import urllib.request
import urllib.error
import json
import re
import ssl
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone

BASE = "https://ziontechgroup.com"
SEED_PAGES = ["/", "/services/", "/tools/", "/contact/"]
HUB_ROUTES = [
    "/", "/services/", "/tools/", "/contact/", "/pricing/", "/products/",
    "/free-tools/", "/configurator/", "/ai-services/", "/ai/", "/faq/",
    "/industry-solutions/", "/blog/", "/public-roadmap", "/status-page"
]
MAX_PAGES = 250
REPORT_PATH = r"C:\Users\Zion\tmp\zion-clone-test2\outreach_monitor\processed\site_health_report.jsonl"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {"User-Agent": "Mozilla/5.0 (compatible; zion-monitor/1.0)"}

def fetch(url, timeout=15):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
            return r.getcode(), r.read(2048).decode("utf-8", errors="ignore")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return None, str(e)

def extract_links(html, base_url):
    links = []
    for m in re.finditer(r'href=["\']([^"\']+)["\']', html):
        links.append(m.group(1))
    # Normalize to absolute URLs
    abs_links = []
    for l in links:
        if l.startswith("http"):
            abs_links.append(l)
        elif l.startswith("/"):
            abs_links.append(f"https://ziontechgroup.com{l}")
        else:
            abs_links.append(f"{base_url.rstrip('/')}/{l.lstrip('/')}")
    return abs_links

summary = {
    "timestamp": datetime.now(timezone.utc).isoformat(),
    "seed_probes": [],
    "hub_probes": [],
    "broken": [],
    "total_probed": 0,
    "total_ok": 0,
    "total_errors": 0,
    "fixes_attempted": [],
    "notes": []
}

# 1) Probe seed pages and collect links
collected = set()
for sp in SEED_PAGES:
    code, body = fetch(BASE + sp)
    summary["seed_probes"].append({"url": BASE + sp, "code": code})
    if code and 200 <= code < 400 and body:
        for l in extract_links(body, BASE + sp):
            if l.startswith(BASE) and l not in collected:
                collected.add(l)

# 2) Get sitemap
sitemap_urls = []
code, body = fetch(BASE + "/sitemap.xml")
summary["seed_probes"].append({"url": BASE + "/sitemap.xml", "code": code})
if code == 200 and body:
    # Try XML loc extraction
    locs = re.findall(r'<loc>([^<]+)</loc>', body)
    for u in locs:
        u = u.strip()
        if u.startswith(BASE) and u not in collected:
            collected.add(u)
            sitemap_urls.append(u)
    summary["notes"].append(f"sitemap_entries={len(locs)}")
else:
    summary["notes"].append("sitemap_unavailable_or_empty")

# 3) Probe all collected URLs + hub routes
to_probe = list(collected)[:MAX_PAGES]
for h in HUB_ROUTES:
    u = BASE + h
    if u not in to_probe:
        to_probe.append(u)

summary["total_probed"] = len(to_probe)

def probe_url(url):
    code, _ = fetch(url)
    return url, code

with ThreadPoolExecutor(max_workers=20) as pool:
    futures = {pool.submit(probe_url, u): u for u in to_probe}
    for fut in as_completed(futures):
        url, code = fut.result()
        if code is None or code >= 400:
            summary["total_errors"] += 1
            summary["broken"].append({"url": url, "code": code})
            # Categorize
            if any(h in url for h in ["/public-roadmap", "/status-page"]):
                pass
        else:
            summary["total_ok"] += 1

# 4) Hub probes explicit list
for h in HUB_ROUTES:
    url = BASE + h
    code, _ = fetch(url)
    summary["hub_probes"].append({"url": url, "code": code})
    if code is None or code >= 400:
        # already in broken via to_probe, but ensure categorized
        if not any(b["url"] == url for b in summary["broken"]):
            summary["broken"].append({"url": url, "code": code})
            summary["total_errors"] += 1
        summary["fixes_attempted"].append({
            "route": h,
            "fix": "create_docs_fallback_or_redirect"
        })

# Deduplicate broken by URL
seen = set()
deduped = []
for b in summary["broken"]:
    if b["url"] not in seen:
        seen.add(b["url"])
        deduped.append(b)
summary["broken"] = deduped
summary["total_errors"] = len(summary["broken"])

# 5) JSONL append
import os
os.makedirs(os.path.dirname(REPORT_PATH), exist_ok=True)
with open(REPORT_PATH, "a", encoding="utf-8") as f:
    f.write(json.dumps(summary) + "\n")

# Print concise summary
print(f"TIMESTAMP={summary['timestamp']}")
print(f"PROBED={summary['total_probed']} OK={summary['total_ok']} ERRORS={summary['total_errors']}")
if summary["broken"]:
    for b in summary["broken"]:
        print(f"BROKEN {b['code']} {b['url']}")
else:
    print("NO_BROKEN")
print(f"NOTES={summary['notes']}")
