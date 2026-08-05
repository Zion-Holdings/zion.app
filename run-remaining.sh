#!/usr/bin/env bash
set -uo pipefail
cd /c/Users/Zion/tmp/zion-gh-publish

rm -f .git/index.lock

git add -A
git commit -m "chore: content cycles 5958-6057" || true

git push origin master --force
git push origin master:main --force

read -r GH_TOKEN < /c/Users/Zion/.gh_token

# Dispatch workflow on main
HTTP_CODE=$(curl -s -o /tmp/dispatch_resp.txt -w '%{http_code}' -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $GH_TOKEN" \
  https://api.github.com/repos/Zion-support/zion-support.github.io/actions/workflows/gh-pages.yml/dispatches \
  -d '{"ref":"main"}')
echo "Dispatch HTTP code: $HTTP_CODE"

# Wait for the manual dispatch run to complete
sleep 15
RUN_ID=$(curl -s -H "Accept: application/vnd.github+json" -H "Authorization: token $GH_TOKEN" "https://api.github.com/repos/Zion-support/zion-support.github.io/actions/workflows/gh-pages.yml/runs?per_page=5&event=workflow_dispatch" | jq -r '.workflow_runs[0].id // empty')
echo "RUN_ID=$RUN_ID"

DEPLOY_STATUS="unknown"
if [ -n "$RUN_ID" ]; then
  DEPLOY_STATUS="in_progress"
  for i in $(seq 1 30); do
    STATUS=$(curl -s -H "Accept: application/vnd.github+json" -H "Authorization: token $GH_TOKEN" "https://api.github.com/repos/Zion-support/zion-support.github.io/actions/runs/$RUN_ID" | jq -r '.status')
    echo "Workflow status: $STATUS"
    if [ "$STATUS" == "completed" ]; then
      CONCLUSION=$(curl -s -H "Accept: application/vnd.github+json" -H "Authorization: token $GH_TOKEN" "https://api.github.com/repos/Zion-support/zion-support.github.io/actions/runs/$RUN_ID" | jq -r '.conclusion')
      echo "Workflow conclusion: $CONCLUSION"
      if [ "$CONCLUSION" == "success" ]; then
        DEPLOY_STATUS="success"
      else
        DEPLOY_STATUS="failed"
      fi
      break
    fi
    sleep 30
  done
else
  echo "No workflow run found"
fi

echo "Verifying URLs..."
URLS=$(python3 -c "
import json, random
with open('content-loop/topics.json') as f:
    topics = json.load(f)
ns = [random.randint(5958, 6057) for _ in range(4)]
for n in ns:
    topic = topics[(n-1) % len(topics)]
    print(f'https://ziontechgroup.com/blog/{topic[\"slug\"]}-{n}/')
")
VERIFY_STATUS="OK"
for url in $URLS; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 30 "$url")
  echo "$url -> $code"
  if [ "$code" != "200" ]; then
    VERIFY_STATUS="FAIL"
  fi
done

echo "REPORT: cycles=5958-6057 deploy=$DEPLOY_STATUS verify=$VERIFY_STATUS"
