#!/usr/bin/env python3
"""Lightweight fallback prospector wrapper using web_prospecting internals without DB."""
import sys
from pathlib import Path
from urllib.parse import quote_plus

sys.path.insert(0, str(Path(__file__).resolve().parent))
from web_prospecting import load_keywords, search_html_free, page_emails, extract_company_name, is_valid_email


def main():
    print('fallback_worker_start')
    keywords = load_keywords(4)
    print('keywords=' + ','.join(keywords))
    total = 0
    out = Path('logs/web_prospecting_fallback.out')
    err = Path('logs/web_prospecting_fallback.err')
    out.write_text('', encoding='utf-8')
    err.write_text('', encoding='utf-8')
    for kw in keywords:
        urls = search_html_free(kw, limit=3)
        print(f'kw={kw} urls={len(urls)}')
        for url in urls[:3]:
            try:
                emails = page_emails(url)
            except Exception as e:
                print(f'page_failed {url}: {e}', file=sys.stderr)
                continue
            valid = [e for e in emails if is_valid_email(e)]
            print(f'url={url} emails={valid[:3]}')
            total += len(valid)
    print(f'fallback_total_valid_emails={total}')
    print('fallback_worker_done')


if __name__ == '__main__':
    main()
