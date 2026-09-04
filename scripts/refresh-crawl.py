#!/usr/bin/env python3
import requests
from xml.etree import ElementTree as ET
import json, time, re

SITE = 'https://ziontechgroup.com'
SITEMAP = SITE + '/sitemap.xml'
HEADERS = {'User-Agent': 'zion-audit/1.0'}

root = ET.fromstring(requests.get(SITEMAP, headers=HEADERS, timeout=30).text)
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [el.find('sm:loc', ns).text.strip() for el in root.findall('.//sm:url', ns)]
print('sitemap_urls', len(urls))
results = []
for url in urls:
    try:
        r = requests.get(url, headers=HEADERS, timeout=20, allow_redirects=True)
        results.append({'url': url, 'status': r.status_code, 'title': re.search(r'<title>(.*?)</title>', r.text, re.I|re.S).group(1).strip() if r.status_code == 200 else None})
    except Exception as e:
        results.append({'url': url, 'status': 'error', 'title': str(e)})
    time.sleep(0.05)
print('crawled', len(results))
open('site-deep-crawl.json','w').write(json.dumps({'timestamp': time.strftime('%Y-%m-%dT%H:%M:%S'),'base_url': SITE,'total_pages': len(results),'working_200': sum(1 for x in results if x['status']==200),'broken_404': sum(1 for x in results if x['status']==404),'redirects_3xx': sum(1 for x in results if str(x['status']).startswith('3')),'server_error_5xx': sum(1 for x in results if str(x['status']).startswith('5')),'other_errors': sum(1 for x in results if x['status'] not in [200,404] and not str(x['status']).startswith('3') and not str(x['status']).startswith('5')),'fetch_failed': sum(1 for x in results if x['status']=='error'),'all_pages': results[:80]}, indent=2))
