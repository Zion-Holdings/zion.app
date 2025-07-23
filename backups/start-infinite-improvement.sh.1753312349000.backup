#!/bin/bash

# Zion App - Infinite Improvement Loop Startup Script
# This script starts the infinite improvement loop system with all AI agents

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$SCRIPT_DIR"
LOG_DIR="$PROJECT_ROOT/logs"
PID_FILE="$AUTOMATION_DIR/.infinite-improvement.pid"

# Environment variables
export NODE_ENV=production
export IMPROVEMENT_PORT=3002
export LOG_LEVEL=info

# AI Configuration
export CURSOR_AI_ENABLED=true
export OPENAI_ENABLED=true
export CLAUDE_ENABLED=true
export LOCAL_AI_ENABLED=true
export COPILOT_ENABLED=true
export CUSTOM_AGENTS_ENABLED=true

# Load environment variables from .env if it exists
if [ -f "$PROJECT_ROOT/.env" ]; then
    echo -e "${BLUE}📄 Loading environment variables from .env${NC}"
    source "$PROJECT_ROOT/.env"
fi

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}🎉 $1${NC}"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if a port is in use
port_in_use() {
    lsof -i :$1 >/dev/null 2>&1
}

# Function to create directories
create_directories() {
    print_info "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$AUTOMATION_DIR/logs"
    mkdir -p "$AUTOMATION_DIR/reports"
    mkdir -p "$AUTOMATION_DIR/temp"
    mkdir -p "$AUTOMATION_DIR/backups"
    
    print_status "Directories created successfully"
}

# Function to check dependencies
check_dependencies() {
    print_info "Checking dependencies..."
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 16 or higher."
        exit 1
    fi
    
    # Check npm
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm."
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 16 ]; then
        print_error "Node.js version 16 or higher is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_status "Dependencies check passed"
}

# Function to install npm dependencies
install_dependencies() {
    print_info "Installing npm dependencies..."
    
    cd "$AUTOMATION_DIR"
    
    if [ ! -f "package.json" ]; then
        print_error "package.json not found in automation directory"
        exit 1
    fi
    
    npm install --production
    
    print_status "Dependencies installed successfully"
}

# Function to check if the system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            print_warning "Infinite improvement loop is already running (PID: $PID)"
            return 0
        else
            print_warning "Stale PID file found. Removing..."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Function to check AI API keys
check_ai_config() {
    print_info "Checking AI configuration..."
    
    local missing_keys=()
    
    # Check Cursor AI
    if [ "$CURSOR_AI_ENABLED" = "true" ] && [ -z "$CURSOR_API_KEY" ]; then
        missing_keys+=("CURSOR_API_KEY")
    fi
    
    # Check OpenAI
    if [ "$OPENAI_ENABLED" = "true" ] && [ -z "$OPENAI_API_KEY" ]; then
        missing_keys+=("OPENAI_API_KEY")
    fi
    
    # Check Claude
    if [ "$CLAUDE_ENABLED" = "true" ] && [ -z "$CLAUDE_API_KEY" ]; then
        missing_keys+=("CLAUDE_API_KEY")
    fi
    
    # Check GitHub Copilot
    if [ "$COPILOT_ENABLED" = "true" ] && [ -z "$COPILOT_API_KEY" ]; then
        missing_keys+=("COPILOT_API_KEY")
    fi
    
    if [ ${#missing_keys[@]} -gt 0 ]; then
        print_warning "Some AI API keys are missing: ${missing_keys[*]}"
        print_info "The system will run with available AI providers only"
    else
        print_status "All configured AI providers are ready"
    fi
}

# Function to start the infinite improvement loop
start_improvement_loop() {
    print_info "Starting infinite improvement loop..."
    
    cd "$AUTOMATION_DIR"
    
    # Start the main process
    nohup node infinite-improvement-loop.js > "$LOG_DIR/infinite-improvement.log" 2>&1 &
    PID=$!
    
    # Save PID
    echo $PID > "$PID_FILE"
    
    print_status "Infinite improvement loop started (PID: $PID)"
    print_info "Logs are being written to: $LOG_DIR/infinite-improvement.log"
    
    # Wait a moment and check if it started successfully
    sleep 3
    
    if ps -p "$PID" > /dev/null 2>&1; then
        print_success "Infinite improvement loop is running successfully!"
        print_info "Dashboard available at: http://localhost:$IMPROVEMENT_PORT"
        print_info "API available at: http://localhost:$IMPROVEMENT_PORT/api"
    else
        print_error "Failed to start infinite improvement loop"
        print_info "Check logs at: $LOG_DIR/infinite-improvement.log"
        exit 1
    fi
}

# Function to show status
show_status() {
    print_info "Infinite Improvement Loop Status"
    echo "=================================="
    
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            print_status "Status: Running (PID: $PID)"
            print_info "Dashboard: http://localhost:$IMPROVEMENT_PORT"
            print_info "Logs: $LOG_DIR/infinite-improvement.log"
        else
            print_error "Status: Not running (stale PID file)"
        fi
    else
        print_error "Status: Not running"
    fi
    
    echo ""
    print_info "Configuration:"
    echo "  - Cursor AI: $CURSOR_AI_ENABLED"
    echo "  - OpenAI: $OPENAI_ENABLED"
    echo "  - Claude: $CLAUDE_ENABLED"
    echo "  - Local AI: $LOCAL_AI_ENABLED"
    echo "  - GitHub Copilot: $COPILOT_ENABLED"
    echo "  - Custom Agents: $CUSTOM_AGENTS_ENABLED"
}

# Function to stop the system
stop_improvement_loop() {
    print_info "Stopping infinite improvement loop..."
    
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            kill "$PID"
            print_status "Sent stop signal to process $PID"
            
            # Wait for process to stop
            for i in {1..10}; do
                if ! ps -p "$PID" > /dev/null 2>&1; then
                    break
                fi
                sleep 1
            done
            
            if ps -p "$PID" > /dev/null 2>&1; then
                print_warning "Process did not stop gracefully, forcing termination..."
                kill -9 "$PID"
            fi
            
            rm -f "$PID_FILE"
            print_success "Infinite improvement loop stopped"
        else
            print_warning "Process $PID is not running"
            rm -f "$PID_FILE"
        fi
    else
        print_warning "No PID file found"
    fi
}

# Function to restart the system
restart_improvement_loop() {
    print_info "Restarting infinite improvement loop..."
    stop_improvement_loop
    sleep 2
    start_improvement_loop
}

# Function to show logs
show_logs() {
    if [ -f "$LOG_DIR/infinite-improvement.log" ]; then
        print_info "Showing recent logs (last 50 lines):"
        echo "=========================================="
        tail -n 50 "$LOG_DIR/infinite-improvement.log"
    else
        print_error "Log file not found: $LOG_DIR/infinite-improvement.log"
    fi
}

# Function to show help
show_help() {
    echo "Zion App - Infinite Improvement Loop"
    echo "===================================="
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the infinite improvement loop"
    echo "  stop      Stop the infinite improvement loop"
    echo "  restart   Restart the infinite improvement loop"
    echo "  status    Show current status"
    echo "  logs      Show recent logs"
    echo "  help      Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  CURSOR_API_KEY      Cursor AI API key"
    echo "  OPENAI_API_KEY      OpenAI API key"
    echo "  CLAUDE_API_KEY      Claude API key"
    echo "  COPILOT_API_KEY     GitHub Copilot API key"
    echo "  IMPROVEMENT_PORT    Port for dashboard (default: 3002)"
    echo ""
    echo "Examples:"
    echo "  $0 start           # Start the system"
    echo "  $0 status          # Check status"
    echo "  $0 logs            # View logs"
    echo "  $0 stop            # Stop the system"
}

# Main script logic
main() {
    # Parse command line arguments
    case "${1:-start}" in
        start)
            echo -e "${PURPLE}🚀 Starting Zion App Infinite Improvement Loop${NC}"
            echo "=================================================="
            
            check_dependencies
            create_directories
            install_dependencies
            check_ai_config
            
            if check_running; then
                print_warning "System is already running. Use 'restart' to restart it."
                exit 0
            fi
            
            start_improvement_loop
            ;;
        stop)
            echo -e "${RED}🛑 Stopping Infinite Improvement Loop${NC}"
            stop_improvement_loop
            ;;
        restart)
            echo -e "${YELLOW}🔄 Restarting Infinite Improvement Loop${NC}"
            restart_improvement_loop
            ;;
        status)
            show_status
            ;;
        logs)
            show_logs
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@" 