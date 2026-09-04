#!/usr/bin/env python3
"""Add robots.txt and feed.xml, then push."""
from pathlib import Path
import subprocess

repo = Path("/Users/miami2/zion-support.github.io")

# robots.txt
robots_content = """User-agent: *
Allow: /
Allow: /services/
Allow: /blog/
Allow: /tools/
Allow: /about/
Allow: /contact/
Allow: /pricing/
Disallow: /_next/
Disallow: /.git/

Sitemap: https://ziontechgroup.com/sitemap.xml
"""

(repo / "robots.txt").write_text(robots_content)
print(f"Created robots.txt ({len(robots_content)} bytes)")

# feed.xml (simple RSS-style XML)
feed_content = """<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Zion Tech Group Blog</title>
    <link>https://ziontechgroup.com/blog/</link>
    <description>AI, IT infrastructure, managed services, and technology insights from Zion Tech Group.</description>
    <atom:link href="https://ziontechgroup.com/feed/" rel="self" type="application/rss+xml"/>
    <language>en</language>
  </channel>
</rss>
"""

(repo / "feed.xml").write_text(feed_content)
print(f"Created feed.xml ({len(feed_content)} bytes)")

# Also in public/ and docs/
(repo / "public" / "robots.txt").write_text(robots_content)
(repo / "public" / "feed.xml").write_text(feed_content)
(repo / "docs" / "robots.txt").write_text(robots_content)
(repo / "docs" / "feed.xml").write_text(feed_content)
print("Copied to public/ and docs/")

# Update _redirects to include robots.txt and feed/ as 200 rules
for fpath in [repo / "_redirects", repo / "public" / "_redirects", repo / "docs" / "_redirects"]:
    content = fpath.read_text()
    if "/robots.txt" not in content:
        content += "/robots.txt /robots.txt 200\n"
    if "/feed/" not in content:
        content += "/feed/ /feed.xml 200\n"
    fpath.write_text(content)

# Update sitemap to include robots.txt and feed/
for fpath in [repo / "sitemap.xml", repo / "public" / "sitemap.xml", repo / "docs" / "sitemap.xml"]:
    content = fpath.read_text()
    if 'robots.txt' not in content:
        new_entry = '  <url><loc>https://ziontechgroup.com/robots.txt</loc><changefreq>always</changefreq><priority>1.0</priority></url>\n'
        content = content.replace('</urlset>', f'{new_entry}</urlset>')
    if 'feed/' not in content and 'feed.xml' not in content:
        new_entry = '  <url><loc>https://ziontechgroup.com/feed/</loc><changefreq>daily</changefreq><priority>0.8</priority></url>\n'
        content = content.replace('</urlset>', f'{new_entry}</urlset>')
    fpath.write_text(content)
print("Updated sitemaps")

# Verify parity
print("\n=== Parity check ===")
result1 = subprocess.run(['diff', '-q', str(repo / '_redirects'), str(repo / 'public' / '_redirects')],
                       capture_output=True, text=True)
print(f"redirects root==public: {result1.stdout.strip() or 'OK'}")
result2 = subprocess.run(['diff', '-q', str(repo / '_redirects'), str(repo / 'docs' / '_redirects')],
                       capture_output=True, text=True)
print(f"redirects root==docs: {result2.stdout.strip() or 'OK'}")
result3 = subprocess.run(['diff', '-q', str(repo / 'sitemap.xml'), str(repo / 'public' / 'sitemap.xml')],
                       capture_output=True, text=True)
print(f"sitemap root==public: {result3.stdout.strip() or 'OK'}")
result4 = subprocess.run(['diff', '-q', str(repo / 'sitemap.xml'), str(repo / 'docs' / 'sitemap.xml')],
                       capture_output=True, text=True)
print(f"sitemap root==docs: {result4.stdout.strip() or 'OK'}")

# Push
print("\n=== Pushing to main ===")
subprocess.run(['git', 'add', '-A'], cwd=str(repo), check=True)
result = subprocess.run(['git', 'commit', '-m', 'feat: add robots.txt, feed.xml, update sitemap and redirects'],
                      cwd=str(repo), capture_output=True, text=True)
print(f"commit: {result.returncode}")

result = subprocess.run(['git', 'push', 'origin', 'main'], cwd=str(repo), capture_output=True, text=True)
print(f"push main: exit {result.returncode}")

print("\n=== Pushing main→gh-pages ===")
result = subprocess.run(['git', 'push', 'origin', 'main:gh-pages', '--force'], cwd=str(repo), capture_output=True, text=True)
print(f"push main→gh-pages: exit {result.returncode}")
