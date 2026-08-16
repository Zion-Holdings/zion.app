#!/usr/bin/env python3
import subprocess, json, sys
from pathlib import Path

BASE = "https://ziontechgroup.com"
PATHS = [
    "/",
    "/services/",
    "/tools/",
    "/contact/",
    "/pricing/",
    "/solutions/",
    "/blog/",
    "/about/",
]

def curl_probe(url):
    try:
        # Windows NUL device; suppress progress meter
        cmd = [
            "curl", "-s", "-o", "NUL", "-w", "%{http_code}",
            "--max-time", "20", url
        ]
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        code = res.stdout.strip()
        if code and code != "000":
            return int(code)
        # Fallback: try HEAD
        cmd_head = ["curl", "-s", "-I", "-o", "NUL", "-w", "%{http_code}",
                    "--max-time", "20", url]
        res2 = subprocess.run(cmd_head, capture_output=True, text=True, timeout=30)
        code2 = res2.stdout.strip()
        return int(code2) if code2 and code2 != "000" else None
    except Exception as e:
        return None

def main():
    results = {}
    for p in PATHS:
        url = BASE + p
        code = curl_probe(url)
        results[p] = {"url": url, "status": code}
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
