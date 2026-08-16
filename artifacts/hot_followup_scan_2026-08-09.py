
#!/usr/bin/env python3
"""Lightweight hot-followup scanner for cron runs."""
import sys, os, json, base64, importlib.util
from pathlib import Path

REPO_ROOT = Path(r'C:\Users\Zion\tmp\zion-gh-publish')
HELPER = REPO_ROOT / 'commands' / 'google_workspace.py'
DEDUP_JSON = REPO_ROOT / 'outreach_monitor' / 'processed' / 'sent_threads.json'
DEDUP_JSONL = REPO_ROOT / 'outreach_monitor' / 'processed' / 'sent_ledger.jsonl'
HF_LEDGER = REPO_ROOT / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl'

LABEL_ID = 'Label_4207916705207178948'
EXCLUDE_DOMAINS = ['ziontechgroup.com']
SECONDARY_EXCLUDES = ['newsletters', 'bulk-template-looking sender names']

spec = importlib.util.spec_from_file_location('google_workspace', HELPER)
gw = importlib.util.module_from_spec(spec)
try:
    spec.loader.exec_module(gw)
except Exception as e:
    print(json.dumps({"status": "error", "reason": f"helper load failed: {e}"}))
    sys.exit(1)

# Refresh token if needed
try:
    gw.gog_headers()
except Exception as e:
    print(json.dumps({"status": "error", "reason": f"auth init failed: {e}"}))
    sys.exit(1)

# Load dedup
seen = set()
try:
    if DEDUP_JSON.exists():
        data = json.loads(DEDUP_JSON.read_text())
        for entry in data.get('sent_threads', []):
            tid = entry.get('thread_id')
            if tid:
                seen.add(tid)
except Exception:
    pass
for ledger in [DEDUP_JSONL, HF_LEDGER]:
    try:
        if ledger.exists():
            for line in ledger.read_text().splitlines():
                line = line.strip()
                if not line:
                    continue
                try:
                    rec = json.loads(line)
                    tid = rec.get('thread_id')
                    if tid:
                        seen.add(tid)
                except Exception:
                    continue
    except Exception:
        pass

# Threads API scan
url = f'https://gmail.googleapis.com/gmail/v1/users/me/threads?labelId={LABEL_ID}&maxResults=100'
try:
    resp = gw.urllib.request.urlopen(gw.urllib.request.Request(url, headers=gw.gog_headers()))
    threads_data = json.loads(resp.read().decode())
    threads = threads_data.get('threads', [])
except Exception as e:
    print(json.dumps({"status": "error", "reason": f"threads api failed: {e}"}))
    sys.exit(1)

candidates = []
skipped = 0
for t in threads:
    tid = t.get('id')
    if tid in seen:
        skipped += 1
        continue
    try:
        thread = gw.gmail_thread_get(tid)
    except Exception:
        skipped += 1
        continue
    if not thread:
        skipped += 1
        continue
    first = thread[0] if isinstance(thread, list) else thread.get('messages', [{}])[0]
    headers = first.get('payload', {}).get('headers', [])
    hdict = {h['name'].lower(): h.get('value', '') for h in headers}
    sender = hdict.get('from', '')
    subject = hdict.get('subject', '')
    label_ids = first.get('labelIds', [])
    if LABEL_ID not in label_ids:
        skipped += 1
        continue
    # Domain filter
    domain = sender.split('@')[-1].lower() if '@' in sender else ''
    if any(domain == d.lower() for d in EXCLUDE_DOMAINS):
        skipped += 1
        continue
    # Newsletter / system filter
    lower_subj = subject.lower()
    if any(k in lower_subj for k in ['newsletter', 'unsubscribe', 'fyi', 'ci-failure', 'ci failure']):
        skipped += 1
        continue
    lower_from = sender.lower()
    if any(k in lower_from for k in ['noreply', 'no-reply', 'mailer-daemon', 'github.com', 'google.com']):
        skipped += 1
        continue
    candidates.append({
        'thread_id': tid,
        'message_id': first.get('id'),
        'from': sender,
        'subject': subject,
        'labels': label_ids,
    })

result = {
    'status': 'ok',
    'threads_total': len(threads),
    'threads_skipped_dedup_or_filters': skipped,
    'candidates': candidates,
    'seen_count': len(seen),
}
print(json.dumps(result, indent=2, ensure_ascii=False))
