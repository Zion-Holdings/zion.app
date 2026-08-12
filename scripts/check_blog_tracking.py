#!/usr/bin/env python3
"""Check if blog pages are properly tracked by git."""
import os
import subprocess

ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"
APP_BLOG = os.path.join(ROOT, "app", "blog")

# Find all page.tsx files in app/blog/
pages = []
for root, dirs, files in os.walk(APP_BLOG):
    for f in files:
        if f == "page.tsx":
            rel = os.path.relpath(os.path.join(root, f), ROOT)
            pages.append(rel)

print(f"Total page.tsx files in app/blog/: {len(pages)}")

# Check which are tracked by git
result = subprocess.run(
    ["git", "ls-files", "app/blog/"],
    capture_output=True, text=True, cwd=ROOT
)
tracked = set(result.stdout.strip().split('\n'))
print(f"Tracked by git: {len(tracked)}")

untracked = [p for p in pages if p not in tracked]
print(f"Untracked blog pages: {len(untracked)}")
for p in untracked[:10]:
    print(f"  {p}")
