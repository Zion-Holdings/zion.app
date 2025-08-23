from __future__ import annotations

import asyncio
import re
from typing import Iterable
from yarl import URL


def normalize_url(url: str | URL) -> URL:
    u = URL(url)
    if not u.scheme:
        u = u.with_scheme("http")
    # Remove fragments
    u = u.with_fragment("")
    return u


def is_http_url(url: URL) -> bool:
    return url.scheme in {"http", "https"}


def same_site(a: URL, b: URL) -> bool:
    return a.host == b.host


class AsyncLimiter:
    def __init__(self, max_concurrent: int) -> None:
        self._semaphore = asyncio.Semaphore(max_concurrent)

    async def __aenter__(self):
        await self._semaphore.acquire()
        return self

    async def __aexit__(self, exc_type, exc, tb):
        self._semaphore.release()


ABSOLUTE_URL_RE = re.compile(r"^https?://", re.IGNORECASE)


def to_absolute(base_url: URL, maybe_relative: str | None) -> URL | None:
    if not maybe_relative:
        return None
    try:
        if ABSOLUTE_URL_RE.match(maybe_relative):
            return normalize_url(maybe_relative)
        # Protocol-relative
        if maybe_relative.startswith("//"):
            return normalize_url(f"{base_url.scheme}:{maybe_relative}")
        return normalize_url(URL(maybe_relative, encoded=False).join(base_url))
    except Exception:
        return None


def chunked(iterable: Iterable, size: int):
    batch = []
    for item in iterable:
        batch.append(item)
        if len(batch) >= size:
            yield batch
            batch = []
    if batch:
        yield batch