#!/bin/bash
# LLM Hot Follow-up Responder cron job
# Runs every 5 minutes to generate and send tailored CEO replies

cd /Users/klebergarciaalcatrao/zion-techgroup
export PATH="/Users/klebergarciaalcatrao/.hermes/hermes-agent/venv/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

# Get OpenRouter API key from Hermes auth
export OPENROUTER_API_KEY=$(cat ~/.hermes/auth.json 2>/dev/null | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    for c in d.get('credential_pool', {}).get('openrouter', []):
        if c.get('source') == 'env:OPENROUTER_API_KEY':
            print(c.get('secret', ''))
            break
except:
    pass
" 2>/dev/null || echo "")

/Users/klebergarciaalcatrao/.hermes/hermes-agent/venv/bin/python3 scripts/outreach/llm_hot_followup_responder.py >> outreach_monitor/logs/llm_hot_followup.log 2>&1