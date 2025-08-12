#!/bin/bash
# Generates test logs for offline analysis.
# Runs project tests and stores output and JSON results in logs/tests.
set -euo pipefail

LOG_DIR="logs/tests"
mkdir -p "$LOG_DIR"

TIMESTAMP=$(date +"%Y-%m-%d-%H-%M-%S")
LOG_FILE="$LOG_DIR/test-$TIMESTAMP.log"
JSON_RESULTS_FILE="$LOG_DIR/test-results-$TIMESTAMP.json"

npm run test -- --ci --json --outputFile="$JSON_RESULTS_FILE" 2>&1 | tee "$LOG_FILE"

echo "Test log saved to $LOG_FILE"
echo "JSON results saved to $JSON_RESULTS_FILE"

