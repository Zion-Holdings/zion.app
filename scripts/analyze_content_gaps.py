#!/usr/bin/env python3
"""Analyze the full public/ directory structure and identify content gaps."""
import os
import json

PUBLIC_DIR = "/Users/klebergarciaalcatrao/zion-support.github.io/public"
SERVICES_JSON = "/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json"

def get_public_structure():
    dirs = set()
    html_files = set()
    for root, dirnames, filenames in os.walk(PUBLIC_DIR):
        # Check current dir for index.html
        if "index.html" in filenames:
            rel = os.path.relpath(root, PUBLIC_DIR).replace(os.sep, "/")
            if rel == ".":
                dirs.add("/")
            else:
                dirs.add("/" + rel + "/")
        # Check subdirectories
        for d in dirnames:
            full = os.path.join(root, d)
            idx = os.path.join(full, "index.html")
            if os.path.exists(idx):
                rel = os.path.relpath(full, PUBLIC_DIR).replace(os.sep, "/")
                dirs.add("/" + rel + "/")
    return dirs, html_files

def main():
    dirs, html_files = get_public_structure()
    print(f"Public dirs with index.html: {len(dirs)}")

    with open(SERVICES_JSON) as f:
        data = json.load(f)
    print(f"servicesData.json entries: {len(data)}")

    from collections import Counter
    cats = Counter(s.get("category", "unknown") for s in data)
    print("\nCategories in servicesData.json:")
    for c, n in cats.most_common():
        print(f"  {c}: {n}")

    top_level_dirs = sorted(set(d.split("/")[1] for d in dirs if d != "/" and len(d.split("/")) > 2))
    print(f"\nTop-level public dirs: {len(top_level_dirs)}")
    for d in top_level_dirs[:30]:
        count = sum(1 for x in dirs if x.startswith(f"/{d}/"))
        print(f"  /{d}/ — {count} subdirs")

    print("\n--- Key page existence check ---")
    for check in ["/", "/about/", "/about/team/", "/contact/", "/services/", "/pricing/", "/blog/", "/careers/", "/partners/", "/faq/", "/case-studies/", "/tools/", "/ai-lab/", "/products/", "/industries/", "/industries/retail/", "/industries/healthcare/", "/industries/finance/", "/privacy/", "/terms/", "/cookies/", "/sla/", "/consultation/", "/configurator/", "/status/", "/proposal-generator/", "/proposals/", "/site-map/"]:
        exists = check in dirs
        print(f"  {check}: {'EXISTS' if exists else 'MISSING'}")

if __name__ == "__main__":
    main()
