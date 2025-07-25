#!/bin/bash

# Zion App - Continuous Improvement System Start Script
# This script starts the continuous improvement system with proper error handling

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if system is already running
check_if_running() {
    if pgrep -f "start.js" > /dev/null; then
        return 0
    else
        return 1
    fi
}

# Function to check environment configuration
check_environment() {
    print_status "Checking environment configuration..."
    
    if [ ! -f ".env" ]; then
        print_error ".env file not found. Please run setup first."
        exit 1
    fi
    
    # Check for placeholder API keys
    if grep -q "your_cursor_api_key_here" .env; then
        print_warning "API keys are not configured. Some features may be limited."
        print_warning "Please update .env file with your actual API keys."
    fi
    
    print_success "Environment configuration checked"
}

# Function to check dependencies
check_dependencies() {
    print_status "Checking dependencies..."
    
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run setup first."
        exit 1
    fi
    
    if [ ! -d "node_modules" ]; then
        print_warning "node_modules not found. Installing dependencies..."
        npm install
    fi
    
    print_success "Dependencies checked"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p logs
    mkdir -p backups
    
    print_success "Directories created"
}

# Function to start the system
start_system() {
    print_status "Starting Zion App Continuous Improvement System..."
    
    # Check if already running
    if check_if_running; then
        print_warning "System is already running. Stopping existing instance..."
        stop_system
        sleep 2
    fi
    
    # Start the system in background
    nohup node start.js > logs/system-startup.log 2>&1 &
    local pid=$!
    
    # Wait a moment for startup
    sleep 3
    
    # Check if process is still running
    if kill -0 $pid 2>/dev/null; then
        print_success "System started successfully (PID: $pid)"
        echo $pid > .system.pid
    else
        print_error "Failed to start system. Check logs/system-startup.log for details."
        exit 1
    fi
}

# Function to stop the system
stop_system() {
    if [ -f ".system.pid" ]; then
        local pid=$(cat .system.pid)
        if kill -0 $pid 2>/dev/null; then
            print_status "Stopping system (PID: $pid)..."
            kill $pid
            sleep 2
            
            # Force kill if still running
            if kill -0 $pid 2>/dev/null; then
                print_warning "Force stopping system..."
                kill -9 $pid
            fi
            
            rm -f .system.pid
            print_success "System stopped"
        else
            print_warning "System was not running"
            rm -f .system.pid
        fi
    else
        # Try to find and kill by process name
        local pids=$(pgrep -f "start.js" || true)
        if [ -n "$pids" ]; then
            print_status "Stopping system processes..."
            echo $pids | xargs kill
            sleep 2
            echo $pids | xargs kill -9 2>/dev/null || true
            print_success "System stopped"
        else
            print_warning "No running system found"
        fi
    fi
}

# Function to restart the system
restart_system() {
    print_status "Restarting system..."
    stop_system
    sleep 3
    start_system
}

# Function to show system status
show_status() {
    print_status "System Status:"
    
    if check_if_running; then
        local pid=$(pgrep -f "start.js" | head -1)
        local uptime=$(ps -o etime= -p "$pid" 2>/dev/null || echo "unknown")
        print_success "System is running (PID: $pid, Uptime: $uptime)"
        
        # Show recent logs
        if [ -f "logs/system-combined.log" ]; then
            echo ""
            print_status "Recent logs (last 5 lines):"
            tail -5 logs/system-combined.log | while IFS= read -r line; do
                echo "  $line"
            done
        fi
    else
        print_error "System is not running"
    fi
}

# Function to show help
show_help() {
    echo "Zion App - Continuous Improvement System"
    echo "========================================"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the continuous improvement system"
    echo "  stop      Stop the system"
    echo "  restart   Restart the system"
    echo "  status    Show system status"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start    # Start the system"
    echo "  $0 status   # Check system status"
    echo "  $0 stop     # Stop the system"
    echo ""
}

# Main function
main() {
    case "${1:-start}" in
        start)
            echo "🚀 Starting Zion App Continuous Improvement System"
            echo "=================================================="
            echo ""
            
            check_environment
            check_dependencies
            create_directories
            start_system
            
            echo ""
            print_success "System startup completed!"
            echo ""
            echo "To monitor the system:"
            echo "  tail -f logs/system-combined.log"
            echo "  npm run status"
            echo ""
            ;;
        stop)
            echo "🛑 Stopping Zion App Continuous Improvement System"
            echo "=================================================="
            echo ""
            
            stop_system
            ;;
        restart)
            echo "🔄 Restarting Zion App Continuous Improvement System"
            echo "====================================================="
            echo ""
            
            restart_system
            ;;
        status)
            show_status
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

# Handle signals
trap 'echo ""; print_status "Received interrupt signal, stopping system..."; stop_system; exit 0' INT TERM

# Run main function
main "$@" 