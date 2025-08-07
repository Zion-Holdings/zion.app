#!/bin/bash

# Setup Project Development Automation System
# This script sets up the complete project development automation system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

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

log "INFO" "Setting up Project Development Automation System..."

# Check if we're in the right directory
if [ ! -f "$PROJECT_ROOT/package.json" ]; then
    log "ERROR" "Not in project root directory"
    exit 1
fi

# Create necessary directories
log "INFO" "Creating directory structure..."

DIRECTORIES=(
    "automation/project-development-agents"
    "automation/project-development-reports"
    "automation/project-development-logs"
    "automation/project-development-data"
    "automation/project-development-status"
    "automation/project-development-pids"
    "automation/project-development-backups"
    "automation/project-development-reports/daily"
    "automation/project-development-reports/weekly"
    "automation/project-development-reports/deep-analysis"
    "automation/project-development-logs/agents"
    "automation/project-development-logs/errors"
    "automation/project-development-logs/deep-analysis"
    "automation/project-development-data/analysis"
    "automation/project-development-data/comparisons"
    "automation/project-development-data/improvements"
)

for dir in "${DIRECTORIES[@]}"; do
    mkdir -p "$PROJECT_ROOT/$dir"
    log "INFO" "Created directory: $dir"
done

# Install required dependencies
log "INFO" "Installing required dependencies..."

cd "$PROJECT_ROOT"

# Check if node-cron is installed
if ! npm list node-cron > /dev/null 2>&1; then
    log "INFO" "Installing node-cron..."
    npm install node-cron
fi

# Check if other required packages are installed
REQUIRED_PACKAGES=(
    "fs"
    "path"
    "https"
    "child_process"
    "util"
)

for package in "${REQUIRED_PACKAGES[@]}"; do
    if ! npm list "$package" > /dev/null 2>&1; then
        log "INFO" "Installing $package..."
        npm install "$package"
    fi
done

# Make cron script executable
log "INFO" "Setting up cron scripts..."

chmod +x "$SCRIPT_DIR/cron-jobs/project-development-automation-cron.sh"

# Create configuration file
log "INFO" "Creating configuration file..."

cat > "$SCRIPT_DIR/project-development-config.json" << 'EOF'
{
  "projectUrl": "https://ziontechgroup.netlify.app",
  "chatAnalysisUrl": "https://chatgpt.com/share/688b6030-1aa0-800b-9b63-ec9a269ea62d",
  "googleDocUrl": "https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing",
  "agents": {
    "project-analyzer": {
      "schedule": "*/10 * * * *",
      "priority": "high",
      "capabilities": ["deep-analysis", "comparison", "research"]
    },
    "content-developer": {
      "schedule": "*/15 * * * *",
      "priority": "high",
      "capabilities": ["content-creation", "optimization", "seo"]
    },
    "feature-implementer": {
      "schedule": "*/20 * * * *",
      "priority": "medium",
      "capabilities": ["feature-development", "code-generation", "testing"]
    },
    "quality-assurance": {
      "schedule": "*/30 * * * *",
      "priority": "high",
      "capabilities": ["testing", "bug-detection", "performance"]
    },
    "deployment-manager": {
      "schedule": "0 */2 * * *",
      "priority": "medium",
      "capabilities": ["deployment", "monitoring", "rollback"]
    }
  },
  "automation": {
    "continuousDevelopment": true,
    "autoCommit": true,
    "autoDeploy": true,
    "healthMonitoring": true,
    "performanceOptimization": true
  },
  "monitoring": {
    "enabled": true,
    "interval": 60000,
    "alerts": true,
    "logging": true
  },
  "backup": {
    "enabled": true,
    "schedule": "0 2 * * *",
    "retention": 30
  }
}
EOF

# Create startup script
log "INFO" "Creating startup script..."

cat > "$SCRIPT_DIR/start-project-development-automation.sh" << 'EOF'
#!/bin/bash

# Start Project Development Automation System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🚀 Starting Project Development Automation System..."

# Start the factory
cd "$SCRIPT_DIR"
node project-development-autonomous-factory.js &

# Start the cron job
./cron-jobs/project-development-automation-cron.sh start

echo "✅ Project Development Automation System started successfully!"
echo "📊 Check logs at: $SCRIPT_DIR/project-development-logs/"
echo "📈 Check reports at: $SCRIPT_DIR/project-development-reports/"
EOF

chmod +x "$SCRIPT_DIR/start-project-development-automation.sh"

# Create stop script
log "INFO" "Creating stop script..."

cat > "$SCRIPT_DIR/stop-project-development-automation.sh" << 'EOF'
#!/bin/bash

# Stop Project Development Automation System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🛑 Stopping Project Development Automation System..."

# Stop the cron job
./cron-jobs/project-development-automation-cron.sh stop

# Kill any running Node.js processes for the factory
pkill -f "project-development-autonomous-factory.js" || true

echo "✅ Project Development Automation System stopped successfully!"
EOF

chmod +x "$SCRIPT_DIR/stop-project-development-automation.sh"

# Create status script
log "INFO" "Creating status script..."

cat > "$SCRIPT_DIR/status-project-development-automation.sh" << 'EOF'
#!/bin/bash

# Check Project Development Automation System Status

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "📊 Project Development Automation System Status:"
echo "================================================"

# Check if factory is running
if pgrep -f "project-development-autonomous-factory.js" > /dev/null; then
    echo "✅ Factory: Running"
else
    echo "❌ Factory: Not running"
fi

# Check cron job status
./cron-jobs/project-development-automation-cron.sh status

echo ""
echo "📈 Recent Activity:"
echo "=================="
tail -10 "$SCRIPT_DIR/project-development-logs/project-development.log" 2>/dev/null || echo "No logs found"

echo ""
echo "📊 System Health:"
echo "================"
echo "CPU Usage: $(top -l 1 | grep "CPU usage" | awk '{print $3}')"
echo "Memory Usage: $(top -l 1 | grep "PhysMem" | awk '{print $2}')"
echo "Disk Usage: $(df -h . | tail -1 | awk '{print $5}')"
EOF

chmod +x "$SCRIPT_DIR/status-project-development-automation.sh"

# Create cron job configuration
log "INFO" "Setting up cron jobs..."

CRON_JOBS=(
    "# Project Development Automation System Cron Jobs"
    "# Project Development Factory - Every 5 minutes"
    "*/5 * * * * cd $SCRIPT_DIR && ./cron-jobs/project-development-automation-cron.sh monitor >> project-development-logs/cron.log 2>&1"
    ""
    "# Deep Analysis Agent - Every 10 minutes"
    "*/10 * * * * cd $SCRIPT_DIR && node project-development-agents/deep-analysis-agent.js >> project-development-logs/deep-analysis.log 2>&1"
    ""
    "# Health Check - Every 30 minutes"
    "*/30 * * * * cd $SCRIPT_DIR && ./cron-jobs/project-development-automation-cron.sh health >> project-development-logs/health.log 2>&1"
    ""
    "# Backup - Daily at 2 AM"
    "0 2 * * * cd $SCRIPT_DIR && ./cron-jobs/project-development-automation-cron.sh backup >> project-development-logs/backup.log 2>&1"
    ""
    "# Cleanup - Weekly on Sunday at 3 AM"
    "0 3 * * 0 cd $SCRIPT_DIR && ./cron-jobs/project-development-automation-cron.sh cleanup >> project-development-logs/cleanup.log 2>&1"
)

# Create temporary cron file
TEMP_CRON=$(mktemp)

# Add existing cron jobs
crontab -l 2>/dev/null | grep -v "Project Development Automation System" > "$TEMP_CRON" || true

# Add new cron jobs
for job in "${CRON_JOBS[@]}"; do
    echo "$job" >> "$TEMP_CRON"
done

# Install new cron jobs
crontab "$TEMP_CRON"

# Clean up
rm "$TEMP_CRON"

log "SUCCESS" "Cron jobs installed successfully"

# Create documentation
log "INFO" "Creating documentation..."

cat > "$SCRIPT_DIR/PROJECT_DEVELOPMENT_AUTOMATION_README.md" << 'EOF'
# Project Development Automation System

## Overview

The Project Development Automation System is a comprehensive autonomous system designed to continuously develop and improve the project based on chat conversation analysis and Google doc requirements.

## System Components

### 1. Project Development Autonomous Factory (`project-development-autonomous-factory.js`)
- **Purpose**: Central orchestrator for project development automation
- **Capabilities**:
  - Creates and manages specialized development agents
  - Coordinates continuous development processes
  - Monitors system performance and health
  - Implements automated improvements
  - Manages deployment and monitoring

### 2. Deep Analysis Agent (`project-development-agents/deep-analysis-agent.js`)
- **Purpose**: Performs deep analysis of chat conversation and project comparison
- **Capabilities**:
  - Analyzes chat conversation requirements
  - Compares with current project state
  - Identifies gaps and opportunities
  - Generates improvement recommendations
  - Creates comprehensive reports

### 3. Specialized Development Agents
- **Project Analyzer**: Deep analysis of requirements and current state
- **Content Developer**: Creates and optimizes content
- **Feature Implementer**: Implements new features and improvements
- **Quality Assurance**: Ensures quality and performance standards
- **Deployment Manager**: Manages deployment and monitoring

### 4. Cron Job Management (`cron-jobs/project-development-automation-cron.sh`)
- **Purpose**: Orchestrates continuous automation processes
- **Capabilities**:
  - Starts and manages the autonomous factory
  - Monitors agent health and performance
  - Handles backup and cleanup operations
  - Generates status reports

## Usage

### Starting the System
```bash
./start-project-development-automation.sh
```

### Stopping the System
```bash
./stop-project-development-automation.sh
```

### Checking Status
```bash
./status-project-development-automation.sh
```

### Manual Agent Execution
```bash
# Start deep analysis agent
node project-development-agents/deep-analysis-agent.js

# Start factory
node project-development-autonomous-factory.js
```

## Configuration

The system is configured via `project-development-config.json`:

```json
{
  "projectUrl": "https://ziontechgroup.netlify.app",
  "chatAnalysisUrl": "https://chatgpt.com/share/688b6030-1aa0-800b-9b63-ec9a269ea62d",
  "googleDocUrl": "https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing",
  "agents": {
    "project-analyzer": {
      "schedule": "*/10 * * * *",
      "priority": "high"
    }
  }
}
```

## Monitoring

### Logs
- Factory logs: `project-development-logs/factory.log`
- Agent logs: `project-development-logs/agents/`
- Error logs: `project-development-logs/errors/`
- Deep analysis logs: `project-development-logs/deep-analysis/`

### Reports
- Daily reports: `project-development-reports/daily/`
- Weekly reports: `project-development-reports/weekly/`
- Deep analysis reports: `project-development-reports/deep-analysis/`

### Status
- System status: `project-development-status/`
- Process IDs: `project-development-pids/`

## Features

### Continuous Development
- Automated feature implementation
- Code generation and optimization
- Quality assurance automation
- Performance monitoring and optimization

### Deep Analysis
- Chat conversation analysis
- Project state comparison
- Gap identification
- Opportunity recognition
- Recommendation generation

### Intelligent Automation
- Self-improving algorithms
- Adaptive strategies
- Predictive capabilities
- Real-time optimization

### Comprehensive Monitoring
- Health checks
- Performance metrics
- Error detection
- Alert system

## Benefits

1. **Continuous Improvement**: Automated development and optimization
2. **Deep Insights**: Comprehensive analysis and recommendations
3. **Quality Assurance**: Automated testing and quality checks
4. **Performance Optimization**: Real-time monitoring and optimization
5. **Scalable Architecture**: Modular design for easy expansion

## Next Steps

1. **Integration**: Integrate with existing automation systems
2. **Enhancement**: Add more specialized agents
3. **Optimization**: Improve algorithms and performance
4. **Monitoring**: Enhance monitoring and alerting
5. **Documentation**: Expand documentation and guides

## Support

For issues or questions:
- Check logs in `project-development-logs/`
- Review reports in `project-development-reports/`
- Monitor status with `./status-project-development-automation.sh`
EOF

log "SUCCESS" "Documentation created"

# Create uninstall script
log "INFO" "Creating uninstall script..."

cat > "$SCRIPT_DIR/uninstall-project-development-automation.sh" << 'EOF'
#!/bin/bash

# Uninstall Project Development Automation System

echo "🗑️ Uninstalling Project Development Automation System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Stop the system
print_status "Stopping automation system..."
./stop-project-development-automation.sh

# Remove cron jobs
print_status "Removing cron jobs..."
crontab -l 2>/dev/null | grep -v "Project Development Automation System" | crontab -

# Remove directories (optional - uncomment if you want to remove all data)
# print_status "Removing directories..."
# rm -rf project-development-agents
# rm -rf project-development-reports
# rm -rf project-development-logs
# rm -rf project-development-data
# rm -rf project-development-status
# rm -rf project-development-pids
# rm -rf project-development-backups

# Remove scripts
print_status "Removing scripts..."
rm -f start-project-development-automation.sh
rm -f stop-project-development-automation.sh
rm -f status-project-development-automation.sh
rm -f uninstall-project-development-automation.sh
rm -f project-development-config.json
rm -f PROJECT_DEVELOPMENT_AUTOMATION_README.md

print_success "Project Development Automation System uninstalled successfully!"
EOF

chmod +x "$SCRIPT_DIR/uninstall-project-development-automation.sh"

# Final setup summary
log "SUCCESS" "Project Development Automation System setup completed!"
log "INFO" "System components:"
log "INFO" "  - Project Development Autonomous Factory"
log "INFO" "  - Deep Analysis Agent"
log "INFO" "  - Specialized Development Agents"
log "INFO" "  - Cron Job Management"
log "INFO" "  - Monitoring and Reporting"

log "INFO" "Usage:"
log "INFO" "  Start: ./start-project-development-automation.sh"
log "INFO" "  Stop: ./stop-project-development-automation.sh"
log "INFO" "  Status: ./status-project-development-automation.sh"
log "INFO" "  Uninstall: ./uninstall-project-development-automation.sh"

log "INFO" "Documentation: PROJECT_DEVELOPMENT_AUTOMATION_README.md"
log "INFO" "Configuration: project-development-config.json"

log "SUCCESS" "Setup completed successfully!"
