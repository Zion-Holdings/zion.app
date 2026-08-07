#!/usr/bin/env bash
# Site Health Check Wrapper - uses existing website_monitor.py
set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
python3 "$SCRIPT_DIR/commands/website_monitor.py"
