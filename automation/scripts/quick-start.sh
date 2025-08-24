#!/bin/bash

# Quick Start Script for Automation Error Fixing
# Immediately fixes current errors and sets up monitoring

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"

# Ensure logs directory exists
mkdir -p "$LOGS_DIR"

echo -e "${BLUE}🚀 Quick Start: Automation Error Fixing${NC}"
echo "=========================================="
echo "Project Root: $PROJECT_ROOT"
echo "Scripts Dir: $SCRIPT_DIR"
echo ""

# Function to check if Node.js is available
check_node() {
    if ! command -v node >/dev/null 2>&1; then
        echo -e "${RED}❌ Node.js is not installed or not in PATH${NC}"
        echo "Please install Node.js and try again"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Node.js found: $(node --version)${NC}"
}

# Function to check if npm is available
check_npm() {
    if ! command -v npm >/dev/null 2>&1; then
        echo -e "${RED}❌ npm is not installed or not in PATH${NC}"
        echo "Please install npm and try again"
        exit 1
    fi
    
    echo -e "${GREEN}✅ npm found: $(npm --version)${NC}"
}

# Function to install dependencies
install_dependencies() {
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    
    cd "$PROJECT_ROOT"
    
    if [ -f "package.json" ]; then
        echo "Installing npm dependencies..."
        npm install
        
        # Check for winston dependency
        if ! npm list winston >/dev/null 2>&1; then
            echo "Installing winston for logging..."
            npm install winston
        fi
    else
        echo -e "${YELLOW}⚠️  No package.json found, skipping npm install${NC}"
    fi
}

# Function to run immediate error fix
run_error_fix() {
    echo -e "${BLUE}🔧 Running immediate error fix...${NC}"
    
    cd "$PROJECT_ROOT"
    
    if [ -f "$SCRIPT_DIR/fix-automation-errors.js" ]; then
        echo "Executing automation error fix script..."
        node "$SCRIPT_DIR/fix-automation-errors.js"
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Error fix completed successfully${NC}"
        else
            echo -e "${RED}❌ Error fix failed${NC}"
            return 1
        fi
    else
        echo -e "${RED}❌ Error fix script not found${NC}"
        return 1
    fi
}

# Function to run health check
run_health_check() {
    echo -e "${BLUE}🔍 Running health check...${NC}"
    
    cd "$PROJECT_ROOT"
    
    if [ -f "$SCRIPT_DIR/automation-health-check.js" ]; then
        echo "Executing health check script..."
        node "$SCRIPT_DIR/automation-health-check.js"
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Health check completed successfully${NC}"
        else
            echo -e "${YELLOW}⚠️  Health check found issues${NC}"
        fi
    else
        echo -e "${RED}❌ Health check script not found${NC}"
    fi
}

# Function to start monitoring
start_monitoring() {
    echo -e "${BLUE}📊 Starting automation monitoring...${NC}"
    
    cd "$PROJECT_ROOT"
    
    # Check if monitor is already running
    if pgrep -f "automation-monitor.js" > /dev/null; then
        echo -e "${YELLOW}⚠️  Automation monitor is already running${NC}"
        return
    fi
    
    if [ -f "$SCRIPT_DIR/automation-monitor.js" ]; then
        echo "Starting automation monitor in background..."
        nohup node "$SCRIPT_DIR/automation-monitor.js" >> "$LOGS_DIR/monitor.log" 2>&1 &
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Automation monitor started successfully${NC}"
            echo "Monitor PID: $!"
        else
            echo -e "${RED}❌ Failed to start automation monitor${NC}"
        fi
    else
        echo -e "${RED}❌ Automation monitor script not found${NC}"
    fi
}

# Function to setup cron jobs
setup_cron_jobs() {
    echo -e "${BLUE}📅 Setting up cron jobs...${NC}"
    
    if [ -f "$SCRIPT_DIR/setup-cron-jobs.sh" ]; then
        echo "Running cron job setup..."
        bash "$SCRIPT_DIR/setup-cron-jobs.sh"
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Cron jobs setup completed${NC}"
        else
            echo -e "${RED}❌ Cron jobs setup failed${NC}"
        fi
    else
        echo -e "${RED}❌ Cron jobs setup script not found${NC}"
    fi
}

# Function to show status
show_status() {
    echo ""
    echo -e "${BLUE}📊 Current Status:${NC}"
    echo "=================="
    
    # Check if monitor is running
    if pgrep -f "automation-monitor.js" > /dev/null; then
        echo -e "${GREEN}✅ Automation monitor: Running${NC}"
    else
        echo -e "${RED}❌ Automation monitor: Not running${NC}"
    fi
    
    # Check recent logs
    if [ -f "$LOGS_DIR/error.log" ]; then
        recent_errors=$(tail -n 5 "$LOGS_DIR/error.log" | grep -c "error" || echo "0")
        echo "Recent errors: $recent_errors"
    fi
    
    # Show log files
    echo ""
    echo -e "${BLUE}📁 Log files:${NC}"
    ls -la "$LOGS_DIR"/*.log 2>/dev/null || echo "No log files found"
}

# Function to show next steps
show_next_steps() {
    echo ""
    echo -e "${BLUE}📋 Next Steps:${NC}"
    echo "=============="
    echo "1. Monitor the automation systems:"
    echo "   tail -f $LOGS_DIR/monitor.log"
    echo ""
    echo "2. Check for errors:"
    echo "   tail -f $LOGS_DIR/error.log"
    echo ""
    echo "3. Run manual health check:"
    echo "   node $SCRIPT_DIR/automation-health-check.js"
    echo ""
    echo "4. Run manual error fix:"
    echo "   node $SCRIPT_DIR/fix-automation-errors.js"
    echo ""
    echo "5. View cron jobs:"
    echo "   crontab -l"
    echo ""
    echo -e "${GREEN}🎉 Automation error fixing is now set up and running!${NC}"
}

# Main execution
main() {
    echo -e "${BLUE}🔍 Checking prerequisites...${NC}"
    check_node
    check_npm
    
    echo ""
    echo -e "${BLUE}📦 Setting up environment...${NC}"
    install_dependencies
    
    echo ""
    echo -e "${BLUE}🔧 Fixing current errors...${NC}"
    run_error_fix
    
    echo ""
    echo -e "${BLUE}🔍 Verifying fixes...${NC}"
    run_health_check
    
    echo ""
    echo -e "${BLUE}📊 Starting monitoring...${NC}"
    start_monitoring
    
    echo ""
    echo -e "${BLUE}📅 Setting up automation...${NC}"
    setup_cron_jobs
    
    echo ""
    show_status
    show_next_steps
}

# Run main function
main "$@" 