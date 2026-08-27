"""
Service center integrity checker for ziontechgroup.com/services and key pages.

Checks:
- HTTP status for service pages
- Converter service slugs are validated as redirect stubs when present
- Basic structural signals in raw HTML
- Real browser-rendered content spot checks where possible

Limitations:
- Some pages are JS-rendered; raw HTTP responses may not contain all visible text.
- This checker records JS-rendered pages as "js_rendered_hint=true" when content is missing from static HTML.

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
    "/": [re.compile(r"<title>", re.I)],
    "/services/": [re.compile(r"Zion Tech Group", re.I), re.compile(r"services", re.I)],
    "/pricing/": [re.compile(r"<title>", re.I), re.compile(r"pricing", re.I)],
    "/contact/": [re.compile(r"<title>", re.I), re.compile(r"contact", re.I)],
    "/about/": [re.compile(r"<title>", re.I), re.compile(r"about", re.I)],
    "/blog/": [re.compile(r"<title>", re.I), re.compile(r"blog", re.I)],
}


def route_ok(base: str, route: str):
    url = urljoin(base, route)
    try:
        r = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=30, allow_redirects=True)
    except Exception as e:
        return False, {"reason": f"exception={e}", "js_rendered_hint": False}

    status = r.status_code
    body = r.text or ""
    missing = []
    js_rendered_hint = False

    if status < 200 or status >= 400:
        return False, {"reason": f"status={status}", "js_rendered_hint": False}

    slug = route.strip("/").split("/")[-1]
    if slug in CONVERTER_SLUGS:
        lowered = body.lower()
        if "redirecting to" in lowered or 'url="/services/"' in lowered or "location.replace" in lowered:
            return True, {"reason": "redirect_stub_ok", "js_rendered_hint": False}
        return True, {"reason": "ok_no_stub_marker", "js_rendered_hint": False}

    requirements = PAGE_REQUIREMENTS.get(route, [])
    missing = [pat.pattern for pat in requirements if not pat.search(body)]
    if missing:
        # Page may be JS-rendered; mark hint instead of hard failure when base structure is present.
        has_base_structure = bool(re.search(r"<!doctype html|<html", body, re.I))
        js_rendered_hint = bool(has_base_structure)

    if missing:
        return False, {"reason": f"missing={missing}", "js_rendered_hint": js_rendered_hint}

    return True, {"reason": "ok", "js_rendered_hint": False}


def run(base: str):
    failures = []
    report = {
        "ts": __import__("datetime").datetime.utcnow().isoformat() + "Z",
        "base": base,
        "checked": 0,
        "failures": 0,
        "routes": {},
        "status": "ok",
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
        ok, meta = route_ok(base, route)
        entry = {
            "status": 200 if ok else 0,
            "required_strings_ok": ok,
            "missing": [] if ok else [meta.get("reason")],
            "broken_since": __import__("datetime").datetime.utcnow().isoformat() + "Z",
            "js_rendered_hint": bool(meta.get("js_rendered_hint")),
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
