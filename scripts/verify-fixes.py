#!/usr/bin/env python3
"""Verify redirect/sitemap parity and live site health."""
import re, json, os, sys
from pathlib import Path
import urllib.request
import urllib.error

repo = Path("/Users/miami2/zion-support.github.io")

print("=" * 60)
print("VERIFICATION REPORT")
print("=" * 60)

# === 1. _redirects parity ===
print("\n--- _redirects Parity ---")
root_redirects = (repo / "_redirects").read_text()
public_redirects = (repo / "public" / "_redirects").read_text()
docs_redirects = (repo / "docs" / "_redirects").read_text()

root_ok = root_redirects == public_redirects
root_docs_ok = root_redirects == docs_redirects
print(f"Root == Public: {'✅' if root_ok else '❌'}")
print(f"Root == Docs:   {'✅' if root_docs_ok else '❌'}")

if not root_ok:
    diff = []
    for i, (r, p) in enumerate(zip(root_redirects.split('\n'), public_redirects.split('\n'))):
        if r != p:
            diff.append(f"Line {i+1}: root='{r[:80]}' vs public='{p[:80]}'")
    print(f"  Differences (first 5):")
    for d in diff[:5]:
        print(f"    {d}")

if not root_docs_ok:
    diff = []
    for i, (r, d) in enumerate(zip(root_redirects.split('\n'), docs_redirects.split('\n'))):
        if r != d:
            diff.append(f"Line {i+1}: root='{r[:80]}' vs docs='{d[:80]}'")
    print(f"  Differences (first 5):")
    for d in diff[:5]:
        print(f"    {d}")

# === 2. Service 200 rules ===
print("\n--- Service 200 Rules ---")
service_200 = []
service_301 = []
for line in root_redirects.split('\n'):
    line = line.strip()
    if not line or line.startswith('#'):
        continue
    parts = line.split()
    if len(parts) >= 3 and '/services/' in parts[0]:
        if parts[2] == '200':
            service_200.append(parts[0])
        elif parts[2] == '301':
            service_301.append(parts[0])

print(f"Service 200 rules: {len(service_200)}")
print(f"Service 301 rules: {len(service_301)}")

# Check which existing service pages have 200 rules
service_html_dirs = set()
for d in (repo / "public" / "services").iterdir():
    if d.is_dir() and (d / "index.html").exists():
        service_html_dirs.add(d.name)

missing_200_services = service_html_dirs - set(service_200)
print(f"Service HTML dirs: {len(service_html_dirs)}")
print(f"Service dirs with 200 rules: {len(service_html_dirs & set(service_200))}")
if missing_200_services:
    print(f"Service dirs MISSING 200 rules: {sorted(missing_200_services)}")

# === 3. sitemap parity ===
print("\n--- sitemap.xml Parity ---")
root_sitemap = (repo / "sitemap.xml").read_text()
public_sitemap = (repo / "public" / "sitemap.xml").read_text()
docs_sitemap = (repo / "docs" / "sitemap.xml").read_text()

print(f"Root == Public: {'✅' if root_sitemap == public_sitemap else '❌'}")
print(f"Root == Docs:   {'✅' if root_sitemap == docs_sitemap else '❌'}")

root_urls = re.findall(r'<loc>(.*?)</loc>', root_sitemap)
print(f"sitemap URLs: {len(root_urls)}")
service_sitemap_urls = [u for u in root_urls if '/services/' in u]
print(f"  Service URLs: {len(service_sitemap_urls)}")
non_service = [u for u in root_urls if '/services/' not in u]
print(f"  Non-service URLs: {len(non_service)}")

# === 4. Live site probe ===
print("\n--- Live Site Health ---")
test_urls = [
    'https://ziontechgroup.com/',
    'https://ziontechgroup.com/services/',
    'https://ziontechgroup.com/blog/',
    'https://ziontechgroup.com/tools/',
    'https://ziontechgroup.com/contact/',
    'https://ziontechgroup.com/about/',
    'https://ziontechgroup.com/sitemap.xml',
    'https://ziontechgroup.com/robots.txt',
    'https://ziontechgroup.com/pricing/',
    'https://ziontechgroup.com/privacy/',
    'https://ziontechgroup.com/terms/',
]

# Add some service pages
for slug in sorted(service_html_dirs)[:10]:
    test_urls.append(f'https://ziontechgroup.com/services/{slug}/')

for url in test_urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            status = resp.status
            size = len(resp.read())
            icon = '✅' if status == 200 else f'⚠ {status}'
            print(f"  {icon} {status}  {url}  ({size} bytes)")
    except urllib.error.HTTPError as e:
        print(f"  ❌ {e.code}  {url}")
    except Exception as e:
        print(f"  ⚠️ ERR  {url}  {str(e)[:50]}")

# === 5. Check for broken links in sitemap ===
print("\n--- Sitemap URL Live Check (sample) ---")
checked = 0
broken_sitemap = []
for url in root_urls[:200]:  # check first 200
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=8) as resp:
            if resp.status != 200:
                broken_sitemap.append((url, resp.status))
    except:
        broken_sitemap.append((url, 'ERROR'))
    checked += 1

print(f"Checked {checked} sitemap URLs")
print(f"Broken: {len(broken_sitemap)}")
if broken_sitemap:
    for url, status in broken_sitemap[:20]:
        print(f"  ❌ {url}  [{status}]")

# === 6. Summary ===
print("\n" + "=" * 60)
print("SUMMARY")
print("=" * 60)
issues = []

if not root_ok:
    issues.append("_redirects: root != public")
if not root_docs_ok:
    issues.append("_redirects: root != docs")

if missing_200_services:
    issues.append(f"Service pages missing 200 rules: {len(missing_200_services)}")

print(f"_redirects total rules: {len([l for l in root_redirects.split(chr(10)) if l.strip() and not l.strip().startswith('#')])}")
print(f"  200 rules: {len(service_200) + len([l for l in root_redirects.split(chr(10)) if l.strip() and not l.strip().startswith('#') and l.split()[2] == '200' if len(l.split()) >= 3])}")

print(f"sitemap URLs: {len(root_urls)}")

if issues:
    print(f"\n⚠️  ISSUES FOUND ({len(issues)}):")
    for i in issues:
        print(f"  • {i}")
else:
    print("\n✅ All checks passed!")

# Write report
report = {
    "redirects_parity": {"root_public": root_ok, "root_docs": root_docs_ok},
    "service_200_count": len(service_200),
    "service_301_count": len(service_301),
    "missing_200_services": sorted(missing_200_services),
    "sitemap_urls": len(root_urls),
    "sitemap_service_urls": len(service_sitemap_urls),
    "sitemap_parity": {"root_public": root_sitemap == public_sitemap, "root_docs": root_sitemap == docs_sitemap},
}
with open(repo / "verification-report.json", "w") as f:
    json.dump(report, f, indent=2)
print(f"\nReport saved to verification-report.json")
