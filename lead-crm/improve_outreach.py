import json, datetime, os
from pathlib import Path

print("DEBUG: cwd=", os.getcwd(), flush=True)
REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
BATCH_PATH = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
MINER_HEALTH_PATH = REPO / 'lead-crm' / 'miner_health.json'
print("DEBUG: batch_path=", BATCH_PATH, flush=True)
print("DEBUG: miner_health_path=", MINER_HEALTH_PATH, flush=True)

def dedup_ps(body):
    lines = body.splitlines(keepends=True)
    seen = set()
    out = []
    for line in lines:
        stripped = line.rstrip('\n')
        if stripped.startswith('P.S.:'):
            if stripped in seen:
                continue
            seen.add(stripped)
        out.append(line)
    return ''.join(out)

obj = json.loads(BATCH_PATH.read_text(encoding='utf-8'))
rows = obj.get('recipients') or obj.get('ready') or obj.get('batch') or []
print("DEBUG: loaded rows=", len(rows), flush=True)

issues = []
actions = []
improved_count = 0

for r in rows:
    body = r.get('body', '') or ''
    new_body = dedup_ps(body)
    if new_body != body:
        r['body'] = new_body
        improved_count += 1
        actions.append('dedup_ps:' + str(r.get('to')))
    if r.get('body') != body:
        r['improved_at'] = datetime.datetime.now(datetime.timezone.utc).isoformat()
    if not r.get('name'):
        issues.append('missing_name:' + str(r.get('to')))
    if not r.get('subject'):
        issues.append('missing_subject:' + str(r.get('to')))
    if r.get('personalization_score', 0) < 0.7:
        issues.append('low_personalization:' + str(r.get('to')))
    if 'P.S.:' in r.get('body', '') and r.get('body', '').count('P.S.:') > 2:
        issues.append('repeated_ps_before_dedup:' + str(r.get('to')))

print("DEBUG: improved_count=", improved_count, flush=True)

# Also dedup the 'ready' section if present
ready_rows = obj.get('ready')
if ready_rows:
    for r in ready_rows:
        body = r.get('body', '') or ''
        new_body = dedup_ps(body)
        if new_body != body:
            r['body'] = new_body
            r['improved_at'] = datetime.datetime.now(datetime.timezone.utc).isoformat()

print("DEBUG: writing batch", flush=True)
BATCH_PATH.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')
print("DEBUG: wrote batch", flush=True)

health = {
    'send_allowed': False,
    'ztg_send_allowed_env': os.environ.get('ZTG_SEND_ALLOWED'),
    'last_check': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'total_records': len(rows),
    'improved_records': improved_count,
    'issues_found': issues,
    'actions_taken': actions,
    'status': 'analyzed_no_send'
}
print("DEBUG: writing health", flush=True)
MINER_HEALTH_PATH.write_text(json.dumps(health, ensure_ascii=False, indent=2), encoding='utf-8')
print("DEBUG: wrote health", flush=True)

print(json.dumps(obj, ensure_ascii=False, indent=2))
print('---HEALTH---')
print(json.dumps(health, ensure_ascii=False))
