#!/bin/bash

# Productivity Automation System Setup Script
# This script sets up the productivity automation system with all necessary dependencies and configurations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
PRODUCTIVITY_DIR="$AUTOMATION_DIR/productivity-agents"
REPORTS_DIR="$AUTOMATION_DIR/reports"
LOGS_DIR="$AUTOMATION_DIR/logs"
CRON_DIR="$AUTOMATION_DIR/cron-jobs"

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

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to create directory if it doesn't exist
create_directory() {
    if [ ! -d "$1" ]; then
        mkdir -p "$1"
        print_status "Created directory: $1"
    else
        print_status "Directory already exists: $1"
    fi
}

# Function to check Node.js and npm
check_node_requirements() {
    print_status "Checking Node.js requirements..."
    
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    NPM_VERSION=$(npm --version)
    
    print_success "Node.js version: $NODE_VERSION"
    print_success "npm version: $NPM_VERSION"
}

# Function to install npm dependencies
install_dependencies() {
    print_status "Installing npm dependencies..."
    
    cd "$AUTOMATION_DIR"
    
    if [ -f "package.json" ]; then
        npm install
        print_success "npm dependencies installed successfully"
    else
        print_warning "No package.json found in automation directory"
    fi
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    # Create main directories
    create_directory "$PRODUCTIVITY_DIR"
    create_directory "$REPORTS_DIR"
    create_directory "$LOGS_DIR"
    create_directory "$CRON_DIR"
    
    # Create subdirectories for reports
    create_directory "$REPORTS_DIR/productivity-reports"
    create_directory "$REPORTS_DIR/workflow-automation-reports"
    create_directory "$REPORTS_DIR/collaboration-automation-reports"
    create_directory "$REPORTS_DIR/knowledge-management-reports"
    create_directory "$REPORTS_DIR/time-management-reports"
    create_directory "$REPORTS_DIR/communication-automation-reports"
    create_directory "$REPORTS_DIR/task-automation-reports"
    create_directory "$REPORTS_DIR/learning-automation-reports"
    create_directory "$REPORTS_DIR/decision-support-reports"
    create_directory "$REPORTS_DIR/resource-optimization-reports"
    create_directory "$REPORTS_DIR/quality-control-reports"
    
    # Create subdirectories for logs
    create_directory "$LOGS_DIR/productivity-logs"
    create_directory "$LOGS_DIR/workflow-automation-logs"
    create_directory "$LOGS_DIR/collaboration-automation-logs"
    create_directory "$LOGS_DIR/knowledge-management-logs"
    create_directory "$LOGS_DIR/time-management-logs"
    create_directory "$LOGS_DIR/communication-automation-logs"
    create_directory "$LOGS_DIR/task-automation-logs"
    create_directory "$LOGS_DIR/learning-automation-logs"
    create_directory "$LOGS_DIR/decision-support-logs"
    create_directory "$LOGS_DIR/resource-optimization-logs"
    create_directory "$LOGS_DIR/quality-control-logs"
}

# Function to create cron job configuration
setup_cron_jobs() {
    print_status "Setting up cron job configuration..."
    
    CRON_FILE="$CRON_DIR/productivity-automation-cron.sh"
    
    cat > "$CRON_FILE" << 'EOF'
#!/bin/bash

# Productivity Automation System Cron Jobs
# This file contains scheduled tasks for the productivity automation system

set -e

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LAUNCHER="$AUTOMATION_DIR/launch-productivity-automation.js"
LOGS_DIR="$AUTOMATION_DIR/logs/productivity-logs"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOGS_DIR/cron.log"
}

# Function to check if launcher exists
check_launcher() {
    if [ ! -f "$LAUNCHER" ]; then
        log_message "ERROR: Launcher not found at $LAUNCHER"
        exit 1
    fi
}

# Function to start productivity automation system
start_productivity_system() {
    log_message "Starting productivity automation system..."
    cd "$AUTOMATION_DIR"
    node "$LAUNCHER" start >> "$LOGS_DIR/startup.log" 2>&1
    log_message "Productivity automation system started"
}

# Function to stop productivity automation system
stop_productivity_system() {
    log_message "Stopping productivity automation system..."
    cd "$AUTOMATION_DIR"
    node "$LAUNCHER" stop >> "$LOGS_DIR/shutdown.log" 2>&1
    log_message "Productivity automation system stopped"
}

# Function to check system status
check_system_status() {
    log_message "Checking productivity automation system status..."
    cd "$AUTOMATION_DIR"
    node "$LAUNCHER" status >> "$LOGS_DIR/status.log" 2>&1
    log_message "Status check completed"
}

# Function to restart specific agent
restart_agent() {
    local agent_type="$1"
    log_message "Restarting $agent_type agent..."
    cd "$AUTOMATION_DIR"
    node "$LAUNCHER" restart "$agent_type" >> "$LOGS_DIR/restart.log" 2>&1
    log_message "$agent_type agent restarted"
}

# Function to generate system report
generate_system_report() {
    log_message "Generating system report..."
    cd "$AUTOMATION_DIR"
    node "$LAUNCHER" status > "$LOGS_DIR/system-report-$(date +%Y%m%d-%H%M%S).json" 2>&1
    log_message "System report generated"
}

# Function to cleanup old logs
cleanup_old_logs() {
    log_message "Cleaning up old logs..."
    find "$LOGS_DIR" -name "*.log" -mtime +7 -delete
    find "$LOGS_DIR" -name "*.json" -mtime +30 -delete
    log_message "Old logs cleaned up"
}

# Main execution based on command line argument
case "${1:-}" in
    "start")
        check_launcher
        start_productivity_system
        ;;
    "stop")
        check_launcher
        stop_productivity_system
        ;;
    "status")
        check_launcher
        check_system_status
        ;;
    "restart")
        if [ -z "$2" ]; then
            log_message "ERROR: Agent type not specified for restart"
            exit 1
        fi
        check_launcher
        restart_agent "$2"
        ;;
    "report")
        check_launcher
        generate_system_report
        ;;
    "cleanup")
        cleanup_old_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|status|restart <agent-type>|report|cleanup}"
        echo ""
        echo "Commands:"
        echo "  start                    Start productivity automation system"
        echo "  stop                     Stop productivity automation system"
        echo "  status                   Check system status"
        echo "  restart <agent-type>     Restart specific agent"
        echo "  report                   Generate system report"
        echo "  cleanup                  Clean up old logs"
        echo ""
        echo "Agent Types:"
        echo "  workflow-automation      Workflow automation agent"
        echo "  collaboration-automation Collaboration automation agent"
        echo "  knowledge-management     Knowledge management agent"
        echo "  time-management         Time management agent"
        echo "  communication-automation Communication automation agent"
        echo "  task-automation         Task automation agent"
        echo "  learning-automation     Learning automation agent"
        echo "  decision-support        Decision support agent"
        echo "  resource-optimization   Resource optimization agent"
        echo "  quality-control         Quality control agent"
        exit 1
        ;;
esac
EOF

    chmod +x "$CRON_FILE"
    print_success "Cron job configuration created: $CRON_FILE"
}

# Function to create systemd service file (if systemd is available)
setup_systemd_service() {
    if command_exists systemctl; then
        print_status "Setting up systemd service..."
        
        SERVICE_FILE="/etc/systemd/system/productivity-automation.service"
        
        cat > "$SERVICE_FILE" << EOF
[Unit]
Description=Productivity Automation System
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$AUTOMATION_DIR
ExecStart=/usr/bin/node $AUTOMATION_DIR/launch-productivity-automation.js start
ExecStop=/usr/bin/node $AUTOMATION_DIR/launch-productivity-automation.js stop
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

        print_success "Systemd service file created: $SERVICE_FILE"
        print_status "To enable the service, run: sudo systemctl enable productivity-automation.service"
        print_status "To start the service, run: sudo systemctl start productivity-automation.service"
    else
        print_warning "systemctl not found, skipping systemd service setup"
    fi
}

# Function to create environment configuration
setup_environment() {
    print_status "Setting up environment configuration..."
    
    ENV_FILE="$AUTOMATION_DIR/.env.productivity"
    
    cat > "$ENV_FILE" << EOF
# Productivity Automation System Environment Configuration

# System Configuration
PRODUCTIVITY_AUTOMATION_ENABLED=true
PRODUCTIVITY_AUTOMATION_LOG_LEVEL=info
PRODUCTIVITY_AUTOMATION_REPORT_RETENTION_DAYS=30

# Agent Configuration
WORKFLOW_AUTOMATION_ENABLED=true
COLLABORATION_AUTOMATION_ENABLED=true
KNOWLEDGE_MANAGEMENT_ENABLED=true
TIME_MANAGEMENT_ENABLED=true
COMMUNICATION_AUTOMATION_ENABLED=true
TASK_AUTOMATION_ENABLED=true
LEARNING_AUTOMATION_ENABLED=true
DECISION_SUPPORT_ENABLED=true
RESOURCE_OPTIMIZATION_ENABLED=true
QUALITY_CONTROL_ENABLED=true

# Monitoring Configuration
HEALTH_CHECK_INTERVAL=300000
SYSTEM_REPORT_INTERVAL=1800000
CLEANUP_INTERVAL=3600000

# Logging Configuration
LOG_DIR=$LOGS_DIR
REPORT_DIR=$REPORTS_DIR

# Performance Configuration
MAX_CONCURRENT_AGENTS=10
AGENT_TIMEOUT=30000
RETRY_ATTEMPTS=3
EOF

    print_success "Environment configuration created: $ENV_FILE"
}

# Function to create package.json if it doesn't exist
create_package_json() {
    if [ ! -f "$AUTOMATION_DIR/package.json" ]; then
        print_status "Creating package.json for productivity automation..."
        
        cat > "$AUTOMATION_DIR/package.json" << EOF
{
  "name": "productivity-automation-system",
  "version": "1.0.0",
  "description": "Productivity Automation System for project development",
  "main": "launch-productivity-automation.js",
  "scripts": {
    "start": "node launch-productivity-automation.js start",
    "stop": "node launch-productivity-automation.js stop",
    "status": "node launch-productivity-automation.js status",
    "restart": "node launch-productivity-automation.js restart",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "automation",
    "productivity",
    "workflow",
    "development"
  ],
  "author": "Productivity Automation System",
  "license": "MIT",
  "dependencies": {
    "fs": "^0.0.1-security",
    "path": "^0.12.7",
    "child_process": "^1.0.2"
  },
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  }
}
EOF

        print_success "package.json created"
    else
        print_status "package.json already exists"
    fi
}

# Function to create README for productivity automation
create_readme() {
    print_status "Creating README for productivity automation system..."
    
    README_FILE="$AUTOMATION_DIR/PRODUCTIVITY_AUTOMATION_README.md"
    
    cat > "$README_FILE" << 'EOF'
# Productivity Automation System

A comprehensive automation system designed to enhance project development productivity through specialized autonomous agents.

## Overview

The Productivity Automation System consists of 10 specialized agents that work together to optimize various aspects of project development:

### Agent Types

1. **Workflow Automation Agent** - Automates development workflows and processes
2. **Collaboration Automation Agent** - Enhances team collaboration and communication
3. **Knowledge Management Agent** - Manages and organizes project knowledge and documentation
4. **Time Management Agent** - Optimizes time allocation and productivity tracking
5. **Communication Automation Agent** - Automates communication workflows and notifications
6. **Task Automation Agent** - Automates task management and prioritization
7. **Learning Automation Agent** - Facilitates continuous learning and skill development
8. **Decision Support Agent** - Provides data-driven decision support and analysis
9. **Resource Optimization Agent** - Optimizes resource allocation and utilization
10. **Quality Control Agent** - Ensures quality standards and process compliance

## Features

- **Automated Workflow Management**: Streamlines development processes
- **Team Collaboration Enhancement**: Improves communication and coordination
- **Knowledge Organization**: Centralizes and manages project information
- **Time Optimization**: Tracks and optimizes productivity metrics
- **Communication Automation**: Automates notifications and status updates
- **Task Management**: Prioritizes and tracks development tasks
- **Learning Facilitation**: Supports continuous skill development
- **Decision Support**: Provides data-driven insights and recommendations
- **Resource Optimization**: Monitors and optimizes resource usage
- **Quality Assurance**: Ensures adherence to quality standards

## Installation

1. Run the setup script:
   ```bash
   ./setup-productivity-automation.sh
   ```

2. Install dependencies:
   ```bash
   cd automation
   npm install
   ```

## Usage

### Starting the System

```bash
cd automation
node launch-productivity-automation.js start
```

### Stopping the System

```bash
cd automation
node launch-productivity-automation.js stop
```

### Checking Status

```bash
cd automation
node launch-productivity-automation.js status
```

### Restarting Specific Agent

```bash
cd automation
node launch-productivity-automation.js restart workflow-automation
```

## Cron Jobs

The system includes automated cron jobs for:

- **Every 5 minutes**: Health checks and monitoring
- **Every 15 minutes**: Optimization tasks
- **Every 30 minutes**: System reports
- **Every hour**: Log cleanup
- **Daily at 2 AM**: Full system maintenance
- **Weekly on Sunday at 3 AM**: System backups

## Configuration

Environment variables can be configured in `.env.productivity`:

- `PRODUCTIVITY_AUTOMATION_ENABLED`: Enable/disable the system
- `LOG_LEVEL`: Set logging level (debug, info, warn, error)
- `REPORT_RETENTION_DAYS`: How long to keep reports
- Agent-specific enable/disable flags

## Monitoring

The system provides comprehensive monitoring through:

- **Health Reports**: Agent status and performance metrics
- **System Reports**: Overall system health and statistics
- **Optimization Reports**: Performance improvements and recommendations
- **Process Analysis**: Detailed workflow and process analysis

## Logs

Logs are stored in `logs/` directory with the following structure:

- `productivity-logs/`: System-level logs
- `workflow-automation-logs/`: Workflow automation logs
- `collaboration-automation-logs/`: Collaboration automation logs
- `knowledge-management-logs/`: Knowledge management logs
- `time-management-logs/`: Time management logs
- `communication-automation-logs/`: Communication automation logs
- `task-automation-logs/`: Task automation logs
- `learning-automation-logs/`: Learning automation logs
- `decision-support-logs/`: Decision support logs
- `resource-optimization-logs/`: Resource optimization logs
- `quality-control-logs/`: Quality control logs

## Reports

Reports are generated in `reports/` directory with the following structure:

- `productivity-reports/`: System-level reports
- `workflow-automation-reports/`: Workflow analysis reports
- `collaboration-automation-reports/`: Collaboration analysis reports
- `knowledge-management-reports/`: Knowledge management reports
- `time-management-reports/`: Time management reports
- `communication-automation-reports/`: Communication analysis reports
- `task-automation-reports/`: Task management reports
- `learning-automation-reports/`: Learning analysis reports
- `decision-support-reports/`: Decision support reports
- `resource-optimization-reports/`: Resource optimization reports
- `quality-control-reports/`: Quality control reports

## Troubleshooting

### Common Issues

1. **Agent not starting**: Check Node.js version and dependencies
2. **Permission errors**: Ensure proper file permissions
3. **Memory issues**: Monitor system resources
4. **Network issues**: Check connectivity for external services

### Debug Mode

Enable debug logging by setting `LOG_LEVEL=debug` in `.env.productivity`

### Manual Agent Restart

```bash
cd automation
node launch-productivity-automation.js restart <agent-type>
```

## Support

For issues and questions:

1. Check the logs in `logs/` directory
2. Review system status: `node launch-productivity-automation.js status`
3. Check agent health reports
4. Review optimization recommendations

## License

MIT License - see LICENSE file for details.
EOF

    print_success "README created: $README_FILE"
}

# Function to set proper permissions
set_permissions() {
    print_status "Setting proper permissions..."
    
    # Make scripts executable
    chmod +x "$AUTOMATION_DIR/launch-productivity-automation.js"
    chmod +x "$CRON_DIR/productivity-automation-cron.sh"
    
    # Set directory permissions
    find "$PRODUCTIVITY_DIR" -type d -exec chmod 755 {} \;
    find "$REPORTS_DIR" -type d -exec chmod 755 {} \;
    find "$LOGS_DIR" -type d -exec chmod 755 {} \;
    
    print_success "Permissions set successfully"
}

# Function to validate setup
validate_setup() {
    print_status "Validating setup..."
    
    # Check if required files exist
    required_files=(
        "$AUTOMATION_DIR/productivity-automation-factory.js"
        "$AUTOMATION_DIR/launch-productivity-automation.js"
        "$PRODUCTIVITY_DIR/workflow-automation-agent.js"
        "$CRON_DIR/productivity-automation-cron.sh"
    )
    
    for file in "${required_files[@]}"; do
        if [ ! -f "$file" ]; then
            print_error "Required file not found: $file"
            exit 1
        fi
    done
    
    # Check if required directories exist
    required_dirs=(
        "$PRODUCTIVITY_DIR"
        "$REPORTS_DIR"
        "$LOGS_DIR"
        "$CRON_DIR"
    )
    
    for dir in "${required_dirs[@]}"; do
        if [ ! -d "$dir" ]; then
            print_error "Required directory not found: $dir"
            exit 1
        fi
    done
    
    print_success "Setup validation completed successfully"
}

# Function to display setup summary
display_summary() {
    echo ""
    echo "=========================================="
    echo "Productivity Automation System Setup Complete"
    echo "=========================================="
    echo ""
    echo "System Components:"
    echo "  - Factory: $AUTOMATION_DIR/productivity-automation-factory.js"
    echo "  - Launcher: $AUTOMATION_DIR/launch-productivity-automation.js"
    echo "  - Agents: $PRODUCTIVITY_DIR/"
    echo "  - Reports: $REPORTS_DIR/"
    echo "  - Logs: $LOGS_DIR/"
    echo "  - Cron Jobs: $CRON_DIR/"
    echo ""
    echo "Next Steps:"
    echo "  1. Start the system: cd $AUTOMATION_DIR && node launch-productivity-automation.js start"
    echo "  2. Check status: node launch-productivity-automation.js status"
    echo "  3. View logs: tail -f $LOGS_DIR/productivity-logs/cron.log"
    echo ""
    echo "Documentation:"
    echo "  - README: $AUTOMATION_DIR/PRODUCTIVITY_AUTOMATION_README.md"
    echo "  - Help: node launch-productivity-automation.js help"
    echo ""
    echo "Cron Jobs:"
    echo "  - Manual: $CRON_DIR/productivity-automation-cron.sh"
    echo "  - Systemd: sudo systemctl enable productivity-automation.service"
    echo ""
}

# Main execution
main() {
    echo "=========================================="
    echo "Productivity Automation System Setup"
    echo "=========================================="
    echo ""
    
    print_status "Starting setup process..."
    
    # Check requirements
    check_node_requirements
    
    # Create directories
    create_directories
    
    # Install dependencies
    install_dependencies
    
    # Create package.json if needed
    create_package_json
    
    # Setup cron jobs
    setup_cron_jobs
    
    # Setup systemd service
    setup_systemd_service
    
    # Setup environment
    setup_environment
    
    # Create README
    create_readme
    
    # Set permissions
    set_permissions
    
    # Validate setup
    validate_setup
    
    # Display summary
    display_summary
    
    print_success "Productivity Automation System setup completed successfully!"
}

# Run main function
main "$@" 