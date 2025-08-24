#!/bin/bash
# Patches modules flagged by npm audit.
# If npm audit cannot run due to network restrictions, this script uses known
# vulnerable modules from existing audit reports.

set -euo pipefail

echo "Running npm audit to detect vulnerabilities..."
if ! npm audit; then
  echo "npm audit failed; continuing with known modules from stored reports." >&2
fi

echo "Updating cross-spawn via react-devtools..."
npm install react-devtools@latest --save-dev

echo "Updating electron..."
npm install electron@latest --save-dev

echo "Updating got..."
npm install got@latest

echo "Replacing deprecated ip package with ipaddr.js..."
if npm ls ip >/dev/null 2>&1; then
  npm uninstall ip
fi
npm install ipaddr.js@latest

echo "Patch process completed. Run 'npm audit' to verify."
