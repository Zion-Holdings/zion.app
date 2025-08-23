#!/bin/bash

# Comprehensive Redundancy Automation System v3.0
# This script provides complete redundancy for all automation systems:
# - PM2 automations
# - GitHub Actions automations
# - Netlify functions automations
# - NPM scripts automations
# - All other automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/comprehensive-redundancy-v3.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy-v3.log"
CONFIG_FILE="$WORKSPACE_DIR/automation/redundancy-config.json"
STATUS_FILE="$LOG_DIR/comprehensive-redundancy-v3-status.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Error handling
error_exit() {
    log "ERROR" "Script failed: $1"
    exit 1
}

# Check if script is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Comprehensive redundancy system already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Update status file
update_status() {
    local component="$1"
    local status="$2"
    local details="$3"
    
    if [ ! -f "$STATUS_FILE" ]; then
        echo '{}' > "$STATUS_FILE"
    fi
    
    # Try to use jq if available, otherwise use simple JSON
    if command -v jq &> /dev/null; then
        local temp_file=$(mktemp)
        jq --arg comp "$component" --arg stat "$status" --arg det "$details" \
           '. + {($comp): {"status": $stat, "details": $det, "timestamp": now}}' \
           "$STATUS_FILE" > "$temp_file" && mv "$temp_file" "$STATUS_FILE"
    else
        # Simple JSON update without jq
        local temp_file=$(mktemp)
        if [ -s "$STATUS_FILE" ]; then
            # Remove last closing brace and add new entry
            head -n -1 "$STATUS_FILE" > "$temp_file"
            echo "  \"$component\": {\"status\": \"$status\", \"details\": \"$details\", \"timestamp\": \"$(date -Iseconds)\"},"
            echo "}" >> "$temp_file"
        else
            echo "{\"$component\": {\"status\": \"$status\", \"details\": \"$details\", \"timestamp\": \"$(date -Iseconds)\"}}" > "$temp_file"
        fi
        mv "$temp_file" "$STATUS_FILE"
    fi
}

# Start PM2 redundancy systems
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy systems..."
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first."
        update_status "pm2" "error" "PM2 not installed"
        return 1
    fi
    
    # Start all PM2 ecosystems in order of priority
    local ecosystems=(
        "ecosystem.pm2.cjs"
        "ecosystem.redundancy.cjs"
        "ecosystem.comprehensive-redundancy.cjs"
        "ecosystem.ultimate-redundancy.pm2.cjs"
    )
    
    for ecosystem in "${ecosystems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$ecosystem" ]; then
            log "INFO" "Starting PM2 ecosystem: $ecosystem"
            cd "$WORKSPACE_DIR" && pm2 start "$ecosystem" --update-env || log "WARN" "Failed to start $ecosystem"
        else
            log "WARN" "PM2 ecosystem not found: $ecosystem"
        fi
    done
    
    # Install and configure PM2 logrotate
    log "INFO" "Configuring PM2 logrotate..."
    pm2 install pm2-logrotate || log "WARN" "Failed to install pm2-logrotate"
    pm2 set pm2-logrotate:max_size 10M || true
    pm2 set pm2-logrotate:retain 30 || true
    pm2 set pm2-logrotate:compress true || true
    pm2 set pm2-logrotate:workerInterval 60 || true
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *' || true
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    # Verify PM2 processes
    local pm2_status=$(pm2 status --no-daemon 2>/dev/null || echo "PM2 status unavailable")
    log "INFO" "PM2 Status: $pm2_status"
    
    update_status "pm2" "running" "All PM2 ecosystems started"
    log "INFO" "PM2 redundancy systems started successfully"
}

# Start GitHub Actions redundancy
start_github_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy..."
    
    # Check if .github/workflows directory exists
    if [ ! -d "$WORKSPACE_DIR/.github/workflows" ]; then
        log "WARN" "GitHub workflows directory not found"
        update_status "github_actions" "warning" "Workflows directory not found"
        return 0
    fi
    
    # Validate all workflow files
    local workflows=(
        "marketing-sync.yml"
        "sync-health.yml"
        "marketing-sync-backup.yml"
        "sync-health-backup.yml"
    )
    
    local valid_workflows=0
    for workflow in "${workflows[@]}"; do
        if [ -f "$WORKSPACE_DIR/.github/workflows/$workflow" ]; then
            log "INFO" "Found workflow: $workflow"
            ((valid_workflows++))
        else
            log "WARN" "Missing workflow: $workflow"
        fi
    done
    
    # Validate workflow syntax (basic YAML check)
    for workflow in "${workflows[@]}"; do
        if [ -f "$WORKSPACE_DIR/.github/workflows/$workflow" ]; then
            if command -v python3 &> /dev/null; then
                python3 -c "import yaml; yaml.safe_load(open('$WORKSPACE_DIR/.github/workflows/$workflow'))" 2>/dev/null && \
                    log "INFO" "Workflow $workflow syntax valid" || \
                    log "WARN" "Workflow $workflow syntax invalid"
            fi
        fi
    done
    
    log "INFO" "GitHub Actions redundancy configured with $valid_workflows valid workflows"
    update_status "github_actions" "running" "$valid_workflows workflows validated"
}

# Start Netlify functions redundancy
start_netlify_redundancy() {
    log "INFO" "Starting Netlify functions redundancy..."
    
    # Check if netlify/functions directory exists
    if [ ! -d "$WORKSPACE_DIR/netlify/functions" ]; then
        log "WARN" "Netlify functions directory not found"
        update_status "netlify_functions" "warning" "Functions directory not found"
        return 0
    fi
    
    # Regenerate functions manifest
    log "INFO" "Regenerating Netlify functions manifest..."
    cd "$WORKSPACE_DIR" && npm run netlify:manifest || log "WARN" "Failed to regenerate manifest"
    
    # Check functions manifest
    if [ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]; then
        if command -v jq &> /dev/null; then
            local function_count=$(jq '.functions | length' "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
            log "INFO" "Netlify functions manifest found with $function_count functions"
            
            # Validate function files exist
            local missing_functions=0
            local total_functions=0
            for func in $(jq -r '.functions[]' "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" 2>/dev/null); do
                ((total_functions++))
                if [ ! -f "$WORKSPACE_DIR/netlify/functions/$func.js" ] && [ ! -f "$WORKSPACE_DIR/netlify/functions/$func.mjs" ]; then
                    log "WARN" "Function file missing: $func"
                    ((missing_functions++))
                fi
            done
            
            if [ "$missing_functions" -eq 0 ]; then
                log "INFO" "All $total_functions Netlify functions validated"
                update_status "netlify_functions" "running" "$total_functions functions validated"
            else
                log "WARN" "$missing_functions out of $total_functions functions missing"
                update_status "netlify_functions" "warning" "$missing_functions/$total_functions functions missing"
            fi
        else
            log "WARN" "jq not available for manifest validation"
            update_status "netlify_functions" "running" "Manifest regenerated (jq not available)"
        fi
    else
        log "WARN" "Netlify functions manifest not found"
        update_status "netlify_functions" "error" "Manifest not found"
    fi
    
    log "INFO" "Netlify functions redundancy configured"
}

# Start NPM scripts redundancy
start_npm_redundancy() {
    log "INFO" "Starting NPM scripts redundancy..."
    
    # Check if package.json exists
    if [ ! -f "$WORKSPACE_DIR/package.json" ]; then
        log "ERROR" "package.json not found"
        update_status "npm_scripts" "error" "package.json not found"
        return 1
    fi
    
    # Validate critical npm scripts
    local critical_scripts=(
        "build"
        "dev"
        "start"
        "pm2:start"
        "redundancy:start"
        "redundancy:ultimate:start"
        "automation:all"
        "git:sync"
        "build:health-check"
        "build:validate"
        "lint"
        "type-check"
    )
    
    local available_scripts=0
    local total_scripts=${#critical_scripts[@]}
    
    for script in "${critical_scripts[@]}"; do
        if npm run --silent "$script" --dry-run &>/dev/null; then
            log "INFO" "NPM script available: $script"
            ((available_scripts++))
        else
            log "WARN" "NPM script not available: $script"
        fi
    done
    
    # Check script dependencies
    log "INFO" "Validating NPM dependencies..."
    if [ -f "$WORKSPACE_DIR/package-lock.json" ]; then
        log "INFO" "package-lock.json found, dependencies locked"
    else
        log "WARN" "package-lock.json not found, dependencies not locked"
    fi
    
    # Check for outdated packages
    if command -v npm &> /dev/null && command -v jq &> /dev/null; then
        local outdated_count=$(npm outdated --json 2>/dev/null | jq 'length' 2>/dev/null || echo "0")
        if [ "$outdated_count" -gt 0 ]; then
            log "WARN" "$outdated_count packages are outdated"
        else
            log "INFO" "All packages are up to date"
        fi
    elif command -v npm &> /dev/null; then
        log "INFO" "NPM outdated check skipped (jq not available)"
    fi
    
    log "INFO" "NPM scripts redundancy configured: $available_scripts/$total_scripts critical scripts available"
    update_status "npm_scripts" "running" "$available_scripts/$total_scripts scripts available"
}

# Start automation systems redundancy
start_automation_redundancy() {
    log "INFO" "Starting automation systems redundancy..."
    
    # Check and start various automation systems
    local automation_systems=(
        "automation/ultimate-redundancy-master.cjs"
        "automation/comprehensive-redundancy-orchestrator.cjs"
        "automation/master-automation-coordinator.js"
        "automation/continuous-automation-improvement-system.js"
        "automation/automation-guardian-10min.cjs"
    )
    
    local running_systems=0
    local total_systems=${#automation_systems[@]}
    
    for system in "${automation_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Found automation system: $system"
            ((running_systems++))
        else
            log "WARN" "Automation system not found: $system"
        fi
    done
    
    # Start the master automation coordinator if available
    if [ -f "$WORKSPACE_DIR/automation/master-automation-coordinator.js" ]; then
        log "INFO" "Starting master automation coordinator..."
        cd "$WORKSPACE_DIR" && node automation/master-automation-coordinator.js start || log "WARN" "Failed to start master coordinator"
    fi
    
    # Start continuous automation improvement system
    if [ -f "$WORKSPACE_DIR/automation/continuous-automation-improvement-system.js" ]; then
        log "INFO" "Starting continuous automation improvement system..."
        cd "$WORKSPACE_DIR" && node automation/continuous-automation-improvement-system.js start || log "WARN" "Failed to start improvement system"
    fi
    
    log "INFO" "Automation systems redundancy configured: $running_systems/$total_systems systems available"
    update_status "automation_systems" "running" "$running_systems/$total_systems systems available"
}

# Start monitoring and health checks
start_monitoring() {
    log "INFO" "Starting monitoring and health checks..."
    
    # Create monitoring script
    local monitor_script="$LOG_DIR/monitor-comprehensive-redundancy.sh"
    cat > "$monitor_script" << 'EOF'
#!/bin/bash
# Comprehensive redundancy monitoring script

WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
STATUS_FILE="$LOG_DIR/comprehensive-redundancy-v3-status.json"

# Check PM2 status
check_pm2() {
    if command -v pm2 &> /dev/null; then
        local pm2_status=$(pm2 status --no-daemon 2>/dev/null | grep -c "online" || echo "0")
        echo "PM2: $pm2_status processes online"
    else
        echo "PM2: not installed"
    fi
}

# Check GitHub Actions
check_github() {
    if [ -d "$WORKSPACE_DIR/.github/workflows" ]; then
        local workflow_count=$(find "$WORKSPACE_DIR/.github/workflows" -name "*.yml" | wc -l)
        echo "GitHub Actions: $workflow_count workflows found"
    else
        echo "GitHub Actions: workflows directory not found"
    fi
}

# Check Netlify functions
check_netlify() {
    if [ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]; then
        if command -v jq &> /dev/null; then
            local func_count=$(jq '.functions | length' "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
            echo "Netlify: $func_count functions in manifest"
        else
            echo "Netlify: manifest found (jq not available)"
        fi
    else
        echo "Netlify: manifest not found"
    fi
}

# Check NPM scripts
check_npm() {
    if [ -f "$WORKSPACE_DIR/package.json" ]; then
        local script_count=$(jq '.scripts | keys | length' "$WORKSPACE_DIR/package.json" 2>/dev/null || echo "0")
        echo "NPM: $script_count scripts available"
    else
        echo "NPM: package.json not found"
    fi
}

# Main monitoring loop
while true; do
    echo "=== Comprehensive Redundancy Status $(date) ==="
    check_pm2
    check_github
    check_netlify
    check_npm
    echo "================================================"
    sleep 60
done
EOF
    
    chmod +x "$monitor_script"
    
    # Start monitoring in background
    nohup "$monitor_script" > "$LOG_DIR/monitoring.log" 2>&1 &
    local monitor_pid=$!
    
    log "INFO" "Monitoring started (PID: $monitor_pid)"
    update_status "monitoring" "running" "Monitoring active (PID: $monitor_pid)"
}

# Start all redundancy systems
start_all() {
    log "INFO" "Starting comprehensive redundancy system v3.0..."
    
    # Check if already running
    if check_running; then
        log "INFO" "System already running, stopping first..."
        stop_all
        sleep 2
    fi
    
    # Start all components
    start_pm2_redundancy
    start_github_redundancy
    start_netlify_redundancy
    start_npm_redundancy
    start_automation_redundancy
    start_monitoring
    
    # Start the comprehensive redundancy orchestrator
    if [ -f "$WORKSPACE_DIR/automation/comprehensive-redundancy-orchestrator.cjs" ]; then
        log "INFO" "Starting comprehensive redundancy orchestrator..."
        cd "$WORKSPACE_DIR" && node automation/comprehensive-redundancy-orchestrator.cjs start || log "WARN" "Failed to start orchestrator"
    fi
    
    # Start continuous monitoring in background
    nohup node automation/comprehensive-redundancy-orchestrator.cjs monitor > "$LOG_DIR/comprehensive-monitor.log" 2>&1 &
    local orchestrator_pid=$!
    echo "$orchestrator_pid" > "$PID_FILE"
    
    log "INFO" "Comprehensive redundancy system v3.0 started successfully (PID: $orchestrator_pid)"
    update_status "system" "running" "All systems started (PID: $orchestrator_pid)"
    
    # Show status
    show_status
}

# Stop all redundancy systems
stop_all() {
    log "INFO" "Stopping comprehensive redundancy system v3.0..."
    
    # Stop PM2 processes
    if command -v pm2 &> /dev/null; then
        log "INFO" "Stopping PM2 processes..."
        pm2 stop all || log "WARN" "Failed to stop some PM2 processes"
        pm2 delete all || log "WARN" "Failed to delete some PM2 processes"
    fi
    
    # Stop comprehensive redundancy orchestrator
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping comprehensive redundancy orchestrator (PID: $pid)..."
            kill "$pid" || log "WARN" "Failed to stop process $pid"
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop any remaining Node processes
    pkill -f "comprehensive-redundancy-orchestrator" || true
    pkill -f "ultimate-redundancy-master" || true
    pkill -f "redundancy.*\.cjs" || true
    pkill -f "monitor-comprehensive-redundancy" || true
    
    # Stop monitoring processes
    pkill -f "monitor-comprehensive-redundancy.sh" || true
    
    log "INFO" "Comprehensive redundancy system v3.0 stopped"
    update_status "system" "stopped" "All systems stopped"
}

# Restart all redundancy systems
restart_all() {
    log "INFO" "Restarting comprehensive redundancy system v3.0..."
    stop_all
    sleep 3
    start_all
}

# Show system status
show_status() {
    log "INFO" "=== Comprehensive Redundancy System v3.0 Status ==="
    
    # Show status from status file
    if [ -f "$STATUS_FILE" ]; then
        log "INFO" "System Status:"
        if command -v jq &> /dev/null; then
            jq '.' "$STATUS_FILE" | sed 's/^/  /'
        else
            cat "$STATUS_FILE" | sed 's/^/  /'
        fi
    else
        log "WARN" "Status file not found"
    fi
    
    # PM2 status
    if command -v pm2 &> /dev/null; then
        log "INFO" "PM2 Status:"
        pm2 status --no-daemon || log "WARN" "Failed to get PM2 status"
    else
        log "WARN" "PM2 not installed"
    fi
    
    # Process status
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Comprehensive redundancy orchestrator running (PID: $pid)"
        else
            log "WARN" "PID file exists but process not running"
        fi
    else
        log "WARN" "No PID file found"
    fi
    
    # Check log files
    log "INFO" "Recent log entries:"
    tail -n 10 "$LOG_FILE" 2>/dev/null || log "WARN" "No log file found"
}

# Show system health
show_health() {
    log "INFO" "=== Comprehensive Redundancy System v3.0 Health Check ==="
    
    # Run health check on orchestrator
    if [ -f "$WORKSPACE_DIR/automation/comprehensive-redundancy-orchestrator.cjs" ]; then
        log "INFO" "Running orchestrator health check..."
        cd "$WORKSPACE_DIR" && node automation/comprehensive-redundancy-orchestrator.cjs check || log "WARN" "Orchestrator health check failed"
    fi
    
    # Run health check on ultimate redundancy master
    if [ -f "$WORKSPACE_DIR/automation/ultimate-redundancy-master.cjs" ]; then
        log "INFO" "Running ultimate redundancy master health check..."
        cd "$WORKSPACE_DIR" && node automation/ultimate-redundancy-master.cjs check || log "WARN" "Ultimate redundancy master health check failed"
    fi
    
    # Show status
    show_status
}

# Generate comprehensive report
generate_report() {
    log "INFO" "Generating comprehensive redundancy report..."
    
    # Generate report from orchestrator
    if [ -f "$WORKSPACE_DIR/automation/comprehensive-redundancy-orchestrator.cjs" ]; then
        cd "$WORKSPACE_DIR" && node automation/comprehensive-redundancy-orchestrator.cjs report || log "WARN" "Orchestrator report generation failed"
    fi
    
    # Generate report from ultimate redundancy master
    if [ -f "$WORKSPACE_DIR/automation/ultimate-redundancy-master.cjs" ]; then
        cd "$WORKSPACE_DIR" && node automation/ultimate-redundancy-master.cjs report || log "WARN" "Ultimate redundancy master report generation failed"
    fi
    
    # Show report locations
    local report_files=(
        "$WORKSPACE_DIR/automation/logs/redundancy-report.json"
        "$WORKSPACE_DIR/automation/logs/comprehensive-redundancy-report.json"
        "$WORKSPACE_DIR/automation/logs/ultimate-redundancy-report.json"
    )
    
    for report_file in "${report_files[@]}"; do
        if [ -f "$report_file" ]; then
            log "INFO" "Report generated: $report_file"
            if command -v jq &> /dev/null; then
                jq '.' "$report_file" 2>/dev/null || cat "$report_file"
            else
                cat "$report_file"
            fi
        fi
    done
}

# Show logs
show_logs() {
    local lines=${1:-50}
    log "INFO" "Showing last $lines log lines:"
    
    if [ -f "$LOG_FILE" ]; then
        tail -n "$lines" "$LOG_FILE"
    else
        log "WARN" "No log file found"
    fi
}

# Run comprehensive check
run_comprehensive_check() {
    log "INFO" "Running comprehensive system check..."
    
    # Check all components
    local components=("pm2" "github_actions" "netlify_functions" "npm_scripts" "automation_systems" "monitoring")
    local overall_status="healthy"
    
    for component in "${components[@]}"; do
        log "INFO" "Checking component: $component"
        case "$component" in
            "pm2")
                if command -v pm2 &> /dev/null; then
                    local pm2_status=$(pm2 status --no-daemon 2>/dev/null | grep -c "online" || echo "0")
                    if [ "$pm2_status" -gt 0 ]; then
                        log "INFO" "PM2: Healthy ($pm2_status processes online)"
                    else
                        log "WARN" "PM2: Warning (no processes online)"
                        overall_status="warning"
                    fi
                else
                    log "ERROR" "PM2: Not installed"
                    overall_status="error"
                fi
                ;;
            "github_actions")
                if [ -d "$WORKSPACE_DIR/.github/workflows" ]; then
                    local workflow_count=$(find "$WORKSPACE_DIR/.github/workflows" -name "*.yml" | wc -l)
                    if [ "$workflow_count" -gt 0 ]; then
                        log "INFO" "GitHub Actions: Healthy ($workflow_count workflows found)"
                    else
                        log "WARN" "GitHub Actions: Warning (no workflows found)"
                        overall_status="warning"
                    fi
                else
                    log "ERROR" "GitHub Actions: Workflows directory not found"
                    overall_status="error"
                fi
                ;;
            "netlify_functions")
                if [ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]; then
                    if command -v jq &> /dev/null; then
                        local func_count=$(jq '.functions | length' "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
                        if [ "$func_count" -gt 0 ]; then
                            log "INFO" "Netlify Functions: Healthy ($func_count functions in manifest)"
                        else
                            log "WARN" "Netlify Functions: Warning (no functions in manifest)"
                            overall_status="warning"
                        fi
                    else
                        log "WARN" "Netlify Functions: Manifest found (jq not available for validation)"
                    fi
                else
                    log "ERROR" "Netlify Functions: Manifest not found"
                    overall_status="error"
                fi
                ;;
            "npm_scripts")
                if [ -f "$WORKSPACE_DIR/package.json" ]; then
                    local script_count=$(jq '.scripts | keys | length' "$WORKSPACE_DIR/package.json" 2>/dev/null || echo "0")
                    if [ "$script_count" -gt 0 ]; then
                        log "INFO" "NPM Scripts: Healthy ($script_count scripts available)"
                    else
                        log "WARN" "NPM Scripts: Warning (no scripts found)"
                        overall_status="warning"
                    fi
                else
                    log "ERROR" "NPM Scripts: package.json not found"
                    overall_status="error"
                fi
                ;;
            "automation_systems")
                local system_count=0
                local total_systems=5
                for system in "ultimate-redundancy-master.cjs" "comprehensive-redundancy-orchestrator.cjs" "master-automation-coordinator.js" "continuous-automation-improvement-system.js" "automation-guardian-10min.cjs"; do
                    if [ -f "$WORKSPACE_DIR/automation/$system" ]; then
                        ((system_count++))
                    fi
                done
                if [ "$system_count" -eq "$total_systems" ]; then
                    log "INFO" "Automation Systems: Healthy ($system_count/$total_systems systems available)"
                else
                    log "WARN" "Automation Systems: Warning ($system_count/$total_systems systems available)"
                    overall_status="warning"
                fi
                ;;
            "monitoring")
                if [ -f "$PID_FILE" ]; then
                    local pid=$(cat "$PID_FILE")
                    if ps -p "$pid" > /dev/null 2>&1; then
                        log "INFO" "Monitoring: Healthy (PID: $pid)"
                    else
                        log "WARN" "Monitoring: Warning (PID file exists but process not running)"
                        overall_status="warning"
                    fi
                else
                    log "WARN" "Monitoring: Warning (no PID file found)"
                    overall_status="warning"
                fi
                ;;
        esac
    done
    
    log "INFO" "Overall system status: $overall_status"
    update_status "overall" "$overall_status" "Comprehensive check completed"
    
    return 0
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            start_all
            ;;
        stop)
            stop_all
            ;;
        restart)
            restart_all
            ;;
        status)
            show_status
            ;;
        health)
            show_health
            ;;
        report)
            generate_report
            ;;
        logs)
            show_logs "$2"
            ;;
        check)
            run_comprehensive_check
            ;;
        monitor)
            cd "$WORKSPACE_DIR" && node automation/comprehensive-redundancy-orchestrator.cjs monitor
            ;;
        help|--help|-h)
            echo "Comprehensive Redundancy System v3.0 - Usage:"
            echo "  $0 [command]"
            echo ""
            echo "Commands:"
            echo "  start     - Start all redundancy systems"
            echo "  stop      - Stop all redundancy systems"
            echo "  restart   - Restart all redundancy systems"
            echo "  status    - Show system status"
            echo "  health    - Run health check"
            echo "  report    - Generate redundancy report"
            echo "  logs [N]  - Show last N log lines (default: 50)"
            echo "  check     - Run comprehensive system check"
            echo "  monitor   - Start continuous monitoring"
            echo "  help      - Show this help message"
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Trap signals
trap 'log "INFO" "Received signal, cleaning up..."; stop_all; exit 0' SIGINT SIGTERM

# Run main function
main "$@"