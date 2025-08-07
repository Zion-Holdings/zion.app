#!/bin/bash

# Continuous Error Fixing Cron Job
# Runs automation systems to continuously fix code quality errors

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
STATUS_DIR="$SCRIPT_DIR/status"

# Create necessary directories
mkdir -p "$LOG_DIR"
mkdir -p "$STATUS_DIR"

# Log file
LOG_FILE="$LOG_DIR/continuous-error-fixing.log"
PID_FILE="$STATUS_DIR/continuous-error-fixing.pid"

# Function to log messages
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Function to check if process is running
is_running() {
    local pid="$1"
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
        return 0
    else
        return 1
    fi
}

# Function to start automation systems
start_automation_systems() {
    log "INFO" "Starting continuous error fixing automation systems..."
    
    cd "$PROJECT_ROOT"
    
    # Start markdown linting automation
    if [ ! -f "$STATUS_DIR/markdown-linting.pid" ] || ! is_running "$(cat "$STATUS_DIR/markdown-linting.pid" 2>/dev/null)"; then
        log "INFO" "Starting markdown linting automation system..."
        nohup node "$SCRIPT_DIR/markdown-linting-automation-system.js" start > "$LOG_DIR/markdown-linting.log" 2>&1 &
        echo $! > "$STATUS_DIR/markdown-linting.pid"
        log "INFO" "Markdown linting automation started with PID $!"
    else
        log "INFO" "Markdown linting automation is already running"
    fi
    
    # Start code quality automation
    if [ ! -f "$STATUS_DIR/code-quality.pid" ] || ! is_running "$(cat "$STATUS_DIR/code-quality.pid" 2>/dev/null)"; then
        log "INFO" "Starting code quality automation system..."
        nohup node "$SCRIPT_DIR/code-quality-automation-system.js" start > "$LOG_DIR/code-quality.log" 2>&1 &
        echo $! > "$STATUS_DIR/code-quality.pid"
        log "INFO" "Code quality automation started with PID $!"
    else
        log "INFO" "Code quality automation is already running"
    fi
    
    # Start git hooks automation
    if [ ! -f "$STATUS_DIR/git-hooks.pid" ] || ! is_running "$(cat "$STATUS_DIR/git-hooks.pid" 2>/dev/null)"; then
        log "INFO" "Starting git hooks automation..."
        nohup node "$SCRIPT_DIR/git-hooks-automation.js" start > "$LOG_DIR/git-hooks.log" 2>&1 &
        echo $! > "$STATUS_DIR/git-hooks.pid"
        log "INFO" "Git hooks automation started with PID $!"
    else
        log "INFO" "Git hooks automation is already running"
    fi
}

# Function to stop automation systems
stop_automation_systems() {
    log "INFO" "Stopping continuous error fixing automation systems..."
    
    # Stop markdown linting automation
    if [ -f "$STATUS_DIR/markdown-linting.pid" ]; then
        local pid=$(cat "$STATUS_DIR/markdown-linting.pid")
        if is_running "$pid"; then
            log "INFO" "Stopping markdown linting automation (PID: $pid)..."
            kill "$pid"
            rm -f "$STATUS_DIR/markdown-linting.pid"
        fi
    fi
    
    # Stop code quality automation
    if [ -f "$STATUS_DIR/code-quality.pid" ]; then
        local pid=$(cat "$STATUS_DIR/code-quality.pid")
        if is_running "$pid"; then
            log "INFO" "Stopping code quality automation (PID: $pid)..."
            kill "$pid"
            rm -f "$STATUS_DIR/code-quality.pid"
        fi
    fi
    
    # Stop git hooks automation
    if [ -f "$STATUS_DIR/git-hooks.pid" ]; then
        local pid=$(cat "$STATUS_DIR/git-hooks.pid")
        if is_running "$pid"; then
            log "INFO" "Stopping git hooks automation (PID: $pid)..."
            kill "$pid"
            rm -f "$STATUS_DIR/git-hooks.pid"
        fi
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
        if is_running "$pid"; then
            echo "✅ Markdown Linting Automation: Running (PID: $pid)"
        else
            echo "❌ Markdown Linting Automation: Not running (stale PID: $pid)"
        fi
    else
        echo "❌ Markdown Linting Automation: Not running"
    fi
    
    # Check code quality automation
    if [ -f "$STATUS_DIR/code-quality.pid" ]; then
        local pid=$(cat "$STATUS_DIR/code-quality.pid")
        if is_running "$pid"; then
            echo "✅ Code Quality Automation: Running (PID: $pid)"
        else
            echo "❌ Code Quality Automation: Not running (stale PID: $pid)"
        fi
    else
        echo "❌ Code Quality Automation: Not running"
    fi
    
    # Check git hooks automation
    if [ -f "$STATUS_DIR/git-hooks.pid" ]; then
        local pid=$(cat "$STATUS_DIR/git-hooks.pid")
        if is_running "$pid"; then
            echo "✅ Git Hooks Automation: Running (PID: $pid)"
        else
            echo "❌ Git Hooks Automation: Not running (stale PID: $pid)"
        fi
    else
        echo "❌ Git Hooks Automation: Not running"
    fi
    
    echo "================================"
}

# Function to run a single fix cycle
run_fix_cycle() {
    log "INFO" "Running single fix cycle..."
    
    cd "$PROJECT_ROOT"
    
    # Run markdown fixes
    log "INFO" "Running markdown fixes..."
    node "$SCRIPT_DIR/markdown-linting-automation-system.js" fix
    
    # Run code quality fixes
    log "INFO" "Running code quality fixes..."
    node "$SCRIPT_DIR/code-quality-automation-system.js" fix
    
    log "INFO" "Fix cycle completed"
}

# Function to install dependencies
install_dependencies() {
    log "INFO" "Installing automation dependencies..."
    
    cd "$PROJECT_ROOT"
    
    # Install Node.js dependencies
    npm install --save-dev markdownlint-cli eslint prettier chokidar
    
    # Install git hooks
    npm install --save-dev husky lint-staged
    
    log "INFO" "Dependencies installed successfully"
}

# Function to setup git hooks
setup_git_hooks() {
    log "INFO" "Setting up git hooks..."
    
    cd "$PROJECT_ROOT"
    
    # Initialize husky
    npx husky install
    
    # Add pre-commit hook
    npx husky add .husky/pre-commit "npm run lint && npm run type-check"
    
    # Add pre-push hook
    npx husky add .husky/pre-push "npm run test"
    
    log "INFO" "Git hooks setup completed"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start       - Start all automation systems"
    echo "  stop        - Stop all automation systems"
    echo "  restart     - Restart all automation systems"
    echo "  status      - Check status of automation systems"
    echo "  fix         - Run a single fix cycle"
    echo "  install     - Install dependencies"
    echo "  setup-hooks - Setup git hooks"
    echo "  help        - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 fix"
}

# Main script logic
case "${1:-help}" in
    start)
        start_automation_systems
        log "INFO" "Continuous error fixing automation systems started"
        ;;
    stop)
        stop_automation_systems
        log "INFO" "Continuous error fixing automation systems stopped"
        ;;
    restart)
        stop_automation_systems
        sleep 2
        start_automation_systems
        log "INFO" "Continuous error fixing automation systems restarted"
        ;;
    status)
        check_status
        ;;
    fix)
        run_fix_cycle
        ;;
    install)
        install_dependencies
        ;;
    setup-hooks)
        setup_git_hooks
        ;;
    help|--help|-h)
        show_usage
        ;;
    *)
        echo "Unknown command: $1"
        show_usage
        exit 1
        ;;
esac
