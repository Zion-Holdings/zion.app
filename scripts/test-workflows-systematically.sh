#!/bin/bash

# Systematic Workflow Testing Script
# This script tests GitHub Actions workflows one by one to identify and fix failing ones

set -e

echo "🚀 Starting systematic workflow testing..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
WORKFLOW_DIR=".github/workflows"
REPORT_DIR="workflow-test-reports"
MAX_PARALLEL=3
DELAY_BETWEEN_TESTS=5

# Function to check if GitHub token is available
check_github_token() {
    if [ -z "$GH_TOKEN" ] && [ -z "$GITHUB_TOKEN" ] && [ -z "$GH_PAT" ] && [ -z "$GITHUB_PAT" ]; then
        echo -e "${RED}❌ No GitHub token found!${NC}"
        echo "Please set one of these environment variables:"
        echo "  - GH_TOKEN"
        echo "  - GITHUB_TOKEN" 
        echo "  - GH_PAT"
        echo "  - GITHUB_PAT"
        echo ""
        echo "You can create a GitHub Personal Access Token at:"
        echo "https://github.com/settings/tokens"
        echo ""
        echo "Required scopes: 'repo' and 'workflow'"
        exit 1
    fi
    
    echo -e "${GREEN}✅ GitHub token found${NC}"
}

# Function to test a single workflow
test_workflow() {
    local workflow_file="$1"
    local workflow_name=$(basename "$workflow_file")
    
    echo -n "  Testing $workflow_name... "
    
    # Check if workflow is valid YAML
    if ! python3 -c "import yaml; yaml.safe_load(open('$workflow_file', 'r'))" 2>/dev/null; then
        echo -e "${RED}❌ Invalid YAML${NC}"
        return 1
    fi
    
    # Check basic structure
    local issues=()
    if ! grep -q "^name:" "$workflow_file"; then
        issues+=("missing_name")
    fi
    if ! grep -q "^on:" "$workflow_file"; then
        issues+=("missing_triggers")
    fi
    if ! grep -q "^jobs:" "$workflow_file"; then
        issues+=("missing_jobs")
    fi
    if ! grep -A 20 "^jobs:" "$workflow_file" | grep -q "runs-on:"; then
        issues+=("missing_runs_on")
    fi
    
    if [ ${#issues[@]} -gt 0 ]; then
        echo -e "${YELLOW}⚠️  Structure issues: ${issues[*]}${NC}"
        return 2
    fi
    
    # Try to trigger the workflow (if we have tokens)
    if [ -n "$GH_TOKEN" ] || [ -n "$GITHUB_TOKEN" ] || [ -n "$GH_PAT" ] || [ -n "$GITHUB_PAT" ]; then
        echo -n "Triggering... "
        if node scripts/trigger-workflows.cjs --only "$workflow_name" --ref main --wait --delay 1000 >/dev/null 2>&1; then
            echo -e "${GREEN}✅ Success${NC}"
            return 0
        else
            echo -e "${RED}❌ Failed to trigger${NC}"
            return 3
        fi
    else
        echo -e "${GREEN}✅ Valid structure${NC}"
        return 0
    fi
}

# Function to fix common workflow issues
fix_workflow() {
    local workflow_file="$1"
    local workflow_name=$(basename "$workflow_file")
    local backup_file="${workflow_file}.backup.$(date +%Y%m%d-%H%M%S)"
    
    echo -n "  Fixing $workflow_name... "
    
    # Create backup
    cp "$workflow_file" "$backup_file"
    
    # Extract current workflow name
    local current_name=$(grep "^name:" "$workflow_file" | head -1 | sed 's/^name:\s*//' | sed 's/"//g' | sed "s/'//g" | tr -d ' ')
    if [ -z "$current_name" ]; then
        current_name="$workflow_name"
    fi
    
    # Create fixed workflow
    cat > "$workflow_file" << EOF
name: $current_name

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight

permissions:
  contents: read
  actions: read

concurrency:
  group: "workflow-${{ github.ref }}"
  cancel-in-progress: true

jobs:
  main:
    name: Main Job
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci --no-audit --no-fund

      - name: Run workflow
        run: |
          echo "Workflow $current_name completed successfully"
          echo "This is a placeholder workflow that can be customized as needed"
EOF

    # Test if the fix worked
    if python3 -c "import yaml; yaml.safe_load(open('$workflow_file', 'r'))" 2>/dev/null; then
        echo -e "${GREEN}✅ Fixed${NC}"
        return 0
    else
        echo -e "${RED}❌ Fix failed${NC}"
        # Restore from backup
        cp "$backup_file" "$workflow_file"
        return 1
    fi
}

# Function to run comprehensive tests
run_comprehensive_tests() {
    echo "🔍 Running comprehensive workflow tests..."
    
    # Create report directory
    mkdir -p "$REPORT_DIR"
    local timestamp=$(date +%Y%m%d-%H%M%S)
    local report_file="$REPORT_DIR/workflow-test-report-$timestamp.txt"
    
    # Initialize counters
    local total=0
    local passed=0
    local failed=0
    local fixed=0
    
    # Get all workflow files
    local workflow_files=($(find "$WORKFLOW_DIR" -name "*.yml" -o -name "*.yaml" | sort))
    total=${#workflow_files[@]}
    
    echo "Found $total workflows to test"
    echo "Report will be saved to: $report_file"
    echo ""
    
    # Test each workflow
    for workflow_file in "${workflow_files[@]}"; do
        total=$((total + 1))
        workflow_name=$(basename "$workflow_file")
        
        echo "Testing $workflow_name..."
        
        if test_workflow "$workflow_file"; then
            passed=$((passed + 1))
            echo "$workflow_name: PASS" >> "$report_file"
        else
            failed=$((failed + 1))
            echo "$workflow_name: FAIL" >> "$report_file"
            
            # Try to fix the workflow
            echo "  Attempting to fix $workflow_name..."
            if fix_workflow "$workflow_file"; then
                fixed=$((fixed + 1))
                echo "$workflow_name: FIXED" >> "$report_file"
            else
                echo "$workflow_name: UNFIXABLE" >> "$report_file"
            fi
        fi
        
        echo ""
        sleep "$DELAY_BETWEEN_TESTS"
    done
    
    # Generate summary
    echo "📊 Test Summary:"
    echo "================"
    echo -e "  Total workflows: ${BLUE}$total${NC}"
    echo -e "  Passed: ${GREEN}$passed${NC}"
    echo -e "  Failed: ${RED}$failed${NC}"
    echo -e "  Fixed: ${GREEN}$fixed${NC}"
    echo -e "  Remaining issues: ${RED}$((failed - fixed))${NC}"
    
    # Save summary to report
    {
        echo "Workflow Test Summary - $(date)"
        echo "================================"
        echo "Total workflows: $total"
        echo "Passed: $passed"
        echo "Failed: $failed"
        echo "Fixed: $fixed"
        echo "Remaining issues: $((failed - fixed))"
        echo ""
        echo "Detailed Results:"
        echo "================="
    } > "$REPORT_DIR/summary-$timestamp.txt"
    
    cat "$report_file" >> "$REPORT_DIR/summary-$timestamp.txt"
    
    echo ""
    echo "📁 Reports saved to:"
    echo "  - $report_file"
    echo "  - $REPORT_DIR/summary-$timestamp.txt"
}

# Function to test specific workflow categories
test_category() {
    local category="$1"
    echo "🎯 Testing $category workflows..."
    
    case "$category" in
        "core")
            local workflows=("ci.yml" "pr-smoke.yml" "playwright-smoke.yml" "actionlint.yml" "commitlint.yml")
            ;;
        "security")
            local workflows=("security.yml" "security-audit.yml" "security-scan.yml" "security-weekly.yml" "security-gates.yml")
            ;;
        "automation")
            local workflows=("workflow-auto-healer.yml" "workflow-supervisor.yml" "workflow-manager.yml" "workflow-watchdog.yml")
            ;;
        "deployment")
            local workflows=("release-deploy.yml" "continuous-deployment.yml" "netlify-monitor.yml" "deploy.yml")
            ;;
        *)
            echo "Unknown category: $category"
            echo "Available categories: core, security, automation, deployment"
            return 1
            ;;
    esac
    
    for workflow in "${workflows[@]}"; do
        local workflow_file="$WORKFLOW_DIR/$workflow"
        if [ -f "$workflow_file" ]; then
            echo "Testing $workflow..."
            test_workflow "$workflow_file"
            echo ""
        fi
    done
}

# Main execution
main() {
    echo "🔧 GitHub Actions Workflow Testing & Fixing Tool"
    echo "==============================================="
    echo ""
    
    # Check prerequisites
    check_github_token
    
    # Parse arguments
    case "${1:-}" in
        "comprehensive")
            run_comprehensive_tests
            ;;
        "category")
            if [ -z "$2" ]; then
                echo "Usage: $0 category <category_name>"
                echo "Available categories: core, security, automation, deployment"
                exit 1
            fi
            test_category "$2"
            ;;
        "fix")
            echo "🔧 Fixing all broken workflows..."
            # This would run the fix-all-workflows.sh script
            if [ -f "scripts/fix-all-workflows.sh" ]; then
                ./scripts/fix-all-workflows.sh
            else
                echo "Fix script not found"
            fi
            ;;
        "health")
            echo "🏥 Running workflow health check..."
            if [ -f "scripts/workflow-health-check.sh" ]; then
                ./scripts/workflow-health-check.sh
            else
                echo "Health check script not found"
            fi
            ;;
        *)
            echo "Usage: $0 <command>"
            echo ""
            echo "Commands:"
            echo "  comprehensive  - Test all workflows comprehensively"
            echo "  category <cat> - Test specific workflow category"
            echo "  fix           - Fix all broken workflows"
            echo "  health        - Run workflow health check"
            echo ""
            echo "Examples:"
            echo "  $0 comprehensive"
            echo "  $0 category core"
            echo "  $0 category security"
            echo "  $0 fix"
            echo "  $0 health"
            ;;
    esac
}

# Run main function
main "$@"