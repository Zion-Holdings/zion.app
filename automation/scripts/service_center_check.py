"""
Service center integrity checker for ziontechgroup.com/services and key pages.

Checks:
- HTTP status for service pages
- Page-specific semantic requirements using regex-based matching on HTML
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

PAGE_REQUIREMENTS = {
    "/": [],
    "/services/": [re.compile(r"Services", re.I), re.compile(r"featured", re.I), re.compile(r"contact", re.I)],
    "/services/ai-help-desk-automation/": [re.compile(r"Help Desk", re.I), re.compile(r"ticket", re.I), re.compile(r"triage", re.I), re.compile(r"routing", re.I), re.compile(r"/services/", re.I)],
    "/services/ai-development-acceleration/": [re.compile(r"AI features", re.I), re.compile(r"reusable components", re.I), re.compile(r"evaluation", re.I), re.compile(r"deploys", re.I), re.compile(r"/services/", re.I)],
    "/services/lead-generation-outreach-automation/": [re.compile(r"Outreach", re.I), re.compile(r"qualified prospects", re.I), re.compile(r"LLM tailoring", re.I), re.compile(r"/services/", re.I)],
    "/services/cloud-cost-optimization-platform/": [re.compile(r"Cloud Cost Optimization", re.I), re.compile(r"spend", re.I), re.compile(r"guardrails", re.I), re.compile(r"/services/", re.I)],
    "/services/devops-automation-consulting/": [re.compile(r"DevOps", re.I), re.compile(r"CI/CD", re.I), re.compile(r"incident response", re.I), re.compile(r"/services/", re.I)],
    "/services/fleet-management-gps-tracking/": [re.compile(r"Fleet Management", re.I), re.compile(r"GPS tracking", re.I), re.compile(r"route efficiency", re.I), re.compile(r"/services/", re.I)],
    "/pricing/": [re.compile(r"Pricing", re.I), re.compile(r"Get a tailored proposal", re.I), re.compile(r"Free tools", re.I)],
    "/contact/": [re.compile(r"Contact", re.I), re.compile(r"ziontechgroup\\.com", re.I)],
    "/about/": [re.compile(r"About", re.I), re.compile(r"Zion Tech Group", re.I)],
    "/blog/": [re.compile(r"Blog", re.I), re.compile(r"Practical writing on AI", re.I), re.compile(r"free tools", re.I)],
}


def route_ok(base: str, route: str):
    url = urljoin(base, route)
    try:
        r = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=30, allow_redirects=True)
    except Exception as e:
        return False, f"exception={e}"

    status = r.status_code
    if status < 200 or status >= 400:
        return False, f"status={status}"

    requirements = PAGE_REQUIREMENTS.get(route, [])
    missing = [pat.pattern for pat in requirements if not pat.search(r.text or "")]
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
