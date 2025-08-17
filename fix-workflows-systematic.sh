#!/bin/bash

# Script to systematically fix GitHub Actions workflows instead of deleting them
# This approach preserves all workflows while fixing common issues

echo "🔧 Systematic Workflow Fixer"
echo "============================"
echo "This script fixes common workflow issues instead of deleting workflows"
echo ""

WORKFLOWS_DIR=".github/workflows"
FIXED_COUNT=0
TOTAL_FILES=0

# Function to fix common workflow issues
fix_workflow() {
    local file="$1"
    local original_content=""
    local fixed_content=""
    local needs_fix=false
    
    echo "🔍 Analyzing: $file"
    
    # Read original content
    if [ -f "$file" ]; then
        original_content=$(cat "$file")
        ((TOTAL_FILES++))
    else
        echo "  ❌ File not found, skipping"
        return
    fi
    
    # Check for common issues and fix them
    fixed_content="$original_content"
    
    # Fix 1: Missing or malformed 'on:' section
    if ! echo "$original_content" | grep -q "^on:"; then
        echo "  🔧 Fixing missing 'on:' section"
        # Add basic triggers if missing
        if echo "$original_content" | grep -q "workflow_dispatch"; then
            # If it has workflow_dispatch, it's probably a manual workflow
            fixed_content=$(echo "$fixed_content" | sed '1,/^jobs:/{/^jobs:/i\
on:\
  workflow_dispatch:\
  schedule:\
    - cron: '\''0 2 * * *'\'' # Daily at 2 AM
}')
        else
            # Add basic triggers
            fixed_content=$(echo "$fixed_content" | sed '1,/^jobs:/{/^jobs:/i\
on:\
  workflow_dispatch:\
  schedule:\
    - cron: '\''0 2 * * *'\'' # Daily at 2 AM
}')
        fi
        needs_fix=true
    fi
    
    # Fix 2: Missing permissions section
    if ! echo "$original_content" | grep -q "^permissions:"; then
        echo "  🔧 Adding permissions section"
        fixed_content=$(echo "$fixed_content" | sed '/^jobs:/i\
permissions:\
  contents: read\
  actions: read
')
        needs_fix=true
    fi
    
    # Fix 3: Missing concurrency section
    if ! echo "$original_content" | grep -q "^concurrency:"; then
        echo "  🔧 Adding concurrency section"
        fixed_content=$(echo "$fixed_content" | sed '/^jobs:/i\
concurrency:\
  group: "workflow-${{ github.ref }}"\
  cancel-in-progress: false
')
        needs_fix=true
    fi
    
    # Fix 4: Missing timeout-minutes
    if ! echo "$original_content" | grep -q "timeout-minutes:"; then
        echo "  🔧 Adding timeout-minutes"
        fixed_content=$(echo "$fixed_content" | sed 's/\(runs-on:.*\)/\1\n    timeout-minutes: 20/')
        needs_fix=true
    fi
    
    # Fix 5: Missing step names
    if echo "$original_content" | grep -q "^- uses:" && ! echo "$original_content" | grep -q "^- name:"; then
        echo "  🔧 Adding step names"
        fixed_content=$(echo "$fixed_content" | sed 's/^- uses:/- name: Step\n        uses:/')
        needs_fix=true
    fi
    
    # Apply fixes if needed
    if [ "$needs_fix" = true ]; then
        echo "$fixed_content" > "$file"
        echo "  ✅ Fixed workflow"
        ((FIXED_COUNT++))
    else
        echo "  ✅ Workflow is already properly formatted"
    fi
    
    echo ""
}

# Function to fix specific workflow types
fix_specific_workflows() {
    echo "🎯 Fixing specific workflow types..."
    echo ""
    
    # Fix CI/CD workflows
    for file in $WORKFLOWS_DIR/ci*.yml $WORKFLOWS_DIR/test*.yml $WORKFLOWS_DIR/deploy*.yml; do
        if [ -f "$file" ]; then
            fix_workflow "$file"
        fi
    done
    
    # Fix maintenance workflows
    for file in $WORKFLOWS_DIR/maintenance*.yml $WORKFLOWS_DIR/cleanup*.yml; do
        if [ -f "$file" ]; then
            fix_workflow "$file"
        fi
    done
    
    # Fix security workflows
    for file in $WORKFLOWS_DIR/security*.yml $WORKFLOWS_DIR/audit*.yml; do
        if [ -f "$file" ]; then
            fix_workflow "$file"
        fi
    done
    
    # Fix automation workflows
    for file in $WORKFLOWS_DIR/auto*.yml $WORKFLOWS_DIR/continuous*.yml; do
        if [ -f "$file" ]; then
            fix_workflow "$file"
        fi
    done
}

# Main execution
echo "📁 Found $(ls $WORKFLOWS_DIR/*.yml | wc -l) workflow files"
echo ""

# Fix specific workflow types first
fix_specific_workflows

# Fix remaining workflows
echo "🔧 Fixing remaining workflows..."
for file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$file" ]; then
        # Skip already processed files
        if [[ "$file" != *"ci"* ]] && [[ "$file" != *"test"* ]] && [[ "$file" != *"deploy"* ]] && \
           [[ "$file" != *"maintenance"* ]] && [[ "$file" != *"cleanup"* ]] && [[ "$file" != *"security"* ]] && \
           [[ "$file" != *"audit"* ]] && [[ "$file" != *"auto"* ]] && [[ "$file" != *"continuous"* ]]; then
            fix_workflow "$file"
        fi
    fi
done

echo "🎉 Workflow fixing completed!"
echo "📊 Summary:"
echo "   - Total files processed: $TOTAL_FILES"
echo "   - Workflows fixed: $FIXED_COUNT"
echo "   - Workflows already correct: $((TOTAL_FILES - FIXED_COUNT))"
echo ""
echo "💡 Next steps:"
echo "   1. Run validation script to check results"
echo "   2. Test workflows manually if needed"
echo "   3. Review and customize specific workflows"
echo "   4. Commit changes and test in CI"
