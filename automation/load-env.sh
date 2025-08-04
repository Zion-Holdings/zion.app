#!/bin/bash

# Load environment variables for automation scripts
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_ENV_FILE="$SCRIPT_DIR/.env.automation"

# Set default environment variables
export NODE_ENV=development
export AUTOMATION_SKIP_SUPABASE_CHECK=true
export AUTOMATION_FALLBACK_MODE=true
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:$PATH"

# Load NVM if available
if [ -s "/Users/miami2/.nvm/nvm.sh" ]; then
    source "/Users/miami2/.nvm/nvm.sh"
    nvm use node
fi

if [[ -f "$AUTOMATION_ENV_FILE" ]]; then
    export $(cat "$AUTOMATION_ENV_FILE" | grep -v '^#' | xargs)
    echo "✅ Environment variables loaded from $AUTOMATION_ENV_FILE"
else
    echo "⚠️  Automation environment file not found: $AUTOMATION_ENV_FILE"
fi
