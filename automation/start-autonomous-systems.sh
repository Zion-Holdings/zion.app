#!/bin/bash

# Autonomous Systems Launcher
# This script starts all autonomous agents and systems for continuous error monitoring and fixing

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

echo -e "${BLUE}🚀 Starting Autonomous Systems...${NC}"
echo -e "${BLUE}📁 Project root: $PROJECT_ROOT${NC}"

# Function to check if a process is running
is_process_running() {
    pgrep -f "$1" > /dev/null
}

# Function to start a system if not already running
start_system() {
    local system_name="$1"
    local script_path="$2"
    local log_file="$3"
    
    if is_process_running "$script_path"; then
        echo -e "${YELLOW}⚠️  $system_name is already running${NC}"
    else
        echo -e "${GREEN}🚀 Starting $system_name...${NC}"
        nohup node "$script_path" > "$log_file" 2>&1 &
        echo -e "${GREEN}✅ $system_name started (PID: $!)${NC}"
    fi
}

# Create logs directory
mkdir -p "$PROJECT_ROOT/logs"

# Start Error Monitoring System
start_system "Error Monitoring System" \
    "$PROJECT_ROOT/automation/error-monitoring-autonomous-system.js" \
    "$PROJECT_ROOT/logs/error-monitoring.log"

# Start Cron Autonomous System
start_system "Cron Autonomous System" \
    "$PROJECT_ROOT/automation/cron-autonomous-system.js" \
    "$PROJECT_ROOT/logs/cron-system.log"

# Start Syntax Error Autonomous Agent
start_system "Syntax Error Agent" \
    "$PROJECT_ROOT/automation/syntax-error-autonomous-agent.js" \
    "$PROJECT_ROOT/logs/syntax-agent.log"

# Wait a moment for systems to start
sleep 3

# Check if all systems are running
echo -e "${BLUE}📊 Checking system status...${NC}"

if is_process_running "error-monitoring-autonomous-system.js"; then
    echo -e "${GREEN}✅ Error Monitoring System is running${NC}"
else
    echo -e "${RED}❌ Error Monitoring System is not running${NC}"
fi

if is_process_running "cron-autonomous-system.js"; then
    echo -e "${GREEN}✅ Cron Autonomous System is running${NC}"
else
    echo -e "${RED}❌ Cron Autonomous System is not running${NC}"
fi

if is_process_running "syntax-error-autonomous-agent.js"; then
    echo -e "${GREEN}✅ Syntax Error Agent is running${NC}"
else
    echo -e "${RED}❌ Syntax Error Agent is not running${NC}"
fi

echo -e "${BLUE}📋 System Information:${NC}"
echo -e "${BLUE}   - Log files: $PROJECT_ROOT/logs/${NC}"
echo -e "${BLUE}   - Error monitoring: Every 30 seconds${NC}"
echo -e "${BLUE}   - Build checks: Every 15 minutes${NC}"
echo -e "${BLUE}   - Full scans: Every 2 hours${NC}"
echo -e "${BLUE}   - Cleanup: Daily at 2 AM${NC}"

echo -e "${GREEN}🎉 All autonomous systems started successfully!${NC}"
echo -e "${YELLOW}💡 To stop all systems, run: ./automation/stop-autonomous-systems.sh${NC}"
echo -e "${YELLOW}💡 To view logs, check: $PROJECT_ROOT/logs/${NC}"

# Keep the script running to show status
echo -e "${BLUE}📊 Monitoring system status (Ctrl+C to exit)...${NC}"

trap 'echo -e "\n${YELLOW}🛑 Stopping monitoring...${NC}"; exit 0' INT

while true; do
    sleep 60
    echo -e "${BLUE}📊 Status check: $(date)${NC}"
    
    if is_process_running "error-monitoring-autonomous-system.js"; then
        echo -e "${GREEN}✅ Error Monitoring System: RUNNING${NC}"
    else
        echo -e "${RED}❌ Error Monitoring System: STOPPED${NC}"
    fi
    
    if is_process_running "cron-autonomous-system.js"; then
        echo -e "${GREEN}✅ Cron Autonomous System: RUNNING${NC}"
    else
        echo -e "${RED}❌ Cron Autonomous System: STOPPED${NC}"
    fi
    
    if is_process_running "syntax-error-autonomous-agent.js"; then
        echo -e "${GREEN}✅ Syntax Error Agent: RUNNING${NC}"
    else
        echo -e "${RED}❌ Syntax Error Agent: STOPPED${NC}"
    fi
done
