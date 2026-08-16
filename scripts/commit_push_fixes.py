#!/usr/bin/env python3
"""Commit and push the regenerated _redirects file."""
import subprocess

ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"

# Stage the key files
files = [
    "public/_redirects",
    "public/robots.txt",
    "public/sitemap.xml",
    "sitemap.xml",
]

for f in files:
    result = subprocess.run(["git", "add", f], cwd=ROOT, capture_output=True, text=True, timeout=10)
    if result.returncode != 0:
        print(f"⚠️  Failed to add {f}: {result.stderr}")

# Check status
result = subprocess.run(["git", "status", "--short"], cwd=ROOT, capture_output=True, text=True, timeout=30)
print("=== Git Status ===")
print(result.stdout)

# Commit
commit_msg = "fix: restore auto-generated service redirects in _redirects (90K entries)\n\nThe merge with remote/main replaced the auto-generated redirect entries.\nRe-running fix_service_pages.cjs to regenerate all redirect rules for\nunbuilt service URLs, plus sitemap and robots.txt updates."
result = subprocess.run(["git", "commit", "-m", commit_msg], cwd=ROOT, capture_output=True, text=True, timeout=60)
if result.returncode == 0:
    print(f"✅ Committed: {result.stdout.strip()}")
else:
    print(f"❌ Commit failed: {result.stderr.strip()}")
    if "nothing to commit" in result.stderr or "nothing added" in result.stdout:
        print("Nothing to commit - files may already be committed")

# Push
result = subprocess.run(["git", "push", "origin", "main"], cwd=ROOT, capture_output=True, text=True, timeout=120)
if result.returncode == 0:
    print(f"✅ Pushed: {result.stdout.strip()[-200:]}")
else:
    print(f"❌ Push failed: {result.stderr.strip()[-300:]}")
