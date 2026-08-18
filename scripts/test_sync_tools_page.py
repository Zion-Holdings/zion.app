#!/usr/bin/env python3
"""Behaviour tests for scripts/sync_tools_page.py.

Runs the real script against a throwaway copy of the repo layout in a temp
directory, so the assertions exercise actual file I/O rather than mocks.

Usage: python3 scripts/test_sync_tools_page.py
Exit code 0 = all pass.
"""
import os
import re
import shutil
import subprocess
import sys
import tempfile
import xml.dom.minidom

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRIPT_SRC = os.path.join(REPO, "scripts", "sync_tools_page.py")

PAGE_TEMPLATE = """import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = { title: 'Tools' };

export default function ToolsPage() {
  return (
<>
    <StandardPage title="Developer Tools">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
%(cards)s
      </div>

      <div className="mt-12">keep me</div>
    </StandardPage>
  </>
  );
}
"""

SITEMAP_TEMPLATE = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://ziontechgroup.com/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://ziontechgroup.com/tools/</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>
%(tools)s</urlset>
"""

_results = []


def check(name, cond, detail=""):
    _results.append((name, bool(cond), detail))
    print(("  PASS " if cond else "  FAIL ") + name + (("\n        " + detail) if (detail and not cond) else ""))


def make_fixture(tmp, tool_slugs, existing_cards="", existing_tool_urls=""):
    """Build a minimal repo layout and return its root."""
    root = os.path.join(tmp, "repo")
    os.makedirs(os.path.join(root, "scripts"))
    os.makedirs(os.path.join(root, "app", "tools"))
    os.makedirs(os.path.join(root, "public", "tools"))
    shutil.copy(SCRIPT_SRC, os.path.join(root, "scripts", "sync_tools_page.py"))

    for slug in tool_slugs:
        d = os.path.join(root, "public", "tools", slug)
        os.makedirs(d)
        with open(os.path.join(d, "index.html"), "w", encoding="utf-8") as fh:
            fh.write(
                '<!DOCTYPE html><html><head><meta name="description" '
                'content="Description for %s.">'
                "</head><body>x</body></html>" % slug
            )

    with open(os.path.join(root, "app", "tools", "page.tsx"), "w", encoding="utf-8") as fh:
        fh.write(PAGE_TEMPLATE % {"cards": existing_cards})
    with open(os.path.join(root, "public", "sitemap.xml"), "w", encoding="utf-8") as fh:
        fh.write(SITEMAP_TEMPLATE % {"tools": existing_tool_urls})
    return root


def run_sync(root):
    proc = subprocess.run(
        [sys.executable, os.path.join(root, "scripts", "sync_tools_page.py")],
        capture_output=True, text=True,
    )
    return proc


def read(root, *parts):
    with open(os.path.join(root, *parts), encoding="utf-8") as fh:
        return fh.read()


def main():
    print("--- every tool on disk gets exactly one card and one sitemap entry ---")
    with tempfile.TemporaryDirectory() as tmp:
        slugs = ["alpha-tool", "beta-tool", "gamma-tool"]
        root = make_fixture(tmp, slugs)
        proc = run_sync(root)
        check("script exits 0", proc.returncode == 0, proc.stderr)
        page = read(root, "app", "tools", "page.tsx")
        sitemap = read(root, "public", "sitemap.xml")
        for slug in slugs:
            check("card for %s" % slug, page.count('href="/tools/%s/"' % slug) == 1)
            check("sitemap entry for %s" % slug,
                  sitemap.count("/tools/%s/</loc>" % slug) == 1)
        check("no extra cards", len(re.findall(r'href="/tools/[a-z-]+/"', page)) == 3)
        check("unrelated page content preserved", "keep me" in page)
        check("non-tool sitemap urls preserved",
              "https://ziontechgroup.com/</loc>" in sitemap
              and "https://ziontechgroup.com/tools/</loc>" in sitemap)

    print("--- duplicate and stale cards are removed ---")
    with tempfile.TemporaryDirectory() as tmp:
        dupes = (
            '        <a href="/tools/alpha-tool/">dup1</a>\n'
            '        <a href="/tools/alpha-tool/">dup2</a>\n'
            '        <a href="/tools/deleted-tool/">stale</a>'
        )
        stale_urls = (
            "  <url><loc>https://ziontechgroup.com/tools/deleted-tool/</loc></url>\n"
            "  <url><loc>https://ziontechgroup.com/tools/alpha-tool/</loc></url>\n"
            "  <url><loc>https://ziontechgroup.com/tools/alpha-tool/</loc></url>\n"
        )
        root = make_fixture(tmp, ["alpha-tool"], dupes, stale_urls)
        run_sync(root)
        page = read(root, "app", "tools", "page.tsx")
        sitemap = read(root, "public", "sitemap.xml")
        check("duplicate card collapsed to one",
              page.count('href="/tools/alpha-tool/"') == 1)
        check("stale card removed", 'href="/tools/deleted-tool/"' not in page)
        check("duplicate sitemap entry collapsed",
              sitemap.count("/tools/alpha-tool/</loc>") == 1)
        check("stale sitemap entry removed", "deleted-tool" not in sitemap)

    print("--- idempotency: a second and third run change nothing ---")
    with tempfile.TemporaryDirectory() as tmp:
        root = make_fixture(tmp, ["alpha-tool", "beta-tool"])
        run_sync(root)
        first_page = read(root, "app", "tools", "page.tsx")
        first_map = read(root, "public", "sitemap.xml")
        out2 = run_sync(root)
        second_page = read(root, "app", "tools", "page.tsx")
        second_map = read(root, "public", "sitemap.xml")
        run_sync(root)
        third_page = read(root, "app", "tools", "page.tsx")
        third_map = read(root, "public", "sitemap.xml")
        check("page stable on rerun", first_page == second_page == third_page)
        check("sitemap stable on rerun", first_map == second_map == third_map)
        check("rerun reports already in sync", "already in sync" in out2.stdout, out2.stdout)

    print("--- sitemap stays well-formed XML and lines never join ---")
    with tempfile.TemporaryDirectory() as tmp:
        root = make_fixture(tmp, ["alpha-tool", "beta-tool", "gamma-tool"])
        run_sync(root)
        path = os.path.join(root, "public", "sitemap.xml")
        try:
            xml.dom.minidom.parse(path)
            check("sitemap parses as XML", True)
        except Exception as exc:  # noqa: BLE001
            check("sitemap parses as XML", False, str(exc))
        sitemap = read(root, "public", "sitemap.xml")
        check("no two <url> elements share a line", "</url>  <url>" not in sitemap)
        check("closing urlset intact", sitemap.rstrip().endswith("</urlset>"))

    print("--- directories without index.html are ignored ---")
    with tempfile.TemporaryDirectory() as tmp:
        root = make_fixture(tmp, ["alpha-tool"])
        os.makedirs(os.path.join(root, "public", "tools", "empty-dir"))
        run_sync(root)
        page = read(root, "app", "tools", "page.tsx")
        check("empty dir produces no card", 'href="/tools/empty-dir/"' not in page)

    print("--- unknown slug falls back to its meta description ---")
    with tempfile.TemporaryDirectory() as tmp:
        root = make_fixture(tmp, ["totally-new-widget"])
        run_sync(root)
        page = read(root, "app", "tools", "page.tsx")
        check("fallback title is title-cased", "Totally New Widget" in page)
        check("fallback description read from the page",
              "Description for totally-new-widget." in page)

    print("--- JSX-unsafe characters in descriptions are escaped ---")
    with tempfile.TemporaryDirectory() as tmp:
        root = make_fixture(tmp, ["risky-tool"])
        p = os.path.join(root, "public", "tools", "risky-tool", "index.html")
        with open(p, "w", encoding="utf-8") as fh:
            fh.write('<meta name="description" content="A &amp; B <c> stuff">')
        run_sync(root)
        page = read(root, "app", "tools", "page.tsx")
        card = [ln for ln in page.splitlines() if "risky" in ln.lower() or "stuff" in ln]
        joined = "\n".join(card)
        check("no raw < in generated description", "<c>" not in joined, joined)
        check("ampersand escaped", "&amp;" in joined, joined)

    print("--- live repo: every linked tool exists on disk (no orphan links) ---")
    live_page = os.path.join(REPO, "app", "tools", "page.tsx")
    live_tools = os.path.join(REPO, "public", "tools")
    if os.path.isfile(live_page) and os.path.isdir(live_tools):
        src = read(REPO, "app", "tools", "page.tsx")
        linked = sorted(set(re.findall(r'href="/tools/([a-z0-9-]+)/"', src)))
        on_disk = sorted(
            d for d in os.listdir(live_tools)
            if os.path.isfile(os.path.join(live_tools, d, "index.html"))
        )
        missing = [s for s in linked if s not in on_disk]
        unlinked = [s for s in on_disk if s not in linked]
        check("no card points at a nonexistent tool", not missing, "missing: %s" % missing)
        check("every tool on disk is linked", not unlinked, "unlinked: %s" % unlinked)
        check("at least one tool is linked", len(linked) > 0)
    else:
        check("live repo layout present", False,
              "expected app/tools/page.tsx and public/tools/")

    print("--- no app route shadows a static tool page with a dead stub ---")
    live_app_tools = os.path.join(REPO, "app", "tools")
    live_tools = os.path.join(REPO, "public", "tools")
    if os.path.isdir(live_app_tools) and os.path.isdir(live_tools):
        shadowed = []
        for slug in sorted(os.listdir(live_app_tools)):
            route = os.path.join(live_app_tools, slug, "page.tsx")
            static = os.path.join(live_tools, slug, "index.html")
            if not (os.path.isfile(route) and os.path.isfile(static)):
                continue
            src = open(route, encoding="utf-8", errors="replace").read()
            interactive = any(
                marker in src
                for marker in ("use client", "useState", "onClick", "addEventListener")
            )
            if not interactive:
                shadowed.append(slug)
        # A Next.js app route wins over public/, so a non-interactive route on the
        # same slug as a working static tool serves users a dead page.
        check("no dead-stub route shadows a working tool", not shadowed,
              "shadowed: %s" % shadowed)
    else:
        check("app/tools and public/tools present", False, "missing one of the directories")

    total = len(_results)
    failed = [r for r in _results if not r[1]]
    print("\n%d passed, %d failed" % (total - len(failed), len(failed)))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
