#!/bin/bash

# Cursor Sync Comprehensive Status Script
# Shows detailed status of all cursor sync automation components

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${PURPLE}🔄 Cursor Sync Automation - Comprehensive Status${NC}"
echo "=================================================="
echo ""

# System Information
echo -e "${BLUE}💻 System Information:${NC}"
echo "  Hostname: $(hostname)"
echo "  Platform: $(uname -s)"
echo "  Architecture: $(uname -m)"
echo "  Node.js Version: $(node --version)"
echo "  Git Version: $(git --version)"
echo ""

# Cron Jobs Status
echo -e "${BLUE}⏰ Cron Jobs Status:${NC}"
if crontab -l 2>/dev/null | grep -q "cursor-sync"; then
    echo -e "${GREEN}✅ Cursor sync cron jobs are installed${NC}"
    crontab -l 2>/dev/null | grep "cursor-sync" | while read -r line; do
        echo "  $line"
    done
else
    echo -e "${RED}❌ No cursor sync cron jobs found${NC}"
fi
echo ""

# Process Status
echo -e "${BLUE}🔄 Process Status:${NC}"
CURSOR_PROCESSES=$(ps aux | grep "cursor-sync" | grep -v grep)
if [ -n "$CURSOR_PROCESSES" ]; then
    echo -e "${GREEN}✅ Cursor sync processes running:${NC}"
    echo "$CURSOR_PROCESSES" | while read -r line; do
        echo "  $line"
    done
else
    echo -e "${YELLOW}⚠️ No cursor sync processes currently running${NC}"
fi
echo ""

# Git Repository Status
echo -e "${BLUE}📁 Git Repository Status:${NC}"
cd "$PROJECT_DIR"
if git status --porcelain > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Git repository is clean${NC}"
    BRANCH=$(git branch --show-current)
    echo "  Current branch: $BRANCH"
    COMMIT=$(git rev-parse --short HEAD)
    echo "  Current commit: $COMMIT"
else
    echo -e "${RED}❌ Git repository has issues${NC}"
fi
echo ""

# Sync State
echo -e "${BLUE}📊 Sync State:${NC}"
if [ -f "$AUTOMATION_DIR/logs/last-sync-time.json" ]; then
    LAST_SYNC=$(jq -r '.lastSync' "$AUTOMATION_DIR/logs/last-sync-time.json" 2>/dev/null)
    if [ "$LAST_SYNC" != "null" ] && [ -n "$LAST_SYNC" ]; then
        echo -e "${GREEN}✅ Last sync: $LAST_SYNC${NC}"
    else
        echo -e "${YELLOW}⚠️ No sync time recorded${NC}"
    fi
else
    echo -e "${RED}❌ No sync time file found${NC}"
fi

if [ -f "$AUTOMATION_DIR/logs/sync-state.json" ]; then
    CONFLICTS=$(jq '.conflicts | length' "$AUTOMATION_DIR/logs/sync-state.json" 2>/dev/null || echo "0")
    echo "  Conflicts recorded: $CONFLICTS"
fi
echo ""

# Computer Registry
echo -e "${BLUE}🖥️ Computer Registry:${NC}"
if [ -f "$AUTOMATION_DIR/logs/computer-registry.json" ]; then
    COMPUTER_COUNT=$(jq 'length' "$AUTOMATION_DIR/logs/computer-registry.json" 2>/dev/null || echo "0")
    echo -e "${GREEN}✅ Registered computers: $COMPUTER_COUNT${NC}"
    jq -r 'to_entries[] | "  \(.key): \(.value.hostname) (\(.value.platform))"' "$AUTOMATION_DIR/logs/computer-registry.json" 2>/dev/null || echo "  No computers registered"
else
    echo -e "${YELLOW}⚠️ No computer registry found${NC}"
fi
echo ""

# Log Files Status
echo -e "${BLUE}📄 Log Files Status:${NC}"
for log_file in "$AUTOMATION_DIR/logs"/cursor-sync*.log; do
    if [ -f "$log_file" ]; then
        filename=$(basename "$log_file")
        size=$(du -h "$log_file" | cut -f1)
        last_modified=$(stat -f "%Sm" "$log_file" 2>/dev/null || stat -c "%y" "$log_file" 2>/dev/null)
        echo "  $filename: $size, updated $last_modified"
    fi
done
echo ""

# Metrics Status
echo -e "${BLUE}📊 Metrics Status:${NC}"
if [ -f "$AUTOMATION_DIR/metrics/cursor-sync-metrics.json" ]; then
    TOTAL_SYNCS=$(jq -r '.totalSyncs' "$AUTOMATION_DIR/metrics/cursor-sync-metrics.json" 2>/dev/null || echo "0")
    SUCCESS_RATE=$(jq -r '.successRate' "$AUTOMATION_DIR/metrics/cursor-sync-metrics.json" 2>/dev/null || echo "0")
    echo -e "${GREEN}✅ Total syncs: $TOTAL_SYNCS${NC}"
    echo -e "${GREEN}✅ Success rate: $SUCCESS_RATE%${NC}"
else
    echo -e "${YELLOW}⚠️ No metrics file found${NC}"
fi
echo ""

# Configuration Status
echo -e "${BLUE}⚙️ Configuration Status:${NC}"
if [ -f "$AUTOMATION_DIR/cursor-sync-config.json" ]; then
    echo -e "${GREEN}✅ Basic sync config: OK${NC}"
else
    echo -e "${RED}❌ Basic sync config: Missing${NC}"
fi

if [ -f "$AUTOMATION_DIR/cursor-sync-orchestrator-config.json" ]; then
    echo -e "${GREEN}✅ Orchestrator config: OK${NC}"
else
    echo -e "${RED}❌ Orchestrator config: Missing${NC}"
fi
echo ""

# Recommendations
echo -e "${CYAN}💡 Recommendations:${NC}"
if [ ! -f "$AUTOMATION_DIR/logs/last-sync-time.json" ]; then
    echo "  • Run initial sync: node automation/cursor-sync-automation.js once"
fi

if ! crontab -l 2>/dev/null | grep -q "cursor-sync"; then
    echo "  • Install cron jobs: bash automation/cursor-sync-cron.sh"
fi

if [ ! -f "$AUTOMATION_DIR/metrics/cursor-sync-metrics.json" ]; then
    echo "  • Generate initial metrics: node automation/cursor-sync-metrics.js"
fi
echo ""

echo -e "${PURPLE}📁 Directories:${NC}"
echo "  Logs: $AUTOMATION_DIR/logs"
echo "  Metrics: $AUTOMATION_DIR/metrics"
echo "  Backups: $AUTOMATION_DIR/backups"
echo "  Config: $AUTOMATION_DIR"
