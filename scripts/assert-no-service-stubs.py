#!/usr/bin/env python3
"""Fail (or report) if assembled Pages out/ still has leftover SKU redirect stubs.

Family A under public/services/** is source of truth. Stubs look like ~850-byte
HTML with title "Not a packaged SKU", meta refresh to /services/, and noindex.
They historically lived on the gh-pages branch and overwrote live when Pages
was build_type=legacy.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

STUB_TITLE = "Not a packaged SKU"
STUB_BODY = "no free consultation"
REFRESH_HINT = 'http-equiv="refresh"'


def is_stub(text: str, size: int) -> bool:
    if STUB_TITLE in text:
        return True
    if size <= 1200 and STUB_BODY in text and REFRESH_HINT in text.lower():
        return True
    if size <= 1200 and 'content="0; url=/services/"' in text.lower().replace(" ", ""):
        # tolerate spacing variants
        return "noindex" in text.lower()
    if size <= 1200 and "content=\"0; url=/services/\"" in text and "noindex" in text.lower():
        return True
    return False


def scan(root: Path) -> list[tuple[str, int]]:
    bad: list[tuple[str, int]] = []
    for base in (root / "services", root / "en" / "services"):
        if not base.is_dir():
            continue
        for path in base.glob("*/index.html"):
            raw = path.read_bytes()
            text = raw.decode("utf-8", errors="ignore")
            if is_stub(text, len(raw)):
                bad.append((str(path.relative_to(root)), len(raw)))
    return bad


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("root", nargs="?", default="out", help="assembled site root (default: out)")
    ap.add_argument("--sample", type=int, default=15, help="max stub paths to print")
    args = ap.parse_args()
    root = Path(args.root)
    if not root.is_dir():
        print(f"ERROR: missing directory {root}", file=sys.stderr)
        return 2
    bad = scan(root)
    if not bad:
        # prove Family A sample present
        samples = [
            "services/ai-automation/index.html",
            "services/cybersecurity/index.html",
            "services/penetration-testing/index.html",
        ]
        for rel in samples:
            p = root / rel
            if not p.is_file():
                print(f"ERROR: expected Family A page missing: {rel}", file=sys.stderr)
                return 2
            size = p.stat().st_size
            text = p.read_text(encoding="utf-8", errors="ignore")
            if size < 2000 or is_stub(text, size):
                print(f"ERROR: {rel} looks like a stub ({size} bytes)", file=sys.stderr)
                return 1
            if not any(x in text for x in ("buy.stripe", "Consulte", "Pay $", "/contact/")):
                print(f"ERROR: {rel} missing Pay/Consulte/contact CTA markers", file=sys.stderr)
                return 1
            print(f"ok {rel} ({size} bytes)")
        print(f"assert-no-service-stubs: PASS under {root}")
        return 0
    print(f"ERROR: found {len(bad)} service stub(s) under {root}", file=sys.stderr)
    for rel, size in bad[: args.sample]:
        print(f"  stub {rel} ({size} bytes)", file=sys.stderr)
    if len(bad) > args.sample:
        print(f"  ... and {len(bad) - args.sample} more", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
