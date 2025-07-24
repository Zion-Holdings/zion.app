
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

# Zion App - Autonomous System Setup Script
# This script sets up the autonomous background operation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$SCRIPT_DIR"
LAUNCH_AGENTS_DIR="$HOME/Library/LaunchAgents"
LAUNCH_DAEMONS_DIR="/Library/LaunchDaemons"
PLIST_FILE="com.zion.app.automation.plist"
PLIST_PATH="$LAUNCH_AGENTS_DIR/$PLIST_FILE"

print_status() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_success() { echo -e "${GREEN}🎉 $1${NC}"; }

# Function to check if running as root
check_root() {
    if [ "$EUID" -eq 0 ]; then
        print_warning "Running as root - will install to system LaunchDaemons"
        LAUNCH_AGENTS_DIR="$LAUNCH_DAEMONS_DIR"
        PLIST_PATH="$LAUNCH_AGENTS_DIR/$PLIST_FILE"
    fi
}

# Function to create necessary directories
create_directories() {
    print_info "Creating necessary directories..."
    
    mkdir -p "$PROJECT_ROOT/logs"
    mkdir -p "$AUTOMATION_DIR/logs"
    mkdir -p "$AUTOMATION_DIR/reports"
    mkdir -p "$AUTOMATION_DIR/backups"
    
    print_status "Directories created"
}

# Function to install dependencies
install_dependencies() {
    print_info "Installing Node.js dependencies..."
    
    cd "$AUTOMATION_DIR"
    
    if [ ! -f "package.json" ]; then
        print_error "package.json not found"
        exit 1
    fi
    
    npm install --production
    
    print_status "Dependencies installed"
}

# Function to make scripts executable
make_executable() {
    print_info "Making scripts executable..."
    
    chmod +x "$AUTOMATION_DIR/autonomous-startup.sh"
    chmod +x "$AUTOMATION_DIR/start-infinite-improvement.sh"
    
    print_status "Scripts made executable"
}

# Function to install LaunchDaemon
install_launchdaemon() {
    print_info "Installing LaunchDaemon..."
    
    # Create LaunchAgents directory if it doesn't exist
    mkdir -p "$LAUNCH_AGENTS_DIR"
    
    # Copy plist file
    cp "$AUTOMATION_DIR/$PLIST_FILE" "$PLIST_PATH"
    
    # Set correct permissions
    chmod 644 "$PLIST_PATH"
    
    # Load the LaunchDaemon
    launchctl load "$PLIST_PATH"
    
    print_status "LaunchDaemon installed and loaded"
}

# Function to uninstall LaunchDaemon
uninstall_launchdaemon() {
    print_info "Uninstalling LaunchDaemon..."
    
    if [ -f "$PLIST_PATH" ]; then
        # Unload the LaunchDaemon
        launchctl unload "$PLIST_PATH" 2>/dev/null || true
        
        # Remove the plist file
        rm -f "$PLIST_PATH"
        
        print_status "LaunchDaemon uninstalled"
    else
        print_warning "LaunchDaemon not found"
    fi
}

# Function to start the system
start_system() {
    print_info "Starting autonomous system..."
    
    cd "$AUTOMATION_DIR"
    ./autonomous-startup.sh start
    
    print_success "Autonomous system started"
}

# Function to stop the system
stop_system() {
    print_info "Stopping autonomous system..."
    
    cd "$AUTOMATION_DIR"
    ./autonomous-startup.sh stop
    
    print_success "Autonomous system stopped"
}

# Function to show status
show_status() {
    print_info "Autonomous System Status"
    echo "========================"
    
    # Check LaunchDaemon status
    if launchctl list | grep -q "com.zion.app.automation"; then
        print_status "LaunchDaemon: Loaded"
    else
        print_error "LaunchDaemon: Not loaded"
    fi
    
    # Check system status
    cd "$AUTOMATION_DIR"
    ./autonomous-startup.sh status
    
    echo ""
    print_info "Files:"
    echo "  - Plist: $PLIST_PATH"
    echo "  - Scripts: $AUTOMATION_DIR/"
    echo "  - Logs: $PROJECT_ROOT/logs/"
}

# Function to show help
show_help() {
    echo "Zion App - Autonomous System Setup"
    echo "================================="
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  install   Install autonomous system (setup + start)"
    echo "  setup     Setup autonomous system (install dependencies + LaunchDaemon)"
    echo "  uninstall Remove autonomous system"
    echo "  start     Start autonomous system"
    echo "  stop      Stop autonomous system"
    echo "  status    Show system status"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 install     # Complete installation"
    echo "  $0 setup       # Setup only"
    echo "  $0 status      # Check status"
    echo "  $0 uninstall   # Remove system"
}

# Function to perform complete installation
install_system() {
    echo -e "${PURPLE}🚀 Installing Zion App Autonomous System${NC}"
    echo "================================================"
    
    check_root
    create_directories
    install_dependencies
    make_executable
    install_launchdaemon
    start_system
    
    print_success "Autonomous system installation completed!"
    print_info "The system will now start automatically on boot"
    print_info "Dashboard: http://localhost:3002"
    print_info "Logs: $PROJECT_ROOT/logs/"
}

# Function to perform setup only
setup_system() {
    echo -e "${BLUE}🔧 Setting up Zion App Autonomous System${NC}"
    echo "=============================================="
    
    check_root
    create_directories
    install_dependencies
    make_executable
    install_launchdaemon
    
    print_success "Autonomous system setup completed!"
    print_info "Use '$0 start' to start the system"
    print_info "The system will start automatically on next boot"
}

# Function to uninstall system
uninstall_system() {
    echo -e "${RED}🗑️  Uninstalling Zion App Autonomous System${NC}"
    echo "================================================"
    
    check_root
    stop_system
    uninstall_launchdaemon
    
    print_success "Autonomous system uninstalled!"
    print_info "The system will no longer start automatically"
}

# Main script logic
main() {
    case "${1:-install}" in
        install)
            install_system
            ;;
        setup)
            setup_system
            ;;
        uninstall)
            uninstall_system
            ;;
        start)
            start_system
            ;;
        stop)
            stop_system
            ;;
        status)
            show_status
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

main "$@"
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

