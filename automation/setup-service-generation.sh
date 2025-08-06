#!/bin/bash

# Service Generation Factory Setup Script
# This script sets up the autonomous service generation system

set -e

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
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

print_header "Service Generation Factory Setup"

# Check if Node.js is installed
print_status "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    print_error "Node.js version 16+ is required. Current version: $(node --version)"
    exit 1
fi

print_status "Node.js version: $(node --version)"

# Check if npm is installed
print_status "Checking npm installation..."
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed."
    exit 1
fi

print_status "npm version: $(npm --version)"

# Create necessary directories
print_status "Creating directories..."
mkdir -p "$PROJECT_DIR/data"
mkdir -p "$PROJECT_DIR/logs"
mkdir -p "$PROJECT_DIR/backups"
mkdir -p "$PROJECT_DIR/cron-jobs"

# Install dependencies
print_status "Installing dependencies..."
cd "$PROJECT_DIR"

# Create package.json if it doesn't exist
if [ ! -f "package.json" ]; then
    print_status "Creating package.json..."
    cat > package.json << EOF
{
  "name": "service-generation-factory",
  "version": "1.0.0",
  "description": "Autonomous service generation factory with sales agents",
  "main": "service-generation-launcher.js",
  "scripts": {
    "start": "node service-generation-launcher.js start",
    "stop": "node service-generation-launcher.js stop",
    "status": "node service-generation-launcher.js status",
    "analytics": "node service-generation-launcher.js analytics",
    "create-service": "node service-generation-launcher.js create-service",
    "setup": "bash setup-service-generation.sh",
    "cron-start": "bash cron-jobs/service-generation-cron.sh start",
    "cron-stop": "bash cron-jobs/service-generation-cron.sh stop",
    "cron-status": "bash cron-jobs/service-generation-cron.sh status",
    "cron-health": "bash cron-jobs/service-generation-cron.sh health"
  },
  "dependencies": {
    "uuid": "^9.0.0",
    "axios": "^1.4.0",
    "fs-extra": "^11.1.1",
    "node-cron": "^3.0.2",
    "winston": "^3.9.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  },
  "keywords": [
    "autonomous",
    "service-generation",
    "sales-agents",
    "automation"
  ],
  "author": "Service Generation Factory",
  "license": "MIT"
}
EOF
fi

# Install dependencies
print_status "Installing npm dependencies..."
npm install

# Make cron script executable
print_status "Making cron script executable..."
chmod +x "$PROJECT_DIR/cron-jobs/service-generation-cron.sh"

# Create configuration file
print_status "Creating configuration file..."
cat > "$PROJECT_DIR/config.json" << EOF
{
  "serviceGeneration": {
    "autoGenerateServices": true,
    "autoGenerateAds": true,
    "autoUpdateMarketData": true,
    "serviceGenerationInterval": 7200000,
    "adGenerationInterval": 1800000,
    "marketDataUpdateInterval": 3600000,
    "maxServices": 100,
    "maxSalesAgents": 50
  },
  "cronJobs": {
    "healthCheck": "*/5 * * * *",
    "serviceGeneration": "0 */2 * * *",
    "adGeneration": "*/30 * * * *",
    "marketDataUpdate": "0 * * * *",
    "backup": "0 2 * * *",
    "cleanup": "0 3 * * 0"
  },
  "logging": {
    "level": "info",
    "maxFiles": 30,
    "maxSize": "10m"
  }
}
EOF

# Create systemd service file (if running on Linux)
if command -v systemctl &> /dev/null; then
    print_status "Creating systemd service file..."
    sudo tee /etc/systemd/system/service-generation-factory.service > /dev/null << EOF
[Unit]
Description=Service Generation Factory
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/node $PROJECT_DIR/service-generation-launcher.js start
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

    print_status "Enabling systemd service..."
    sudo systemctl daemon-reload
    sudo systemctl enable service-generation-factory.service
fi

# Create launchd plist file (if running on macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    print_status "Creating launchd plist file..."
    cat > "$HOME/Library/LaunchAgents/com.servicegeneration.factory.plist" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.servicegeneration.factory</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/node</string>
        <string>$PROJECT_DIR/service-generation-launcher.js</string>
        <string>start</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$PROJECT_DIR</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$PROJECT_DIR/logs/service-generation.log</string>
    <key>StandardErrorPath</key>
    <string>$PROJECT_DIR/logs/service-generation-error.log</string>
</dict>
</plist>
EOF

    print_status "Loading launchd service..."
    launchctl load "$HOME/Library/LaunchAgents/com.servicegeneration.factory.plist"
fi

# Set up cron jobs
print_status "Setting up cron jobs..."

# Get current crontab
CRONTAB_FILE=$(mktemp)
crontab -l 2>/dev/null > "$CRONTAB_FILE" || true

# Add cron jobs
cat >> "$CRONTAB_FILE" << EOF

# Service Generation Factory Cron Jobs
# Health check every 5 minutes
*/5 * * * * $PROJECT_DIR/cron-jobs/service-generation-cron.sh health

# Service generation every 2 hours
0 */2 * * * $PROJECT_DIR/cron-jobs/service-generation-cron.sh generate-services

# Advertisement generation every 30 minutes
*/30 * * * * $PROJECT_DIR/cron-jobs/service-generation-cron.sh generate-ads

# Market data update every hour
0 * * * * $PROJECT_DIR/cron-jobs/service-generation-cron.sh update-market

# Backup every day at 2 AM
0 2 * * * $PROJECT_DIR/cron-jobs/service-generation-cron.sh backup

# Cleanup every Sunday at 3 AM
0 3 * * 0 $PROJECT_DIR/cron-jobs/service-generation-cron.sh cleanup
EOF

# Install new crontab
crontab "$CRONTAB_FILE"
rm "$CRONTAB_FILE"

# Create documentation
print_status "Creating documentation..."
cat > "$PROJECT_DIR/SERVICE_GENERATION_README.md" << EOF
# Service Generation Factory

## Overview

The Service Generation Factory is an autonomous system that continuously creates new services, generates advertisements with market pricing, and deploys sales agents to sell those services.

## Features

- **Autonomous Service Creation**: Automatically generates new services based on market trends
- **Market Pricing**: Calculates realistic market prices for all services
- **Sales Agents**: Deploys specialized sales agents for each service
- **Advertisement Generation**: Creates compelling advertisements for all services
- **Market Analysis**: Continuously analyzes market trends and competition
- **Automated Scheduling**: Runs on cron jobs for 24/7 operation

## Service Types

- **Web Applications**: Modern web apps with authentication, payments, admin dashboards
- **Mobile Apps**: Cross-platform mobile applications with offline support
- **E-commerce Platforms**: Complete online stores with inventory management
- **SaaS Platforms**: Scalable software-as-a-service solutions
- **AI Chatbots**: Intelligent conversational agents
- **Data Analytics Dashboards**: Real-time data visualization and reporting
- **Automation Scripts**: Process automation and workflow optimization
- **Blockchain DApps**: Decentralized applications with smart contracts

## Sales Agent Types

- **Digital Marketers**: SEO, social media, content marketing
- **Enterprise Sales**: B2B sales and contract negotiation
- **Startup Specialists**: Pitch decks, fundraising, MVP development
- **Freelance Connectors**: Project matching and client communication

## Quick Start

1. **Start the factory**:
   \`\`\`bash
   npm start
   \`\`\`

2. **Check status**:
   \`\`\`bash
   npm run status
   \`\`\`

3. **View analytics**:
   \`\`\`bash
   npm run analytics
   \`\`\`

4. **Create a specific service**:
   \`\`\`bash
   npm run create-service web-application
   \`\`\`

## Cron Jobs

The system runs several automated processes:

- **Health Check**: Every 5 minutes
- **Service Generation**: Every 2 hours
- **Advertisement Generation**: Every 30 minutes
- **Market Data Update**: Every hour
- **Backup**: Daily at 2 AM
- **Cleanup**: Weekly on Sunday at 3 AM

## Configuration

Edit \`config.json\` to customize:

- Service generation intervals
- Maximum number of services/agents
- Logging levels
- Cron job schedules

## Monitoring

- Logs: \`logs/\` directory
- Analytics: Run \`npm run analytics\`
- Status: Run \`npm run status\`
- Health: Run \`npm run cron-health\`

## Data Storage

- Services: \`data/service-registry.json\`
- Sales Agents: \`data/sales-agent-registry.json\`
- Backups: \`backups/\` directory

## Troubleshooting

1. **Check logs**: \`tail -f logs/service-generation.log\`
2. **Restart service**: \`npm run cron-restart\`
3. **Check health**: \`npm run cron-health\`
4. **View status**: \`npm run status\`

## API Endpoints

The system can be controlled via:

- \`GET /api/service-generation/status\` - Get system status
- \`GET /api/service-generation/analytics\` - Get analytics
- \`POST /api/service-generation/create\` - Create a service
- \`POST /api/service-generation/generate-ads\` - Generate advertisements

## Security

- All data is stored locally
- No external API calls without explicit configuration
- Logs are rotated automatically
- Backups are encrypted and stored securely
EOF

# Create API endpoints
print_status "Creating API endpoints..."
mkdir -p "$PROJECT_DIR/pages/api/service-generation"

cat > "$PROJECT_DIR/pages/api/service-generation/status.ts" << 'EOF'
import { NextApiRequest, NextApiResponse } from 'next';
import { ServiceGenerationLauncher } from '../../../../automation/service-generation-launcher';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const launcher = new ServiceGenerationLauncher();
    const status = launcher.getStatus();
    
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get status' });
  }
}
EOF

cat > "$PROJECT_DIR/pages/api/service-generation/analytics.ts" << 'EOF'
import { NextApiRequest, NextApiResponse } from 'next';
import { ServiceGenerationLauncher } from '../../../../automation/service-generation-launcher';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const launcher = new ServiceGenerationLauncher();
    await launcher.start();
    const analytics = await launcher.getAnalytics();
    
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get analytics' });
  }
}
EOF

cat > "$PROJECT_DIR/pages/api/service-generation/create.ts" << 'EOF'
import { NextApiRequest, NextApiResponse } from 'next';
import { ServiceGenerationLauncher } from '../../../../automation/service-generation-launcher';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, config } = req.body;
    
    if (!type) {
      return res.status(400).json({ error: 'Service type is required' });
    }

    const launcher = new ServiceGenerationLauncher();
    await launcher.start();
    const service = await launcher.createService(type, config || {});
    
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create service' });
  }
}
EOF

# Test the setup
print_status "Testing setup..."
cd "$PROJECT_DIR"

# Test if the launcher can be loaded
if node -e "const ServiceGenerationLauncher = require('./service-generation-launcher.js'); console.log('Launcher loaded successfully');"; then
    print_status "Launcher test passed"
else
    print_error "Launcher test failed"
    exit 1
fi

# Test if cron script is executable
if [ -x "$PROJECT_DIR/cron-jobs/service-generation-cron.sh" ]; then
    print_status "Cron script is executable"
else
    print_error "Cron script is not executable"
    exit 1
fi

print_header "Setup Complete!"

print_status "Service Generation Factory has been set up successfully!"
print_status ""
print_status "Next steps:"
print_status "1. Start the factory: npm start"
print_status "2. Check status: npm run status"
print_status "3. View analytics: npm run analytics"
print_status "4. Create a service: npm run create-service web-application"
print_status ""
print_status "The system will automatically:"
print_status "- Generate new services every 2 hours"
print_status "- Create advertisements every 30 minutes"
print_status "- Update market data every hour"
print_status "- Perform health checks every 5 minutes"
print_status "- Create backups daily at 2 AM"
print_status "- Clean up logs weekly on Sunday at 3 AM"
print_status ""
print_status "Logs are stored in: $PROJECT_DIR/logs/"
print_status "Data is stored in: $PROJECT_DIR/data/"
print_status "Backups are stored in: $PROJECT_DIR/backups/"
print_status ""
print_status "Documentation: $PROJECT_DIR/SERVICE_GENERATION_README.md"

# Start the service if requested
if [ "$1" = "--start" ]; then
    print_status "Starting Service Generation Factory..."
    npm start
fi 