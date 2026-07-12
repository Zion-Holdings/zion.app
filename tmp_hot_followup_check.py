import sys, json, collections
sys.path.insert(0, 'commands')
import google_workspace as gw

LABEL_QUERY = 'label:!!!hot-follow-up'
LIMIT = 20

msgs = gw.gmail_search(LABEL_QUERY, limit=LIMIT, all_folders=True)
if not msgs:
    print('NO_HOT_FOLLOWUP_THREADS')
    sys.exit(0)

thread_data = collections.OrderedDict()  # thread_id -> {subject, from, date, count}
errors = []

for m in msgs:
    mid = m.get('id')
    if not mid:
        continue
    try:
        full = gw.gmail_get(mid)
    except Exception as e:
        errors.append(f"Failed to get message {mid}: {e}")
        continue
    headers = full.get('payload', {}).get('headers', [])
    def h(name):
        return next((x['value'] for x in headers if x['name'] == name), '')
    subject = h('Subject') or ''
    sender = h('From') or ''
    date = h('Date') or ''
    thread_id = full.get('threadId', mid)
    if thread_id not in thread_data:
        thread_data[thread_id] = {
            'subject': subject,
            'from': sender,
            'date': date,
            'count': 1,
        }
    else:
        thread_data[thread_id]['count'] += 1

if errors:
    print("ERRORS:")
    for e in errors:
        print(e)
    print("---")

for tid, info in thread_data.items():
    print(f"THREAD_ID={tid}")
    print(f"SUBJECT={info['subject']}")
    print(f"FROM={info['from']}")
    print(f"DATE={info['date']}")
    print(f"MSG_COUNT={info['count']}")
    print("---")
