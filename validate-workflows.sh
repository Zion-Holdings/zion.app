#!/bin/bash

# Script to validate GitHub Actions workflow files
# Checks for proper structure, required sections, and YAML syntax

echo "🔍 GitHub Actions Workflow Validation Script"
echo "==========================================="

WORKFLOWS_DIR=".github/workflows"
TOTAL_FILES=0
VALID_FILES=0
INVALID_FILES=0

echo "📁 Validating workflow files in $WORKFLOWS_DIR"
echo ""

# Function to validate a workflow file
validate_workflow() {
    local file="$1"
    local is_valid=true
    local issues=""
    
    ((TOTAL_FILES++))
    
    echo "🔍 Checking: $file"
    
    # Check for required sections
    if ! grep -q "^permissions:" "$file"; then
        is_valid=false
        issues="$issues Missing permissions section; "
    fi
    
    if ! grep -q "^    runs-on:" "$file"; then
        is_valid=false
        issues="$issues Missing runs-on; "
    fi
    
    if ! grep -q "^    steps:" "$file"; then
        is_valid=false
        issues="$issues Missing steps section; "
    fi
    
    if ! grep -q "^    timeout-minutes:" "$file"; then
        is_valid=false
        issues="$issues Missing timeout-minutes; "
    fi
    
    # Check for proper indentation (no more than 6 spaces)
    if grep -q "^      " "$file"; then
        is_valid=false
        issues="$issues Incorrect indentation (6+ spaces); "
    fi
    
    # Check for cron schedule placeholder
    if grep -q "CRON_SCHEDULE_PLACEHOLDER" "$file"; then
        is_valid=false
        issues="$issues Cron schedule placeholder not replaced; "
    fi
    
    # Check YAML syntax (basic check)
    if ! grep -q "^- name:" "$file"; then
        is_valid=false
        issues="$issues No step definitions found; "
    fi
    
    if [ "$is_valid" = true ]; then
        echo "  ✅ Valid workflow"
        ((VALID_FILES++))
    else
        echo "  ❌ Invalid workflow: $issues"
        ((INVALID_FILES++))
    fi
    
    echo ""
}

# Process all workflow files
for file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$file" ]; then
        validate_workflow "$file"
    fi
done

echo "🎉 Workflow validation completed!"
echo "📊 Summary:"
echo "   - Total files checked: $TOTAL_FILES"
echo "   - Valid workflows: $VALID_FILES"
echo "   - Invalid workflows: $INVALID_FILES"
echo ""

if [ $INVALID_FILES -eq 0 ]; then
    echo "🎉 All workflows are valid!"
    echo "✅ Ready for commit and push"
else
    echo "⚠️  Some workflows have issues that need attention"
    echo "🔧 Run the fix script again if needed"
fi