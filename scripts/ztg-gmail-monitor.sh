#!/usr/bin/env bash
set -euo pipefail
REPO="/data/data/com.termux/files/home/zion-support.github.io"
cd "$REPO"
python3 - <<'PY' > "$REPO/lead-crm/gmail_monitor_status.json"
import sys, json
from datetime import datetime, timezone
try:
    sys.path.insert(0, 'commands')
    from commands.google_workspace import gmail_search
    hot = len(gmail_search('label:"!!!HOT FOLLOW-UP"', limit=20))
    new2h = sum(1 for c in ['ajuda@homer.com.br','nrozengarten@nebius.com','joao.marcos@awazai.intercom-mail.com','marketing@belenergy.com.br'] if gmail_search(f'from:{c} newer_than:2h', limit=1))
except Exception as e:
    hot = -1
    new2h = -1
print(json.dumps({'ts': datetime.now(timezone.utc).isoformat(), 'HOT': hot, 'NEW2H': new2h, 'status': 'ok' if hot >= 0 else 'error', 'error': str(e) if hot < 0 else None}, ensure_ascii=False))
PY
cat "$REPO/lead-crm/gmail_monitor_status.json" >/dev/null
echo "MONITOR_OK"
