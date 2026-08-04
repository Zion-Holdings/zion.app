#!/usr/bin/env python3
"""Crawl probe for ziontechgroup.com key paths. Writes JSON artifact."""
import json, subprocess, sys
from datetime import datetime, timezone

paths = ["/", "/services/", "/tools/", "/contact/", "/pricing/", "/solutions/", "/blog/", "/about/"]
origin = "https://ziontechgroup.com"
results = []
for p in paths:
    url = origin + p
    # curl on Windows: -o NUL, follow redirects, show final URL and HTTP code, suppress progress
    cmd = ["curl", "-sS", "-L", "-o", "NUL", "-w", "%{http_code} %{url_effective} %{size_download}", url]
    try:
        proc = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        out = (proc.stdout or "").strip().split()
        if len(out) >= 2:
            code = int(out[0]) if out[0].isdigit() else 0
            final_url = out[1]
            size = int(out[2]) if len(out) >= 3 and out[2].isdigit() else 0
        else:
            code = 0
            final_url = url
            size = 0
    except Exception as e:
        code = 0
        final_url = url
        size = 0
        out = str(e)
    status = "ok" if 200 <= code < 400 else "broken" if code == 404 else "error"
    results.append({"path": p, "url": url, "final_url": final_url, "status_code": code, "size_download": size, "status": status, "error": out if code == 0 else ""})

artifact = {
    "timestamp": datetime.now(timezone.utc).isoformat(),
    "origin": origin,
    "results": results,
    "broken": [r for r in results if r["status"] != "ok"],
}
print(json.dumps(artifact, indent=2, ensure_ascii=False))
