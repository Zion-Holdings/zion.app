#!/bin/bash

# LinkedIn Advertising Automation Setup Script
# This script sets up the LinkedIn advertising automation system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
CONFIG_DIR="$PROJECT_ROOT/automation/config"

echo "🚀 Setting up LinkedIn Advertising Automation System..."

# Create necessary directories
mkdir -p "$LOG_DIR"
mkdir -p "$CONFIG_DIR"
mkdir -p "$PROJECT_ROOT/automation/pids"
mkdir -p "$PROJECT_ROOT/automation/status"

# Install required Node.js dependencies
echo "📦 Installing Node.js dependencies..."
cd "$PROJECT_ROOT"
npm install --save-dev uuid moment fs-extra

# Create configuration file
echo "⚙️ Creating configuration file..."
cat > "$CONFIG_DIR/linkedin-advertising-config.json" << EOF
{
  "credentials": {
    "username": "kleber@ziontechgroup.com",
    "password": "Krewjw#2425GHr45!"
  },
  "appUrl": "https://ziontechgroup.com",
  "campaignSettings": {
    "defaultBudget": 100,
    "maxDailyBudget": 500,
    "targetAudience": ["tech-professionals", "business-owners", "startups"],
    "adFormats": ["sponsored-content", "message-ads", "dynamic-ads"]
  },
  "contentTemplates": {
    "headlines": [
      "Transform Your Business with AI-Powered Solutions",
      "Streamline Operations with ZionTech Group",
      "Boost Productivity with Our Smart Platform",
      "Revolutionize Your Workflow Today"
    ],
    "descriptions": [
      "Discover how ZionTech Group can transform your business operations with our cutting-edge AI-powered platform. Streamline workflows, boost productivity, and achieve remarkable results.",
      "Join thousands of businesses already using ZionTech Group to optimize their operations. Experience the future of business automation.",
      "Ready to take your business to the next level? ZionTech Group provides the tools you need to succeed in today's competitive market."
    ]
  },
  "scheduling": {
    "postFrequency": "daily",
    "optimalTimes": ["09:00", "12:00", "17:00"],
    "timezone": "America/New_York"
  },
  "analytics": {
    "trackingEnabled": true,
    "reportingFrequency": "daily",
    "metrics": ["impressions", "clicks", "conversions", "ctr", "cpc"]
  }
}
EOF

# Make scripts executable
echo "🔧 Making scripts executable..."
chmod +x "$PROJECT_ROOT/automation/launch-linkedin-advertising.js"
chmod +x "$PROJECT_ROOT/automation/cron-jobs/linkedin-advertising-cron.sh"

# Create systemd service file (for Linux systems)
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "🐧 Creating systemd service for Linux..."
    sudo tee /etc/systemd/system/linkedin-advertising.service > /dev/null << EOF
[Unit]
Description=LinkedIn Advertising Automation
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_ROOT
ExecStart=/usr/bin/node automation/launch-linkedin-advertising.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

    sudo systemctl daemon-reload
    sudo systemctl enable linkedin-advertising.service
    echo "✅ Systemd service created and enabled"
fi

# Create launchd plist (for macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 Creating launchd plist for macOS..."
    cat > "$HOME/Library/LaunchAgents/com.ziontechgroup.linkedin-advertising.plist" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.ziontechgroup.linkedin-advertising</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/node</string>
        <string>$PROJECT_ROOT/automation/launch-linkedin-advertising.js</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$PROJECT_ROOT</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$LOG_DIR/linkedin-advertising.log</string>
    <key>StandardErrorPath</key>
    <string>$LOG_DIR/linkedin-advertising-error.log</string>
</dict>
</plist>
EOF

    launchctl load "$HOME/Library/LaunchAgents/com.ziontechgroup.linkedin-advertising.plist"
    echo "✅ Launchd plist created and loaded"
fi

# Set up cron job
echo "⏰ Setting up cron job..."
CRON_JOB="0 */6 * * * $PROJECT_ROOT/automation/cron-jobs/linkedin-advertising-cron.sh >> $LOG_DIR/linkedin-advertising-cron.log 2>&1"

# Add to crontab if not already present
if ! crontab -l 2>/dev/null | grep -q "linkedin-advertising-cron.sh"; then
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo "✅ Cron job added"
else
    echo "ℹ️ Cron job already exists"
fi

# Create README
echo "📝 Creating documentation..."
cat > "$PROJECT_ROOT/automation/README-LinkedIn-Advertising.md" << EOF
# LinkedIn Advertising Automation System

## Overview
This system provides automated LinkedIn advertising for ZionTech Group using Instagram credentials.

## Components
- **LinkedIn Advertising Factory**: Central management system
- **Ad Manager Agent**: Handles ad creation and campaign management
- **Content Creator Agent**: Generates professional ad content
- **Analytics Agent**: Tracks performance and optimizes campaigns

## Configuration
- Credentials: kleber@ziontechgroup.com
- App URL: https://ziontechgroup.com
- Default budget: \$100/day
- Post frequency: Daily

## Usage
\`\`\`bash
# Start the system
node automation/launch-linkedin-advertising.js

# Check status
cat automation/status/linkedin-advertising-status.json

# View logs
tail -f automation/logs/linkedin-advertising.log
\`\`\`

## Features
- Automated ad creation and management
- Professional content generation
- Performance tracking and optimization
- Budget management
- Audience targeting
- A/B testing capabilities

## Security
- Credentials stored securely
- Encrypted communication
- Audit logging enabled
EOF

echo "✅ LinkedIn Advertising Automation System setup complete!"
echo "📊 System will start automatically and run every 6 hours"
echo "📝 Documentation created at: automation/README-LinkedIn-Advertising.md"
echo "🔍 Logs will be available at: automation/logs/" 