#!/bin/bash
# Zion Composio Setup Wizard
# Interactive setup for Composio-connected workflows
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo "=== Zion Composio Setup Wizard ==="
echo ""

# Check prerequisites
check_prereqs() {
  echo -e "${BLUE}[1/6] Checking prerequisites...${NC}"
  
  if ! command -v gh &> /dev/null; then
    echo -e "${RED}✗ gh CLI not found. Install from https://cli.github.com/${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ gh CLI found${NC}"
  
  if ! gh auth status &> /dev/null; then
    echo -e "${RED}✗ Not authenticated with gh. Run: gh auth login${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ gh CLI authenticated${NC}"
  
  if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js not found. Install Node 20+${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ Node.js found: $(node --version)${NC}"
  
  if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm not found${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ npm found${NC}"
}

# Check GitHub secrets
check_secrets() {
  echo -e "\n${BLUE}[2/6] Checking GitHub Secrets...${NC}"
  REPO="Zion-support/zion-support.github.io"
  MISSING=0
  
  check_secret() {
    local name=$1
    if gh secret list --repo "$REPO" --json name --jq '.[].name' 2>/dev/null | grep -x "$name" > /dev/null 2>&1; then
      echo -e "${GREEN}✓${NC} $name"
    else
      echo -e "${RED}✗${NC} $name (missing)"
      MISSING=$((MISSING + 1))
    fi
  }
  
  check_secret "COMPOSIO_API_KEY"
  check_secret "COMPOSIO_CALENDLY_CONNECTION_ID"
  check_secret "COMPOSIO_WHATSAPP_CONNECTION_ID"
  check_secret "COMPOSIO_STRIPE_CONNECTION_ID"
  check_secret "COMPOSIO_RESEND_CONNECTION_ID"
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
  
  if [ $MISSING -gt 0 ]; then
    echo -e "\n${RED}$MISSING secrets missing. Add them at:${NC}"
    echo "https://github.com/Zion-support/zion-support.github.io/settings/secrets/actions"
  else
    echo -e "\n${GREEN}All secrets present!${NC}"
  fi
}

# Check Pages source
check_pages() {
  echo -e "\n${BLUE}[3/6] Checking Pages configuration...${NC}"
  REPO="Zion-support/zion-support.github.io"
  
  SOURCE=$(gh api repos/$REPO/pages --jq '.source.branch' 2>/dev/null || echo "unknown")
  if [ "$SOURCE" = "main" ]; then
    echo -e "${GREEN}✓ Pages source: $SOURCE${NC}"
  else
    echo -e "${RED}✗ Pages source: $SOURCE (should be 'main')${NC}"
    echo -e "${YELLOW}  Fix: https://github.com/Zion-support/zion-support.github.io/settings/pages${NC}"
  fi
}

# Check Composio CLI
check_composio_cli() {
  echo -e "\n${BLUE}[4/6] Checking Composio CLI...${NC}"
  if command -v composio &> /dev/null; then
    echo -e "${GREEN}✓ Composio CLI found: $(composio --version 2>/dev/null || echo 'unknown')${NC}"
  else
    echo -e "${YELLOW}! Composio CLI not found. Install with:${NC}"
    echo "  curl -fsSL https://composio.dev/install | bash"
  fi
}

# Check workflows
check_workflows() {
  echo -e "\n${BLUE}[5/6] Checking workflows...${NC}"
  REPO="Zion-support/zion-support.github.io"
  WORKFLOWS=(
    "composio-full-stack.yml"
    "composio-calendly-whatsapp-stripe-revenue.yml"
    "composio-hubspot-lead-monetization.yml"
    "composio-resend-billing.yml"
    "composio-stripe-create-payment-links.yml"
    "composio-zion-master.yml"
    "mirror-to-gh-pages.yml"
  )
  
  for wf in "${WORKFLOWS[@]}"; do
    if gh api repos/$REPO/actions/workflows/$wf --jq '.name' 2>/dev/null > /dev/null; then
      echo -e "${GREEN}✓${NC} $wf"
    else
      echo -e "${RED}✗${NC} $wf (missing)"
    fi
  done
}

# Summary and next steps
show_summary() {
  echo -e "\n${BLUE}[6/6] Summary & Next Steps${NC}"
  echo ""
  echo "=== Immediate Actions ==="
  echo "1. Change Pages source to 'main':"
  echo "   https://github.com/Zion-support/zion-support.github.io/settings/pages"
  echo ""
  echo "2. Create accounts:"
  echo "   - Stripe: https://dashboard.stripe.com/register"
  echo "   - Calendly: https://calendly.com/signup"
  echo "   - WhatsApp Business: https://business.whatsapp.com/"
  echo "   - Resend: https://resend.com/signup"
  echo "   - HubSpot: https://hubspot.com/signup"
  echo "   - Notion: https://notion.so/signup"
  echo ""
  echo "3. Connect apps in Composio dashboard:"
  echo "   https://app.composio.dev"
  echo ""
  echo "4. Add GitHub Secrets:"
  echo "   https://github.com/Zion-support/zion-support.github.io/settings/secrets/actions"
  echo ""
  echo "5. Run workflows:"
  echo "   - composio-stripe-create-payment-links.yml (manual)"
  echo "   - composio-full-stack.yml (manual)"
  echo ""
  echo "=== Revenue Models ==="
  echo "- Subscription SaaS: $499-$1,499/mo"
  echo "- Managed SOC: $3,000-$7,500/mo"
  echo "- Staff Augmentation: $120-$180/hr"
  echo "- Partner/Reseller: 20-40% margin"
  echo "- Paid Consultation: $500-$5,000/project"
  echo ""
  echo "=== Support ==="
  echo "- Docs: docs/composio-integration-guide.md"
  echo "- Strategy: docs/composio-mastery-strategy.md"
  echo "- Checklist: docs/immediate-action-checklist.md"
}

# Run wizard
check_prereqs
check_secrets
check_pages
check_composio_cli
check_workflows
show_summary

echo -e "\n${GREEN}Wizard complete!${NC}"
