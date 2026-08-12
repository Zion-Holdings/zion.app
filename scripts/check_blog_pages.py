#!/usr/bin/env python3
"""Check if blog posts referenced in app/blog/page.tsx exist as static pages."""
import os
import re

BLOG_INDEX = "/Users/klebergarciaalcatrao/zion-support.github.io/app/blog/page.tsx"
PUBLIC_BLOG = "/Users/klebergarciaalcatrao/zion-support.github.io/public/blog"

with open(BLOG_INDEX) as f:
    content = f.read()

# Extract slugs from the page
slugs = re.findall(r"slug: '([^']+)'", content)
print(f"Blog posts referenced in index: {len(slugs)}")

missing = []
existing = []
for slug in slugs:
    path = os.path.join(PUBLIC_BLOG, slug)
    if os.path.exists(path) and os.path.exists(os.path.join(path, "index.html")):
        existing.append(slug)
    else:
        missing.append(slug)

print(f"  Existing: {len(existing)}")
print(f"  Missing: {len(missing)}")

for s in missing:
    print(f"  MISSING: /blog/{s}/")
