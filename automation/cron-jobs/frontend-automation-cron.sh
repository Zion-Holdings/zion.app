#!/bin/bash

# Frontend Automation Cron Job
# This script runs the frontend automation system to detect and fix issues

# Set up environment
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
LOG_DIR="$PROJECT_ROOT/automation/frontend-sync-agents/logs"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Log file for this run
LOG_FILE="$LOG_DIR/frontend-automation-cron-$TIMESTAMP.log"

echo "🚀 Starting frontend automation cron job at $(date)" | tee -a "$LOG_FILE"

# Change to project directory
cd "$PROJECT_ROOT" || {
    echo "❌ Failed to change to project directory" | tee -a "$LOG_FILE"
    exit 1
}

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH" | tee -a "$LOG_FILE"
    exit 1
fi

# Check if required dependencies are installed
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found - not a Node.js project" | tee -a "$LOG_FILE"
    exit 1
fi

# Run the frontend automation system
echo "🔧 Running frontend automation system..." | tee -a "$LOG_FILE"

# Create a temporary script to run the automation
cat > /tmp/frontend-automation-runner.js << 'EOF'
const AutomatedFixRunner = require('./automation/frontend-sync-agents/automated-fix-runner');

async function runAutomation() {
    try {
        const runner = new AutomatedFixRunner();
        
        console.log('🚀 Starting automated frontend fix system...');
        
        // Run full automation cycle
        const results = await runner.runFullAutomationCycle();
        
        console.log('✅ Automation completed successfully!');
        console.log('📊 Results:', JSON.stringify(results, null, 2));
        
        return results;
        
    } catch (error) {
        console.error('❌ Automation failed:', error);
        throw error;
    }
}

runAutomation().catch(console.error);
EOF

# Run the automation script
node /tmp/frontend-automation-runner.js 2>&1 | tee -a "$LOG_FILE"

# Check if the automation was successful
if [ ${PIPESTATUS[0]} -eq 0 ]; then
    echo "✅ Frontend automation completed successfully at $(date)" | tee -a "$LOG_FILE"
    
    # Generate a summary report
    echo "📊 Generating summary report..." | tee -a "$LOG_FILE"
    
    # Count issues from the latest analysis
    LATEST_ANALYSIS=$(find "$LOG_DIR" -name "analysis-final-*.json" -type f -printf '%T@ %p\n' | sort -n | tail -1 | cut -f2- -d" ")
    
    if [ -n "$LATEST_ANALYSIS" ] && [ -f "$LATEST_ANALYSIS" ]; then
        echo "📈 Latest analysis results:" | tee -a "$LOG_FILE"
        cat "$LATEST_ANALYSIS" | jq '.summary' 2>/dev/null || echo "Could not parse analysis results" | tee -a "$LOG_FILE"
    fi
    
    # Clean up old log files (keep last 30 days)
    find "$LOG_DIR" -name "*.log" -type f -mtime +30 -delete 2>/dev/null
    find "$LOG_DIR" -name "*.json" -type f -mtime +30 -delete 2>/dev/null
    
else
    echo "❌ Frontend automation failed at $(date)" | tee -a "$LOG_FILE"
    exit 1
fi

# Clean up temporary file
rm -f /tmp/frontend-automation-runner.js

echo "🏁 Frontend automation cron job completed at $(date)" | tee -a "$LOG_FILE" 