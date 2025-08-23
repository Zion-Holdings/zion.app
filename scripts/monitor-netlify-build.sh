
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      #!/bin/bash

# Netlify Build Monitor Script
# Usage: ./scripts/monitor-netlify-build.sh

SITE_ID="ziontechgroup"  # Update with your actual site ID
COMMIT_SHA="95d851a3"    # The commit we just pushed

echo "🔍 Monitoring Netlify build for commit: $COMMIT_SHA"
echo "📊 Site: $SITE_ID"
echo "⏰ Started: $(date)"
echo "=========================================="

# Function to check build status
check_build_status() {
    echo "🔄 Checking build status..."
    
    # Note: This requires NETLIFY_ACCESS_TOKEN environment variable
    if [ -z "$NETLIFY_ACCESS_TOKEN" ]; then
        echo "⚠️  NETLIFY_ACCESS_TOKEN not set - using public status check"
        echo "📱 Manual check: https://app.netlify.com/sites/$SITE_ID/deploys"
        return
    fi
    
    # Get latest deploy info via API
    response=$(curl -s -H "Authorization: Bearer $NETLIFY_ACCESS_TOKEN" \
        "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys?per_page=1")
    
    if echo "$response" | grep -q "error"; then
        echo "❌ API Error: $response"
        return
    fi
    
    # Parse response (requires jq for full parsing)
    if command -v jq > /dev/null; then
        deploy_state=$(echo "$response" | jq -r '.[0].state')
        deploy_url=$(echo "$response" | jq -r '.[0].deploy_url')
        commit_ref=$(echo "$response" | jq -r '.[0].commit_ref')
        
        echo "📋 Deploy State: $deploy_state"
        echo "🔗 Deploy URL: $deploy_url" 
        echo "📝 Commit: $commit_ref"
        
        case $deploy_state in
            "ready")
                echo "✅ BUILD SUCCESSFUL! 🎉"
                echo "🌐 Site is live at: $deploy_url"
                return 0
                ;;
            "building")
                echo "🔨 Build in progress..."
                return 1
                ;;
            "error")
                echo "❌ BUILD FAILED!"
                echo "🔍 Check logs: https://app.netlify.com/sites/$SITE_ID/deploys"
                return 2
                ;;
            *)
                echo "⏳ Status: $deploy_state"
                return 1
                ;;
        esac
    else
        echo "📋 Raw response: $response"
        echo "💡 Install 'jq' for better output parsing"
    fi
}

# Monitor loop
echo "🚀 Starting build monitoring..."
while true; do
    if check_build_status; then
        echo "🎯 Monitoring complete!"
        break
    fi
    
    echo "⏳ Waiting 30 seconds before next check..."
    sleep 30
done

echo "=========================================="
echo "✅ Netlify build monitoring finished"
echo "🕐 Completed: $(date)"
    } catch (error) {
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

