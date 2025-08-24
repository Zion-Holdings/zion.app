
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

# Zion App Continuous Development Startup Script
# This script starts the continuous development system and keeps it running

set -e

echo "🚀 Starting Zion App Continuous Development System"
echo "📅 Started at: $(date)"
echo "🖥️  Host: $(hostname)"
echo "📁 Directory: $(pwd)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the project root."
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed or not in PATH"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed or not in PATH"
    exit 1
fi

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed or not in PATH"
    exit 1
fi

echo "✅ Prerequisites check passed"

# Create logs directory if it doesn't exist
mkdir -p logs

# Function to handle graceful shutdown
cleanup() {
    echo ""
    echo "🛑 Received shutdown signal, cleaning up..."
    
    if [ ! -z "$CONTINUOUS_PID" ]; then
        echo "🛑 Stopping continuous development process (PID: $CONTINUOUS_PID)"
        kill -TERM $CONTINUOUS_PID 2>/dev/null || true
        
        # Wait for process to terminate
        for i in {1..10}; do
            if ! kill -0 $CONTINUOUS_PID 2>/dev/null; then
                break
            fi
            sleep 1
        done
        
        # Force kill if still running
        if kill -0 $CONTINUOUS_PID 2>/dev/null; then
            echo "🛑 Force killing process"
            kill -KILL $CONTINUOUS_PID 2>/dev/null || true
        fi
    fi
    
    echo "✅ Cleanup complete"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Function to restart the continuous development system
restart_continuous_dev() {
    echo "🔄 Restarting continuous development system..."
    
    if [ ! -z "$CONTINUOUS_PID" ]; then
        kill -TERM $CONTINUOUS_PID 2>/dev/null || true
        sleep 2
    fi
    
    start_continuous_dev
}

# Function to start the continuous development system
start_continuous_dev() {
    echo "🚀 Starting continuous development system..."
    
    # Start the continuous development script
    node scripts/continuous-development.cjs > logs/continuous-dev.log 2>&1 &
    CONTINUOUS_PID=$!
    
    echo "📝 Continuous development process started with PID: $CONTINUOUS_PID"
    echo "📋 Logs are being written to: logs/continuous-dev.log"
    
    # Wait a moment for the process to start
    sleep 5
    
    # Check if the process is still running
    if kill -0 $CONTINUOUS_PID 2>/dev/null; then
        echo "✅ Continuous development system is running"
    else
        echo "❌ Continuous development system failed to start"
        exit 1
    fi
}

# Function to monitor the continuous development system
monitor_continuous_dev() {
    echo "👀 Starting monitoring loop..."
    
    while true; do
        # Check if the process is still running
        if ! kill -0 $CONTINUOUS_PID 2>/dev/null; then
            echo "⚠️  Continuous development process stopped unexpectedly"
            echo "🔄 Restarting in 5 seconds..."
            sleep 5
            restart_continuous_dev
        fi
        
        # Check if the development server is responding
        if command -v curl &> /dev/null; then
            if curl -s http://localhost:3001/api/health > /dev/null 2>&1; then
                echo "💚 Health check passed at $(date)"
            else
                echo "⚠️  Health check failed at $(date)"
            fi
        fi
        
        # Sleep for 30 seconds before next check
        sleep 30
    done
}

# Start the continuous development system
start_continuous_dev

# Start monitoring
monitor_continuous_dev
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
