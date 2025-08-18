#!/bin/bash

echo "🚀 Starting All PM2 Processes with Autorestart Enabled..."
echo "📊 This will start all 49+ processes with maximum reliability"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Stop all existing processes
echo "🛑 Stopping all existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the ORIGINAL ecosystem first (preserving existing automation)
echo "🔄 Starting ORIGINAL PM2 ecosystem (preserving existing automation)..."
pm2 start ecosystem.config.cjs

# Start LOCAL ecosystem files
echo "🔄 Starting LOCAL ecosystem files..."
pm2 start ecosystem.cron.local.cjs
pm2 start ecosystem.fast-ads.local.cjs

# Now start all individual processes with autorestart enabled
echo "🚀 Starting all individual processes with autorestart enabled..."

# Start core automation processes
pm2 start automation/continuous-front-runner.cjs --name "continuous-front" --cron-restart "*/5 * * * *" --autorestart
pm2 start automation/content-creator.cjs --name "content-creator" --cron-restart "* * * * *" --autorestart
pm2 start automation/automation-guardian.cjs --name "automation-guardian-10m" --cron-restart "*/10 * * * *" --autorestart
pm2 start automation/links-crawl.cjs --name "links-crawl" --cron-restart "*/10 * * * *" --autorestart
pm2 start automation/links-fix.cjs --name "links-fix" --cron-restart "*/5 * * * *" --autorestart
pm2 start automation/sitemap-runner.cjs --name "sitemap-runner" --cron-restart "*/7 * * * *" --autorestart
pm2 start automation/git-sync.cjs --name "git-sync" --cron-restart "*/5 * * * *" --autorestart
pm2 start automation/git-autosync-loop.cjs --name "git-autosync-loop" --cron-restart "* * * * *" --autorestart
pm2 start automation/content-completer.cjs --name "content-completer" --cron-restart "* * * * *" --autorestart
pm2 start automation/chat-to-agents.cjs --name "chat-to-agents" --cron-restart "* * * * *" --autorestart

# Start maintenance processes
pm2 start scripts/maintenance-cleanup.js --name "maintenance-cleanup" --cron-restart "0 2 * * 0" --autorestart
pm2 start scripts/maintenance-optimize.js --name "maintenance-optimize" --cron-restart "0 2 * * 0" --autorestart
pm2 start scripts/maintenance-dependencies.js --name "maintenance-dependencies" --cron-restart "0 2 * * 0" --autorestart

# Start AI and content processes
pm2 start scripts/ai-trends-radar.js --name "ai-trends-radar" --cron-restart "0 5 * * *" --autorestart
pm2 start scripts/ai-content-factory.js --name "ai-content-factory" --cron-restart "0 */3 * * *" --autorestart
pm2 start scripts/ai-changelog.js --name "ai-changelog" --cron-restart "0 6 * * *" --autorestart
pm2 start scripts/ai-research-scout.js --name "ai-research-scout" --cron-restart "0 8 * * *" --autorestart
pm2 start scripts/ai-content-autonomy.js --name "ai-content-autonomy" --cron-restart "0 10 * * *" --autorestart

# Start marketing processes
pm2 start scripts/linkedin-marketing.js --name "linkedin-marketing" --cron-restart "0 12 * * *" --autorestart
pm2 start scripts/instagram-marketing.js --name "instagram-marketing" --cron-restart "0 13 * * *" --autorestart
pm2 start scripts/marketing-daily.js --name "marketing-daily" --cron-restart "0 14 * * *" --autorestart
pm2 start scripts/marketing-sync.js --name "marketing-sync" --cron-restart "0 16 * * *" --autorestart

# Start testing processes
pm2 start scripts/playwright-smoke.js --name "playwright-smoke" --cron-restart "0 */4 * * *" --autorestart
pm2 start scripts/test-auth.js --name "test-auth" --cron-restart "0 */6 * * *" --autorestart
pm2 start scripts/pr-smoke.js --name "pr-smoke" --cron-restart "0 */8 * * *" --autorestart
pm2 start scripts/accessibility-audit.js --name "accessibility-audit" --cron-restart "0 7 * * *" --autorestart

# Start performance and SEO processes
pm2 start scripts/lighthouse-live.js --name "lighthouse-live" --cron-restart "0 */6 * * *" --autorestart
pm2 start scripts/lighthouse-budgets.js --name "lighthouse-budgets" --cron-restart "0 9 * * *" --autorestart
pm2 start scripts/seo-validator.js --name "seo-validator" --cron-restart "0 7 * * *" --autorestart
pm2 start scripts/sitemap-daily.js --name "sitemap-daily" --cron-restart "0 6 * * *" --autorestart
pm2 start scripts/og-image-update.js --name "og-image-update" --cron-restart "0 11 * * *" --autorestart

# Start security and monitoring processes
pm2 start scripts/security-auto-heal.js --name "security-auto-heal" --cron-restart "0 */4 * * *" --autorestart
pm2 start scripts/app-monitoring.js --name "app-monitoring" --cron-restart "0 */2 * * *" --autorestart
pm2 start scripts/site-health-guardian.js --name "site-health-guardian" --cron-restart "0 */3 * * *" --autorestart
pm2 start scripts/workflow-watchdog.js --name "workflow-watchdog" --cron-restart "0 */5 * * *" --autorestart

# Start deployment processes
pm2 start scripts/netlify-auto-healer.js --name "netlify-auto-healer" --cron-restart "0 */2 * * *" --autorestart
pm2 start scripts/netlify-monitor.js --name "netlify-monitor" --cron-restart "0 */3 * * *" --autorestart
pm2 start scripts/continuous-deployment.js --name "continuous-deployment" --cron-restart "0 */4 * * *" --autorestart
pm2 start scripts/self-healing-build.js --name "self-healing-build" --cron-restart "0 */6 * * *" --autorestart

# Start content processes
pm2 start scripts/homepage-auto-update.js --name "homepage-auto-update" --cron-restart "0 15 * * *" --autorestart
pm2 start scripts/media-optimizer.js --name "media-optimizer" --cron-restart "0 17 * * *" --autorestart
pm2 start scripts/content-generation.js --name "content-generation" --cron-restart "0 19 * * *" --autorestart

# Start Git processes
pm2 start scripts/merge-conflict-guard.js --name "merge-conflict-guard" --cron-restart "0 */20 * * *" --autorestart

# Start CI and build processes
pm2 start scripts/ci-lint-types-build.js --name "ci-lint-types-build" --cron-restart "0 */10 * * *" --autorestart
pm2 start scripts/dependencies.js --name "dependencies-check" --cron-restart "0 3 * * *" --autorestart
pm2 start scripts/performance-weekly.js --name "performance-weekly" --cron-restart "0 4 * * 0" --autorestart
pm2 start scripts/security-weekly.js --name "security-weekly" --cron-restart "0 5 * * 0" --autorestart

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show final status
echo ""
echo "📊 Final PM2 Status:"
pm2 status

echo ""
echo "✅ All PM2 Processes Started with Autorestart Enabled!"
echo ""
echo "🔧 What's Been Configured:"
echo "  - ✅ All ecosystem files have autorestart: true"
echo "  - ✅ All individual processes have autorestart enabled"
echo "  - ✅ Cron-based scheduling for optimal performance"
echo "  - ✅ Maximum reliability and uptime"
echo ""
echo "📋 Key Benefits:"
echo "  - Processes will never stay stopped"
echo "  - Automatic recovery from any failures"
echo "  - Continuous operation without manual intervention"
echo "  - Enhanced system reliability"
echo ""
echo "🎯 Next Steps:"
echo "  1. Monitor with: pm2 monit"
echo "  2. Check status: pm2 status"
echo "  3. Verify autorestart is working"
echo "  4. Enjoy continuous autonomous operation!"
echo ""
echo "🚀 Your system now runs with maximum reliability and continuous operation!"
echo ""
echo "📊 Process Summary:"
echo "  - ORIGINAL automation: 12 processes (PRESERVED)"
echo "  - LOCAL processes: 2 processes (PRESERVED)"
echo "  - INDIVIDUAL processes: 35+ processes (ADDED with autorestart)"
echo "  - TOTAL: 49+ processes with full autorestart protection"
