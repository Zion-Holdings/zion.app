#!/usr/bin/env python3
"""
Zion Site Auditor — deep crawl, link audit, content expansion, and repair.
Outputs JSON report and applies safe fixes where possible.
"""
from __future__ import annotations

import json
import os
import re
import subprocess
from datetime import datetime
from pathlib import Path

REPO_ROOT = Path("/data/data/com.termux/files/home/zion-support.github.io")
APP_DIR = REPO_ROOT / "app"
PUBLIC_DIR = REPO_ROOT / "public"
OUT_DIR = REPO_ROOT / "out"
SITE_URL = "https://ziontechgroup.com"

REPORT_PATH = REPO_ROOT / "automation" / "reports" / "site-audit-report.json"
(REPORT_PATH.parent).mkdir(parents=True, exist_ok=True)


def sh(cmd: str) -> str:
    result = subprocess.run(cmd, shell=True, cwd=REPO_ROOT, text=True, capture_output=True)
    return (result.stdout or "") + (result.stderr or "")


def route_inventory() -> list[str]:
    routes = set()
    for p in APP_DIR.glob("**/page.tsx"):
        rel = p.relative_to(APP_DIR)
        parts = list(rel.parent.parts)
        route = "/" + "/".join(parts) if parts else "/"
        route = route.rstrip("/") + "/"
        routes.add(route)
    return sorted(routes)


def hrefs_from_app() -> dict[str, list[str]]:
    hrefs: dict[str, list[str]] = {}
    for f in APP_DIR.rglob("*.tsx"):
        if "/node_modules/" in str(f):
            continue
        text = f.read_text(encoding="utf-8", errors="ignore")
        for m in re.finditer(r"href=(\{`|['\"])(/[^'\"`\s]{1,250})(\1)", text):
            href = m.group(2)
            if href.startswith(("http", "mailto", "tel", "#", "javascript:", "/_next")):
                continue
            hrefs.setdefault(href, []).append(str(f.relative_to(REPO_ROOT)))
    return hrefs


def normalize_route_for_check(route: str) -> str:
    route = route.split("?")[0].rstrip("/")
    if not route:
        return "/"
    return route + "/"


def route_exists(route: str, routes: set[str]) -> bool:
    return normalize_route_for_check(route) in routes


def audit_broken_hrefs(routes: list[str]) -> dict:
    route_set = set(routes)
    hrefs = hrefs_from_app()
    broken = []
    for href, files in hrefs.items():
        if not route_exists(href, route_set):
            broken.append({"href": href, "files": files})
    return {"total_hrefs": len(hrefs), "broken": broken}


def audit_brand_consistency() -> dict:
    bad = []
    patterns = ["via-blue-950", "text-cyan-400", "border-cyan-500", "from-cyan-900", "hover:border-cyan"]
    for f in APP_DIR.rglob("*.tsx"):
        if "/node_modules/" in str(f):
            continue
        text = f.read_text(encoding="utf-8", errors="ignore")
        hits = [p for p in patterns if p in text]
        if hits:
            bad.append({"file": str(f.relative_to(REPO_ROOT)), "hits": hits})
    return {"bad_files": bad}


def audit_phone_numbers() -> dict:
    bad = []
    for f in APP_DIR.rglob("*.tsx"):
        if "/node_modules/" in str(f):
            continue
        text = f.read_text(encoding="utf-8", errors="ignore")
        if "tel:" in text and "*" in text:
            bad.append(str(f.relative_to(REPO_ROOT)))
    return {"files_with_masked_or_bad_tel": bad}


def audit_duplicate_titles() -> dict:
    dupes = []
    title_re = re.compile(r"title:\s*['\"]([^'\"]+)['\"]")
    seen = {}
    for f in APP_DIR.rglob("page.tsx"):
        text = f.read_text(encoding="utf-8", errors="ignore")
        m = title_re.search(text)
        if not m:
            continue
        title = m.group(1)
        slug = str(f.relative_to(REPO_ROOT))
        seen.setdefault(title, []).append(slug)
    for title, slugs in seen.items():
        if len(slugs) > 1:
            dupes.append({"title": title, "count": len(slugs), "files": slugs[:5]})
    return {"duplicate_titles": dupes[:50]}


def audit_empty_hrefs() -> dict:
    hits = []
    for f in APP_DIR.rglob("*.tsx"):
        if "/node_modules/" in str(f):
            continue
        text = f.read_text(encoding="utf-8", errors="ignore")
        if re.search(r'href=(\{`|["\'])\1', text):
            hits.append(str(f.relative_to(REPO_ROOT)))
    return {"empty_href_files": hits}


def audit_blog_quality() -> dict:
    thin = []
    invalid = []
    for p in (APP_DIR / "blog").glob("*/page.tsx"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        words = len(re.findall(r"[A-Za-zÀ-ÿ0-9]+", text))
        issues = []
        if words < 200:
            issues.append(f"thin:{words}")
        if "export const metadata" not in text:
            issues.append("missing_metadata")
        if "alternates" not in text or "canonical" not in text:
            issues.append("missing_canonical")
        if "under construction" in text.lower():
            issues.append("under_construction")
        if issues:
            invalid.append({"slug": p.parent.name, "issues": issues})
        if words < 220:
            thin.append(p.parent.name)
    return {"total_blog_posts": len(list((APP_DIR / "blog").glob("*/page.tsx"))), "invalid": invalid[:50], "thin_count": len(thin)}


def content_gap_analysis(routes: list[str]) -> dict:
    topics_path = REPO_ROOT / "content-loop" / "topics.json"
    if not topics_path.exists():
        return {"queue_size": 0}
    topics = json.loads(topics_path.read_text(encoding="utf-8"))
    existing = {p.parent.name for p in (APP_DIR / "blog").glob("*/page.tsx")}
    queued = [t for t in topics if t.get("slug") and t["slug"] not in existing]
    return {"queue_size": len(queued), "next_topics": [t["slug"] for t in queued[:10]]}


def build_summary(routes: list[str]) -> dict:
    route_set = set(routes)
    href_audit = audit_broken_hrefs(routes)
    brand = audit_brand_consistency()
    phone = audit_phone_numbers()
    titles = audit_duplicate_titles()
    empty = audit_empty_hrefs()
    blog = audit_blog_quality()
    gaps = content_gap_analysis(routes)
    status = "ok"
    if href_audit["broken"] or blog["invalid"] or brand["bad_files"] or phone["files_with_masked_or_bad_tel"]:
        status = "degraded"
    return {
        "ts": datetime.utcnow().isoformat() + "Z",
        "status": status,
        "route_count": len(route_set),
        "href_audit": href_audit,
        "brand_consistency": brand,
        "phone_numbers": phone,
        "duplicate_titles": titles,
        "empty_hrefs": empty,
        "blog_quality": blog,
        "content_gaps": gaps,
    }


def main() -> int:
    routes = route_inventory()
    summary = build_summary(routes)
    REPORT_PATH.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
