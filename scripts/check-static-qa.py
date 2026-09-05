#!/usr/bin/env python3
"""Assert GitHub Pages QA fixes exist in public/ and a prepared out/ tree."""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
CAL = "calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1"
STRIPE_BRL = "buy.stripe.com/9B69AU8NW5dt71t8BG4ZG09"
STRIPE_USD = "buy.stripe.com/8x214o8NW35l5Xp3hm4ZG0b"


def fail(msg: str) -> None:
    print(f"FAIL: {msg}", file=sys.stderr)
    raise SystemExit(1)


def main() -> None:
    required = [
        "book/index.html",
        "booking/index.html",
        "success-stories/index.html",
        "discovery/thanks/index.html",
        "discovery/index.html",
        "contact/index.html",
        "about/index.html",
        "privacy/index.html",
        "cookie-policy/index.html",
        "ai-services/index.html",
        "plans/index.html",
        "css/style.css",
    ]
    for rel in required:
        path = PUBLIC / rel
        if not path.is_file():
            fail(f"missing {rel}")

    book = (PUBLIC / "book/index.html").read_text(encoding="utf-8")
    if "/booking/" not in book:
        fail("book/index.html must send visitors to /booking/")
    if "refresh" not in book.lower() and "location.replace" not in book:
        fail("book/index.html needs a GitHub Pages redirect")

    thanks = (PUBLIC / "success-stories/index.html").read_text(encoding="utf-8")
    if "Pagamento recebido" not in thanks:
        fail("success-stories must confirm payment")
    if CAL not in thanks:
        fail("success-stories must link Calendly Discovery")
    if "/contact/" not in thanks:
        fail("success-stories must link contact")
    if "/css/style.css" not in thanks:
        fail("success-stories must use shared CSS")

    for rel in ("contact/index.html", "about/index.html", "privacy/index.html", "cookie-policy/index.html", "ai-services/index.html", "plans/index.html"):
        html = (PUBLIC / rel).read_text(encoding="utf-8")
        if "/css/style.css" not in html:
            fail(f"{rel} missing /css/style.css")
        if "Zion Tech Group" not in html:
            fail(f"{rel} missing brand/nav")
        if "/_next/static/css/" in html:
            fail(f"{rel} still depends on Next.js CSS")

    disc = (PUBLIC / "discovery/index.html").read_text(encoding="utf-8")
    if STRIPE_BRL not in disc or STRIPE_USD not in disc:
        fail("discovery Stripe CTAs were changed")

    leftovers = []
    for path in PUBLIC.rglob("*.html"):
        text = path.read_text(encoding="utf-8", errors="replace")
        if 'href="/book/"' in text or 'href="/book"' in text or "href='/book/'" in text:
            leftovers.append(str(path.relative_to(PUBLIC)))
    if leftovers:
        fail("leftover /book/ hrefs: " + ", ".join(leftovers))

    import os

    dest = ROOT / "out-qa"
    env = os.environ.copy()
    env["DEST"] = str(dest)
    subprocess.run(["bash", str(ROOT / "scripts/prepare-pages-out.sh")], check=True, cwd=ROOT, env=env)
    for rel in required:
        if not (dest / rel).is_file():
            fail(f"prepared out missing {rel}")
    contact = (dest / "contact/index.html").read_text(encoding="utf-8")
    if "/_next/static/css/" in contact:
        fail("prepared contact still uses Next.js CSS (public/ should win)")
    print("OK: static QA pages, book alias, success-stories, shared CSS, Stripe CTAs")


if __name__ == "__main__":
    main()
