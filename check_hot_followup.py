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

label_query = 'label:"!!!hot-follow-up"'
messages = []

class SuppressStdout:
    def __enter__(self):
        self._devnull = open(os.devnull, 'w')
        self._stdout = sys.stdout
        sys.stdout = self._devnull
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        sys.stdout = self._stdout
        self._devnull.close()

try:
    with SuppressStdout():
        messages = gmail_search(label_query, limit=20, all_folders=True)
except Exception as e:
    print(f"ERROR: {e}", file=sys.stderr)
    messages = []

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
