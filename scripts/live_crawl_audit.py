#!/usr/bin/env python3
"""Live production crawl audit for ziontechgroup.com."""
from __future__ import annotations

import json
import os
import random
import sys
import urllib.request
import urllib.error
from pathlib import Path

HOST = os.getenv("ZION_HOST", "ziontechgroup.com")
PROTOCOL = "https"
TIMEOUT = 15
MAX_CONCURRENCY = 8


def fetch(url: str) -> tuple[int, str]:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            body = r.read().decode("utf-8", errors="ignore")
            return r.status, body
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="ignore") if e.fp else ""
        return e.code, body
    except Exception as e:
        return 0, str(e)


def main() -> int:
    services_path = Path("app/data/servicesData.json")
    if not services_path.exists():
        print("SERVICE_JSON_MISSING=" + str(services_path))
        return 2

    data = json.loads(services_path.read_text(encoding="utf-8"))
    services = data.get("services", []) if isinstance(data, dict) else []
    slugs = [s.get("id") for s in services if isinstance(s, dict) and s.get("id")]
    if not slugs:
        print("NO_SLUGS")
        return 2

    random.seed(0)
    sample = random.sample(slugs, k=min(50, len(slugs)))

    primary = ["/", "/services", "/solutions", "/pricing", "/industry-solutions/healthcare"]
    routes = primary + [f"/services/{slug}" for slug in sample]

    broken = []
    checked = 0
    for route in routes:
        url = f"{PROTOCOL}://{HOST}{route}"
        status, body = fetch(url)
        checked += 1
        if status != 200 or not body.strip():
            broken.append({"route": route, "status": status, "error": "EMPTY_BODY" if status == 200 else str(status)})

    report = {
        "ts": __import__("datetime").datetime.utcnow().isoformat() + "Z",
        "host": HOST,
        "checked": checked,
        "broken_count": len(broken),
        "ok": len(broken) == 0,
        "broken_routes": broken,
    }

    out_path = Path("scripts/checks/audit") / f"live-crawl-{int(__import__('time').time()*1000)}.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(report, indent=2), encoding="utf-8")

    print(f"crawl_complete checked={checked} broken={len(broken)}")
    if broken:
        print("broken_routes=" + ", ".join(f"{b['route']}::{b['status']}" for b in broken))
    print("report=" + str(out_path))
    return 0 if not broken else 1


if __name__ == "__main__":
    sys.exit(main())
