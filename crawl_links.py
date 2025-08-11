#!/usr/bin/env python3

import argparse
import csv
import sys
import time
from collections import deque
from dataclasses import dataclass, asdict
from typing import Dict, Set, Tuple, Optional, List

from urllib.parse import urljoin, urldefrag, urlparse
from urllib.request import Request, build_opener, HTTPRedirectHandler, HTTPSHandler
from urllib.error import URLError, HTTPError
from html.parser import HTMLParser


@dataclass
class LinkRecord:
    source_url: str
    link_url: str
    final_url: Optional[str]
    status_code: Optional[int]
    ok: bool
    is_internal: bool
    error: Optional[str]


class AnchorExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.hrefs: List[str] = []

    def handle_starttag(self, tag: str, attrs):
        if tag.lower() != "a":
            return
        for (k, v) in attrs:
            if k.lower() == "href" and v is not None:
                self.hrefs.append(v)


class LinkCrawler:
    def __init__(
        self,
        start_url: str,
        max_pages: int = 2000,
        request_timeout: int = 15,
        user_agent: str = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
        delay_between_requests: float = 0.0,
        check_external: bool = True,
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

        # urllib opener with a custom User-Agent
        self.user_agent = user_agent
        self.opener = build_opener(HTTPRedirectHandler(), HTTPSHandler())

        self.pages_to_crawl: deque[str] = deque([start_url])
        self.crawled_pages: Set[str] = set()
        self.checked_links: Dict[str, Tuple[Optional[int], Optional[str], Optional[str], bool]] = {}
        # url -> (status_code, error, final_url, ok)

        self.records: list[LinkRecord] = []

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
        return False

    def _request(self, url: str, method: str = "GET"):
        req = Request(url=url, method=method)
        req.add_header("User-Agent", self.user_agent)
        try:
            resp = self.opener.open(req, timeout=self.request_timeout)
            time.sleep(self.delay_between_requests)
            status_code = getattr(resp, "status", None)
            final_url = resp.geturl()
            headers = {k.lower(): v for k, v in resp.headers.items()}
            data = resp.read() if method == "GET" else b""
            try:
                resp.close()
            except Exception:
                pass
            return status_code, final_url, headers, data, None
        except HTTPError as e:
            # HTTPError is also a file-like response; capture details
            status_code = e.code
            final_url = e.geturl()
            headers = {k.lower(): v for k, v in getattr(e, 'headers', {}).items()}
            error = f"HTTPError: {e.reason}"
            try:
                e.close()
            except Exception:
                pass
            return status_code, final_url, headers, b"", error
        except URLError as e:
            return None, None, {}, b"", f"URLError: {e.reason}"
        except Exception as e:
            return None, None, {}, b"", f"Error: {e}"

    def _head_or_get(self, url: str):
        status, final_url, headers, data, error = self._request(url, method="HEAD")
        if status in (405, 501, None):
            status, final_url, headers, data, error = self._request(url, method="GET")
        return status, final_url, headers, data, error

    def _check_link(self, source_url: str, link_url: str) -> LinkRecord:
        normalized = self._normalize_url(link_url)
        is_internal = self._is_internal(normalized)

        if normalized in self.checked_links:
            status_code, error, final_url, ok = self.checked_links[normalized]
            record = LinkRecord(
                source_url=source_url,
                link_url=normalized,
                final_url=final_url,
                status_code=status_code,
                ok=ok,
                is_internal=is_internal,
                error=error,
            )
            self.records.append(record)
            return record

        status_code, final_url, headers, _data, err = self._head_or_get(normalized)
        ok = False
        if status_code is not None:
            ok = 200 <= status_code < 400

        self.checked_links[normalized] = (status_code, err, final_url, ok)
        record = LinkRecord(
            source_url=source_url,
            link_url=normalized,
            final_url=final_url,
            status_code=status_code,
            ok=ok,
            is_internal=is_internal,
            error=err,
        )
        self.records.append(record)
        return record

    def crawl(self) -> None:
        while self.pages_to_crawl and len(self.crawled_pages) < self.max_pages:
            current = self.pages_to_crawl.popleft()
            current = self._normalize_url(current)
            if current in self.crawled_pages:
                continue

            # Fetch page (GET)
            status, final_url, headers, data, error = self._request(current, method="GET")
            self.crawled_pages.add(current)

            if status is None and error is not None:
                # Record page fetch failure as a broken self-link for visibility
                self.records.append(
                    LinkRecord(
                        source_url=current,
                        link_url=current,
                        final_url=None,
                        status_code=None,
                        ok=False,
                        is_internal=True,
                        error=error,
                    )
                )
                continue

            content_type = headers.get("content-type", "").lower()
            if "text/html" not in content_type:
                # Not an HTML page; skip link extraction
                continue

            html_text: str
            try:
                html_text = data.decode("utf-8", errors="ignore")
            except Exception as exc:
                self.records.append(
                    LinkRecord(
                        source_url=current,
                        link_url=current,
                        final_url=final_url,
                        status_code=status,
                        ok=False,
                        is_internal=True,
                        error=f"HTML decode error: {exc}",
                    )
                )
                continue

            # Extract anchors
            try:
                parser = AnchorExtractor()
                parser.feed(html_text)
                hrefs = parser.hrefs
            except Exception as exc:
                self.records.append(
                    LinkRecord(
                        source_url=current,
                        link_url=current,
                        final_url=final_url,
                        status_code=status,
                        ok=False,
                        is_internal=True,
                        error=f"HTML parse error: {exc}",
                    )
                )
                continue

            for href in hrefs:
                if self._should_skip_link(href):
                    continue
                absolute = urljoin(final_url or current, href)
                absolute = self._normalize_url(absolute)

                # Check link
                is_internal = self._is_internal(absolute)
                if is_internal or self.check_external:
                    self._check_link(current, absolute)

                # Enqueue for crawling if internal
                if is_internal and absolute not in self.crawled_pages:
                    parsed_abs = urlparse(absolute)
                    if parsed_abs.scheme in ("http", "https"):
                        self.pages_to_crawl.append(absolute)

    def write_csv(self, output_path: str) -> None:
        fieldnames = [
            "source_url",
            "link_url",
            "final_url",
            "status_code",
            "ok",
            "is_internal",
            "error",
        ]
        with open(output_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            for rec in self.records:
                row = asdict(rec)
                writer.writerow(row)

    def print_summary(self) -> None:
        total_links = len(self.records)
        broken = [r for r in self.records if not r.ok]
        internal_broken = [r for r in broken if r.is_internal]
        external_broken = [r for r in broken if not r.is_internal]

        print(f"Crawled pages: {len(self.crawled_pages)}")
        print(f"Total links checked: {total_links}")
        print(f"Broken links: {len(broken)} (internal: {len(internal_broken)}, external: {len(external_broken)})")

        def show_examples(title: str, items: list[LinkRecord], limit: int = 10):
            print(title)
            for rec in items[:limit]:
                print(f"- {rec.status_code} {rec.link_url} (from {rec.source_url}) error={rec.error}")

        show_examples("Sample internal broken:", internal_broken)
        show_examples("Sample external broken:", external_broken)


def main() -> int:
    parser = argparse.ArgumentParser(description="Crawl a website and report broken links (stdlib only).")
    parser.add_argument("start_url", help="Starting URL, e.g., https://example.com")
    parser.add_argument("--max-pages", type=int, default=2000, help="Maximum number of pages to crawl (internal only)")
    parser.add_argument("--timeout", type=int, default=15, help="Request timeout in seconds")
    parser.add_argument("--delay", type=float, default=0.0, help="Delay between requests in seconds")
    parser.add_argument("--no-external", action="store_true", help="Do not check external links")
    parser.add_argument("--output", default="/workspace/link_report.csv", help="Output CSV path")

    args = parser.parse_args()

    crawler = LinkCrawler(
        start_url=args.start_url,
        max_pages=args.max_pages,
        request_timeout=args.timeout,
        delay_between_requests=args.delay,
        check_external=not args.no_external,
    )
    crawler.crawl()
    crawler.write_csv(args.output)
    crawler.print_summary()

    print(f"\nCSV written to: {args.output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())