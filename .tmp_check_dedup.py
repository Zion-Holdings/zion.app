from pathlib import Path
import json

p = Path('lead-crm/outreach_sent_history.jsonl')
sent = set()
for line in p.read_text(encoding='utf-8').splitlines():
    line = line.strip()
    if not line:
        continue
    try:
        obj = json.loads(line)
        val = (obj.get('to') or obj.get('email') or '').strip().lower()
        if val:
            sent.add(val)
    except Exception:
        continue

rb = json.loads(Path('lead-crm/outreach_ready_canonical.json').read_text())
ready = [(r.get('to') or '').strip().lower() for r in (rb.get('ready') or [])]

overlap = sorted(set(ready) & sent)
print('sent_unique_count', len(sent))
print('ready_count', len(ready))
print('overlap_count', len(overlap))
print('overlap', overlap)
