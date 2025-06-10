#!/bin/bash
# Runs Jest tests hourly with coverage, saves JSON output, and checks coverage threshold.

set -e

COVERAGE_DIR="logs/coverage/hourly"
TEST_RESULTS_DIR="logs/tests"
JEST_RESULTS_FILE="$TEST_RESULTS_DIR/hourly-jest-results.json"

mkdir -p "$COVERAGE_DIR"
mkdir -p "$TEST_RESULTS_DIR"

echo "Running Jest tests with coverage and JSON output..."
# The --json flag outputs structured JSON test results.
# --outputFile flag directs this JSON output to a file.
# --coverage flag enables coverage generation.
# --coverageDirectory specifies where coverage reports should be stored.
npx jest --coverage --coverageDirectory="$COVERAGE_DIR" --json --outputFile="$JEST_RESULTS_FILE"

echo "Jest tests finished. Results at $JEST_RESULTS_FILE, Coverage summary at $COVERAGE_DIR/coverage-summary.json"

# Call check_coverage_and_notify.js, which reads:
# 1. Coverage summary from $COVERAGE_DIR/coverage-summary.json
# 2. Jest JSON output from $JEST_RESULTS_FILE (relative path from check_coverage_and_notify.js is ../logs/tests/hourly-jest-results.json)
node scripts/check_coverage_and_notify.js "$COVERAGE_DIR/coverage-summary.json"

echo "run-hourly-tests.sh finished."
