#!/usr/bin/env python3
import os, re, sys, json, csv, time, hashlib, urllib.request, urllib.parse
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

CANDIDATES = Path('.audit/wayback-candidates.txt')
OUT_DIR = Path('.audit/wayback-recovered')
SUMMARY = Path('.audit/wayback-recovery-summary.json')
ERRORS = Path('.audit/wayback-recovery-errors.log')
MAX_WORKERS = 6
TIMEOUT = 20
UA = 'wayback-recovery/1.0 (+https://ziontechgroup.com)'

def path_for(url: str) -> Path:
    path = urllib.parse.urlparse(url).path
    path = re.sub(r'/+', '/', path)
    if path.endswith('/'):
        path += 'index.html'
    elif not os.path.splitext(path)[1]:
        path += '.html'
    safe = path.strip('/')
    return OUT_DIR / safe

from typing import Optional, Tuple, List, Dict
def fetch_text(url: str) -> Optional[str]:
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            ct = r.headers.get('Content-Type','')
            if 'text/html' in ct or 'application/json' in ct or 'text/plain' in ct or 'text/xml' in ct:
                return r.read().decode('utf-8', errors='replace')
            return r.read().decode('utf-8', errors='replace')
    except Exception as e:
        raise RuntimeError(f'{e}')

def process(candidate: str):
    encoded = urllib.parse.quote_plus(candidate)
    cdx_url = f'https://web.archive.org/cdx/search/cdx?url={encoded}&output=json&fl=timestamp,statuscode&filter=statuscode:200&limit=1&sort=timestamp:desc'
    try:
        cdx = fetch_text(cdx_url)
    except Exception:
        return {'candidate': candidate, 'status': 'error', 'error': 'cdx_fetch_failed'}
    if not cdx or not cdx.strip().startswith('[["'):
        return {'candidate': candidate, 'status': 'missing', 'error': 'no_200_snapshot'}
    try:
        data = json.loads(cdx)
    except Exception:
        return {'candidate': candidate, 'status': 'error', 'error': 'cdx_parse_failed'}
    rows = data[1:] if isinstance(data[0], list) and data[0][0].startswith('timestamp') else data
    if not rows:
        return {'candidate': candidate, 'status': 'missing', 'error': 'no_200_snapshot'}
    row = rows[0]
    ts = row[0]
    target = f'https://web.archive.org/web/{ts}/{candidate}'
    dst = path_for(candidate)
    dst.parent.mkdir(parents=True, exist_ok=True)
    try:
        txt = fetch_text(target)
        if txt is None:
            return {'candidate': candidate, 'status': 'error', 'error': 'empty_response'}
        dst.write_text(txt, encoding='utf-8')
        return {'candidate': candidate, 'status': 'recovered', 'snapshot_ts': ts, 'snapshot_url': target, 'local_path': str(dst), 'bytes': len(txt)}
    except Exception as e:
        # write a stub for gap documentation
        stub = f'<!-- MISSING --> <a href="{target}">{target}</a>'
        try:
            dst.write_text(stub)
        except Exception:
            pass
        return {'candidate': candidate, 'status': 'error', 'error': f'download_failed:{e}'}

def main():
    print('reading candidates...')
    candidates = [x.strip() for x in CANDIDATES.read_text().splitlines() if x.strip()]
    print(f'candidates: {len(candidates)}')
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    RESULTS = []
    done = 0
    print('starting recovery...')
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        futs = {ex.submit(process, c): c for c in candidates}
        for fut in as_completed(futs):
            done += 1
            res = fut.result()
            RESULTS.append(res)
            status = res.get('status', 'unknown')
            if status == 'recovered':
                ts = res.get('snapshot_ts','?')
                print(f'[{done}/{len(candidates)}] RECOVERED {res["candidate"]} @ {ts}')
            else:
                err = res.get('error','?')
                with ERRORS.open('a', encoding='utf-8') as log:
                    log.write(f'{res["candidate"]}\t{status}\t{err}\n')
                print(f'[{done}/{len(candidates)}] {status.upper()}: {res["candidate"]} :: {err}')
    by = {}
    for r in RESULTS:
        by.setdefault(r['status'], []).append(r)
    summary = {
        'candidates': len(candidates),
        'recovered': len(by.get('recovered', [])),
        'missing_no_snapshot': len(by.get('missing', [])),
        'errors': len(by.get('error', [])),
        'recovered_list': by.get('recovered', []),
        'missing_list': by.get('missing', []),
        'error_list': by.get('error', []),
    }
    SUMMARY.write_text(json.dumps(summary, indent=2), encoding='utf-8')
    ERRORS.write_text('\n---SUMMARY---\n' + json.dumps(summary, indent=2), encoding='utf-8')
    print('done:', summary)

if __name__ == '__main__':
    main()
