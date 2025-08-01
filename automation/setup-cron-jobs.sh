#!/bin/bash

# Autonomous Agents Cron Jobs Setup
# This script sets up cron jobs for continuous improvement

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CRON_FILE="$PROJECT_ROOT/automation/crontab.txt"

echo "🤖 Setting up autonomous agents cron jobs..."

# Create cron jobs
cat > "$CRON_FILE" << 'EOF'
# Autonomous Agents Cron Jobs
# Generated automatically - Do not edit manually

# Start autonomous improvement agent every 6 hours
0 */6 * * * cd /Users/miami2/Documents/GitHub/bolt.new.zion.app && node automation/autonomous-improvement-agent.js

# Run content generation every 12 hours
0 */12 * * * cd /Users/miami2/Documents/GitHub/bolt.new.zion.app && node automation/content-generation-automation.js

# Run analytics every 6 hours
0 */6 * * * cd /Users/miami2/Documents/GitHub/bolt.new.zion.app && node automation/autonomous-analytics.js

# Health check every 30 minutes
*/30 * * * * cd /Users/miami2/Documents/GitHub/bolt.new.zion.app && node automation/health-check.js

# Backup system daily at 2 AM
0 2 * * * cd /Users/miami2/Documents/GitHub/bolt.new.zion.app && node automation/backup-system.js

# System maintenance weekly on Sunday at 3 AM
0 3 * * 0 cd /Users/miami2/Documents/GitHub/bolt.new.zion.app && node automation/system-maintenance.js
EOF

echo "✅ Cron jobs created in $CRON_FILE"

# Install cron jobs
echo "📅 Installing cron jobs..."
crontab "$CRON_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Cron jobs installed successfully"
    echo "📋 Current cron jobs:"
    crontab -l
else
    echo "❌ Failed to install cron jobs"
    exit 1
fi

# Create log rotation
echo "📝 Setting up log rotation..."
sudo tee /etc/logrotate.d/autonomous-agents > /dev/null << 'EOF'
/Users/miami2/Documents/GitHub/bolt.new.zion.app/automation/logs/*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    create 644 miami2 staff
}
EOF

echo "✅ Log rotation configured"

# Create systemd service for persistent automation (optional)
echo "🔧 Creating systemd service..."
sudo tee /etc/systemd/system/autonomous-agents.service > /dev/null << 'EOF'
[Unit]
Description=Autonomous Agents for Bolt.new
After=network.target

[Service]
Type=simple
User=miami2
WorkingDirectory=/Users/miami2/Documents/GitHub/bolt.new.zion.app
ExecStart=/usr/local/bin/node automation/automation-orchestrator.js start
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

echo "✅ Systemd service created"
echo "💡 To enable the service, run: sudo systemctl enable autonomous-agents"
echo "💡 To start the service, run: sudo systemctl start autonomous-agents"

echo "🎉 Autonomous agents setup complete!"
echo "📊 Monitor logs at: $PROJECT_ROOT/automation/logs/"
echo "📈 View analytics at: $PROJECT_ROOT/automation/master-analytics/" 