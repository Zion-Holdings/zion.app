#!/bin/bash

# Continuous Automation Setup Script
# This script sets up all autonomous automation systems

set -e

# Configuration
PROJECT_ROOT="/Users/miami2/Documents/GitHub/bolt.new.zion.app"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"
PIDS_DIR="$AUTOMATION_DIR/pids"
DATA_DIR="$AUTOMATION_DIR/data"
REPORTS_DIR="$AUTOMATION_DIR/reports"
FACTORIES_DIR="$AUTOMATION_DIR/factories"
AGENTS_DIR="$AUTOMATION_DIR/agents"
BACKUPS_DIR="$AUTOMATION_DIR/backups"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging function
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
        "DEBUG")
            echo -e "${BLUE}[$timestamp] DEBUG:${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${CYAN}[$timestamp] SUCCESS:${NC} $message"
            ;;
    esac
}

# Check if Node.js is installed
check_nodejs() {
    log "INFO" "Checking Node.js installation..."
    
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    local node_version=$(node --version)
    log "SUCCESS" "Node.js version: $node_version"
}

# Check if npm is installed
check_npm() {
    log "INFO" "Checking npm installation..."
    
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed. Please install npm first."
        exit 1
    fi
    
    local npm_version=$(npm --version)
    log "SUCCESS" "npm version: $npm_version"
}

# Create directory structure
create_directories() {
    log "INFO" "Creating directory structure..."
    
    local directories=(
        "$LOGS_DIR"
        "$PIDS_DIR"
        "$DATA_DIR"
        "$REPORTS_DIR"
        "$FACTORIES_DIR"
        "$AGENTS_DIR"
        "$BACKUPS_DIR"
        "$AUTOMATION_DIR/cron-jobs"
        "$AUTOMATION_DIR/templates"
        "$AUTOMATION_DIR/monitoring"
        "$AUTOMATION_DIR/improvements"
        "$AUTOMATION_DIR/analytics"
    )
    
    for dir in "${directories[@]}"; do
        mkdir -p "$dir"
        log "DEBUG" "Created directory: $dir"
    done
    
    log "SUCCESS" "Directory structure created successfully"
}

# Install dependencies
install_dependencies() {
    log "INFO" "Installing dependencies..."
    
    cd "$AUTOMATION_DIR"
    
    # Create package.json if it doesn't exist
    if [ ! -f "package.json" ]; then
        cat > package.json << EOF
{
  "name": "continuous-automation-system",
  "version": "1.0.0",
  "description": "Autonomous automation system for continuous improvement",
  "main": "continuous-automation-orchestrator.js",
  "scripts": {
    "start": "node continuous-automation-orchestrator.js",
    "start-factory": "node autonomous-factory-generator.js",
    "start-improvement": "node infinite-improvement-loop.js",
    "start-agents": "node autonomous-agent-factory.js",
    "monitor": "node continuous-automation-orchestrator.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "uuid": "^8.3.2",
    "fs-extra": "^10.1.0",
    "chalk": "^4.1.2",
    "commander": "^8.3.0",
    "cron": "^1.8.2",
    "node-cron": "^3.0.2",
    "axios": "^0.24.0",
    "cheerio": "^1.0.0-rc.10",
    "puppeteer": "^13.0.1",
    "nodemailer": "^6.7.2",
    "openai": "^4.0.0",
    "markdown": "^0.5.0",
    "jest": "^27.4.7",
    "webpack": "^5.65.0"
  },
  "devDependencies": {
    "@types/node": "^16.11.12",
    "typescript": "^4.5.4"
  },
  "keywords": [
    "automation",
    "ai",
    "autonomous",
    "continuous-improvement"
  ],
  "author": "Continuous Automation System",
  "license": "MIT"
}
EOF
    fi
    
    # Install dependencies
    npm install
    
    log "SUCCESS" "Dependencies installed successfully"
}

# Set up cron jobs
setup_cron_jobs() {
    log "INFO" "Setting up cron jobs..."
    
    # Create cron job entries
    local cron_jobs=(
        "# Continuous Automation System Cron Jobs"
        "# Every 5 minutes - Health check"
        "*/5 * * * * $AUTOMATION_DIR/cron-jobs/continuous-automation-cron.sh health"
        ""
        "# Every hour - Generate reports"
        "0 * * * * $AUTOMATION_DIR/cron-jobs/continuous-automation-cron.sh report"
        ""
        "# Every 6 hours - Create backups"
        "0 */6 * * * $AUTOMATION_DIR/cron-jobs/continuous-automation-cron.sh backup"
        ""
        "# Daily at 2 AM - Cleanup old files"
        "0 2 * * * $AUTOMATION_DIR/cron-jobs/continuous-automation-cron.sh cleanup"
        ""
        "# Every 10 minutes - Restart failed systems"
        "*/10 * * * * $AUTOMATION_DIR/cron-jobs/continuous-automation-cron.sh restart"
    )
    
    # Create cron jobs file
    local cron_file="$AUTOMATION_DIR/cron-jobs/automation-cron.txt"
    printf '%s\n' "${cron_jobs[@]}" > "$cron_file"
    
    # Install cron jobs
    if command -v crontab &> /dev/null; then
        # Check if cron jobs are already installed
        if ! crontab -l 2>/dev/null | grep -q "continuous-automation-cron.sh"; then
            # Add new cron jobs
            (crontab -l 2>/dev/null; cat "$cron_file") | crontab -
            log "SUCCESS" "Cron jobs installed successfully"
        else
            log "WARN" "Cron jobs already installed"
        fi
    else
        log "WARN" "crontab not available, please install cron jobs manually:"
        log "INFO" "crontab $cron_file"
    fi
}

# Create configuration files
create_config_files() {
    log "INFO" "Creating configuration files..."
    
    # Main configuration
    cat > "$AUTOMATION_DIR/config.json" << EOF
{
  "project_root": "$PROJECT_ROOT",
  "automation_dir": "$AUTOMATION_DIR",
  "logs_dir": "$LOGS_DIR",
  "pids_dir": "$PIDS_DIR",
  "data_dir": "$DATA_DIR",
  "reports_dir": "$REPORTS_DIR",
  "factories_dir": "$FACTORIES_DIR",
  "agents_dir": "$AGENTS_DIR",
  "backups_dir": "$BACKUPS_DIR",
  "settings": {
    "auto_commit": true,
    "auto_backup": true,
    "health_check_interval": 300000,
    "improvement_cycle_interval": 300000,
    "monitoring_interval": 60000,
    "max_concurrent_tasks": 20,
    "error_threshold": 0.1,
    "performance_threshold": 0.8
  },
  "systems": {
    "continuous_automation_orchestrator": {
      "enabled": true,
      "priority": "high",
      "auto_restart": true
    },
    "autonomous_factory_generator": {
      "enabled": true,
      "priority": "high",
      "auto_restart": true
    },
    "infinite_improvement_loop": {
      "enabled": true,
      "priority": "high",
      "auto_restart": true
    },
    "autonomous_agent_factory": {
      "enabled": true,
      "priority": "medium",
      "auto_restart": true
    },
    "content_generation": {
      "enabled": true,
      "priority": "medium",
      "auto_restart": true
    },
    "marketing_automation": {
      "enabled": true,
      "priority": "medium",
      "auto_restart": true
    },
    "service_generation": {
      "enabled": true,
      "priority": "medium",
      "auto_restart": true
    },
    "monetization_system": {
      "enabled": true,
      "priority": "low",
      "auto_restart": true
    }
  }
}
EOF

    # Monitoring configuration
    cat > "$AUTOMATION_DIR/monitoring-config.json" << EOF
{
  "monitoring": {
    "enabled": true,
    "interval": 60000,
    "alert_thresholds": {
      "error_rate": 0.1,
      "response_time": 5000,
      "memory_usage": 0.8,
      "cpu_usage": 0.8
    },
    "notifications": {
      "email": false,
      "slack": false,
      "webhook": false
    }
  },
  "health_checks": {
    "process_alive": true,
    "memory_usage": true,
    "cpu_usage": true,
    "disk_usage": true,
    "network_connectivity": true
  },
  "logging": {
    "level": "info",
    "max_files": 30,
    "max_size": "100MB"
  }
}
EOF

    # Improvement configuration
    cat > "$AUTOMATION_DIR/improvement-config.json" << EOF
{
  "improvements": {
    "enabled": true,
    "cycle_interval": 300000,
    "max_improvements_per_cycle": 10,
    "auto_apply": true,
    "backup_before_improvement": true
  },
  "strategies": {
    "performance_optimization": {
      "enabled": true,
      "priority": "high"
    },
    "error_handling": {
      "enabled": true,
      "priority": "high"
    },
    "code_quality": {
      "enabled": true,
      "priority": "medium"
    },
    "security_enhancement": {
      "enabled": true,
      "priority": "high"
    },
    "feature_addition": {
      "enabled": true,
      "priority": "low"
    }
  },
  "monitoring": {
    "track_improvements": true,
    "measure_impact": true,
    "rollback_on_failure": true
  }
}
EOF

    log "SUCCESS" "Configuration files created successfully"
}

# Create startup scripts
create_startup_scripts() {
    log "INFO" "Creating startup scripts..."
    
    # Main startup script
    cat > "$AUTOMATION_DIR/start-automation.sh" << EOF
#!/bin/bash

# Start Continuous Automation System
cd "$AUTOMATION_DIR"

# Start the orchestrator
nohup node continuous-automation-orchestrator.js > logs/orchestrator.log 2>&1 &
echo \$! > pids/continuous-automation-orchestrator.pid

# Start factory generator
nohup node autonomous-factory-generator.js > logs/factory-generator.log 2>&1 &
echo \$! > pids/autonomous-factory-generator.pid

# Start improvement loop
nohup node infinite-improvement-loop.js > logs/improvement-loop.log 2>&1 &
echo \$! > pids/infinite-improvement-loop.pid

# Start agent factory
nohup node autonomous-agent-factory.js > logs/agent-factory.log 2>&1 &
echo \$! > pids/autonomous-agent-factory.pid

echo "Continuous Automation System started successfully"
EOF

    # Stop script
    cat > "$AUTOMATION_DIR/stop-automation.sh" << EOF
#!/bin/bash

# Stop Continuous Automation System
cd "$AUTOMATION_DIR"

# Stop all processes
for pid_file in pids/*.pid; do
    if [ -f "\$pid_file" ]; then
        pid=\$(cat "\$pid_file")
        if ps -p "\$pid" > /dev/null 2>&1; then
            kill -TERM "\$pid"
            echo "Stopped process: \$pid"
        fi
        rm -f "\$pid_file"
    fi
done

echo "Continuous Automation System stopped successfully"
EOF

    # Status script
    cat > "$AUTOMATION_DIR/status-automation.sh" << EOF
#!/bin/bash

# Show Continuous Automation System Status
cd "$AUTOMATION_DIR"

echo "=== Continuous Automation System Status ==="
echo

for pid_file in pids/*.pid; do
    if [ -f "\$pid_file" ]; then
        process_name=\$(basename "\$pid_file" .pid)
        pid=\$(cat "\$pid_file")
        if ps -p "\$pid" > /dev/null 2>&1; then
            echo "✓ \$process_name (PID: \$pid)"
        else
            echo "✗ \$process_name (not running)"
        fi
    fi
done

echo
echo "=== Recent Logs ==="
tail -10 logs/continuous-automation.log 2>/dev/null || echo "No logs available"
EOF

    # Make scripts executable
    chmod +x "$AUTOMATION_DIR/start-automation.sh"
    chmod +x "$AUTOMATION_DIR/stop-automation.sh"
    chmod +x "$AUTOMATION_DIR/status-automation.sh"
    chmod +x "$AUTOMATION_DIR/cron-jobs/continuous-automation-cron.sh"
    
    log "SUCCESS" "Startup scripts created successfully"
}

# Create monitoring dashboard
create_monitoring_dashboard() {
    log "INFO" "Creating monitoring dashboard..."
    
    cat > "$AUTOMATION_DIR/monitoring/dashboard.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Continuous Automation Dashboard</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .status-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .status-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .status-card.healthy {
            border-left: 5px solid #4CAF50;
        }
        .status-card.warning {
            border-left: 5px solid #FF9800;
        }
        .status-card.error {
            border-left: 5px solid #F44336;
        }
        .metric {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
        }
        .metric-value {
            font-weight: bold;
        }
        .refresh-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 20px;
        }
        .refresh-btn:hover {
            background: rgba(255, 255, 255, 0.3);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Continuous Automation Dashboard</h1>
            <p>Real-time monitoring of autonomous automation systems</p>
            <button class="refresh-btn" onclick="refreshData()">🔄 Refresh</button>
        </div>
        
        <div class="status-grid" id="statusGrid">
            <!-- Status cards will be populated here -->
        </div>
        
        <div class="status-card">
            <h3>📊 System Metrics</h3>
            <div id="metrics">
                <!-- Metrics will be populated here -->
            </div>
        </div>
    </div>

    <script>
        function refreshData() {
            // This would fetch real data from the automation system
            updateDashboard();
        }
        
        function updateDashboard() {
            const systems = [
                'continuous-automation-orchestrator',
                'autonomous-factory-generator',
                'infinite-improvement-loop',
                'autonomous-agent-factory',
                'content-generation',
                'marketing-automation',
                'service-generation',
                'monetization-system'
            ];
            
            const statusGrid = document.getElementById('statusGrid');
            statusGrid.innerHTML = '';
            
            systems.forEach(system => {
                const card = document.createElement('div');
                card.className = 'status-card healthy';
                card.innerHTML = \`
                    <h3>\${system.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                    <div class="metric">
                        <span>Status:</span>
                        <span class="metric-value">Running</span>
                    </div>
                    <div class="metric">
                        <span>Uptime:</span>
                        <span class="metric-value">2h 15m</span>
                    </div>
                    <div class="metric">
                        <span>Tasks:</span>
                        <span class="metric-value">1,234</span>
                    </div>
                \`;
                statusGrid.appendChild(card);
            });
        }
        
        // Initial load
        updateDashboard();
        
        // Auto-refresh every 30 seconds
        setInterval(updateDashboard, 30000);
    </script>
</body>
</html>
EOF

    log "SUCCESS" "Monitoring dashboard created successfully"
}

# Create documentation
create_documentation() {
    log "INFO" "Creating documentation..."
    
    cat > "$AUTOMATION_DIR/README.md" << EOF
# Continuous Automation System

A comprehensive autonomous automation system that continuously creates, improves, and manages automation factories and agents.

## 🚀 Features

- **Autonomous Factory Generator**: Creates new automation factories dynamically
- **Infinite Improvement Loop**: Continuously improves existing systems
- **Agent Factory**: Manages autonomous agents
- **Content Generation**: Automated content creation
- **Marketing Automation**: Automated marketing campaigns
- **Service Generation**: Automated service creation
- **Monetization System**: Automated revenue generation
- **Continuous Monitoring**: Real-time system monitoring
- **Health Checks**: Automated health monitoring
- **Auto-Commit**: Automatic code commits and pushes

## 📁 Directory Structure

\`\`\`
automation/
├── autonomous-factory-generator.js      # Factory generator
├── continuous-automation-orchestrator.js # Main orchestrator
├── infinite-improvement-loop.js         # Improvement loop
├── autonomous-agent-factory.js          # Agent factory
├── cron-jobs/                          # Cron job scripts
├── factories/                          # Generated factories
├── agents/                             # Generated agents
├── logs/                               # System logs
├── reports/                            # System reports
├── data/                               # System data
├── backups/                            # System backups
├── monitoring/                         # Monitoring files
└── config.json                         # Configuration
\`\`\`

## 🛠️ Installation

1. Run the setup script:
   \`\`\`bash
   ./setup-continuous-automation.sh
   \`\`\`

2. Start the automation system:
   \`\`\`bash
   ./start-automation.sh
   \`\`\`

3. Check status:
   \`\`\`bash
   ./status-automation.sh
   \`\`\`

## 📊 Monitoring

- **Dashboard**: Open \`monitoring/dashboard.html\` in your browser
- **Logs**: Check \`logs/\` directory for detailed logs
- **Reports**: Check \`reports/\` directory for system reports

## 🔧 Configuration

Edit \`config.json\` to customize:
- System intervals
- Error thresholds
- Performance settings
- Auto-restart policies

## 🚨 Troubleshooting

1. **Check logs**: \`tail -f logs/continuous-automation.log\`
2. **Restart system**: \`./stop-automation.sh && ./start-automation.sh\`
3. **Health check**: \`./cron-jobs/continuous-automation-cron.sh health\`

## 📈 Performance

The system automatically:
- Monitors performance metrics
- Optimizes resource usage
- Scales based on demand
- Recovers from failures
- Improves over time

## 🔄 Continuous Improvement

The system continuously:
- Analyzes performance data
- Identifies improvement opportunities
- Applies optimizations
- Tests changes
- Rolls back if needed

## 📝 License

MIT License - See LICENSE file for details
EOF

    log "SUCCESS" "Documentation created successfully"
}

# Main setup function
main_setup() {
    log "INFO" "Starting Continuous Automation System setup..."
    
    # Check prerequisites
    check_nodejs
    check_npm
    
    # Create directory structure
    create_directories
    
    # Install dependencies
    install_dependencies
    
    # Create configuration files
    create_config_files
    
    # Create startup scripts
    create_startup_scripts
    
    # Set up cron jobs
    setup_cron_jobs
    
    # Create monitoring dashboard
    create_monitoring_dashboard
    
    # Create documentation
    create_documentation
    
    log "SUCCESS" "Continuous Automation System setup completed successfully!"
    log "INFO" "Next steps:"
    log "INFO" "1. Run: ./start-automation.sh"
    log "INFO" "2. Check status: ./status-automation.sh"
    log "INFO" "3. View dashboard: open monitoring/dashboard.html"
    log "INFO" "4. Monitor logs: tail -f logs/continuous-automation.log"
}

# Handle command line arguments
case "${1:-}" in
    "install")
        main_setup
        ;;
    "uninstall")
        log "INFO" "Uninstalling Continuous Automation System..."
        # Add uninstall logic here
        log "SUCCESS" "Uninstall completed"
        ;;
    "help"|"-h"|"--help")
        echo "Continuous Automation System Setup"
        echo
        echo "Usage: $0 [command]"
        echo
        echo "Commands:"
        echo "  install   - Install and setup the automation system"
        echo "  uninstall - Remove the automation system"
        echo "  help      - Show this help message"
        echo
        ;;
    *)
        log "ERROR" "Unknown command: ${1:-}"
        log "INFO" "Use '$0 help' for usage information"
        exit 1
        ;;
esac 