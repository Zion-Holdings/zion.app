#!/bin/bash
# This script checks for outdated dependencies and audits for vulnerabilities.

echo "Checking for outdated dependencies..."
npm run check-updates

echo "\nAuditing for vulnerabilities..."
npm run audit-vulnerabilities
