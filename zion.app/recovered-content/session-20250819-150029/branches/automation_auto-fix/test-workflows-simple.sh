#!/bin/bash

echo "Testing GitHub Actions Workflow Steps Locally"
echo "============================================"
echo ""

# Test results tracking
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Function to run a test
run_test() {
    local test_name="$1"
    local command="$2"
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    echo "${TOTAL_TESTS}. Testing: ${test_name}"
    echo "   Command: ${command}"
    
    if eval "$command"; then
        echo "   ✅ PASSED"
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo "   ❌ FAILED"
        FAILED_TESTS=$((FAILED_TESTS + 1))
    fi
    echo ""
}

echo "Test Plan:"
echo "=========="
echo "1.  Node.js and npm availability"
echo "2.  Dependencies installation"
echo "3.  TypeScript type checking"
echo "4.  ESLint linting"
echo "5.  Security audit"
echo "6.  Build process"
echo "7.  Playwright check"
echo "8.  Test scripts availability"
echo "9.  Automation scripts"
echo "10. Workflow file validation"
echo ""

# Test 1: Node.js and npm availability
run_test "Node.js Version" "node --version"
run_test "npm Version" "npm --version"

# Test 2: Dependencies installation
run_test "Dependencies Install" "npm ci --no-audit --no-fund"

# Test 3: TypeScript type checking
run_test "TypeScript Type Check" "npm run type-check"

# Test 4: ESLint linting
run_test "ESLint Linting" "npm run lint"

# Test 5: Security audit
run_test "Security Audit" "npm audit --audit-level=high"

# Test 6: Build process
run_test "Build Process" "npm run build"

# Test 7: Playwright check
run_test "Playwright Check" "npx playwright --version"

# Test 8: Test scripts availability
run_test "Test Scripts" "npm run test:smoke"

# Test 9: Automation scripts
run_test "Automation Scripts" "node automation/repo-knowledge-graph.cjs"

# Test 10: Workflow file validation
run_test "Workflow Files" "ls -la .github/workflows/ | grep -c '\.yml$'"

echo "Test Results Summary"
echo "==================="
echo "Total Tests: ${TOTAL_TESTS}"
echo "Passed: ${PASSED_TESTS}"
echo "Failed: ${FAILED_TESTS}"

if [ $FAILED_TESTS -eq 0 ]; then
    echo ""
    echo "🎉 All tests passed! The GitHub Actions workflows should work correctly."
    echo ""
    echo "Next steps:"
    echo "1. Set up a GitHub token (GH_TOKEN or GITHUB_TOKEN)"
    echo "2. Use the workflow trigger script: node scripts/trigger-workflows.cjs"
    echo "3. Or trigger workflows manually through GitHub UI"
else
    echo ""
    echo "⚠️  Some tests failed. Please fix the issues before triggering GitHub Actions workflows."
fi

echo ""
echo "Available Workflows:"
echo "==================="
node scripts/trigger-workflows.cjs --list | grep -o '"[^"]*\.yml"' | head -20

exit $FAILED_TESTS