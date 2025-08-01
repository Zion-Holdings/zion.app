#!/bin/bash

# Marketing Automation Cron System
# This script sets up comprehensive cron jobs for autonomous marketing agents

set -e

echo "🚀 Setting up Marketing Automation Cron System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root"
   exit 1
fi

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

print_status "Setting up marketing automation cron jobs..."

# Create marketing automation directories
mkdir -p marketing-agents
mkdir -p marketing-research
mkdir -p marketing-campaigns
mkdir -p marketing-analytics
mkdir -p marketing-campaigns/social
mkdir -p marketing-campaigns/email
mkdir -p marketing-campaigns/ads
mkdir -p marketing-campaigns/content
mkdir -p marketing-analytics/reports
mkdir -p marketing-analytics/metrics
mkdir -p marketing-research/trends
mkdir -p marketing-research/competitors
mkdir -p marketing-research/keywords

print_success "Marketing directories created"

# Create the main marketing orchestrator cron job
print_status "Creating marketing orchestrator cron job..."

cat > marketing-orchestrator-cron.sh << 'EOF'
#!/bin/bash

# Marketing Orchestrator Cron Job
# Runs the main marketing orchestrator every 4 hours

cd "$(dirname "$0")"
node autonomous-marketing-orchestrator.js
EOF

chmod +x marketing-orchestrator-cron.sh

# Create trend research cron job
print_status "Creating trend research cron job..."

cat > trend-research-cron.sh << 'EOF'
#!/bin/bash

# Trend Research Cron Job
# Runs trend research every 2 hours

cd "$(dirname "$0")"
node marketing-agents/trend-research-agent.js
EOF

chmod +x trend-research-cron.sh

# Create content creation cron job
print_status "Creating content creation cron job..."

cat > content-creation-cron.sh << 'EOF'
#!/bin/bash

# Content Creation Cron Job
# Runs content creation every 4 hours

cd "$(dirname "$0")"
node marketing-agents/content-creation-agent.js
EOF

chmod +x content-creation-cron.sh

# Create social media cron job
print_status "Creating social media cron job..."

cat > social-media-cron.sh << 'EOF'
#!/bin/bash

# Social Media Cron Job
# Runs social media automation every hour

cd "$(dirname "$0")"
node marketing-agents/social-media-agent.js
EOF

chmod +x social-media-cron.sh

# Create email campaign cron job
print_status "Creating email campaign cron job..."

cat > email-campaign-cron.sh << 'EOF'
#!/bin/bash

# Email Campaign Cron Job
# Runs email campaigns every 6 hours

cd "$(dirname "$0")"
node marketing-agents/email-campaign-agent.js
EOF

chmod +x email-campaign-cron.sh

# Create SEO optimization cron job
print_status "Creating SEO optimization cron job..."

cat > seo-optimization-cron.sh << 'EOF'
#!/bin/bash

# SEO Optimization Cron Job
# Runs SEO optimization every 8 hours

cd "$(dirname "$0")"
node marketing-agents/seo-optimization-agent.js
EOF

chmod +x seo-optimization-cron.sh

# Create influencer outreach cron job
print_status "Creating influencer outreach cron job..."

cat > influencer-outreach-cron.sh << 'EOF'
#!/bin/bash

# Influencer Outreach Cron Job
# Runs influencer outreach weekly

cd "$(dirname "$0")"
node marketing-agents/influencer-outreach-agent.js
EOF

chmod +x influencer-outreach-cron.sh

# Create ad campaign cron job
print_status "Creating ad campaign cron job..."

cat > ad-campaign-cron.sh << 'EOF'
#!/bin/bash

# Ad Campaign Cron Job
# Runs ad campaigns every 12 hours

cd "$(dirname "$0")"
node marketing-agents/ad-campaign-agent.js
EOF

chmod +x ad-campaign-cron.sh

# Create analytics tracking cron job
print_status "Creating analytics tracking cron job..."

cat > analytics-tracking-cron.sh << 'EOF'
#!/bin/bash

# Analytics Tracking Cron Job
# Runs analytics tracking every 15 minutes

cd "$(dirname "$0")"
node marketing-agents/analytics-tracking-agent.js
EOF

chmod +x analytics-tracking-cron.sh

# Create agent creation cron job
print_status "Creating agent creation cron job..."

cat > agent-creation-cron.sh << 'EOF'
#!/bin/bash

# Agent Creation Cron Job
# Creates new marketing agents weekly

cd "$(dirname "$0")"
node continuous-agent-creator.js
EOF

chmod +x agent-creation-cron.sh

# Create performance monitoring cron job
print_status "Creating performance monitoring cron job..."

cat > performance-monitoring-cron.sh << 'EOF'
#!/bin/bash

# Performance Monitoring Cron Job
# Monitors marketing performance every 30 minutes

cd "$(dirname "$0")"
node monitor-automation.js
EOF

chmod +x performance-monitoring-cron.sh

# Create backup cron job
print_status "Creating backup cron job..."

cat > marketing-backup-cron.sh << 'EOF'
#!/bin/bash

# Marketing Backup Cron Job
# Backs up marketing data daily

cd "$(dirname "$0")"
node backup-system.js
EOF

chmod +x marketing-backup-cron.sh

# Create cleanup cron job
print_status "Creating cleanup cron job..."

cat > marketing-cleanup-cron.sh << 'EOF'
#!/bin/bash

# Marketing Cleanup Cron Job
# Cleans up old marketing data weekly

cd "$(dirname "$0")"
find marketing-analytics -name "*.json" -mtime +30 -delete
find marketing-campaigns -name "*.json" -mtime +30 -delete
find marketing-research -name "*.json" -mtime +30 -delete
find logs -name "*.log" -mtime +7 -delete
EOF

chmod +x marketing-cleanup-cron.sh

print_success "Marketing cron scripts created"

# Set up crontab entries
print_status "Setting up crontab entries..."

# Get current crontab
CURRENT_CRONTAB=$(crontab -l 2>/dev/null || echo "")

# Create new crontab entries
NEW_CRONTAB="$CURRENT_CRONTAB

# Marketing Automation Cron Jobs
# Marketing Orchestrator - Every 4 hours
0 */4 * * * $SCRIPT_DIR/marketing-orchestrator-cron.sh >> $SCRIPT_DIR/logs/marketing-orchestrator.log 2>&1

# Trend Research - Every 2 hours
0 */2 * * * $SCRIPT_DIR/trend-research-cron.sh >> $SCRIPT_DIR/logs/trend-research.log 2>&1

# Content Creation - Every 4 hours
0 */4 * * * $SCRIPT_DIR/content-creation-cron.sh >> $SCRIPT_DIR/logs/content-creation.log 2>&1

# Social Media - Every hour
0 * * * * $SCRIPT_DIR/social-media-cron.sh >> $SCRIPT_DIR/logs/social-media.log 2>&1

# Email Campaigns - Every 6 hours
0 */6 * * * $SCRIPT_DIR/email-campaign-cron.sh >> $SCRIPT_DIR/logs/email-campaign.log 2>&1

# SEO Optimization - Every 8 hours
0 */8 * * * $SCRIPT_DIR/seo-optimization-cron.sh >> $SCRIPT_DIR/logs/seo-optimization.log 2>&1

# Influencer Outreach - Weekly (Sunday at 9 AM)
0 9 * * 0 $SCRIPT_DIR/influencer-outreach-cron.sh >> $SCRIPT_DIR/logs/influencer-outreach.log 2>&1

# Ad Campaigns - Every 12 hours
0 */12 * * * $SCRIPT_DIR/ad-campaign-cron.sh >> $SCRIPT_DIR/logs/ad-campaign.log 2>&1

# Analytics Tracking - Every 15 minutes
*/15 * * * * $SCRIPT_DIR/analytics-tracking-cron.sh >> $SCRIPT_DIR/logs/analytics-tracking.log 2>&1

# Agent Creation - Weekly (Monday at 10 AM)
0 10 * * 1 $SCRIPT_DIR/agent-creation-cron.sh >> $SCRIPT_DIR/logs/agent-creation.log 2>&1

# Performance Monitoring - Every 30 minutes
*/30 * * * * $SCRIPT_DIR/performance-monitoring-cron.sh >> $SCRIPT_DIR/logs/performance-monitoring.log 2>&1

# Marketing Backup - Daily at 2 AM
0 2 * * * $SCRIPT_DIR/marketing-backup-cron.sh >> $SCRIPT_DIR/logs/marketing-backup.log 2>&1

# Marketing Cleanup - Weekly (Saturday at 3 AM)
0 3 * * 6 $SCRIPT_DIR/marketing-cleanup-cron.sh >> $SCRIPT_DIR/logs/marketing-cleanup.log 2>&1
"

# Install the new crontab
echo "$NEW_CRONTAB" | crontab -

print_success "Crontab entries installed successfully"

# Create log directories
mkdir -p logs

# Create initial log files
touch logs/marketing-orchestrator.log
touch logs/trend-research.log
touch logs/content-creation.log
touch logs/social-media.log
touch logs/email-campaign.log
touch logs/seo-optimization.log
touch logs/influencer-outreach.log
touch logs/ad-campaign.log
touch logs/analytics-tracking.log
touch logs/agent-creation.log
touch logs/performance-monitoring.log
touch logs/marketing-backup.log
touch logs/marketing-cleanup.log

print_success "Log files created"

# Create marketing configuration file
print_status "Creating marketing configuration file..."

cat > marketing-config.json << 'EOF'
{
  "marketing": {
    "enabled": true,
    "agents": {
      "trendResearch": true,
      "contentCreation": true,
      "socialMedia": true,
      "emailCampaigns": true,
      "seoOptimization": true,
      "influencerOutreach": true,
      "adCampaigns": true,
      "analyticsTracking": true
    },
    "schedules": {
      "trendResearch": "0 */2 * * *",
      "contentCreation": "0 */4 * * *",
      "socialMedia": "0 */1 * * *",
      "emailCampaigns": "0 */6 * * *",
      "seoOptimization": "0 */8 * * *",
      "influencerOutreach": "0 9 * * 0",
      "adCampaigns": "0 */12 * * *",
      "analyticsTracking": "*/15 * * * *"
    },
    "platforms": {
      "social": ["twitter", "linkedin", "facebook", "instagram", "tiktok"],
      "email": ["newsletter", "drip", "announcement"],
      "content": ["blog", "landing", "product", "feature"],
      "advertising": ["google", "facebook", "linkedin", "twitter"],
      "seo": ["onpage", "technical", "content", "local"],
      "influencer": ["micro", "macro", "nano", "celebrity"]
    }
  }
}
EOF

print_success "Marketing configuration created"

# Create marketing status file
print_status "Creating marketing status file..."

cat > marketing-status.json << 'EOF'
{
  "status": "active",
  "lastRun": null,
  "totalRuns": 0,
  "successRate": 0,
  "errors": [],
  "activeAgents": [],
  "campaigns": [],
  "performance": {
    "reach": 0,
    "engagement": 0,
    "conversions": 0,
    "roi": 0
  }
}
EOF

print_success "Marketing status file created"

# Create marketing health check script
print_status "Creating marketing health check script..."

cat > marketing-health-check.sh << 'EOF'
#!/bin/bash

# Marketing Health Check Script
# Checks the health of all marketing agents and processes

set -e

echo "🏥 Performing marketing health check..."

# Check if marketing orchestrator is running
if pgrep -f "autonomous-marketing-orchestrator.js" > /dev/null; then
    echo "✅ Marketing orchestrator is running"
else
    echo "❌ Marketing orchestrator is not running"
    # Restart marketing orchestrator
    cd "$(dirname "$0")"
    nohup node autonomous-marketing-orchestrator.js > logs/marketing-orchestrator.log 2>&1 &
fi

# Check if all required directories exist
DIRS=("marketing-agents" "marketing-research" "marketing-campaigns" "marketing-analytics")
for dir in "${DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ Directory $dir exists"
    else
        echo "❌ Directory $dir missing"
        mkdir -p "$dir"
        echo "✅ Created directory $dir"
    fi
done

# Check log files
LOG_FILES=("marketing-orchestrator.log" "trend-research.log" "content-creation.log" "social-media.log")
for log in "${LOG_FILES[@]}"; do
    if [ -f "logs/$log" ]; then
        echo "✅ Log file $log exists"
    else
        echo "❌ Log file $log missing"
        touch "logs/$log"
        echo "✅ Created log file $log"
    fi
done

echo "🏥 Marketing health check completed"
EOF

chmod +x marketing-health-check.sh

print_success "Marketing health check script created"

# Create marketing start script
print_status "Creating marketing start script..."

cat > start-marketing-system.sh << 'EOF'
#!/bin/bash

# Start Marketing System Script
# Starts all marketing agents and processes

set -e

echo "🚀 Starting Marketing Automation System..."

cd "$(dirname "$0")"

# Start marketing orchestrator
echo "Starting marketing orchestrator..."
nohup node autonomous-marketing-orchestrator.js > logs/marketing-orchestrator.log 2>&1 &

# Start trend research agent
echo "Starting trend research agent..."
nohup node marketing-agents/trend-research-agent.js > logs/trend-research.log 2>&1 &

# Start content creation agent
echo "Starting content creation agent..."
nohup node marketing-agents/content-creation-agent.js > logs/content-creation.log 2>&1 &

# Start social media agent
echo "Starting social media agent..."
nohup node marketing-agents/social-media-agent.js > logs/social-media.log 2>&1 &

# Start email campaign agent
echo "Starting email campaign agent..."
nohup node marketing-agents/email-campaign-agent.js > logs/email-campaign.log 2>&1 &

# Start SEO optimization agent
echo "Starting SEO optimization agent..."
nohup node marketing-agents/seo-optimization-agent.js > logs/seo-optimization.log 2>&1 &

# Start influencer outreach agent
echo "Starting influencer outreach agent..."
nohup node marketing-agents/influencer-outreach-agent.js > logs/influencer-outreach.log 2>&1 &

# Start ad campaign agent
echo "Starting ad campaign agent..."
nohup node marketing-agents/ad-campaign-agent.js > logs/ad-campaign.log 2>&1 &

# Start analytics tracking agent
echo "Starting analytics tracking agent..."
nohup node marketing-agents/analytics-tracking-agent.js > logs/analytics-tracking.log 2>&1 &

echo "✅ Marketing Automation System started successfully"
echo "Check logs/ directory for detailed logs"
EOF

chmod +x start-marketing-system.sh

print_success "Marketing start script created"

# Create marketing stop script
print_status "Creating marketing stop script..."

cat > stop-marketing-system.sh << 'EOF'
#!/bin/bash

# Stop Marketing System Script
# Stops all marketing agents and processes

set -e

echo "🛑 Stopping Marketing Automation System..."

# Stop marketing orchestrator
if pgrep -f "autonomous-marketing-orchestrator.js" > /dev/null; then
    pkill -f "autonomous-marketing-orchestrator.js"
    echo "✅ Stopped marketing orchestrator"
else
    echo "ℹ️  Marketing orchestrator not running"
fi

# Stop trend research agent
if pgrep -f "trend-research-agent.js" > /dev/null; then
    pkill -f "trend-research-agent.js"
    echo "✅ Stopped trend research agent"
else
    echo "ℹ️  Trend research agent not running"
fi

# Stop content creation agent
if pgrep -f "content-creation-agent.js" > /dev/null; then
    pkill -f "content-creation-agent.js"
    echo "✅ Stopped content creation agent"
else
    echo "ℹ️  Content creation agent not running"
fi

# Stop social media agent
if pgrep -f "social-media-agent.js" > /dev/null; then
    pkill -f "social-media-agent.js"
    echo "✅ Stopped social media agent"
else
    echo "ℹ️  Social media agent not running"
fi

# Stop email campaign agent
if pgrep -f "email-campaign-agent.js" > /dev/null; then
    pkill -f "email-campaign-agent.js"
    echo "✅ Stopped email campaign agent"
else
    echo "ℹ️  Email campaign agent not running"
fi

# Stop SEO optimization agent
if pgrep -f "seo-optimization-agent.js" > /dev/null; then
    pkill -f "seo-optimization-agent.js"
    echo "✅ Stopped SEO optimization agent"
else
    echo "ℹ️  SEO optimization agent not running"
fi

# Stop influencer outreach agent
if pgrep -f "influencer-outreach-agent.js" > /dev/null; then
    pkill -f "influencer-outreach-agent.js"
    echo "✅ Stopped influencer outreach agent"
else
    echo "ℹ️  Influencer outreach agent not running"
fi

# Stop ad campaign agent
if pgrep -f "ad-campaign-agent.js" > /dev/null; then
    pkill -f "ad-campaign-agent.js"
    echo "✅ Stopped ad campaign agent"
else
    echo "ℹ️  Ad campaign agent not running"
fi

# Stop analytics tracking agent
if pgrep -f "analytics-tracking-agent.js" > /dev/null; then
    pkill -f "analytics-tracking-agent.js"
    echo "✅ Stopped analytics tracking agent"
else
    echo "ℹ️  Analytics tracking agent not running"
fi

echo "✅ Marketing Automation System stopped successfully"
EOF

chmod +x stop-marketing-system.sh

print_success "Marketing stop script created"

# Create marketing status script
print_status "Creating marketing status script..."

cat > marketing-status.sh << 'EOF'
#!/bin/bash

# Marketing Status Script
# Shows the status of all marketing agents and processes

set -e

echo "📊 Marketing Automation System Status"
echo "=================================="

# Check marketing orchestrator
if pgrep -f "autonomous-marketing-orchestrator.js" > /dev/null; then
    echo "✅ Marketing Orchestrator: RUNNING"
else
    echo "❌ Marketing Orchestrator: STOPPED"
fi

# Check trend research agent
if pgrep -f "trend-research-agent.js" > /dev/null; then
    echo "✅ Trend Research Agent: RUNNING"
else
    echo "❌ Trend Research Agent: STOPPED"
fi

# Check content creation agent
if pgrep -f "content-creation-agent.js" > /dev/null; then
    echo "✅ Content Creation Agent: RUNNING"
else
    echo "❌ Content Creation Agent: STOPPED"
fi

# Check social media agent
if pgrep -f "social-media-agent.js" > /dev/null; then
    echo "✅ Social Media Agent: RUNNING"
else
    echo "❌ Social Media Agent: STOPPED"
fi

# Check email campaign agent
if pgrep -f "email-campaign-agent.js" > /dev/null; then
    echo "✅ Email Campaign Agent: RUNNING"
else
    echo "❌ Email Campaign Agent: STOPPED"
fi

# Check SEO optimization agent
if pgrep -f "seo-optimization-agent.js" > /dev/null; then
    echo "✅ SEO Optimization Agent: RUNNING"
else
    echo "❌ SEO Optimization Agent: STOPPED"
fi

# Check influencer outreach agent
if pgrep -f "influencer-outreach-agent.js" > /dev/null; then
    echo "✅ Influencer Outreach Agent: RUNNING"
else
    echo "❌ Influencer Outreach Agent: STOPPED"
fi

# Check ad campaign agent
if pgrep -f "ad-campaign-agent.js" > /dev/null; then
    echo "✅ Ad Campaign Agent: RUNNING"
else
    echo "❌ Ad Campaign Agent: STOPPED"
fi

# Check analytics tracking agent
if pgrep -f "analytics-tracking-agent.js" > /dev/null; then
    echo "✅ Analytics Tracking Agent: RUNNING"
else
    echo "❌ Analytics Tracking Agent: STOPPED"
fi

echo ""
echo "📈 Recent Activity:"
echo "=================="

# Show recent log entries
if [ -f "logs/marketing-orchestrator.log" ]; then
    echo "Marketing Orchestrator (last 5 lines):"
    tail -5 logs/marketing-orchestrator.log
    echo ""
fi

if [ -f "logs/trend-research.log" ]; then
    echo "Trend Research (last 5 lines):"
    tail -5 logs/trend-research.log
    echo ""
fi

if [ -f "logs/content-creation.log" ]; then
    echo "Content Creation (last 5 lines):"
    tail -5 logs/content-creation.log
    echo ""
fi

echo "📊 Marketing Status Check Completed"
EOF

chmod +x marketing-status.sh

print_success "Marketing status script created"

print_success "Marketing Automation Cron System setup completed successfully!"
echo ""
echo "📋 Summary:"
echo "==========="
echo "✅ Marketing directories created"
echo "✅ Cron scripts created"
echo "✅ Crontab entries installed"
echo "✅ Log files created"
echo "✅ Configuration files created"
echo "✅ Health check script created"
echo "✅ Start/stop scripts created"
echo "✅ Status script created"
echo ""
echo "🚀 To start the marketing system:"
echo "   ./start-marketing-system.sh"
echo ""
echo "🛑 To stop the marketing system:"
echo "   ./stop-marketing-system.sh"
echo ""
echo "📊 To check marketing status:"
echo "   ./marketing-status.sh"
echo ""
echo "🏥 To perform health check:"
echo "   ./marketing-health-check.sh"
echo ""
echo "📅 Cron jobs are now active and will run automatically" 