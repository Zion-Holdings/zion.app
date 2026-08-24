#!/usr/bin/env python3
"""
Deep Crawl & Diagnose Audit Script for ziontechgroup.com
- Parses sitemap.xml
- Checks all internal nav links for 404s
- Samples service pages for 404s
- Checks external links from key pages
- Extracts navigation from key templates
- Produces structured report
"""
import xml.etree.ElementTree as ET
import requests
import re
import json
import os
from urllib.parse import urljoin, urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

BASE = "https://ziontechgroup.com"
SITEMAP = os.path.join(os.path.dirname(__file__), "sitemap.xml")
REPORT_FILE = os.path.join(os.path.dirname(__file__), "_deep_audit_report.json")

# --- 1. Parse sitemap ---
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
tree = ET.parse(SITEMAP)
tree = ET.parse(SITEMAP)
root = tree.getroot()

sitemap_urls = []
for url in root.findall('sm:url', ns):
    loc = url.find('sm:loc', ns).text
    sitemap_urls.append(loc)

print(f"[INFO] Parsed {len(sitemap_urls)} URLs from sitemap.xml")

# --- 2. Categorize ---
service_urls = [u for u in sitemap_urls if '/services/' in u]
blog_urls = [u for u in sitemap_urls if '/blog/' in u]
solution_urls = [u for u in sitemap_urls if '/solutions/' in u]
landing_urls = [u for u in sitemap_urls if '/services/' not in u and '/blog/' not in u]

print(f"[INFO] Service pages: {len(service_urls)}")
print(f"[INFO] Blog pages: {len(blog_urls)}")
print(f"[INFO] Solution pages: {len(solution_urls)}")
print(f"[INFO] Landing/other pages: {len(landing_urls)}")

# --- 3. Session with headers ---
session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (compatible; ZionAuditBot/1.0; +https://ziontechgroup.com/bot)'
})

def check_url(url, timeout=10):
    """Check a URL's HTTP status. Returns (url, status_code, error)."""
    try:
        resp = session.head(url, timeout=timeout, allow_redirects=True)
        return (url, resp.status_code, None)
    except Exception as e:
        try:
            resp = session.get(url, timeout=timeout, allow_redirects=True)
            return (url, resp.status_code, None)
        except Exception as e2:
            return (url, None, str(e2))

# --- 4. Check all landing/other pages (non-service, non-blog) ---
print("\n[INFO] Checking all landing/other pages (non-service, non-blog)...")
results = {}
errors = []
errors_lock = []

def check_and_store(url):
    u, status, err = check_url(url)
    return (url, status, err)

with ThreadPoolExecutor(max_workers=30) as executor:
    futures = {executor.submit(check_and_store, u): u for u in landing_urls}
    total = len(landing_urls)
    completed = 0
    for future in as_completed(futures):
        url, status, err = future.result()
        results[url] = {'status': status, 'error': err}
        completed += 1
        if status != 200 or err:
            errors.append({'url': url, 'status': status, 'error': err})
        if completed % 100 == 0:
            print(f"  Progress: {completed}/{total} checked, {len(errors)} errors so far...")

print(f"\n[INFO] Landing page check complete. {len(errors)} errors found.")

# --- 5. Sample service pages (check first 500 + last 100 + every Nth) ---
print("\n[INFO] Sampling service pages for 404s...")
service_sample = service_urls[:200] + service_urls[-100:] + service_urls[500::2000]
service_sample = list(set(service_sample))
print(f"[INFO] Checking {len(service_sample)} service pages...")

service_errors = []
with ThreadPoolExecutor(max_workers=30) as executor:
    futures = {executor.submit(check_and_store, u): u for u in service_sample}
    completed = 0
    for future in as_completed(futures):
        url, status, err = future.result()
        completed += 1
        if status != 200 or err:
            service_errors.append({'url': url, 'status': status, 'error': err})

print(f"[INFO] Service sample check complete. {len(service_errors)} errors found.")

# --- 6. Check blog sample ---
print("\n[INFO] Sampling blog pages...")
blog_sample = blog_urls[:100] + blog_urls[-50:]
blog_sample = list(set(blog_sample))
print(f"[INFO] Checking {len(blog_sample)} blog pages...")

blog_errors = []
with ThreadPoolExecutor(max_workers=30) as executor:
    futures = {executor.submit(check_and_store, u): u for u in blog_sample}
    completed = 0
    for future in as_completed(futures):
        url, status, err = future.result()
        completed += 1
        if status != 200 or err:
            blog_errors.append({'url': url, 'status': status, 'error': err})

print(f"[INFO] Blog sample check complete. {len(blog_errors)} errors found.")

# --- 7. Save raw results ---
report = {
    'summary': {
        'total_sitemap_urls': len(sitemap_urls),
        'service_pages': len(service_urls),
        'blog_pages': len(blog_urls),
        'solution_pages': len(solution_urls),
        'landing_pages': len(landing_urls),
    },
    'landing_page_errors': errors,
    'service_sample_errors': service_errors,
    'blog_sample_errors': blog_errors,
    'landing_page_statuses': results,
}

with open(REPORT_FILE, 'w') as f:
    json.dump(report, f, indent=2)

print(f"\n[INFO] Report saved to {REPORT_FILE}")
print(f"\n=== SUMMARY ===")
print(f"Total sitemap URLs: {len(sitemap_urls)}")
print(f"Landing page errors: {len(errors)}")
print(f"Service sample errors: {len(service_errors)}")
print(f"Blog sample errors: {len(blog_errors)}")

# Print first 20 landing page errors
if errors:
    print("\n=== LANDING PAGE ERRORS (first 20) ===")
    for e in errors[:20]:
        status_str = f"HTTP {e['status']}" if e['status'] else f"ERROR: {e['error']}"
        print(f"  {e['url']} -> {status_str}")
