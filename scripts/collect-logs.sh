#!/bin/bash
# Collects project logs into a timestamped archive for easier sharing.
set -euo pipefail

OUTPUT_DIR="logs/archive"
TIMESTAMP=$(date +"%Y-%m-%d-%H-%M-%S")
ARCHIVE="$OUTPUT_DIR/logs-$TIMESTAMP.tar.gz"

mkdir -p "$OUTPUT_DIR"
STAGING_DIR="$(mktemp -d)"

# Copy logs directory if it exists
if [ -d logs ]; then
  cp -r logs "$STAGING_DIR/"
fi

# Include server logs
if [ -d server/logs ]; then
  cp -r server/logs "$STAGING_DIR/server-logs"
fi

# Include Playwright logs
if [ -d playwright-logs ]; then
  cp -r playwright-logs "$STAGING_DIR/playwright-logs"
fi

# Include Cypress results
if [ -d cypress/results ]; then
  cp -r cypress/results "$STAGING_DIR/cypress-results"
fi

# Include Jest or other test results
if [ -d test-results ]; then
  cp -r test-results "$STAGING_DIR/test-results"
fi
if [ -f test_results.json ]; then
  cp test_results.json "$STAGING_DIR/"
fi

# Copy root .log files
shopt -s nullglob
for f in *.log; do
  cp "$f" "$STAGING_DIR/"
done
shopt -u nullglob

# Generate an error summary using analyze-error-logs.cjs
if [ -d "$STAGING_DIR/logs" ]; then
  node "$(dirname "$0")/analyze-error-logs.cjs" "$STAGING_DIR/logs" --dedupe --summary > "$STAGING_DIR/error_summary.log" || echo "Log analysis failed"
fi

# Create archive
tar -czf "$ARCHIVE" -C "$STAGING_DIR" .
rm -rf "$STAGING_DIR"

echo "Logs archived to $ARCHIVE"

