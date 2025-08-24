
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

# Infinite Improvement Loop System Startup Script
# This script launches the complete infinite improvement loop system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT=$(pwd)
LOGS_DIR="$PROJECT_ROOT/logs"
REPORTS_DIR="$PROJECT_ROOT/reports"
BACKUPS_DIR="$PROJECT_ROOT/backups"
INTEGRATIONS_DIR="$PROJECT_ROOT/integrations"
AI_TOOLS_DIR="$PROJECT_ROOT/ai-tools"

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

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if a port is in use
port_in_use() {
    lsof -i :$1 >/dev/null 2>&1
}

# Function to create directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$BACKUPS_DIR"
    mkdir -p "$INTEGRATIONS_DIR"
    mkdir -p "$AI_TOOLS_DIR"
    
    print_success "Directories created successfully"
}

# Function to check dependencies
check_dependencies() {
    print_status "Checking dependencies..."
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check npm
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check required Node.js version
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 16 ]; then
        print_error "Node.js version 16 or higher is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_success "Dependencies check passed"
}

# Function to check environment variables
check_environment() {
    print_status "Checking environment variables..."
    
    # Check for at least one AI provider
    if [ -z "$OPENAI_API_KEY" ] && [ -z "$CLAUDE_API_KEY" ] && [ -z "$CURSOR_API_KEY" ]; then
        print_warning "No AI provider API keys found. Some features may be limited."
        print_warning "Set OPENAI_API_KEY, CLAUDE_API_KEY, or CURSOR_API_KEY for full functionality."
    else
        print_success "AI provider configuration found"
    fi
    
    # Check GitHub token for tool discovery
    if [ -z "$GITHUB_TOKEN" ]; then
        print_warning "GITHUB_TOKEN not set. GitHub tool discovery will be limited."
    else
        print_success "GitHub token configured"
    fi
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        print_success "Dependencies installed successfully"
    else
        print_error "package.json not found in current directory"
        exit 1
    fi
}

# Function to start the infinite improvement loop
start_infinite_loop() {
    print_status "Starting Infinite Improvement Loop..."
    
    # Start the infinite improvement loop in the background
    npm run infinite:start > "$LOGS_DIR/infinite-loop.log" 2>&1 &
    INFINITE_PID=$!
    echo $INFINITE_PID > "$LOGS_DIR/infinite-loop.pid"
    
    print_success "Infinite Improvement Loop started (PID: $INFINITE_PID)"
}

# Function to start AI tool discovery
start_ai_discovery() {
    print_status "Starting AI Tool Discovery Engine..."
    
    # Start the AI tool discovery engine in the background
    npm run ai-tools:start > "$LOGS_DIR/ai-discovery.log" 2>&1 &
    DISCOVERY_PID=$!
    echo $DISCOVERY_PID > "$LOGS_DIR/ai-discovery.pid"
    
    print_success "AI Tool Discovery Engine started (PID: $DISCOVERY_PID)"
}

# Function to start master orchestrator
start_master_orchestrator() {
    print_status "Starting Master Automation Orchestrator..."
    
    # Start the master orchestrator in the background
    npm run master:start > "$LOGS_DIR/master-orchestrator.log" 2>&1 &
    MASTER_PID=$!
    echo $MASTER_PID > "$LOGS_DIR/master-orchestrator.pid"
    
    print_success "Master Automation Orchestrator started (PID: $MASTER_PID)"
}

# Function to start all autonomous systems
start_autonomous_systems() {
    print_status "Starting all autonomous systems..."
    
    # Start all autonomous systems
    npm run autonomous:all > "$LOGS_DIR/autonomous-systems.log" 2>&1 &
    AUTONOMOUS_PID=$!
    echo $AUTONOMOUS_PID > "$LOGS_DIR/autonomous-systems.pid"
    
    print_success "All autonomous systems started (PID: $AUTONOMOUS_PID)"
}

# Function to check system status
check_system_status() {
    print_status "Checking system status..."
    
    sleep 5  # Wait for systems to start
    
    # Check if processes are running
    if [ -f "$LOGS_DIR/infinite-loop.pid" ]; then
        INFINITE_PID=$(cat "$LOGS_DIR/infinite-loop.pid")
        if kill -0 $INFINITE_PID 2>/dev/null; then
            print_success "Infinite Improvement Loop is running (PID: $INFINITE_PID)"
        else
            print_error "Infinite Improvement Loop failed to start"
        fi
    fi
    
    if [ -f "$LOGS_DIR/ai-discovery.pid" ]; then
        DISCOVERY_PID=$(cat "$LOGS_DIR/ai-discovery.pid")
        if kill -0 $DISCOVERY_PID 2>/dev/null; then
            print_success "AI Tool Discovery Engine is running (PID: $DISCOVERY_PID)"
        else
            print_error "AI Tool Discovery Engine failed to start"
        fi
    fi
    
    if [ -f "$LOGS_DIR/master-orchestrator.pid" ]; then
        MASTER_PID=$(cat "$LOGS_DIR/master-orchestrator.pid")
        if kill -0 $MASTER_PID 2>/dev/null; then
            print_success "Master Orchestrator is running (PID: $MASTER_PID)"
        else
            print_error "Master Orchestrator failed to start"
        fi
    fi
}

# Function to display system information
display_system_info() {
    echo
    print_status "=== Infinite Improvement Loop System ==="
    echo
    print_status "System Components:"
    echo "  • Infinite Improvement Loop"
    echo "  • AI Tool Discovery Engine"
    echo "  • Master Automation Orchestrator"
    echo "  • Autonomous Systems (AI Review, Performance, Security, UX, Database)"
    echo
    print_status "Directories:"
    echo "  • Logs: $LOGS_DIR"
    echo "  • Reports: $REPORTS_DIR"
    echo "  • Backups: $BACKUPS_DIR"
    echo "  • Integrations: $INTEGRATIONS_DIR"
    echo "  • AI Tools: $AI_TOOLS_DIR"
    echo
    print_status "Management Commands:"
    echo "  • Check status: npm run infinite:status"
    echo "  • Stop system: npm run infinite:stop"
    echo "  • View logs: tail -f $LOGS_DIR/infinite-loop.log"
    echo "  • Force iteration: npm run infinite:iterate"
    echo
    print_status "Dashboard:"
    echo "  • Automation Dashboard: http://localhost:3001 (if available)"
    echo
}

# Function to handle cleanup on exit
cleanup() {
    print_status "Shutting down Infinite Improvement Loop System..."
    
    # Stop all processes
    if [ -f "$LOGS_DIR/infinite-loop.pid" ]; then
        PID=$(cat "$LOGS_DIR/infinite-loop.pid")
        kill $PID 2>/dev/null || true
        rm -f "$LOGS_DIR/infinite-loop.pid"
    fi
    
    if [ -f "$LOGS_DIR/ai-discovery.pid" ]; then
        PID=$(cat "$LOGS_DIR/ai-discovery.pid")
        kill $PID 2>/dev/null || true
        rm -f "$LOGS_DIR/ai-discovery.pid"
    fi
    
    if [ -f "$LOGS_DIR/master-orchestrator.pid" ]; then
        PID=$(cat "$LOGS_DIR/master-orchestrator.pid")
        kill $PID 2>/dev/null || true
        rm -f "$LOGS_DIR/master-orchestrator.pid"
    fi
    
    if [ -f "$LOGS_DIR/autonomous-systems.pid" ]; then
        PID=$(cat "$LOGS_DIR/autonomous-systems.pid")
        kill $PID 2>/dev/null || true
        rm -f "$LOGS_DIR/autonomous-systems.pid"
    fi
    
    print_success "System shutdown complete"
}

# Set up signal handlers
trap cleanup EXIT INT TERM

# Main execution
main() {
    echo
    print_status "🚀 Starting Infinite Improvement Loop System..."
    echo
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root directory."
        exit 1
    fi
    
    # Run setup steps
    check_dependencies
    check_environment
    create_directories
    install_dependencies
    
    # Start all components
    start_infinite_loop
    start_ai_discovery
    start_master_orchestrator
    start_autonomous_systems
    
    # Check status
    check_system_status
    
    # Display information
    display_system_info
    
    print_success "🎉 Infinite Improvement Loop System is now running!"
    print_status "The system will continuously improve itself and discover new AI tools."
    print_status "Check the logs directory for detailed information."
    echo
    
    # Keep the script running to maintain the processes
    print_status "Press Ctrl+C to stop the system..."
    while true; do
        sleep 60
        # Check if processes are still running
        if [ -f "$LOGS_DIR/infinite-loop.pid" ]; then
            PID=$(cat "$LOGS_DIR/infinite-loop.pid")
            if ! kill -0 $PID 2>/dev/null; then
                print_error "Infinite Improvement Loop process died unexpectedly"
                break
            fi
        fi
    done
}

# Run main function
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

