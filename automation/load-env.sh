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
