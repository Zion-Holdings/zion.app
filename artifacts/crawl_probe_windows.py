#!/usr/bin/env python3
import subprocess, json, re, sys
from datetime import datetime

BASE = "https://ziontechgroup.com"
SEEDS = ["/", "/services/", "/tools/", "/contact/", "/pricing/", "/solutions/", "/blog/", "/about/"]
ARTIFACT = BASE

def curl_probe(url, timeout=30):
    try:
        r = subprocess.run(
            ["curl", "-L", "-o", "NUL", "-w", "%{http_code} %{size_download}", "-s", "--max-time", str(timeout), url],
            capture_output=True, text=True, timeout=timeout + 5
        )
        out = r.stdout.strip()
        m = re.match(r"(\d{3})\s+(\d+)", out)
        if m:
            return int(m.group(1)), int(m.group(2))
        return 0, 0
    except Exception as e:
        return 0, 0

def extract_links(url, html_text):
    candidates = set()
    for m in re.finditer(r'href=["\'](https://ziontechgroup\.com/[^"#\?]+)["\']', html_text):
        candidates.add(m.group(1).rstrip('/'))
    for m in re.finditer(r'href=["\'](/[^"#]+)["\']', html_text):
        candidates.add((BASE + m.group(1)).rstrip('/'))
    for m in re.finditer(r'src=["\'](https://ziontechgroup\.com/[^"#\?]+)["\']', html_text):
        candidates.add(m.group(1).rstrip('/'))
    return candidates

def fetch_html(url):
    try:
        r = subprocess.run(
            ["curl", "-L", "-s", "--max-time", "30", url],
            capture_output=True, text=True, timeout=35
        )
        return r.stdout
    except Exception:
        return ""

results = []
seen = set()
all_candidates = set()

for seed in SEEDS:
    target = BASE + seed
    html = fetch_html(target)
    if html:
        all_candidates.update(extract_links(target, html))
    
    code, size = curl_probe(target)
    results.append({"path": seed, "url": target, "status": code, "size": size, "error": ""})

# Also probe important secondary paths if found
secondary = ["/case-studies/", "/testimonials/", "/dashboard", "/search/"]
for p in secondary:
    target = BASE + p
    html = fetch_html(target)
    if html:
        all_candidates.update(extract_links(target, html))
    code, size = curl_probe(target)
    results.append({"path": p, "url": target, "status": code, "size": size, "error": ""})

print(f"Unique candidates from crawl: {len(all_candidates)}", file=sys.stderr)
# Limit
probe_list = sorted(all_candidates)[:200]
print(f"Probing {len(probe_list)} secondary URLs", file=sys.stderr)

for u in probe_list:
    if u in seen:
        continue
    seen.add(u)
    code, size = curl_probe(u)
    if code >= 400 or code == 0:
        path = u.replace(BASE, "")
        if not path:
            path = "/"
        results.append({"path": path, "url": u, "status": code, "size": size, "error": "broken" if code >= 400 else "fail"})

# Deduplicate by path
unique = {}
for r in results:
    p = r["path"]
    if p not in unique or r["status"] > unique[p]["status"]:
        unique[p] = r

final = sorted(unique.values(), key=lambda x: x["path"])

out = {
    "generated_at": datetime.utcnow().isoformat() + "Z",
    "paths": final
}

with open("artifacts/crawl-2026-07-18-fresh.json", "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)

# Summary
broken = [r for r in final if r["status"] >= 400 or r["status"] == 0]
print(json.dumps({"total": len(final), "broken": len(broken), "broken_paths": [r["path"] for r in broken[:20]]}, indent=2))
