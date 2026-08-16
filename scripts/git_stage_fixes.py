#!/usr/bin/env python3
"""Add specific files to git and commit."""
import subprocess
import sys

ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"

files_to_add = [
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
]

# Add blog pages
import os
blog_dir = os.path.join(ROOT, "app", "blog")
for slug in [
    "ai-for-data-engineering-and-pipeline-automation",
    "ai-for-devops-and-incident-response",
    "ai-for-it-operations-and-observability",
    "ai-for-managed-it-and-enterprise-support",
    "ai-for-network-operations-and-telecom-automation",
    "ai-for-project-management-and-delivery",
    "ai-for-quality-assurance-and-testing",
    "ai-for-revenue-operations-and-business-intelligence",
    "ai-for-sales-automation-and-crm-intelligence",
    "ai-for-security-operations-and-compliance",
    "ai-for-service-desk-and-support-automation",
    "ai-predictive-maintenance-for-infrastructure",
]:
    fpath = os.path.join("app", "blog", slug, "page.tsx")
    if os.path.exists(os.path.join(ROOT, fpath)):
        files_to_add.append(fpath)

for f in files_to_add:
    result = subprocess.run(["git", "add", f], cwd=ROOT, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Failed to add {f}: {result.stderr}")

# Also add the .cjs files we created
for cjs in ["scripts/find_broken_canonicals.cjs", "scripts/fix_service_pages.cjs", "scripts/generate-public-sitemap.cjs"]:
    fpath = os.path.join(ROOT, cjs)
    if os.path.exists(fpath):
        subprocess.run(["git", "add", cjs], cwd=ROOT, capture_output=True, text=True)

# Check git status
result = subprocess.run(["git", "status", "--short"], cwd=ROOT, capture_output=True, text=True)
print("=== Git Status ===")
print(result.stdout[:3000])
