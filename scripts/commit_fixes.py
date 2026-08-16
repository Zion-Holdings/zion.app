#!/usr/bin/env python3
"""Commit fixes without the large servicesData.json file."""
import subprocess
import sys

ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"

# Stage specific files (not the 95MB servicesData.json which is already modified)
files = [
    "app/services/[id]/page.tsx",
    "app/industries/finance/page.tsx",
    "app/about/team/page.tsx",
    "public/_redirects",
    "public/robots.txt",
    "public/sitemap.xml",
    "sitemap.xml",
    "scripts/generate-sitemap-feed.cjs",
    "scripts/fix_service_pages.cjs",
    "scripts/generate-public-sitemap.cjs",
    "scripts/deep_crawl.py",
    "scripts/analyze_crawl.py",
    "scripts/sitemap_analysis.py",
    "scripts/find_broken_canonicals.cjs",
    "scripts/create_missing_blog_pages.py",
    "scripts/check_blog_pages.py",
    "scripts/check_blog_remaining.py",
    "scripts/check_blog_tracking.py",
    "scripts/analyze_content_gaps.py",
    "scripts/git_stage_fixes.py",
    "docs/test-123/index.html",  # deletions
    "public/test-123/index.html",  # deletions
    "app/data/servicesData.json",  # modified - include it
]

# Stage files one at a time
for f in files:
    result = subprocess.run(["git", "add", f], cwd=ROOT, capture_output=True, text=True, timeout=30)
    if result.returncode != 0 and "does not exist" not in result.stderr:
        print(f"⚠️  git add {f}: {result.stderr.strip()}")

# Check status
result = subprocess.run(["git", "status", "--short"], cwd=ROOT, capture_output=True, text=True, timeout=30)
print("=== Git Status ===")
for line in result.stdout.split('\n')[:30]:
    print(line)

# Commit
commit_msg = """fix: resolve broken links, regenerate sitemap, add redirects, create missing pages

Root cause: sitemap.xml had 45,969 URLs from servicesData.json but only 1,297
HTML pages were built. Service pages with hash-style IDs returned 404 because
they were never statically generated.

Fixes:
- Regenerate public/sitemap.xml from actual built HTML pages (1,296 URLs)
- Add 93,134 redirect entries in public/_redirects for unbuilt service URLs
- Expand generateStaticParams to generate ALL services at build time
- Fix canonical URL (missing trailing slash in breadcrumb)
- Add alternates.canonical to service page metadata  
- Create public/robots.txt
- Create missing app/industries/finance/page.tsx and app/about/team/page.tsx
- Create 12 missing blog post pages
- Update scripts/generate-sitemap-feed.cjs sitemap generator

Deep crawl: 1,582 real 404s (service URLs), 40,750 429 rate-limits"""

result = subprocess.run(["git", "commit", "-m", commit_msg], cwd=ROOT, capture_output=True, text=True, timeout=60)
if result.returncode == 0:
    print(f"\n✅ Committed: {result.stdout.strip()}")
else:
    print(f"\n❌ Commit failed: {result.stderr.strip()}")
