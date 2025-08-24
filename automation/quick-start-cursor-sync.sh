#!/bin/bash

# Quick Start Cursor Sync Automation
# Starts all cursor sync automation components

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Quick Starting Cursor Sync Automation...${NC}"
echo ""

# Check if already running
if pgrep -f "cursor-sync" > /dev/null; then
    echo -e "${YELLOW}⚠️ Cursor sync automation is already running${NC}"
    echo "Use 'bash automation/stop-cursor-sync.sh' to stop first"
    exit 1
fi

# Start the automation
echo -e "${GREEN}Starting cursor sync automation...${NC}"
cd "$PROJECT_DIR"

# Start the main automation
nohup node automation/cursor-sync-automation.js continuous > automation/logs/cursor-sync-daemon.log 2>&1 &
MAIN_PID=$!
echo $MAIN_PID > automation/logs/cursor-sync-main.pid

# Start the orchestrator
nohup node automation/cursor-sync-orchestrator.js continuous > automation/logs/cursor-sync-orchestrator-daemon.log 2>&1 &
ORCH_PID=$!
echo $ORCH_PID > automation/logs/cursor-sync-orchestrator.pid

echo -e "${GREEN}✅ Cursor sync automation started successfully!${NC}"
echo ""
echo -e "${BLUE}📊 Process Information:${NC}"
echo "  Main automation PID: $MAIN_PID"
echo "  Orchestrator PID: $ORCH_PID"
echo ""
echo -e "${BLUE}📄 Log Files:${NC}"
echo "  Main automation: automation/logs/cursor-sync-daemon.log"
echo "  Orchestrator: automation/logs/cursor-sync-orchestrator-daemon.log"
echo ""
echo -e "${BLUE}🛑 To stop:${NC}"
echo "  bash automation/stop-cursor-sync.sh"
echo ""
echo -e "${BLUE}📊 To check status:${NC}"
echo "  bash automation/cursor-sync-comprehensive-status.sh"
echo ""
echo -e "${GREEN}🎉 Cursor sync automation is now running!${NC}"
