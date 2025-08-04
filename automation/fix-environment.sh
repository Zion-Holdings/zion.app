#!/bin/bash

# Fix Environment Configuration Script
# Sets up proper environment variables for automation

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ENV_FILE="$PROJECT_ROOT/.env"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "🔧 Fixing environment configuration for automation..."

# Create automation environment file
AUTOMATION_ENV_FILE="$SCRIPT_DIR/.env.automation"
log "📝 Creating automation environment file..."

cat > "$AUTOMATION_ENV_FILE" << 'EOF'
# Automation Environment Configuration
AUTOMATION_ENABLED=true
AUTOMATION_LOG_LEVEL=info
AUTOMATION_MAX_RETRIES=3
AUTOMATION_TIMEOUT=300000

# Content Generation Configuration
CONTENT_GENERATION_ENABLED=true
CONTENT_GENERATION_INTERVAL=7200000
CONTENT_GENERATION_BATCH_SIZE=5

# Website Analysis Configuration
WEBSITE_ANALYSIS_ENABLED=true
WEBSITE_ANALYSIS_INTERVAL=3600000
WEBSITE_ANALYSIS_DEPTH=3

# Market Research Configuration
MARKET_RESEARCH_ENABLED=true
MARKET_RESEARCH_INTERVAL=21600000

# Sales Campaign Configuration
SALES_CAMPAIGN_ENABLED=true
SALES_CAMPAIGN_INTERVAL=28800000

# Solution Creation Configuration
SOLUTION_CREATION_ENABLED=true
SOLUTION_CREATION_INTERVAL=43200000

# Supabase Configuration (using placeholder values for local development)
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key

# Google AI Configuration
GOOGLE_AI_API_KEY=placeholder-google-ai-key

# Development Configuration
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF

log "✅ Automation environment file created: $AUTOMATION_ENV_FILE"

# Create a script to load environment variables
ENV_LOADER="$SCRIPT_DIR/load-env.sh"
log "📝 Creating environment loader script..."

cat > "$ENV_LOADER" << 'EOF'
#!/bin/bash

# Load environment variables for automation scripts
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_ENV_FILE="$SCRIPT_DIR/.env.automation"

if [[ -f "$AUTOMATION_ENV_FILE" ]]; then
    export $(cat "$AUTOMATION_ENV_FILE" | grep -v '^#' | xargs)
    echo "✅ Environment variables loaded from $AUTOMATION_ENV_FILE"
else
    echo "⚠️  Automation environment file not found: $AUTOMATION_ENV_FILE"
fi
EOF

chmod +x "$ENV_LOADER"
log "✅ Environment loader script created: $ENV_LOADER"

# Update cron configuration to use the environment loader
log "🔧 Updating cron configuration..."
TEMP_CRON=$(mktemp)

cat > "$TEMP_CRON" << 'EOF'
# Fixed Cron Configuration with Environment Loading
# This configuration includes proper environment setup

# Set environment variables for cron jobs
SHELL=/bin/bash
PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin
HOME=/Users/miami2
NVM_DIR=/Users/miami2/.nvm
NODE_PATH=/usr/local/lib/node_modules

# Load NVM and Node.js in cron environment
@reboot source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./setup-autonomous-system.sh > logs/cron-manager.log 2>&1

# Netlify Build Automation Cron Jobs
# Check build status every 5 minutes
*/5 * * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && ./system-build-monitor.sh

# Health check every hour
0 * * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && ./system-health-check.sh

# Daily dependency update at 2 AM
0 2 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && ./system-dependency-updater.sh

# Weekly cleanup on Sunday at 3 AM
0 3 * * 0 source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && ./system-cleanup.sh

# Main automation cron job every 6 hours
0 */6 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && ./cron-automation.sh

# Autonomous Agent System Cron Jobs
# Market Research - Every 6 hours
0 */6 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node autonomous-market-research-agent.js >> logs/market-research.log 2>&1

# Solution Creation - Every 12 hours
0 */12 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node autonomous-solution-creator-agent.js >> logs/solution-creation.log 2>&1

# Sales Campaign - Every 8 hours
0 */8 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node autonomous-sales-agent.js >> logs/sales-campaign.log 2>&1

# Agent Creation - Weekly
0 0 * * 0 source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node continuous-agent-creator.js >> logs/agent-creation.log 2>&1

# Master Orchestrator - Every 4 hours
0 */4 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node autonomous-master-orchestrator.js >> logs/master-orchestrator.log 2>&1

# Monitoring - Every 30 minutes
*/30 * * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node monitor-automation.js >> logs/monitoring.log 2>&1

# Backup - Daily at 2 AM
0 2 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && ./backup-autonomous-system.sh >> logs/backup.log 2>&1

# ChatGPT Analysis - Every 4 hours
0 */4 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && ./chatgpt-analysis-cron.sh >> logs/chatgpt-analysis.log 2>&1

# Content Generation - Every 2 hours
0 */2 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node enhanced-content-generator.js >> logs/content-generation.log 2>&1

# Performance Monitoring - Every hour
0 * * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node performance-monitor.js >> logs/performance.log 2>&1

# Security Scan - Daily at 1 AM
0 1 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node security-scan.js >> logs/security-monitor.log 2>&1

# Website Analyzer - Every 4 hours
0 */4 * * * source /Users/miami2/.nvm/nvm.sh && cd /Users/miami2/Documents/GitHub/bolt.new.zion.app/automation && ./load-env.sh && node enhanced-website-analyzer-agent.js >> logs/website-analyzer.log 2>&1
EOF

crontab "$TEMP_CRON"
rm "$TEMP_CRON"

log "✅ Cron configuration updated with environment loading"

log "🎉 Environment configuration fixed successfully!"
log "📋 Next steps:"
log "   1. Run ./start-autonomous-system.sh to start the automation"
log "   2. Run ./status-autonomous-system.sh to check status"
log "   3. Check logs/ directory for any errors" 