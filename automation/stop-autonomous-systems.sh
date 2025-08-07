#!/bin/bash

# Autonomous Systems Stopper
# This script stops all autonomous agents and systems

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo -e "${BLUE}🛑 Stopping Autonomous Systems...${NC}"
echo -e "${BLUE}📁 Project root: $PROJECT_ROOT${NC}"

# Function to stop processes by pattern
stop_processes() {
    local pattern="$1"
    local process_name="$2"
    
    local pids=$(pgrep -f "$pattern" 2>/dev/null || true)
    
    if [ -n "$pids" ]; then
        echo -e "${YELLOW}🛑 Stopping $process_name...${NC}"
        echo "$pids" | xargs kill -TERM 2>/dev/null || true
        
        # Wait a moment for graceful shutdown
        sleep 2
        
        # Force kill if still running
        local remaining_pids=$(pgrep -f "$pattern" 2>/dev/null || true)
        if [ -n "$remaining_pids" ]; then
            echo -e "${YELLOW}⚠️  Force stopping $process_name...${NC}"
            echo "$remaining_pids" | xargs kill -KILL 2>/dev/null || true
        fi
        
        echo -e "${GREEN}✅ $process_name stopped${NC}"
    else
        echo -e "${YELLOW}ℹ️  $process_name is not running${NC}"
    fi
}

# Stop all autonomous systems
stop_processes "error-monitoring-autonomous-system.js" "Error Monitoring System"
stop_processes "cron-autonomous-system.js" "Cron Autonomous System"
stop_processes "syntax-error-autonomous-agent.js" "Syntax Error Agent"

# Also stop any other automation scripts that might be running
stop_processes "automation.*\.js" "Other Automation Scripts"

echo -e "${BLUE}📊 Final status check...${NC}"

# Check if any processes are still running
remaining_pids=$(pgrep -f "automation.*\.js" 2>/dev/null || true)

if [ -n "$remaining_pids" ]; then
    echo -e "${RED}❌ Some processes are still running:${NC}"
    echo "$remaining_pids" | while read pid; do
        ps -p "$pid" -o pid,ppid,cmd --no-headers 2>/dev/null || true
    done
else
    echo -e "${GREEN}✅ All autonomous systems stopped successfully${NC}"
fi

echo -e "${GREEN}🎉 Autonomous systems shutdown complete!${NC}"
echo -e "${YELLOW}💡 To restart systems, run: ./automation/start-autonomous-systems.sh${NC}"
