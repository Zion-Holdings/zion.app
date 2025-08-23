#!/bin/bash

# Zion App Automation Test Script
# This script tests all automation systems

set -e

echo "🧪 Testing Zion App Automation Systems..."
echo "========================================"

# Change to project directory
cd "$(dirname "$0")"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    exit 1
fi

# Check if npm dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Create logs directory if it doesn't exist
mkdir -p automation/logs

# Run the comprehensive test suite
echo "🔍 Running automation tests..."
node automation/test-all-automations.js

# Check test results
if [ -f "automation/test-report.json" ]; then
    echo ""
    echo "📊 Test Results Summary:"
    echo "======================="
    
    # Extract summary from test report
    TOTAL=$(node -e "const report = require('./automation/test-report.json'); console.log(report.tests || 0);")
    PASSED=$(node -e "const report = require('./automation/test-report.json'); console.log(report.passed || 0);")
    FAILED=$(node -e "const report = require('./automation/test-report.json'); console.log(report.failed || 0);")
    SUCCESS_RATE=$(node -e "const report = require('./automation/test-report.json'); const total = report.tests || 0; const passed = report.passed || 0; console.log(total > 0 ? ((passed / total) * 100).toFixed(1) : '0.0');")
    
    echo "Total Tests: $TOTAL"
    echo "Passed: $PASSED ✅"
    echo "Failed: $FAILED ❌"
    echo "Success Rate: $SUCCESS_RATE%"
    
    if [ "$FAILED" -eq 0 ]; then
        echo ""
        echo "🎉 All tests passed!"
        exit 0
    else
        echo ""
        echo "⚠️  Some tests failed. Check the detailed report above."
        exit 1
    fi
else
    echo "❌ Test report not found"
    exit 1
fi 