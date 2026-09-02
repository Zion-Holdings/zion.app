#!/usr/bin/env python3
"""
Comprehensive fix for ziontechgroup.com:
1. Add 200 _redirects rules for all 30 existing service pages
2. Add 301 redirect rules for phantom service slugs → /services/
3. Fix _redirects parity: root == public/ == docs/
4. Fix sitemap: include all real pages
5. Fix broken internal links in HTML files
"""
import re, json, os, shutil
from pathlib import Path

repo = Path("/Users/miami2/zion-support.github.io")

# === STEP 1: Collect all existing static HTML pages ===
public_pages = set()
docs_pages = set()

for base in [repo / "public", repo / "docs"]:
    if not base.exists():
        continue
    for idx in base.glob("**/index.html"):
        rel = idx.relative_to(base)
        parts = list(rel.parts)
        if len(parts) > 1 and parts[-1] == "index.html":
            slug_path = "/".join(parts[:-1])
            if slug_path == "index":
                url = "/"
            else:
                url = f"/{slug_path}/"
            if base.name == "public":
                public_pages.add(url)
            else:
                docs_pages.add(url)

all_existing = public_pages | docs_pages
print(f"Found {len(public_pages)} public/ pages, {len(docs_pages)} docs/ pages")
print(f"Total unique: {len(all_existing)}")

# === STEP 2: Load current _redirects ===
with open(repo / "_redirects") as f:
    redirects_content = f.read()

existing_rules = {}
for line in redirects_content.split('\n'):
    line = line.strip()
    if not line or line.startswith('#'):
        continue
    parts = line.split()
    if len(parts) >= 3:
        source = parts[0]
        dest = parts[1]
        rule_type = parts[2]
        existing_rules[source] = (dest, rule_type)

# === STEP 3: Add 200 rules for pages missing them ===
missing_200 = []
for url in sorted(all_existing):
    if url == "/":
        continue
    if url not in existing_rules or existing_rules[url][1] != '200':
        missing_200.append(url)

print(f"\nPages missing 200 _redirects rules: {len(missing_200)}")

new_200_rules = []
for url in missing_200:
    rule = f"{url} {url}index.html 200"
    new_200_rules.append(rule)

# === STEP 4: Add 301 rules for phantom service slugs from deployed sitemap ===
# These are slugs like /services/predictor-smart---real-estate-b18ae676
# that appear in the deployed sitemap but have no static HTML

phantom_services = set()
# Load from deployed sitemap via curl or use local known patterns
import urllib.request
try:
    with urllib.request.urlopen("https://ziontechgroup.com/sitemap.xml", timeout=30) as resp:
        sitemap_xml = resp.read().decode('utf-8')
    sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)
    for u in sitemap_urls:
        if '/services/' in u:
            slug = u.rstrip('/').replace('https://ziontechgroup.com/services/', '')
            if slug and slug != '':
                phantom_services.add(slug)
except Exception as e:
    print(f"Could not fetch deployed sitemap: {e}")
    # Fallback: use the known broken slugs from the crawl report
    with open(repo / "site-audit-deep.json") as f:
        audit = json.load(f)
    for url in audit.get('broken', []):
        if '/services/' in url:
            slug = url.rstrip('/').replace('https://ziontechgroup.com/services/', '')
            if slug:
                phantom_services.add(slug)

phantom_services = {s for s in phantom_services if s not in all_existing and not s.startswith('index.html')}
print(f"Phantom service slugs (in sitemap, no HTML): {len(phantom_services)}")

new_301_rules = []
for slug in sorted(phantom_services):
    source = f"/services/{slug}"
    rule = f"{source} /services/ 301"
    new_301_rules.append(rule)
    source_trailing = f"{source}/"
    rule_trailing = f"{source_trailing} /services/ 301"
    new_301_rules.append(rule_trailing)

print(f"New 301 redirect rules to add: {len(new_301_rules)}")

# === STEP 5: Build the fixed _redirects ===
new_redirects_lines = []
# Keep existing content (comments + rules)
for line in redirects_content.split('\n'):
    stripped = line.strip()
    if not stripped or stripped.startswith('#'):
        new_redirects_lines.append(line)
    else:
        parts = stripped.split()
        if len(parts) >= 3:
            source = parts[0]
            rule_type = parts[2]
            # Keep existing rules
            if source in existing_rules:
                new_redirects_lines.append(line)
            # Skip rules for pages that now have 200 rules (replace with 200)
            elif source in [u for u in missing_200]:
                # Will add below
                pass
            else:
                new_redirects_lines.append(line)
        else:
            new_redirects_lines.append(line)

# Add section header for new service 200 rules
new_redirects_lines.append("")
new_redirects_lines.append("# === Service pages with static HTML fallbacks (200) ===")
for rule in new_200_rules:
    new_redirects_lines.append(rule)

# Add section header for phantom service redirects
new_redirects_lines.append("")
new_redirects_lines.append("# === Phantom service slug redirects to /services/ (301) ===")
for rule in new_301_rules:
    new_redirects_lines.append(rule)

new_redirects_content = '\n'.join(new_redirects_lines) + '\n'

# Write the fixed _redirects
with open(repo / "_redirects", "w") as f:
    f.write(new_redirects_content)

print(f"\nFixed _redirects written: {len(new_redirects_lines)} lines")
print(f"  Added {len(new_200_rules)} new 200 rules")
print(f"  Added {len(new_301_rules)} new 301 rules")

# Count stats
new_rules = {}
for line in new_redirects_content.split('\n'):
    line = line.strip()
    if not line or line.startswith('#'):
        continue
    parts = line.split()
    if len(parts) >= 3:
        source = parts[0]
        rule_type = parts[2]
        new_rules[source] = rule_type

total_200 = sum(1 for v in new_rules.values() if v == '200')
total_301 = sum(1 for v in new_rules.values() if v == '301')
total_service_200 = sum(1 for k, v in new_rules.items() if '/services/' in k and v == '200')
total_service_301 = sum(1 for k, v in new_rules.items() if '/services/' in k and v == '301')

print(f"\n_newredirects stats:")
print(f"  Total rules: {len(new_rules)}")
print(f"  200 rules: {total_200}")
print(f"  301 rules: {total_301}")
print(f"  Service 200 rules: {total_service_200}")
print(f"  Service 301 rules: {total_service_301}")

# === STEP 6: Sync to public/ and docs/ ===
# Copy root _redirects to public/ and docs/
shutil.copy(repo / "_redirects", repo / "public" / "_redirects")
shutil.copy(repo / "_redirects", repo / "docs" / "_redirects")

print(f"\nSynced _redirects to public/ and docs/")

# === STEP 7: Fix sitemap ===
# Generate sitemap from all existing pages + static routes
static_routes = [
    '/', '/services/', '/about/', '/contact/', '/pricing/', '/blog/',
    '/tools/', '/ai-services-index/', '/free-ai-it-tools/', '/new-ai-services/',
    '/careers/', '/partners/', '/privacy/', '/terms/', '/sitemap.xml', '/robots.txt',
    '/use-cases/', '/solutions/', '/industries/', '/testimonials/', '/dashboard/',
    '/faq/', '/search/', '/sla/', '/products/', '/providers/', '/governments/',
    '/academy/', '/agents-monitoring/', '/ai/', '/ai-lab/', '/ai-services/',
    '/business-customers/', '/case-studies/', '/cookies/', '/help/', '/it-consulting-services/',
    '/it-vendors/', '/industry-solutions/', '/integrators/', '/public-roadmap/',
    '/roi-calculator/', '/free-contact/', '/free-resources/', '/status/', '/entities/',
]

today = __import__('datetime').date.today().isoformat()

sitemap_entries = []
for route in static_routes:
    if route == '/':
        sitemap_entries.append(f"""  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>""")
    elif route in all_existing or route + 'index.html' in [u + 'index.html' for u in all_existing]:
        priority = '0.8' if route in ['/services/', '/blog/', '/tools/'] else '0.6'
        changefreq = 'weekly' if route in ['/services/', '/blog/', '/tools/'] else 'monthly'
        sitemap_entries.append(f"""  <url>
    <loc>https://ziontechgroup.com{route}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>""")

# Add service pages that exist
for url in sorted(all_existing):
    if url.startswith('/services/') and url != '/services/':
        sitemap_entries.append(f"""  <url>
    <loc>https://ziontechgroup.com{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>""")

# Add blog pages that exist  
for url in sorted(all_existing):
    if url.startswith('/blog/') and url != '/blog/':
        sitemap_entries.append(f"""  <url>
    <loc>https://ziontechgroup.com{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>""")

# Add tools pages that exist
for url in sorted(all_existing):
    if url.startswith('/tools/') and url != '/tools/':
        sitemap_entries.append(f"""  <url>
    <loc>https://ziontechgroup.com{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>""")

sitemap_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(sitemap_entries)}
</urlset>
"""

with open(repo / "sitemap.xml", "w") as f:
    f.write(sitemap_xml)

print(f"\nFixed sitemap.xml written: {len(sitemap_entries)} URLs")

# Also copy to public/ and docs/
shutil.copy(repo / "sitemap.xml", repo / "public" / "sitemap.xml")
shutil.copy(repo / "sitemap.xml", repo / "docs" / "sitemap.xml")
print("Copied sitemap.xml to public/ and docs/")

# === STEP 8: Fix broken internal links in HTML files ===
print(f"\n=== Fixing broken internal links in HTML ===")
broken_link_fixes = 0

# Common patterns to fix:
# /services/predictor-smart---real-estate-b18ae676 → /services/
# Any hex-suffixed service slug → /services/

hex_slug_pattern = re.compile(r'/services/[a-z0-9]+---[a-z0-9-]+-[0-9a-f]{8}|/services/[a-z0-9-]+-[0-9a-f]{8}')

for base_dir in [repo / "public", repo / "docs"]:
    if not base_dir.exists():
        continue
    for html_file in base_dir.rglob("*.html"):
        try:
            content = html_file.read_text(encoding='utf-8')
        except:
            continue
        
        # Fix hex-suffixed service slugs
        def fix_hex_slug(m):
            return '/services/'
        
        new_content = hex_slug_pattern.sub(fix_hex_slug, content)
        
        if new_content != content:
            html_file.write_text(new_content, encoding='utf-8')
            broken_link_fixes += 1
    try:
        content = html_file.read_text(encoding='utf-8')
    except:
        continue
    
    # Fix hex-suffixed service slugs
    def fix_hex_slug(m):
        return '/services/'
    
    new_content = hex_slug_pattern.sub(fix_hex_slug, content)
    
    if new_content != content:
        html_file.write_text(new_content, encoding='utf-8')
        broken_link_fixes += 1

print(f"Fixed {broken_link_fixes} HTML files with broken hex-slug links")

print(f"\n=== ALL FIXES COMPLETE ===")
print(f"  _redirects: {len(new_rules)} rules ({total_200} 200, {total_301} 301)")
print(f"  Service 200 rules: {total_service_200}")
print(f"  Service 301 rules: {total_service_301}")
print(f"  sitemap.xml: {len(sitemap_entries)} URLs")
print(f"  HTML files fixed: {broken_link_fixes}")
print(f"  _redirects synced to public/ and docs/")
