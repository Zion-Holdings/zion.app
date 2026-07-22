#!/usr/bin/env python3
"""Live site integrity check for ziontechgroup.com"""
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

BASE_URL = "https://ziontechgroup.com"
DOMAIN = "ziontechgroup.com"
MAX_PAGES = 500
REQUEST_TIMEOUT = 15
DELAY = 0.3  # polite delay between requests

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0)"
})

visited = set()
broken = []
http200 = 0
total = 0

def classify_broken(url, status_code, error):
    if status_code is None:
        return "network/connection error"
    if status_code in (301, 302, 307, 308):
        return "stale redirect"
    if status_code == 404:
        return "missing page"
    if status_code >= 400:
        return f"HTTP error {status_code}"
    return "unknown"

def same_domain(url):
    parsed = urlparse(url)
    return parsed.netloc == DOMAIN

def check_url(url):
    """Follow redirects and return final status code, or None on connection error."""
    try:
        resp = session.head(url, allow_redirects=True, timeout=REQUEST_TIMEOUT, verify=True)
        # Some sites block HEAD; fall back to GET
        if resp.status_code >= 400:
            resp = session.get(url, allow_redirects=True, timeout=REQUEST_TIMEOUT, verify=True, stream=True)
            resp.close()
        return resp.status_code, None
    except requests.exceptions.TooManyRedirects:
        return 310, "Too many redirects"
    except requests.exceptions.ConnectionError as e:
        return None, f"Connection error: {e}"
    except requests.exceptions.Timeout:
        return None, "Timeout"
    except requests.exceptions.RequestException as e:
        return None, str(e)

def crawl(start_url):
    global total, http200
    queue = [start_url]
    to_visit = set(queue)

    while queue and len(visited) < MAX_PAGES:
        url = queue.pop(0)
        if url in visited:
            continue
        visited.add(url)
        total += 1

        status, error = check_url(url)
        if status == 200:
            http200 += 1
        else:
            broken.append((url, status, error))
            continue

        # Parse internal links from the page
        try:
            resp = session.get(url, timeout=REQUEST_TIMEOUT, verify=True)
            soup = BeautifulSoup(resp.text, "html.parser")
            for tag in soup.find_all("a", href=True):
                href = tag["href"].strip()
                if not href or href.startswith(("#", "mailto:", "tel:", "javascript:")):
                    continue
                absolute = urljoin(url, href)
                parsed = urlparse(absolute)
                # Only internal http(s) links on same domain
                if parsed.scheme in ("http", "https") and same_domain(absolute):
                    if absolute not in visited and absolute not in to_visit:
                        to_visit.add(absolute)
                        queue.append(absolute)
        except Exception:
            pass
        time.sleep(DELAY)

if __name__ == "__main__":
    print(f"Crawling {BASE_URL} ...")
    crawl(BASE_URL)
    print(f"Total crawled: {total}")
    print(f"HTTP 200 count: {http200}")
    print(f"Broken count: {len(broken)}")
    if broken:
        print("First 10 broken URLs:")
        for item in broken[:10]:
            url, status, error = item
            classification = classify_broken(url, status, error)
            print(f"  [{classification}] {url} (status={status}, error={error})")
