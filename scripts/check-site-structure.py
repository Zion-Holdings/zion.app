#!/usr/bin/env python3
"""Check site structure and file counts."""
from pathlib import Path
import re

repo = Path("/Users/miami2/zion-support.github.io")

print("=== ROOT FILE STATS ===")
with open(repo / "_redirects") as f:
    redirects = f.readlines()
print(f"_redirects: {len(redirects)} lines, {sum(1 for l in redirects if ' 200' in l and not l.startswith('#'))} 200s, {sum(1 for l in redirects if ' 301' in l and not l.startswith('#'))} 301s")

with open(repo / "sitemap.xml") as f:
    sitemap = f.read()
print(f"sitemap: {len(sitemap.splitlines())} lines, {sitemap.count('<loc>')} URLs")

print("\n=== PUBLIC FILE STATS ===")
with open(repo / "public" / "_redirects") as f:
    redirects = f.readlines()
print(f"_redirects: {len(redirects)} lines, {sum(1 for l in redirects if ' 200' in l and not l.startswith('#'))} 200s, {sum(1 for l in redirects if ' 301' in l and not l.startswith('#'))} 301s")

with open(repo / "public" / "sitemap.xml") as f:
    sitemap = f.read()
print(f"sitemap: {len(sitemap.splitlines())} lines, {sitemap.count('<loc>')} URLs")

print("\n=== DOCS FILE STATS ===")
with open(repo / "docs" / "_redirects") as f:
    redirects = f.readlines()
print(f"_redirects: {len(redirects)} lines, {sum(1 for l in redirects if ' 200' in l and not l.startswith('#'))} 200s, {sum(1 for l in redirects if ' 301' in l and not l.startswith('#'))} 301s")

with open(repo / "docs" / "sitemap.xml") as f:
    sitemap = f.read()
print(f"sitemap: {len(sitemap.splitlines())} lines, {sitemap.count('<loc>')} URLs")

print("\n=== PARITY ===")
import subprocess
for pair, name in [
    (['diff', '-q', str(repo / '_redirects'), str(repo / 'public' / '_redirects')], "root==public"),
    (['diff', '-q', str(repo / '_redirects'), str(repo / 'docs' / '_redirects')], "root==docs"),
    (['diff', '-q', str(repo / 'sitemap.xml'), str(repo / 'public' / 'sitemap.xml')], "sitemap root==public"),
    (['diff', '-q', str(repo / 'sitemap.xml'), str(repo / 'docs' / 'sitemap.xml')], "sitemap root==docs"),
]:
    r = subprocess.run(pair, capture_output=True, text=True)
    print(f"{name}: {'OK' if not r.stdout.strip() else 'FAIL: ' + r.stdout.strip()}")

print("\n=== SITEMAP BREAKDOWN ===")
with open(repo / "sitemap.xml") as f:
    urls = re.findall(r'<loc>(.*?)</loc>', f.read())
svc = [u for u in urls if '/services/' in u and u.rstrip('/') != 'https://ziontechgroup.com/services/']
blog = [u for u in urls if '/blog/' in u and u.rstrip('/') != 'https://ziontechgroup.com/blog/']
tool = [u for u in urls if '/tools/' in u and u.rstrip('/') != 'https://ziontechgroup.com/tools/']
print(f"Total: {len(urls)}")
print(f"  Services: {len(svc)}")
print(f"  Blog: {len(blog)}")
print(f"  Tools: {len(tool)}")
print(f"  Other: {len(urls) - len(svc) - len(blog) - len(tool)}")

has_robots = any('robots.txt' in u for u in urls)
has_feed = any('feed/' in u or 'feed.xml' in u for u in urls)
print(f"Missing /robots.txt: {not has_robots}")
print(f"Missing /feed/: {not has_feed}")

print("\n=== HTML FILE COUNTS ===")
public_html = len(list((repo / "public").rglob("index.html")))
docs_html = len(list((repo / "docs").rglob("index.html")))
print(f"public/index.html files: {public_html}")
print(f"docs/index.html files: {docs_html}")
print(f"Total: {public_html + docs_html}")
