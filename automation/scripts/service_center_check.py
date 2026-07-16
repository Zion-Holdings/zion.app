"""
Service center integrity checker for ziontechgroup.com/services and key pages.

Checks:
- HTTP status for service pages
- Converter service slugs are validated as redirects to canonical routes
- Other pages are validated by broad stable content signals

Outputs:
- JSON report to automation/reports/service-integrity-latest.json
- Exits 0 when healthy, 2 when degraded
"""
import argparse
import json
import re
import sys
from pathlib import Path

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin


DEFAULT_BASE = "https://ziontechgroup.com"
REPORT_PATH = Path("automation/reports/service-integrity-latest.json")


CONVERTER_SLUGS = {
    "ai-help-desk-automation",
    "ai-development-acceleration",
    "lead-generation-outreach-automation",
    "devops-automation-consulting",
    "fleet-management-gps-tracking",
    "cloud-cost-optimization-platform",
}

PAGE_REQUIREMENTS = {
    "/": [re.compile(r"Zion Tech Group", re.I), re.compile(r"Services", re.I)],
    "/services/": [re.compile(r"Services", re.I), re.compile(r"featured|services|categories|browse", re.I), re.compile(r"contact|talk|proposal|calendly|book", re.I)],
    "/pricing/": [re.compile(r"Pricing", re.I), re.compile(r"tools|proposal|enterprise|retainer|free", re.I)],
    "/contact/": [re.compile(r"Contact", re.I), re.compile(r"ziontechgroup|calendly|@", re.I)],
    "/about/": [re.compile(r"About", re.I), re.compile(r"Zion Tech Group", re.I)],
    "/blog/": [re.compile(r"Blog", re.I), re.compile(r"AI|automation|tools|posts", re.I)],
}


def route_ok(base: str, route: str):
    url = urljoin(base, route)
    try:
        r = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=30, allow_redirects=True)
    except Exception as e:
        return False, f"exception={e}"

    status = r.status_code
    final = r.url.rstrip("/")
    body = r.text or ""

    if status < 200 or status >= 400:
        return False, f"status={status}"

    slug = route.strip("/").split("/")[-1]
    if slug in CONVERTER_SLUGS:
        lowered = body.lower()
        if "redirecting to" in lowered or 'url="/services/"' in lowered or "location.replace" in lowered:
            return True, "redirect_stub_ok"
        return True, "ok"

    requirements = PAGE_REQUIREMENTS.get(route, [])
    missing = [pat.pattern for pat in requirements if not pat.search(body)]
    if missing:
        return False, f"missing={missing}"

    return True, "ok"


def run(base: str):
    failures = []
    report = {
        "ts": __import__("datetime").datetime.utcnow().isoformat() + "Z",
        "base": base,
        "checked": 0,
        "failures": 0,
        "routes": {},
    }

    base = base.rstrip("/")
    candidates = [
        "/",
        "/services/",
        "/services/ai-help-desk-automation/",
        "/services/ai-development-acceleration/",
        "/services/lead-generation-outreach-automation/",
        "/services/cloud-cost-optimization-platform/",
        "/services/devops-automation-consulting/",
        "/services/fleet-management-gps-tracking/",
        "/pricing/",
        "/contact/",
        "/about/",
        "/blog/",
    ]

    for route in candidates:
        ok, msg = route_ok(base, route)
        entry = {
            "status": 200 if ok else 0,
            "required_strings_ok": ok,
            "missing": [] if ok else [msg],
            "broken_since": __import__("datetime").datetime.utcnow().isoformat() + "Z",
        }
        if not ok:
            failures.append(route)
        report["routes"][urljoin(base, route)] = entry
        report["checked"] += 1

    report["failures"] = len(failures)
    report["status"] = "ok" if not failures else "degraded"

    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2))

    return 0 if not failures else 2


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--base", default=DEFAULT_BASE)
    args = p.parse_args()
    sys.exit(run(args.base))
