#!/usr/bin/env python3
"""Static QA checks for book alias, thank-you, first-paint CSS, Discovery CTAs."""
from __future__ import annotations

import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
fail = 0


def check(ok: bool, msg: str) -> None:
    global fail
    if ok:
        print("OK", msg)
    else:
        print("FAIL", msg)
        fail += 1


def read(rel: str) -> str:
    return (PUBLIC / rel).read_text(encoding="utf-8", errors="ignore")


def main() -> int:
    book = read("book/index.html")
    check("/booking/" in book, "book alias mentions /booking/")
    check("refresh" in book.lower() or "location.replace" in book, "book is a durable redirect")

    thanks = read("success-stories/index.html")
    check("Pagamento recebido" in thanks, "success-stories is a thank-you page")
    check("<style" in thanks, "success-stories has inline CSS")
    check((PUBLIC / "success-stories.html").is_file(), "success-stories.html no-slash alias exists")

    contact = read("contact/index.html")
    check("<style" in contact and "/assets/css/site.css" in contact, "contact has inline + linked site.css")
    plans = read("plans/index.html")
    check("<style" in plans, "plans has inline CSS")

    services = read("services/index.html")
    check('href="/discovery/">Book $99' in services, "services nav Book $99 → /discovery/")
    check('href="/discovery/">Book $99 Discovery' in services, "services CTA Book $99 Discovery → /discovery/")

    leftover = []
    skip = {
        "managed-it-services",
        "finops-consulting",
        "fintech-it-ai",
        "autonomous-ai-agents",
        "healthcare-it-hipaa",
        "ai-consulting-services",
    }
    for path in PUBLIC.rglob("*.html"):
        rel = path.relative_to(PUBLIC).as_posix()
        if rel.split("/", 1)[0] in skip:
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        if 'href="/book/"' in text or "href='/book/'" in text:
            leftover.append(rel)
    check(not leftover, "no leftover href=/book/ in public HTML" + (": " + ", ".join(leftover[:8]) if leftover else ""))

    booking = read("booking/index.html")
    check("paid-banner" in booking and "paid" in booking, "booking honors ?paid=discovery")

    check((PUBLIC / "assets/css/site.css").is_file(), "assets/css/site.css exists")
    check((PUBLIC / "css/site.css").is_file(), "css/site.css fallback exists")
    check((PUBLIC / "privacy/index.html").is_file(), "public/privacy wins over Next leftover")
    check("/_next/static/css" not in read("privacy/index.html"), "privacy is not a Next export")
    check("/_next/static/css" not in read("contact/index.html"), "contact is not a Next export")

    if fail:
        print(f"{fail} check(s) failed")
        return 1
    print("static QA green")
    return 0


if __name__ == "__main__":
    sys.exit(main())
