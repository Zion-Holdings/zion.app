#!/bin/bash

# Enhanced Cursor Sync Stop Script
# Stops the enhanced cursor sync automation system

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🛑 Stopping Enhanced Cursor Sync Automation...${NC}"

# Check PID file
PID_FILE="$AUTOMATION_DIR/logs/enhanced-cursor-sync.pid"
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    echo -e "${BLUE}📊 Found PID file with PID: $PID${NC}"
    
    if kill -0 "$PID" 2>/dev/null; then
        echo -e "${BLUE}🔄 Stopping process $PID...${NC}"
        kill "$PID"
        
        # Wait for process to stop
        for i in {1..10}; do
            if ! kill -0 "$PID" 2>/dev/null; then
                echo -e "${GREEN}✅ Successfully stopped enhanced cursor sync automation (PID: $PID)${NC}"
                break
            fi
            sleep 1
        done
        
        # Force kill if still running
        if kill -0 "$PID" 2>/dev/null; then
            echo -e "${YELLOW}⚠️ Process still running, force killing...${NC}"
            kill -9 "$PID"
            echo -e "${GREEN}✅ Force killed process $PID${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️ Process $PID not found${NC}"
    fi
    
    # Remove PID file
    rm -f "$PID_FILE"
    echo -e "${GREEN}✅ Removed PID file${NC}"
else
    echo -e "${YELLOW}⚠️ PID file not found${NC}"
fi

# Kill any remaining enhanced cursor sync processes
PIDS=$(pgrep -f "enhanced-cursor-sync-automation" 2>/dev/null || true)
if [ -n "$PIDS" ]; then
    echo -e "${BLUE}🔄 Killing remaining enhanced cursor sync processes: $PIDS${NC}"
    kill $PIDS 2>/dev/null || true
    
    # Wait and force kill if needed
    sleep 2
    REMAINING_PIDS=$(pgrep -f "enhanced-cursor-sync-automation" 2>/dev/null || true)
    if [ -n "$REMAINING_PIDS" ]; then
        echo -e "${YELLOW}⚠️ Some processes still running, force killing...${NC}"
        kill -9 $REMAINING_PIDS 2>/dev/null || true
    fi
    
    echo -e "${GREEN}✅ All enhanced cursor sync processes stopped${NC}"
else
    echo -e "${GREEN}✅ No enhanced cursor sync processes running${NC}"
fi

# Check if any processes are still running
FINAL_CHECK=$(pgrep -f "enhanced-cursor-sync-automation" 2>/dev/null || true)
if [ -z "$FINAL_CHECK" ]; then
    echo -e "${GREEN}✅ Enhanced cursor sync automation completely stopped${NC}"
else
    echo -e "${RED}❌ Some processes may still be running: $FINAL_CHECK${NC}"
fi

echo ""
echo -e "${BLUE}📋 Summary:${NC}"
echo -e "${BLUE}  • Enhanced cursor sync automation: Stopped${NC}"
echo -e "${BLUE}  • PID file: Removed${NC}"
echo -e "${BLUE}  • All processes: Terminated${NC}"
echo ""
echo -e "${BLUE}🚀 To restart: run automation/start-enhanced-cursor-sync.sh${NC}" 