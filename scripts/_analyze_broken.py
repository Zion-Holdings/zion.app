#!/usr/bin/env python3
"""Check which 'broken' live URLs actually exist in the local repo, and which are truly missing."""
import os, json

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"
APP_DIR = os.path.join(BASE, "app")

# Parse broken.txt to get the list of 404 URLs
with open(os.path.join(BASE, "broken.txt")) as f:
    lines = f.readlines()

broken_urls = []
for line in lines:
    line = line.strip()
    if line.startswith("404"):
        url = line.split("404 ", 1)[1]
        broken_urls.append(url)

# For each URL, check if a corresponding page exists locally
truly_missing = []
exist_locally = []

for url in broken_urls:
    path = url.replace("https://ziontechgroup.com", "")
    # service pages: /services/slug/ -> app/services/slug/page.tsx
    if path.startswith("/services/"):
        slug = path.rstrip("/").split("/services/")[-1]
        # Check exact match and hashed variants
        found = False
        # exact
        if os.path.exists(os.path.join(APP_DIR, "services", slug, "page.tsx")):
            found = True
        # try with hash suffix
        if not found:
            services_dir = os.path.join(APP_DIR, "services")
            if os.path.isdir(services_dir):
                for d in os.listdir(services_dir):
                    if d.startswith(slug + "-") or d == slug:
                        if os.path.exists(os.path.join(services_dir, d, "page.tsx")):
                            found = True
                            break
        if found:
            exist_locally.append(url)
        else:
            truly_missing.append(url)
    elif path.startswith("/tools/"):
        slug = path.rstrip("/").split("/tools/")[-1]
        if os.path.exists(os.path.join(APP_DIR, "tools", slug, "page.tsx")):
            exist_locally.append(url)
        else:
            truly_missing.append(url)
    elif path.startswith("/blog/"):
        slug = path.rstrip("/").split("/blog/")[-1]
        if os.path.isfile(os.path.join(APP_DIR, "blog", slug, "page.tsx")):
            exist_locally.append(url)
        else:
            truly_missing.append(url)
    elif path.startswith("/ai/") or path.startswith("/ai-") or path.startswith("/managed-it") or path.startswith("/cybersecurity") or path.startswith("/cloud-cost"):
        # root-level pages
        slug = path.rstrip("/")
        if os.path.exists(os.path.join(APP_DIR, slug.lstrip("/"), "page.tsx")):
            exist_locally.append(url)
        else:
            truly_missing.append(url)
    else:
        slug = path.rstrip("/")
        if os.path.exists(os.path.join(APP_DIR, slug.lstrip("/"), "page.tsx")):
            exist_locally.append(url)
        else:
            truly_missing.append(url)

result = {
    "total_broken_live": len(broken_urls),
    "exist_locally_but_not_deployed": len(exist_locally),
    "truly_missing_from_repo": len(truly_missing),
    "truly_missing_list": truly_missing,
    "exist_locally_list": exist_locally[:20],
}
with open("broken_link_analysis.json", "w") as f:
    json.dump(result, f, indent=2)
print(f"Total broken on live: {len(broken_urls)}")
print(f"Exist locally (not deployed): {len(exist_locally)}")
print(f"Truly missing from repo: {len(truly_missing)}")
for url in truly_missing:
    print(f"  MISSING: {url}")
