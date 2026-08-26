import os
import re
from urllib.parse import urlparse

out_dir = os.path.join(os.path.dirname(__file__), 'out')
html_files = []
for root, dirs, files in os.walk(out_dir):
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

print(f"Found {len(html_files)} HTML files")

href_pattern = re.compile(r'href=["\']([^"\']+)["\']', re.IGNORECASE)
broken = 0
broken_links = []

for html_file in html_files:
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Could not read {html_file}: {e}")
        continue
    for match in href_pattern.finditer(content):
        link = match.group(1)
        # Skip empty, javascript:, mailto:, tel:, # anchors
        if not link or link.startswith('javascript:') or link.startswith('mailto:') or link.startswith('tel:') or link.startswith('#'):
            continue
        # Parse to remove query/fragment
        parsed = urlparse(link)
        path = parsed.path
        if not path:
            continue
        # Determine if internal (no scheme)
        if parsed.scheme:
            # external, skip for now
            continue
        # Normalize path: remove leading slash
        if path.startswith('/'):
            path = path[1:]
        # If empty after stripping slash, it's root -> should exist as index.html
        if not path:
            candidate = os.path.join(out_dir, 'index.html')
            if not os.path.exists(candidate):
                broken_links.append((html_file, link, candidate))
                broken += 1
            continue
        # Check if file exists as is
        candidate = os.path.join(out_dir, path)
        if os.path.exists(candidate):
            continue
        # If not, maybe it's a directory without trailing slash; try adding index.html
        candidate2 = os.path.join(out_dir, path, 'index.html')
        if os.path.exists(candidate2):
            continue
        # Still not found -> broken
        broken_links.append((html_file, link, candidate))
        broken += 1

print(f"\nFound {broken} potentially broken internal links:")
# Show first 20
for src, link, cand in broken_links[:20]:
    print(f"  In {os.path.relpath(src, out_dir)}: href=\"{link}\" -> missing {os.path.relpath(cand, out_dir)}")
if len(broken_links) > 20:
    print(f"  ... and {len(broken_links)-20} more")
# Write report
import json
report_path = os.path.join(os.path.dirname(__file__), 'broken-links-report.json')
with open(report_path, 'w') as f:
    json.dump(broken_links, f, indent=2)
print(f"\nReport written to {report_path}")