#!/bin/bash

# GitHub Actions Workflow YAML Validator
# This script validates the YAML syntax of all workflow files

echo "🔍 Validating GitHub Actions Workflows..."
echo "========================================"

# Find all workflow files
WORKFLOW_FILES=$(find .github/workflows -name "*.yml" -o -name "*.yaml" 2>/dev/null)

if [ -z "$WORKFLOW_FILES" ]; then
    echo "❌ No workflow files found in .github/workflows/"
    exit 1
fi

# Check if python3 and pyyaml are available
if command -v python3 &> /dev/null; then
    echo "✅ Python3 found, using pyyaml for validation"
    VALIDATOR="python3"
elif command -v python &> /dev/null; then
    echo "✅ Python found, using pyyaml for validation"
    VALIDATOR="python"
else
    echo "⚠️  Python not found, using basic YAML validation"
    VALIDATOR="basic"
fi

# Function to validate YAML with Python
validate_with_python() {
    local file="$1"
    python3 -c "
import yaml
import sys
try:
    with open('$file', 'r') as f:
        yaml.safe_load(f)
    print('✅ Valid YAML')
except yaml.YAMLError as e:
    print(f'❌ Invalid YAML: {e}')
    sys.exit(1)
except Exception as e:
    print(f'❌ Error reading file: {e}')
    sys.exit(1)
"
}

# Function to validate YAML with basic checks
validate_basic() {
    local file="$1"
    
    # Check for basic YAML structure
    if grep -q "^name:" "$file" && \
       grep -q "^on:" "$file" && \
       grep -q "^jobs:" "$file" && \
       grep -q "runs-on:" "$file"; then
        echo "✅ Basic structure looks good"
    else
        echo "❌ Missing required YAML structure elements"
        return 1
    fi
    
    # Check for common syntax issues
    if grep -q ":$[[:space:]]*$" "$file"; then
        echo "⚠️  Found empty values (key: with no value)"
    fi
    
    if grep -q "^[[:space:]]*-[[:space:]]*name:" "$file" && ! grep -q "^[[:space:]]*-[[:space:]]*uses:" "$file" && ! grep -q "^[[:space:]]*-[[:space:]]*run:" "$file"; then
        echo "⚠️  Found step with name but no action (uses: or run:)"
    fi
}

# Validate each workflow file
ERROR_COUNT=0
TOTAL_FILES=0

for file in $WORKFLOW_FILES; do
    echo ""
    echo "📁 Validating: $file"
    echo "----------------------------------------"
    
    TOTAL_FILES=$((TOTAL_FILES + 1))
    
    if [ "$VALIDATOR" = "python3" ] || [ "$VALIDATOR" = "python" ]; then
        if validate_with_python "$file"; then
            echo "✅ $file is valid"
        else
            echo "❌ $file has YAML syntax errors"
            ERROR_COUNT=$((ERROR_COUNT + 1))
        fi
    else
        if validate_basic "$file"; then
            echo "✅ $file basic validation passed"
        else
            echo "❌ $file basic validation failed"
            ERROR_COUNT=$((ERROR_COUNT + 1))
        fi
    fi
done

echo ""
echo "========================================"
echo "📊 Validation Summary:"
echo "Total files: $TOTAL_FILES"
echo "Errors found: $ERROR_COUNT"
echo "Success rate: $(( (TOTAL_FILES - ERROR_COUNT) * 100 / TOTAL_FILES ))%"

if [ $ERROR_COUNT -eq 0 ]; then
    echo "🎉 All workflows are valid!"
    exit 0
else
    echo "❌ Found $ERROR_COUNT workflow(s) with errors"
    exit 1
fi