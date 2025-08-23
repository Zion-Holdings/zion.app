#!/bin/bash

# Cursor Sync Automation Cron Setup Script
# Sets up cron jobs to run cursor sync automation every minute

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Get the project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

log "Setting up Cursor sync automation cron jobs..."

# Check if we're in the right directory
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Create cron job entries for cursor sync
create_cursor_sync_cron_jobs() {
    local cron_file="/tmp/cursor_sync_cron_$$"
    
    # Remove existing cursor sync cron jobs
    (crontab -l 2>/dev/null | grep -v "cursor-sync") > "$cron_file" || true
    
    # Add new cursor sync cron jobs
    cat >> "$cron_file" << EOF

# Cursor Sync Automation Cron Jobs
# Cursor Sync - Every minute
* * * * * cd "$PROJECT_DIR" && node automation/cursor-sync-automation.js once >> automation/logs/cursor-sync-cron.log 2>&1

# Cursor Sync Health Check - Every 5 minutes
*/5 * * * * cd "$PROJECT_DIR" && bash automation/cursor-sync-health-check.sh >> automation/logs/cursor-sync-health.log 2>&1

# Cursor Sync Log Rotation - Daily at 2 AM
0 2 * * * cd "$PROJECT_DIR" && find automation/logs -name "cursor-sync*.log" -mtime +7 -delete >> automation/logs/cursor-sync-cleanup.log 2>&1

# Cursor Sync Metrics Collection - Every 10 minutes
*/10 * * * * cd "$PROJECT_DIR" && node automation/cursor-sync-metrics.js >> automation/logs/cursor-sync-metrics.log 2>&1

EOF

    # Install the new cron jobs
    crontab "$cron_file"
    rm "$cron_file"
    
    log "✅ Cursor sync cron jobs installed successfully"
}

# Create log directories
create_log_directories() {
    log "Creating log directories..."
    
    mkdir -p "$AUTOMATION_DIR/logs"
    mkdir -p "$AUTOMATION_DIR/reports"
    mkdir -p "$AUTOMATION_DIR/backups"
    mkdir -p "$AUTOMATION_DIR/metrics"
    
    # Create initial log files
    touch "$AUTOMATION_DIR/logs/cursor-sync-cron.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync-health.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync-cleanup.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync-metrics.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync.log"
    
    log "✅ Log directories created"
}

# Create health check script
create_health_check_script() {
    log "Creating health check script..."
    
    cat > "$AUTOMATION_DIR/cursor-sync-health-check.sh" << 'EOF'
#!/bin/bash

# Cursor Sync Health Check Script
# Monitors cursor sync automation and sends alerts if needed

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check if cursor sync is working properly
check_cursor_sync_health() {
    local log_file="$AUTOMATION_DIR/logs/cursor-sync-cron.log"
    local health_file="$AUTOMATION_DIR/logs/cursor-sync-health.log"
    
    if [ ! -f "$log_file" ]; then
        echo -e "${RED}❌ Cursor sync log file not found${NC}"
        return 1
    fi
    
    # Check last sync time
    local last_sync_file="$AUTOMATION_DIR/logs/last-sync-time.json"
    if [ -f "$last_sync_file" ]; then
        local last_sync=$(jq -r '.lastSync' "$last_sync_file" 2>/dev/null)
        if [ "$last_sync" != "null" ] && [ -n "$last_sync" ]; then
            local last_sync_time=$(date -d "$last_sync" +%s 2>/dev/null || date -j -f "%Y-%m-%dT%H:%M:%S.%NZ" "$last_sync" +%s 2>/dev/null)
            local current_time=$(date +%s)
            local time_diff=$((current_time - last_sync_time))
            
            # Alert if last sync was more than 5 minutes ago
            if [ $time_diff -gt 300 ]; then
                echo -e "${YELLOW}⚠️ Last sync was $((time_diff / 60)) minutes ago${NC}"
                return 1
            else
                echo -e "${GREEN}✅ Last sync was $((time_diff / 60)) minutes ago${NC}"
            fi
        fi
    fi
    
    # Check for recent errors in log
    local recent_errors=$(tail -n 50 "$log_file" | grep -c "ERROR\|FAILED\|FAILURE" 2>/dev/null || echo "0")
    if [ "$recent_errors" -gt 0 ]; then
        echo -e "${YELLOW}⚠️ Found $recent_errors recent errors in cursor sync log${NC}"
        return 1
    fi
    
    # Check if git repository is in good state
    cd "$PROJECT_DIR"
    if ! git status --porcelain > /dev/null 2>&1; then
        echo -e "${RED}❌ Git repository is not in a clean state${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ Cursor sync health check passed${NC}"
    return 0
}

# Check for stuck processes
check_stuck_processes() {
    local stuck_processes=$(ps aux | grep "cursor-sync-automation" | grep -v grep | wc -l)
    if [ "$stuck_processes" -gt 1 ]; then
        echo -e "${YELLOW}⚠️ Found $stuck_processes cursor sync processes running${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ No stuck processes detected${NC}"
    return 0
}

# Main health check function
main() {
    echo "=== Cursor Sync Health Check ==="
    echo "Timestamp: $(date)"
    echo ""
    
    local health_status=0
    
    check_cursor_sync_health || health_status=1
    echo ""
    check_stuck_processes || health_status=1
    
    if [ $health_status -eq 0 ]; then
        echo -e "\n${GREEN}✅ All health checks passed${NC}"
    else
        echo -e "\n${RED}❌ Some health checks failed${NC}"
    fi
    
    return $health_status
}

main "$@"
EOF

    chmod +x "$AUTOMATION_DIR/cursor-sync-health-check.sh"
    log "✅ Health check script created"
}

# Create metrics collection script
create_metrics_script() {
    log "Creating metrics collection script..."
    
    cat > "$AUTOMATION_DIR/cursor-sync-metrics.js" << 'EOF'
#!/usr/bin/env node

/**
 * Cursor Sync Metrics Collection Script
 * Collects and stores metrics about cursor sync automation
 */

const fs = require('fs');
const path = require('path');

class CursorSyncMetrics {
  constructor() {
    this.projectRoot = process.cwd();
    this.metricsDir = path.join(__dirname, 'metrics');
    this.logFile = path.join(__dirname, 'logs', 'cursor-sync-cron.log');
    this.metricsFile = path.join(this.metricsDir, 'cursor-sync-metrics.json');
    this.ensureMetricsDirectory();
  }

  ensureMetricsDirectory() {
    if (!fs.existsSync(this.metricsDir)) {
      fs.mkdirSync(this.metricsDir, { recursive: true });
    }
  }

  loadMetrics() {
    if (fs.existsSync(this.metricsFile)) {
      try {
        return JSON.parse(fs.readFileSync(this.metricsFile, 'utf8'));
      } catch (error) {
        console.error('Error loading metrics:', error.message);
      }
    }
    return {
      totalSyncs: 0,
      successfulSyncs: 0,
      failedSyncs: 0,
      lastSync: null,
      averageSyncTime: 0,
      errors: [],
      dailyStats: {}
    };
  }

  saveMetrics(metrics) {
    try {
      fs.writeFileSync(this.metricsFile, JSON.stringify(metrics, null, 2));
    } catch (error) {
      console.error('Error saving metrics:', error.message);
    }
  }

  analyzeLogFile() {
    if (!fs.existsSync(this.logFile)) {
      return { syncs: 0, errors: 0, lastSync: null };
    }

    try {
      const logContent = fs.readFileSync(this.logFile, 'utf8');
      const lines = logContent.split('\n');
      
      let syncs = 0;
      let errors = 0;
      let lastSync = null;

      for (const line of lines) {
        if (line.includes('Cursor sync completed successfully')) {
          syncs++;
          const timestamp = line.match(/\[(.*?)\]/);
          if (timestamp) {
            lastSync = timestamp[1];
          }
        } else if (line.includes('ERROR') || line.includes('FAILED')) {
          errors++;
        }
      }

      return { syncs, errors, lastSync };
    } catch (error) {
      console.error('Error analyzing log file:', error.message);
      return { syncs: 0, errors: 0, lastSync: null };
    }
  }

  updateMetrics() {
    const metrics = this.loadMetrics();
    const logAnalysis = this.analyzeLogFile();
    const today = new Date().toISOString().split('T')[0];

    // Update basic metrics
    metrics.totalSyncs += logAnalysis.syncs;
    metrics.successfulSyncs += logAnalysis.syncs;
    metrics.failedSyncs += logAnalysis.errors;
    
    if (logAnalysis.lastSync) {
      metrics.lastSync = logAnalysis.lastSync;
    }

    // Update daily stats
    if (!metrics.dailyStats[today]) {
      metrics.dailyStats[today] = {
        syncs: 0,
        errors: 0,
        timestamp: new Date().toISOString()
      };
    }
    
    metrics.dailyStats[today].syncs += logAnalysis.syncs;
    metrics.dailyStats[today].errors += logAnalysis.errors;

    // Calculate success rate
    const totalAttempts = metrics.successfulSyncs + metrics.failedSyncs;
    metrics.successRate = totalAttempts > 0 ? (metrics.successfulSyncs / totalAttempts * 100).toFixed(2) : 0;

    // Keep only last 30 days of daily stats
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    Object.keys(metrics.dailyStats).forEach(date => {
      if (new Date(date) < thirtyDaysAgo) {
        delete metrics.dailyStats[date];
      }
    });

    this.saveMetrics(metrics);
    
    console.log(`📊 Metrics updated: ${logAnalysis.syncs} syncs, ${logAnalysis.errors} errors`);
    console.log(`📈 Success rate: ${metrics.successRate}%`);
  }

  generateReport() {
    const metrics = this.loadMetrics();
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSyncs: metrics.totalSyncs,
        successfulSyncs: metrics.successfulSyncs,
        failedSyncs: metrics.failedSyncs,
        successRate: metrics.successRate + '%',
        lastSync: metrics.lastSync
      },
      dailyStats: metrics.dailyStats,
      recommendations: this.generateRecommendations(metrics)
    };

    const reportFile = path.join(this.metricsDir, `cursor-sync-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📄 Report generated: ${reportFile}`);
  }

  generateRecommendations(metrics) {
    const recommendations = [];
    
    if (metrics.successRate < 90) {
      recommendations.push('Consider increasing retry attempts or adjusting sync interval');
    }
    
    if (metrics.failedSyncs > metrics.successfulSyncs * 0.1) {
      recommendations.push('High failure rate detected - check network connectivity and git configuration');
    }
    
    if (!metrics.lastSync) {
      recommendations.push('No recent syncs detected - check if automation is running');
    }
    
    return recommendations;
  }
}

// Main execution
const metrics = new CursorSyncMetrics();
metrics.updateMetrics();
metrics.generateReport();
EOF

    chmod +x "$AUTOMATION_DIR/cursor-sync-metrics.js"
    log "✅ Metrics script created"
}

# Create status script
create_status_script() {
    log "Creating status script..."
    
    cat > "$AUTOMATION_DIR/cursor-sync-status.sh" << 'EOF'
#!/bin/bash

# Cursor Sync Status Script
# Shows the current status of cursor sync automation

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo "🔄 Cursor Sync Automation Status"
echo "================================"
echo ""

# Check if cron jobs are installed
echo -e "${BLUE}📋 Cron Jobs:${NC}"
if crontab -l 2>/dev/null | grep -q "cursor-sync"; then
    echo -e "${GREEN}✅ Cursor sync cron jobs are installed${NC}"
    crontab -l 2>/dev/null | grep "cursor-sync" | while read -r line; do
        echo "  $line"
    done
else
    echo -e "${RED}❌ Cursor sync cron jobs not found${NC}"
fi

echo ""

# Check last sync time
echo -e "${BLUE}⏰ Last Sync:${NC}"
local last_sync_file="$AUTOMATION_DIR/logs/last-sync-time.json"
if [ -f "$last_sync_file" ]; then
    local last_sync=$(jq -r '.lastSync' "$last_sync_file" 2>/dev/null)
    if [ "$last_sync" != "null" ] && [ -n "$last_sync" ]; then
        echo -e "${GREEN}✅ Last sync: $last_sync${NC}"
    else
        echo -e "${YELLOW}⚠️ No sync time recorded${NC}"
    fi
else
    echo -e "${RED}❌ No sync time file found${NC}"
fi

echo ""

# Check log files
echo -e "${BLUE}📄 Log Files:${NC}"
for log_file in "$AUTOMATION_DIR/logs"/cursor-sync*.log; do
    if [ -f "$log_file" ]; then
        local filename=$(basename "$log_file")
        local last_modified=$(stat -f "%Sm" "$log_file" 2>/dev/null || stat -c "%y" "$log_file" 2>/dev/null)
        local size=$(du -h "$log_file" | cut -f1)
        echo "  $filename: $size, updated $last_modified"
    fi
done

echo ""

# Check metrics
echo -e "${BLUE}📊 Metrics:${NC}"
local metrics_file="$AUTOMATION_DIR/metrics/cursor-sync-metrics.json"
if [ -f "$metrics_file" ]; then
    local total_syncs=$(jq -r '.totalSyncs' "$metrics_file" 2>/dev/null || echo "0")
    local success_rate=$(jq -r '.successRate' "$metrics_file" 2>/dev/null || echo "0")
    echo -e "${GREEN}✅ Total syncs: $total_syncs${NC}"
    echo -e "${GREEN}✅ Success rate: $success_rate%${NC}"
else
    echo -e "${YELLOW}⚠️ No metrics file found${NC}"
fi

echo ""
echo "📁 Log Directory: $AUTOMATION_DIR/logs"
echo "📊 Metrics Directory: $AUTOMATION_DIR/metrics"
echo "⚙️ Config File: $AUTOMATION_DIR/cursor-sync-config.json"
EOF

    chmod +x "$AUTOMATION_DIR/cursor-sync-status.sh"
    log "✅ Status script created"
}

# Create startup script
create_startup_script() {
    log "Creating startup script..."
    
    cat > "$AUTOMATION_DIR/start-cursor-sync.sh" << 'EOF'
#!/bin/bash

# Cursor Sync Startup Script
# Starts the cursor sync automation system

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "🚀 Starting Cursor Sync Automation..."

# Check if already running
if pgrep -f "cursor-sync-automation" > /dev/null; then
    echo -e "${YELLOW}⚠️ Cursor sync automation is already running${NC}"
    exit 1
fi

# Start the automation
cd "$PROJECT_DIR"
nohup node automation/cursor-sync-automation.js continuous > automation/logs/cursor-sync-daemon.log 2>&1 &

# Get the PID
PID=$!
echo $PID > automation/logs/cursor-sync.pid

echo -e "${GREEN}✅ Cursor sync automation started with PID: $PID${NC}"
echo "📄 Log file: automation/logs/cursor-sync-daemon.log"
echo "🛑 To stop: kill $PID"
EOF

    chmod +x "$AUTOMATION_DIR/start-cursor-sync.sh"
    log "✅ Startup script created"
}

# Create stop script
create_stop_script() {
    log "Creating stop script..."
    
    cat > "$AUTOMATION_DIR/stop-cursor-sync.sh" << 'EOF'
#!/bin/bash

# Cursor Sync Stop Script
# Stops the cursor sync automation system

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "🛑 Stopping Cursor Sync Automation..."

# Check PID file
PID_FILE="$AUTOMATION_DIR/logs/cursor-sync.pid"
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if kill -0 "$PID" 2>/dev/null; then
        kill "$PID"
        echo -e "${GREEN}✅ Stopped cursor sync automation (PID: $PID)${NC}"
    else
        echo -e "${YELLOW}⚠️ Process $PID not found${NC}"
    fi
    rm -f "$PID_FILE"
else
    echo -e "${YELLOW}⚠️ PID file not found${NC}"
fi

# Kill any remaining cursor sync processes
PIDS=$(pgrep -f "cursor-sync-automation" 2>/dev/null || true)
if [ -n "$PIDS" ]; then
    echo "Killing remaining cursor sync processes: $PIDS"
    kill $PIDS 2>/dev/null || true
    echo -e "${GREEN}✅ All cursor sync processes stopped${NC}"
else
    echo -e "${GREEN}✅ No cursor sync processes running${NC}"
fi
EOF

    chmod +x "$AUTOMATION_DIR/stop-cursor-sync.sh"
    log "✅ Stop script created"
}

# Main setup function
main() {
    log "🚀 Setting up Cursor sync automation cron jobs..."
    
    # Create directories and scripts
    create_log_directories
    create_health_check_script
    create_metrics_script
    create_status_script
    create_startup_script
    create_stop_script
    
    # Install cron jobs
    create_cursor_sync_cron_jobs
    
    log "✅ Cursor sync automation setup completed!"
    log ""
    log "📋 Installed cron jobs:"
    log "  • Cursor Sync: Every minute"
    log "  • Health Check: Every 5 minutes"
    log "  • Metrics Collection: Every 10 minutes"
    log "  • Log Rotation: Daily at 2 AM"
    log ""
    log "📊 Management:"
    log "  • Check status: $AUTOMATION_DIR/cursor-sync-status.sh"
    log "  • Start daemon: $AUTOMATION_DIR/start-cursor-sync.sh"
    log "  • Stop daemon: $AUTOMATION_DIR/stop-cursor-sync.sh"
    log "  • Health check: $AUTOMATION_DIR/cursor-sync-health-check.sh"
    log ""
    log "📁 Logs and Metrics:"
    log "  • Logs: $AUTOMATION_DIR/logs/"
    log "  • Metrics: $AUTOMATION_DIR/metrics/"
    log "  • Config: $AUTOMATION_DIR/cursor-sync-config.json"
    log ""
    log "🔧 To remove cron jobs, run: crontab -e"
}

# Check if running as root (needed for crontab)
if [ "$EUID" -eq 0 ]; then
    error "This script should not be run as root"
    exit 1
fi

# Run main function
main "$@" 