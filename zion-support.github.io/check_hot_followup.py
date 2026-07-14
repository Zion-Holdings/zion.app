import sys, json
sys.path.insert(0, 'commands')
import google_workspace

results = google_workspace.gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
threads = results

if not threads:
    print("NO_HOT_FOLLOWUP_THREADS")
else:
    seen = set()
    unique_threads = []
    for t in threads:
        tid = t.get('threadId')
        if tid not in seen:
            seen.add(tid)
            unique_threads.append(t)

    for entry in unique_threads:
        tid = entry.get('threadId')
        msgs = google_workspace.gmail_thread_get(tid)
        count = len(msgs)
        subject = ''
        sender = ''
        date = ''
        if msgs:
            msg = msgs[0]
            payload = msg.get('payload', {})
            headers = payload.get('headers', [])
            for h in headers:
                name = h.get('name', '').lower()
                if name == 'subject':
                    subject = h.get('value', '')
                elif name == 'from':
                    sender = h.get('value', '')
                elif name == 'date':
                    date = h.get('value', '')
        print(f'THREAD_ID: {tid} | SUBJECT: {subject} | FROM: {sender} | DATE: {date} | MESSAGE_COUNT: {count}')
