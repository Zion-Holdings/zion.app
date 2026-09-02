#!/usr/bin/env python3
"""Regression guards for the Zion Tech Group static site tooling pipeline."""
from __future__ import annotations

import os
import re
import subprocess
import unittest
import pathlib
import xml.dom.minidom

ROOT = pathlib.Path(__file__).resolve().parent.parent
SCRIPTS = ROOT / "scripts"
PUBLIC = ROOT / "public"
TOOLS_DIR = PUBLIC / "tools"
SITEMAP = PUBLIC / "sitemap.xml"
PAGE_TSX = ROOT / "app" / "tools" / "page.tsx"


def _run_sync() -> None:
    subprocess.check_call([os.sys.executable, str(SCRIPTS / "sync_tools_page.py")], cwd=ROOT)


class TestSyncIdempotency(unittest.TestCase):
    def test_first_run_succeeds(self) -> None:
        _run_sync()

    def test_page_stable_across_runs(self) -> None:
        first = PAGE_TSX.read_bytes()
        for _ in range(2):
            _run_sync()
        self.assertEqual(first, PAGE_TSX.read_bytes())

    def test_sitemap_stable_across_runs(self) -> None:
        first = SITEMAP.read_bytes()
        for _ in range(2):
            _run_sync()
        self.assertEqual(first, SITEMAP.read_bytes())


class TestSitemapValidXML(unittest.TestCase):
    def test_sitemap_parses_as_xml(self) -> None:
        xml.dom.minidom.parse(str(SITEMAP))

    def test_sitemap_ends_with_urlset(self) -> None:
        self.assertTrue(SITEMAP.read_text().rstrip().endswith("</urlset>"))


class TestSitemapDiskConsistency(unittest.TestCase):
    def test_all_tools_on_disk_are_in_sitemap(self) -> None:
        sitemap_text = SITEMAP.read_text()
        for tool in sorted(TOOLS_DIR.iterdir()):
            if not (tool / "index.html").exists():
                continue
            self.assertTrue(
                f"/tools/{tool.name}/" in sitemap_text,
                msg=f"{tool.name} missing from sitemap",
            )

    def test_sitemap_has_no_orphan_tool_entries(self) -> None:
        for match in re.finditer(r"/tools/([a-z0-9-]+)/", SITEMAP.read_text()):
            slug = match.group(1)
            if slug in {'page', 'index', ''}:
                continue
            self.assertTrue(
                (TOOLS_DIR / slug / "index.html").exists(),
                msg=f"sitemap lists /tools/{slug} but dir is missing",
            )


class TestToolPageIntegrity(unittest.TestCase):
    def test_every_tool_has_basic_html_structure(self) -> None:
        for tool in sorted(TOOLS_DIR.iterdir()):
            if not (tool / "index.html").exists():
                continue
            src = (tool / "index.html").read_text(errors="replace")
            self.assertIn("<", src, msg=f"{tool.name} has no HTML")


class TestNoBrokenToolLinks(unittest.TestCase):
    def test_tool_pages_dont_reference_nonexistent_tools(self) -> None:
        for tool in sorted(TOOLS_DIR.iterdir()):
            if not (tool / "index.html").exists():
                continue
            src = (tool / "index.html").read_text(errors="replace")
            for match in re.finditer(r"/tools/([a-z0-9-]+)/", src):
                target = match.group(1)
                if target in {"page", "index"}:
                    continue
                self.assertTrue(
                    (TOOLS_DIR / target / "index.html").exists(),
                    msg=f"{tool.name} links to /tools/{target}/ which is missing",
                )

    def test_no_self_referencing_broken_links(self) -> None:
        for tool in sorted(TOOLS_DIR.iterdir()):
            if not (tool / "index.html").exists():
                continue
            src = (tool / "index.html").read_text(errors="replace")
            self.assertNotIn('href="/tools//"', src, msg=f"{tool.name} has empty tool link")


class TestSitemapCoverage(unittest.TestCase):
    def test_sitemap_has_tool_entries(self) -> None:
        self.assertIn("/tools/", SITEMAP.read_text())

    def test_sitemap_has_service_entries(self) -> None:
        self.assertIn("/services/", SITEMAP.read_text())

    def test_sitemap_file_exists(self) -> None:
        self.assertTrue(SITEMAP.exists())

    def test_sitemap_has_root_entry(self) -> None:
        self.assertIn("https://ziontechgroup.com/", SITEMAP.read_text())

    def test_sitemap_has_tools_index(self) -> None:
        self.assertIn("/tools/", SITEMAP.read_text())


if __name__ == "__main__":
    unittest.main()
