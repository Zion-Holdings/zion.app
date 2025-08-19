#!/bin/bash

# Ultra-Fast Automation Startup Script
# This script manages the ultra-fast agent creation ecosystem with multiple redundancy layers

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
ECOSYSTEM_FILE="ecosystem.ultra-fast.cjs"
LOG_DIR="automation/logs"
REPORT_DIR="automation/reports"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${CYAN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE} $1${NC}"
    echo -e "${PURPLE}================================${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$REPORT_DIR"
    mkdir -p "automation/agents"
    mkdir -p "automation/factories"
    
    print_success "Directories created successfully"
}

# Function to start the ultra-fast ecosystem
start_ecosystem() {
    print_header "Starting Ultra-Fast Automation Ecosystem"
    
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem file $ECOSYSTEM_FILE not found!"
        exit 1
    fi
    
    print_status "Starting PM2 ecosystem: $ECOSYSTEM_FILE"
    
    # Stop any existing processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Start the new ecosystem
    pm2 start "$ECOSYSTEM_FILE"
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    print_success "Ultra-Fast ecosystem started successfully!"
}

# Function to show ecosystem status
show_status() {
    print_header "Ultra-Fast Ecosystem Status"
    
    echo ""
    print_status "PM2 Process List:"
    pm2 list
    
    echo ""
    print_status "PM2 Logs (last 50 lines):"
    pm2 logs --lines 50 --nostream
    
    echo ""
    print_status "Recent Agent Creation Activity:"
    if [ -d "automation/agents" ]; then
        echo "Total agents: $(find automation/agents -maxdepth 1 -type d | wc -l)"
        echo "Recent agents:"
        find automation/agents -maxdepth 1 -type d -name "ultra-agent-*" | tail -5 | while read -r agent; do
            if [ -f "$agent/config.json" ]; then
                agent_id=$(basename "$agent")
                agent_type=$(jq -r '.type' "$agent/config.json" 2>/dev/null || echo "unknown")
                agent_complexity=$(jq -r '.complexity' "$agent/config.json" 2>/dev/null || echo "unknown")
                agent_specialization=$(jq -r '.specialization' "$agent/config.json" 2>/dev/null || echo "unknown")
                echo "  - $agent_id ($agent_type/$agent_complexity/$agent_specialization)"
            fi
        done
    fi
    
    echo ""
    print_status "Recent Factory Creation Activity:"
    if [ -d "automation/factories" ]; then
        echo "Total factories: $(find automation/factories -maxdepth 1 -type d | wc -l)"
        echo "Recent factories:"
        find automation/factories -maxdepth 1 -type d -name "ultra-factory-*" | tail -5 | while read -r factory; do
            if [ -f "$factory/factory-config.json" ]; then
                factory_id=$(basename "$factory")
                factory_type=$(jq -r '.type' "$factory/factory-config.json" 2>/dev/null || echo "unknown")
                factory_complexity=$(jq -r '.complexity' "$factory/factory-config.json" 2>/dev/null || echo "unknown")
                factory_specialization=$(jq -r '.specialization' "$factory/factory-config.json" 2>/dev/null || echo "unknown")
                echo "  - $factory_id ($factory_type/$factory_complexity/$factory_specialization)"
            fi
        done
    fi
}

# Function to monitor ecosystem in real-time
monitor_ecosystem() {
    print_header "Real-Time Ecosystem Monitoring"
    
    print_status "Starting real-time monitoring (Press Ctrl+C to stop)..."
    
    # Monitor PM2 processes
    pm2 monit
}

# Function to restart ecosystem
restart_ecosystem() {
    print_header "Restarting Ultra-Fast Ecosystem"
    
    print_status "Stopping all processes..."
    pm2 stop all
    
    print_status "Deleting all processes..."
    pm2 delete all
    
    print_status "Starting ecosystem..."
    pm2 start "$ECOSYSTEM_FILE"
    
    print_success "Ecosystem restarted successfully!"
}

# Function to stop ecosystem
stop_ecosystem() {
    print_header "Stopping Ultra-Fast Ecosystem"
    
    print_status "Stopping all processes..."
    pm2 stop all
    
    print_status "Deleting all processes..."
    pm2 delete all
    
    print_success "Ecosystem stopped successfully!"
}

# Function to show logs
show_logs() {
    print_header "Ecosystem Logs"
    
    local process_name=${1:-"all"}
    
    if [ "$process_name" = "all" ]; then
        print_status "Showing logs for all processes..."
        pm2 logs --nostream
    else
        print_status "Showing logs for process: $process_name"
        pm2 logs "$process_name" --nostream
    fi
}

# Function to show help
show_help() {
    print_header "Ultra-Fast Automation Management Script"
    
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start the ultra-fast automation ecosystem"
    echo "  stop      - Stop the ultra-fast automation ecosystem"
    echo "  restart   - Restart the ultra-fast automation ecosystem"
    echo "  status    - Show ecosystem status"
    echo "  monitor   - Monitor ecosystem in real-time"
    echo "  logs      - Show ecosystem logs"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start the ecosystem"
    echo "  $0 status                   # Show status"
    echo "  $0 logs ultra-fast-agent-creator-primary  # Show specific process logs"
    echo "  $0 monitor                  # Real-time monitoring"
}

# Main script logic
main() {
    local command=${1:-"help"}
    
    case "$command" in
        "start")
            check_pm2
            create_directories
            start_ecosystem
            ;;
        "stop")
            stop_ecosystem
            ;;
        "restart")
            restart_ecosystem
            ;;
        "status")
            show_status
            ;;
        "monitor")
            monitor_ecosystem
            ;;
        "logs")
            local process_name=${2:-"all"}
            show_logs "$process_name"
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Check if script is run directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi
