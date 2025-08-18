#!/bin/bash

# Local Workflow Testing Script
# This script tests GitHub Actions workflows locally without requiring GitHub tokens

set -e

echo "🔍 Starting local workflow testing..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
WORKFLOW_DIR=".github/workflows"
REPORT_DIR="workflow-local-reports"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

# Function to check if a workflow is valid YAML
check_yaml_validity() {
    local file="$1"
    if python3 -c "import yaml; yaml.safe_load(open('$file', 'r'))" 2>/dev/null; then
        return 0
    else
        return 1
    fi
}

# Function to check workflow structure
check_workflow_structure() {
    local file="$1"
    local issues=()
    
    # Check for required sections
    if ! grep -q "^name:" "$file"; then
        issues+=("missing_name")
    fi
    
    if ! grep -q "^on:" "$file"; then
        issues+=("missing_triggers")
    fi
    
    if ! grep -q "^jobs:" "$file"; then
        issues+=("missing_jobs")
    fi
    
    # Check for runs-on in jobs (more flexible search)
    if ! grep -A 20 "^jobs:" "$file" | grep -q "runs-on:"; then
        issues+=("missing_runs_on")
    fi
    
    # Check for permissions (optional - only flag if write operations are used)
    if grep -q "contents: write\|pull-requests: write\|issues: write\|actions: write" "$file" && ! grep -q "^permissions:" "$file"; then
        issues+=("missing_permissions_for_write")
    fi
    
    # Return issues as a single string for easier handling
    printf '%s' "${issues[*]}"
}

# Function to check workflow triggers
check_workflow_triggers() {
    local file="$1"
    local triggers=()
    
    if grep -q "workflow_dispatch:" "$file"; then
        triggers+=("manual")
    fi
    if grep -q "schedule:" "$file"; then
        triggers+=("scheduled")
    fi
    if grep -q "push:" "$file"; then
        triggers+=("push")
    fi
    if grep -q "pull_request:" "$file"; then
        triggers+=("pull_request")
    fi
    
    if [ ${#triggers[@]} -eq 0 ]; then
        echo "no_triggers"
    else
        echo "${triggers[*]}"
    fi
}

# Function to check for common issues
check_common_issues() {
    local file="$1"
    local issues=()
    
    # Check for deprecated actions
    if grep -q "actions/checkout@v3\|actions/setup-node@v3\|actions/upload-artifact@v3" "$file"; then
        issues+=("deprecated_actions")
    fi
    
    # Check for missing timeout
    if ! grep -q "timeout-minutes:" "$file"; then
        issues+=("no_timeout")
    fi
    
    # Check for missing concurrency control
    if ! grep -q "concurrency:" "$file"; then
        issues+=("no_concurrency_control")
    fi
    
    # Check for hardcoded refs
    if grep -q "refs/heads/main\|refs/heads/master" "$file"; then
        issues+=("hardcoded_refs")
    fi
    
    echo "${issues[@]}"
}

# Function to test a single workflow
test_workflow() {
    local workflow_file="$1"
    local workflow_name=$(basename "$workflow_file")
    
    echo -n "  Testing $workflow_name... "
    
    # Check YAML validity
    if ! check_yaml_validity "$workflow_file"; then
        echo -e "${RED}❌ Invalid YAML${NC}"
        return 1
    fi
    
    # Check structure
    local structure_issues=$(check_workflow_structure "$workflow_file")
    local trigger_status=$(check_workflow_triggers "$workflow_file")
    local common_issues=$(check_common_issues "$workflow_file")
    
    # Determine overall status
    local has_critical_issues=false
    local has_warnings=false
    
    if [ -n "$structure_issues" ]; then
        has_critical_issues=true
    fi
    
    if [ "$trigger_status" = "no_triggers" ] || [ -n "$common_issues" ]; then
        has_warnings=true
    fi
    
    # Report status
    if [ "$has_critical_issues" = true ]; then
        echo -e "${RED}❌ Critical issues: ${structure_issues}${NC}"
        return 1
    elif [ "$has_warnings" = true ]; then
        echo -n -e "${YELLOW}⚠️  Warnings: "
        if [ "$trigger_status" = "no_triggers" ]; then
            echo -n "no_triggers "
        fi
        if [ -n "$common_issues" ]; then
            echo -n "${common_issues} "
        fi
        echo -e "${NC}"
        return 2
    else
        echo -e "${GREEN}✅ Healthy${NC}"
        return 0
    fi
}

# Function to generate detailed report
generate_report() {
    local report_file="$REPORT_DIR/workflow-local-report-$TIMESTAMP.txt"
    local summary_file="$REPORT_DIR/summary-$TIMESTAMP.txt"
    
    mkdir -p "$REPORT_DIR"
    
    # Initialize counters
    local total=0
    local healthy=0
    local warnings=0
    local critical=0
    
    # Get all workflow files
    local workflow_files=($(find "$WORKFLOW_DIR" -name "*.yml" -o -name "*.yaml" | sort))
    total=${#workflow_files[@]}
    
    echo "Found $total workflows to test"
    echo "Report will be saved to: $report_file"
    echo ""
    
    # Test each workflow and collect results
    local results=()
    for workflow_file in "${workflow_files[@]}"; do
        workflow_name=$(basename "$workflow_file")
        
        echo "Testing $workflow_name..."
        
        # Capture test output
        local test_output=$(test_workflow "$workflow_file" 2>&1)
        local exit_code=$?
        
        # Store result
        case $exit_code in
            0) 
                healthy=$((healthy + 1))
                status="HEALTHY"
                ;;
            1) 
                critical=$((critical + 1))
                status="CRITICAL"
                ;;
            2) 
                warnings=$((warnings + 1))
                status="WARNINGS"
                ;;
            *) 
                critical=$((critical + 1))
                status="UNKNOWN"
                ;;
        esac
        
        results+=("$workflow_name|$status|$test_output")
        
        echo ""
    done
    
    # Generate detailed report
    {
        echo "Workflow Local Test Report - $(date)"
        echo "====================================="
        echo ""
        echo "Summary:"
        echo "  Total workflows: $total"
        echo "  Healthy: $healthy"
        echo "  Warnings: $warnings"
        echo "  Critical issues: $critical"
        echo ""
        echo "Detailed Results:"
        echo "================="
        echo ""
    } > "$report_file"
    
    for result in "${results[@]}"; do
        IFS='|' read -r name status output <<< "$result"
        echo "## $name" >> "$report_file"
        echo "Status: $status" >> "$report_file"
        echo "Details: $output" >> "$report_file"
        echo "" >> "$report_file"
    done
    
    # Generate summary
    {
        echo "Workflow Local Test Summary - $(date)"
        echo "====================================="
        echo "Total workflows: $total"
        echo "Healthy: $healthy"
        echo "Warnings: $warnings"
        echo "Critical issues: $critical"
        echo ""
        echo "Recommendations:"
        echo "================="
        if [ $critical -gt 0 ]; then
            echo "- Fix $critical workflows with critical issues first"
        fi
        if [ $warnings -gt 0 ]; then
            echo "- Review $warnings workflows with warnings"
        fi
        if [ $healthy -eq $total ]; then
            echo "- All workflows are healthy! 🎉"
        fi
    } > "$summary_file"
    
    # Display summary
    echo "📊 Test Summary:"
    echo "================"
    echo -e "  Total workflows: ${BLUE}$total${NC}"
    echo -e "  Healthy: ${GREEN}$healthy${NC}"
    echo -e "  Warnings: ${YELLOW}$warnings${NC}"
    echo -e "  Critical issues: ${RED}$critical${NC}"
    
    echo ""
    echo "📁 Reports saved to:"
    echo "  - $report_file"
    echo "  - $summary_file"
    
    # Return appropriate exit code
    if [ $critical -gt 0 ]; then
        return 2
    elif [ $warnings -gt 0 ]; then
        return 1
    else
        return 0
    fi
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
            local workflows=("release-deploy.yml" "continuous-deployment.yml" "netlify-monitor.yml")
            ;;
        *)
            echo "Unknown category: $category"
            echo "Available categories: core, security, automation, deployment"
            return 1
            ;;
    esac
    
    echo "Testing workflows: ${workflows[*]}"
    echo ""
    
    for workflow in "${workflows[@]}"; do
        local workflow_file="$WORKFLOW_DIR/$workflow"
        if [ -f "$workflow_file" ]; then
            echo "Testing $workflow..."
            test_workflow "$workflow_file"
            echo ""
        else
            echo -e "${YELLOW}⚠️  $workflow not found${NC}"
        fi
    done
}

# Function to show workflow details
show_workflow_details() {
    local workflow_name="$1"
    local workflow_file="$WORKFLOW_DIR/$workflow_name"
    
    if [ ! -f "$workflow_file" ]; then
        echo -e "${RED}❌ Workflow $workflow_name not found${NC}"
        return 1
    fi
    
    echo "📋 Workflow Details: $workflow_name"
    echo "=================================="
    
    # Show basic info
    echo "Name: $(grep '^name:' "$workflow_file" | head -1 | sed 's/^name:\s*//' | sed 's/"//g' | sed "s/'//g" | tr -d ' ')"
    echo "Triggers: $(check_workflow_triggers "$workflow_file")"
    
    # Show structure issues
    local structure_issues=$(check_workflow_structure "$workflow_file")
    if [ ${#structure_issues[@]} -gt 0 ]; then
        echo -e "Structure issues: ${RED}${structure_issues[*]}${NC}"
    else
        echo -e "Structure: ${GREEN}✅ Good${NC}"
    fi
    
    # Show common issues
    local common_issues=$(check_common_issues "$workflow_file")
    if [ ${#common_issues[@]} -gt 0 ]; then
        echo -e "Common issues: ${YELLOW}${common_issues[*]}${NC}"
    else
        echo -e "Common issues: ${GREEN}✅ None${NC}"
    fi
    
    echo ""
    echo "Content preview:"
    echo "================"
    head -20 "$workflow_file"
    if [ $(wc -l < "$workflow_file") -gt 20 ]; then
        echo "..."
    fi
}

# Main execution
main() {
    echo "🔍 GitHub Actions Workflow Local Testing Tool"
    echo "============================================"
    echo ""
    
    # Parse arguments
    case "${1:-}" in
        "comprehensive")
            generate_report
            ;;
        "category")
            if [ -z "$2" ]; then
                echo "Usage: $0 category <category_name>"
                echo "Available categories: core, security, automation, deployment"
                exit 1
            fi
            test_category "$2"
            ;;
        "details")
            if [ -z "$2" ]; then
                echo "Usage: $0 details <workflow_name>"
                echo "Example: $0 details ci.yml"
                exit 1
            fi
            show_workflow_details "$2"
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
            echo "  details <wf>   - Show detailed info about a workflow"
            echo "  health         - Run workflow health check"
            echo ""
            echo "Examples:"
            echo "  $0 comprehensive"
            echo "  $0 category core"
            echo "  $0 category security"
            echo "  $0 details ci.yml"
            echo "  $0 health"
            ;;
    esac
}

# Run main function
main "$@"