#!/usr/bin/env python3
"""Analyze the relationship between servicesData.json and actually-built pages."""
import json
import os
import re

PUBLIC_DIR = "/Users/klebergarciaalcatrao/zion-support.github.io/public"
SERVICES_JSON = "/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json"
SITEMAP = "/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml"

def get_built_service_paths():
    """Get service paths that actually exist as HTML in public/"""
    paths = set()
    svc_dir = os.path.join(PUBLIC_DIR, "services")
    if os.path.exists(svc_dir):
        for entry in os.listdir(svc_dir):
            full = os.path.join(svc_dir, entry)
            if os.path.isdir(full):
                idx = os.path.join(full, "index.html")
                if os.path.exists(idx):
                    paths.add(entry)  # just the slug
            elif entry.endswith(".html"):
                paths.add(entry.replace(".html", ""))
    return paths

def get_sitemap_service_ids():
    """Extract service IDs from sitemap.xml"""
    with open(SITEMAP) as f:
        content = f.read()
    ids = re.findall(r'/services/([a-zA-Z0-9\-_]+)/', content)
    # Remove duplicates and the index page
    return set(ids)

def get_servicesdata_ids():
    """Extract service IDs from servicesData.json"""
    with open(SERVICES_JSON) as f:
        data = json.load(f)
    ids = set()
    for svc in data:
        if 'id' in svc:
            ids.add(svc['id'])
    return ids

def main():
    built = get_built_service_paths()
    sitemap_ids = get_sitemap_service_ids()
    json_ids = get_servicesdata_ids()

    print(f"Built service pages (public/services/*): {len(built)}")
    print(f"Sitemap service IDs: {len(sitemap_ids)}")
    print(f"servicesData.json IDs: {len(json_ids)}")

    # Which JSON IDs are in sitemap but not built?
    in_json_not_built = json_ids - built
    in_json_not_sitemap = json_ids - sitemap_ids
    in_sitemap_not_json = sitemap_ids - json_ids
    in_built_not_json = built - json_ids

    print(f"\nJSON services NOT built (in JSON but not as HTML): {len(in_json_not_built)}")
    print(f"JSON services NOT in sitemap: {len(in_json_not_sitemap)}")
    print(f"Sitemap services NOT in JSON: {len(in_sitemap_not_json)}")
    print(f"Built services NOT in JSON: {len(in_built_not_json)}")

    # Sample
    print(f"\n--- JSON not built (sample 10) ---")
    for s in sorted(in_json_not_built)[:10]:
        print(f"  {s}")

    print(f"\n--- Sitemap not in JSON (sample 10) ---")
    for s in sorted(in_sitemap_not_json)[:10]:
        print(f"  {s}")

    print(f"\n--- Built not in JSON (sample 10) ---")
    for s in sorted(in_built_not_json)[:10]:
        print(f"  {s}")

    # Overlap
    all_three = json_ids & sitemap_ids & built
    print(f"\nIn all three (JSON + sitemap + built): {len(all_three)}")

    # Check the sitemap URL format - do they have trailing slashes?
    print(f"\n--- Sitemap URL format check ---")
    with open(SITEMAP) as f:
        lines = f.readlines()
    service_lines = [l for l in lines if '/services/' in l and '<loc>' in l]
    with_slash = sum(1 for l in service_lines if l.strip().endswith('</loc>') and not l.strip().endswith('services</loc>'))
    print(f"Service URLs with trailing slash: ~{with_slash}/{len(service_lines)}")

    # Check the canonical URLs in a sample built page
    print(f"\n--- Sample built service page canonical ---")
    if built:
        sample = sorted(built)[0]
        html_path = os.path.join(PUBLIC_DIR, "services", sample, "index.html")
        with open(html_path) as f:
            html = f.read()
        canon = re.findall(r'<link rel="canonical" href="([^"]+)"', html)
        print(f"Page: /services/{sample}/")
        print(f"Canonical: {canon[0] if canon else 'NOT FOUND'}")
        print(f"HTML size: {len(html)}")

    # Check the app page template
    print(f"\n--- Check app/services template ---")
    app_svc_dir = "/Users/klebergarciaalcatrao/zion-support.github.io/app/services"
    has_dynamic_route = os.path.exists(os.path.join(app_svc_dir, "[id]"))
    print(f"Has [id] dynamic route: {has_dynamic_route}")

    # Check services page
    svc_page = os.path.join(app_svc_dir, "page.tsx")
    if os.path.exists(svc_page):
        with open(svc_page) as f:
            content = f.read()
        print(f"app/services/page.tsx exists, length: {len(content)}")

    # Check for dynamic route
    for root, dirs, files in os.walk(app_svc_dir):
        for d in dirs:
            if d.startswith("["):
                print(f"Found dynamic route dir: {os.path.join(root, d)}")

if __name__ == "__main__":
    main()
