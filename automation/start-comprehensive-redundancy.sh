#!/bin/bash

# Comprehensive Redundancy Automation System Startup Script
# This script starts all redundancy automation components for PM2, GitHub Actions, and Netlify Functions

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
LOG_DIR="$PROJECT_ROOT/automation/logs"
COMPREHENSIVE_ECOSYSTEM="$PROJECT_ROOT/ecosystem.comprehensive-redundancy.cjs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "DEBUG")
            echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${CYAN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        "HEADER")
            echo -e "${PURPLE}[$timestamp] [HEADER]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/comprehensive-redundancy-startup.log"
}

# Print banner
print_banner() {
    echo -e "${PURPLE}"
    echo "╔══════════════════════════════════════════════════════════════════════════════╗"
    echo "║                    COMPREHENSIVE REDUNDANCY AUTOMATION SYSTEM               ║"
    echo "║                                                                              ║"
    echo "║  PM2 Redundancy • GitHub Actions Redundancy • Netlify Functions Redundancy  ║"
    echo "╚══════════════════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
    log "SUCCESS" "PM2 is available"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "SUCCESS" "Node.js version: $node_version"
}

# Check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed or not in PATH"
        exit 1
    fi
    
    local npm_version=$(npm --version)
    log "SUCCESS" "npm version: $npm_version"
}

# Check project dependencies
check_dependencies() {
    log "INFO" "Checking project dependencies..."
    
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        log "ERROR" "package.json not found in project root"
        exit 1
    fi
    
    if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
        log "WARN" "node_modules not found, installing dependencies..."
        cd "$PROJECT_ROOT"
        npm install
        if [ $? -ne 0 ]; then
            log "ERROR" "Failed to install dependencies"
            exit 1
        fi
        log "SUCCESS" "Dependencies installed successfully"
    else
        log "SUCCESS" "Dependencies are already installed"
    fi
}

# Check if required automation scripts exist
check_automation_scripts() {
    log "INFO" "Checking automation scripts..."
    
    local scripts=(
        "comprehensive-redundancy-system.cjs"
        "comprehensive-pm2-redundancy.cjs"
        "comprehensive-github-actions-redundancy.cjs"
        "comprehensive-netlify-functions-redundancy.cjs"
    )
    
    local missing_scripts=()
    
    for script in "${scripts[@]}"; do
        if [ ! -f "$SCRIPT_DIR/$script" ]; then
            missing_scripts+=("$script")
        fi
    done
    
    if [ ${#missing_scripts[@]} -gt 0 ]; then
        log "ERROR" "Missing automation scripts: ${missing_scripts[*]}"
        exit 1
    fi
    
    log "SUCCESS" "All required automation scripts are present"
}

# Create comprehensive ecosystem file
create_comprehensive_ecosystem() {
    log "INFO" "Creating comprehensive redundancy ecosystem file..."
    
    local ecosystem_content="module.exports = {
  apps: [
    {
      name: \"comprehensive-redundancy-system\",
      script: \"automation/comprehensive-redundancy-system.cjs\",
      interpreter: \"node\",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: \"production\",
        REDUNDANCY_LOG_LEVEL: \"INFO\",
        REDUNDANCY_PM2_CHECK_INTERVAL: \"30000\",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: \"60000\",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: \"120000\"
      },
      log_date_format: \"YYYY-MM-DD HH:mm:ss Z\",
      error_file: \"automation/logs/comprehensive-redundancy-error.log\",
      out_file: \"automation/logs/comprehensive-redundancy-out.log\",
      time: true,
      instances: 1,
      exec_mode: \"fork\"
    },
    {
      name: \"comprehensive-pm2-redundancy\",
      script: \"automation/comprehensive-pm2-redundancy.cjs\",
      interpreter: \"node\",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: \"production\",
        PM2_REDUNDANCY_LOG_LEVEL: \"INFO\"
      },
      log_date_format: \"YYYY-MM-DD HH:mm:ss Z\",
      error_file: \"automation/logs/comprehensive-pm2-redundancy-error.log\",
      out_file: \"automation/logs/comprehensive-pm2-redundancy-out.log\",
      time: true,
      instances: 1,
      exec_mode: \"fork\"
    },
    {
      name: \"comprehensive-github-actions-redundancy\",
      script: \"automation/comprehensive-github-actions-redundancy.cjs\",
      interpreter: \"node\",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: \"production\",
        GITHUB_ACTIONS_REDUNDANCY_LOG_LEVEL: \"INFO\"
      },
      log_date_format: \"YYYY-MM-DD HH:mm:ss Z\",
      error_file: \"automation/logs/comprehensive-github-actions-redundancy-error.log\",
      out_file: \"automation/logs/comprehensive-github-actions-redundancy-out.log\",
      time: true,
      instances: 1,
      exec_mode: \"fork\"
    },
    {
      name: \"comprehensive-netlify-functions-redundancy\",
      script: \"automation/comprehensive-netlify-functions-redundancy.cjs\",
      interpreter: \"node\",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: \"production\",
        NETLIFY_FUNCTIONS_REDUNDANCY_LOG_LEVEL: \"INFO\"
      },
      log_date_format: \"YYYY-MM-DD HH:mm:ss Z\",
      error_file: \"automation/logs/comprehensive-netlify-functions-redundancy-error.log\",
      out_file: \"automation/logs/comprehensive-netlify-functions-redundancy-out.log\",
      time: true,
      instances: 1,
      exec_mode: \"fork\"
    }
  ]
};"
    
    echo "$ecosystem_content" > "$COMPREHENSIVE_ECOSYSTEM"
    log "SUCCESS" "Comprehensive redundancy ecosystem file created: $COMPREHENSIVE_ECOSYSTEM"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "INFO" "Stopping existing PM2 processes..."
    
    # Check if PM2 is running
    if pm2 list | grep -q "online\|errored\|stopped"; then
        log "INFO" "Stopping all PM2 processes..."
        pm2 kill
        log "SUCCESS" "All PM2 processes stopped"
    else
        log "INFO" "No PM2 processes running"
    fi
}

# Start comprehensive redundancy system
start_comprehensive_system() {
    log "INFO" "Starting comprehensive redundancy system..."
    
    # Start the comprehensive ecosystem
    cd "$PROJECT_ROOT"
    pm2 start "$COMPREHENSIVE_ECOSYSTEM"
    
    if [ $? -eq 0 ]; then
        log "SUCCESS" "Comprehensive redundancy system started successfully"
    else
        log "ERROR" "Failed to start comprehensive redundancy system"
        exit 1
    fi
}

# Save PM2 configuration
save_pm2_config() {
    log "INFO" "Saving PM2 configuration..."
    
    pm2 save
    
    if [ $? -eq 0 ]; then
        log "SUCCESS" "PM2 configuration saved"
    else
        log "WARN" "Failed to save PM2 configuration"
    fi
}

# Display system status
display_status() {
    log "HEADER" "Comprehensive Redundancy System Status"
    echo
    
    # Show PM2 status
    log "INFO" "PM2 Process Status:"
    pm2 status
    
    echo
    
    # Show logs
    log "INFO" "Recent logs from comprehensive redundancy system:"
    pm2 logs comprehensive-redundancy-system --lines 10 --nostream || true
    
    echo
    
    # Show startup log
    if [ -f "$LOG_DIR/comprehensive-redundancy-startup.log" ]; then
        log "INFO" "Startup log (last 10 lines):"
        tail -n 10 "$LOG_DIR/comprehensive-redundancy-startup.log"
    fi
}

# Setup PM2 logrotate
setup_pm2_logrotate() {
    log "INFO" "Setting up PM2 logrotate..."
    
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M || true
    pm2 set pm2-logrotate:retain 30 || true
    pm2 set pm2-logrotate:compress true || true
    pm2 set pm2-logrotate:workerInterval 60 || true
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *' || true
    
    log "SUCCESS" "PM2 logrotate configured"
}

# Create management scripts
create_management_scripts() {
    log "INFO" "Creating management scripts..."
    
    # Create status script
    local status_script="$SCRIPT_DIR/comprehensive-redundancy-status.sh"
    cat > "$status_script" << 'EOF'
#!/bin/bash
# Comprehensive Redundancy System Status Script

cd "$(dirname "$0")/.."

echo "=== COMPREHENSIVE REDUNDANCY SYSTEM STATUS ==="
echo

echo "PM2 Process Status:"
pm2 status

echo
echo "=== LOG FILES ==="
echo "Comprehensive Redundancy System:"
pm2 logs comprehensive-redundancy-system --lines 5 --nostream || true

echo
echo "PM2 Redundancy:"
pm2 logs comprehensive-pm2-redundancy --lines 5 --nostream || true

echo
echo "GitHub Actions Redundancy:"
pm2 logs comprehensive-github-actions-redundancy --lines 5 --nostream || true

echo
echo "Netlify Functions Redundancy:"
pm2 logs comprehensive-netlify-functions-redundancy --lines 5 --nostream || true
EOF

    chmod +x "$status_script"
    log "SUCCESS" "Status script created: $status_script"
    
    # Create restart script
    local restart_script="$SCRIPT_DIR/comprehensive-redundancy-restart.sh"
    cat > "$restart_script" << 'EOF'
#!/bin/bash
# Comprehensive Redundancy System Restart Script

cd "$(dirname "$0")/.."

echo "Restarting comprehensive redundancy system..."
pm2 restart ecosystem.comprehensive-redundancy.cjs

echo "System restarted. Check status with: ./automation/comprehensive-redundancy-status.sh"
EOF

    chmod +x "$restart_script"
    log "SUCCESS" "Restart script created: $restart_script"
    
    # Create stop script
    local stop_script="$SCRIPT_DIR/comprehensive-redundancy-stop.sh"
    cat > "$stop_script" << 'EOF'
#!/bin/bash
# Comprehensive Redundancy System Stop Script

cd "$(dirname "$0")/.."

echo "Stopping comprehensive redundancy system..."
pm2 stop ecosystem.comprehensive-redundancy.cjs

echo "System stopped."
EOF

    chmod +x "$stop_script"
    log "SUCCESS" "Stop script created: $stop_script"
}

# Main execution
main() {
    print_banner
    
    log "HEADER" "Starting Comprehensive Redundancy Automation System"
    log "INFO" "Project Root: $PROJECT_ROOT"
    log "INFO" "Script Directory: $SCRIPT_DIR"
    log "INFO" "Log Directory: $LOG_DIR"
    
    echo
    
    # Pre-flight checks
    log "INFO" "Performing pre-flight checks..."
    check_pm2
    check_node
    check_npm
    check_dependencies
    check_automation_scripts
    
    echo
    
    # Setup
    log "INFO" "Setting up comprehensive redundancy system..."
    create_comprehensive_ecosystem
    setup_pm2_logrotate
    create_management_scripts
    
    echo
    
    # Start system
    log "INFO" "Starting comprehensive redundancy system..."
    stop_existing_processes
    start_comprehensive_system
    save_pm2_config
    
    echo
    
    # Display status
    display_status
    
    echo
    log "SUCCESS" "Comprehensive Redundancy Automation System is now running!"
    log "INFO" "Use the following commands to manage the system:"
    log "INFO" "  Status:   ./automation/comprehensive-redundancy-status.sh"
    log "INFO" "  Restart:  ./automation/comprehensive-redundancy-restart.sh"
    log "INFO" "  Stop:     ./automation/comprehensive-redundancy-stop.sh"
    log "INFO" "  Logs:     pm2 logs"
    echo
    log "INFO" "All automation systems are now covered by redundancy:"
    log "INFO" "  ✓ PM2 Process Management"
    log "INFO" "  ✓ GitHub Actions Workflows"
    log "INFO" "  ✓ Netlify Functions"
    echo
    log "SUCCESS" "Redundancy automation setup complete!"
}

# Run main function
main "$@"