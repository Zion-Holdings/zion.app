from pathlib import Path
from typing import List, Dict
import feedparser

OUT_DIR = Path("data/sources/rss")


def ingest_feeds(feeds: List[Dict]) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for f in feeds:
        url = f.get("url")
        name = f.get("name") or (url or "").replace("://", "_").replace("/", "_")
        if not url:
            continue
        d = feedparser.parse(url)
        for i, entry in enumerate(d.entries[:50]):
            title = entry.get("title", "untitled").strip()
            summary = entry.get("summary", "").strip()
            content = f"Title: {title}\n\n{summary}\n"
            (OUT_DIR / f"{name}_{i:03d}.txt").write_text(content, encoding="utf-8")