import json, re, sys
from urllib.parse import urljoin, urlparse
from pathlib import Path

import requests
from bs4 import BeautifulSoup

BASE = 'https://ziontechgroup.com'
MAX_PAGES = 300
ALLOWED_HOSTS = {'ziontechgroup.com', 'www.ziontechgroup.com'}
HEADERS = {'User-Agent':'Mozilla/5.0 (compatible; ZionDeepCrawler/1.0)'}

REPO_ROOT = Path(__file__).resolve().parents[2]
DATA_DIR = REPO_ROOT / 'outreach_monitor' / 'processed'
DATA_DIR.mkdir(parents=True, exist_ok=True)

visited = set()
queue = [BASE.rstrip('/') + '/']
broken = []
improvements = []
terms_seen = set()

def norm(url: str) -> str:
    p = urlparse(url)
    p = p._replace(fragment='')
    normed = (p.scheme + '://' + p.netloc + p.path).rstrip('/')
    return normed

def crawl():
    while queue and len(visited) < MAX_PAGES:
        url = queue.pop(0)
        if url in visited:
            continue
        visited.add(url)
        try:
            r = requests.get(url, headers=HEADERS, timeout=20, allow_redirects=True)
            final = norm(str(r.url))
            ct = r.headers.get('content-type','')
            if r.status_code >= 400:
                broken.append({'url': url, 'status': r.status_code, 'final': final})
                continue
            if 'text/html' not in ct.lower():
                continue
            soup = BeautifulSoup(r.text, 'html.parser')
            title = ''
            if soup.title and soup.title.string:
                title = soup.title.string.strip()
            desc = ''
            meta = soup.find('meta', attrs={'name':'description'})
            if meta and meta.get('content'):
                desc = meta['content'].strip()
            canon = ''
            link = soup.find('link', rel='canonical')
            if link and link.get('href'):
                canon = link['href'].strip()
            improvements.append({
                'url': url,
                'title': title,
                'description': desc,
                'canonical': canon,
                'status': r.status_code,
            })
            for a in soup.find_all('a', href=True):
                href = a.get('href','').strip()
                if not href or href.startswith(('#','mailto:','tel:','javascript:')):
                    continue
                nxt = norm(urljoin(final, href))
                host = urlparse(nxt).netloc.lower()
                if host and host not in ALLOWED_HOSTS:
                    continue
                if nxt not in visited:
                    queue.append(nxt)
            for terms_file in ['app/data/servicesData.ts']:
                p = REPO_ROOT / terms_file
                if p.exists():
                    text = p.read_text(encoding='utf-8', errors='ignore').lower()
                    for word in ['compliance','managed services','cloud migration','devsecops']:
                        if word in text:
                            terms_seen.add(word)
        except Exception as e:
            broken.append({'url': url, 'status': 'error', 'error': repr(e)})

crawl()
report = {
    'crawled': len(visited),
    'broken': broken,
    'improvements': improvements[:50],
    'seo_terms_present': sorted(terms_seen),
}
report_file = DATA_DIR / 'site_deep_crawl_report.json'
report_file.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({'crawled': len(visited), 'broken_count': len(broken), 'improvement_pages': len(improvements)}, ensure_ascii=False))
