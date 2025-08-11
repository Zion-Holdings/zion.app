import json
import os
import time
from datetime import datetime, timezone
from typing import List, Tuple

import feedparser


FEEDS: List[Tuple[str, str]] = [
    ("Hacker News", "https://hnrss.org/frontpage"),
    ("TechCrunch", "https://techcrunch.com/feed/"),
    ("The Verge", "https://www.theverge.com/rss/index.xml"),
    ("GitHub Changelog", "https://github.blog/changelog/feed/"),
]


def ensure_directory(path: str) -> None:
    os.makedirs(path, exist_ok=True)


def iso_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def parse_feed(source_name: str, url: str) -> List[dict]:
    parsed = feedparser.parse(url)
    entries = []
    for entry in parsed.entries[:20]:
        published = entry.get("published") or entry.get("updated")
        published_parsed = entry.get("published_parsed") or entry.get("updated_parsed")
        if isinstance(published_parsed, time.struct_time):
            published_iso = datetime(*published_parsed[:6], tzinfo=timezone.utc).isoformat()
        else:
            published_iso = None
        entries.append(
            {
                "source": source_name,
                "title": entry.get("title"),
                "link": entry.get("link"),
                "published": published,
                "published_iso": published_iso,
                "summary": entry.get("summary"),
            }
        )
    return entries


def aggregate_feeds() -> dict:
    all_entries: List[dict] = []
    for name, url in FEEDS:
        try:
            all_entries.extend(parse_feed(name, url))
        except Exception as e:
            all_entries.append(
                {
                    "source": name,
                    "title": f"[Error parsing feed] {name}",
                    "link": url,
                    "published": None,
                    "published_iso": None,
                    "summary": str(e),
                }
            )
    # Sort newest first by ISO time if present
    def sort_key(item: dict):
        return item.get("published_iso") or ""

    all_entries.sort(key=sort_key, reverse=True)
    return {
        "generated_at": iso_now(),
        "sources": [name for name, _ in FEEDS],
        "total": len(all_entries),
        "items": all_entries[:100],
    }


def main() -> None:
    output_dir = os.path.join("data", "feeds")
    ensure_directory(output_dir)
    payload = aggregate_feeds()
    output_path = os.path.join(output_dir, "latest.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    print(f"Wrote feeds data to {output_path}")


if __name__ == "__main__":
    main()