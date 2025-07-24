#!/bin/bash
# Run npm audit to check for known vulnerabilities.
# Outputs a JSON report to maintenance-audit.json

set -e

npm install --ignore-scripts
npm audit --json > maintenance-audit.json
