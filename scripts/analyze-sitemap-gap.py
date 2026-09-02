#!/usr/bin/env python3
"""
Analyze sitemap vs _redirects vs static files to find:
1. Service URLs in sitemap missing 200 rules
2. Service URLs in sitemap missing static HTML
3. Static HTML pages missing from sitemap
4. _redirects rules pointing to dead targets
"""
import re, json, os
from pathlib import Path

repo = Path("/Users/miami2/zion-support.github.io")

# Load sitemap
with open(repo / "sitemap.xml") as f:
    sitemap_content = f.read()

sitemap_urls = set(re.findall(r'<loc>(.*?)</loc>', sitemap_content))
service_sitemap = {u for u in sitemap_urls if '/services/' in u and u.rstrip('/') != '/services/'}
non_service_sitemap = sitemap_urls - service_sitemap

print(f"Sitemap: {len(sitemap_urls)} total URLs")
print(f"  Service URLs: {len(service_sitemap)}")
print(f"  Non-service URLs: {len(non_service_sitemap)}")

# Load _redirects
with open(repo / "_redirects") as f:
    redirects_content = f.read()

redirect_rules = {}
for line in redirects_content.split('\n'):
    line = line.strip()
    if not line or line.startswith('#'):
        continue
    parts = line.split()
    if len(parts) >= 3:
        source = parts[0].rstrip('/')
        dest = parts[1]
        rule_type = parts[2] if len(parts) > 2 else ''
        redirect_rules[source] = (dest, rule_type)

print(f"\n_redirects: {len(redirect_rules)} rules")
service_rules = {u: v for u, v in redirect_rules.items() if '/services/' in u}
print(f"  Service rules: {len(service_rules)}")

# Load static files
public_services = set()
docs_services = set()
for d in [repo / "public" / "services", repo / "docs" / "services"]:
    if d.exists():
        for idx in d.glob("*/index.html"):
            slug = idx.parent.name
            if slug != "index":
                if "public" in str(d):
                    public_services.add(slug)
                else:
                    docs_services.add(slug)

all_static_services = public_services | docs_services
print(f"\nStatic HTML service pages:")
print(f"  public/services/: {len(public_services)} pages")
print(f"  docs/services/: {len(docs_services)} pages")
print(f"  Combined unique: {len(all_static_services)}")

# --- ANALYSIS 1: Service sitemap URLs without 200 rules ---
print(f"\n=== ANALYSIS 1: Sitemap service URLs without 200 _redirects ===")
missing_200 = []
for url in sorted(service_sitemap):
    slug = url.rstrip('/').replace('https://ziontechgroup.com/', '')
    rule = redirect_rules.get(slug, None)
    if rule is None:
        missing_200.append((url, "NO RULE"))
    elif rule[1] != '200':
        missing_200.append((url, f"{rule[1]} → {rule[0]}"))

print(f"Count: {len(missing_200)}")
for url, rule in missing_200[:40]:
    print(f"  {url}  [{rule}]")
if len(missing_200) > 40:
    print(f"  ... and {len(missing_200) - 40} more")

# --- ANALYSIS 2: Service sitemap URLs missing static HTML ---
print(f"\n=== ANALYSIS 2: Sitemap service URLs missing static HTML ===")
missing_static = []
for url in sorted(service_sitemap):
    slug = url.rstrip('/').replace('https://ziontechgroup.com/', '')
    if slug not in all_static_services:
        rule = redirect_rules.get(slug, None)
        if rule is None:
            missing_static.append(url)
        elif rule[1] != '200':
            missing_static.append(url)

print(f"Count: {len(missing_static)}")
for url in missing_static[:30]:
    print(f"  {url}")
if len(missing_static) > 30:
    print(f"  ... and {len(missing_static) - 30} more")

# --- ANALYSIS 3: Static HTML service pages not in sitemap ---
print(f"\n=== ANALYSIS 3: Static HTML service pages missing from sitemap ===")
missing_from_sitemap = []
for slug in sorted(all_static_services):
    url = f"https://ziontechgroup.com/services/{slug}/"
    if url not in sitemap_urls:
        missing_from_sitemap.append(url)

print(f"Count: {len(missing_from_sitemap)}")
for url in missing_from_sitemap:
    print(f"  {url}")

# --- ANALYSIS 4: _redirects rules pointing to dead targets ---
print(f"\n=== ANALYSIS 4: _redirects rules with dead targets ===")
dead_targets = []
for source, (dest, rule_type) in redirect_rules.items():
    if rule_type == '301' and dest.startswith('http'):
        # Check if target is a known live URL
        target_slug = dest.replace('https://ziontechgroup.com/', '').rstrip('/')
        if target_slug not in all_static_services and target_slug not in redirect_rules:
            dead_targets.append((source, dest))

print(f"Count: {len(dead_targets)}")
for src, dst in dead_targets[:30]:
    print(f"  {src} → {dst} (301, target may be dead)")

# Save analysis
analysis = {
    "sitemap_total": len(sitemap_urls),
    "service_sitemap_count": len(service_sitemap),
    "redirect_rules_total": len(redirect_rules),
    "service_redirect_rules": len(service_rules),
    "static_service_pages": len(all_static_services),
    "missing_200": [{"url": u, "rule": r} for u, r in missing_200],
    "missing_static": missing_static,
    "missing_from_sitemap": missing_from_sitemap,
    "dead_targets": [{"source": s, "target": d} for s, d in dead_targets],
}
with open(repo / "sitemap-analysis.json", "w") as f:
    json.dump(analysis, f, indent=2)
print(f"\nAnalysis saved to sitemap-analysis.json")
