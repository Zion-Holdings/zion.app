#!/usr/bin/env python3
"""
Deep crawl audit for ziontechgroup.com
Checks: broken internal links, broken external links, navigation consistency,
template/layout consistency, content gaps, 404s, orphaned pages.
"""
import re
import json
import ssl
import urllib.request
import urllib.error
import concurrent.futures
import time
import os
from datetime import datetime
from urllib.parse import urljoin, urlparse
from html.parser import HTMLParser

BASE = "https://ziontechgroup.com"
USER_AGENT = "ZionAuditBot/1.0 (DeepCrawlAudit)"
MAX_WORKERS = 30
TIMEOUT = 15

# SSL context that doesn't verify (for testing)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def parse_sitemap(path):
    """Parse sitemap.xml and return list of (url, lastmod, priority) tuples."""
    urls = []
    with open(path, 'r') as f:
        content = f.read()
    # Match <url> blocks
    url_blocks = re.findall(r'<url>\s*<loc>(.*?)</loc>\s*(?:<lastmod>(.*?)</lastmod>)?\s*(?:<changefreq>(.*?)</changefreq>)?\s*(?:<priority>(.*?)</priority>)?', content, re.S)
    for loc, lastmod, changefreq, priority in url_blocks:
        urls.append({
            'url': loc.strip(),
            'lastmod': lastmod.strip() if lastmod else '',
            'changefreq': changefreq.strip() if changefreq else '',
            'priority': priority.strip() if priority else '',
        })
    return urls

def check_url(url, follow_redirects=True):
    """Check HTTP status for a URL. Returns (status_code, final_url, error)."""
    try:
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
        # Don't follow redirects automatically to capture them
        if follow_redirects:
            opener = urllib.request.build_opener(urllib.request.HTTPRedirectHandler)
        else:
            opener = urllib.request.build_opener(NoRedirectHandler)
        resp = opener.open(req, timeout=TIMEOUT)
        return resp.getcode(), resp.geturl(), None
    except urllib.error.HTTPError as e:
        return e.code, url, str(e)
    except urllib.error.URLError as e:
        return 0, url, str(e.reason)
    except Exception as e:
        return 0, url, str(e)

class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None

class LinkExtractor(HTMLParser):
    """Extract all href and src links from HTML."""
    def __init__(self):
        super().__init__()
        self.links = []
        self.srcs = []
        self.in_nav = False
        self.in_header = False
        self.in_footer = False
        self.in_script = False
        self.tag_stack = []
        self.nav_links = []
        self.header_links = []
        self.footer_links = []
        self.text_content = []
        self.h1 = None
        self.h2s = []
        self.title = None
        self.in_title = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        self.tag_stack.append(tag)
        href = attrs_dict.get('href')
        src = attrs_dict.get('src')

        if tag == 'title':
            self.in_title = True
        if tag == 'script':
            self.in_script = True
        if tag in ('a',):
            full_url = urljoin(BASE, href) if href else None
            self.links.append({'href': href, 'full': full_url, 'text': ''})
        if src and tag == 'img':
            self.srcs.append(urljoin(BASE, src))
        if tag == 'nav':
            self.in_nav = True
        if tag == 'header':
            self.in_header = True
        if tag == 'footer':
            self.in_footer = True
        if tag in ('h1',):
            self._capture_text = True
            self._current_tag = 'h1'
        if tag == 'h2':
            self._current_tag = 'h2'

    def handle_endtag(self, tag):
        if self.tag_stack:
            self.tag_stack.pop()
        if tag == 'title':
            self.in_title = False
        if tag == 'script':
            self.in_script = False
        if tag == 'nav':
            self.in_nav = False
        if tag == 'header':
            self.in_header = False
        if tag == 'footer':
            self.in_footer = False
        if tag in ('h1', 'h2'):
            self._current_tag = None

    def handle_data(self, data):
        if self.in_title:
            self.title = (self.title or '') + data.strip()
        if not self.in_script:
            self.text_content.append(data.strip())

    def handle_startendtag(self, tag, attrs):
        pass

def fetch_and_parse(url):
    """Fetch a page and parse it for links, nav, footer, etc."""
    status, final_url, error = check_url(url)
    if status != 200 or error:
        return {
            'url': url,
            'status': status,
            'final_url': final_url,
            'error': error,
            'had_error': True,
        }
    try:
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
        opener = urllib.request.build_opener(urllib.request.HTTPRedirectHandler)
        resp = opener.open(req, timeout=TIMEOUT)
        html = resp.read().decode('utf-8', errors='replace')
        redirected = final_url != url

        # Check for template markers
        has_nav_component = 'id="site-navigation"' in html  # Navigation.tsx uses this
        has_footer_component = '<footer' in html.lower()
        has_breadcrumb = 'aria-label="Breadcrumb"' in html or 'Breadcrumb' in html
        has_standard_page = 'PageShell' in html or 'container-page' in html
        has_skip_link = 'skip-to-content' in html.lower() or 'main-content' in html.lower()

        # Extract all href links
        all_hrefs = re.findall(r'href=["\']([^"\']+)["\']', html, re.I)
        internal_links = set()
        external_links = set()
        for href in all_hrefs:
            if href.startswith('#') or href.startswith('javascript:') or href.startswith('mailto:') or href.startswith('tel:'):
                continue
            full = urljoin(BASE, href)
            parsed = urlparse(full)
            if parsed.netloc in ('', 'ziontechgroup.com', 'www.ziontechgroup.com'):
                internal_links.add(full)
            else:
                external_links.add(full)

        # Check navigation consistency
        # Look for header nav
        nav_match = re.search(r'<header[^>]*>(.*?)</header>', html, re.I | re.S)
        nav_html = nav_match.group(1) if nav_match else ''
        nav_links = re.findall(r'href=["\']([^"\']+)["\']', nav_html, re.I)

        # Look for footer
        footer_match = re.search(r'<footer[^>]*>(.*?)</footer>', html, re.I | re.S)
        footer_html = footer_match.group(1) if footer_match else ''
        footer_links = re.findall(r'href=["\']([^"\']+)["\']', footer_html, re.I)

        # Extract title and H1
        title_match = re.search(r'<title[^>]*>(.*?)</title>', html, re.I | re.S)
        title = title_match.group(1).strip() if title_match else ''
        h1_match = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)
        h1 = re.sub(r'<[^>]+>', '', h1_match[0]).strip() if h1_match else ''

        # Check body classes for template type
        body_class_match = re.search(r'<body[^>]*class="([^"]*)"', html, re.I)
        body_classes = body_class_match.group(1) if body_class_match else ''

        return {
            'url': url,
            'final_url': final_url,
            'redirected': redirected,
            'status': status,
            'title': title,
            'h1': h1,
            'internal_links': sorted(internal_links),
            'external_links': sorted(external_links),
            'nav_links': sorted(set(nav_links)),
            'footer_links': sorted(set(footer_links)),
            'has_nav_component': has_nav_component,
            'has_footer_component': has_footer_component,
            'has_breadcrumb': has_breadcrumb,
            'has_standard_page': has_standard_page,
            'has_skip_link': has_skip_link,
            'body_classes': body_classes,
            'content_length': len(html),
        }
    except Exception as e:
        return {
            'url': url,
            'status': status,
            'error': str(e),
            'had_error': True,
        }


def main():
    print("=== DEEP CRAWL AUDIT FOR ziontechgroup.com ===\n")

    # Step 1: Parse sitemap
    sitemap_path = os.path.join(os.getcwd(), 'sitemap.xml')
    sitemap_urls = parse_sitemap(sitemap_path)
    print(f"[1] Sitemap parsed: {len(sitemap_urls)} URLs")

    # Categorize URLs
    categories = {}
    for u in sitemap_urls:
        path = urlparse(u['url']).path
        if path == '/' or path == '':
            cat = 'homepage'
        elif path.startswith('/blog/'):
            cat = 'blog'
        elif path.startswith('/services/') and path != '/services/':
            cat = 'service_detail'
        elif path == '/services/' or path == '/ai-services/':
            cat = 'service_index'
        elif path.startswith('/ai/') or path.startswith('/hermes') or path.startswith('/agents') or path.startswith('/docs/'):
            cat = 'ai_lab'
        elif path.startswith('/solutions/'):
            cat = 'solutions'
        elif path.startswith('/tools/'):
            cat = 'tools'
        elif path.startswith('/case-studies/'):
            cat = 'case_studies'
        elif path.startswith('/products'):
            cat = 'products'
        elif path.startswith('/use-cases/'):
            cat = 'use_cases'
        elif path.startswith('/hermes'):
            cat = 'hermes'
        elif path.startswith('/industries/'):
            cat = 'industries'
        elif path.startswith('/faq/'):
            cat = 'faq'
        elif path.startswith('/careers/'):
            cat = 'careers'
        else:
            cat = 'other'
        categories.setdefault(cat, []).append(u)

    print(f"\n[2] URL Categories:")
    for cat, urls in sorted(categories.items(), key=lambda x: -len(x[1])):
        print(f"  {cat}: {len(urls)} URLs")

    # Step 2: Check HTTP status for ALL sitemap URLs
    print(f"\n[3] Checking HTTP status for ALL {len(sitemap_urls)} sitemap URLs...")
    all_urls = [u['url'] for u in sitemap_urls]
    status_results = {}
    broken_urls = []

    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_url = {executor.submit(check_url, url): url for url in all_urls}
        completed = 0
        for future in concurrent.futures.as_completed(future_to_url):
            url = future_to_url[future]
            try:
                status, final_url, error = future.result()
                status_results[url] = {'status': status, 'final_url': final_url, 'error': error}
                if status != 200:
                    broken_urls.append({'url': url, 'status': status, 'final_url': final_url, 'error': error})
                completed += 1
                if completed % 1000 == 0:
                    print(f"  ...checked {completed}/{len(all_urls)}")
            except Exception as e:
                broken_urls.append({'url': url, 'status': 0, 'error': str(e)})
                completed += 1

    print(f"  Done. {len(broken_urls)} non-200 URLs found.")

    # Categorize broken URLs
    broken_by_status = {}
    for b in broken_urls:
        broken_by_status.setdefault(b['status'], []).append(b)
    print(f"\n[3a] Broken URLs by status:")
    for status in sorted(broken_by_status.keys()):
        print(f"  {status}: {len(broken_by_status[status])} URLs")

    # Step 3: Fetch and parse a representative sample of pages
    print(f"\n[4] Fetching and parsing representative sample pages...")

    # Sample pages: all top-level categories + a sample of service detail pages
    sample_urls = []
    for cat in ['homepage', 'service_index', 'tools', 'solutions', 'case_studies', 'use_cases',
                'faq', 'careers', 'about', 'contact', 'pricing', 'privacy', 'terms', 'cookies', 'sla']:
        urls = categories.get(cat, [])
        if urls:
            sample_urls.append(urls[0]['url'])

    # Add specific important pages
    important_pages = [
        BASE + '/',
        BASE + '/about/',
        BASE + '/services/',
        BASE + '/ai-services/',
        BASE + '/contact/',
        BASE + '/pricing/',
        BASE + '/products/',
        BASE + '/solutions/',
        BASE + '/tools/',
        BASE + '/use-cases/',
        BASE + '/blog/',
        BASE + '/faq/',
        BASE + '/testimonials/',
        BASE + '/agents-monitoring/',
        BASE + '/hermes-agents/',
        BASE + '/hermes-docs/',
        BASE + '/hermes-tools/',
        BASE + '/hermes-blog/',
        BASE + '/careers/',
        BASE + '/dashboard/',
        BASE + '/status/',
        BASE + '/public-roadmap/',
        BASE + '/integrators/',
        BASE + '/providers/',
        BASE + '/it-vendors/',
        BASE + '/business-customers/',
        BASE + '/governments/',
    ]

    # Add a sample of service detail pages (up to 50)
    service_urls = categories.get('service_detail', [])
    sample_size = min(50, len(service_urls))
    for u in service_urls[:sample_size]:
        important_pages.append(u['url'])

    # Add a sample of blog posts
    blog_urls = categories.get('blog', [])
    for u in blog_urls[:20]:
        important_pages.append(u['url'])

    # Add a sample of ai_lab pages
    ai_urls = categories.get('ai_lab', [])
    for u in ai_urls[:20]:
        important_pages.append(u['url'])

    # Deduplicate
    important_pages = list(set(important_pages))
    print(f"  Fetching {len(important_pages)} sample pages...")

    page_results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_url = {executor.submit(fetch_and_parse, url): url for url in important_pages}
        for future in concurrent.futures.as_completed(future_to_url):
            url = future_to_url[future]
            try:
                result = future.result()
                page_results[url] = result
            except Exception as e:
                page_results[url] = {'url': url, 'error': str(e), 'had_error': True}

    # Step 4: Analyze broken internal links
    print(f"\n[5] Analyzing broken internal links...")
    broken_internal_links = []
    # For each page, check its internal links against status_results
    for page_url, page_data in page_results.items():
        if page_data.get('had_error'):
            continue
        for link in page_data.get('internal_links', []):
            link_clean = link.split('#')[0]
            # Check if this link was checked in status_results
            if link_clean in status_results:
                status = status_results[link_clean]['status']
                if status != 200:
                    broken_internal_links.append({
                        'source_page': page_url,
                        'link': link,
                        'target_status': status,
                        'final_url': status_results[link_clean].get('final_url', ''),
                    })
            else:
                # Link not in sitemap - might be a new/unknown link, check it
                pass

    # Also check links not in sitemap
    all_internal_links_from_pages = set()
    for page_data in page_results.values():
        if page_data.get('had_error'):
            continue
        all_internal_links_from_pages.update(page_data.get('internal_links', []))

    # Check internal links not in sitemap
    sitemap_url_set = set(u['url'] for u in sitemap_urls)
    unsampled_internal_links = all_internal_links_from_pages - sitemap_url_set
    print(f"  Found {len(unsampled_internal_links)} internal links not in sitemap")
    
    if unsampled_internal_links:
        print(f"  Checking status of these additional internal links...")
        extra_status = {}
        with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            future_to_url = {executor.submit(check_url, url): url for url in list(unsampled_internal_links)[:500]}
            for future in concurrent.futures.as_completed(future_to_url):
                url = future_to_url[future]
                try:
                    status, final_url, error = future.result()
                    extra_status[url] = {'status': status, 'final_url': final_url, 'error': error}
                    if status != 200:
                        broken_internal_links.append({
                            'source_page': 'unsampled',
                            'link': url,
                            'target_status': status,
                            'final_url': final_url,
                        })
                except Exception as e:
                    extra_status[url] = {'status': 0, 'error': str(e)}
        status_results.update(extra_status)

    print(f"  Total broken internal links found: {len(broken_internal_links)}")

    # Step 5: Check external links
    print(f"\n[6] Checking external links...")
    all_external = set()
    for page_data in page_results.values():
        if page_data.get('had_error'):
            continue
        all_external.update(page_data.get('external_links', []))
    print(f"  Found {len(all_external)} unique external links across sampled pages")

    broken_external = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_url = {executor.submit(check_url, url): url for url in list(all_external)[:200]}
        for future in concurrent.futures.as_completed(future_to_url):
            url = future_to_url[future]
            try:
                status, final_url, error = future.result()
                if status != 200:
                    broken_external.append({'url': url, 'status': status, 'final_url': final_url, 'error': error})
            except Exception as e:
                broken_external.append({'url': url, 'status': 0, 'error': str(e)})
    print(f"  Broken external links: {len(broken_external)}")

    # Step 6: Navigation consistency analysis
    print(f"\n[7] Analyzing navigation consistency...")
    nav_analysis = {}
    for page_url, page_data in page_results.items():
        if page_data.get('had_error'):
            continue
        nav_links = page_data.get('nav_links', [])
        footer_links = page_data.get('footer_links', [])
        nav_analysis[page_url] = {
            'nav_links': nav_links,
            'footer_links': footer_links,
            'has_nav': page_data.get('has_nav_component', False),
            'has_footer': page_data.get('has_footer_component', False),
            'title': page_data.get('title', ''),
        }

    # Compare nav across pages
    nav_link_sets = {}
    for page_url, data in nav_analysis.items():
        key = tuple(data['nav_links']) if data['nav_links'] else ('NONE',)
        nav_link_sets.setdefault(key, []).append(page_url)

    print(f"\n  Navigation bar variations found: {len(nav_link_sets)}")
    for nav_key, pages in nav_link_sets.items():
        print(f"  Variation with {len(nav_key)} links ({len(pages)} pages):")
        for l in nav_key[:10]:
            print(f"    - {l}")
        if len(pages) > 15:
            print(f"    ... and {len(pages) - 15} more pages")

    # Footer consistency
    footer_link_sets = {}
    for page_url, data in nav_analysis.items():
        key = tuple(data['footer_links']) if data['footer_links'] else ('NONE',)
        footer_link_sets.setdefault(key, []).append(page_url)

    print(f"\n  Footer variations found: {len(footer_link_sets)}")
    for footer_key, pages in footer_link_sets.items():
        print(f"  Footer with {len(footer_key)} links ({len(pages)} pages):")
        for l in footer_key[:10]:
            print(f"    - {l}")

    # Step 7: Template/layout consistency
    print(f"\n[8] Analyzing template/layout consistency...")
    pages_without_nav = []
    pages_without_footer = []
    pages_without_breadcrumb = []
    pages_without_standard = []

    for page_url, page_data in page_results.items():
        if page_data.get('had_error'):
            continue
        if not page_data.get('has_nav_component', False):
            pages_without_nav.append(page_url)
        if not page_data.get('has_footer_component', False):
            pages_without_footer.append(page_url)
        if not page_data.get('has_breadcrumb', False):
            pages_without_breadcrumb.append(page_url)
        if not page_data.get('has_standard_page', False):
            pages_without_standard.append(page_url)

    print(f"  Pages WITHOUT Navigation component: {len(pages_without_nav)}")
    for p in pages_without_nav[:20]:
        print(f"    {p}")
    if len(pages_without_nav) > 20:
        print(f"    ... and {len(pages_without_nav) - 20} more")

    print(f"  Pages WITHOUT Footer component: {len(pages_without_footer)}")
    for p in pages_without_footer[:20]:
        print(f"    {p}")

    print(f"  Pages WITHOUT Breadcrumb: {len(pages_without_breadcrumb)}")
    for p in pages_without_breadcrumb[:20]:
        print(f"    {p}")

    print(f"  Pages WITHOUT StandardPage/PageShell: {len(pages_without_standard)}")
    for p in pages_without_standard[:20]:
        print(f"    {p}")

    # Step 8: Content gaps - check for links pointing to non-existent pages
    print(f"\n[9] Checking for content gaps (internal links to non-existent pages)...")

    # Collect all internal links from ALL sampled pages
    all_internal_destinations = set()
    for page_data in page_results.values():
        if page_data.get('had_error'):
            continue
        all_internal_destinations.update(page_data.get('internal_links', []))

    # Check which destinations are 404
    content_gaps = []
    for dest in all_internal_destinations:
        dest_clean = dest.split('#')[0]
        if dest_clean in status_results:
            if status_results[dest_clean]['status'] == 404:
                sources = [p for p, d in page_results.items() 
                          if not d.get('had_error') and dest in d.get('internal_links', [])]
                content_gaps.append({
                    'missing_page': dest,
                    'referenced_by': sources,
                })

    print(f"  Content gaps (404 destinations linked from pages): {len(content_gaps)}")
    for g in content_gaps[:30]:
        print(f"  {g['missing_page']} - referenced from: {g['referenced_by'][:3]}")

    # Step 9: Write comprehensive report
    print(f"\n[10] Writing comprehensive report...")

    report = {
        'audit_metadata': {
            'timestamp': datetime.now().isoformat(),
            'site': BASE,
            'sitemap_urls': len(sitemap_urls),
            'url_categories': {k: len(v) for k, v in categories.items()},
            'sample_pages_crawled': len(page_results),
            'crawl_depth': '3 levels (sitemap + internal links + redirects)',
        },
        'broken_internal_links': broken_internal_links,
        'broken_external_links': broken_external,
        'status_404_urls': [b for b in broken_urls if b['status'] == 404],
        'status_redirects': [b for b in broken_urls if b['status'] in (301, 302, 307, 308)],
        'status_server_errors': [b for b in broken_urls if b['status'] >= 500],
        'pages_without_navigation': pages_without_nav,
        'pages_without_footer': pages_without_footer,
        'pages_without_breadcrumb': pages_without_breadcrumb,
        'pages_without_standard_page': pages_without_standard,
        'navigation_variations': {
            str(k): v for k, v in nav_link_sets.items()
        },
        'footer_variations': {
            str(k): v for k, v in footer_link_sets.items()
        },
        'content_gaps': content_gaps,
        'sample_page_details': page_results,
        'all_broken_urls': broken_urls,
    }

    report_path = os.path.join(os.getcwd(), 'deep_crawl_audit_report.json')
    with open(report_path, 'w') as f:
        json.dump(report, f, indent=2, default=str)

    print(f"  Report saved to: {report_path}")
    print(f"\n=== AUDIT COMPLETE ===")
    print(f"  Sitemap URLs checked: {len(sitemap_urls)}")
    print(f"  Sample pages crawled: {len(page_results)}")
    print(f"  Broken internal links: {len(broken_internal_links)}")
    print(f"  Broken external links: {len(broken_external)}")
    print(f"  404 URLs: {len(broken_by_status.get(404, []))}")
    print(f"  Redirect URLs: {len(broken_by_status.get(301, []) + broken_by_status.get(302, []) + broken_by_status.get(307, []) + broken_by_status.get(308, []))}")
    print(f"  Pages without nav: {len(pages_without_nav)}")
    print(f"  Pages without footer: {len(pages_without_footer)}")
    print(f"  Pages without breadcrumb: {len(pages_without_breadcrumb)}")

if __name__ == '__main__':
    main()
