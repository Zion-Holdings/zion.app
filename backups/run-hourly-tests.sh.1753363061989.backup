#!/bin/bash
# Runs Jest tests hourly with coverage and checks coverage threshold.

set -e

COVERAGE_DIR="logs/coverage/hourly"
mkdir -p "$COVERAGE_DIR"

npx jest --coverage --coverageDirectory="$COVERAGE_DIR"

node scripts/check_coverage_and_notify.js "$COVERAGE_DIR/coverage-summary.json"
