#!/bin/bash
# Composio CLI bootstrap for Zion Tech Group
# Run inside Termux/Linux with curl + bash available
set -euo pipefail

echo "=== Zion Composio CLI Bootstrap ==="
if ! command -v curl >/dev/null 2>&1; then
  echo "curl not found"; exit 1
fi

TMP_DIR="$(mktemp -d)"
cd "$TMP_DIR"

echo "Downloading Composio CLI install script..."
curl -fsSL https://composio.dev/install -o install.sh
chmod +x install.sh
./install.sh || true

echo ""
echo "Verify installation:"
composio --version || true

echo ""
echo "Next steps:"
echo "1) composio login"
echo "2) composio connected-accounts list"
echo "3) composio connected-accounts link stripe"
echo "4) composio connected-accounts link calendly"
echo "5) composio connected-accounts link resend"
echo ""
echo "Temp dir: $TMP_DIR"
