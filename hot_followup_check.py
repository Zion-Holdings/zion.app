import sys
sys.path.insert(0, '/data/data/com.termux/files/home')
from commands.google_workspace import gmail_search, gmail_get, gmail_thread_get

results = gmail_search('label:!!!hot-follow-up', limit=20, all_folders=True)
if not results:
    print('NO_HOT_FOLLOWUP_THREADS')
    sys.exit(0)

seen = set()
for item in results:
    mid = item['id']
    tid = item.get('threadId', mid)
    if tid in seen:
        continue
    seen.add(tid)
    try:
        msg = gmail_get(mid)
    except Exception as e:
        print(f"ERROR message={mid} detail={e}")
        continue
    headers = {h['name']: h['value'] for h in msg.get('payload', {}).get('headers', [])}
    subject = headers.get('Subject', '')
    frm = headers.get('From', '')
    date = headers.get('Date', '')
    try:
        thread_msgs = len(gmail_thread_get(tid))
    except Exception:
        thread_msgs = 1
    print(f"thread_id={tid} subject={subject!r} from={frm!r} date={date!r} message_count={thread_msgs}")
