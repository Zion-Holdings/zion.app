#!/bin/bash

# Simple startup script for the autonomous agent system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"
PID_DIR="$SCRIPT_DIR/pids"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR"

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "Starting Autonomous Agent System..."

# Start master orchestrator
log "Starting Master Orchestrator..."
nohup node autonomous-master-orchestrator.js > "$LOG_DIR/master-orchestrator.log" 2>&1 &
echo $! > "$PID_DIR/master-orchestrator.pid"
log "Master Orchestrator started (PID: $(cat $PID_DIR/master-orchestrator.pid))"

# Start website analyzer
log "Starting Website Analyzer..."
nohup node enhanced-website-analyzer-agent.js > "$LOG_DIR/website-analyzer.log" 2>&1 &
echo $! > "$PID_DIR/website-analyzer.pid"
log "Website Analyzer started (PID: $(cat $PID_DIR/website-analyzer.pid))"

# Start content generator
log "Starting Content Generator..."
nohup node enhanced-content-generator-agent.js > "$LOG_DIR/content-generator.log" 2>&1 &
echo $! > "$PID_DIR/content-generator.pid"
log "Content Generator started (PID: $(cat $PID_DIR/content-generator.pid))"

# Start error fixer
log "Starting Error Fixer..."
nohup node error-fixer-agent.js > "$LOG_DIR/error-fixer.log" 2>&1 &
echo $! > "$PID_DIR/error-fixer.pid"
log "Error Fixer started (PID: $(cat $PID_DIR/error-fixer.pid))"

# Start improvement agent
log "Starting Improvement Agent..."
nohup node autonomous-improvement-agent.js > "$LOG_DIR/improvement-agent.log" 2>&1 &
echo $! > "$PID_DIR/improvement-agent.pid"
log "Improvement Agent started (PID: $(cat $PID_DIR/improvement-agent.pid))"

# Start content integrator
log "Starting Content Integrator..."
nohup node content-integration-agent.js > "$LOG_DIR/content-integrator.log" 2>&1 &
echo $! > "$PID_DIR/content-integrator.pid"
log "Content Integrator started (PID: $(cat $PID_DIR/content-integrator.pid))"

log "All agents started successfully!"
log "Check logs in $LOG_DIR for detailed output"
log "Check PIDs in $PID_DIR for process management"

# Show status
echo ""
echo "=== System Status ==="
ps aux | grep -E "node.*agent|node.*orchestrator" | grep -v grep
echo ""
echo "=== Active PIDs ==="
ls -la "$PID_DIR"/*.pid 2>/dev/null || echo "No PID files found"
echo ""
echo "=== Recent Logs ==="
tail -n 5 "$LOG_DIR"/*.log 2>/dev/null || echo "No log files found"
