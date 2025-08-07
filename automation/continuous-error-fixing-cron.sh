#!/bin/bash

# Continuous Error Fixing Cron Script
# Orchestrates and manages automation systems for continuous error fixing

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
STATUS_DIR="$SCRIPT_DIR/status"

# Ensure directories exist
mkdir -p "$LOG_DIR" "$STATUS_DIR"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] $message" | tee -a "$LOG_DIR/cron-automation.log"
}

# Function to start automation systems
start_automation_systems() {
    log "INFO" "Starting automation systems..."
    
    # Start markdown linting automation
    if [ -f "$SCRIPT_DIR/markdown-linting-automation-system.js" ]; then
        log "INFO" "Starting markdown linting automation system..."
        nohup node "$SCRIPT_DIR/markdown-linting-automation-system.js" start > "$LOG_DIR/markdown-linting.log" 2>&1 &
        echo $! > "$STATUS_DIR/markdown-linting.pid"
        log "INFO" "Markdown linting automation started with PID $(cat "$STATUS_DIR/markdown-linting.pid")"
    else
        log "WARN" "Markdown linting automation system not found"
    fi
    
    # Start code quality automation
    if [ -f "$SCRIPT_DIR/code-quality-automation-system.js" ]; then
        log "INFO" "Starting code quality automation system..."
        nohup node "$SCRIPT_DIR/code-quality-automation-system.js" start > "$LOG_DIR/code-quality.log" 2>&1 &
        echo $! > "$STATUS_DIR/code-quality.pid"
        log "INFO" "Code quality automation started with PID $(cat "$STATUS_DIR/code-quality.pid")"
    else
        log "WARN" "Code quality automation system not found"
    fi
    
    # Start git hooks automation
    if [ -f "$SCRIPT_DIR/git-hooks-automation.js" ]; then
        log "INFO" "Starting git hooks automation system..."
        nohup node "$SCRIPT_DIR/git-hooks-automation.js" setup > "$LOG_DIR/git-hooks.log" 2>&1 &
        echo $! > "$STATUS_DIR/git-hooks.pid"
        log "INFO" "Git hooks automation started with PID $(cat "$STATUS_DIR/git-hooks.pid")"
    else
        log "WARN" "Git hooks automation system not found"
    fi
    
    log "INFO" "All automation systems started"
}

# Function to stop automation systems
stop_automation_systems() {
    log "INFO" "Stopping automation systems..."
    
    # Stop markdown linting automation
    if [ -f "$STATUS_DIR/markdown-linting.pid" ]; then
        local pid=$(cat "$STATUS_DIR/markdown-linting.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log "INFO" "Stopped markdown linting automation (PID: $pid)"
        else
            log "WARN" "Markdown linting automation process not running (PID: $pid)"
        fi
        rm -f "$STATUS_DIR/markdown-linting.pid"
    fi
    
    # Stop code quality automation
    if [ -f "$STATUS_DIR/code-quality.pid" ]; then
        local pid=$(cat "$STATUS_DIR/code-quality.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log "INFO" "Stopped code quality automation (PID: $pid)"
        else
            log "WARN" "Code quality automation process not running (PID: $pid)"
        fi
        rm -f "$STATUS_DIR/code-quality.pid"
    fi
    
    # Stop git hooks automation
    if [ -f "$STATUS_DIR/git-hooks.pid" ]; then
        local pid=$(cat "$STATUS_DIR/git-hooks.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log "INFO" "Stopped git hooks automation (PID: $pid)"
        else
            log "WARN" "Git hooks automation process not running (PID: $pid)"
        fi
        rm -f "$STATUS_DIR/git-hooks.pid"
    fi
    
    log "INFO" "All automation systems stopped"
}

# Function to check status
check_status() {
    log "INFO" "Checking automation systems status..."
    
    echo "=== Automation Systems Status ==="
    
    # Check markdown linting automation
    if [ -f "$STATUS_DIR/markdown-linting.pid" ]; then
        local pid=$(cat "$STATUS_DIR/markdown-linting.pid")
        if kill -0 "$pid" 2>/dev/null; then
            echo "✓ Markdown linting automation: RUNNING (PID: $pid)"
        else
            echo "✗ Markdown linting automation: STOPPED (PID: $pid)"
        fi
    else
        echo "✗ Markdown linting automation: NOT STARTED"
    fi
    
    # Check code quality automation
    if [ -f "$STATUS_DIR/code-quality.pid" ]; then
        local pid=$(cat "$STATUS_DIR/code-quality.pid")
        if kill -0 "$pid" 2>/dev/null; then
            echo "✓ Code quality automation: RUNNING (PID: $pid)"
        else
            echo "✗ Code quality automation: STOPPED (PID: $pid)"
        fi
    else
        echo "✗ Code quality automation: NOT STARTED"
    fi
    
    # Check git hooks automation
    if [ -f "$STATUS_DIR/git-hooks.pid" ]; then
        local pid=$(cat "$STATUS_DIR/git-hooks.pid")
        if kill -0 "$pid" 2>/dev/null; then
            echo "✓ Git hooks automation: RUNNING (PID: $pid)"
        else
            echo "✗ Git hooks automation: STOPPED (PID: $pid)"
        fi
    else
        echo "✗ Git hooks automation: NOT STARTED"
    fi
    
    echo "================================"
}

# Function to run a single fix cycle
run_fix_cycle() {
    log "INFO" "Running single fix cycle..."
    
    cd "$PROJECT_ROOT"
    
    # Run markdown linting fix
    if [ -f "$SCRIPT_DIR/markdown-linting-automation-system.js" ]; then
        log "INFO" "Running markdown linting fix cycle..."
        node "$SCRIPT_DIR/markdown-linting-automation-system.js" fix
    fi
    
    # Run code quality fix
    if [ -f "$SCRIPT_DIR/code-quality-automation-system.js" ]; then
        log "INFO" "Running code quality fix cycle..."
        node "$SCRIPT_DIR/code-quality-automation-system.js" fix
    fi
    
    log "INFO" "Fix cycle completed"
}

# Function to install dependencies
install_dependencies() {
    log "INFO" "Installing automation dependencies..."
    
    cd "$PROJECT_ROOT"
    
    # Install Node.js dependencies
    if [ -f "package.json" ]; then
        log "INFO" "Installing npm dependencies..."
        npm install --save-dev markdownlint-cli eslint prettier chokidar
    fi
    
    # Install git hooks dependencies
    if [ -f "package.json" ]; then
        log "INFO" "Installing git hooks dependencies..."
        npm install --save-dev husky lint-staged
    fi
    
    log "INFO" "Dependencies installed successfully"
}

# Function to setup git hooks
setup_git_hooks() {
    log "INFO" "Setting up git hooks..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "$SCRIPT_DIR/git-hooks-automation.js" ]; then
        node "$SCRIPT_DIR/git-hooks-automation.js" setup
        log "INFO" "Git hooks setup completed"
    else
        log "WARN" "Git hooks automation system not found"
    fi
}

# Function to show logs
show_logs() {
    local system="$1"
    
    case "$system" in
        "markdown")
            if [ -f "$LOG_DIR/markdown-linting.log" ]; then
                tail -f "$LOG_DIR/markdown-linting.log"
            else
                log "WARN" "Markdown linting log not found"
            fi
            ;;
        "code-quality")
            if [ -f "$LOG_DIR/code-quality.log" ]; then
                tail -f "$LOG_DIR/code-quality.log"
            else
                log "WARN" "Code quality log not found"
            fi
            ;;
        "git-hooks")
            if [ -f "$LOG_DIR/git-hooks.log" ]; then
                tail -f "$LOG_DIR/git-hooks.log"
            else
                log "WARN" "Git hooks log not found"
            fi
            ;;
        "cron")
            if [ -f "$LOG_DIR/cron-automation.log" ]; then
                tail -f "$LOG_DIR/cron-automation.log"
            else
                log "WARN" "Cron automation log not found"
            fi
            ;;
        *)
            log "ERROR" "Unknown log type: $system"
            log "INFO" "Available logs: markdown, code-quality, git-hooks, cron"
            ;;
    esac
}

# Main function
main() {
    local command="$1"
    local arg="$2"
    
    case "$command" in
        "start")
            start_automation_systems
            ;;
        "stop")
            stop_automation_systems
            ;;
        "restart")
            stop_automation_systems
            sleep 2
            start_automation_systems
            ;;
        "status")
            check_status
            ;;
        "fix")
            run_fix_cycle
            ;;
        "install")
            install_dependencies
            ;;
        "setup-hooks")
            setup_git_hooks
            ;;
        "logs")
            show_logs "$arg"
            ;;
        "help"|"--help"|"-h"|"")
            echo "Usage: $0 [command] [options]"
            echo ""
            echo "Commands:"
            echo "  start         - Start all automation systems"
            echo "  stop          - Stop all automation systems"
            echo "  restart       - Restart all automation systems"
            echo "  status        - Check status of automation systems"
            echo "  fix           - Run a single fix cycle"
            echo "  install       - Install required dependencies"
            echo "  setup-hooks   - Setup git hooks"
            echo "  logs [type]   - Show logs (markdown|code-quality|git-hooks|cron)"
            echo "  help          - Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0 start"
            echo "  $0 status"
            echo "  $0 logs markdown"
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            log "INFO" "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
