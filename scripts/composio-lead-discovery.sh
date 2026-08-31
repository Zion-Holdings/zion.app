#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use || true

COMPOSIO_BIN="composio"
if ! command -v "$COMPOSIO_BIN" >/dev/null 2>&1; then
  echo "composio not available; skip lead discovery"
  exit 0
fi

DOMAIN="${1:-ziontechgroup.com}"
LIMIT="${2:-10}"
TEAM_ID="${LINEAR_TEAM_ID:-a92e1670-db71-4cec-bb71-b3c647ca164b}"
REPORT_DIR="$HOME/.composio/reports/lead-discovery"
mkdir -p "$REPORT_DIR"
REPORT_FILE="$REPORT_DIR/$(date +%Y-%m-%d).json"

run_step() {
  local label="$1"
  local tool="$2"
  shift
  local payload="$*"
  local out
  out="$($COMPOSIO_BIN execute "$tool" -d "$payload" >/tmp/composio-lead-${label}.json 2>&1 || true)"
  if [ ! -s /tmp/composio-lead-${label}.json ]; then
    echo "{\"label\":\"$label\",\"ok\":false,\"reason\":\"empty_output\"}" > "$REPORT_FILE"
    return 1
  fi
  return 0
}

echo "=== Hunter domain search: $DOMAIN ==="
run_step hunter "HUNTER_DOMAIN_SEARCH" \
  "{\"domain\":\"${DOMAIN}\",\"limit\":${LIMIT},\"type\":\"personal\"}" || true

echo "=== Apollo enrichment ==="
run_step apollo "APOLLO_PEOPLE_ENRICHMENT" \
  "{\"q_keywords\":\"${DOMAIN}\",\"person_titles\":[\"CTO\",\"VP Engineering\",\"Head of IT\"]}" || true

echo "=== Create Linear issue for lead review ==="
run_step linear "LINEAR_CREATE_LINEAR_ISSUE" \
  "{\"team_id\":\"${TEAM_ID}\",\"title\":\"Lead review: Hunter/Apollo for ${DOMAIN}\",\"description\":\"Automated lead discovery for ${DOMAIN}.\\n\\nCheck /tmp/composio-lead-hunter.json and /tmp/composio-lead-apollo.json for raw results.\",\"priority\":2}" || true

cat > "$REPORT_FILE" <<'JSON'
{
  "discoveredAt": "",
  "domain": "",
  "status": "done"
}
JSON
python3 - <<'PY' "$REPORT_FILE" "$DOMAIN"
import json, sys
from pathlib import Path
p = Path(sys.argv[1])
domain = sys.argv[2]
data = json.loads(p.read_text())
data["discoveredAt"] = __import__('datetime').datetime.now().isoformat()
data["domain"] = domain
p.write_text(json.dumps(data, indent=2, ensure_ascii=False))
PY

echo "Lead discovery finished: $REPORT_FILE"
