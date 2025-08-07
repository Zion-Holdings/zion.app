#!/bin/bash

# Frontend Sync Continuous Automation Cron Jobs
# This script manages continuous automation for frontend synchronization

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/frontend-sync-logs"
PID_DIR="$SCRIPT_DIR/frontend-sync-pids"
STATUS_DIR="$SCRIPT_DIR/frontend-sync-status"

# Ensure directories exist
mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR"

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/automation.log"
}

# Check if process is running
is_running() {
    local pid_file="$1"
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "$pid_file"
            return 1
        fi
    fi
    return 1
}

# Start autonomous agents factory
start_autonomous_factory() {
    local pid_file="$PID_DIR/autonomous-factory.pid"
    local log_file="$LOG_DIR/autonomous-factory.log"
    
    if is_running "$pid_file"; then
        log "Autonomous factory already running (PID: $(cat "$pid_file"))"
        return 0
    fi
    
    log "Starting autonomous agents factory..."
    cd "$PROJECT_ROOT"
    nohup node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" > "$log_file" 2>&1 &
    echo $! > "$pid_file"
    log "Autonomous factory started (PID: $!)"
}

# Start frontend sync orchestrator
start_frontend_sync_orchestrator() {
    local pid_file="$PID_DIR/frontend-sync-orchestrator.pid"
    local log_file="$LOG_DIR/frontend-sync-orchestrator.log"
    
    if is_running "$pid_file"; then
        log "Frontend sync orchestrator already running (PID: $(cat "$pid_file"))"
        return 0
    fi
    
    log "Starting frontend sync orchestrator..."
    cd "$PROJECT_ROOT"
    nohup node "$SCRIPT_DIR/frontend-sync-automation-orchestrator.js" > "$log_file" 2>&1 &
    echo $! > "$pid_file"
    log "Frontend sync orchestrator started (PID: $!)"
}

# Continuous agent creation
continuous_agent_creation() {
    log "Running continuous agent creation..."
    cd "$PROJECT_ROOT"
    
    # Analyze project structure for missing agents
    local missing_agents=()
    
    # Check for component sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/component-sync-agent.js" ]; then
        missing_agents+=("component-sync")
    fi
    
    # Check for page sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/page-sync-agent.js" ]; then
        missing_agents+=("page-sync")
    fi
    
    # Check for API sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/api-sync-agent.js" ]; then
        missing_agents+=("api-sync")
    fi
    
    # Check for test sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/test-sync-agent.js" ]; then
        missing_agents+=("test-sync")
    fi
    
    # Check for build sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/build-sync-agent.js" ]; then
        missing_agents+=("build-sync")
    fi
    
    # Check for deployment sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/deployment-sync-agent.js" ]; then
        missing_agents+=("deployment-sync")
    fi
    
    # Check for performance sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/performance-sync-agent.js" ]; then
        missing_agents+=("performance-sync")
    fi
    
    # Check for security sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/security-sync-agent.js" ]; then
        missing_agents+=("security-sync")
    fi
    
    # Check for quality sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/quality-sync-agent.js" ]; then
        missing_agents+=("quality-sync")
    fi
    
    # Check for compliance sync agent
    if [ ! -f "$SCRIPT_DIR/frontend-sync-agents/compliance-sync-agent.js" ]; then
        missing_agents+=("compliance-sync")
    fi
    
    # Create missing agents
    for agent_type in "${missing_agents[@]}"; do
        log "Creating missing agent: $agent_type"
        node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" create-agent "$agent_type"
    done
    
    log "Continuous agent creation completed"
}

# Continuous factory creation
continuous_factory_creation() {
    log "Running continuous factory creation..."
    cd "$PROJECT_ROOT"
    
    # Analyze project structure for missing factories
    local missing_factories=()
    
    # Check for frontend sync factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/frontend-sync-factory.js" ]; then
        missing_factories+=("frontend-sync")
    fi
    
    # Check for component generation factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/component-generation-factory.js" ]; then
        missing_factories+=("component-generation")
    fi
    
    # Check for page generation factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/page-generation-factory.js" ]; then
        missing_factories+=("page-generation")
    fi
    
    # Check for API generation factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/api-generation-factory.js" ]; then
        missing_factories+=("api-generation")
    fi
    
    # Check for test generation factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/test-generation-factory.js" ]; then
        missing_factories+=("test-generation")
    fi
    
    # Check for build optimization factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/build-optimization-factory.js" ]; then
        missing_factories+=("build-optimization")
    fi
    
    # Check for deployment automation factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/deployment-automation-factory.js" ]; then
        missing_factories+=("deployment-automation")
    fi
    
    # Check for performance monitoring factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/performance-monitoring-factory.js" ]; then
        missing_factories+=("performance-monitoring")
    fi
    
    # Check for security scanning factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/security-scanning-factory.js" ]; then
        missing_factories+=("security-scanning")
    fi
    
    # Check for quality assurance factory
    if [ ! -f "$SCRIPT_DIR/frontend-sync-factories/quality-assurance-factory.js" ]; then
        missing_factories+=("quality-assurance")
    fi
    
    # Create missing factories
    for factory_type in "${missing_factories[@]}"; do
        log "Creating missing factory: $factory_type"
        node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" create-factory "$factory_type"
    done
    
    log "Continuous factory creation completed"
}

# Continuous improvement
continuous_improvement() {
    log "Running continuous improvement..."
    cd "$PROJECT_ROOT"
    
    # Improve all existing agents
    for agent_file in "$SCRIPT_DIR/frontend-sync-agents"/*.js; do
        if [ -f "$agent_file" ]; then
            local agent_name=$(basename "$agent_file" .js)
            log "Improving agent: $agent_name"
            node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" improve-agent "$agent_name"
        fi
    done
    
    # Improve all existing factories
    for factory_file in "$SCRIPT_DIR/frontend-sync-factories"/*.js; do
        if [ -f "$factory_file" ]; then
            local factory_name=$(basename "$factory_file" .js)
            log "Improving factory: $factory_name"
            node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" improve-factory "$factory_name"
        fi
    done
    
    log "Continuous improvement completed"
}

# Performance optimization
performance_optimization() {
    log "Running performance optimization..."
    cd "$PROJECT_ROOT"
    
    # Check system resources
    local memory_usage=$(free | grep Mem | awk '{printf "%.2f", $3/$2 * 100.0}')
    local cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
    
    log "Memory usage: ${memory_usage}%"
    log "CPU usage: ${cpu_usage}%"
    
    # Optimize if usage is high
    if (( $(echo "$memory_usage > 80" | bc -l) )); then
        log "High memory usage detected, optimizing..."
        node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" optimize-memory
    fi
    
    if (( $(echo "$cpu_usage > 80" | bc -l) )); then
        log "High CPU usage detected, optimizing..."
        node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" optimize-cpu
    fi
    
    log "Performance optimization completed"
}

# Error recovery
error_recovery() {
    log "Running error recovery..."
    cd "$PROJECT_ROOT"
    
    # Check for failed processes and restart them
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local process_name=$(basename "$pid_file" .pid)
            if ! is_running "$pid_file"; then
                log "Restarting failed process: $process_name"
                case "$process_name" in
                    "autonomous-factory")
                        start_autonomous_factory
                        ;;
                    "frontend-sync-orchestrator")
                        start_frontend_sync_orchestrator
                        ;;
                    *)
                        log "Unknown process type: $process_name"
                        ;;
                esac
            fi
        fi
    done
    
    log "Error recovery completed"
}

# Health check
health_check() {
    log "Running health check..."
    cd "$PROJECT_ROOT"
    
    local health_status="healthy"
    local issues=()
    
    # Check if autonomous factory is running
    if ! is_running "$PID_DIR/autonomous-factory.pid"; then
        health_status="unhealthy"
        issues+=("autonomous-factory-not-running")
    fi
    
    # Check if frontend sync orchestrator is running
    if ! is_running "$PID_DIR/frontend-sync-orchestrator.pid"; then
        health_status="unhealthy"
        issues+=("frontend-sync-orchestrator-not-running")
    fi
    
    # Check disk space
    local disk_usage=$(df "$PROJECT_ROOT" | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ "$disk_usage" -gt 90 ]; then
        health_status="unhealthy"
        issues+=("high-disk-usage")
    fi
    
    # Check log file sizes
    for log_file in "$LOG_DIR"/*.log; do
        if [ -f "$log_file" ]; then
            local log_size=$(stat -f%z "$log_file" 2>/dev/null || stat -c%s "$log_file" 2>/dev/null)
            if [ "$log_size" -gt 104857600 ]; then  # 100MB
                log "Rotating large log file: $(basename "$log_file")"
                mv "$log_file" "$log_file.old"
                gzip "$log_file.old" &
            fi
        fi
    done
    
    # Save health status
    echo "{\"status\":\"$health_status\",\"timestamp\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",\"issues\":[$(IFS=,; echo "${issues[*]}")]}" > "$STATUS_DIR/health.json"
    
    log "Health check completed: $health_status"
}

# Backup system
backup_system() {
    log "Running system backup..."
    cd "$PROJECT_ROOT"
    
    local backup_dir="$SCRIPT_DIR/frontend-sync-backups"
    local timestamp=$(date +%Y%m%d_%H%M%S)
    local backup_path="$backup_dir/backup_$timestamp"
    
    mkdir -p "$backup_path"
    
    # Backup agents
    if [ -d "$SCRIPT_DIR/frontend-sync-agents" ]; then
        cp -r "$SCRIPT_DIR/frontend-sync-agents" "$backup_path/"
    fi
    
    # Backup factories
    if [ -d "$SCRIPT_DIR/frontend-sync-factories" ]; then
        cp -r "$SCRIPT_DIR/frontend-sync-factories" "$backup_path/"
    fi
    
    # Backup automations
    if [ -d "$SCRIPT_DIR/frontend-sync-automations" ]; then
        cp -r "$SCRIPT_DIR/frontend-sync-automations" "$backup_path/"
    fi
    
    # Backup logs
    if [ -d "$LOG_DIR" ]; then
        cp -r "$LOG_DIR" "$backup_path/"
    fi
    
    # Backup status
    if [ -d "$STATUS_DIR" ]; then
        cp -r "$STATUS_DIR" "$backup_path/"
    fi
    
    # Create backup manifest
    echo "{\"timestamp\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",\"backup_path\":\"$backup_path\"}" > "$backup_path/manifest.json"
    
    # Clean up old backups (keep last 7 days)
    find "$backup_dir" -name "backup_*" -type d -mtime +7 -exec rm -rf {} \;
    
    log "System backup completed: $backup_path"
}

# Analytics collection
collect_analytics() {
    log "Collecting analytics..."
    cd "$PROJECT_ROOT"
    
    local analytics_file="$SCRIPT_DIR/frontend-sync-analytics/analytics_$(date +%Y%m%d_%H%M%S).json"
    
    # Collect system metrics
    local system_metrics=$(node -e "
        const os = require('os');
        const fs = require('fs');
        
        const metrics = {
            timestamp: new Date().toISOString(),
            system: {
                platform: os.platform(),
                arch: os.arch(),
                cpus: os.cpus().length,
                totalMemory: os.totalmem(),
                freeMemory: os.freemem(),
                loadAverage: os.loadavg(),
                uptime: os.uptime()
            },
            process: {
                pid: process.pid,
                memoryUsage: process.memoryUsage(),
                cpuUsage: process.cpuUsage()
            },
            automation: {
                agents: fs.readdirSync('$SCRIPT_DIR/frontend-sync-agents').filter(f => f.endsWith('.js')).length,
                factories: fs.readdirSync('$SCRIPT_DIR/frontend-sync-factories').filter(f => f.endsWith('.js')).length,
                automations: fs.readdirSync('$SCRIPT_DIR/frontend-sync-automations').filter(f => f.endsWith('.js')).length
            }
        };
        
        console.log(JSON.stringify(metrics, null, 2));
    ")
    
    echo "$system_metrics" > "$analytics_file"
    log "Analytics collected: $analytics_file"
}

# Main automation loop
main_automation_loop() {
    log "Starting main automation loop..."
    
    # Start core systems
    start_autonomous_factory
    start_frontend_sync_orchestrator
    
    # Run continuous processes
    while true; do
        log "Running automation cycle..."
        
        # Continuous creation
        continuous_agent_creation
        continuous_factory_creation
        
        # Continuous improvement
        continuous_improvement
        
        # Performance optimization
        performance_optimization
        
        # Error recovery
        error_recovery
        
        # Health check
        health_check
        
        # Analytics collection
        collect_analytics
        
        # Backup (every 6 hours)
        if [ "$(date +%H)" -eq "00" ] || [ "$(date +%H)" -eq "06" ] || [ "$(date +%H)" -eq "12" ] || [ "$(date +%H)" -eq "18" ]; then
            backup_system
        fi
        
        log "Automation cycle completed, sleeping for 5 minutes..."
        sleep 300
    done
}

# Handle command line arguments
case "${1:-}" in
    "start")
        main_automation_loop
        ;;
    "start-factory")
        start_autonomous_factory
        ;;
    "start-orchestrator")
        start_frontend_sync_orchestrator
        ;;
    "stop")
        log "Stopping all automation processes..."
        for pid_file in "$PID_DIR"/*.pid; do
            if [ -f "$pid_file" ]; then
                local pid=$(cat "$pid_file")
                log "Stopping process (PID: $pid)"
                kill "$pid" 2>/dev/null || true
                rm -f "$pid_file"
            fi
        done
        log "All processes stopped"
        ;;
    "status")
        log "Checking automation status..."
        for pid_file in "$PID_DIR"/*.pid; do
            if [ -f "$pid_file" ]; then
                local process_name=$(basename "$pid_file" .pid)
                local pid=$(cat "$pid_file")
                if is_running "$pid_file"; then
                    log "$process_name: RUNNING (PID: $pid)"
                else
                    log "$process_name: STOPPED"
                fi
            fi
        done
        
        if [ -f "$STATUS_DIR/health.json" ]; then
            log "Health status: $(cat "$STATUS_DIR/health.json")"
        fi
        ;;
    "create-agent")
        if [ -n "${2:-}" ]; then
            log "Creating agent: $2"
            cd "$PROJECT_ROOT"
            node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" create-agent "$2"
        else
            log "Error: Agent type not specified"
            exit 1
        fi
        ;;
    "create-factory")
        if [ -n "${2:-}" ]; then
            log "Creating factory: $2"
            cd "$PROJECT_ROOT"
            node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" create-factory "$2"
        else
            log "Error: Factory type not specified"
            exit 1
        fi
        ;;
    "improve-agent")
        if [ -n "${2:-}" ]; then
            log "Improving agent: $2"
            cd "$PROJECT_ROOT"
            node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" improve-agent "$2"
        else
            log "Error: Agent name not specified"
            exit 1
        fi
        ;;
    "improve-factory")
        if [ -n "${2:-}" ]; then
            log "Improving factory: $2"
            cd "$PROJECT_ROOT"
            node "$SCRIPT_DIR/frontend-sync-autonomous-agents-factory.js" improve-factory "$2"
        else
            log "Error: Factory name not specified"
            exit 1
        fi
        ;;
    "backup")
        backup_system
        ;;
    "health")
        health_check
        ;;
    "analytics")
        collect_analytics
        ;;
    *)
        echo "Usage: $0 {start|start-factory|start-orchestrator|stop|status|create-agent|create-factory|improve-agent|improve-factory|backup|health|analytics}"
        echo ""
        echo "Commands:"
        echo "  start                    - Start the complete automation system"
        echo "  start-factory           - Start only the autonomous agents factory"
        echo "  start-orchestrator     - Start only the frontend sync orchestrator"
        echo "  stop                    - Stop all automation processes"
        echo "  status                  - Show status of all processes"
        echo "  create-agent <type>     - Create a specific agent type"
        echo "  create-factory <type>   - Create a specific factory type"
        echo "  improve-agent <name>    - Improve a specific agent"
        echo "  improve-factory <name>  - Improve a specific factory"
        echo "  backup                  - Create a system backup"
        echo "  health                  - Run health check"
        echo "  analytics               - Collect analytics"
        exit 1
        ;;
esac 