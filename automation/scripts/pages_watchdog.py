from __future__ import annotations

import hashlib
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

try:
    import requests
except ImportError:
    requests = None

REPO_ROOT = Path(__file__).resolve().parents[2]
VERIFY_PY = REPO_ROOT / 'automation' / 'verify_200.py'
REPORT_DIR = REPO_ROOT / 'automation' / 'reports'
LATEST_REPORT = REPORT_DIR / 'pages-watchdog-latest.json'
ALERT_LEDGER = REPORT_DIR / 'pages-alert-ledger.jsonl'
CORRUPTED = REPORT_DIR / 'live-deploy-probe.json'
FAILING_THRESHOLD = 2


def _utcnow() -> datetime:
    return datetime.now(timezone.utc)


def _ts() -> str:
    return _utcnow().isoformat()


def load_verify_routes() -> list[str]:
    text = VERIFY_PY.read_text(encoding='utf-8')
    urls: list[str] = []
    capture = False
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith('primary_urls = ['):
            capture = True
            continue
        if stripped.startswith('secondary_urls = ['):
            capture = False
            continue
        if stripped == ']':
            capture = capture and not stripped.startswith(']')
            continue
        if not capture:
            continue
        if stripped.startswith('"https://ziontechgroup.com/'):
            url = stripped.strip('",\'')
            urls.append(url)
    return sorted(set(urls))


def probe(urls):
    session = None
    if requests is not None:
        session = requests.Session()
        session.headers.update({
            'User-Agent': 'Mozilla/5.0 (compatible; zion-pages-watchdog/1.0)',
            'Accept': 'text/html,application/xhtml+xml',
        })
        session.max_redirects = 5

    broken_since = {}
    if LATEST_REPORT.exists():
        try:
            prev = json.loads(LATEST_REPORT.read_text(encoding='utf-8'))
            broken_since = {r['url']: r['broken_since'] for r in prev.get('routes', []) if r.get('status') != 200 and r.get('broken_since')}
        except Exception:
            broken_since = {}

    broken = 0
    results = []
    for url in urls:
        status = None
        final_url = url
        error = None

        if session is None:
            error = 'missing dependency: requests'
        else:
            try:
                resp = session.get(url, timeout=(10, 20), allow_redirects=True)
                status = resp.status_code
                final_url = resp.url
            except Exception as exc:
                error = repr(exc)

        ok = status == 200
        if not ok:
            broken += 1
        if not ok and url not in broken_since:
            broken_since[url] = _ts()
        results.append({
            'url': url,
            'final_url': final_url,
            'status': status,
            'error': error,
            'ok': ok,
            'broken_since': broken_since.get(url),
        })
    return results, broken


def write_report(results, broken):
    payload = {
        'checked_at': _ts(),
        'routes_checked': len(results),
        'routes_ok': len(results) - broken,
        'routes_broken': broken,
        'routes': results,
    }
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    tmp = LATEST_REPORT.with_suffix('.json.tmp')
    tmp.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    tmp.replace(LATEST_REPORT)
    return payload


def alert_on_regressions(payload):
    if not ALERT_LEDGER.exists():
        return
    try:
        lines = [json.loads(x) for x in ALERT_LEDGER.read_text(encoding='utf-8').splitlines() if x.strip()]
    except Exception:
        return
    if not lines:
        return
    last = lines[-1]
    prev = last.get('payload', {})
    prev_broken = {r['url'] for r in prev.get('routes', []) if r.get('status') != 200}
    now_broken = {r['url'] for r in payload.get('routes', []) if r.get('status') != 200}
    new_broken = sorted(now_broken - prev_broken)
    fixed = sorted(prev_broken - now_broken)
    if not new_broken and not fixed:
        return
    event = {
        'ts': _ts(),
        'new_broken_count': len(new_broken),
        'fixed_count': len(fixed),
        'new_broken': new_broken,
        'fixed': fixed,
        'payload': payload,
    }
    with ALERT_LEDGER.open('a', encoding='utf-8') as f:
        f.write(json.dumps(event, ensure_ascii=False) + '\n')


def clean_corrupted():
    if not CORRUPTED.exists():
        return
    try:
        data = CORRUPTED.read_bytes()[:32]
    except Exception:
        return
    try:
        data.decode('utf-8')
    except Exception:
        CORRUPTED.unlink()
        print(f'[watchdog] removed corrupted artifact: {CORRUPTED}')


def main():
    clean_corrupted()
    urls = load_verify_routes()
    if not urls:
        urls = ['https://ziontechgroup.com/', 'https://ziontechgroup.com/services/', 'https://ziontechgroup.com/about/', 'https://ziontechgroup.com/contact/']
    results, broken = probe(urls)
    payload = write_report(results, broken)
    alert_on_regressions(payload)
    fail = broken >= FAILING_THRESHOLD
    print(json.dumps({
        'ts': payload['checked_at'],
        'routes_checked': payload['routes_checked'],
        'routes_ok': payload['routes_ok'],
        'routes_broken': payload['routes_broken'],
        'fail': fail,
        'report': str(LATEST_REPORT),
    }, ensure_ascii=False))
    if fail:
        sys.exit(3)


if __name__ == '__main__':
    main()
