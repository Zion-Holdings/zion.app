from __future__ import annotations

import argparse
import asyncio
import json
import os
from pathlib import Path

from .crawler import SiteCrawler
from .fixers import suggest_simple_fixes


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Site Link Auditor: crawl and detect broken links")
    sub = p.add_subparsers(dest="command", required=True)

    crawl = sub.add_parser("crawl", help="Crawl a site and check links/assets")
    crawl.add_argument("start_url", help="Root URL to start crawling from")
    crawl.add_argument("--max-pages", type=int, default=5000)
    crawl.add_argument("--concurrency", type=int, default=12)
    crawl.add_argument("--timeout", type=int, default=15)
    crawl.add_argument("--include-external", action="store_true", help="Check external links but do not recurse into them")
    crawl.add_argument("--output-dir", default="./link_audit_report", help="Directory to write reports")

    fixes = sub.add_parser("suggest-fixes", help="Generate naive fix suggestions for a JSON report")
    fixes.add_argument("report_json", help="Path to JSON report produced by crawl")
    fixes.add_argument("--output", help="Where to write suggestions JSON; defaults next to report")

    return p.parse_args()


async def run_crawl(args: argparse.Namespace) -> int:
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    csv_path = str(out_dir / "broken_links.csv")
    json_path = str(out_dir / "report.json")

    crawler = SiteCrawler(
        start_urls=[args.start_url],
        max_pages=args.max_pages,
        concurrency=args.concurrency,
        request_timeout=args.timeout,
        include_external=args.include_external,
    )
    result = await crawler.crawl(output_csv=csv_path, output_json=json_path)
    print(f"Wrote CSV: {csv_path}")
    print(f"Wrote JSON: {json_path}")
    print(f"Pages crawled: {len(result['pages'])}")
    print(f"Broken items: {len(result['broken'])}")
    return 0


def run_suggest(args: argparse.Namespace) -> int:
    with open(args.report_json, "r", encoding="utf-8") as f:
        report = json.load(f)
    suggestions = suggest_simple_fixes(report.get("broken", []))
    out_path = args.output or os.path.splitext(args.report_json)[0] + ".suggestions.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump([s.__dict__ for s in suggestions], f, ensure_ascii=False, indent=2)
    print(f"Wrote suggestions: {out_path}")
    print(f"Suggestions count: {len(suggestions)}")
    return 0


def main() -> int:
    args = parse_args()
    if args.command == "crawl":
        return asyncio.run(run_crawl(args))
    if args.command == "suggest-fixes":
        return run_suggest(args)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())