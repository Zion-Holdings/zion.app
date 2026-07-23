from pathlib import Path
import json, time, re
REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
OUT = REPO / 'lead-crm/outreach_sent_history.jsonl'
SUP = REPO / 'lead-crm/subject_suppression.jsonl'
WINDOW = 24 * 3600
now = int(time.time())
rows = []
if OUT.exists():
    for ln in OUT.read_text(encoding='utf-8', errors='ignore').splitlines():
        if not ln.strip():
            continue
        try:
            rows.append(json.loads(ln))
        except Exception:
            pass
recent = [r for r in rows if now - int(r.get('ts', 0) or 0) < WINDOW]
keyed = {}
for r in recent:
    to = (r.get('to') or '').strip().lower()
    subj = re.sub(r'\s+', ' ', (r.get('subject') or '')).strip().lower()
    if not to or not subj:
        continue
    keyed.setdefault((to, subj), []).append(int(r.get('ts', 0) or 0))
suppressed = 0
events = []
for (to, subj), tss in keyed.items():
    if len(tss) > 1:
        suppressed += len(tss) - 1
        events.append({'to': to, 'subject': subj, 'count': len(tss), 'first_ts': min(tss), 'last_ts': max(tss)})
with SUP.open('a', encoding='utf-8') as f:
    for e in events[-200:]:
        e['ts'] = now
        f.write(json.dumps(e, ensure_ascii=False) + '\n')
print(json.dumps({'window_seconds': WINDOW, 'recent_sends': len(recent), 'suppressed_duplicates': suppressed, 'reported_entries': min(len(events), 200)}, ensure_ascii=False))
