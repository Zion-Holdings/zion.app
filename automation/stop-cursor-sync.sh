#!/bin/bash

# Stop Cursor Sync Automation
# Stops all cursor sync automation processes

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🛑 Stopping Cursor Sync Automation...${NC}"
echo ""

# Stop main automation
MAIN_PID_FILE="$AUTOMATION_DIR/logs/cursor-sync-main.pid"
if [ -f "$MAIN_PID_FILE" ]; then
    MAIN_PID=$(cat "$MAIN_PID_FILE")
    if kill -0 "$MAIN_PID" 2>/dev/null; then
        kill "$MAIN_PID"
        echo -e "${GREEN}✅ Stopped main automation (PID: $MAIN_PID)${NC}"
    else
        echo -e "${YELLOW}⚠️ Main automation process $MAIN_PID not found${NC}"
    fi
    rm -f "$MAIN_PID_FILE"
else
    echo -e "${YELLOW}⚠️ Main automation PID file not found${NC}"
fi

# Stop orchestrator
ORCH_PID_FILE="$AUTOMATION_DIR/logs/cursor-sync-orchestrator.pid"
if [ -f "$ORCH_PID_FILE" ]; then
    ORCH_PID=$(cat "$ORCH_PID_FILE")
    if kill -0 "$ORCH_PID" 2>/dev/null; then
        kill "$ORCH_PID"
        echo -e "${GREEN}✅ Stopped orchestrator (PID: $ORCH_PID)${NC}"
    else
        echo -e "${YELLOW}⚠️ Orchestrator process $ORCH_PID not found${NC}"
    fi
    rm -f "$ORCH_PID_FILE"
else
    echo -e "${YELLOW}⚠️ Orchestrator PID file not found${NC}"
fi

# Kill any remaining cursor sync processes
REMAINING_PIDS=$(pgrep -f "cursor-sync" 2>/dev/null || true)
if [ -n "$REMAINING_PIDS" ]; then
    echo "Killing remaining cursor sync processes: $REMAINING_PIDS"
    kill $REMAINING_PIDS 2>/dev/null || true
    echo -e "${GREEN}✅ All remaining cursor sync processes stopped${NC}"
else
    echo -e "${GREEN}✅ No remaining cursor sync processes found${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Cursor sync automation stopped successfully!${NC}"
echo ""
echo -e "${BLUE}💡 To restart:${NC}"
echo "  bash automation/quick-start-cursor-sync.sh"
echo ""
echo -e "${BLUE}📊 To check status:${NC}"
echo "  bash automation/cursor-sync-comprehensive-status.sh"
