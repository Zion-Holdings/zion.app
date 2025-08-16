#!/usr/bin/env python3

import argparse
import csv
import json
import sys
import time
from collections import deque
from dataclasses import dataclass, asdict
from typing import Dict, Set, Tuple, Optional, List
from urllib.parse import urljoin, urldefrag, urlparse
from urllib.request import Request, build_opener, HTTPRedirectHandler, HTTPSHandler
from urllib.error import URLError, HTTPError
from html.parser import HTMLParser
import requests
from bs4 import BeautifulSoup

@dataclass
class LinkRecord:
    source_url: str
    link_url: str
    final_url: Optional[str]
    status_code: Optional[int]
    ok: bool
    is_internal: bool
    error: Optional[str]
    response_time: Optional[float]
    content_type: Optional[str]
    content_length: Optional[int]

@dataclass
class ContentGap:
    type: str
    url: str
    priority: str
    description: str
    suggested_content: Optional[str]

class EnhancedAnchorExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.hrefs: List[str] = []
        self.images: List[str] = []
        self.forms: List[str] = []

    def handle_starttag(self, tag: str, attrs):
        if tag.lower() == "a":
            for (k, v) in attrs:
                if k.lower() == "href" and v is not None:
                    self.hrefs.append(v)
        elif tag.lower() == "img":
            for (k, v) in attrs:
                if k.lower() == "src" and v is not None:
                    self.images.append(v)
        elif tag.lower() == "form":
            for (k, v) in attrs:
                if k.lower() == "action" and v is not None:
                    self.forms.append(v)

class EnhancedLinkCrawler:
    def __init__(
        self,
        start_url: str,
        max_pages: int = 2000,
        request_timeout: int = 15,
        user_agent: str = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
        delay_between_requests: float = 0.1,
        check_external: bool = True,
        generate_reports: bool = True,
    ) -> None:
        parsed = urlparse(start_url)
        if not parsed.scheme:
            start_url = f"https://{start_url}"
            parsed = urlparse(start_url)
        
        self.start_url = start_url
        self.start_netloc = self._normalize_host(parsed.netloc)
        self.max_pages = max_pages
        self.request_timeout = request_timeout
        self.delay_between_requests = delay_between_requests
        self.check_external = check_external
        self.generate_reports = generate_reports

        # Enhanced user agent and session
        self.user_agent = user_agent
        self.session = requests.Session()
        self.session.headers.update({'User-Agent': user_agent})

        self.pages_to_crawl: deque[str] = deque([start_url])
        self.crawled_pages: Set[str] = set()
        self.checked_links: Dict[str, Tuple[Optional[int], Optional[str], Optional[str], bool]] = {}
        self.records: list[LinkRecord] = []
        self.content_gaps: list[ContentGap] = []
        
        # Statistics
        self.stats = {
            'total_pages_crawled': 0,
            'total_links_checked': 0,
            'broken_links': 0,
            'missing_pages': 0,
            'external_links': 0,
            'start_time': time.time()
        }

    @staticmethod
    def _normalize_host(host: str) -> str:
        host = host.lower()
        if host.startswith("www."):
            host = host[4:]
        return host

    @staticmethod
    def _normalize_url(url: str) -> str:
        url, _ = urldefrag(url)
        return url

    def _is_internal(self, url: str) -> bool:
        parsed = urlparse(url)
        if not parsed.netloc:
            return True
        return self._normalize_host(parsed.netloc) == self.start_netloc

    @staticmethod
    def _should_skip_link(href: Optional[str]) -> bool:
        if not href:
            return True
        href = href.strip()
        if href == "#":
            return True
        lower = href.lower()
        if lower.startswith("mailto:") or lower.startswith("tel:"):
            return True
        if lower.startswith("javascript:"):
            return True
        if lower.startswith("data:"):
            return True
        return False

    def _check_link(self, url: str, source_url: str) -> LinkRecord:
        """Enhanced link checking with better error handling and metrics"""
        start_time = time.time()
        
        try:
            response = self.session.get(
                url, 
                timeout=self.request_timeout,
                allow_redirects=True,
                stream=True
            )
            
            response_time = time.time() - start_time
            final_url = response.url
            status_code = response.status_code
            ok = 200 <= status_code < 400
            error = None if ok else f"HTTP {status_code}"
            
            # Get content info
            content_type = response.headers.get('content-type', '').split(';')[0]
            content_length = response.headers.get('content-length')
            if content_length:
                content_length = int(content_length)
            
            # Check for content gaps
            if status_code == 404 and self._is_internal(url):
                self._identify_content_gap(url, source_url)
            
        except requests.exceptions.Timeout:
            response_time = time.time() - start_time
            final_url = None
            status_code = None
            ok = False
            error = "Timeout"
            content_type = None
            content_length = None
        except requests.exceptions.ConnectionError:
            response_time = time.time() - start_time
            final_url = None
            status_code = None
            ok = False
            error = "Connection Error"
            content_type = None
            content_length = None
        except Exception as e:
            response_time = time.time() - start_time
            final_url = None
            status_code = None
            ok = False
            error = str(e)
            content_type = None
            content_length = None

        return LinkRecord(
            source_url=source_url,
            link_url=url,
            final_url=final_url,
            status_code=status_code,
            ok=ok,
            is_internal=self._is_internal(url),
            error=error,
            response_time=response_time,
            content_type=content_type,
            content_length=content_length
        )

    def _identify_content_gap(self, url: str, source_url: str):
        """Identify potential content gaps based on missing pages"""
        parsed = urlparse(url)
        path = parsed.path
        
        # Identify common missing page patterns
        if path in ['/services', '/products', '/contact', '/about', '/pricing']:
            gap_type = 'core_business_page'
            priority = 'high'
            description = f"Missing core business page: {path}"
        elif path.startswith('/blog/') or path.startswith('/docs/'):
            gap_type = 'content_page'
            priority = 'medium'
            description = f"Missing content page: {path}"
        elif path.startswith('/api/') or path.startswith('/admin/'):
            gap_type = 'functional_page'
            priority = 'low'
            description = f"Missing functional page: {path}"
        else:
            gap_type = 'general_page'
            priority = 'medium'
            description = f"Missing page: {path}"
        
        # Generate suggested content based on page type
        suggested_content = self._generate_suggested_content(path, gap_type)
        
        gap = ContentGap(
            type=gap_type,
            url=url,
            priority=priority,
            description=description,
            suggested_content=suggested_content
        )
        
        # Avoid duplicates
        if not any(g.url == url for g in self.content_gaps):
            self.content_gaps.append(gap)

    def _generate_suggested_content(self, path: str, gap_type: str) -> str:
        """Generate suggested content for missing pages"""
        if gap_type == 'core_business_page':
            if path == '/services':
                return "Services page should include: service offerings, pricing, case studies, testimonials"
            elif path == '/products':
                return "Products page should include: product catalog, features, specifications, pricing"
            elif path == '/contact':
                return "Contact page should include: contact form, phone numbers, email, office locations, business hours"
            elif path == '/about':
                return "About page should include: company history, mission, team, values, achievements"
            elif path == '/pricing':
                return "Pricing page should include: pricing tiers, features comparison, FAQ, contact sales"
        
        return f"General content for {path} page"

    def _extract_links_from_page(self, url: str, html_content: str) -> List[str]:
        """Extract links from HTML content using BeautifulSoup for better parsing"""
        try:
            soup = BeautifulSoup(html_content, 'html.parser')
            links = []
            
            # Extract anchor links
            for a_tag in soup.find_all('a', href=True):
                href = a_tag['href']
                if not self._should_skip_link(href):
                    absolute_url = urljoin(url, href)
                    links.append(absolute_url)
            
            # Extract image sources
            for img_tag in soup.find_all('img', src=True):
                src = img_tag['src']
                if not self._should_skip_link(src):
                    absolute_url = urljoin(url, src)
                    links.append(absolute_url)
            
            # Extract form actions
            for form_tag in soup.find_all('form', action=True):
                action = form_tag['action']
                if not self._should_skip_link(action):
                    absolute_url = urljoin(url, action)
                    links.append(absolute_url)
            
            return links
        except Exception as e:
            print(f"Error parsing HTML from {url}: {e}")
            return []

    def crawl(self) -> None:
        """Main crawling method with enhanced functionality"""
        print(f"Starting enhanced link crawl from {self.start_url}")
        print(f"Max pages: {self.max_pages}, Timeout: {self.request_timeout}s")
        
        while self.pages_to_crawl and len(self.crawled_pages) < self.max_pages:
            url = self.pages_to_crawl.popleft()
            
            if url in self.crawled_pages:
                continue
                
            print(f"Crawling page {len(self.crawled_pages) + 1}/{self.max_pages}: {url}")
            
            try:
                # Get page content
                response = self.session.get(url, timeout=self.request_timeout)
                if response.status_code == 200:
                    # Extract links from this page
                    links = self._extract_links_from_page(url, response.text)
                    
                    # Add new internal pages to crawl
                    for link in links:
                        if self._is_internal(link) and link not in self.crawled_pages:
                            self.pages_to_crawl.append(link)
                    
                    # Check all links from this page
                    for link in links:
                        if self.check_external or self._is_internal(link):
                            record = self._check_link(link, url)
                            self.records.append(record)
                            self.stats['total_links_checked'] += 1
                            
                            if not record.ok:
                                self.stats['broken_links'] += 1
                            if not self._is_internal(link):
                                self.stats['external_links'] += 1
                
                self.crawled_pages.add(url)
                self.stats['total_pages_crawled'] += 1
                
                # Delay between requests
                if self.delay_between_requests > 0:
                    time.sleep(self.delay_between_requests)
                    
            except Exception as e:
                print(f"Error crawling {url}: {e}")
                continue
        
        self._generate_reports()
        self._print_summary()

    def _generate_reports(self):
        """Generate comprehensive reports"""
        if not self.generate_reports:
            return
            
        # Generate CSV report
        with open('enhanced_link_report.csv', 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['source_url', 'link_url', 'final_url', 'status_code', 'ok', 
                         'is_internal', 'error', 'response_time', 'content_type', 'content_length']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for record in self.records:
                writer.writerow(asdict(record))
        
        # Generate JSON report with statistics
        report_data = {
            'crawl_summary': {
                'start_url': self.start_url,
                'total_pages_crawled': self.stats['total_pages_crawled'],
                'total_links_checked': self.stats['total_links_checked'],
                'broken_links': self.stats['broken_links'],
                'missing_pages': len(self.content_gaps),
                'external_links': self.stats['external_links'],
                'crawl_duration': time.time() - self.stats['start_time']
            },
            'broken_links': [
                asdict(record) for record in self.records if not record.ok
            ],
            'content_gaps': [
                asdict(gap) for gap in self.content_gaps
            ],
            'performance_metrics': {
                'average_response_time': sum(
                    r.response_time for r in self.records if r.response_time
                ) / len([r for r in self.records if r.response_time]) if self.records else 0,
                'slow_links': [
                    asdict(record) for record in self.records 
                    if record.response_time and record.response_time > 5.0
                ]
            }
        }
        
        with open('enhanced_link_report.json', 'w', encoding='utf-8') as jsonfile:
            json.dump(report_data, jsonfile, indent=2, default=str)
        
        # Generate markdown report
        with open('enhanced_link_report.md', 'w', encoding='utf-8') as mdfile:
            mdfile.write(f"# Enhanced Link Health Report\n\n")
            mdfile.write(f"**Generated**: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
            mdfile.write(f"**Start URL**: {self.start_url}\n\n")
            
            mdfile.write(f"## 📊 Crawl Summary\n\n")
            mdfile.write(f"- **Total Pages Crawled**: {self.stats['total_pages_crawled']}\n")
            mdfile.write(f"- **Total Links Checked**: {self.stats['total_links_checked']}\n")
            mdfile.write(f"- **Broken Links**: {self.stats['broken_links']}\n")
            mdfile.write(f"- **Missing Pages**: {len(self.content_gaps)}\n")
            mdfile.write(f"- **External Links**: {self.stats['external_links']}\n")
            mdfile.write(f"- **Crawl Duration**: {time.time() - self.stats['start_time']:.2f}s\n\n")
            
            if self.content_gaps:
                mdfile.write(f"## 🚫 Content Gaps Identified\n\n")
                for gap in self.content_gaps:
                    mdfile.write(f"### {gap.type.replace('_', ' ').title()}\n")
                    mdfile.write(f"- **URL**: {gap.url}\n")
                    mdfile.write(f"- **Priority**: {gap.priority}\n")
                    mdfile.write(f"- **Description**: {gap.description}\n")
                    if gap.suggested_content:
                        mdfile.write(f"- **Suggested Content**: {gap.suggested_content}\n")
                    mdfile.write("\n")
            
            if any(not record.ok for record in self.records):
                mdfile.write(f"## ❌ Broken Links\n\n")
                for record in self.records:
                    if not record.ok:
                        mdfile.write(f"- **{record.link_url}** (from {record.source_url})\n")
                        mdfile.write(f"  - Status: {record.status_code or 'Unknown'}\n")
                        mdfile.write(f"  - Error: {record.error}\n")
                        mdfile.write(f"  - Internal: {record.is_internal}\n\n")

    def _print_summary(self):
        """Print crawl summary to console"""
        print("\n" + "="*60)
        print("CRAWL SUMMARY")
        print("="*60)
        print(f"Start URL: {self.start_url}")
        print(f"Total pages crawled: {self.stats['total_pages_crawled']}")
        print(f"Total links checked: {self.stats['total_links_checked']}")
        print(f"Broken links: {self.stats['broken_links']}")
        print(f"Missing pages: {len(self.content_gaps)}")
        print(f"External links: {self.stats['external_links']}")
        print(f"Crawl duration: {time.time() - self.stats['start_time']:.2f}s")
        
        if self.content_gaps:
            print(f"\nContent gaps found:")
            for gap in self.content_gaps:
                print(f"  - {gap.url} ({gap.priority} priority)")
        
        if self.generate_reports:
            print(f"\nReports generated:")
            print(f"  - enhanced_link_report.csv")
            print(f"  - enhanced_link_report.json")
            print(f"  - enhanced_link_report.md")

def main():
    parser = argparse.ArgumentParser(description='Enhanced Link Health Crawler')
    parser.add_argument('--url', required=True, help='Starting URL to crawl')
    parser.add_argument('--max-pages', type=int, default=2000, help='Maximum pages to crawl')
    parser.add_argument('--timeout', type=int, default=15, help='Request timeout in seconds')
    parser.add_argument('--delay', type=float, default=0.1, help='Delay between requests')
    parser.add_argument('--external', action='store_true', help='Check external links')
    parser.add_argument('--no-reports', action='store_true', help='Skip report generation')
    
    args = parser.parse_args()
    
    crawler = EnhancedLinkCrawler(
        start_url=args.url,
        max_pages=args.max_pages,
        request_timeout=args.timeout,
        delay_between_requests=args.delay,
        check_external=args.external,
        generate_reports=not args.no_reports
    )
    
    try:
        crawler.crawl()
    except KeyboardInterrupt:
        print("\nCrawl interrupted by user")
        crawler._generate_reports()
        crawler._print_summary()
    except Exception as e:
        print(f"Error during crawl: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()