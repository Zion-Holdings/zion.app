from __future__ import annotations

import asyncio
import csv
import json
import time
from collections import defaultdict, deque
from dataclasses import dataclass, asdict
from typing import Iterable, Set, Dict, Tuple, List

import aiohttp
from aiohttp import ClientResponse
from bs4 import BeautifulSoup
from yarl import URL

from .utils import normalize_url, is_http_url, same_site, to_absolute, AsyncLimiter


USER_AGENT = "link-auditor-bot/1.0 (+https://example.com)"


@dataclass
class BrokenItem:
    source_page: str
    target_url: str
    element: str
    status: int | None
    error: str | None
    context: str | None


@dataclass
class PageResult:
    url: str
    status: int
    num_links_checked: int
    elapsed_ms: int


class SiteCrawler:
    def __init__(
        self,
        start_urls: Iterable[str],
        max_pages: int = 5000,
        concurrency: int = 12,
        request_timeout: int = 15,
        include_external: bool = False,
        allow: Iterable[str] | None = None,
        deny: Iterable[str] | None = None,
    ) -> None:
        self.start_urls: List[URL] = [normalize_url(u) for u in start_urls]
        self.max_pages = max_pages
        self.concurrency = concurrency
        self.request_timeout = request_timeout
        self.include_external = include_external
        self.allow = set(allow or [])
        self.deny = set(deny or [])

        self._queue: deque[URL] = deque()
        for u in self.start_urls:
            self._queue.append(u)
        self._visited: Set[URL] = set()
        self._broken: List[BrokenItem] = []
        self._pages: List[PageResult] = []
        self._roots: Set[str] = {u.host for u in self.start_urls if u.host}

    def _should_visit(self, url: URL, from_url: URL) -> bool:
        if url in self._visited:
            return False
        if not is_http_url(url):
            return False
        if not self.include_external and not same_site(url, from_url):
            return False
        if self.deny and any(pat in str(url) for pat in self.deny):
            return False
        if self.allow and not any(pat in str(url) for pat in self.allow):
            return False
        return True

    async def _fetch(self, session: aiohttp.ClientSession, url: URL) -> Tuple[int | None, str | None, bytes | None, str | None]:
        try:
            async with session.get(url, timeout=self.request_timeout) as resp:
                content_type = resp.headers.get("content-type", "").lower()
                data = await resp.read()
                return resp.status, content_type, data, None
        except Exception as e:
            return None, None, None, str(e)

    async def _head_or_get(self, session: aiohttp.ClientSession, url: URL) -> Tuple[int | None, str | None]:
        try:
            async with session.head(url, timeout=self.request_timeout, allow_redirects=True) as resp:
                return resp.status, None
        except Exception:
            try:
                async with session.get(url, timeout=self.request_timeout, allow_redirects=True) as resp:
                    return resp.status, None
            except Exception as e:
                return None, str(e)

    def _extract_links(self, base_url: URL, html_bytes: bytes, content_type: str) -> List[Tuple[str, URL | None, str | None]]:
        links: List[Tuple[str, URL | None, str | None]] = []
        if not content_type.startswith("text/html"):
            return links
        try:
            soup = BeautifulSoup(html_bytes, "html.parser")
        except Exception:
            return links
        # Anchor links
        for a in soup.find_all("a"):
            href = a.get("href")
            abs_url = to_absolute(base_url, href)
            text = a.get_text(strip=True) or None
            links.append(("a[href]", abs_url, text))
        # Images
        for img in soup.find_all("img"):
            src = img.get("src")
            abs_url = to_absolute(base_url, src)
            alt = img.get("alt")
            links.append(("img[src]", abs_url, alt))
        # Stylesheets and other href assets
        for link in soup.find_all("link"):
            href = link.get("href")
            abs_url = to_absolute(base_url, href)
            rel = link.get("rel")
            links.append(("link[href]", abs_url, ",".join(rel) if rel else None))
        # Scripts
        for script in soup.find_all("script"):
            src = script.get("src")
            abs_url = to_absolute(base_url, src)
            links.append(("script[src]", abs_url, None))
        return links

    async def crawl(self, output_csv: str | None = None, output_json: str | None = None) -> Dict[str, List[dict]]:
        connector = aiohttp.TCPConnector(limit=0)
        timeout = aiohttp.ClientTimeout(total=None)
        headers = {"User-Agent": USER_AGENT}

        limiter = AsyncLimiter(self.concurrency)

        async with aiohttp.ClientSession(connector=connector, timeout=timeout, headers=headers) as session:
            while self._queue and len(self._visited) < self.max_pages:
                url = self._queue.popleft()
                if url in self._visited:
                    continue
                self._visited.add(url)

                start = time.perf_counter()
                status, content_type, data, error = await self._fetch(session, url)
                elapsed_ms = int((time.perf_counter() - start) * 1000)

                if status is None:
                    self._pages.append(PageResult(str(url), -1, 0, elapsed_ms))
                    self._broken.append(
                        BrokenItem(
                            source_page=str(url),
                            target_url=str(url),
                            element="page",
                            status=None,
                            error=error or "request failed",
                            context=None,
                        )
                    )
                    continue

                num_checked = 0
                links = self._extract_links(url, data or b"", content_type or "")

                async def check_link(element: str, target: URL | None, context: str | None, from_url: URL):
                    nonlocal num_checked
                    if target is None:
                        return
                    if is_http_url(target):
                        st, err = await self._head_or_get(session, target)
                        num_checked += 1
                        if st is None or st >= 400:
                            self._broken.append(
                                BrokenItem(
                                    source_page=str(from_url),
                                    target_url=str(target),
                                    element=element,
                                    status=st,
                                    error=err,
                                    context=context,
                                )
                            )
                        # Enqueue same-site for crawling
                        if self._should_visit(target, from_url):
                            self._queue.append(target)

                tasks = []
                for element, abs_url, context in links:
                    tasks.append(check_link(element, abs_url, context, url))
                # Limit concurrency per page
                for i in range(0, len(tasks), self.concurrency):
                    chunk = tasks[i : i + self.concurrency]
                    await asyncio.gather(*chunk)

                self._pages.append(PageResult(str(url), status, num_checked, elapsed_ms))

        result = {
            "pages": [asdict(p) for p in self._pages],
            "broken": [asdict(b) for b in self._broken],
        }

        if output_csv:
            with open(output_csv, "w", newline="", encoding="utf-8") as f:
                writer = csv.DictWriter(
                    f,
                    fieldnames=[
                        "source_page",
                        "target_url",
                        "element",
                        "status",
                        "error",
                        "context",
                    ],
                )
                writer.writeheader()
                for b in self._broken:
                    writer.writerow(asdict(b))

        if output_json:
            with open(output_json, "w", encoding="utf-8") as f:
                json.dump(result, f, ensure_ascii=False, indent=2)

        return result