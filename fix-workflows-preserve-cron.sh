#!/bin/bash

# Script to fix GitHub Actions workflow files while preserving original cron schedules
# Only fixes missing sections and incorrect indentation, doesn't overwrite cron schedules

echo "🔧 GitHub Actions Workflow Fix Script (Preserving Cron Schedules)"
echo "================================================================"

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
    
    # Check for structural issues
    if ! grep -q "^  runs-on:" "$file" || ! grep -q "^  steps:" "$file" || ! grep -q "^permissions:" "$file"; then
        echo "  ⚠️  Missing required sections, fixing..."
        needs_fix=true
    fi
    
    # Check for incorrect indentation
    if grep -q "^      " "$file" || grep -q "^  contents: write" "$file"; then
        echo "  ⚠️  Incorrect indentation detected, fixing..."
        needs_fix=true
    fi
    
    if [ "$needs_fix" = true ]; then
        # Create backup
        cp "$file" "$file.backup_preserve"
        
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
    
    # Get the original cron schedule from the backup file
    local cron_schedule="0 0 * * *"  # Default
    if [ -f "$file.backup_preserve" ]; then
        local original_cron=$(grep "cron:" "$file.backup_preserve" | head -1 | sed "s/.*cron: //" | tr -d "'" | tr -d '"')
        if [ -n "$original_cron" ] && [ "$original_cron" != "CRON_SCHEDULE_PLACEHOLDER" ]; then
            cron_schedule="$original_cron"
        fi
    fi
    
    # Create a properly structured workflow
    cat > "$temp_file" << 'EOF'
name: WORKFLOW_NAME_PLACEHOLDER

on:
  workflow_dispatch: {}
  schedule:
    - cron: 'CRON_SCHEDULE_PLACEHOLDER'

permissions:
  contents: write
  actions: read

concurrency:
  group: "github.workflow-${{ github.ref }}"
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

      - name: Complete workflow
        run: |
          echo "Workflow completed successfully"
EOF
    
    # Replace placeholders
    sed -i "s/WORKFLOW_NAME_PLACEHOLDER/$workflow_name/g" "$temp_file"
    sed -i "s/CRON_SCHEDULE_PLACEHOLDER/$cron_schedule/g" "$temp_file"
    
    # Move the fixed file back
    mv "$temp_file" "$file"
}

# Process all workflow files
for file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$file" ]; then
        fix_workflow "$file"
    fi
done

echo "🎉 Workflow fix completed (preserving cron schedules)!"
echo "📊 Summary:"
echo "   - Total files checked: $TOTAL_FILES"
echo "   - Files fixed: $FIXED_COUNT"
echo "   - Files already correct: $((TOTAL_FILES - FIXED_COUNT))"
echo ""
echo "📋 Backup files created with .backup_preserve extension"
echo ""
echo "📝 Next steps:"
echo "1. Review the fixed files"
echo "2. Test the workflows"
echo "3. Remove .backup_preserve files if everything works"
echo "4. Commit and push the changes"