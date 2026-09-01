#!/bin/bash
set -u
BASE="https://ziontechgroup.com"
ROUTES=(
/services/hermes-agent/
/services/hermes-ai-agent-platform/
/services/hermes-agent-training/
/services/hermes-agent-growth-knowledge-hub/
/services/hermes-autonomous-workflow-agents/
/services/hermes-multi-agent-orchestration/
/services/hermes-growth-engine-agent/
/services/hermes-it-field-technician-sourcing/
/docs/hermes-agent-skills/
/docs/hermes-agent-architecture/
/docs/hermes-agent-profiles/
/docs/hermes-agent-mcp-integration/
/docs/hermes-agent-installation/
/blog/hermes-agent-self-improving-ai-platform/
/blog/hermes-agent-mcp-integration/
/blog/hermes-agent-multi-agent-swarm-orchestration/
/blog/hermes-agent-skills-system-deep-dive/
/blog/hermes-agents-complete-guide/
/blog/hermes-agents-vs-competitors-2026/
/case-studies/hermes-agent-fleet/
/hermes-agents/
/hermes-agents-services/
/tools/hermes-agent-fleet-manager/
)
bad=0
declare -a failures
for r in "${ROUTES[@]}"; do
  code=$(curl -sL -o /dev/null -w '%{http_code}' --max-time 10 "${BASE}${r}" 2>/dev/null || echo "000")
  if [[ "$code" != "200" && "$code" != "301" && "$code" != "302" ]]; then
    bad=$((bad+1))
    failures+=("${r}=${code}")
  fi
done
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
if [[ "$bad" -gt 0 ]]; then
  status="degraded"
else
  status="ok"
fi
python3 - "$ts" "$status" "$bad" "$(printf "%s\n" "${failures[@]}")" << 'PYEOF'
import json,sys
ts,status,bad=sys.argv[1],sys.argv[2],int(sys.argv[3])
failures=sys.argv[4:] if len(sys.argv)>4 else []
snapshot={
  "ts": ts,
  "status": status,
  "details":{
    "deployWatchdog": None,
    "smokeRoutes":{
      "stdout": f"ROUTES={len(failures)+ (0 if status=='ok' else 0)} checked; BAD={bad}",
      "stderr": None,
      "exit_code": 0 if status=="ok" else 1,
      "failures": failures
    },
    "homepageAiSync": None
  }
}
with open("automation/reports/smoke-telemetry-latest.json","w") as f:
  json.dump(snapshot,f)
PYEOF
echo "status=$status bad=$bad"
if [[ "$bad" -gt 0 ]]; then
  echo "failures=${failures[*]}"
fi
