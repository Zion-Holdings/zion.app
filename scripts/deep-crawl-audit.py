#!/usr/bin/env python3
"""Deep crawl audit of local static HTML files under public/ and docs/."""
import os, re, json, sys
from pathlib import Path
from urllib.parse import urljoin, urlparse

BASE = "https://ziontechgroup.com"
PUBLIC_DIR = Path("/Users/miami2/zion-support.github.io/public")
DOCS_DIR = Path("/Users/miami2/zion-support.github.io/docs")

results = {
    "total_files": 0,
    "files_with_content": 0,
    "broken_internal": [],
    "missing_title": [],
    "missing_description": [],
    "missing_canonical": [],
    "missing_h1": [],
    "empty_pages": [],
    "redirect_stale": [],
}

def crawl_directory(directory, prefix):
    if not directory.exists():
        return
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.endswith(".html") or f.endswith(".htm"):
                path = Path(root) / f
                rel = str(path.relative_to(directory))
                full_url = BASE + "/" + rel.replace("\\", "/")
                if full_url.endswith("/index.html"):
                    full_url = full_url[:-10] + "/"
                results["total_files"] += 1
                try:
                    content = path.read_text(encoding="utf-8", errors="ignore")
                    if len(content) < 200:
                        results["empty_pages"].append(full_url)
                        continue
                    results["files_with_content"] += 1
                    check_seo(full_url, content, rel)
                    check_links(full_url, content, rel)
                except Exception as e:
                    results["broken_internal"].append((full_url, f"read_error: {e}"))

def check_seo(url, content, rel):
    if "<title>" not in content and "<title " not in content:
        results["missing_title"].append(url)
    if 'name="description"' not in content and 'name="description"' not in content.lower():
        if 'meta name="description"' not in content.lower():
            results["missing_description"].append(url)
    if 'rel="canonical"' not in content:
        results["missing_canonical"].append(url)
    if "<h1" not in content:
        results["missing_h1"].append(url)

def check_links(url, content, rel):
    """Extract href/src and check internal links pointing to known existing files."""
    # Find all href attributes
    hrefs = re.findall(r'href="([^"]+)"', content)
    srcs = re.findall(r'src="([^"]+)"', content)
    
    for href in hrefs:
        if href.startswith("http") or href.startswith("//"):
            continue  # external
        if href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        if href.endswith(".css") or href.endswith(".js") or href.endswith(".svg") or href.endswith(".png") or href.endswith(".jpg"):
            continue  # asset
        
        # Normalize
        full = urljoin(url, href)
        # Remove fragment
        full = full.split("#")[0]
        
        # Check if the target likely exists in our file tree
        if full.endswith("/"):
            check_path = full.rstrip("/").replace(BASE + "/", "")
        else:
            check_path = full.replace(BASE + "/", "")
        
        # See if the file exists locally
        if check_path.startswith("public/"):
            check_path = check_path[7:]
        elif check_path.startswith("docs/"):
            check_path = check_path[5:]
        
        target = PUBLIC_DIR / check_path
        if not target.exists():
            target = DOCS_DIR / check_path
        
        if not target.exists():
            # It might be a directory index
            target_dir = target if target.is_dir() or target.name == "index.html" else target.parent
            if not (target.exists() or (target.parent.exists() and list(target.parent.glob("index.html")))):
                results["broken_internal"].append((url, href, full))

for d, prefix in [(PUBLIC_DIR, "public"), (DOCS_DIR, "docs")]:
    crawl_directory(d, prefix)

print(f"\n=== CRAWL SUMMARY ===")
print(f"Total HTML files scanned: {results['total_files']}")
print(f"Files with content (>200 bytes): {results['files_with_content']}")
print(f"Empty/near-empty pages: {len(results['empty_pages'])}")
print(f"\n=== SEO ISSUES ===")
print(f"Missing <title>: {len(results['missing_title'])}")
print(f"Missing meta description: {len(results['missing_description'])}")
print(f"Missing canonical: {len(results['missing_canonical'])}")
print(f"Missing H1: {len(results['missing_h1'])}")
print(f"\n=== BROKEN INTERNAL LINKS ===")
print(f"Total broken internal links: {len(results['broken_internal'])}")

# Group broken links by source file
from collections import Counter
by_source = Counter(item[0] for item in results["broken_internal"] if len(item) >= 2)
print("\nTop 20 files with most broken links:")
for src, count in by_source.most_common(20):
    print(f"  {count:3d}  {src}")

# Show first 30 broken links
print("\n=== SAMPLE BROKEN LINKS (first 30) ===")
for item in results["broken_internal"][:30]:
    if len(item) == 3:
        print(f"  {item[0]} -> {item[1]} ({item[2]})")
    else:
        print(f"  {item}")

# Write full report
with open("/Users/miami2/zion-support.github.io/crawl-audit-report.json", "w") as f:
    json.dump(results, f, indent=2)
print(f"\nFull report written to crawl-audit-report.json")
