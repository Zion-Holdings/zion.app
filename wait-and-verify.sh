#!/usr/bin/env bash
set -uo pipefail
cd /c/Users/Zion/tmp/zion-gh-publish

read -r GH_TOKEN < /c/Users/Zion/.gh_token
RUN_ID=30938395866

DEPLOY_STATUS="unknown"
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
