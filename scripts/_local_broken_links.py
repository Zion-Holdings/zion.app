#!/usr/bin/env python3
"""Generate comprehensive broken-link report from local repo files."""
import re, os, sys, json
from html.parser import HTMLParser
from pathlib import Path

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"
APP_DIR = os.path.join(BASE, "app")
EXCLUDE_DIRS = {"components", "lib", "data", "api", "use", "hooks", "styles", "types"}

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag in ("a", "link"):
            for k, v in attrs:
                if k == "href" and v and not v.startswith(("mailto:", "tel:", "javascript:", "#", "http://", "https://", "data:")):
                    self.links.append(v)
        if tag in ("script", "img", "source"):
            for k, v in attrs:
                if k in ("src", "srcSet") and v and not v.startswith(("http://", "https://", "data:")):
                    self.links.append(v)

# Collect all app routes
all_routes = set()
for root, dirs, files in os.walk(APP_DIR):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith("_")]
    for f in files:
        if f in ("layout.tsx", "page.tsx", "loading.tsx", "error.tsx", "not-found.tsx", "template.tsx", "GlobalErrorBoundary.tsx"):
            continue
        if not f.endswith((".tsx", ".ts", ".jsx", ".js", ".md", ".mdx")):
            continue
        path = os.path.join(root, f)
        rel = os.path.relpath(path, APP_DIR)
        if f == "page.tsx" or f == "page.js":
            # route path
            d = os.path.dirname(rel)
            route = "/" + "/".join(d.split(os.sep)) if d != "." else "/"
            route = route.rstrip("/") or "/"
            all_routes.add(route)

# Parse all pages for internal links
broken = []
checked = 0
skip_patterns = re.compile(r'^(/api/|/static/|/public/|_next/)')
for root, dirs, files in os.walk(APP_DIR):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith("_")]
    for f in files:
        if not f.endswith((".tsx", ".ts", ".jsx", ".js", ".md", ".mdx")):
            continue
        path = os.path.join(root, f)
        try:
            with open(path, "r", errors="ignore", encoding="utf-8") as fh:
                content = fh.read()
        except:
            continue
        # strip JSX string literals and comments roughly — just find href= and markdown links
        # find all href="..." and href='...'
        hrefs = re.findall(r'href=["\']([^"\']+)["\']', content)
        # markdown links
        md_links = re.findall(r'\]\(([^)\s]+)\)', content)
        all_links = set(hrefs + md_links)
        for link in all_links:
            if link.startswith(("mailto:", "tel:", "javascript:", "http://", "https://", "#", "data:")):
                continue
            if skip_patterns.match(link):
                continue
            link_clean = link.split("#")[0].split("?")[0]
            # resolve
            if link_clean.startswith("/"):
                target = link_clean.rstrip("/") or "/"
                # check if target or target/ has a page
                found = False
                for suffix in ["", "/page.tsx", "/page.js", "/index.tsx", "/index.js", ".tsx", ".js"]:
                    check_path = os.path.join(APP_DIR, target.lstrip("/") + suffix)
                    if os.path.exists(check_path):
                        found = True
                        break
                if not found and not target.startswith("/_"):
                    broken.append((os.path.relpath(path, BASE), link, "no route/page"))
            checked += 1

# dedupe
seen = set()
unique_broken = []
for b in broken:
    key = b[1]
    if key not in seen:
        seen.add(key)
        unique_broken.append(b)

result = {
    "total_internal_links_checked": checked,
    "broken_internal_links": unique_broken,
    "routes_found": len(all_routes),
}
with open("local_broken_links.json", "w") as f:
    json.dump(result, f, indent=2)
print(f"Checked {checked} internal links across files")
print(f"Found {len(unique_broken)} broken internal links")
for b in unique_broken[:80]:
    print(f"  {b[0]} -> {b[1]} ({b[2]})")
if len(unique_broken) > 80:
    print(f"  ...and {len(unique_broken)-80} more")
