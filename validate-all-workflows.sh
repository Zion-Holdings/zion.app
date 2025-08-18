#!/bin/bash

echo "🔍 Validating all GitHub Actions workflows for YAML syntax errors..."

WORKFLOWS_DIR=".github/workflows"
ERROR_COUNT=0
TOTAL_WORKFLOWS=0

# Check if python3 is available
if command -v python3 >/dev/null 2>&1; then
    VALIDATOR="python3 -c \"import sys,yaml; yaml.safe_load(open(sys.argv[1],'r'))\""
elif command -v python >/dev/null 2>&1; then
    VALIDATOR="python -c \"import sys,yaml; yaml.safe_load(open(sys.argv[1],'r'))\""
else
    echo "❌ Python not found. Cannot validate YAML syntax."
    exit 1
fi

# Find all workflow files
find "$WORKFLOWS_DIR" -name "*.yml" -o -name "*.yaml" | while read -r workflow_file; do
    TOTAL_WORKFLOWS=$((TOTAL_WORKFLOWS + 1))
    
    if eval $VALIDATOR "$workflow_file" >/dev/null 2>&1; then
        echo "✅ $(basename "$workflow_file") - Valid"
    else
        echo "❌ $(basename "$workflow_file") - Invalid YAML"
        ERROR_COUNT=$((ERROR_COUNT + 1))
        
        # Try to show the error
        echo "   Error details:"
        eval $VALIDATOR "$workflow_file" 2>&1 | sed 's/^/   /'
        echo ""
    fi
done

echo ""
echo "📊 Validation Summary:"
echo "Total workflows: $TOTAL_WORKFLOWS"
echo "Errors found: $ERROR_COUNT"

if [ $ERROR_COUNT -eq 0 ]; then
    echo "🎉 All workflows have valid YAML syntax!"
    exit 0
else
    echo "⚠️  Found $ERROR_COUNT workflows with YAML syntax errors."
    exit 1
fi