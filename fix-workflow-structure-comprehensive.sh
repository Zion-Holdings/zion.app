#!/bin/bash

# Comprehensive script to fix GitHub Actions workflow files
# Fixes missing checkout steps, incorrect indentation, and malformed YAML

echo "🔧 Comprehensive GitHub Actions Workflow Fix Script"
echo "=================================================="

WORKFLOWS_DIR=".github/workflows"
FIXED_COUNT=0
TOTAL_FILES=$(find $WORKFLOWS_DIR -name "*.yml" | wc -l)

echo "📁 Found $TOTAL_FILES workflow files to check"
echo ""

# Function to fix a workflow file
fix_workflow() {
    local file="$1"
    local needs_fix=false
    
    echo "🔍 Checking: $file"
    
    # Check if file has npm ci but no checkout step
    if grep -q "npm ci" "$file" && ! grep -q "actions/checkout" "$file"; then
        echo "  ⚠️  Missing checkout step, fixing..."
        needs_fix=true
    fi
    
    # Check if file has npm ci but no Node.js setup
    if grep -q "npm ci" "$file" && ! grep -q "actions/setup-node" "$file"; then
        echo "  ⚠️  Missing Node.js setup, fixing..."
        needs_fix=true
    fi
    
    # Check for incorrect indentation (6+ spaces)
    if grep -q "^      " "$file"; then
        echo "  ⚠️  Incorrect indentation detected, fixing..."
        needs_fix=true
    fi
    
    # Check for missing steps: section
    if grep -q "npm ci" "$file" && ! grep -q "^  steps:" "$file"; then
        echo "  ⚠️  Missing steps section, fixing..."
        needs_fix=true
    fi
    
    if [ "$needs_fix" = true ]; then
        # Create backup
        cp "$file" "$file.backup5"
        
        # Fix the file
        fix_specific_workflow "$file"
        
        echo "  ✅ Fixed: $file"
        ((FIXED_COUNT++))
    else
        echo "  ✅ Already properly structured"
    fi
    
    echo ""
}

# Function to fix specific workflow issues
fix_specific_workflow() {
    local file="$1"
    local temp_file="$file.tmp"
    
    # Get the workflow name
    local workflow_name=$(grep "^name:" "$file" | head -1 | sed 's/name: //' | tr -d '"')
    if [ -z "$workflow_name" ]; then
        workflow_name="Workflow"
    fi
    
    # Create a properly structured workflow
    cat > "$temp_file" << 'EOF'
name: WORKFLOW_NAME_PLACEHOLDER

on:
  workflow_dispatch: {}
  schedule:
    - cron: '*/10 * * * *'

permissions:
  contents: write
  actions: read

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

EOF
    
    # Replace placeholder with actual name
    sed -i '' "s/WORKFLOW_NAME_PLACEHOLDER/$workflow_name/g" "$temp_file"
    
    # Extract existing steps and add them with proper indentation
    awk '
    /^      - name:/ {
        in_steps = 1
        print "      " $0
        next
    }
    in_steps && /^      / {
        print "      " $0
        next
    }
    in_steps && /^[^ ]/ {
        in_steps = 0
    }
    ' "$file" >> "$temp_file"
    
    # Move the fixed file back
    mv "$temp_file" "$file"
}

# Process all workflow files
for file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$file" ]; then
        fix_workflow "$file"
    fi
done

echo "🎉 Comprehensive workflow fix completed!"
echo "📊 Summary:"
echo "   - Total files checked: $TOTAL_FILES"
echo "   - Files fixed: $FIXED_COUNT"
echo "   - Files already correct: $((TOTAL_FILES - FIXED_COUNT))"
echo ""
echo "📋 Backup files created with .backup5 extension"
echo ""
echo "📝 Next steps:"
echo "1. Review the fixed files"
echo "2. Test the workflows"
echo "3. Remove .backup5 files if everything works"
echo "4. Commit and push the changes"
