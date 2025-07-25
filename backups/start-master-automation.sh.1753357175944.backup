
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
      #!/bin/bash

# Master Automation Scheduler Startup Script
# This script starts the master automation scheduler that runs all automations every 30 minutes

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
    echo "║              Master Automation Scheduler                     ║"
    echo "║                   30-Minute Cycles                           ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

print_header

print_status "Starting Master Automation Scheduler"
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
    
    if [ ! -z "$SCHEDULER_PID" ]; then
        print_status "Stopping master automation scheduler (PID: $SCHEDULER_PID)"
        kill -TERM $SCHEDULER_PID 2>/dev/null || true
        
        # Wait for process to terminate
        for i in {1..10}; do
            if ! kill -0 $SCHEDULER_PID 2>/dev/null; then
                break
            fi
            sleep 1
        done
        
        # Force kill if still running
        if kill -0 $SCHEDULER_PID 2>/dev/null; then
            print_warning "Force killing scheduler process"
            kill -KILL $SCHEDULER_PID 2>/dev/null || true
        fi
    fi
    
    print_success "Cleanup complete"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Function to start the master automation scheduler
start_scheduler() {
    print_status "Starting master automation scheduler..."
    
    node scripts/master-automation-scheduler.cjs > logs/master-automation-scheduler.log 2>&1 &
    SCHEDULER_PID=$!
    
    print_status "Master automation scheduler started with PID: $SCHEDULER_PID"
    print_status "Logs are being written to: logs/master-automation-scheduler.log"
    
    # Wait a moment for the process to start
    sleep 5
    
    # Check if the process is still running
    if kill -0 $SCHEDULER_PID 2>/dev/null; then
        print_success "Master automation scheduler is running"
        return 0
    else
        print_error "Master automation scheduler failed to start"
        return 1
    fi
}

# Function to monitor the scheduler
monitor_scheduler() {
    print_status "Starting scheduler monitoring..."
    
    while true; do
        # Check if the scheduler is still running
        if ! kill -0 $SCHEDULER_PID 2>/dev/null; then
            print_warning "Master automation scheduler stopped unexpectedly"
            print_status "Restarting in 5 seconds..."
            sleep 5
            start_scheduler
        fi
        
        # Check scheduler health file
        if [ -f "automation/scheduler-health.json" ]; then
            local lastUpdate=$(cat automation/scheduler-health.json | grep -o '"timestamp":"[^"]*"' | cut -d'"' -f4)
            local isRunning=$(cat automation/scheduler-health.json | grep -o '"isRunning":[^,]*' | cut -d':' -f2)
            
            if [ "$isRunning" = "true" ]; then
                print_success "Scheduler health check passed at $(date '+%H:%M:%S')"
            else
                print_warning "Scheduler health check failed at $(date '+%H:%M:%S')"
            fi
        else
            print_warning "Scheduler health file not found"
        fi
        
        # Sleep for 30 seconds before next check
        sleep 30
    done
}

# Main execution
print_status "Starting Master Automation Scheduler..."

# Start the scheduler
if start_scheduler; then
    print_success "Master automation scheduler started successfully!"
    print_status "System will run all automations every 30 minutes"
    print_status "Logs are available in the logs/ directory"
    print_status "Results are saved in the automation/ directory"
    print_status "Press Ctrl+C to stop the system"
    
    # Start monitoring
    monitor_scheduler
else
    print_error "Failed to start master automation scheduler"
    cleanup
fi
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
