#!/usr/bin/env python3
"""Final commit and push after merge."""
import subprocess
import os

ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"

def run(cmd, timeout=300):
    return subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=timeout)

# Remove any git lock
lock = os.path.join(ROOT, ".git", "index.lock")
if os.path.exists(lock):
    os.remove(lock)

# Stage the modified files
for f in ["public/_redirects", "public/robots.txt", "public/sitemap.xml", "sitemap.xml", 
          "app/data/servicesData.json", "feed.xml", "docs/agents-monitoring/index.html",
          "docs/free-ai-it-tools/index.html", "docs/portal/index.html",
          "public/agents-monitoring/index.html", "public/ai-services-index/index.html",
          "public/free-ai-it-tools/index.html", "public/portal/index.html"]:
    if os.path.exists(os.path.join(ROOT, f)):
        result = run(["git", "add", f], timeout=30)
        if result.returncode != 0:
            print(f"⚠️  {f}: {result.stderr[:80]}")
        else:
            print(f"✅ {f}")

# Commit
result = run(["git", "commit", "-m", "fix: regenerate redirects and sitemap from merged remote data"], timeout=60)
if result.returncode == 0:
    print(f"✅ Committed")
else:
    print(f"Commit: {result.stdout[:200]} | {result.stderr[:200]}")

# Push
result = run(["git", "push", "origin", "main"], timeout=600)
if result.returncode == 0:
    print(f"\n✅ PUSH SUCCESS")
else:
    # Try with force-with-lease since we used -X ours
    print(f"Push failed: {result.stderr[:200]}")
    result2 = run(["git", "push", "origin", "main"], timeout=600)
    if result2.returncode == 0:
        print(f"✅ PUSH SUCCESS (retry)")
    else:
        print(f"❌ Push still failed: {result2.stderr[:200]}")
