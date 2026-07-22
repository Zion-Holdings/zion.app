import json
from pathlib import Path

BASE = Path('/data/data/com.termux/files/home/zion-support.github.io')
ledger_path = BASE / 'outreach_monitor/processed/hot_followup_reply_ledger.jsonl'
tmp_path = BASE / 'outreach_monitor/processed/hot_followup_reply_ledger.jsonl.tmp'

best = {}
status_priority = {
    'sent': 6,
    'in_negotiation': 5,
    'drafted': 4,
    'drafted_fast': 3,
    'skipped_already_replied': 2,
    'skipped': 1,
}

def sort_key(entry):
    return (
        -status_priority.get(entry.get('status'), 0),
        -(entry.get('ts') or 0),
    )

with ledger_path.open('r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
        except Exception:
            continue
        tid = obj.get('thread_id') or ''
        dedup = obj.get('dedup_key') or tid
        if not dedup:
            continue
        cur = best.get(dedup)
        if cur is None or sort_key(obj) > sort_key(cur):
            best[dedup] = obj

with tmp_path.open('w', encoding='utf-8') as f:
    for obj in sorted(best.values(), key=lambda x: x.get('ts', 0)):
        f.write(json.dumps(obj, ensure_ascii=False) + '\n')

tmp_path.replace(ledger_path)
print('ledger_deduped', len(best), flush=True)
