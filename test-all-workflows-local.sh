#!/bin/bash

echo "🧪 Testing All GitHub Actions Workflow Steps Locally"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test results tracking
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Function to run a test
run_test() {
    local test_name="$1"
    local command="$2"
    local description="$3"
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    echo -e "${BLUE}${TOTAL_TESTS}. Testing: ${test_name}${NC}"
    echo "   Description: ${description}"
    echo "   Command: ${command}"
    echo ""
    
    if eval "$command"; then
        echo -e "   ${GREEN}✅ PASSED${NC}"
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo -e "   ${RED}❌ FAILED${NC}"
        FAILED_TESTS=$((FAILED_TESTS + 1))
    fi
    echo ""
}

echo "📋 Test Plan:"
echo "============="
echo "1.  Node.js and npm availability"
echo "2.  Dependencies installation"
echo "3.  TypeScript type checking"
echo "4.  ESLint linting"
echo "5.  Security audit"
echo "6.  Build process"
echo "7.  Playwright installation (simulated)"
echo "8.  Test scripts availability"
echo "9.  Automation scripts"
echo "10. Workflow file validation"
echo ""

# Test 1: Node.js and npm availability
run_test "Node.js Version" "node --version" "Check if Node.js is available and working"
run_test "npm Version" "npm --version" "Check if npm is available and working"

# Test 2: Dependencies installation
run_test "Dependencies Install" "npm ci --no-audit --no-fund" "Install project dependencies using npm ci"

# Test 3: TypeScript type checking
run_test "TypeScript Type Check" "npm run type-check" "Run TypeScript type checking"

# Test 4: ESLint linting
run_test "ESLint Linting" "npm run lint" "Run ESLint code linting"

# Test 5: Security audit
run_test "Security Audit" "npm audit --audit-level=high" "Run npm security audit"

# Test 6: Build process
run_test "Build Process" "npm run build" "Build the Next.js application"

# Test 7: Playwright installation (simulated)
run_test "Playwright Check" "npx playwright --version" "Check if Playwright is available"

# Test 8: Test scripts availability
run_test "Test Scripts" "npm run test:smoke" "Check if smoke tests are available"

# Test 9: Automation scripts
run_test "Automation Scripts" "node automation/repo-knowledge-graph.cjs" "Test automation script execution"

# Test 10: Workflow file validation
run_test "Workflow Files" "ls -la .github/workflows/ | grep -c '\.yml$'" "Count available workflow files"

# Test 11: Package.json scripts validation
run_test "Package Scripts" "npm run" "List all available npm scripts"

# Test 12: Git status
run_test "Git Status" "git status --porcelain" "Check git repository status"

echo "📊 Test Results Summary"
echo "======================"
echo -e "Total Tests: ${TOTAL_TESTS}"
echo -e "Passed: ${GREEN}${PASSED_TESTS}${NC}"
echo -e "Failed: ${RED}${FAILED_TESTS}${NC}"

if [ $FAILED_TESTS -eq 0 ]; then
    echo ""
    echo -e "${GREEN}🎉 All tests passed! The GitHub Actions workflows should work correctly.${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Set up a GitHub token (GH_TOKEN or GITHUB_TOKEN)"
    echo "2. Use the workflow trigger script: node scripts/trigger-workflows.cjs"
    echo "3. Or trigger workflows manually through GitHub UI"
    echo "4. Monitor workflow execution in GitHub Actions tab"
else
    echo ""
    echo -e "${RED}⚠️  Some tests failed. Please fix the issues before triggering GitHub Actions workflows.${NC}"
    echo ""
    echo "Failed tests need to be addressed:"
    echo "- Check error messages above"
    echo "- Fix any dependency or configuration issues"
    echo "- Re-run this test script until all tests pass"
fi

echo ""
echo "📁 Available Workflows:"
echo "======================="
node scripts/trigger-workflows.cjs --list | jq -r '.workflows[]' | head -20
echo "... and $(($(node scripts/trigger-workflows.cjs --list | jq '.workflows | length') - 20)) more workflows"

exit $FAILED_TESTS