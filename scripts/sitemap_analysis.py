#!/usr/bin/env python3
"""Compare sitemap URLs against local public/ directory to find root cause."""
import xml.etree.ElementTree as ET
import os
import json
import re
from collections import Counter

BASE_URL = "https://ziontechgroup.com"
PUBLIC_DIR = "/Users/klebergarciaalcatrao/zion-support.github.io/public"

def get_sitemap_urls():
    """Get URLs from sitemap.xml"""
    tree = ET.parse("/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml")
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for url in root.findall("sm:url", ns):
        loc = url.find("sm:loc", ns).text
        urls.append(loc)
    return urls

def get_public_html_files():
    """Get all HTML files in public/ directory"""
    html_files = set()
    for dirpath, dirnames, filenames in os.walk(PUBLIC_DIR):
        for f in filenames:
            if f.endswith(".html"):
                rel = os.path.relpath(os.path.join(dirpath, f), PUBLIC_DIR)
                html_files.add("/" + rel.replace(os.sep, "/"))
    return html_files

def get_public_dirs():
    """Get all directories that contain index.html in public/"""
    dirs = set()
    for dirpath, dirnames, filenames in os.walk(PUBLIC_DIR):
        if "index.html" in filenames:
            rel = os.path.relpath(dirpath, PUBLIC_DIR)
            if rel == ".":
                dirs.add("/")
            else:
                dirs.add("/" + rel.replace(os.sep, "/") + "/")
    return dirs

def sitemap_url_to_path(url):
    """Convert full URL to path"""
    return url.replace(BASE_URL, "")

def main():
    sitemap_urls = get_sitemap_urls()
    print(f"Sitemap URLs: {len(sitemap_urls)}")

    public_html_files = get_public_html_files()
    public_dirs = get_public_dirs()
    print(f"Public HTML files: {len(public_html_files)}")
    print(f"Public dirs with index.html: {len(public_dirs)}")

    # Convert sitemap URLs to paths
    sitemap_paths = [sitemap_url_to_path(u) for u in sitemap_urls]

    # Categorize
    services_urls = [p for p in sitemap_paths if p.startswith("/services/")]
    services_index = [p for p in sitemap_paths if p == "/services" or p == "/services/"]
    other_urls = [p for p in sitemap_paths if not p.startswith("/services/")]

    print(f"\nServices URLs in sitemap: {len(services_urls)}")
    print(f"Services index in sitemap: {len(services_index)}")
    print(f"Other URLs in sitemap: {len(other_urls)}")

    # Check which service URLs have corresponding HTML files
    services_with_file = []
    services_without_file = []

    for p in services_urls:
        # Try as directory (index.html)
        if p in public_dirs:
            services_with_file.append(p)
        # Try as .html file
        elif (p + ".html") in public_html_files or p in public_html_files:
            services_with_file.append(p)
        else:
            services_without_file.append(p)

    print(f"\nServices WITH files: {len(services_with_file)}")
    print(f"Services WITHOUT files: {len(services_without_file)}")

    # Check pattern: are the missing ones just not built yet?
    # The service pages in app/ are generated dynamically from servicesData.json
    print(f"\n--- Missing service URLs sample (first 30) ---")
    for p in sorted(services_without_file)[:30]:
        print(f"  {p}")

    # Check app/ directory for the same service slugs
    app_services_dir = "/Users/klebergarciaalcatrao/zion-support.github.io/app/services"
    app_service_files = set()
    for item in os.listdir(app_services_dir):
        item_path = os.path.join(app_services_dir, item)
        if os.path.isdir(item_path):
            app_service_files.add("/services/" + item + "/")
        elif item.endswith(".tsx"):
            app_service_files.add("/services/" + item.replace(".tsx", "/"))

    print(f"\nApp service pages: {len(app_service_files)}")

    # Check which sitemap URLs have app pages but no public HTML
    app_has_no_public = []
    for p in services_urls:
        if p not in app_service_files and p not in public_dirs:
            # Check if there's an app page for this slug
            slug = p.rstrip("/").split("/")[-1]
            has_app = any(slug in f for f in app_service_files)
            if not has_app:
                app_has_no_public.append(p)

    print(f"\nSitemap services with NO app page and NO public HTML: {len(app_has_no_public)}")
    if app_has_no_public:
        print("  Sample:", app_has_no_public[:20])

    # Check other URLs
    print(f"\n--- Non-service URLs in sitemap ---")
    for p in sorted(other_urls)[:30]:
        has_file = p in public_html_files or p in public_dirs or (p + ".html") in public_html_files
        if not has_file:
            print(f"  MISSING: {p}")

    # Save summary
    with open("sitemap_analysis.json", "w") as f:
        json.dump({
            "sitemap_total": len(sitemap_urls),
            "sitemap_services": len(services_urls),
            "sitemap_other": len(other_urls),
            "public_html_files": len(public_html_files),
            "public_dirs": len(public_dirs),
            "services_with_file": len(services_with_file),
            "services_without_file": len(services_without_file),
            "app_service_pages": len(app_service_files),
            "sitemap_services_no_app_no_public": len(app_has_no_public),
            "missing_service_urls_sample": sorted(services_without_file)[:100],
        }, f, indent=2)
    print(f"\nAnalysis saved to sitemap_analysis.json")

if __name__ == "__main__":
    main()
