
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

# Zion App Continuous Development - Final Startup Script
# This script provides a reliable way to start the continuous development system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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
    echo -e "${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                Zion App Continuous Development               ║"
    echo "║                        Startup Script                        ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

print_header

print_status "Starting Zion App Continuous Development System"
print_status "Host: $(hostname)"
print_status "Directory: $(pwd)"
print_status "User: $(whoami)"

# Check prerequisites
print_status "Checking prerequisites..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this from the project root."
    exit 1
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed or not in PATH"
    exit 1
fi

# Check npm
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed or not in PATH"
    exit 1
fi

# Check git
if ! command -v git &> /dev/null; then
    print_error "Git is not installed or not in PATH"
    exit 1
fi

print_success "Prerequisites check passed"

# Create necessary directories
print_status "Creating directories..."
mkdir -p logs
mkdir -p automation
print_success "Directories created"

# Function to handle graceful shutdown
cleanup() {
    echo ""
    print_status "Received shutdown signal, cleaning up..."
    
    if [ ! -z "$DEV_PID" ]; then
        print_status "Stopping development server (PID: $DEV_PID)"
        kill -TERM $DEV_PID 2>/dev/null || true
    fi
    
    if [ ! -z "$CONTINUOUS_PID" ]; then
        print_status "Stopping continuous development process (PID: $CONTINUOUS_PID)"
        kill -TERM $CONTINUOUS_PID 2>/dev/null || true
    fi
    
    # Wait for processes to terminate
    for i in {1..10}; do
        if [ ! -z "$DEV_PID" ] && kill -0 $DEV_PID 2>/dev/null; then
            sleep 1
        fi
        if [ ! -z "$CONTINUOUS_PID" ] && kill -0 $CONTINUOUS_PID 2>/dev/null; then
            sleep 1
        fi
    done
    
    # Force kill if still running
    if [ ! -z "$DEV_PID" ] && kill -0 $DEV_PID 2>/dev/null; then
        print_warning "Force killing development server"
        kill -KILL $DEV_PID 2>/dev/null || true
    fi
    
    if [ ! -z "$CONTINUOUS_PID" ] && kill -0 $CONTINUOUS_PID 2>/dev/null; then
        print_warning "Force killing continuous development process"
        kill -KILL $CONTINUOUS_PID 2>/dev/null || true
    fi
    
    print_success "Cleanup complete"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Function to start development server
start_dev_server() {
    print_status "Starting development server..."
    
    # Kill any existing processes on port 3001
    lsof -ti:3001 | xargs kill -9 2>/dev/null || true
    
    # Start the development server
    npm run dev > logs/dev-server.log 2>&1 &
    DEV_PID=$!
    
    print_status "Development server started with PID: $DEV_PID"
    
    # Wait for server to start
    local attempts=0
    while [ $attempts -lt 30 ]; do
        if curl -s http://localhost:3001/api/health > /dev/null 2>&1; then
            print_success "Development server is ready!"
            return 0
        fi
        sleep 2
        attempts=$((attempts + 1))
    done
    
    print_error "Development server failed to start within 60 seconds"
    return 1
}

# Function to start continuous development system
start_continuous_dev() {
    print_status "Starting continuous development system..."
    
    node scripts/simple-continuous-dev.cjs > logs/simple-continuous-dev.log 2>&1 &
    CONTINUOUS_PID=$!
    
    print_status "Continuous development process started with PID: $CONTINUOUS_PID"
    
    # Wait a moment for the process to start
    sleep 5
    
    # Check if the process is still running
    if kill -0 $CONTINUOUS_PID 2>/dev/null; then
        print_success "Continuous development system is running"
        return 0
    else
        print_error "Continuous development system failed to start"
        return 1
    fi
}

# Function to monitor the system
monitor_system() {
    print_status "Starting system monitoring..."
    
    while true; do
        # Check if development server is still running
        if [ ! -z "$DEV_PID" ] && ! kill -0 $DEV_PID 2>/dev/null; then
            print_warning "Development server stopped unexpectedly"
            start_dev_server
        fi
        
        # Check if continuous development system is still running
        if [ ! -z "$CONTINUOUS_PID" ] && ! kill -0 $CONTINUOUS_PID 2>/dev/null; then
            print_warning "Continuous development system stopped unexpectedly"
            start_continuous_dev
        fi
        
        # Check health endpoint
        if curl -s http://localhost:3001/api/health > /dev/null 2>&1; then
            print_success "Health check passed at $(date '+%H:%M:%S')"
        else
            print_warning "Health check failed at $(date '+%H:%M:%S')"
        fi
        
        # Sleep for 30 seconds before next check
        sleep 30
    done
}

# Main execution
print_status "Starting Zion App Continuous Development System..."

# Start development server
if start_dev_server; then
    # Start continuous development system
    if start_continuous_dev; then
        print_success "All systems started successfully!"
        print_status "System is now running continuously"
        print_status "Logs are available in the logs/ directory"
        print_status "Health check: http://localhost:3001/api/health"
        print_status "Press Ctrl+C to stop the system"
        
        # Start monitoring
        monitor_system
    else
        print_error "Failed to start continuous development system"
        cleanup
    fi
else
    print_error "Failed to start development server"
    cleanup
fi
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
