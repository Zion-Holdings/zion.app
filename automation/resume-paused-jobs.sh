#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.." || exit 1
BASE="$HOME/.hermes/cron"
if [ ! -f "$BASE/jobs.json" ]; then
  echo "missing $BASE/jobs.json"
  exit 1
fi
python3 - <<'PY'
import json
from pathlib import Path
ids=[
  'eebe906e6e96','2d1a3bb35519','9a3519293f77','39fc379ffa4f',
  '3239f9853693','05ee8303dd45','986aa40f0679','9f66ca40342e','afb90fdf32a5','8d74b8386478'
]
p=Path.home()/'.hermes'/'cron'/'jobs.json'
data=json.loads(p.read_text())
changed=[]
for j in data.get('jobs', []):
    if j.get('id') in ids and j.get('state') == 'paused':
        j['enabled'] = True
        j['state'] = 'scheduled'
        j['paused_at'] = None
        j['paused_reason'] = None
        changed.append(j.get('name'))
p.write_text(json.dumps(data, indent=2))
print('updated:', changed)
PY
