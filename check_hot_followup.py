import sys, json
from pathlib import Path
sys.path.insert(0, str(Path.cwd()))
from commands.google_workspace import gmail_list_labels, gmail_search, gmail_thread_get

LABEL_CANDIDATES = [
    '!!!hot-follow-up',
    '!!!!HOT FOLLOW-UP',
    '!!!hot-followup',
    '!!!!hot-followup',
    '!!!hotfollowup-send-ready',
]
MAX_RESULTS = 20
LOOKBACK_DAYS = 14

def resolve_label_ids():
    labels = gmail_list_labels() or []
    name_to_id = {l.get('name', ''): l.get('id') for l in labels}
    ids = []
    for cand in LABEL_CANDIDATES:
        lid = name_to_id.get(cand)
        if lid:
            ids.append(lid)
    # dedupe preserving order
    seen = set()
    unique = []
    for lid in ids:
        if lid not in seen:
            seen.add(lid)
            unique.append(lid)
    return unique

def recent_sent_24h(to_addr, subject):
    try:
        q = f'from:kleber@ziontechgroup.com to:{to_addr} subject:"{subject}" newer_than:1d'
        msgs = gmail_search(q, limit=5, all_folders=True) or []
        return bool(msgs)
    except Exception:
        return False

def main():
    label_ids = resolve_label_ids()
    if not label_ids:
        print('NO_HOT_FOLLOWUP_LABELS')
        sys.exit(0)
    seen_ids = set()
    items = []
    for lid in label_ids:
        try:
            msgs = gmail_search(f'label:{lid}', limit=MAX_RESULTS, all_folders=True) or []
        except Exception as e:
            msgs = []
            print(f'ERR label {lid}: {e}')
        for m in msgs:
            mid = m.get('id')
            if mid and mid not in seen_ids:
                seen_ids.add(mid)
                items.append(m)
    if not items:
        print('NO_HOT_FOLLOWUP_THREADS')
        sys.exit(0)
    # Inspect threads
    actionable = []
    for m in items:
        tid = m.get('threadId') or m.get('id')
        try:
            thread = gmail_thread_get(tid) or []
        except Exception as e:
            thread = []
            print(f'THREAD_ERR {tid}: {e}')
            thread = [m]
        latest = thread[-1]
        h = {x['name']: x['value'] for x in latest.get('payload', {}).get('headers', [])}
        author = h.get('From', '')
        subject = h.get('Subject', '')
        date = h.get('Date', '')
        snippet = latest.get('snippet', '')[:180]
        to_addr = author.split('<')[-1].split('>')[0].strip() if '<' in author else author.strip()
        dup = recent_sent_24h(to_addr, subject)
        actionable.append({
            'id': m.get('id'),
            'threadId': tid,
            'subject': subject,
            'latest_from': author,
            'date': date,
            'snippet': snippet,
            'recent_sent_24h': dup,
        })
    print('ACTIONABLE_COUNT', sum(1 for x in actionable if not x['recent_sent_24h']))
    for x in actionable:
        print(json.dumps(x, ensure_ascii=False))

if __name__ == '__main__':
    main()
