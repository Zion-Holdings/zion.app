#!/bin/bash

# Environment Setup Script
# Sets up environment variables for automation

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ENV_FILE="$PROJECT_ROOT/.env"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "🔧 Setting up environment variables..."

# Create .env file if it doesn't exist
if [[ ! -f "$ENV_FILE" ]]; then
    log "📝 Creating .env file..."
    cat > "$ENV_FILE" << EOF
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key

# Google AI Configuration (for content generation)
GOOGLE_AI_API_KEY=placeholder-google-ai-key

# Development Configuration
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Sentry Configuration
SENTRY_DSN=

# Optional: Analytics
NEXT_PUBLIC_GA_ID=

# Optional: Email Configuration
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

# Optional: Development Users (for testing without Supabase)
DEV_USER_1_EMAIL=dev@example.com
DEV_USER_1_PASSWORD=devpassword
DEV_USER_2_EMAIL=test@example.com
DEV_USER_2_PASSWORD=testpassword
EOF
    log "✅ .env file created"
else
    log "✅ .env file already exists"
fi

# Set environment variables for current session
export NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL:-"https://placeholder.supabase.co"}
export NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY:-"placeholder-key"}
export GOOGLE_AI_API_KEY=${GOOGLE_AI_API_KEY:-"placeholder-google-ai-key"}
export NODE_ENV=${NODE_ENV:-"development"}
export NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL:-"http://localhost:3000"}

log "✅ Environment variables set for current session"
log "📋 Current environment:"
log "  - NEXT_PUBLIC_SUPABASE_URL: $NEXT_PUBLIC_SUPABASE_URL"
log "  - NODE_ENV: $NODE_ENV"
log "  - NEXT_PUBLIC_APP_URL: $NEXT_PUBLIC_APP_URL"

log "✅ Environment setup completed" 