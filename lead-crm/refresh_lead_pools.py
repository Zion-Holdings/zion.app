import json
from pathlib import Path
from datetime import datetime, timezone

BASE = Path('lead-crm')
MASTER = BASE / 'recipient_dedup_registry.json'
SCAN = BASE / 'reply_scan_v2.json'
FU_READY = BASE / 'follow_up_ready_v2.json'
FU_SENT = BASE / 'follow_up_send_results_v2.json'
RFQ_READY = BASE / 'rfq_new_leads_unanswered.json'

def load_json(p: Path):
    return json.loads(p.read_text()) if p.exists() else {}

def save_json(p: Path, obj):
    p.write_text(json.dumps(obj, indent=2), encoding='utf-8')

def refresh_follow_up_ready():
    registry = {r['email'].lower().strip(): r for r in load_json(MASTER).get('recipients', [])}
    scan = load_json(SCAN)
    messages = scan.get('messages', [])
    seen = set()
    keep = []
    for m in messages:
        email = m.get('from', '').split('<')[-1].strip('>').lower().strip()
        if not email or '@' not in email:
            continue
        if email in seen:
            continue
        if email in registry:
            continue
        seen.add(email)
        keep.append(m)
    save_json(FU_READY, {'generatedAt': datetime.now(timezone.utc).isoformat(), 'count': len(keep), 'recipients': keep})
    return len(keep)

def refresh_rfq_leads():
    registry = {r['email'].lower().strip(): r for r in load_json(MASTER).get('recipients', [])}
    rfq = load_json(RFQ_READY).get('recipients', [])
    seen = set()
    keep = []
    for r in rfq:
        email = r.get('email', '').lower().strip()
        if not email or '@' not in email:
            continue
        if email in seen:
            continue
        if email in registry:
            continue
        seen.add(email)
        keep.append(r)
    save_json(RFQ_READY, {'generatedAt': datetime.now(timezone.utc).isoformat(), 'count': len(keep), 'recipients': keep})
    return len(keep)

if __name__ == '__main__':
    print('follow_up_ready_refreshed:', refresh_follow_up_ready())
    print('rfq_leads_refreshed:', refresh_rfq_leads())
