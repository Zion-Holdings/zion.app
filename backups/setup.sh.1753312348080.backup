#!/bin/bash

set -e

echo "🚀 Setting up Optimization Automation System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version 18+ required. Current version: $(node -v)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) detected${NC}"

# Create required directories
echo -e "${BLUE}📁 Creating required directories...${NC}"
mkdir -p logs
mkdir -p .cursor/rules/optimization
mkdir -p automation/dashboard
mkdir -p automation/tests

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
cd automation
npm install

# Copy environment template if it doesn't exist
if [ ! -f "../.env" ]; then
    echo -e "${BLUE}⚙️ Creating environment file...${NC}"
    cp .env.example ../.env
    echo -e "${YELLOW}⚠️ Please configure your .env file with Slack and Cursor credentials${NC}"
else
    echo -e "${GREEN}✅ Environment file already exists${NC}"
fi

# Add automation scripts to main package.json
echo -e "${BLUE}🔧 Adding automation scripts...${NC}"
cd ..

# Check if scripts already exist in package.json
if ! grep -q "automation:start" package.json; then
    # Backup original package.json
    cp package.json package.json.backup
    
    # Add automation scripts
    npx json -I -f package.json -e '
    this.scripts["automation:start"] = "node automation/index.js";
    this.scripts["automation:dev"] = "nodemon automation/index.js";
    this.scripts["automation:stop"] = "pkill -f \"node automation/index.js\"";
    this.scripts["automation:logs"] = "tail -f logs/automation.log";
    this.scripts["automation:health"] = "curl http://localhost:3001/health";
    this.scripts["automation:test"] = "cd automation && npm test";
    this.scripts["automation:check"] = "node automation/performance/monitor.js";
    this.scripts["automation:report"] = "node automation/scripts/generate-report.js";
    this.scripts["automation:diagnose"] = "node automation/tests/system-diagnostic.js";
    this.scripts["automation:test-slack"] = "node automation/tests/test-slack-connection.js";
    this.scripts["automation:test-cursor"] = "node automation/tests/test-cursor-connection.js";
    this.scripts["automation:test-monitoring"] = "node automation/tests/test-performance-monitoring.js";
    ' 2>/dev/null || {
        echo -e "${YELLOW}⚠️ Could not automatically add scripts. Please add them manually.${NC}"
    }
    
    echo -e "${GREEN}✅ Automation scripts added to package.json${NC}"
else
    echo -e "${GREEN}✅ Automation scripts already exist${NC}"
fi

# Create systemd service file (optional)
cat > automation.service << EOF
[Unit]
Description=Optimization Automation System
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$(pwd)
ExecStart=$(which node) automation/index.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

echo -e "${BLUE}📋 Created systemd service file (automation.service)${NC}"

# Make scripts executable
chmod +x automation/scripts/*.sh
chmod +x optimize.sh 2>/dev/null || true

echo ""
echo -e "${GREEN}🎉 Setup completed successfully!${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo -e "1. Configure your ${YELLOW}.env${NC} file with Slack and Cursor credentials"
echo -e "2. Start the automation system: ${GREEN}npm run automation:start${NC}"
echo -e "3. Check system health: ${GREEN}npm run automation:health${NC}"
echo -e "4. View dashboard: ${GREEN}http://localhost:3001/dashboard${NC}"
echo ""
echo -e "${BLUE}Available commands:${NC}"
echo -e "• ${GREEN}npm run automation:start${NC} - Start the automation system"
echo -e "• ${GREEN}npm run automation:stop${NC} - Stop the automation system"
echo -e "• ${GREEN}npm run automation:logs${NC} - View automation logs"
echo -e "• ${GREEN}npm run automation:health${NC} - Check system health"
echo -e "• ${GREEN}npm run automation:test${NC} - Run tests"
echo -e "• ${GREEN}npm run automation:diagnose${NC} - Run system diagnostic"
echo ""
echo -e "${BLUE}Slack Commands (after setup):${NC}"
echo -e "• ${GREEN}/optimize [target]${NC} - Trigger optimization"
echo -e "• ${GREEN}/status${NC} - Check performance status"
echo -e "• ${GREEN}/report [timeframe]${NC} - Generate performance report"
echo -e "• ${GREEN}/suggestions${NC} - Get optimization suggestions"
echo ""
echo -e "${YELLOW}⚠️ Don't forget to configure your Slack app and Cursor agent settings!${NC}"