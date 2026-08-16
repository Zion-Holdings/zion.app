#!/usr/bin/env python3
"""Create remaining missing blog pages and verify."""
import os
import re

ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"
BLOG_INDEX = os.path.join(ROOT, "app", "blog", "page.tsx")
APP_BLOG = os.path.join(ROOT, "app", "blog")

with open(BLOG_INDEX) as f:
    content = f.read()

posts = re.findall(r"\{ slug: '([^']+)', title: '([^']+)' \}", content)

missing = []
for slug, title in posts:
    page_path = os.path.join(APP_BLOG, slug, "page.tsx")
    if not os.path.exists(page_path):
        missing.append((slug, title))

print(f"Total posts in index: {len(posts)}")
print(f"Still missing: {len(missing)}")
for s, t in missing:
    print(f"  {s}: {t}")
