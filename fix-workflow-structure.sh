#!/bin/bash

# Script to fix GitHub Actions workflow files by restoring proper structure
# Adds missing jobs sections and fixes YAML syntax

echo "🔧 Fixing GitHub Actions workflow structure..."

# Directory containing workflow files
WORKFLOWS_DIR=".github/workflows"

# Find all workflow files missing the jobs section
FILES_TO_FIX=$(grep -L "jobs:" $WORKFLOWS_DIR/*.yml)

if [ -z "$FILES_TO_FIX" ]; then
    echo "✅ All workflow files have proper jobs sections"
    exit 0
fi

echo "📁 Found $(echo "$FILES_TO_FIX" | wc -l) workflow files to fix:"
echo "$FILES_TO_FIX"
echo ""

# Process each file
for file in $FILES_TO_FIX; do
    echo "🔧 Fixing: $file"
    
    # Create backup
    cp "$file" "$file.backup3"
    
    # Get the workflow name from the file
    WORKFLOW_NAME=$(grep "^name:" "$file" | head -1 | sed 's/name: //' | tr -d '"')
    if [ -z "$WORKFLOW_NAME" ]; then
        WORKFLOW_NAME="Workflow"
    fi
    
    # Create a properly structured workflow file
    cat > "$file.tmp" << EOF
name: $WORKFLOW_NAME

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
EOF
    
    # Extract the steps from the original file and add them with proper indentation
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
    ' "$file" >> "$file.tmp"
    
    # Move the fixed file back
    mv "$file.tmp" "$file"
    
    echo "✅ Fixed: $file"
done

echo ""
echo "🎉 All workflow files have been fixed with proper structure!"
echo "📋 Backup files have been created with .backup3 extension"
echo ""
echo "📝 Next steps:"
echo "1. Review the fixed files"
echo "2. Test the workflows"
echo "3. Remove .backup3 files if everything works"
echo "4. Commit and push the changes"
