#!/bin/bash

set -euo pipefail

echo "🧪 Local Workflow Testing Script"
echo "================================="
echo "This script tests workflows locally by validating syntax and structure"
echo ""

WORKFLOWS_DIR=".github/workflows"
TOTAL_WORKFLOWS=0
VALID_WORKFLOWS=0
INVALID_WORKFLOWS=0
WARNING_WORKFLOWS=0

# Function to test workflow syntax
test_workflow_syntax() {
    local workflow_file="$1"
    local workflow_name=$(basename "$workflow_file" .yml)
    
    echo "🔍 Testing: $workflow_name"
    
    # Check if file exists and is readable
    if [ ! -f "$workflow_file" ] || [ ! -r "$workflow_file" ]; then
        echo "   ❌ File not found or not readable"
        ((INVALID_WORKFLOWS++))
        return 1
    fi
    
    # Check file size
    local file_size=$(wc -c < "$workflow_file")
    if [ "$file_size" -lt 100 ]; then
        echo "   ⚠️  File is very small (${file_size} bytes) - may be incomplete"
        ((WARNING_WORKFLOWS++))
    fi
    
    # Validate YAML syntax using Python
    if command -v python3 >/dev/null 2>&1; then
        if python3 -c "import yaml; yaml.safe_load(open('$workflow_file', 'r'))" 2>/dev/null; then
            echo "   ✅ YAML syntax is valid"
        else
            echo "   ❌ YAML syntax is invalid"
            ((INVALID_WORKFLOWS++))
            return 1
        fi
    else
        echo "   ⚠️  Python3 not available, skipping YAML validation"
    fi
    
    # Check for required sections
    local has_on_section=false
    local has_jobs_section=false
    local has_workflow_dispatch=false
    
    while IFS= read -r line; do
        if [[ "$line" =~ ^[[:space:]]*on: ]]; then
            has_on_section=true
        fi
        if [[ "$line" =~ ^[[:space:]]*jobs: ]]; then
            has_jobs_section=true
        fi
        if [[ "$line" =~ workflow_dispatch ]]; then
            has_workflow_dispatch=true
        fi
    done < "$workflow_file"
    
    # Report section status
    if [ "$has_on_section" = true ]; then
        echo "   ✅ Has 'on' section"
    else
        echo "   ❌ Missing 'on' section"
        ((INVALID_WORKFLOWS++))
        return 1
    fi
    
    if [ "$has_jobs_section" = true ]; then
        echo "   ✅ Has 'jobs' section"
    else
        echo "   ❌ Missing 'jobs' section"
        ((INVALID_WORKFLOWS++))
        return 1
    fi
    
    if [ "$has_workflow_dispatch" = true ]; then
        echo "   ✅ Has workflow_dispatch (manually triggerable)"
    else
        echo "   ⚠️  No workflow_dispatch (not manually triggerable)"
        ((WARNING_WORKFLOWS++))
    fi
    
    # Check for common issues
    local issues_found=0
    
    # Check for missing step names
    if grep -q "^- uses:" "$workflow_file" && ! grep -q "^- name:" "$workflow_file"; then
        echo "   ⚠️  Has steps without names"
        ((WARNING_WORKFLOWS++))
        ((issues_found++))
    fi
    
    # Check for missing permissions
    if ! grep -q "^permissions:" "$workflow_file"; then
        echo "   ⚠️  Missing permissions section"
        ((WARNING_WORKFLOWS++))
        ((issues_found++))
    fi
    
    # Check for missing timeout
    if ! grep -q "timeout-minutes:" "$workflow_file"; then
        echo "   ⚠️  Missing timeout-minutes"
        ((WARNING_WORKFLOWS++))
        ((issues_found++))
    fi
    
    # Check for missing concurrency
    if ! grep -q "^concurrency:" "$workflow_file"; then
        echo "   ⚠️  Missing concurrency section"
        ((WARNING_WORKFLOWS++))
        ((issues_found++))
    fi
    
    if [ $issues_found -eq 0 ]; then
        echo "   ✅ No common issues found"
    fi
    
    echo "   ✅ Workflow passed all tests"
    ((VALID_WORKFLOWS++))
    return 0
}

# Function to test specific workflow types
test_workflow_type() {
    local pattern="$1"
    local description="$2"
    
    echo ""
    echo "🎯 Testing $description workflows..."
    echo "----------------------------------------"
    
    for workflow_file in $WORKFLOWS_DIR/$pattern; do
        if [ -f "$workflow_file" ]; then
            ((TOTAL_WORKFLOWS++))
            test_workflow_syntax "$workflow_file"
            echo ""
        fi
    done
}

# Main execution
echo "📁 Found $(ls $WORKFLOWS_DIR/*.yml 2>/dev/null | wc -l) workflow files"
echo ""

# Test specific workflow types first
test_workflow_type "ci*.yml" "CI/CD"
test_workflow_type "test*.yml" "Testing"
test_workflow_type "deploy*.yml" "Deployment"
test_workflow_type "security*.yml" "Security"
test_workflow_type "auto*.yml" "Automation"
test_workflow_type "workflow*.yml" "Workflow Management"

# Test remaining workflows
echo "🔍 Testing remaining workflows..."
echo "----------------------------------------"
for workflow_file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$workflow_file" ]; then
        # Skip already processed files
        if [[ "$workflow_file" != *"ci"* ]] && [[ "$workflow_file" != *"test"* ]] && \
           [[ "$workflow_file" != *"deploy"* ]] && [[ "$workflow_file" != *"security"* ]] && \
           [[ "$workflow_file" != *"auto"* ]] && [[ "$workflow_file" != *"workflow"* ]]; then
            ((TOTAL_WORKFLOWS++))
            test_workflow_syntax "$workflow_file"
            echo ""
        fi
    fi
done

# Summary
echo "=========================================="
echo "🎯 LOCAL WORKFLOW TESTING SUMMARY"
echo "=========================================="
echo "📊 Total workflows tested: $TOTAL_WORKFLOWS"
echo "✅ Valid workflows: $VALID_WORKFLOWS"
echo "❌ Invalid workflows: $INVALID_WORKFLOWS"
echo "⚠️  Workflows with warnings: $WARNING_WORKFLOWS"
echo ""

# Calculate success rate
if [ $TOTAL_WORKFLOWS -gt 0 ]; then
    local success_rate=$((VALID_WORKFLOWS * 100 / TOTAL_WORKFLOWS))
    echo "📈 Success rate: ${success_rate}%"
    
    if [ $success_rate -ge 90 ]; then
        echo "🎉 Excellent! Most workflows are valid"
    elif [ $success_rate -ge 75 ]; then
        echo "👍 Good! Most workflows are valid with some warnings"
    elif [ $success_rate -ge 50 ]; then
        echo "⚠️  Fair! Many workflows have issues that need attention"
    else
        echo "🚨 Poor! Many workflows have critical issues"
    fi
fi

echo ""
echo "💡 Next steps:"
if [ $INVALID_WORKFLOWS -gt 0 ]; then
    echo "   1. Fix the $INVALID_WORKFLOWS invalid workflows"
fi
if [ $WARNING_WORKFLOWS -gt 0 ]; then
    echo "   2. Review the $WARNING_WORKFLOWS workflows with warnings"
fi
echo "   3. Run this test again after fixes"
echo "   4. Consider testing workflows in GitHub Actions"

# Exit with error if any workflows are invalid
if [ $INVALID_WORKFLOWS -gt 0 ]; then
    echo ""
    echo "🚨 Some workflows are invalid. Please fix them before proceeding."
    exit 1
else
    echo ""
    echo "🎉 All workflows passed basic validation!"
    exit 0
fi