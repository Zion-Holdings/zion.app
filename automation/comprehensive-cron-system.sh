#!/bin/bash

# Comprehensive Cron System for Autonomous Agents
# This script manages continuous automation and agent spawning

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"
PID_DIR="$SCRIPT_DIR/pids"
BACKUP_DIR="$SCRIPT_DIR/backups"
ANALYTICS_DIR="$SCRIPT_DIR/analytics"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR" "$BACKUP_DIR" "$ANALYTICS_DIR"

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/cron-system.log"
}

# Error handling
error_exit() {
    log "ERROR: $1"
    exit 1
}

# Check if Node.js is available
check_dependencies() {
    log "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        error_exit "Node.js is not installed"
    fi
    
    if ! command -v npm &> /dev/null; then
        error_exit "npm is not installed"
    fi
    
    log "Dependencies check passed"
}

# Install required packages
install_packages() {
    log "Installing required packages..."
    
    cd "$SCRIPT_DIR"
    
    # Install npm packages if package.json exists
    if [ -f "package.json" ]; then
        npm install --silent || error_exit "Failed to install npm packages"
    fi
    
    # Install additional packages if needed
    npm install --silent axios puppeteer cheerio @google/generative-ai || true
    
    log "Package installation completed"
}

# Start the master orchestrator
start_master_orchestrator() {
    log "Starting Master Orchestrator..."
    
    cd "$SCRIPT_DIR"
    
    # Kill existing orchestrator if running
    if [ -f "$PID_DIR/master-orchestrator.pid" ]; then
        PID=$(cat "$PID_DIR/master-orchestrator.pid")
        if kill -0 "$PID" 2>/dev/null; then
            log "Killing existing orchestrator (PID: $PID)"
            kill "$PID"
        fi
        rm -f "$PID_DIR/master-orchestrator.pid"
    fi
    
    # Start new orchestrator
    nohup node autonomous-master-orchestrator.js > "$LOG_DIR/master-orchestrator.log" 2>&1 &
    echo $! > "$PID_DIR/master-orchestrator.pid"
    
    log "Master Orchestrator started (PID: $(cat $PID_DIR/master-orchestrator.pid))"
}

# Start individual agents
start_agent() {
    local agent_type=$1
    local agent_script=$2
    
    log "Starting $agent_type agent..."
    
    cd "$SCRIPT_DIR"
    
    # Kill existing agent if running
    if [ -f "$PID_DIR/${agent_type}.pid" ]; then
        PID=$(cat "$PID_DIR/${agent_type}.pid")
        if kill -0 "$PID" 2>/dev/null; then
            log "Killing existing $agent_type agent (PID: $PID)"
            kill "$PID"
        fi
        rm -f "$PID_DIR/${agent_type}.pid"
    fi
    
    # Start new agent
    nohup node "$agent_script" > "$LOG_DIR/${agent_type}.log" 2>&1 &
    echo $! > "$PID_DIR/${agent_type}.pid"
    
    log "$agent_type agent started (PID: $(cat $PID_DIR/${agent_type}.pid))"
}

# Start all agents
start_all_agents() {
    log "Starting all agents..."
    
    # Website analyzer agent
    start_agent "website-analyzer" "enhanced-website-analyzer-agent.js"
    
    # Content generator agent
    start_agent "content-generator" "enhanced-content-generator-agent.js"
    
    # Error fixer agent
    start_agent "error-fixer" "error-fixer-agent.js"
    
    # Improvement agent
    start_agent "improvement-agent" "autonomous-improvement-agent.js"
    
    # Content integrator agent
    start_agent "content-integrator" "content-integration-agent.js"
    
    log "All agents started"
}

# Monitor and restart agents
monitor_agents() {
    log "Monitoring agents..."
    
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local agent_name=$(basename "$pid_file" .pid)
            local pid=$(cat "$pid_file")
            
            if ! kill -0 "$pid" 2>/dev/null; then
                log "Agent $agent_name (PID: $pid) is not running, restarting..."
                
                case $agent_name in
                    "master-orchestrator")
                        start_master_orchestrator
                        ;;
                    "website-analyzer")
                        start_agent "website-analyzer" "enhanced-website-analyzer-agent.js"
                        ;;
                    "content-generator")
                        start_agent "content-generator" "enhanced-content-generator-agent.js"
                        ;;
                    "error-fixer")
                        start_agent "error-fixer" "error-fixer-agent.js"
                        ;;
                    "improvement-agent")
                        start_agent "improvement-agent" "autonomous-improvement-agent.js"
                        ;;
                    "content-integrator")
                        start_agent "content-integrator" "content-integration-agent.js"
                        ;;
                esac
            fi
        fi
    done
}

# Backup system
backup_system() {
    log "Creating system backup..."
    
    local backup_name="backup-$(date +%Y%m%d-%H%M%S)"
    local backup_path="$BACKUP_DIR/$backup_name"
    
    mkdir -p "$backup_path"
    
    # Backup important files
    cp -r "$LOG_DIR" "$backup_path/" 2>/dev/null || true
    cp -r "$ANALYTICS_DIR" "$backup_path/" 2>/dev/null || true
    cp -r "$SCRIPT_DIR/generated-content" "$backup_path/" 2>/dev/null || true
    cp -r "$SCRIPT_DIR/analysis-results" "$backup_path/" 2>/dev/null || true
    
    # Backup configuration files
    cp "$SCRIPT_DIR"/*.json "$backup_path/" 2>/dev/null || true
    
    log "Backup created: $backup_path"
}

# Cleanup old backups
cleanup_backups() {
    log "Cleaning up old backups..."
    
    # Keep only last 7 backups
    cd "$BACKUP_DIR"
    ls -t | tail -n +8 | xargs -r rm -rf
    
    log "Backup cleanup completed"
}

# Generate analytics report
generate_analytics() {
    log "Generating analytics report..."
    
    cd "$SCRIPT_DIR"
    
    # Create comprehensive analytics
    cat > "$ANALYTICS_DIR/comprehensive-report.json" << EOF
{
  "timestamp": "$(date -Iseconds)",
  "system": {
    "uptime": "$(uptime)",
    "memory": "$(free -h | grep Mem | awk '{print $3 "/" $2}')",
    "disk": "$(df -h . | tail -1 | awk '{print $5}')"
  },
  "agents": {
    "total": "$(ls $PID_DIR/*.pid 2>/dev/null | wc -l)",
    "running": "$(ps aux | grep -E 'node.*agent' | grep -v grep | wc -l)"
  },
  "logs": {
    "total_size": "$(du -sh $LOG_DIR 2>/dev/null | cut -f1)",
    "recent_errors": "$(grep -r "ERROR" $LOG_DIR/*.log 2>/dev/null | wc -l)"
  },
  "content": {
    "generated_pages": "$(find $SCRIPT_DIR/generated-pages -name "*.html" 2>/dev/null | wc -l)",
    "generated_content": "$(find $SCRIPT_DIR/generated-content -name "*.json" 2>/dev/null | wc -l)"
  }
}
EOF
    
    log "Analytics report generated"
}

# Health check
health_check() {
    log "Performing health check..."
    
    local issues=0
    
    # Check if agents are running
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local agent_name=$(basename "$pid_file" .pid)
            local pid=$(cat "$pid_file")
            
            if ! kill -0 "$pid" 2>/dev/null; then
                log "HEALTH CHECK: Agent $agent_name is not running"
                ((issues++))
            fi
        fi
    done
    
    # Check disk space
    local disk_usage=$(df . | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ "$disk_usage" -gt 90 ]; then
        log "HEALTH CHECK: Disk usage is high: ${disk_usage}%"
        ((issues++))
    fi
    
    # Check memory usage
    local mem_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
    if [ "$mem_usage" -gt 90 ]; then
        log "HEALTH CHECK: Memory usage is high: ${mem_usage}%"
        ((issues++))
    fi
    
    if [ $issues -eq 0 ]; then
        log "Health check passed"
    else
        log "Health check found $issues issues"
    fi
}

# Continuous improvement loop
continuous_improvement() {
    log "Starting continuous improvement loop..."
    
    while true; do
        # Monitor agents
        monitor_agents
        
        # Health check
        health_check
        
        # Generate analytics
        generate_analytics
        
        # Backup system (every 6 hours)
        if [ "$(date +%H)" -eq "00" ] || [ "$(date +%H)" -eq "06" ] || [ "$(date +%H)" -eq "12" ] || [ "$(date +%H)" -eq "18" ]; then
            backup_system
            cleanup_backups
        fi
        
        # Sleep for 5 minutes
        sleep 300
    done
}

# Main function
main() {
    log "Starting Comprehensive Cron System..."
    
    # Check dependencies
    check_dependencies
    
    # Install packages
    install_packages
    
    # Start master orchestrator
    start_master_orchestrator
    
    # Start all agents
    start_all_agents
    
    # Start continuous improvement loop
    continuous_improvement
}

# Handle signals
trap 'log "Received signal, shutting down..."; exit 0' SIGINT SIGTERM

# Run main function
main "$@" 