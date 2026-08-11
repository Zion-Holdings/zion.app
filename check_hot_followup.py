import sys, json, os

# Execute the module inline to avoid import path issues
with open('commands/google_workspace.py', 'r') as f:
    code = f.read()
mod_globals = {
    '__name__': 'google_workspace',
    '__file__': os.path.abspath('commands/google_workspace.py')
}
exec(code, mod_globals)

gmail_search = mod_globals['gmail_search']
gmail_get = mod_globals['gmail_get']
gmail_list_labels = mod_globals['gmail_list_labels']

class SuppressStdout:
    def __enter__(self):
        self._devnull = open(os.devnull, 'w')
        self._stdout = sys.stdout
        sys.stdout = self._devnull
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        sys.stdout = self._stdout
        self._devnull.close()

# Resolve hot-followup label candidates dynamically
candidate_ids = []
try:
    labels = gmail_list_labels()
    for lab in labels:
        name = lab.get('name', '').lower()
        lid = lab.get('id', '').lower()
        if 'hot' in name or 'follow' in name or 'hot' in lid or 'follow' in lid:
            candidate_ids.append(lab['id'])
except Exception:
    candidate_ids = []

if not candidate_ids:
    candidate_ids = ['Label_4207916705207178948']  # known fallback

messages = []
seen_ids = set()
for cid in candidate_ids:
    try:
        with SuppressStdout():
            hits = gmail_search(f'label:{cid}', limit=20, all_folders=True)
        for m in hits:
            mid = m.get('id')
            if mid and mid not in seen_ids:
                seen_ids.add(mid)
                messages.append(m)
    except Exception:
        continue

if not messages:
    print("NO_HOT_FOLLOWUP_THREADS")
    sys.exit(0)

seen_threads = {}
counts = {}
for m in messages:
    tid = m.get('threadId') or m.get('id')
    counts[tid] = counts.get(tid, 0) + 1
    seen_threads.setdefault(tid, m)

rows = []
for tid, m in seen_threads.items():
    try:
        msg = gmail_get(m['id'])
    except Exception as e:
        msg = {}
    headers = {}
    for h in msg.get('payload', {}).get('headers', []):
        headers[h['name'].lower()] = h['value']
    subject = headers.get('subject', '')
    frm = headers.get('from', '')
    date = headers.get('date', '')
    rows.append({
        'threadId': tid,
        'subject': subject,
        'from': frm,
        'date': date,
        'message_count': counts[tid]
    })

for r in rows:
    print(f"THREAD_ID={r['threadId']}|SUBJECT={r['subject']}|FROM={r['from']}|DATE={r['date']}|MSG_COUNT={r['message_count']}")
