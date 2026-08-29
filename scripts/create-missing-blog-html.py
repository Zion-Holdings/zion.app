#!/usr/bin/env python3
"""Create missing blog post HTML and push everything to gh-pages."""
from pathlib import Path
import json, re, subprocess

repo = Path("/Users/miami2/zion-support.github.io")
public = repo / "public"

# Read sitemap to find all blog URLs
with open(repo / "sitemap.xml") as f:
    content = f.read()
urls = re.findall(r'<loc>(.*?)</loc>', content)
blog_urls = [u for u in urls if '/blog/' in u and u.rstrip('/') != 'https://ziontechgroup.com/blog/']
blog_slugs = [u.replace('https://ziontechgroup.com/blog/', '').rstrip('/') for u in blog_urls]
blog_slugs = [s for s in blog_slugs if s]  # Remove empty

print(f"Blog slugs in sitemap: {len(blog_slugs)}")

# Check which have local HTML
local_slugs = set()
for d in (public / "blog").iterdir():
    if d.is_dir():
        slug = d.name
        if (d / "index.html").exists():
            local_slugs.add(slug)

missing_html = [s for s in blog_slugs if s not in local_slugs]
print(f"Missing local HTML: {len(missing_html)}")
if missing_html:
    print(f"Missing: {missing_html}")

# Check blogPosts.json for article_html
with open(repo / "app" / "data" / "blogPosts.json") as f:
    posts = json.load(f)

posts_by_slug = {p['slug']: p for p in posts}

# Create HTML for missing blog posts that have article_html
created = 0
for slug in missing_html:
    post = posts_by_slug.get(slug)
    if post and post.get('article_html'):
        html_dir = public / "blog" / slug
        html_dir.mkdir(parents=True, exist_ok=True)
        
        # Build rich HTML from article_html
        article = post['article_html']
        title = post.get('title', slug)
        desc = post.get('description', '')
        
        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{desc}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://ziontechgroup.com/blog/{slug}/">
</head>
<body>
  <header>
    <div class="wrap">
      <a href="/" class="brand">Zion Tech Group</a>
      <nav>
        <a href="/services/">Services</a>
        <a href="/blog/">Blog</a>
        <a href="/contact/">Contact</a>
      </nav>
    </div>
  </header>
  <main>
    <div class="blog-post">
      <nav class="breadcrumb"><a href="/">Home</a> / <a href="/blog/">Blog</a></nav>
      <article>{article}</article>
      <div class="blog-cta">
        <p>Ready to transform your business with AI? <a href="/contact/">Talk to Zion Tech Group</a></p>
      </div>
    </div>
  </main>
  <footer>
    <div class="wrap">
      <p>&copy; 2026 Zion Tech Group.</p>
      <nav>
        <a href="/privacy/">Privacy</a>
        <a href="/terms/">Terms</a>
        <a href="/contact/">Contact</a>
      </nav>
    </div>
  </footer>
</body>
</html>"""
        
        (html_dir / "index.html").write_text(html)
        created += 1
        print(f"Created: {slug} ({len(html)} bytes)")
    else:
        print(f"SKIP (no article_html): {slug}")

print(f"\nCreated {created} blog post HTML files")

# Also create the missing docs/ versions
for slug in missing_html:
    post = posts_by_slug.get(slug)
    if post and post.get('article_html'):
        docs_dir = repo / "docs" / "blog" / slug
        docs_dir.mkdir(parents=True, exist_ok=True)
        (docs_dir / "index.html").write_text((public / "blog" / slug / "index.html").read_text())
        print(f"Copied to docs: {slug}")

print("\n=== Pushing everything to gh-pages ===")
# Add all new files
result = subprocess.run(['git', 'add', '-A'], cwd=str(repo), capture_output=True, text=True)
print(f"git add: exit {result.returncode}")

result = subprocess.run(['git', 'commit', '-m', 'feat: add missing blog post fallback HTML'],
                       cwd=str(repo), capture_output=True, text=True)
print(f"git commit: {'success' if result.returncode == 0 else 'nothing to commit'}")

# Force push main → gh-pages to sync ALL blog files (3979+ files)
result = subprocess.run(['git', 'push', 'origin', 'main:gh-pages', '--force'],
                       cwd=str(repo), capture_output=True, text=True)
print(f"Push main→gh-pages: exit {result.returncode}")

if result.returncode == 0:
    print("SUCCESS: All blog files synced to gh-pages")
else:
    print(f"Error: {result.stderr}")
