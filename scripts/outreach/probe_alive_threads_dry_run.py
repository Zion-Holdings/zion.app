import sys, json
from pathlib import Path

sys.path.insert(0, r'C:\Users\Zion\AppData\Local\hermes\skills\productivity\google-workspace\scripts')
from google_api import build_service

BASE_DIR = Path('/c/Users/Zion/tmp/zion-clone-test2')
REPORT_PATH = BASE_DIR / 'outreach_monitor' / 'processed' / 'hot_followup_alive_candidates.jsonl'

def main():
    service = build_service('gmail', 'v1')
    label_map = {}
    for lab in service.users().labels().list(userId='me').execute().get('labels', []):
        label_map[lab['name']] = lab['id']
    target_names = ['!!!!HOT FOLLOW-UP','!!!hot-follow-up','!!!hot-followup-sent']
    target_ids = [label_map[n] for n in target_names if n in label_map]
    seen = set()
    out = []
    for lid in target_ids:
        res = service.users().messages().list(userId='me', labelIds=[lid], maxResults=20).execute()
        for m in res.get('messages', []):
            if m['id'] in seen:
                continue
            seen.add(m['id'])
            try:
                msg = service.users().messages().get(userId='me', id=m['id'], format='metadata', metadataHeaders=['Subject','From','Date']).execute()
            except Exception:
                continue
            headers = {h['name']: h['value'] for h in msg.get('payload', {}).get('headers', [])}
            thread_id = msg.get('threadId') or msg['id']
            alive = False
            try:
                service.users().threads().get(userId='me', id=thread_id).execute()
                alive = True
            except Exception:
                alive = False
            out.append({
                'id': msg['id'],
                'thread_id': thread_id,
                'alive': alive,
                'from': headers.get('From'),
                'subject': headers.get('Subject'),
                'date': headers.get('Date'),
            })
    out_path = REPORT_PATH
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open('a', encoding='utf-8') as f:
        for obj in out:
            f.write(json.dumps(obj, ensure_ascii=False) + '\n')
    print(json.dumps({'count': len(out), 'alive_count': sum(1 for x in out if x['alive'])}, indent=2))

if __name__ == '__main__':
    main()
