#!/bin/bash

# Infinite Improvement Loop System Startup Script
# This script launches the complete AI-powered infinite improvement system

set -e

echo "🚀 Starting Infinite Improvement Loop System..."
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[SYSTEM]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    print_error "Node.js version 16+ is required. Current version: $(node -v)"
    exit 1
fi

print_status "Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "npm version: $(npm -v)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

print_status "Project directory confirmed"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_header "Installing dependencies..."
    npm install
    print_status "Dependencies installed successfully"
else
    print_status "Dependencies already installed"
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    print_warning ".env file not found. Creating default .env file..."
    cat > .env << EOF
# AI Providers Configuration
OPENAI_ENABLED=false
OPENAI_API_KEY=your_openai_key_here
OPENAI_MODEL=gpt-4-turbo-preview

CLAUDE_ENABLED=false
CLAUDE_API_KEY=your_claude_key_here
CLAUDE_MODEL=claude-3-sonnet-20240229

CURSOR_AI_ENABLED=false
CURSOR_API_KEY=your_cursor_key_here

LOCAL_AI_ENABLED=false
LOCAL_AI_ENDPOINT=http://localhost:11434
LOCAL_AI_MODEL=codellama:7b

# External Services
GITHUB_TOKEN=your_github_token_here

# System Settings
NODE_ENV=production
LOG_LEVEL=info

# Enhancement Settings
ENHANCEMENT_INTERVAL=300000
DISCOVERY_INTERVAL=900000
MONITORING_INTERVAL=300000
EOF
    print_status "Default .env file created. Please update with your API keys."
    print_warning "You can edit .env file to enable AI providers and add your API keys."
fi

# Create necessary directories
print_header "Creating system directories..."
mkdir -p logs reports backups enhancements ai-models integrations orchestrator

# Check if required scripts exist
REQUIRED_SCRIPTS=(
    "scripts/infinite-improvement-loop.cjs"
    "scripts/ai-tool-discovery-engine.cjs"
    "scripts/ai-powered-computer-enhancement.cjs"
    "scripts/computer-ai-orchestrator.cjs"
    "scripts/ai-code-review-automation.cjs"
    "scripts/performance-optimization-automation.cjs"
    "scripts/security-monitoring-automation.cjs"
    "scripts/ux-enhancement-automation.cjs"
    "scripts/database-health-automation.cjs"
)

for script in "${REQUIRED_SCRIPTS[@]}"; do
    if [ ! -f "$script" ]; then
        print_error "Required script not found: $script"
        exit 1
    fi
done

print_status "All required scripts found"

# Display system information
print_header "System Information"
echo "======================"
echo "Project: $(node -e "console.log(require('./package.json').name)")"
echo "Version: $(node -e "console.log(require('./package.json').version)")"
echo "Node.js: $(node -v)"
echo "npm: $(npm -v)"
echo "Platform: $(uname -s) $(uname -m)"
echo ""

# Check environment configuration
print_header "Environment Configuration"
echo "=============================="
if [ -f ".env" ]; then
    echo "✅ .env file exists"
    if grep -q "your_openai_key_here" .env; then
        print_warning "OpenAI API key not configured"
    else
        echo "✅ OpenAI configured"
    fi
    if grep -q "your_claude_key_here" .env; then
        print_warning "Claude API key not configured"
    else
        echo "✅ Claude configured"
    fi
    if grep -q "your_cursor_key_here" .env; then
        print_warning "Cursor AI API key not configured"
    else
        echo "✅ Cursor AI configured"
    fi
    if grep -q "your_github_token_here" .env; then
        print_warning "GitHub token not configured"
    else
        echo "✅ GitHub configured"
    fi
else
    print_error ".env file not found"
fi
echo ""

# Display available commands
print_header "Available Commands"
echo "======================"
echo "Start entire system:"
echo "  npm run orchestrator:start"
echo ""
echo "Start individual components:"
echo "  npm run infinite:start          # Infinite improvement loop"
echo "  npm run ai-tools:start          # AI tool discovery"
echo "  npm run computer:enhance        # Computer enhancement"
echo ""
echo "Check status:"
echo "  npm run orchestrator:status     # Overall system status"
echo "  npm run infinite:status         # Improvement loop status"
echo "  npm run ai-tools:status         # Discovery status"
echo ""
echo "Stop systems:"
echo "  npm run orchestrator:stop       # Stop all systems"
echo "  npm run infinite:stop           # Stop improvement loop"
echo "  npm run ai-tools:stop           # Stop discovery"
echo ""

# Ask user if they want to start the system
read -p "Do you want to start the Infinite Improvement Loop System now? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_header "Starting Infinite Improvement Loop System..."
    echo "================================================"
    
    # Start the master orchestrator
    print_status "Starting master orchestrator..."
    npm run orchestrator:start &
    ORCHESTRATOR_PID=$!
    
    # Wait a moment for orchestrator to start
    sleep 5
    
    # Check if orchestrator started successfully
    if kill -0 $ORCHESTRATOR_PID 2>/dev/null; then
        print_status "✅ Master orchestrator started successfully (PID: $ORCHESTRATOR_PID)"
        print_status "🎼 All systems are now orchestrating..."
        print_status "🤖 AI tools are being discovered and integrated..."
        print_status "🧠 Computer intelligence is continuously improving..."
        echo ""
        print_header "System Status"
        echo "=============="
        print_status "Dashboard: http://localhost:3001 (if available)"
        print_status "Logs: logs/orchestrator.log"
        print_status "Reports: reports/orchestration-*.json"
        echo ""
        print_status "To stop the system, run: npm run orchestrator:stop"
        print_status "To check status, run: npm run orchestrator:status"
        echo ""
        print_header "🎉 Infinite Improvement Loop System is now running!"
        echo "Your computer will continuously get smarter and more capable."
        echo ""
        print_status "Press Ctrl+C to stop the system"
        
        # Wait for user to stop
        wait $ORCHESTRATOR_PID
    else
        print_error "Failed to start master orchestrator"
        exit 1
    fi
else
    print_status "System not started. You can start it manually using:"
    echo "  npm run orchestrator:start"
    echo ""
    print_status "For more information, see: INFINITE_IMPROVEMENT_LOOP_SYSTEM.md"
fi

print_status "Startup script completed" 