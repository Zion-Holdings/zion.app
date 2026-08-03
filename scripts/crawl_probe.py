#!/usr/bin/env python3
"""Crawl ziontechgroup.com key paths using curl and write results to artifacts/crawl-<date>.json and live-path-check.json."""
import json, os, subprocess, sys
from datetime import datetime

BASE = "https://ziontechgroup.com"
KEY_PATHS = ["/", "/services/", "/tools/", "/contact/", "/pricing/", "/solutions/", "/blog/", "/about/"]
OUT_DIR = "artifacts"
os.makedirs(OUT_DIR, exist_ok=True)
today = datetime.now().strftime("%Y-%m-%d")
OUT_PATH = os.path.join(OUT_DIR, f"crawl-{today}.json")

def curl_probe(path):
    url = BASE + path
    cmd = ["curl", "-s", "-o", "NUL", "-w", "%{http_code} %{size_download}", "--max-time", "15", "--location", url]
    try:
        p = subprocess.run(cmd, capture_output=True, text=True, timeout=20)
        out = p.stdout.strip().split()
        stderr = p.stderr.strip()
        if len(out) == 2 and out[0].isdigit():
            return {"path": path, "url": url, "status": int(out[0]), "size": int(out[1]), "error": stderr[:200] if stderr else ""}
        return {"path": path, "url": url, "status": 0, "size": 0, "error": out or stderr[:200]}
    except Exception as e:
        return {"path": path, "url": url, "status": 0, "size": 0, "error": str(e)[:200]}

results = []
for p in KEY_PATHS:
    results.append(curl_probe(p))

print(json.dumps(results, ensure_ascii=False, indent=2))

with open(OUT_PATH, "w") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
with open("live-path-check.json", "w") as f:
    json.dump({"generated_at": datetime.now().isoformat(), "paths": results}, f, ensure_ascii=False, indent=2)
