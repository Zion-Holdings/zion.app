#!/bin/bash

# Setup Cron Jobs for Continuous Automation
# This script sets up all necessary cron jobs for the automation system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CRON_FILE="$PROJECT_ROOT/automation/crontab.txt"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Log function
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${GREEN}[$timestamp] INFO:${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] WARN:${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] ERROR:${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${BLUE}[$timestamp] SUCCESS:${NC} $message"
            ;;
    esac
}

log "INFO" "Setting up cron jobs for continuous automation..."

# Check if we're in the right directory
if [ ! -f "$PROJECT_ROOT/package.json" ]; then
    log "ERROR" "Not in project root directory"
    exit 1
fi

# Create cron jobs configuration
log "INFO" "Creating cron jobs configuration..."

cat > "$CRON_FILE" << 'EOF'
# Continuous Automation Cron Jobs
# Generated on $(date)

# Environment variables
PATH=/usr/local/bin:/usr/bin:/bin
NODE_ENV=production

# Change to project directory for all jobs
cd /Users/miami2/Documents/GitHub/bolt.new.zion.app

# Continuous Automation Factory Generator - Every 5 minutes
*/5 * * * * /bin/bash automation/cron-jobs/continuous-automation-cron.sh >> automation/logs/cron.log 2>&1

# Automation Orchestrator Health Check - Every 10 minutes
*/10 * * * * node automation/automation-orchestrator.js health >> automation/logs/orchestrator.log 2>&1

# Content Variation Generation - Every 15 minutes
*/15 * * * * node automation/variation-content-agents-factory.js >> automation/logs/variations.log 2>&1

# Factory Cleanup - Every hour
0 * * * * find automation/factories -maxdepth 1 -type d -name "automation-factory-*" | sort | head -n -50 | xargs -r rm -rf >> automation/logs/cleanup.log 2>&1

# Variation Cleanup - Every 2 hours
0 */2 * * * find automation/variations -maxdepth 1 -type d -name "content-variation-*" | sort | head -n -100 | xargs -r rm -rf >> automation/logs/cleanup.log 2>&1

# System Backup - Daily at 2 AM
0 2 * * * /bin/bash automation/cron-jobs/backup-system.sh >> automation/logs/backup.log 2>&1

# Health Report Generation - Every 6 hours
0 */6 * * * node automation/generate-health-report.js >> automation/logs/health.log 2>&1

# Performance Monitoring - Every 30 minutes
*/30 * * * * node automation/performance-monitor.js >> automation/logs/performance.log 2>&1

# Error Recovery - Every 5 minutes
*/5 * * * * /bin/bash automation/cron-jobs/error-recovery.sh >> automation/logs/recovery.log 2>&1

# Memory Cleanup - Every hour
0 * * * * /bin/bash automation/cron-jobs/memory-cleanup.sh >> automation/logs/cleanup.log 2>&1

# Log Rotation - Daily at 3 AM
0 3 * * * /bin/bash automation/cron-jobs/log-rotation.sh >> automation/logs/rotation.log 2>&1
EOF

log "SUCCESS" "Cron jobs configuration created at $CRON_FILE"

# Create additional cron job scripts
log "INFO" "Creating additional cron job scripts..."

# Backup system script
cat > "$PROJECT_ROOT/automation/cron-jobs/backup-system.sh" << 'EOF'
#!/bin/bash

# Backup System Script
# Creates backups of automation data and configurations

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="$PROJECT_ROOT/automation/backups"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Create backup
tar -czf "$BACKUP_DIR/automation-backup-$TIMESTAMP.tar.gz" \
    -C "$PROJECT_ROOT" \
    automation/data \
    automation/reports \
    automation/logs \
    automation/factories \
    automation/variations

# Keep only last 10 backups
ls -t "$BACKUP_DIR"/automation-backup-*.tar.gz | tail -n +11 | xargs -r rm

echo "Backup completed: automation-backup-$TIMESTAMP.tar.gz"
EOF

chmod +x "$PROJECT_ROOT/automation/cron-jobs/backup-system.sh"

# Error recovery script
cat > "$PROJECT_ROOT/automation/cron-jobs/error-recovery.sh" << 'EOF'
#!/bin/bash

# Error Recovery Script
# Monitors and recovers from automation errors

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_ROOT/automation/logs/error-recovery.log"

# Check for failed factories and restart them
find "$PROJECT_ROOT/automation/factories" -name "*.pid" -mmin +5 | while read pid_file; do
    factory_id=$(basename "$pid_file" .pid)
    echo "Restarting failed factory: $factory_id"
    node "$PROJECT_ROOT/automation/automation-orchestrator.js" restart "$factory_id"
done

# Check for orphaned processes
ps aux | grep "automation-factory-" | grep -v grep | while read line; do
    pid=$(echo $line | awk '{print $2}')
    if [ ! -f "/proc/$pid" ] 2>/dev/null; then
        echo "Cleaning up orphaned process: $pid"
        kill -9 "$pid" 2>/dev/null
    fi
done
EOF

chmod +x "$PROJECT_ROOT/automation/cron-jobs/error-recovery.sh"

# Memory cleanup script
cat > "$PROJECT_ROOT/automation/cron-jobs/memory-cleanup.sh" << 'EOF'
#!/bin/bash

# Memory Cleanup Script
# Cleans up old files and frees memory

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Remove old log files (keep last 7 days)
find "$PROJECT_ROOT/automation/logs" -name "*.log" -mtime +7 -delete 2>/dev/null

# Remove old reports (keep last 3 days)
find "$PROJECT_ROOT/automation/reports" -name "*.json" -mtime +3 -delete 2>/dev/null

# Remove old temporary files
find "$PROJECT_ROOT/automation" -name "*.tmp" -delete 2>/dev/null

# Clean up empty directories
find "$PROJECT_ROOT/automation" -type d -empty -delete 2>/dev/null

echo "Memory cleanup completed"
EOF

chmod +x "$PROJECT_ROOT/automation/cron-jobs/memory-cleanup.sh"

# Log rotation script
cat > "$PROJECT_ROOT/automation/cron-jobs/log-rotation.sh" << 'EOF'
#!/bin/bash

# Log Rotation Script
# Rotates and compresses log files

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOGS_DIR="$PROJECT_ROOT/automation/logs"

# Rotate log files
for log_file in "$LOGS_DIR"/*.log; do
    if [ -f "$log_file" ]; then
        # Check if log file is larger than 10MB
        if [ $(stat -f%z "$log_file" 2>/dev/null || echo 0) -gt 10485760 ]; then
            mv "$log_file" "$log_file.$(date +%Y%m%d-%H%M%S)"
            gzip "$log_file.$(date +%Y%m%d-%H%M%S)" &
        fi
    fi
done

# Keep only last 30 days of compressed logs
find "$LOGS_DIR" -name "*.gz" -mtime +30 -delete 2>/dev/null

echo "Log rotation completed"
EOF

chmod +x "$PROJECT_ROOT/automation/cron-jobs/log-rotation.sh"

# Install cron jobs
log "INFO" "Installing cron jobs..."

# Check if crontab is available
if ! command -v crontab &> /dev/null; then
    log "ERROR" "crontab command not found"
    exit 1
fi

# Install the cron jobs
crontab "$CRON_FILE"

if [ $? -eq 0 ]; then
    log "SUCCESS" "Cron jobs installed successfully"
else
    log "ERROR" "Failed to install cron jobs"
    exit 1
fi

# Create startup script
log "INFO" "Creating startup script..."

cat > "$PROJECT_ROOT/automation/start-automation.sh" << 'EOF'
#!/bin/bash

# Start Automation System
# This script starts all automation components

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "Starting automation system..."

# Start the automation orchestrator
cd "$PROJECT_ROOT"
node automation/automation-orchestrator.js &

# Start the variation content agents factory
node automation/variation-content-agents-factory.js &

# Start the continuous automation factory generator
node automation/continuous-automation-factory-generator.js &

echo "Automation system started"
echo "Check logs in automation/logs/ directory"
EOF

chmod +x "$PROJECT_ROOT/automation/start-automation.sh"

# Create stop script
log "INFO" "Creating stop script..."

cat > "$PROJECT_ROOT/automation/stop-automation.sh" << 'EOF'
#!/bin/bash

# Stop Automation System
# This script stops all automation components

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "Stopping automation system..."

# Kill all automation processes
pkill -f "automation-orchestrator.js"
pkill -f "variation-content-agents-factory.js"
pkill -f "continuous-automation-factory-generator.js"
pkill -f "automation-factory-"

echo "Automation system stopped"
EOF

chmod +x "$PROJECT_ROOT/automation/stop-automation.sh"

# Create status script
log "INFO" "Creating status script..."

cat > "$PROJECT_ROOT/automation/status-automation.sh" << 'EOF'
#!/bin/bash

# Status Automation System
# This script shows the status of all automation components

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== Automation System Status ==="
echo

echo "Active Processes:"
ps aux | grep -E "(automation-orchestrator|variation-content-agents-factory|continuous-automation-factory-generator|automation-factory-)" | grep -v grep

echo
echo "Factory Status:"
if [ -d "$PROJECT_ROOT/automation/factories" ]; then
    ls -la "$PROJECT_ROOT/automation/factories" | head -20
fi

echo
echo "Variation Status:"
if [ -d "$PROJECT_ROOT/automation/variations" ]; then
    ls -la "$PROJECT_ROOT/automation/variations" | head -20
fi

echo
echo "Recent Logs:"
if [ -d "$PROJECT_ROOT/automation/logs" ]; then
    ls -la "$PROJECT_ROOT/automation/logs" | tail -10
fi
EOF

chmod +x "$PROJECT_ROOT/automation/status-automation.sh"

log "SUCCESS" "Cron jobs setup completed successfully!"
log "INFO" "To start automation: ./automation/start-automation.sh"
log "INFO" "To stop automation: ./automation/stop-automation.sh"
log "INFO" "To check status: ./automation/status-automation.sh"
log "INFO" "Cron jobs will run automatically according to schedule"
