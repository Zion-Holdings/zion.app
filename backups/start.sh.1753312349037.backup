#!/bin/bash

# Zion App - Enhanced Automation System Startup Script

set -e

echo "🤖 Zion App - Enhanced Automation System"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

# Check if automation directory exists
if [ ! -d "automation" ]; then
    echo "❌ Automation directory not found. Please run setup first."
    exit 1
fi

# Navigate to automation directory
cd automation

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  No .env file found. Creating default configuration..."
    cat > .env << EOF
# Zion App Automation System Configuration

# System Configuration
AUTOMATION_PORT=3001
LOG_LEVEL=info
ENABLE_DASHBOARD=true
ENABLE_WEBSOCKET=true

# AI Configuration
CURSOR_AI_ENABLED=false
CURSOR_API_KEY=your_cursor_api_key_here
CURSOR_WORKSPACE_ID=your_workspace_id_here

OPENAI_ENABLED=false
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview

CLAUDE_ENABLED=false
CLAUDE_API_KEY=your_claude_api_key_here
CLAUDE_MODEL=claude-3-sonnet-20240229

# Optional: Local AI
LOCAL_AI_ENABLED=false
LOCAL_AI_ENDPOINT=http://localhost:11434
LOCAL_AI_MODEL=codellama:7b

# Optional: Slack Integration
SLACK_BOT_TOKEN=your_slack_bot_token_here
SLACK_SIGNING_SECRET=your_slack_signing_secret_here
EOF
    echo "✅ Created default .env file"
    echo "📝 Please edit automation/.env with your API keys before starting"
fi

# Create required directories
echo "📁 Creating required directories..."
mkdir -p logs reports temp backups

# Start the automation system
echo ""
echo "🚀 Starting Enhanced Automation System..."
echo ""

# Check if system is already running
if curl -s http://localhost:3001/health > /dev/null 2>&1; then
    echo "⚠️  Automation system is already running on port 3001"
    echo "📊 Dashboard: http://localhost:3001"
    echo "🔗 API: http://localhost:3001/api"
    exit 0
fi

# Start the system
node automation-manager.js start

echo ""
echo "✅ Automation system started successfully!"
echo ""
echo "📊 Dashboard: http://localhost:3001"
echo "🔗 API: http://localhost:3001/api"
echo "📝 Logs: tail -f automation/logs/automation.log"
echo ""
echo "💡 Useful commands:"
echo "  npm run automation:status    - Check system status"
echo "  npm run automation:logs      - View system logs"
echo "  npm run automation:stop      - Stop the system"
echo "  npm run automation:restart   - Restart the system"
echo "" 