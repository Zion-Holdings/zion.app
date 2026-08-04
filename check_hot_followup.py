import sys, json
sys.path.insert(0, '/data/data/com.termux/files/home')
from commands import google_workspace as gw

results = gw.gmail_search("label:!!!hot-follow-up", limit=20, all_folders=True)
if not results:
    print("NO_HOT_FOLLOWUP_THREADS")
else:
    threads = {}
    for m in results:
        mid = m['id']
        try:
            msg = gw.gmail_get(mid)
        except Exception as e:
            print(f"ERROR fetching message {mid}: {e}", file=sys.stderr)
            continue
        headers = {h['name']: h['value'] for h in msg.get('payload', {}).get('headers', [])}
        subject = headers.get('Subject', '')
        from_addr = headers.get('From', '')
        date = headers.get('Date', '')
        tid = msg.get('threadId', mid)
        if tid not in threads:
            threads[tid] = {'subject': subject, 'from': from_addr, 'date': date, 'count': 0}
        threads[tid]['count'] += 1
    for tid, info in threads.items():
        print(f"THREAD_ID: {tid}")
        print(f"SUBJECT: {info['subject']}")
        print(f"FROM: {info['from']}")
        print(f"DATE: {info['date']}")
        print(f"MESSAGE_COUNT: {info['count']}")
        print("---")
