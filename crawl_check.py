"""
Live site integrity check for https://ziontechgroup.com
Follows internal links only, reports broken URLs with classification.
"""
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import sys
import time

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 500
DELAY = 0.3  # polite delay between requests

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
})

def is_internal(url):
    parsed = urlparse(url)
    base = urlparse(BASE_URL)
    return parsed.scheme in ("http", "https") and (parsed.netloc == base.netloc or parsed.netloc == "")

def extract_links(html, current_url):
    soup = BeautifulSoup(html, "html.parser")
    links = set()
    for a in soup.find_all("a", href=True):
        href = a.get("href", "").strip()
        # skip anchors, javascript, mailto, tel, etc.
        if href.startswith(("#", "javascript:", "mailto:", "tel:", "sms:")):
            continue
        absolute = urljoin(current_url, href)
        if is_internal(absolute):
            links.add(absolute)
    return links

def classify_broken(url, status_code, redirected_to=None):
    if status_code == 404:
        return "missing page"
    if status_code in (403, 401):
        return "missing page"
    if 300 <= status_code < 400 and redirected_to:
        redirected_parsed = urlparse(redirected_to)
        if redirected_parsed.scheme not in ("http", "https") or redirected_parsed.netloc == "":
            return "stale redirect"
        # check if the redirect target is itself broken
        return "stale redirect"
    if 500 <= status_code < 600:
        return "missing page"
    if status_code in (408, 429, 502, 503, 504):
        return "missing page"
    # If we got here but it's not 200, classify as missing
    return "missing page"

def check_url(url):
    """Return (status_code, redirected_to, error_type, response_text)"""
    try:
        resp = session.get(url, timeout=15, allow_redirects=False)
        status = resp.status_code
        location = resp.headers.get("Location", "")
        if 300 <= status < 400 and location:
            # follow redirect once to see final status
            try:
                redir_resp = session.get(location, timeout=15, allow_redirects=False)
                redir_status = redir_resp.status_code
                if redir_status == 200:
                    return (status, location, None, "")  # redirect to live page = ok
                else:
                    return (status, location, classify_broken(url, redir_status, location), "")
            except Exception:
                return (status, location, "stale redirect", "")
        if status == 200:
            return (status, "", None, resp.text)
        return (status, "", classify_broken(url, status, location), "")
    except requests.exceptions.Timeout:
        return (0, "", "missing page", "timeout")
    except requests.exceptions.ConnectionError:
        return (0, "", "missing page", "connection error")
    except Exception as e:
        return (0, "", "missing page", str(e)[:80])

visited = set()
queue = [BASE_URL]
broken = []
good_count = 0
broken_count = 0
checked = 0

while queue and len(visited) < MAX_PAGES:
    url = queue.pop(0)
    if url in visited:
        continue
    visited.add(url)
    checked += 1
    
    status, redir_to, broken_type, body = check_url(url)
    
    if broken_type:
        broken_count += 1
        broken.append({
            "url": url,
            "status": status,
            "redirected_to": redir_to,
            "classification": broken_type,
        })
        # Don't follow links from broken pages
        continue
    
    if status == 200:
        good_count += 1
        # Extract and enqueue links
        links = extract_links(body or "", url)
        new_links = 0
        for link in links:
            if link not in visited and link not in queue:
                queue.append(link)
                new_links += 1
        # Polite delay
        time.sleep(DELAY)
    else:
        broken_count += 1
        broken.append({
            "url": url,
            "status": status,
            "redirected_to": "",
            "classification": "missing page",
        })

print("=" * 70)
print(f"Site: {BASE_URL}")
print(f"Total crawled (visited): {checked}")
print(f"HTTP 200 count: {good_count}")
print(f"Broken count: {broken_count}")
print("=" * 70)

if broken:
    print("\nFirst 10 broken URLs:")
    for i, b in enumerate(broken[:10], 1):
        extra = f" → {b['redirected_to']}" if b['redirected_to'] else ""
        print(f"  {i}. [{b['status']}] {b['classification']}: {b['url']}{extra}")
else:
    print("\nNo broken URLs found.")

print(f"\nFull broken list: {len(broken)} URLs")
