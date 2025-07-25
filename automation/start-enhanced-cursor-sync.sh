#!/bin/bash

# Enhanced Cursor Sync Startup Script
# Starts the enhanced cursor sync automation system

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Starting Enhanced Cursor Sync Automation...${NC}"

# Check if already running
if pgrep -f "enhanced-cursor-sync-automation" > /dev/null; then
    echo -e "${YELLOW}⚠️ Enhanced cursor sync automation is already running${NC}"
    ps aux | grep "enhanced-cursor-sync-automation" | grep -v grep
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed or not in PATH${NC}"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    echo -e "${RED}❌ package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi

# Create log directory if it doesn't exist
mkdir -p "$AUTOMATION_DIR/logs"

# Start the automation in continuous mode
cd "$PROJECT_DIR"
echo -e "${BLUE}📁 Working directory: $PROJECT_DIR${NC}"
echo -e "${BLUE}📄 Starting enhanced cursor sync automation...${NC}"

nohup node automation/enhanced-cursor-sync-automation.js --continuous > automation/logs/enhanced-cursor-sync-daemon.log 2>&1 &

# Get the PID
PID=$!
echo $PID > automation/logs/enhanced-cursor-sync.pid

# Wait a moment to check if the process started successfully
sleep 2

if kill -0 $PID 2>/dev/null; then
    echo -e "${GREEN}✅ Enhanced cursor sync automation started successfully!${NC}"
    echo -e "${GREEN}📊 PID: $PID${NC}"
    echo -e "${GREEN}📄 Log file: automation/logs/enhanced-cursor-sync-daemon.log${NC}"
    echo -e "${GREEN}🛑 To stop: kill $PID or run automation/stop-enhanced-cursor-sync.sh${NC}"
    echo ""
    echo -e "${BLUE}📋 Status:${NC}"
    echo -e "${BLUE}  • Process: Running${NC}"
    echo -e "${BLUE}  • Mode: Continuous${NC}"
    echo -e "${BLUE}  • Sync interval: 1 minute${NC}"
    echo -e "${BLUE}  • Auto-commit: Enabled${NC}"
    echo -e "${BLUE}  • Auto-push: Enabled${NC}"
    echo -e "${BLUE}  • Conflict resolution: Enabled${NC}"
    echo -e "${BLUE}  • Backup: Enabled${NC}"
    echo -e "${BLUE}  • Metrics: Enabled${NC}"
else
    echo -e "${RED}❌ Failed to start enhanced cursor sync automation${NC}"
    echo -e "${RED}📄 Check log file: automation/logs/enhanced-cursor-sync-daemon.log${NC}"
    exit 1
fi 