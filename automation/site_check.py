import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import sys

BASE_DOMAIN = "ziontechgroup.com"
START_URL = "https://ziontechgroup.com"

# BFS crawl
to_visit = [START_URL]
visited = set()
results = {}  # url -> (status_code, content_type, error_type)
broken = []

session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; SiteBot/1.0)"})

while to_visit:
    url = to_visit.pop(0)
    if url in visited:
        continue
    visited.add(url)

    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        final_url = resp.url
        status = resp.status_code

        # Classify
        error_type = None
        if status == 200:
            pass
        elif 300 <= status < 400:
            error_type = "stale redirect"
        elif status == 404:
            error_type = "missing page"
        else:
            error_type = f"http error ({status})"

        results[url] = (status, error_type)

        if error_type:
            broken.append((url, status, error_type))

        # If internal and 200, extract links for further crawling
        parsed = urlparse(final_url)
        if parsed.netloc.endswith(BASE_DOMAIN) and status == 200:
            soup = BeautifulSoup(resp.text, "html.parser")
            for tag in soup.find_all("a", href=True):
                link = urljoin(final_url, tag["href"])
                p = urlparse(link)
                # Only follow same domain
                if p.netloc.endswith(BASE_DOMAIN):
                    # Strip fragment, clean
                    clean = p.scheme + "://" + p.netloc + p.path
                    if clean not in visited and clean not in to_visit:
                        to_visit.append(clean)
    except requests.exceptions.Timeout:
        is_ext = not urlparse(url).netloc.endswith(BASE_DOMAIN)
        results[url] = ("timeout", "external reference error" if is_ext else "timeout")
        broken.append((url, "timeout", "external reference error" if is_ext else "timeout"))
    except requests.exceptions.ConnectionError:
        is_ext = not urlparse(url).netloc.endswith(BASE_DOMAIN)
        results[url] = ("connection_error", "external reference error" if is_ext else "connection error")
        broken.append((url, "connection_error", "external reference error" if is_ext else "connection error"))
    except requests.exceptions.TooManyRedirects:
        results[url] = ("too_many_redirects", "stale redirect")
        broken.append((url, "too_many_redirects", "stale redirect"))
    except Exception as e:
        is_ext = not urlparse(url).netloc.endswith(BASE_DOMAIN)
        results[url] = (str(type(e).__name__), "external reference error" if is_ext else str(e))
        broken.append((url, str(type(e).__name__), "external reference error" if is_ext else str(e)))
    finally:
        sys.stdout.write(f"\rCrawled {len(visited)} / queue {len(to_visit)}")
        sys.stdout.flush()

print()
total = len(results)
count_200 = sum(1 for v in results.values() if isinstance(v[0], int) and v[0] == 200)
broken_count = len(broken)

print(f"TOTAL CRAWLED: {total}")
print(f"HTTP 200 COUNT: {count_200}")
print(f"BROKEN COUNT: {broken_count}")
print()

if broken_count > 0:
    print("FIRST 10 BROKEN URLS:")
    for i, (url, status, error_type) in enumerate(broken[:10], 1):
        print(f"  {i}. {url}")
        print(f"     Status: {status}")
        print(f"     Classification: {error_type}")
else:
    print("No broken URLs found.")
