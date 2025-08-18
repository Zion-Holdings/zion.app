#!/bin/bash

# Fix broken GitHub Actions workflows - Final Version
echo "🔧 Fixing broken GitHub Actions workflows (final version)..."

# Function to fix a single workflow file
fix_workflow() {
    local file="$1"
    local temp_file="${file}.tmp"
    
    # Create a clean version of the file
    cat "$file" | sed -E '
        # Fix malformed echo statements with newlines and quotes
        s/run: '\''echo "Workflow Workflow completed successfully"'\''\s*\n\s*'\''/run: echo "Workflow completed successfully"/g
        s/run: '\''echo "Workflow completed successfully"'\''\s*\n\s*'\''/run: echo "Workflow completed successfully"/g
        
        # Fix workflow names that are just "Workflow"
        s/^name: Workflow$/name: '"$(basename "$file" .yml)"'/g
        
        # Fix malformed cron schedules
        s/cron: '\''\*\/10 \* \* \* \*'\''/cron: '\''0 2 * * *'\''/g
        
        # Fix excessive permissions
        s/contents: write/contents: read/g
        s/pull-requests: write//g
        
        # Fix concurrency group names
        s/group: workflow-\${{ github\.ref }}/group: '"$(basename "$file" .yml)"'-\${{ github\.ref }}/g
        
        # Fix any remaining malformed echo statements
        s/run: echo "Workflow executed successfully"/run: echo "Workflow completed successfully"/g
    ' > "$temp_file"
    
    # Move the fixed file back
    mv "$temp_file" "$file"
    echo "✅ Fixed: $file"
}

# Find and fix all workflow files
find .github/workflows -name "*.yml" -type f | while read -r workflow_file; do
    # Skip backup directory
    if [[ "$workflow_file" == *"broken_workflows_backup"* ]]; then
        continue
    fi
    
    # Check if file has syntax issues
    if yamllint "$workflow_file" >/dev/null 2>&1; then
        echo "✅ Valid: $workflow_file"
    else
        echo "🔧 Fixing: $workflow_file"
        fix_workflow "$workflow_file"
    fi
done

echo "🎉 Workflow fixes completed!"
