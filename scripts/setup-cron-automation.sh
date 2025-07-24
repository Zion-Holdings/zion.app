
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      #!/bin/bash

# Setup Cron Automation Script
# This script sets up cron jobs to run automations every 30 minutes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_header() {
    echo -e "${PURPLE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                Cron Automation Setup                         ║"
    echo "║                  30-Minute Intervals                         ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

print_header

print_status "Setting up cron automation jobs"
print_status "Host: $(hostname)"
print_status "Directory: $(pwd)"
print_status "User: $(whoami)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this from the project root."
    exit 1
fi

# Get the absolute path to the project
PROJECT_PATH=$(pwd)
print_status "Project path: $PROJECT_PATH"

# Create automation directory
mkdir -p automation
mkdir -p logs

# Function to create cron job entries
create_cron_jobs() {
    print_status "Creating cron job entries..."
    
    # Create a temporary file for the new cron jobs
    TEMP_CRON=$(mktemp)
    
    # Get existing cron jobs (excluding our automation jobs)
    crontab -l 2>/dev/null | grep -v "zion-app-automation" | grep -v "master-automation" > "$TEMP_CRON" || true
    
    # Add our automation jobs
    cat >> "$TEMP_CRON" << EOF

# Zion App Automation Jobs - Runs every 30 minutes
# Generated on $(date)
*/30 * * * * cd "$PROJECT_PATH" && /usr/local/bin/npm run maintain >> "$PROJECT_PATH/logs/cron-maintain.log" 2>&1
*/30 * * * * cd "$PROJECT_PATH" && /usr/local/bin/npm run automate >> "$PROJECT_PATH/logs/cron-automate.log" 2>&1
*/30 * * * * cd "$PROJECT_PATH" && /usr/local/bin/npm run typecheck >> "$PROJECT_PATH/logs/cron-typecheck.log" 2>&1
*/30 * * * * cd "$PROJECT_PATH" && /usr/local/bin/npm run lint:fix >> "$PROJECT_PATH/logs/cron-lint.log" 2>&1
*/30 * * * * cd "$PROJECT_PATH" && /usr/local/bin/npm run format >> "$PROJECT_PATH/logs/cron-format.log" 2>&1
*/30 * * * * cd "$PROJECT_PATH" && /usr/local/bin/npm audit --audit-level moderate >> "$PROJECT_PATH/logs/cron-audit.log" 2>&1
*/30 * * * * cd "$PROJECT_PATH" && /usr/local/bin/npm run build >> "$PROJECT_PATH/logs/cron-build.log" 2>&1

# Master automation scheduler - Runs every 30 minutes
*/30 * * * * cd "$PROJECT_PATH" && /usr/local/bin/node scripts/master-automation-scheduler.cjs >> "$PROJECT_PATH/logs/cron-master-scheduler.log" 2>&1

# Health check - Runs every 5 minutes
*/5 * * * * cd "$PROJECT_PATH" && curl -s http://localhost:3001/api/health >> "$PROJECT_PATH/logs/cron-health.log" 2>&1 || echo "Health check failed at \$(date)" >> "$PROJECT_PATH/logs/cron-health.log"
EOF
    
    # Install the new cron jobs
    crontab "$TEMP_CRON"
    
    # Clean up temporary file
    rm "$TEMP_CRON"
    
    print_success "Cron jobs created successfully"
}

# Function to create automation status script
create_status_script() {
    print_status "Creating automation status script..."
    
    cat > "scripts/automation-status.sh" << 'EOF'
#!/bin/bash

# Zion App Automation Status Script
# This script shows the status of all automation jobs

set -e

PROJECT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "🚀 Zion App Automation Status"
echo "=============================="
echo "Project: $PROJECT_PATH"
echo "Time: $(date)"
echo ""

# Check if cron jobs are installed
echo "📋 Cron Jobs Status:"
if crontab -l 2>/dev/null | grep -q "zion-app-automation"; then
    echo "✅ Automation cron jobs are installed"
    echo ""
    echo "📅 Scheduled Jobs:"
    crontab -l 2>/dev/null | grep -E "(zion-app-automation|master-automation)" | while read -r line; do
        echo "   $line"
    done
else
    echo "❌ Automation cron jobs are not installed"
fi

echo ""
echo "📊 Recent Logs:"
echo "==============="

# Check recent log files
for logfile in logs/cron-*.log; do
    if [ -f "$logfile" ]; then
        echo ""
        echo "📄 $(basename "$logfile"):"
        echo "   Last modified: $(stat -f "%Sm" "$logfile" 2>/dev/null || stat -c "%y" "$logfile" 2>/dev/null)"
        echo "   Size: $(du -h "$logfile" | cut -f1)"
        echo "   Last 3 lines:"
        tail -3 "$logfile" 2>/dev/null | sed 's/^/     /' || echo "     (empty or unreadable)"
    fi
done

echo ""
echo "🏥 Health Check:"
echo "================"

# Check if the app is running
if curl -s http://localhost:3001/api/health > /dev/null 2>&1; then
    echo "✅ App is running and responding"
    HEALTH_RESPONSE=$(curl -s http://localhost:3001/api/health)
    echo "   Response: $HEALTH_RESPONSE"
else
    echo "❌ App is not responding"
fi

echo ""
echo "📈 Automation Summary:"
echo "======================"

# Check automation summary if it exists
if [ -f "automation/scheduler-summary.json" ]; then
    echo "✅ Automation summary available:"
    cat automation/scheduler-summary.json | jq -r '. | "   Total Cycles: \(.totalCycles)\n   Success Rate: \(.successRate)%\n   Last Run: \(.lastRun)\n   Next Run: \(.nextRun)"' 2>/dev/null || echo "   (summary file exists but cannot be parsed)"
else
    echo "❌ No automation summary available"
fi

echo ""
echo "🔧 Quick Commands:"
echo "=================="
echo "   View all logs: tail -f logs/cron-*.log"
echo "   Check cron jobs: crontab -l"
echo "   Remove automation jobs: ./scripts/remove-cron-automation.sh"
echo "   Start manual automation: ./scripts/start-master-automation.sh"
EOF
    
    chmod +x "scripts/automation-status.sh"
    print_success "Status script created: scripts/automation-status.sh"
}

# Function to create removal script
create_removal_script() {
    print_status "Creating cron job removal script..."
    
    cat > "scripts/remove-cron-automation.sh" << 'EOF'
#!/bin/bash

# Remove Cron Automation Script
# This script removes all Zion app automation cron jobs

set -e

echo "🛑 Removing Zion App automation cron jobs..."

# Get current cron jobs excluding our automation jobs
TEMP_CRON=$(mktemp)
crontab -l 2>/dev/null | grep -v "zion-app-automation" | grep -v "master-automation" > "$TEMP_CRON" || true

# Install the filtered cron jobs
crontab "$TEMP_CRON"

# Clean up
rm "$TEMP_CRON"

echo "✅ Automation cron jobs removed successfully"
echo "📋 Remaining cron jobs:"
crontab -l 2>/dev/null || echo "   (no cron jobs)"
EOF
    
    chmod +x "scripts/remove-cron-automation.sh"
    print_success "Removal script created: scripts/remove-cron-automation.sh"
}

# Function to create log rotation script
create_log_rotation() {
    print_status "Setting up log rotation..."
    
    cat > "scripts/rotate-automation-logs.sh" << 'EOF'
#!/bin/bash

# Log Rotation Script for Zion App Automation
# This script rotates automation logs to prevent disk space issues

set -e

PROJECT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOGS_DIR="$PROJECT_PATH/logs"
BACKUP_DIR="$PROJECT_PATH/logs/backup"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Get current date for backup
BACKUP_DATE=$(date +%Y%m%d_%H%M%S)

echo "🔄 Rotating automation logs..."

# Rotate log files
for logfile in "$LOGS_DIR"/cron-*.log; do
    if [ -f "$logfile" ]; then
        filename=$(basename "$logfile")
        backup_file="$BACKUP_DIR/${filename%.log}_${BACKUP_DATE}.log"
        
        # Move current log to backup
        mv "$logfile" "$backup_file"
        
        # Create new empty log file
        touch "$logfile"
        
        echo "   Rotated: $filename -> $(basename "$backup_file")"
    fi
done

# Keep only last 7 days of backups
find "$BACKUP_DIR" -name "cron-*.log" -mtime +7 -delete 2>/dev/null || true

echo "✅ Log rotation completed"
echo "📁 Backup location: $BACKUP_DIR"
EOF
    
    chmod +x "scripts/rotate-automation-logs.sh"
    print_success "Log rotation script created: scripts/rotate-automation-logs.sh"
    
    # Add log rotation to cron (daily at 2 AM)
    TEMP_CRON=$(mktemp)
    crontab -l 2>/dev/null | grep -v "rotate-automation-logs" > "$TEMP_CRON" || true
    
    cat >> "$TEMP_CRON" << EOF

# Log rotation - Daily at 2 AM
0 2 * * * cd "$PROJECT_PATH" && ./scripts/rotate-automation-logs.sh >> "$PROJECT_PATH/logs/cron-log-rotation.log" 2>&1
EOF
    
    crontab "$TEMP_CRON"
    rm "$TEMP_CRON"
    
    print_success "Log rotation scheduled (daily at 2 AM)"
}

# Main execution
print_status "Setting up cron automation system..."

# Create cron jobs
create_cron_jobs

# Create status script
create_status_script

# Create removal script
create_removal_script

# Create log rotation
create_log_rotation

print_success "Cron automation setup completed!"
echo ""
echo "📋 What was set up:"
echo "   ✅ 8 automation jobs running every 30 minutes"
echo "   ✅ Health check running every 5 minutes"
echo "   ✅ Log rotation scheduled daily at 2 AM"
echo "   ✅ Status checking script: ./scripts/automation-status.sh"
echo "   ✅ Removal script: ./scripts/remove-cron-automation.sh"
echo ""
echo "🔧 Next steps:"
echo "   1. Check status: ./scripts/automation-status.sh"
echo "   2. View logs: tail -f logs/cron-*.log"
echo "   3. Remove jobs: ./scripts/remove-cron-automation.sh"
echo ""
echo "⏰ First automation cycle will start at the next 30-minute interval"
    } catch (error) {
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

