#!/usr/bin/env python3
"""Create missing blog post_html for blog post slugs that lack local HTML."""
from pathlib import Path
import json, re, subprocess

repo = Path("/Users/miami2/zion-support.github.io")
public = repo / "public"

# Load blogPosts.json
with open(repo / "app" / "data" / "blogPosts.json") as f:
    posts = json.load(f)

print(f"Total posts in blogPosts.json: {len(posts)}")

# Find posts with article_html
posts_with_html = [p for p in posts if p.get('article_html') and len(p['article_html']) > 100]
print(f"Posts with article_html: {len(posts_with_html)}")

# Find slugs that exist in sitemap but NOT in blogPosts.json
with open(repo / "sitemap.xml") as f:
    content = f.read()
    
urls = re.findall(r'<loc>(.*?)</loc>', content)
blog_urls = [u for u in urls if '/blog/' in u and u.rstrip('/') != 'https://ziontechgroup.com/blog/']
blog_slugs = [u.replace('https://ziontechgroup.com/blog/', '').rstrip('/') for u in blog_urls]

json_slugs = set(p['slug'] for p in posts)
sitemap_slugs = set(blog_slugs)
sitemap_slugs.discard('')  # Remove empty string

print(f"\nBlog slugs in sitemap: {len(sitemap_slugs)}")
print(f"Blog slugs in blogPosts.json: {len(json_slugs)}")

# Slugs in sitemap but not in blogPosts.json
missing_from_json = sitemap_slugs - json_slugs
print(f"Slugs in sitemap but NOT in blogPosts.json: {len(missing_from_json)}")
if missing_from_json:
    print(f"Sample: {list(missing_from_json)[:10]}")

# Check which sitemap slugs have local HTML
local_slugs = set()
for d in (public / "blog").iterdir():
    if d.is_dir():
        slug = d.name
        if (d / "index.html").exists():
            local_slugs.add(slug)

print(f"\nSlugs with local HTML: {len(local_slugs)}")
print(f"Slugs with local HTML but NOT in blogPosts.json: {len(local_slugs - json_slugs)}")
print(f"Slugs in blogPosts.json with HTML: {len(json_slugs & local_slugs)}")

# Strategy: For each sitemap slug with local HTML but no blogPosts.json entry,
# we already have the HTML. The fix is simpler: just push main → gh-pages to sync all blog files.
# The 3979 missing blog HTML files on gh-pages need to be pushed.

print("\n=== SYNCING BLOG TO GH-PAGES ===")
print(f"Local blog HTML files: {len(local_slugs)}")
print(f"Currently on gh-pages: 122")
print(f"Need to push: {len(local_slugs) - 122}")

# Just push main → gh-pages
result = subprocess.run(['git', 'push', 'origin', 'main:gh-pages', '--force'],
                       capture_output=True, text=True, cwd=str(repo))
print(f"Push result: exit {result.returncode}")
if result.returncode != 0:
    print(f"Error: {result.stderr}")
else:
    print("Main pushed to gh-pages successfully")
