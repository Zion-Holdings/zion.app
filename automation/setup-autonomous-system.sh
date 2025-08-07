#!/bin/bash

# Autonomous Agent System Setup Script
# This script sets up the complete autonomous agent system with all dependencies and cron jobs

set -e

echo "🚀 Setting up Autonomous Agent System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root"
   exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

# Navigate to the automation directory
cd "$(dirname "$0")"

print_status "Setting up automation directory..."

# Create necessary directories
mkdir -p logs
mkdir -p reports
mkdir -p backups
mkdir -p temp
mkdir -p pids
mkdir -p marketplace/listings
mkdir -p marketplace/database
mkdir -p social-media/campaigns
mkdir -p email-campaigns/campaigns
mkdir -p agents/production
mkdir -p agents/generated
mkdir -p agents/specialized

print_success "Directories created successfully"

# Install Node.js dependencies
print_status "Installing Node.js dependencies..."

# Check if package.json exists, if not create it
if [ ! -f "package.json" ]; then
    print_status "Creating package.json..."
    cat > package.json << EOF
{
  "name": "autonomous-agent-system",
  "version": "1.0.0",
  "description": "Autonomous agent system for continuous solution creation and sales",
  "main": "autonomous-master-orchestrator.js",
  "scripts": {
    "start": "node autonomous-master-orchestrator.js",
    "research": "node autonomous-market-research-agent.js",
    "create": "node autonomous-solution-creator-agent.js",
    "sales": "node autonomous-sales-agent.js",
    "agents": "node continuous-agent-creator.js",
    "orchestrator": "node autonomous-agent-orchestrator.js",
    "master": "node autonomous-master-orchestrator.js",
    "monitor": "node monitor-automation.js",
    "test": "node test-automation.js",
    "setup-cron": "bash setup-autonomous-system.sh"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "cheerio": "^1.0.0-rc.12",
    "fs-extra": "^11.1.1",
    "node-cron": "^3.0.3",
    "puppeteer": "^21.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "keywords": [
    "autonomous",
    "agents",
    "ai",
    "automation",
    "marketplace",
    "sales"
  ],
  "author": "Autonomous Agent System",
  "license": "MIT"
}
EOF
    print_success "package.json created"
fi

# Install dependencies
print_status "Installing npm packages..."
npm install

if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Create configuration files
print_status "Creating configuration files..."

# Create main configuration
cat > config.json << EOF
{
  "system": {
    "name": "Autonomous Agent System",
    "version": "1.0.0",
    "environment": "production"
  },
  "agents": {
    "marketResearch": {
      "enabled": true,
      "schedule": "0 */6 * * *",
      "timeout": 300000
    },
    "solutionCreator": {
      "enabled": true,
      "schedule": "0 */12 * * *",
      "timeout": 600000
    },
    "salesAgent": {
      "enabled": true,
      "schedule": "0 */8 * * *",
      "timeout": 300000
    },
    "agentCreator": {
      "enabled": true,
      "schedule": "0 0 * * 0",
      "timeout": 900000
    }
  },
  "orchestrator": {
    "enabled": true,
    "schedule": "0 */4 * * *",
    "timeout": 1800000
  },
  "monitoring": {
    "enabled": true,
    "schedule": "*/30 * * * *",
    "alerts": true
  },
  "deployment": {
    "autoCommit": true,
    "autoPush": true,
    "backupBeforeDeploy": true
  }
}
EOF

# Create cron configuration
cat > cron-config.json << EOF
{
  "schedules": {
    "marketResearch": "0 */6 * * *",
    "solutionCreation": "0 */12 * * *",
    "salesCampaign": "0 */8 * * *",
    "agentCreation": "0 0 * * 0",
    "deployment": "0 */4 * * *",
    "monitoring": "*/30 * * * *"
  },
  "timeouts": {
    "marketResearch": 300000,
    "solutionCreation": 600000,
    "salesCampaign": 300000,
    "agentCreation": 900000,
    "deployment": 1800000,
    "monitoring": 300000
  }
}
EOF

print_success "Configuration files created"

# Create startup script
print_status "Creating startup script..."

cat > start-autonomous-system.sh << 'EOF'
#!/bin/bash

# Autonomous Agent System Startup Script

set -e

echo "🚀 Starting Autonomous Agent System..."

# Colors for output
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

# Navigate to the automation directory
cd "$(dirname "$0")"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Create PID directory
mkdir -p pids

# Start the master orchestrator
print_status "Starting master orchestrator..."
nohup node autonomous-master-orchestrator.js > logs/master-orchestrator.log 2>&1 &
echo $! > pids/master-orchestrator.pid

# Start monitoring
print_status "Starting monitoring..."
nohup node monitor-automation.js > logs/monitor.log 2>&1 &
echo $! > pids/monitor.pid

print_success "Autonomous Agent System started successfully"
print_status "Check logs/ directory for detailed logs"
print_status "Use stop-autonomous-system.sh to stop the system"
EOF

chmod +x start-autonomous-system.sh

# Create stop script
print_status "Creating stop script..."

cat > stop-autonomous-system.sh << 'EOF'
#!/bin/bash

# Autonomous Agent System Stop Script

echo "🛑 Stopping Autonomous Agent System..."

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

# Navigate to the automation directory
cd "$(dirname "$0")"

# Stop processes by PID
if [ -d "pids" ]; then
    for pid_file in pids/*.pid; do
        if [ -f "$pid_file" ]; then
            pid=$(cat "$pid_file")
            process_name=$(basename "$pid_file" .pid)
            
            if kill -0 "$pid" 2>/dev/null; then
                print_status "Stopping $process_name (PID: $pid)..."
                kill "$pid"
                rm "$pid_file"
                print_success "$process_name stopped"
            else
                print_status "$process_name is not running"
                rm "$pid_file"
            fi
        fi
    done
fi

# Kill any remaining node processes related to our system
pkill -f "autonomous-master-orchestrator.js" || true
pkill -f "monitor-automation.js" || true

print_success "Autonomous Agent System stopped successfully"
EOF

chmod +x stop-autonomous-system.sh

# Create status script
print_status "Creating status script..."

cat > status-autonomous-system.sh << 'EOF'
#!/bin/bash

# Autonomous Agent System Status Script

echo "📊 Autonomous Agent System Status"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
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

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Navigate to the automation directory
cd "$(dirname "$0")"

echo ""

# Check if processes are running
print_status "Checking running processes..."

if [ -d "pids" ]; then
    for pid_file in pids/*.pid; do
        if [ -f "$pid_file" ]; then
            pid=$(cat "$pid_file")
            process_name=$(basename "$pid_file" .pid)
            
            if kill -0 "$pid" 2>/dev/null; then
                print_success "$process_name is running (PID: $pid)"
            else
                print_error "$process_name is not running"
            fi
        fi
    done
else
    print_warning "No PID files found"
fi

echo ""

# Check system resources
print_status "System Resources:"
echo "CPU Usage: $(top -l 1 | grep "CPU usage" | awk '{print $3}' | cut -d'%' -f1)%"
echo "Memory Usage: $(vm_stat | grep "Pages free" | awk '{print $3}' | sed 's/\.//')"
echo "Disk Usage: $(df -h . | tail -1 | awk '{print $5}')"

echo ""

# Check recent logs
print_status "Recent Logs:"
if [ -d "logs" ]; then
    for log_file in logs/*.log; do
        if [ -f "$log_file" ]; then
            echo "$(basename "$log_file"): $(tail -1 "$log_file" 2>/dev/null || echo "No recent activity")"
        fi
    done
else
    print_warning "No logs directory found"
fi

echo ""

# Check configuration
print_status "Configuration:"
if [ -f "config.json" ]; then
    print_success "Configuration file exists"
else
    print_error "Configuration file missing"
fi

if [ -f "cron-config.json" ]; then
    print_success "Cron configuration exists"
else
    print_error "Cron configuration missing"
fi

echo ""
print_status "Use start-autonomous-system.sh to start the system"
print_status "Use stop-autonomous-system.sh to stop the system"
EOF

chmod +x status-autonomous-system.sh

# Create backup script
print_status "Creating backup script..."

cat > backup-autonomous-system.sh << 'EOF'
#!/bin/bash

# Autonomous Agent System Backup Script

echo "💾 Creating backup of Autonomous Agent System..."

# Colors for output
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

# Navigate to the automation directory
cd "$(dirname "$0")"

# Create backup directory with timestamp
backup_dir="backups/backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir"

print_status "Creating backup in $backup_dir..."

# Backup important files and directories
cp -r logs "$backup_dir/" 2>/dev/null || true
cp -r reports "$backup_dir/" 2>/dev/null || true
cp -r marketplace "$backup_dir/" 2>/dev/null || true
cp -r agents "$backup_dir/" 2>/dev/null || true
cp -r sales "$backup_dir/" 2>/dev/null || true
cp -r market-research "$backup_dir/" 2>/dev/null || true
cp -r solutions "$backup_dir/" 2>/dev/null || true
cp -r orchestrator "$backup_dir/" 2>/dev/null || true
cp -r master-orchestrator "$backup_dir/" 2>/dev/null || true

# Backup configuration files
cp config.json "$backup_dir/" 2>/dev/null || true
cp cron-config.json "$backup_dir/" 2>/dev/null || true

# Create backup manifest
cat > "$backup_dir/backup-manifest.txt" << MANIFEST
Autonomous Agent System Backup
Created: $(date)
Backup Directory: $backup_dir

Contents:
- logs/
- reports/
- marketplace/
- agents/
- sales/
- market-research/
- solutions/
- orchestrator/
- master-orchestrator/
- config.json
- cron-config.json

MANIFEST

print_success "Backup created successfully in $backup_dir"
print_status "Backup size: $(du -sh "$backup_dir" | cut -f1)"
EOF

chmod +x backup-autonomous-system.sh

# Create restore script
print_status "Creating restore script..."

cat > restore-autonomous-system.sh << 'EOF'
#!/bin/bash

# Autonomous Agent System Restore Script

echo "🔄 Restoring Autonomous Agent System from backup..."

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
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

# Navigate to the automation directory
cd "$(dirname "$0")"

# Check if backup directory is provided
if [ -z "$1" ]; then
    print_error "Please provide backup directory path"
    echo "Usage: $0 <backup-directory>"
    exit 1
fi

backup_dir="$1"

if [ ! -d "$backup_dir" ]; then
    print_error "Backup directory does not exist: $backup_dir"
    exit 1
fi

print_status "Restoring from backup: $backup_dir"

# Stop the system before restore
print_status "Stopping autonomous system..."
./stop-autonomous-system.sh 2>/dev/null || true

# Restore directories
for dir in logs reports marketplace agents sales market-research solutions orchestrator master-orchestrator; do
    if [ -d "$backup_dir/$dir" ]; then
        print_status "Restoring $dir..."
        rm -rf "$dir" 2>/dev/null || true
        cp -r "$backup_dir/$dir" ./
        print_success "$dir restored"
    fi
done

# Restore configuration files
if [ -f "$backup_dir/config.json" ]; then
    print_status "Restoring config.json..."
    cp "$backup_dir/config.json" ./
    print_success "config.json restored"
fi

if [ -f "$backup_dir/cron-config.json" ]; then
    print_status "Restoring cron-config.json..."
    cp "$backup_dir/cron-config.json" ./
    print_success "cron-config.json restored"
fi

print_success "Restore completed successfully"
print_status "Use start-autonomous-system.sh to start the system"
EOF

chmod +x restore-autonomous-system.sh

# Create cron job setup
print_status "Setting up cron jobs..."

# Create cron setup script
cat > setup-cron-jobs.sh << 'EOF'
#!/bin/bash

# Setup Cron Jobs for Autonomous Agent System

echo "⏰ Setting up cron jobs for Autonomous Agent System..."

# Colors for output
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

# Get the current directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Create cron job entries
CRON_JOBS=(
    "# Autonomous Agent System Cron Jobs"
    "# Market Research - Every 6 hours"
    "0 */6 * * * cd $SCRIPT_DIR && node autonomous-market-research-agent.js >> logs/market-research.log 2>&1"
    ""
    "# Solution Creation - Every 12 hours"
    "0 */12 * * * cd $SCRIPT_DIR && node autonomous-solution-creator-agent.js >> logs/solution-creation.log 2>&1"
    ""
    "# Sales Campaign - Every 8 hours"
    "0 */8 * * * cd $SCRIPT_DIR && node autonomous-sales-agent.js >> logs/sales-campaign.log 2>&1"
    ""
    "# Agent Creation - Weekly"
    "0 0 * * 0 cd $SCRIPT_DIR && node continuous-agent-creator.js >> logs/agent-creation.log 2>&1"
    ""
    "# Master Orchestrator - Every 4 hours"
    "0 */4 * * * cd $SCRIPT_DIR && node autonomous-master-orchestrator.js >> logs/master-orchestrator.log 2>&1"
    ""
    "# Monitoring - Every 30 minutes"
    "*/30 * * * * cd $SCRIPT_DIR && node monitor-automation.js >> logs/monitoring.log 2>&1"
    ""
    "# Backup - Daily at 2 AM"
    "0 2 * * * cd $SCRIPT_DIR && ./backup-autonomous-system.sh >> logs/backup.log 2>&1"
)

# Create temporary cron file
TEMP_CRON=$(mktemp)

# Add existing cron jobs
crontab -l 2>/dev/null | grep -v "Autonomous Agent System" > "$TEMP_CRON" || true

# Add new cron jobs
for job in "${CRON_JOBS[@]}"; do
    echo "$job" >> "$TEMP_CRON"
done

# Install new cron jobs
crontab "$TEMP_CRON"

# Clean up
rm "$TEMP_CRON"

print_success "Cron jobs installed successfully"
print_status "Current cron jobs:"
crontab -l | grep -A 20 "Autonomous Agent System"
EOF

chmod +x setup-cron-jobs.sh

# Create uninstall script
print_status "Creating uninstall script..."

cat > uninstall-autonomous-system.sh << 'EOF'
#!/bin/bash

# Uninstall Autonomous Agent System

echo "🗑️ Uninstalling Autonomous Agent System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Navigate to the automation directory
cd "$(dirname "$0")"

# Stop the system
print_status "Stopping autonomous system..."
./stop-autonomous-system.sh 2>/dev/null || true

# Remove cron jobs
print_status "Removing cron jobs..."
crontab -l 2>/dev/null | grep -v "Autonomous Agent System" | crontab -

# Ask user what to remove
echo ""
print_warning "What would you like to remove?"
echo "1) Remove all files and directories (complete uninstall)"
echo "2) Remove only system files (keep data)"
echo "3) Remove only data files (keep system)"
echo "4) Cancel uninstall"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        print_status "Removing all files and directories..."
        rm -rf logs reports backups temp pids marketplace social-media email-campaigns agents
        rm -f config.json cron-config.json package.json package-lock.json
        rm -f *.js *.sh
        print_success "Complete uninstall completed"
        ;;
    2)
        print_status "Removing system files only..."
        rm -f config.json cron-config.json package.json package-lock.json
        rm -f *.js *.sh
        print_success "System files removed"
        ;;
    3)
        print_status "Removing data files only..."
        rm -rf logs reports backups temp pids marketplace social-media email-campaigns agents
        print_success "Data files removed"
        ;;
    4)
        print_status "Uninstall cancelled"
        exit 0
        ;;
    *)
        print_error "Invalid choice"
        exit 1
        ;;
esac

print_success "Uninstall completed successfully"
EOF

chmod +x uninstall-autonomous-system.sh

# Create README
print_status "Creating README..."

cat > README.md << 'EOF'
# Autonomous Agent System

A comprehensive autonomous agent system that continuously researches, creates, and sells intelligent solutions in the marketplace.

## Features

- **Market Research Agent**: Continuously researches AI trends and market opportunities
- **Solution Creator Agent**: Generates intelligent solutions based on market research
- **Sales Agent**: Creates and manages sales campaigns for solutions
- **Agent Creator**: Continuously creates new specialized agents
- **Master Orchestrator**: Coordinates all agents and manages the complete workflow
- **Monitoring**: Real-time system monitoring and performance tracking

## Quick Start

1. **Setup the system**:
   ```bash
   ./setup-autonomous-system.sh
   ```

2. **Start the system**:
   ```bash
   ./start-autonomous-system.sh
   ```

3. **Check status**:
   ```bash
   ./status-autonomous-system.sh
   ```

4. **Stop the system**:
   ```bash
   ./stop-autonomous-system.sh
   ```

## Scripts

- `setup-autonomous-system.sh` - Initial setup and installation
- `start-autonomous-system.sh` - Start the autonomous system
- `stop-autonomous-system.sh` - Stop the autonomous system
- `status-autonomous-system.sh` - Check system status
- `backup-autonomous-system.sh` - Create system backup
- `restore-autonomous-system.sh` - Restore from backup
- `setup-cron-jobs.sh` - Setup cron jobs for automation
- `uninstall-autonomous-system.sh` - Uninstall the system

## Agents

### Market Research Agent
- Researches AI trends and market opportunities
- Runs every 6 hours
- Outputs market insights and trends

### Solution Creator Agent
- Creates intelligent solutions based on research
- Runs every 12 hours
- Generates solution specifications and pricing

### Sales Agent
- Creates sales campaigns for solutions
- Runs every 8 hours
- Manages marketing content and campaigns

### Agent Creator
- Creates new specialized agents
- Runs weekly
- Identifies gaps and creates new agents

### Master Orchestrator
- Coordinates all agents
- Runs every 4 hours
- Manages complete workflow

## Monitoring

The system includes comprehensive monitoring:
- System performance metrics
- Agent performance tracking
- Solution performance analysis
- Sales campaign metrics

## Configuration

Edit `config.json` to customize:
- Agent schedules
- Timeouts
- Deployment settings
- Monitoring preferences

## Logs

All system activity is logged in the `logs/` directory:
- `master-orchestrator.log` - Master orchestrator logs
- `monitor.log` - Monitoring logs
- `market-research.log` - Market research logs
- `solution-creation.log` - Solution creation logs
- `sales-campaign.log` - Sales campaign logs
- `agent-creation.log` - Agent creation logs

## Backup and Restore

Create backups:
```bash
./backup-autonomous-system.sh
```

Restore from backup:
```bash
./restore-autonomous-system.sh <backup-directory>
```

## Cron Jobs

The system automatically sets up cron jobs for:
- Market research (every 6 hours)
- Solution creation (every 12 hours)
- Sales campaigns (every 8 hours)
- Agent creation (weekly)
- Master orchestration (every 4 hours)
- Monitoring (every 30 minutes)
- Backup (daily at 2 AM)

## Troubleshooting

1. **Check system status**:
   ```bash
   ./status-autonomous-system.sh
   ```

2. **View logs**:
   ```bash
   tail -f logs/master-orchestrator.log
   ```

3. **Restart the system**:
   ```bash
   ./stop-autonomous-system.sh
   ./start-autonomous-system.sh
   ```

4. **Check cron jobs**:
   ```bash
   crontab -l
   ```

## Support

For issues or questions, check the logs in the `logs/` directory or run the status script for system information.
EOF

print_success "README created"

# Test the system
print_status "Testing system components..."

# Test Node.js scripts
print_status "Testing market research agent..."
node autonomous-market-research-agent.js > /dev/null 2>&1 && print_success "Market research agent test passed" || print_warning "Market research agent test failed"

print_status "Testing solution creator agent..."
node autonomous-solution-creator-agent.js > /dev/null 2>&1 && print_success "Solution creator agent test passed" || print_warning "Solution creator agent test failed"

print_status "Testing sales agent..."
node autonomous-sales-agent.js > /dev/null 2>&1 && print_success "Sales agent test passed" || print_warning "Sales agent test failed"

print_status "Testing agent creator..."
node continuous-agent-creator.js > /dev/null 2>&1 && print_success "Agent creator test passed" || print_warning "Agent creator test failed"

# Setup cron jobs
print_status "Setting up cron jobs..."
./setup-cron-jobs.sh

print_success "Autonomous Agent System setup completed successfully!"
echo ""
print_status "Next steps:"
print_status "1. Run './start-autonomous-system.sh' to start the system"
print_status "2. Run './status-autonomous-system.sh' to check system status"
print_status "3. Check 'logs/' directory for detailed logs"
print_status "4. Edit 'config.json' to customize settings"
echo ""
print_status "The system will automatically:"
print_status "- Research market trends every 6 hours"
print_status "- Create solutions every 12 hours"
print_status "- Run sales campaigns every 8 hours"
print_status "- Create new agents weekly"
print_status "- Monitor system performance every 30 minutes"
print_status "- Create daily backups at 2 AM"
echo ""
print_success "Setup complete! 🚀" 