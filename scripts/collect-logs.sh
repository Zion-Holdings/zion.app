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

# Copy root .log files
shopt -s nullglob
for f in *.log; do
  cp "$f" "$STAGING_DIR/"
done
shopt -u nullglob

# Create archive
tar -czf "$ARCHIVE" -C "$STAGING_DIR" .
rm -rf "$STAGING_DIR"

echo "Logs archived to $ARCHIVE"
