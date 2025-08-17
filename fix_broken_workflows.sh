#!/bin/bash

# Fix broken workflows by identifying YAML issues and fixing them
# This script will check all workflows and fix common problems

set -e

WORKFLOWS_DIR=".github/workflows"
FIXED_COUNT=0
TOTAL_WORKFLOWS=0

echo "🔧 Fixing broken workflows..."

# Function to fix common workflow issues
fix_workflow() {
    local file="$1"
    local temp_file="/tmp/fixed_workflow.yml"
    
    # Check if file has basic structure issues
    if ! grep -q "^name:" "$file"; then
        echo "   ❌ Missing name field - skipping"
        return 1
    fi
    
    # Fix common issues
    sed -e 's/^  contents: write$/permissions:\n  contents: write/' \
        -e 's/^  actions: read$/  actions: read/' \
        -e 's/^  pull-requests: write$/  pull-requests: write/' \
        -e 's/^  security-events: write$/  security-events: write/' \
        "$file" > "$temp_file" 2>/dev/null || return 1
    
    # Check if the fixed version is valid YAML
    if python3 -c "import yaml; yaml.safe_load(open('$temp_file'))" 2>/dev/null; then
        mv "$temp_file" "$file"
        echo "   ✅ Fixed YAML structure"
        return 0
    else
        rm -f "$temp_file"
        echo "   ❌ Could not fix automatically"
        return 1
    fi
}

# Process each workflow file
for workflow_file in "$WORKFLOWS_DIR"/*.yml; do
    if [ -f "$workflow_file" ]; then
        filename=$(basename "$workflow_file")
        ((TOTAL_WORKFLOWS++))
        
        echo "🔍 Checking $filename..."
        
        # Basic YAML validation
        if python3 -c "import yaml; yaml.safe_load(open('$workflow_file'))" 2>/dev/null; then
            echo "   ✅ Valid YAML"
        else
            echo "   ❌ Invalid YAML - attempting to fix..."
            if fix_workflow "$workflow_file"; then
                ((FIXED_COUNT++))
            fi
        fi
    fi
done

echo ""
echo "🎯 Workflow Fix Summary:"
echo "   Total workflows checked: $TOTAL_WORKFLOWS"
echo "   Successfully fixed: $FIXED_COUNT"
echo "   Remaining issues: $((TOTAL_WORKFLOWS - FIXED_COUNT))"

# Final validation
echo ""
echo "🔍 Final validation..."

VALID_COUNT=0
INVALID_COUNT=0

for workflow_file in "$WORKFLOWS_DIR"/*.yml; do
    if [ -f "$workflow_file" ]; then
        filename=$(basename "$workflow_file")
        
        if python3 -c "import yaml; yaml.safe_load(open('$workflow_file'))" 2>/dev/null; then
            ((VALID_COUNT++))
        else
            echo "❌ $filename still has YAML issues"
            ((INVALID_COUNT++))
        fi
    fi
done

echo ""
echo "📋 Final YAML Validation Summary:"
echo "   Valid workflows: $VALID_COUNT"
echo "   Invalid workflows: $INVALID_COUNT"

if [ $INVALID_COUNT -eq 0 ]; then
    echo "🎉 All workflows are now valid!"
else
    echo "⚠️  Some workflows still need manual attention"
fi