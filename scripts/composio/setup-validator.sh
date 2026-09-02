#!/bin/bash
# Zion Composio Setup Validator
# Run this locally to check which secrets/connections are missing
# Usage: bash scripts/composio/setup-validator.sh

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "=== Zion Composio Setup Validator ==="
echo ""

# Check if gh CLI is available
if ! command -v gh &> /dev/null; then
    echo -e "${RED}ERROR: gh CLI not found. Install from https://cli.github.com/${NC}"
    exit 1
fi

# Check authentication
if ! gh auth status &> /dev/null; then
    echo -e "${RED}ERROR: Not authenticated with gh. Run: gh auth login${NC}"
    exit 1
fi

REPO="Zion-support/zion-support.github.io"
MISSING=0
TOTAL=0

check_secret() {
    local name=$1
    local value
    TOTAL=$((TOTAL + 1))
    if value=$(gh secret list --repo "$REPO" --json name --jq '.[].name' 2>/dev/null | grep -x "$name" || true); then
        echo -e "${GREEN}✓${NC} $name"
    else
        echo -e "${RED}✗${NC} $name (missing)"
        MISSING=$((MISSING + 1))
    fi
}

echo "Checking GitHub Secrets..."
check_secret "COMPOSIO_API_KEY"
check_secret "COMPOSIO_CALENDLY_CONNECTION_ID"
check_secret "COMPOSIO_WHATSAPP_CONNECTION_ID"
check_secret "COMPOSIO_STRIPE_CONNECTION_ID"
check_secret "COMPOSIO_RESEND_CONNECTION_ID"
check_secret "COMPOSIO_GMAIL_CONNECTION_ID"
check_secret "COMPOSIO_HUBSPOT_CONNECTION_ID"
check_secret "COMPOSIO_NOTION_CONNECTION_ID"
check_secret "COMPOSIO_SLACK_CONNECTION_ID"
check_secret "COMPOSIO_1PASSWORD_CONNECTION_ID"
check_secret "COMPOSIO_BREVO_CONNECTION_ID"
check_secret "COMPOSIO_SENDGRID_CONNECTION_ID"
check_secret "COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID"
check_secret "COMPOSIO_FIRECRAWL_CONNECTION_ID"
check_secret "COMPOSIO_SERPAPI_CONNECTION_ID"
check_secret "COMPOSIO_TAVILY_CONNECTION_ID"
check_secret "STRIPE_STARTER_PRICE_ID"
check_secret "STRIPE_GROWTH_PRICE_ID"
check_secret "STRIPE_ENTERPRISE_PRICE_ID"

echo ""
echo "Checking Composio connections..."
# This requires COMPOSIO_API_KEY to be set in environment
if [ -n "${COMPOSIO_API_KEY:-}" ]; then
    echo -e "${GREEN}✓${NC} COMPOSIO_API_KEY is set in environment"
else
    echo -e "${YELLOW}!${NC} COMPOSIO_API_KEY not in env (can't verify connections)"
fi

echo ""
echo "Checking Pages source..."
PAGES_SOURCE=$(gh api repos/$REPO/pages --jq '.source.branch' 2>/dev/null || echo "unknown")
if [ "$PAGES_SOURCE" = "main" ]; then
    echo -e "${GREEN}✓${NC} Pages source: $PAGES_SOURCE"
else
    echo -e "${RED}✗${NC} Pages source: $PAGES_SOURCE (should be 'main')"
    MISSING=$((MISSING + 1))
fi

echo ""
echo "=== Summary ==="
echo "Total checks: $TOTAL"
echo "Missing: $MISSING"

if [ $MISSING -eq 0 ]; then
    echo -e "${GREEN}All checks passed! Ready to run workflows.${NC}"
    exit 0
else
    echo -e "${RED}$MISSING items need attention. See docs/execution-pack.md for setup steps.${NC}"
    exit 1
fi
