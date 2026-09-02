#!/usr/bin/env python3
"""Site integrity crawl v2 — skip non-HTTP schemes, real HTTP errors only"""
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag, uses_relative
import time

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 300
DELAY = 0.4

# Schemes we do NOT treat as broken links (these are not HTTP resources)
SKIP_SCHEMES = {"mailto", "tel", "javascript", "sms", "whatsapp", "ftp", "ftps"}

def is_internal(url, base):
    parsed = urlparse(url)
    base_parsed = urlparse(base)
    return (parsed.netloc == base_parsed.netloc or parsed.netloc == "")

def main():
    visited = set()
    to_visit = [BASE_URL]
    http_200 = 0
    broken = []  # (url, status, final_url, classification)

    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0; +https://ziontechgroup.com)"
    })

    while to_visit and len(visited) < MAX_PAGES:
        url = to_visit.pop(0)
        url, _ = urldefrag(url)

        if url in visited:
            continue
        visited.add(url)

        try:
            resp = session.get(url, timeout=15, allow_redirects=True)
            final_url = resp.url
            scheme = urlparse(url).scheme

            if resp.status_code == 200:
                http_200 += 1
                content_type = resp.headers.get("Content-Type", "")
                if "text/html" in content_type or "application/xhtml+xml" in content_type:
                    soup = BeautifulSoup(resp.text, "html.parser")
                    for a in soup.find_all("a", href=True):
                        raw_href = str(a["href"])
                        # Skip non-HTTP schemes before even resolving
                        href_scheme = urlparse(raw_href).scheme.lower()
                        if href_scheme in SKIP_SCHEMES:
                            continue
                        link = urljoin(url, raw_href)
                        link, _ = urldefrag(link)
                        if is_internal(link, BASE_URL) and link not in visited:
                            to_visit.append(link)
            else:
                # Classify
                if 300 <= resp.status_code < 400:
                    classification = "stale_redirect"
                elif resp.status_code == 404:
                    classification = "missing_page"
                elif 400 <= resp.status_code < 500:
                    classification = "client_error"
                elif 500 <= resp.status_code < 600:
                    classification = "server_error"
                else:
                    classification = "other_http_error"
                broken.append((url, resp.status_code, final_url, classification))

        except requests.exceptions.Timeout:
            broken.append((url, "timeout", None, "timeout"))
        except requests.exceptions.ConnectionError:
            broken.append((url, "connection_error", None, "connection_error"))
        except requests.exceptions.TooManyRedirects:
            broken.append((url, "redirect_loop", None, "redirect_loop"))
        except Exception as e:
            broken.append((url, f"error: {type(e).__name__}", None, "error"))

        time.sleep(DELAY)

    # Dedupe broken by URL (keep first occurrence)
    seen = set()
    unique_broken = []
    for b in broken:
        if b[0] not in seen:
            seen.add(b[0])
            unique_broken.append(b)

    print(f"TOTAL_CRAWLED: {len(visited)}")
    print(f"HTTP_200: {http_200}")
    print(f"BROKEN_COUNT: {len(unique_broken)}")
    print()

    if unique_broken:
        print("=== BROKEN URLS (first 10) ===")
        for i, (url, status, final, cls) in enumerate(unique_broken[:10]):
            print(f"{i+1}. {url}")
            print(f"   STATUS: {status}")
            if final:
                print(f"   REDIRECTED_TO: {final}")
            print(f"   CLASSIFICATION: {cls}")
            print()

    # Summary by classification
    from collections import Counter
    cls_count = Counter(b[3] for b in unique_broken)
    print("=== CLASSIFICATION SUMMARY ===")
    for cls, count in cls_count.most_common():
        print(f"  {cls}: {count}")
    print()
    print("=== OVERALL SUMMARY ===")
    print(f"Total crawled: {len(visited)}")
    print(f"HTTP 200: {http_200}")
    print(f"Broken (real HTTP errors + connection issues): {len(unique_broken)}")

if __name__ == "__main__":
    main()
