#!/usr/bin/env python3
"""Generate redirects for remaining stale URLs including root-level pages."""
import re, os

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"

# Read current _redirects
with open(os.path.join(BASE, "_redirects")) as f:
    existing = f.read()

# Read broken.txt for the 404 URLs
with open(os.path.join(BASE, "broken.txt")) as f:
    lines = f.readlines()

broken_404 = []
for line in lines:
    line = line.strip()
    if line.startswith("404"):
        url = line.split("404 ", 1)[1]
        broken_404.append(url)

new_redirects = []
for url in broken_404:
    path = url.replace("https://ziontechgroup.com", "").rstrip("/")
    
    # Skip if already in _redirects (check both with and without slash)
    check_paths = [f"{path}/ ", f"{path} "]
    if any(cp in existing for cp in check_paths):
        continue
    
    # Skip root-level pages that exist locally (they'll be deployed)
    APP_DIR = os.path.join(BASE, "app")
    page_exists = False
    for ext in ["page.tsx", "page.js", "index.tsx", "index.js"]:
        if os.path.isfile(os.path.join(APP_DIR, path.lstrip("/"), ext)):
            page_exists = True
            break
    if page_exists:
        continue
    
    # Determine redirect target based on path pattern
    if path.startswith("/services/"):
        new_redirects.append(f"{path}/ /services/ 301")
        new_redirects.append(f"{path} /services/ 301")
    elif path.startswith("/tools/"):
        # Check if tools page exists locally
        if os.path.isdir(os.path.join(APP_DIR, "tools", path.split("/tools/")[-1].rstrip("/"))):
            continue  # exists locally, will be deployed
        new_redirects.append(f"{path}/ /tools/ 301")
        new_redirects.append(f"{path} /tools/ 301")
    elif path.startswith("/blog/"):
        # Check if blog page exists locally
        blog_slug = path.split("/blog/")[-1].rstrip("/")
        if os.path.isdir(os.path.join(APP_DIR, "blog", blog_slug)):
            continue  # exists locally, will be deployed
        new_redirects.append(f"{path}/ /blog/ 301")
        new_redirects.append(f"{path} /blog/ 301")
    elif path.startswith("/ai/"):
        new_redirects.append(f"{path}/ /ai-lab/ 301")
        new_redirects.append(f"{path} /ai-lab/ 301")
    else:
        # Root-level pages like /managed-it-services-small-business-2026-6559/
        # or /ai-observability-2026-6565/ etc.
        if "cloud-cost" in path or "ai-observability" in path or "cybersecurity" in path or "managed-it" in path or "it-consulting" in path or "cloud-migration" in path:
            # These are likely old service landing pages → redirect to /services/
            new_redirects.append(f"{path}/ /services/ 301")
            new_redirects.append(f"{path} /services/ 301")
        else:
            new_redirects.append(f"{path}/ / 301")
            new_redirects.append(f"{path} / 301")

# Dedupe
seen = set()
unique = []
for r in new_redirects:
    if r not in seen:
        seen.add(r)
        unique.append(r)

print(f"Generated {len(unique)} new redirect lines")
if unique:
    with open(os.path.join(BASE, "_redirects"), "a") as f:
        f.write("\n# Auto-generated redirects for remaining stale URLs (2026-08-17)\n")
        f.write("\n".join(unique) + "\n")
    line_count = len(open(os.path.join(BASE, "_redirects")).readlines())
    print(f"_redirects now has {line_count} lines")
    for r in unique[:10]:
        print(f"  {r}")
    if len(unique) > 10:
        print(f"  ...and {len(unique)-10} more")
