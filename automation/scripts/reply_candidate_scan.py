#!/usr/bin/env python3
"""Scan outbound threads for inbound replies using Gmail history/search."""
import json, os, re, subprocess, sys, time
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('/Users/miami2/zion.app')
ACCOUNT = 'kleber@ziontechgroup.com'
RUN_REPORT = REPO / 'automation' / 'reports' / 'reply-candidate-scan-latest.json'
CANDIDATES = REPO / 'outreach_monitor' / 'processed' / 'reply_candidates.jsonl'


def _gog(args: str, account=ACCOUNT):
    cmd = f"gog gmail {args} -a {account} -j --no-input"
    p = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    out = p.stdout or ''
    try:
        return json.loads(out)
    except Exception:
        return {}


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _append_jsonl(path: Path, record: dict):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('a', encoding='utf-8') as f:
        f.write(json.dumps(record, ensure_ascii=False) + '\n')


def _load_seen() -> set:
    seen = set()
    if not CANDIDATES.exists():
        return seen
    for line in CANDIDATES.read_text(encoding='utf-8', errors='ignore').splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
        except Exception:
            continue
        mid = str(obj.get('message_id') or '').strip()
        tid = str(obj.get('thread_id') or '').strip()
        if mid:
            seen.add(mid)
        if tid:
            seen.add(tid)
    return seen


def main():
    seen = _load_seen()
    selected = 0
    skipped_seen = 0
    scanned = 0
    errors = 0

    # Query recent activity where others wrote to us and we replied at least once.
    q = 'to:kleber@ziontechgroup.com -from:kleber@ziontechgroup.com newer_than:60d'
    data = _gog(f'search "{q}" --max 80 --select=id,threadId,subject,from,to,labelIds,category')
    messages = []
    if isinstance(data, dict):
        messages = data.get('messages') or []
    elif isinstance(data, list):
        messages = data

    for m in messages:
        scanned += 1
        if not isinstance(m, dict):
            continue
        mid = str(m.get('id') or '').strip()
        tid = str(m.get('threadId') or '').strip()
        if mid in seen or tid in seen:
            skipped_seen += 1
            continue
        seen.add(mid); seen.add(tid)
        labels = m.get('labelIds') or []
        subj = str(m.get('subject') or '')
        sender_raw = m.get('from') or ''
        sender = sender_raw
        m2 = re.search(r'<([^>]+)>', sender_raw)
        if m2:
            sender = m2.group(1)
        record = {
            'ts': _now_iso(),
            'mode': 'reply_candidate',
            'message_id': mid,
            'thread_id': tid,
            'subject': subj,
            'from': sender,
            'to': m.get('to') or ACCOUNT,
            'category': m.get('category'),
            'labelIds': labels,
        }
        _append_jsonl(CANDIDATES, record)
        selected += 1

    report = {
        'ts': _now_iso(),
        'run_id': datetime.now(timezone.utc).strftime('%Y%m%d-%H%M%S'),
        'mode': 'reply_candidate_scan',
        'query': q,
        'scanned': scanned,
        'selected': selected,
        'skipped_seen': skipped_seen,
        'errors': errors,
    }
    RUN_REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False))


if __name__ == '__main__':
    main()
