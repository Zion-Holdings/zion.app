#!/bin/bash

# Autonomous Agent System - Cron Job Setup Script
# This script sets up cron jobs for the autonomous agent system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
CRON_LOG_DIR="$SCRIPT_DIR/logs"
CRON_PID_DIR="$SCRIPT_DIR/pids"

# Create necessary directories
mkdir -p "$CRON_LOG_DIR"
mkdir -p "$CRON_PID_DIR"
mkdir -p "$SCRIPT_DIR/temp"

echo -e "${BLUE}Setting up Autonomous Agent System Cron Jobs...${NC}"

# Function to add cron job
add_cron_job() {
    local schedule="$1"
    local command="$2"
    local description="$3"
    
    # Check if job already exists
    if crontab -l 2>/dev/null | grep -q "$command"; then
        echo -e "${YELLOW}Job already exists: $description${NC}"
        return 0
    fi
    
    # Add the job to crontab
    (crontab -l 2>/dev/null; echo "$schedule $command") | crontab -
    echo -e "${GREEN}Added cron job: $description${NC}"
}

# Function to remove cron job
remove_cron_job() {
    local command="$1"
    local description="$2"
    
    # Remove the job from crontab
    crontab -l 2>/dev/null | grep -v "$command" | crontab -
    echo -e "${GREEN}Removed cron job: $description${NC}"
}

# Function to list cron jobs
list_cron_jobs() {
    echo -e "${BLUE}Current cron jobs:${NC}"
    crontab -l 2>/dev/null | grep -E "(autonomous|agent|orchestrator)" || echo "No autonomous agent cron jobs found"
}

# Function to start the autonomous system
start_system() {
    echo -e "${BLUE}Starting Autonomous Agent System...${NC}"
    
    # Check if system is already running
    if pgrep -f "start-autonomous-system.js" > /dev/null; then
        echo -e "${YELLOW}System is already running${NC}"
        return 0
    fi
    
    # Start the system in background
    nohup node "$SCRIPT_DIR/start-autonomous-system.js" > "$CRON_LOG_DIR/system.log" 2>&1 &
    echo $! > "$CRON_PID_DIR/system.pid"
    
    echo -e "${GREEN}Autonomous Agent System started (PID: $(cat "$CRON_PID_DIR/system.pid"))${NC}"
}

# Function to stop the autonomous system
stop_system() {
    echo -e "${BLUE}Stopping Autonomous Agent System...${NC}"
    
    if [ -f "$CRON_PID_DIR/system.pid" ]; then
        local pid=$(cat "$CRON_PID_DIR/system.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            echo -e "${GREEN}System stopped (PID: $pid)${NC}"
        else
            echo -e "${YELLOW}System was not running${NC}"
        fi
        rm -f "$CRON_PID_DIR/system.pid"
    else
        echo -e "${YELLOW}No PID file found${NC}"
    fi
}

# Function to restart the autonomous system
restart_system() {
    echo -e "${BLUE}Restarting Autonomous Agent System...${NC}"
    stop_system
    sleep 2
    start_system
}

# Function to check system status
check_status() {
    echo -e "${BLUE}Checking Autonomous Agent System Status...${NC}"
    
    if [ -f "$CRON_PID_DIR/system.pid" ]; then
        local pid=$(cat "$CRON_PID_DIR/system.pid")
        if kill -0 "$pid" 2>/dev/null; then
            echo -e "${GREEN}System is running (PID: $pid)${NC}"
            
            # Check system health
            if command -v node >/dev/null 2>&1; then
                local status=$(node "$SCRIPT_DIR/start-autonomous-system.js" --status 2>/dev/null || echo '{"status":"error"}')
                echo -e "${BLUE}System Status: $status${NC}"
            fi
        else
            echo -e "${RED}System is not running (stale PID file)${NC}"
            rm -f "$CRON_PID_DIR/system.pid"
        fi
    else
        echo -e "${YELLOW}System is not running (no PID file)${NC}"
    fi
}

# Function to setup all cron jobs
setup_cron_jobs() {
    echo -e "${BLUE}Setting up cron jobs...${NC}"
    
    # System startup job (every reboot)
    add_cron_job "@reboot" "cd $SCRIPT_DIR && node start-autonomous-system.js > $CRON_LOG_DIR/startup.log 2>&1" "Autonomous System Startup"
    
    # Health check job (every 5 minutes)
    add_cron_job "*/5 * * * *" "cd $SCRIPT_DIR && node health-check.js > $CRON_LOG_DIR/health.log 2>&1" "System Health Check"
    
    # Metrics collection job (every 2 minutes)
    add_cron_job "*/2 * * * *" "cd $SCRIPT_DIR && node monitor-automation.js > $CRON_LOG_DIR/metrics.log 2>&1" "Metrics Collection"
    
    # Backup job (every hour)
    add_cron_job "0 * * * *" "cd $SCRIPT_DIR && node backup-system.js > $CRON_LOG_DIR/backup.log 2>&1" "System Backup"
    
    # Cleanup job (every 6 hours)
    add_cron_job "0 */6 * * *" "cd $SCRIPT_DIR && find logs/ -name '*.log' -mtime +7 -delete" "Log Cleanup"
    
    # Performance optimization job (every 30 minutes)
    add_cron_job "*/30 * * * *" "cd $SCRIPT_DIR && node test-automation.js > $CRON_LOG_DIR/optimization.log 2>&1" "Performance Optimization"
    
    echo -e "${GREEN}Cron jobs setup completed${NC}"
}

# Function to remove all cron jobs
remove_cron_jobs() {
    echo -e "${BLUE}Removing cron jobs...${NC}"
    
    # Remove all autonomous agent related cron jobs
    crontab -l 2>/dev/null | grep -v "autonomous\|agent\|orchestrator\|start-autonomous-system\|health-check\|monitor-automation\|backup-system" | crontab -
    
    echo -e "${GREEN}Cron jobs removed${NC}"
}

# Function to show logs
show_logs() {
    local log_type="$1"
    
    case "$log_type" in
        "system")
            tail -f "$CRON_LOG_DIR/system.log"
            ;;
        "health")
            tail -f "$CRON_LOG_DIR/health.log"
            ;;
        "metrics")
            tail -f "$CRON_LOG_DIR/metrics.log"
            ;;
        "backup")
            tail -f "$CRON_LOG_DIR/backup.log"
            ;;
        "all")
            tail -f "$CRON_LOG_DIR"/*.log
            ;;
        *)
            echo -e "${RED}Invalid log type. Use: system, health, metrics, backup, or all${NC}"
            exit 1
            ;;
    esac
}

# Function to show help
show_help() {
    echo -e "${BLUE}Autonomous Agent System - Cron Job Setup${NC}"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  setup              Setup all cron jobs"
    echo "  remove             Remove all cron jobs"
    echo "  list               List current cron jobs"
    echo "  start              Start the autonomous system"
    echo "  stop               Stop the autonomous system"
    echo "  restart            Restart the autonomous system"
    echo "  status             Check system status"
    echo "  logs [TYPE]        Show logs (system|health|metrics|backup|all)"
    echo "  help               Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup           # Setup all cron jobs"
    echo "  $0 start           # Start the system"
    echo "  $0 status          # Check system status"
    echo "  $0 logs system     # Show system logs"
    echo ""
}

# Main script logic
case "${1:-help}" in
    "setup")
        setup_cron_jobs
        ;;
    "remove")
        remove_cron_jobs
        ;;
    "list")
        list_cron_jobs
        ;;
    "start")
        start_system
        ;;
    "stop")
        stop_system
        ;;
    "restart")
        restart_system
        ;;
    "status")
        check_status
        ;;
    "logs")
        show_logs "$2"
        ;;
    "help"|*)
        show_help
        ;;
esac

echo -e "${GREEN}Setup script completed${NC}" 