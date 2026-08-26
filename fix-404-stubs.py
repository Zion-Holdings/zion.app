#!/usr/bin/env python3
"""
Fix all 404 URLs on ziontechgroup.com by creating HTML stubs.
Reads crawl_report.json and creates stubs for all broken URLs.
"""

import json
import os
import hashlib

BASE = "https://ziontechgroup.com"
PUBLIC_DIR = "public"

def url_to_path(url):
    """Convert URL to local filesystem path under public/"""
    path = url.replace(BASE, "")
    if path == "/" or path == "":
        return "index.html"
    # Remove trailing slash
    if path.endswith("/"):
        path = path[:-1]
    # Ensure it ends with index.html for directory URLs
    if not path.endswith(".html") and "/" not in path:
        return f"{path}/index.html"
    return path

def create_stub_content(url, title=None):
    """Create simple HTML stub content for a 404 URL"""
    if title is None:
        title = url.replace(BASE, "").strip("/").replace("-", " ").title()
    
    # Extract slug for nicer title
    slug = url.replace(BASE, "").strip("/")
    if slug.startswith("services/"):
        slug = slug.replace("services/", "")
    elif slug.startswith("blog/"):
        slug = slug.replace("blog/", "")
    
    # Clean up the title
    title = slug.replace("-", " ").replace("--", " ").strip().title()
    if not title:
        title = "Page"
    
    # Determine the category for the back link
    if slug.startswith("services/") or "/services/" in url:
        back_link = "/services/"
        back_text = "Services"
    elif slug.startswith("blog/") or "/blog/" in url:
        back_link = "/blog/"
        back_text = "Blog"
    else:
        back_link = "/"
        back_text = "Home"
    
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{title} - Zion Tech Group">
  <meta name="robots" content="noindex">
  <link rel="canonical" href="{url}">
  <link rel="icon" href="/favicon.ico">
  <style>
    body {{ margin: 0; font-family: system-ui, -apple-system, sans-serif; background: #0b1220; color: #e6f0ff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; }}
    .container {{ max-width: 600px; text-align: center; }}
    h1 {{ font-size: 2rem; margin-bottom: 1rem; }}
    p {{ color: #94a3b8; margin-bottom: 1.5rem; line-height: 1.6; }}
    a {{ color: #60a5fa; text-decoration: none; }}
    ul {{ text-align: left; color: #cbd5e1; line-height: 1.8; margin: 1rem auto; max-width: 480px; }}
  </style>
</head>
<body>
  <div class="container">
    <h1>{title}</h1>
    <p>This page is part of Zion Tech Group. Visit our <a href="{back_link}">{back_text}</a> section for more content.</p>
    <p><a href="{back_link}">← Back to {back_text}</a></p>
  </div>
</body>
</html>
"""

def main():
    # Load crawl report
    with open("crawl_report.json", "r") as f:
        report = json.load(f)
    
    print(f"Processing {report['total']} URLs...")
    print(f"Found {report['broken_404']} 404 URLs to fix")
    
    created = 0
    exists = 0
    errors = 0
    
    for entry in report['all_pages']:
        if entry['status'] == 404:
            url = entry['url']
            path = url_to_path(url)
            full_path = os.path.join(PUBLIC_DIR, path)
            
            # Create directory if needed
            dir_path = os.path.dirname(full_path)
            if dir_path and not os.path.exists(dir_path):
                os.makedirs(dir_path, exist_ok=True)
            
            # Check if file already exists
            if os.path.exists(full_path):
                exists += 1
                print(f"  Already exists: {path}")
                continue
            
            # Create stub
            try:
                content = create_stub_content(url, entry.get('title'))
                with open(full_path, "w") as f:
                    f.write(content)
                
                # Calculate hash
                file_hash = hashlib.sha256(content.encode()).hexdigest()
                
                created += 1
                print(f"  Created: {path} ({file_hash[:8]}...)")
                
            except Exception as e:
                errors += 1
                print(f"  Error creating {path}: {e}")
    
    print(f"\n{'='*60}")
    print(f"Created: {created} stubs")
    print(f"Already exists: {exists}")
    print(f"Errors: {errors}")
    print(f"\nTotal 404s processed: {created + exists + errors}")
    
    # Save manifest
    manifest_path = os.path.join(PUBLIC_DIR, "stubs-manifest.sha256")
    with open(manifest_path, "wb") as f:
        for entry in report['all_pages']:
            if entry['status'] == 404:
                url = entry['url']
                path = url_to_path(url)
                full_path = os.path.join(PUBLIC_DIR, path)
                if os.path.exists(full_path):
                    with open(full_path, "rb") as rf:
                        file_hash = hashlib.sha256(rf.read()).hexdigest()
                    f.write(f"{file_hash}  {path}\n".encode())

    print(f"\nManifest saved to: {manifest_path}")
    print(f"Ready for commit and push!")

if __name__ == "__main__":
    main()
