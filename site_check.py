#!/usr/bin/env python3
"""
Site integrity checker for https://ziontechgroup.com
Crawls internal links only, reports broken URLs with classification.
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
import re
import sys
import json
from collections import deque

BASE_URL = "https://ziontechgroup.com"
TIMEOUT = 15
MAX_PAGES = 500  # safety cap
USER_AGENT = "Mozilla/5.0 (compatible; SiteIntegrityChecker/1.0)"

def is_internal(url, base):
    """Check if URL is internal to the base domain."""
    parsed = urlparse(url)
    base_parsed = urlparse(base)
    # Must have a netloc and match the base domain (with or without www)
    if not parsed.netloc:
        return False
    return (parsed.netloc == base_parsed.netloc or 
            parsed.netloc == f"www.{base_parsed.netloc}" or
            base_parsed.netloc == f"www.{parsed.netloc}")

def classify_broken(url, status_code, final_url):
    """Classify a broken URL into one of three categories."""
    if status_code in (404, 410):
        return "missing page"
    elif status_code in (301, 302, 307, 308):
        return "stale redirect"
    elif status_code >= 500:
        return "server error"
    elif status_code == 0:
        # Connection error - check if it's an external reference
        parsed = urlparse(url)
        if parsed.scheme in ('http', 'https') and parsed.netloc:
            # It's an external URL that failed
            return "external reference error"
        return "connection error"
    else:
        return f"other (HTTP {status_code})"

def extract_links(html, base_url):
    """Extract all links from HTML content."""
    soup = BeautifulSoup(html, 'html.parser')
    links = set()
    
    # Find all <a> tags with href
    for a_tag in soup.find_all('a', href=True):
        href = a_tag['href'].strip()
        if not href or href.startswith(('#', 'javascript:', 'mailto:', 'tel:')):
            continue
        
        full_url = urljoin(base_url, href)
        full_url, _ = urldefrag(full_url)  # remove fragment
        
        # Only internal links
        if is_internal(full_url, BASE_URL):
            links.add(full_url)
    
    # Also check for links in other tags (img src, link href, script src)
    # but only for completeness - we mainly care about <a> links
    for tag in soup.find_all(['img', 'link', 'script'], src=True):
        src = tag['src'].strip()
        if src and not src.startswith(('data:', 'javascript:')):
            full_url = urljoin(base_url, src)
            full_url, _ = urldefrag(full_url)
            if is_internal(full_url, BASE_URL):
                links.add(full_url)
    
    return links

def crawl_site():
    """Crawl the site breadth-first, checking each URL."""
    session = requests.Session()
    session.headers.update({'User-Agent': USER_AGENT})
    session.timeout = TIMEOUT
    
    visited = set()
    to_visit = deque([BASE_URL])
    broken = []
    successful = 0
    total_checks = 0
    
    print(f"Starting crawl of {BASE_URL}")
    print(f"Max pages: {MAX_PAGES}, Timeout: {TIMEOUT}s")
    print("-" * 60)
    
    while to_visit and total_checks < MAX_PAGES:
        url = to_visit.popleft()
        
        # Skip if already visited
        if url in visited:
            continue
        visited.add(url)
        total_checks += 1
        
        if total_checks % 20 == 0:
            print(f"Progress: {total_checks} URLs checked, {len(broken)} broken found...")
        
        try:
            response = session.get(url, allow_redirects=True, timeout=TIMEOUT)
            final_url = response.url
            
            if response.status_code == 200:
                successful += 1
                # Only extract links from successful pages
                if 'text/html' in response.headers.get('Content-Type', ''):
                    new_links = extract_links(response.text, url)
                    for link in new_links:
                        if link not in visited:
                            to_visit.append(link)
            else:
                # Non-200 status
                classification = classify_broken(url, response.status_code, final_url)
                broken.append({
                    'url': url,
                    'status_code': response.status_code,
                    'final_url': final_url,
                    'classification': classification
                })
                
        except requests.exceptions.RequestException as e:
            # Connection error (status_code = 0)
            classification = classify_broken(url, 0, url)
            broken.append({
                'url': url,
                'status_code': 0,
                'final_url': url,
                'classification': classification,
                'error': str(e)[:200]
            })
    
    print("-" * 60)
    print(f"\n=== CRAWL COMPLETE ===")
    print(f"Total crawled (unique URLs checked): {total_checks}")
    print(f"HTTP 200 count: {successful}")
    print(f"Broken count: {len(broken)}")
    
    if broken:
        print(f"\n=== FIRST 10 BROKEN URLs ===")
        for i, b in enumerate(broken[:10], 1):
            print(f"{i}. {b['url']}")
            print(f"   Status: {b['status_code']} | Classification: {b['classification']}")
            if 'error' in b:
                print(f"   Error: {b['error']}")
            print()
        
        # Classification summary
        print("=== CLASSIFICATION SUMMARY ===")
        classes = {}
        for b in broken:
            cls = b['classification']
            classes[cls] = classes.get(cls, 0) + 1
        for cls, count in sorted(classes.items(), key=lambda x: -x[1]):
            print(f"  {cls}: {count}")
    
    return {
        'total_crawled': total_checks,
        'http_200_count': successful,
        'broken_count': len(broken),
        'broken_urls': broken[:10]
    }

if __name__ == '__main__':
    result = crawl_site()
    # Print JSON for easy parsing
    print("\n=== JSON OUTPUT ===")
    print(json.dumps(result, indent=2, default=str))
