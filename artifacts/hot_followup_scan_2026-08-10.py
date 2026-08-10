#!/usr/bin/env python3
"""Lightweight hot-followup scanner for zion-gh-publish."""
import sys, json, re
from pathlib import Path
from datetime import datetime, timezone
import importlib.util

REPO_ROOT = Path(__file__).resolve().parent.parent
SPEC_PATH = REPO_ROOT / 'commands' / 'google_workspace.py'
spec = importlib.util.spec_from_file_location('google_workspace', str(SPEC_PATH))
gw = importlib.util.module_from_spec(spec)
sys.modules['google_workspace'] = gw
spec.loader.exec_module(gw)

LABEL_NAME = '!!!!HOT FOLLOW-UP'
LABEL_ID = 'Label_4207916705207178948'
EXCLUDE_DOMAINS = ['ziontechgroup.com']
SECONDARY_EXCLUDES = ['newsletters']
DEDUP_FILES = [
    REPO_ROOT / 'outreach_monitor' / 'processed' / 'sent_threads.json',
    REPO_ROOT / 'outreach_monitor' / 'processed' / 'sent_ledger.jsonl',
    REPO_ROOT / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl',
]

def load_json(path):
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return {}

def load_jsonl(path):
    if not path.exists():
        return set()
    items = set()
    for line in path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            rec = json.loads(line)
            key = rec.get('thread_id') or rec.get('threadId') or ''
            if key:
                items.add(key)
        except Exception:
            pass
    return items

def load_dedup():
    sent = set()
    for f in DEDUP_FILES:
        if f.suffix == '.json':
            data = load_json(f)
            if isinstance(data, dict):
                for tid in data.keys():
                    sent.add(tid)
            elif isinstance(data, list):
                for rec in data:
                    if isinstance(rec, dict):
                        tid = rec.get('thread_id') or rec.get('threadId') or ''
                        if tid:
                            sent.add(tid)
        else:
            sent.update(load_jsonl(f))
    return sent

def is_noise_sender(from_hdr):
    if not from_hdr:
        return True
    f = from_hdr.lower()
    for pat in ['noreply@', 'no-reply@', 'mailer-daemon@', 'notifications@github.com']:
        if pat in f:
            return True
    for d in EXCLUDE_DOMAINS:
        if d in f:
            return True
    return False

def is_newsletter_subject(subj):
    if not subj:
        return False
    s = subj.lower()
    for pat in SECONDARY_EXCLUDES:
        if pat in s:
            return True
    return False

def extract_header(headers, name):
    for h in headers:
        if h.get('name','').lower() == name.lower():
            return h.get('value','')
    return ''

def main():
    print('=== Hot-followup scan starting ===', flush=True)
    try:
        headers = gw.gog_headers()
    except Exception as e:
        print(f'AUTH_FAIL: {e}', flush=True)
        return {'status':'blocked','reason':'auth_failed','detail':str(e)}

    # Verify label exists
    labels = {}
    try:
        labels_resp = gw.gmail_list_labels()
        if isinstance(labels_resp, dict):
            for lab in labels_resp.get('labels', []):
                labels[lab.get('id','')] = lab.get('name','')
        elif isinstance(labels_resp, list):
            for lab in labels_resp:
                labels[lab.get('id','')] = lab.get('name','')
    except Exception as e:
        print(f'LABEL_LIST_FAIL: {e}', flush=True)

    if LABEL_ID not in labels:
        print(f'LABEL_NOT_FOUND: {LABEL_ID} not in label map', flush=True)
        return {'status':'blocked','reason':'label_not_found'}

    print(f'LABEL_OK: {labels.get(LABEL_ID)} ({LABEL_ID})', flush=True)

    # Threads API primary scan
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/threads?labelId=' + LABEL_ID + '&maxResults=100'
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f'THREADS_API_FAIL: {e}', flush=True)
        return {'status':'blocked','reason':'threads_api_failed','detail':str(e)}

    threads = data.get('threads', [])
    print(f'THREADS_API_THREADS: {len(threads)}', flush=True)

    dedup = load_dedup()
    candidates = []
    checked = 0
    for t in threads:
        tid = t.get('id','')
        if not tid:
            continue
        # Verify label actually present on first message via thread get
        try:
            msgs = gw.gmail_thread_get(tid)
        except Exception:
            continue
        if not msgs:
            continue
        first = msgs[0]
        label_ids = first.get('labelIds', [])
        if LABEL_ID not in label_ids:
            continue

        headers_lst = first.get('payload', {}).get('headers', [])
        from_hdr = extract_header(headers_lst, 'From')
        subject = extract_header(headers_lst, 'Subject')
        date_hdr = extract_header(headers_lst, 'Date')

        checked += 1
        if is_noise_sender(from_hdr):
            print(f'SKIP noise sender: {from_hdr}', flush=True)
            continue
        if is_newsletter_subject(subject):
            print(f'SKIP newsletter: {subject}', flush=True)
            continue
        if tid in dedup:
            print(f'SKIP dedup: {tid}', flush=True)
            continue
        candidates.append({
            'thread_id': tid,
            'from': from_hdr,
            'subject': subject,
            'date': date_hdr,
            'message_id': first.get('id',''),
        })

    print(f'CANDIDATES: {len(candidates)}', flush=True)
    result = {
        'status': 'ok',
        'threads_api_returned': len(threads),
        'threads_checked': checked,
        'candidates': candidates,
        'sent': 0,
    }
    out_path = REPO_ROOT / 'outreach_monitor' / 'processed' / f'hot_followup_scan_{datetime.now(timezone.utc).strftime("%Y-%m-%d")}.json'
    out_path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'SCAN_ARTIFACT: {out_path}', flush=True)
    print(json.dumps(result, ensure_ascii=False))
    return result

if __name__ == '__main__':
    import urllib.request
    main()
