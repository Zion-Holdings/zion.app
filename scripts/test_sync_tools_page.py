#!/usr/bin/env python3
"""Test harness for scripts/sync_tools_page.py.

Validates that the tools page generator produces a well-formed, canonical
page.ts that stays in sync with the tool subdirectories under app/tools/.

Idempotency check: running sync_tools_page.py twice must produce identical
output, so the CI "git diff --quiet" gate is satisfied.

Exits non-zero on any failure so the deploy-to-github-pages CI workflow
fails fast.
"""
import os
import subprocess
import sys
import tempfile

REPO_ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"
TOOLS_DIR = os.path.join(REPO_ROOT, "app", "tools")
PAGE_FILE = os.path.join(TOOLS_DIR, "page.tsx")
SYNC_SCRIPT = os.path.join(REPO_ROOT, "scripts", "sync_tools_page.py")

REQUIRED_DIRS = {"service-recommender", "service-comparison", "ssl-checker"}
REQUIRED_CANONICAL = "/tools/"
REQUIRED_OG_TITLE = "Tools | Zion Tech Group"
REQUIRED_LINKS = [
    "/tools/service-recommender",
    "/tools/service-comparison",
    "/tools/ssl-checker",
    "/services/",
]


def run_sync():
    result = subprocess.run(
        [sys.executable, SYNC_SCRIPT],
        capture_output=True, text=True, cwd=REPO_ROOT,
    )
    if result.returncode != 0:
        print(f"FAIL: sync_tools_page.py exited {result.returncode}")
        print(result.stderr)
        return False
    return True


def assert_true(condition, message):
    if not condition:
        print(f"FAIL: {message}")
        return False
    return True


def test_tools_dir():
    if not assert_true(os.path.isdir(TOOLS_DIR), "app/tools/ directory exists"):
        return False
    subdirs = {d for d in os.listdir(TOOLS_DIR) if os.path.isdir(os.path.join(TOOLS_DIR, d))}
    return assert_true(
        REQUIRED_DIRS.issubset(subdirs),
        f"Required tool dirs present (missing: {REQUIRED_DIRS - subdirs})",
    )


def test_page_exists():
    if not assert_true(os.path.isfile(PAGE_FILE), "app/tools/page.tsx exists"):
        return False
    with open(PAGE_FILE, encoding="utf-8") as f:
        content = f.read()
    checks = [
        (REQUIRED_CANONICAL in content, "canonical alternates present"),
        (REQUIRED_OG_TITLE in content, "metadata title present"),
        (all(link in content for link in REQUIRED_LINKS), "service/recommender links present"),
        ("StandardPage" in content, "StandardPage component imported"),
        ("import Link from 'next/link'" in content, "next/link imported"),
    ]
    ok = True
    for cond, msg in checks:
        if not assert_true(cond, msg):
            ok = False
    return ok


def test_idempotent():
    """Running sync twice must yield identical output."""
    if not run_sync():
        return False
    with open(PAGE_FILE, encoding="utf-8") as f:
        first = f.read()
    if not run_sync():
        return False
    with open(PAGE_FILE, encoding="utf-8") as f:
        second = f.read()
    return assert_true(first == second, "sync output is idempotent (deterministic)")


def test_links_resolve():
    """Every tool slug referenced in the page must map to an existing dir."""
    with open(PAGE_FILE, encoding="utf-8") as f:
        content = f.read()
    import re
    slugs = re.findall(r'"/tools/([^"]+)"', content)
    missing = [s for s in slugs if not os.path.isdir(os.path.join(TOOLS_DIR, s))]
    return assert_true(
        not missing,
        f"All referenced tool slugs have directories (missing: {missing})",
    )


def main():
    # Always regenerate first so we test against current state
    if not run_sync():
        print("FAIL: sync script could not run")
        sys.exit(1)

    tests = [test_tools_dir, test_page_exists, test_idempotent, test_links_resolve]
    if all(t() for t in tests):
        print("PASS: tools page generator tests (4 checks)")
        sys.exit(0)
    sys.exit(1)


if __name__ == "__main__":
    main()
