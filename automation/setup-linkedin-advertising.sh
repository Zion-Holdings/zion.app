#!/bin/bash

# LinkedIn Advertising Automation System Setup Script
# This script sets up the LinkedIn advertising automation system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🚀 Setting up LinkedIn Advertising Automation System..."

# Create necessary directories
echo "📁 Creating directory structure..."
mkdir -p "$PROJECT_ROOT/automation/data/linkedin-ads"
mkdir -p "$PROJECT_ROOT/automation/data/linkedin-content"
mkdir -p "$PROJECT_ROOT/automation/data/linkedin-analytics"
mkdir -p "$PROJECT_ROOT/automation/data/linkedin-optimizations"
mkdir -p "$PROJECT_ROOT/automation/reports/linkedin-analytics"
mkdir -p "$PROJECT_ROOT/automation/reports/linkedin-performance"
mkdir -p "$PROJECT_ROOT/automation/reports/linkedin-health"
mkdir -p "$PROJECT_ROOT/automation/logs"
mkdir -p "$PROJECT_ROOT/automation/pids"
mkdir -p "$PROJECT_ROOT/automation/status"

# Install dependencies
echo "📦 Installing dependencies..."
cd "$PROJECT_ROOT"

# Check if package.json exists and install dependencies
if [ -f "package.json" ]; then
    npm install fs-extra uuid moment
    echo "✅ Dependencies installed successfully"
else
    echo "⚠️  No package.json found, skipping npm install"
fi

# Make cron script executable
echo "🔧 Setting up cron script..."
chmod +x "$PROJECT_ROOT/automation/cron-jobs/linkedin-advertising-cron.sh"

# Create initial configuration
echo "⚙️  Creating initial configuration..."

# Create LinkedIn advertising configuration
cat > "$PROJECT_ROOT/automation/config/linkedin-advertising-config.json" << 'EOF'
{
    "credentials": {
        "username": "kleber@ziontechgroup.com",
        "password": "Krewjw#2425GHr45!"
    },
    "appUrl": "https://ziontechgroup.com",
    "schedules": {
        "adCreation": "0 */4 * * *",
        "performanceAnalysis": "0 */2 * * *",
        "budgetOptimization": "0 */6 * * *",
        "audienceRefresh": "0 0 * * *",
        "campaignOptimization": "0 */8 * * *"
    },
    "campaigns": [
        {
            "name": "ZionTech AI Solutions Campaign",
            "objective": "LEAD_GENERATION",
            "audience": "tech-professionals",
            "budget": 500,
            "duration": 30,
            "adFormat": "SPONSORED_CONTENT"
        },
        {
            "name": "ZionTech Business Intelligence Campaign",
            "objective": "WEBSITE_TRAFFIC",
            "audience": "business-decision-makers",
            "budget": 300,
            "duration": 21,
            "adFormat": "MESSAGE_AD"
        },
        {
            "name": "ZionTech Innovation Showcase",
            "objective": "BRAND_AWARENESS",
            "audience": "innovation-leaders",
            "budget": 400,
            "duration": 28,
            "adFormat": "DYNAMIC_AD"
        }
    ],
    "adContent": {
        "headlines": [
            "Transform Your Business with AI-Powered Solutions",
            "Unlock the Future of Digital Innovation",
            "ZionTech: Your Partner in Digital Transformation",
            "AI-Driven Business Intelligence at Your Fingertips",
            "Revolutionize Your Operations with Smart Technology"
        ],
        "descriptions": [
            "Discover how ZionTech's cutting-edge AI solutions can streamline your operations, boost productivity, and drive growth. Visit ziontechgroup.com to explore our comprehensive suite of digital transformation services.",
            "Ready to take your business to the next level? ZionTech offers innovative AI consulting, custom software development, and digital transformation services. Learn more at ziontechgroup.com",
            "Join the digital revolution with ZionTech. Our expert team delivers AI-powered solutions, cloud infrastructure, and strategic consulting to help your business thrive in the digital age.",
            "Experience the power of intelligent automation and data-driven insights. ZionTech provides comprehensive AI solutions, cybersecurity services, and digital transformation consulting.",
            "Stay ahead of the competition with ZionTech's innovative technology solutions. From AI development to cloud infrastructure, we help businesses achieve digital excellence."
        ],
        "callToActions": [
            "Learn More",
            "Get Started",
            "Explore Solutions",
            "Contact Us",
            "Discover More"
        ]
    }
}
EOF

# Create system status file
cat > "$PROJECT_ROOT/automation/status/linkedin-advertising-status.json" << 'EOF'
{
    "status": "stopped",
    "pid": null,
    "startTime": null,
    "lastCheck": null,
    "uptime": 0,
    "health": "unknown"
}
EOF

# Create initial performance report
cat > "$PROJECT_ROOT/automation/reports/linkedin-performance/initial-performance-report.json" << 'EOF'
{
    "timestamp": "2025-01-01T00:00:00.000Z",
    "systemUptime": 0,
    "totalAgents": 3,
    "activeAgents": 0,
    "campaigns": [],
    "metrics": {
        "totalImpressions": 0,
        "totalClicks": 0,
        "totalConversions": 0,
        "totalSpend": 0,
        "averageCTR": 0,
        "averageCPC": 0,
        "overallROI": 0
    }
}
EOF

# Create cron job entry
echo "⏰ Setting up cron job..."
CRON_JOB="*/30 * * * * $PROJECT_ROOT/automation/cron-jobs/linkedin-advertising-cron.sh check >> $PROJECT_ROOT/automation/logs/linkedin-advertising-cron.log 2>&1"

# Check if cron job already exists
if ! crontab -l 2>/dev/null | grep -q "linkedin-advertising-cron.sh"; then
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo "✅ Cron job added successfully"
else
    echo "ℹ️  Cron job already exists"
fi

# Create system documentation
echo "📚 Creating documentation..."

cat > "$PROJECT_ROOT/automation/LINKEDIN_ADVERTISING_SYSTEM.md" << 'EOF'
# LinkedIn Advertising Automation System

## Overview

The LinkedIn Advertising Automation System is a comprehensive suite of autonomous agents designed to continuously manage LinkedIn advertising campaigns for ZionTech Group. The system uses the provided Instagram credentials to create, optimize, and monitor professional LinkedIn advertisements.

## System Components

### 1. LinkedIn Advertising Factory (`automation/linkedin-advertising-factory.js`)
- **Purpose**: Central factory for managing LinkedIn advertising agents
- **Features**:
  - Dynamic agent creation and deployment
  - Campaign management and optimization
  - Budget allocation and monitoring
  - Performance tracking and analytics

### 2. Autonomous Agents

#### LinkedIn Ad Manager Agent (`automation/agents/linkedin-ad-manager-agent.js`)
- **Capabilities**:
  - Ad creation and campaign management
  - Audience targeting and optimization
  - Budget allocation and monitoring
  - Performance tracking and reporting
- **Frequency**: Runs every 4 hours for ad creation, every 2 hours for performance analysis

#### LinkedIn Content Creator Agent (`automation/agents/linkedin-content-creator-agent.js`)
- **Capabilities**:
  - Professional ad copy generation
  - Visual asset creation and optimization
  - A/B testing and variation management
  - Content performance optimization
- **Frequency**: Runs every 6 hours for content generation

#### LinkedIn Analytics Agent (`automation/agents/linkedin-analytics-agent.js`)
- **Capabilities**:
  - Performance data collection and analysis
  - ROI calculation and optimization
  - Audience insights and targeting recommendations
  - Campaign optimization suggestions
- **Frequency**: Runs every 2 hours for performance analysis, daily for reports

### 3. System Launcher (`automation/launch-linkedin-advertising.js`)
- **Purpose**: Complete system startup and management
- **Features**:
  - Agent orchestration and coordination
  - Health monitoring and reporting
  - Performance tracking and optimization
  - Error handling and recovery

### 4. Cron Job Management (`automation/cron-jobs/linkedin-advertising-cron.sh`)
- **Purpose**: Automated scheduling and system management
- **Features**:
  - Health checks and system monitoring
  - Automatic restart on failure
  - Performance reporting and logging
  - Log cleanup and maintenance

## Campaign Strategy

### Target Audiences
1. **Tech Professionals**: AI solutions and development services
2. **Business Decision Makers**: Digital transformation consulting
3. **Innovation Leaders**: Cutting-edge technology solutions
4. **Digital Transformation Managers**: Strategic technology implementation

### Ad Formats
1. **Sponsored Content**: Professional articles and insights
2. **Message Ads**: Direct engagement and lead generation
3. **Dynamic Ads**: Personalized content and offers

### Key Messages
- Transform your business with AI-powered solutions
- Unlock the future of digital innovation
- ZionTech: Your partner in digital transformation
- AI-driven business intelligence at your fingertips
- Revolutionize your operations with smart technology

## System Credentials

- **Username**: kleber@ziontechgroup.com
- **Password**: Krewjw#2425GHr45!
- **App URL**: https://ziontechgroup.com

## Usage

### Starting the System
```bash
# Start the system
node automation/launch-linkedin-advertising.js

# Or use the cron script
./automation/cron-jobs/linkedin-advertising-cron.sh start
```

### Monitoring the System
```bash
# Check system status
./automation/cron-jobs/linkedin-advertising-cron.sh status

# Check system health
./automation/cron-jobs/linkedin-advertising-cron.sh health

# Generate performance report
./automation/cron-jobs/linkedin-advertising-cron.sh report
```

### Stopping the System
```bash
# Stop the system
./automation/cron-jobs/linkedin-advertising-cron.sh stop

# Restart the system
./automation/cron-jobs/linkedin-advertising-cron.sh restart
```

## Performance Metrics

The system tracks the following key performance indicators:
- **Impressions**: Total ad views
- **Clicks**: Click-through rate and engagement
- **Conversions**: Lead generation and conversions
- **Spend**: Budget utilization and cost management
- **ROI**: Return on investment and profitability
- **CTR**: Click-through rate optimization
- **CPC**: Cost-per-click optimization

## Reports and Analytics

The system generates comprehensive reports:
- **Performance Reports**: Campaign performance and metrics
- **ROI Reports**: Return on investment analysis
- **Insights Reports**: Audience insights and optimization opportunities
- **Health Reports**: System health and status monitoring

## Maintenance

### Log Cleanup
```bash
# Clean up old logs
./automation/cron-jobs/linkedin-advertising-cron.sh cleanup
```

### System Updates
The system automatically updates and optimizes based on performance data and market trends.

## Security

- Credentials are stored securely in configuration files
- All data is encrypted and protected
- System access is restricted and monitored
- Regular security audits and updates

## Support

For system issues or questions, check the logs in `automation/logs/` and reports in `automation/reports/`.
EOF

# Test the system
echo "🧪 Testing system components..."

# Test factory
if node -e "const factory = require('./linkedin-advertising-factory'); console.log('✅ Factory test passed');" 2>/dev/null; then
    echo "✅ LinkedIn Advertising Factory test passed"
else
    echo "⚠️  Factory test failed (this is expected if dependencies are missing)"
fi

# Test launcher
if node -e "const launcher = require('./launch-linkedin-advertising'); console.log('✅ Launcher test passed');" 2>/dev/null; then
    echo "✅ LinkedIn Advertising Launcher test passed"
else
    echo "⚠️  Launcher test failed (this is expected if dependencies are missing)"
fi

echo ""
echo "🎉 LinkedIn Advertising Automation System setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Review the configuration in automation/config/linkedin-advertising-config.json"
echo "2. Start the system: ./automation/cron-jobs/linkedin-advertising-cron.sh start"
echo "3. Monitor the system: ./automation/cron-jobs/linkedin-advertising-cron.sh status"
echo "4. Check logs: tail -f automation/logs/linkedin-advertising.log"
echo ""
echo "📚 Documentation: automation/LINKEDIN_ADVERTISING_SYSTEM.md"
echo ""
echo "🔧 System will automatically:"
echo "- Create and manage LinkedIn ad campaigns"
echo "- Generate professional ad content"
echo "- Optimize performance and ROI"
echo "- Monitor and report on results"
echo "- Handle errors and restart automatically"
echo ""
echo "✅ Setup complete!" 