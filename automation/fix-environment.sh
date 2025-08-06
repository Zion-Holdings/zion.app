#!/bin/bash

echo "🔧 Fixing automation environment configuration..."

# Set environment variables for local development
export AUTOMATION_SKIP_SUPABASE_CHECK=true
export AUTOMATION_FALLBACK_MODE=true
export NODE_ENV=development

# Create a temporary environment file for automation
cat > automation/.env.automation.temp << 'EOF'
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

# Supabase Configuration (fallback mode for local development)
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key

# Google AI Configuration
GOOGLE_AI_API_KEY=placeholder-google-ai-key

# Development Configuration
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Automation System Configuration
AUTOMATION_SKIP_SUPABASE_CHECK=true
AUTOMATION_FALLBACK_MODE=true
EOF

# Replace the existing environment file
mv automation/.env.automation.temp automation/.env.automation

echo "✅ Environment configuration updated"

# Stop any running automation processes
echo "🛑 Stopping existing automation processes..."
pkill -f "automation" || true
pkill -f "agent" || true
pkill -f "orchestrator" || true

# Wait a moment for processes to stop
sleep 2

echo "🚀 Starting automation system..."
cd automation && ./start-autonomous-system.sh

echo "✅ Environment fix completed" 