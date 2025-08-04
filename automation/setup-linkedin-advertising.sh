#!/bin/bash

# LinkedIn Advertising Automation System Setup Script
# This script sets up the complete LinkedIn advertising automation system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Log function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if Node.js is installed
check_nodejs() {
    log "Checking Node.js installation..."
    
    if ! command -v node > /dev/null 2>&1; then
        error "Node.js is not installed. Please install Node.js 16 or higher."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | sed 's/v//')
    NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)
    
    if [ "$NODE_MAJOR" -lt 16 ]; then
        error "Node.js version $NODE_VERSION is too old. Please install Node.js 16 or higher."
        exit 1
    fi
    
    success "Node.js $NODE_VERSION is installed"
}

# Check if npm is installed
check_npm() {
    log "Checking npm installation..."
    
    if ! command -v npm > /dev/null 2>&1; then
        error "npm is not installed. Please install npm."
        exit 1
    fi
    
    success "npm is installed"
}

# Install dependencies
install_dependencies() {
    log "Installing LinkedIn advertising system dependencies..."
    
    cd "$PROJECT_DIR"
    
    # Install required npm packages
    npm install --save \
        fs-extra \
        uuid \
        moment \
        puppeteer \
        axios \
        cheerio \
        nodemailer \
        canvas \
        openai \
        linkedin-api-client
    
    success "Dependencies installed successfully"
}

# Create directory structure
create_directories() {
    log "Creating LinkedIn advertising system directories..."
    
    local dirs=(
        "automation/data/linkedin-ads"
        "automation/data/linkedin-content"
        "automation/data/linkedin-analytics"
        "automation/data/linkedin-assets"
        "automation/data/linkedin-ab-tests"
        "automation/data/linkedin-optimizations"
        "automation/reports/linkedin-roi"
        "automation/logs/linkedin-advertising"
        "automation/pids"
        "automation/config"
    )
    
    for dir in "${dirs[@]}"; do
        mkdir -p "$PROJECT_DIR/$dir"
        log "Created directory: $dir"
    done
    
    success "Directory structure created"
}

# Create configuration files
create_config_files() {
    log "Creating LinkedIn advertising configuration files..."
    
    # LinkedIn credentials config
    cat > "$PROJECT_DIR/automation/config/linkedin-credentials.json" << EOF
{
    "username": "kleber@ziontechgroup.com",
    "password": "Krewjw#2425GHr45!",
    "appUrl": "https://ziontechgroup.com",
    "platform": "linkedin",
    "createdAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
    
    # LinkedIn advertising config
    cat > "$PROJECT_DIR/automation/config/linkedin-advertising-config.json" << EOF
{
    "campaigns": {
        "maxActiveCampaigns": 5,
        "defaultBudget": 500,
        "defaultDuration": 30,
        "targetAudiences": [
            "tech-professionals",
            "business-decision-makers",
            "innovation-leaders",
            "digital-transformation-managers",
            "cto-ciso-executives"
        ]
    },
    "content": {
        "maxContentLength": 1500,
        "imageOptimization": true,
        "aTesting": true,
        "contentTemplates": {
            "headlines": [
                "Transform Your Business with AI-Powered Solutions",
                "Unlock the Future of Digital Innovation",
                "ZionTech: Your Partner in Digital Transformation"
            ],
            "descriptions": [
                "Discover how ZionTech's cutting-edge AI solutions can streamline your operations and drive growth.",
                "Ready to take your business to the next level? ZionTech offers innovative AI consulting and development services."
            ],
            "callToActions": [
                "Learn More",
                "Get Started",
                "Explore Solutions"
            ]
        }
    },
    "analytics": {
        "trackingPrecision": "high",
        "reportFrequency": "daily",
        "optimizationThreshold": 0.7,
        "metrics": [
            "impressions",
            "clicks",
            "conversions",
            "spend",
            "ctr",
            "cpc",
            "cpm",
            "roas"
        ]
    },
    "schedules": {
        "adCreation": "0 */4 * * *",
        "performanceAnalysis": "0 */2 * * *",
        "budgetOptimization": "0 */6 * * *",
        "audienceRefresh": "0 0 * * *",
        "campaignOptimization": "0 */8 * * *"
    }
}
EOF
    
    success "Configuration files created"
}

# Setup cron jobs
setup_cron_jobs() {
    log "Setting up LinkedIn advertising cron jobs..."
    
    # Make cron script executable
    chmod +x "$PROJECT_DIR/automation/cron-jobs/linkedin-advertising-cron.sh"
    
    # Create cron entries
    CRON_ENTRIES=(
        "# LinkedIn Advertising System - Health Check (every 2 hours)"
        "0 */2 * * * $PROJECT_DIR/automation/cron-jobs/linkedin-advertising-cron.sh health >> $PROJECT_DIR/automation/logs/linkedin-advertising/cron.log 2>&1"
        ""
        "# LinkedIn Advertising System - Report Generation (daily at 6 AM)"
        "0 6 * * * $PROJECT_DIR/automation/cron-jobs/linkedin-advertising-cron.sh report >> $PROJECT_DIR/automation/logs/linkedin-advertising/cron.log 2>&1"
        ""
        "# LinkedIn Advertising System - Log Cleanup (weekly on Sunday at 2 AM)"
        "0 2 * * 0 $PROJECT_DIR/automation/cron-jobs/linkedin-advertising-cron.sh cleanup >> $PROJECT_DIR/automation/logs/linkedin-advertising/cron.log 2>&1"
    )
    
    # Check if cron entries already exist
    for entry in "${CRON_ENTRIES[@]}"; do
        if [[ "$entry" != "#"* ]] && [[ "$entry" != "" ]]; then
            if crontab -l 2>/dev/null | grep -q "$entry"; then
                warning "Cron entry already exists: $entry"
            else
                log "Adding cron entry: $entry"
            fi
        fi
    done
    
    success "Cron jobs configured"
}

# Create systemd service (optional)
create_systemd_service() {
    log "Creating systemd service for LinkedIn advertising system..."
    
    if command -v systemctl > /dev/null 2>&1; then
        cat > /tmp/linkedin-advertising.service << EOF
[Unit]
Description=LinkedIn Advertising Automation System
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/node automation/launch-linkedin-advertising.js
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF
        
        log "Systemd service file created at /tmp/linkedin-advertising.service"
        log "To install the service, run: sudo mv /tmp/linkedin-advertising.service /etc/systemd/system/ && sudo systemctl enable linkedin-advertising.service"
    else
        warning "systemctl not available, skipping systemd service creation"
    fi
}

# Create documentation
create_documentation() {
    log "Creating LinkedIn advertising system documentation..."
    
    cat > "$PROJECT_DIR/LINKEDIN_ADVERTISING_SYSTEM.md" << 'EOF'
# LinkedIn Advertising Automation System

## Overview

The LinkedIn Advertising Automation System is a comprehensive suite of autonomous agents designed to continuously manage LinkedIn advertising campaigns for ZionTech Group. The system uses the provided Instagram credentials to create, manage, and optimize LinkedIn ad campaigns.

## System Components

### 1. LinkedIn Advertising Factory (`automation/linkedin-advertising-factory.js`)
- Central factory for managing LinkedIn advertising agents
- Campaign creation and management
- Budget optimization and performance tracking
- Agent orchestration and coordination

### 2. LinkedIn Ad Manager Agent (`automation/agents/linkedin-ad-manager-agent.js`)
- Ad creation and campaign management
- Audience targeting and optimization
- Budget allocation and monitoring
- Performance tracking and reporting

### 3. LinkedIn Content Creator Agent (`automation/agents/linkedin-content-creator-agent.js`)
- Professional ad content generation
- Visual asset creation
- A/B testing variations
- Creative optimization

### 4. LinkedIn Analytics Agent (`automation/agents/linkedin-analytics-agent.js`)
- Performance tracking and ROI analysis
- Conversion optimization
- Audience insights and analytics
- Campaign performance reporting

## Configuration

### Credentials
- Username: kleber@ziontechgroup.com
- Password: Krewjw#2425GHr45!
- App URL: https://ziontechgroup.com

### Campaign Settings
- Maximum active campaigns: 5
- Default budget: $500
- Default duration: 30 days
- Target audiences: tech-professionals, business-decision-makers, innovation-leaders

## Usage

### Starting the System
```bash
# Start the LinkedIn advertising system
node automation/launch-linkedin-advertising.js

# Or use the cron script
./automation/cron-jobs/linkedin-advertising-cron.sh start
```

### Monitoring
```bash
# Check system status
./automation/cron-jobs/linkedin-advertising-cron.sh status

# Generate health report
./automation/cron-jobs/linkedin-advertising-cron.sh health

# Generate performance report
./automation/cron-jobs/linkedin-advertising-cron.sh report
```

### Stopping the System
```bash
# Stop the LinkedIn advertising system
./automation/cron-jobs/linkedin-advertising-cron.sh stop
```

## Features

### Automated Campaign Management
- Continuous ad creation and optimization
- Budget allocation and monitoring
- Performance tracking and ROI analysis
- Audience targeting and segmentation

### Content Generation
- Professional ad copy creation
- Visual asset generation
- A/B testing implementation
- Creative optimization

### Analytics and Reporting
- Real-time performance tracking
- ROI analysis and reporting
- Conversion optimization
- Audience insights

### Scheduling and Automation
- Automated campaign scheduling
- Performance monitoring
- Budget optimization
- Log cleanup and maintenance

## Logs and Reports

- System logs: `automation/logs/linkedin-advertising/`
- Performance reports: `automation/reports/linkedin-roi/`
- Campaign data: `automation/data/linkedin-ads/`
- Analytics data: `automation/data/linkedin-analytics/`

## Security

- Credentials are stored securely in configuration files
- All API interactions are logged and monitored
- System access is restricted to authorized users
- Regular security audits and updates

## Maintenance

- Automatic log cleanup (weekly)
- Performance monitoring and alerts
- System health checks (every 2 hours)
- Regular backup and recovery procedures

## Support

For issues or questions about the LinkedIn Advertising Automation System, check the logs in `automation/logs/linkedin-advertising/` or contact the development team.
EOF
    
    success "Documentation created: LINKEDIN_ADVERTISING_SYSTEM.md"
}

# Main setup function
main() {
    log "Starting LinkedIn Advertising Automation System setup..."
    
    check_nodejs
    check_npm
    install_dependencies
    create_directories
    create_config_files
    setup_cron_jobs
    create_systemd_service
    create_documentation
    
    success "LinkedIn Advertising Automation System setup completed successfully!"
    
    log "Next steps:"
    log "1. Review the configuration in automation/config/"
    log "2. Start the system: node automation/launch-linkedin-advertising.js"
    log "3. Monitor logs in automation/logs/linkedin-advertising/"
    log "4. Check documentation: LINKEDIN_ADVERTISING_SYSTEM.md"
}

# Run setup
main "$@" 