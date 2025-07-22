#!/bin/bash

# Zion App - Autonomous Automation System Startup Script
# 
# This script starts all autonomous automation agents independently
# and manages their lifecycle with proper error handling and monitoring.

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(pwd)"
LOG_DIR="$PROJECT_ROOT/logs"
PID_DIR="$PROJECT_ROOT/temp"
CONFIG_FILE="$PROJECT_ROOT/.env.automation"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Agent configurations (using functions for compatibility)
get_agent_script() {
    case $1 in
        "main") echo "scripts/autonomous-automation-system.js" ;;
        "code-review") echo "scripts/ai-code-review-automation.cjs" ;;
        "performance") echo "scripts/performance-optimization-automation.cjs" ;;
        "security") echo "scripts/security-monitoring-automation.cjs" ;;
        "deployment") echo "scripts/deployment-automation.cjs" ;;
        "monitoring") echo "scripts/monitoring-automation.cjs" ;;
        "optimization") echo "scripts/optimization-automation.cjs" ;;
        "testing") echo "scripts/testing-automation.cjs" ;;
        "documentation") echo "scripts/documentation-automation.cjs" ;;
        *) echo "" ;;
    esac
}

get_agent_port() {
    case $1 in
        "main") echo "3001" ;;
        "code-review") echo "3002" ;;
        "performance") echo "3003" ;;
        "security") echo "3004" ;;
        "deployment") echo "3005" ;;
        "monitoring") echo "3006" ;;
        "optimization") echo "3007" ;;
        "testing") echo "3008" ;;
        "documentation") echo "3009" ;;
        *) echo "" ;;
    esac
}

get_agent_description() {
    case $1 in
        "main") echo "Main Autonomous Automation System" ;;
        "code-review") echo "AI Code Review Agent" ;;
        "performance") echo "Performance Optimization Agent" ;;
        "security") echo "Security Monitoring Agent" ;;
        "deployment") echo "Deployment Automation Agent" ;;
        "monitoring") echo "System Monitoring Agent" ;;
        "optimization") echo "Continuous Optimization Agent" ;;
        "testing") echo "Automated Testing Agent" ;;
        "documentation") echo "Documentation Generation Agent" ;;
        *) echo "Unknown Agent" ;;
    esac
}

# Agent names array
AGENT_NAMES=("main" "code-review" "performance" "security" "deployment" "monitoring" "optimization" "testing" "documentation")

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] ${message}${NC}"
}

# Function to check if a port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Function to create directories
create_directories() {
    print_status $BLUE "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$PID_DIR"
    
    print_status $GREEN "Directories created successfully"
}

# Function to check dependencies
check_dependencies() {
    print_status $BLUE "Checking dependencies..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        print_status $RED "❌ Node.js is not installed. Please install Node.js 16+ first."
        exit 1
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$node_version" -lt 16 ]; then
        print_status $RED "❌ Node.js version 16+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        print_status $RED "❌ npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check if required packages are installed
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        print_status $RED "❌ package.json not found. Please run 'npm install' first."
        exit 1
    fi
    
    print_status $GREEN "✅ Dependencies check passed"
}

# Function to load environment variables
load_environment() {
    print_status $BLUE "Loading environment configuration..."
    
    if [ -f "$CONFIG_FILE" ]; then
        export $(cat "$CONFIG_FILE" | grep -v '^#' | xargs)
        print_status $GREEN "✅ Environment loaded from $CONFIG_FILE"
    else
        print_status $YELLOW "⚠️  No environment file found. Using defaults."
        
        # Set default environment variables
        export AUTOMATION_PORT=3001
        export CURSOR_API_KEY=""
        export OPENAI_API_KEY=""
        export CLAUDE_API_KEY=""
        export NODE_ENV="development"
    fi
}

# Function to start a single agent
start_agent() {
    local agent_name=$1
    local script_path=$2
    local port=$(get_agent_port "$agent_name")
    local description=$(get_agent_description "$agent_name")
    
    local pid_file="$PID_DIR/${agent_name}.pid"
    local log_file="$LOG_DIR/${agent_name}.log"
    
    print_status $BLUE "Starting $description..."
    
    # Check if agent is already running
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            print_status $YELLOW "⚠️  $description is already running (PID: $pid)"
            return 0
        else
            rm -f "$pid_file"
        fi
    fi
    
    # Check if port is available
    if [ -n "$port" ] && check_port "$port"; then
        print_status $YELLOW "⚠️  Port $port is already in use. Skipping $description"
        return 1
    fi
    
    # Start the agent
    cd "$PROJECT_ROOT"
    
    # Create log file if it doesn't exist
    touch "$log_file"
    
    # Start the process in background
    nohup node "$script_path" start > "$log_file" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$pid_file"
    
    # Wait a moment to check if process started successfully
    sleep 2
    
    if ps -p "$pid" > /dev/null 2>&1; then
        print_status $GREEN "✅ $description started successfully (PID: $pid, Port: $port)"
        return 0
    else
        print_status $RED "❌ Failed to start $description"
        rm -f "$pid_file"
        return 1
    fi
}

# Function to start all agents
start_all_agents() {
    print_status $PURPLE "🚀 Starting Autonomous Automation System..."
    
    local started_count=0
    local failed_count=0
    
    # Start main system first
    local main_script=$(get_agent_script "main")
    if start_agent "main" "$main_script"; then
        ((started_count++))
        sleep 3  # Give main system time to initialize
    else
        ((failed_count++))
    fi
    
    # Start other agents
    for agent_name in "${AGENT_NAMES[@]}"; do
        if [ "$agent_name" != "main" ]; then
            local script_path=$(get_agent_script "$agent_name")
            if start_agent "$agent_name" "$script_path"; then
                ((started_count++))
                sleep 1  # Small delay between starts
            else
                ((failed_count++))
            fi
        fi
    done
    
    print_status $GREEN "🎉 Autonomous Automation System startup completed!"
    print_status $GREEN "✅ Started: $started_count agents"
    if [ $failed_count -gt 0 ]; then
        print_status $YELLOW "⚠️  Failed: $failed_count agents"
    fi
}

# Function to check agent status
check_agent_status() {
    local agent_name=$1
    local pid_file="$PID_DIR/${agent_name}.pid"
    local description=$(get_agent_description "$agent_name")
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            print_status $GREEN "✅ $description is running (PID: $pid)"
            return 0
        else
            print_status $RED "❌ $description is not running (stale PID file)"
            rm -f "$pid_file"
            return 1
        fi
    else
        print_status $YELLOW "⚠️  $description is not running (no PID file)"
        return 1
    fi
}

# Function to check all agents status
check_all_status() {
    print_status $BLUE "📊 Checking Autonomous Automation System status..."
    
    local running_count=0
    local stopped_count=0
    
    for agent_name in "${AGENT_NAMES[@]}"; do
        if check_agent_status "$agent_name"; then
            ((running_count++))
        else
            ((stopped_count++))
        fi
    done
    
    print_status $GREEN "📈 Status Summary:"
    print_status $GREEN "   Running: $running_count agents"
    if [ $stopped_count -gt 0 ]; then
        print_status $YELLOW "   Stopped: $stopped_count agents"
    fi
}

# Function to stop a single agent
stop_agent() {
    local agent_name=$1
    local pid_file="$PID_DIR/${agent_name}.pid"
    local description=$(get_agent_description "$agent_name")
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            print_status $BLUE "Stopping $description (PID: $pid)..."
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                ((count++))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                print_status $YELLOW "Force killing $description..."
                kill -9 "$pid"
            fi
            
            rm -f "$pid_file"
            print_status $GREEN "✅ $description stopped"
        else
            print_status $YELLOW "⚠️  $description is not running"
            rm -f "$pid_file"
        fi
    else
        print_status $YELLOW "⚠️  $description is not running (no PID file)"
    fi
}

# Function to stop all agents
stop_all_agents() {
    print_status $PURPLE "🛑 Stopping Autonomous Automation System..."
    
    # Stop agents in reverse order (dependencies first)
    local agents_reverse=($(printf '%s\n' "${AGENT_NAMES[@]}" | tac))
    
    for agent_name in "${agents_reverse[@]}"; do
        stop_agent "$agent_name"
        sleep 1
    done
    
    print_status $GREEN "✅ Autonomous Automation System stopped"
}

# Function to restart all agents
restart_all_agents() {
    print_status $PURPLE "🔄 Restarting Autonomous Automation System..."
    stop_all_agents
    sleep 3
    start_all_agents
}

# Function to show logs
show_logs() {
    local agent_name=$1
    local log_file="$LOG_DIR/${agent_name}.log"
    
    if [ -f "$log_file" ]; then
        print_status $BLUE "📋 Showing logs for ${DESCRIPTIONS[$agent_name]}..."
        tail -f "$log_file"
    else
        print_status $RED "❌ Log file not found: $log_file"
    fi
}

# Function to show system information
show_system_info() {
    print_status $BLUE "📊 Autonomous Automation System Information"
    echo
    echo "Project Root: $PROJECT_ROOT"
    echo "Log Directory: $LOG_DIR"
    echo "PID Directory: $PID_DIR"
    echo "Node.js Version: $(node --version)"
    echo "npm Version: $(npm --version)"
    echo
    echo "Available Agents:"
    for agent_name in "${AGENT_NAMES[@]}"; do
        local port=$(get_agent_port "$agent_name")
        local description=$(get_agent_description "$agent_name")
        echo "  - $agent_name (Port: $port): $description"
    done
    echo
}

# Function to show help
show_help() {
    echo "Zion App - Autonomous Automation System"
    echo
    echo "Usage: $0 [COMMAND] [AGENT]"
    echo
    echo "Commands:"
    echo "  start              Start all autonomous agents"
    echo "  stop               Stop all autonomous agents"
    echo "  restart            Restart all autonomous agents"
    echo "  status             Check status of all agents"
    echo "  logs [AGENT]       Show logs for specific agent (or all if no agent specified)"
    echo "  info               Show system information"
    echo "  help               Show this help message"
    echo
    echo "Agents:"
    for agent_name in "${AGENT_NAMES[@]}"; do
        local description=$(get_agent_description "$agent_name")
        echo "  $agent_name - $description"
    done
    echo
    echo "Examples:"
    echo "  $0 start                    # Start all agents"
    echo "  $0 status                   # Check status"
    echo "  $0 logs security            # Show security agent logs"
    echo "  $0 stop                     # Stop all agents"
}

# Main script logic
main() {
    local command=${1:-help}
    local agent=${2:-}
    
    # Create directories
    create_directories
    
    # Check dependencies
    check_dependencies
    
    # Load environment
    load_environment
    
    case "$command" in
        start)
            start_all_agents
            ;;
        stop)
            stop_all_agents
            ;;
        restart)
            restart_all_agents
            ;;
        status)
            check_all_status
            ;;
        logs)
            if [ -n "$agent" ]; then
                if [ -n "$(get_agent_script "$agent")" ]; then
                    show_logs "$agent"
                else
                    print_status $RED "❌ Unknown agent: $agent"
                    exit 1
                fi
            else
                print_status $BLUE "📋 Showing all agent logs (Ctrl+C to exit)..."
                tail -f "$LOG_DIR"/*.log
            fi
            ;;
        info)
            show_system_info
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_status $RED "❌ Unknown command: $command"
            echo
            show_help
            exit 1
            ;;
    esac
}

# Handle script interruption
trap 'print_status $YELLOW "Interrupted. Use $0 stop to stop all agents."; exit 1' INT TERM

# Run main function with all arguments
main "$@" 