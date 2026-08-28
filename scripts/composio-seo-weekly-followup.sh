#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use

REPORT_DATE=$(date +%Y-%m-%d)
REPORT_FILE="$HOME/.composio/reports/seo-weekly-${REPORT_DATE}.md"
if [ ! -s "$REPORT_FILE" ]; then
  echo "Report missing: $REPORT_FILE"
  exit 1
fi

BODY_CONTENT=$(cat "$REPORT_FILE")

# Enviar e-mail
composio execute GMAIL_SEND_EMAIL -d '{
  "recipient_email": "kleber@ziontechgroup.com",
  "subject": "SEO Weekly Report - '"${REPORT_DATE}"'",
  "body": '"$(printf '%s\n' "$BODY_CONTENT" | jq -Rs .)"',
  "is_html": false
}' >/tmp/composio-seo-email.json 2>&1 || true

# Criar página no Notion
composio execute NOTION_CREATE_NOTION_PAGE -d '{
  "parent_id": "3c9b94b0-eaf7-813a-9bd3-f0a2522b06bb",
  "title": "SEO Weekly Report - '"${REPORT_DATE}"'",
  "markdown": "'"$(printf '%s\n' "$BODY_CONTENT" | head -n 200)"'"
}' >/tmp/composio-seo-notion.json 2>&1 || true

echo 'Follow-up sent for '${REPORT_DATE}
