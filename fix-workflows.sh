#!/bin/bash

# Fix broken GitHub Actions workflows
echo "🔧 Fixing broken GitHub Actions workflows..."

# Function to fix a single workflow file
fix_workflow() {
    local file="$1"
    local temp_file="${file}.tmp"
    
    # Fix malformed echo statements
    sed -E 's/run: '\''echo "Workflow Workflow completed successfully"'\''\s*\n\s*'\''/run: echo "Workflow completed successfully"/g' "$file" > "$temp_file"
    
    # Fix other common issues
    sed -i '' 's/run: '\''echo "Workflow completed successfully"'\''\s*\n\s*'\''/run: echo "Workflow completed successfully"/g' "$temp_file"
    
    # Fix missing quotes and newlines
    sed -i '' 's/run: echo "Workflow completed successfully"\s*\n\s*'\''/run: echo "Workflow completed successfully"/g' "$temp_file"
    
    # Fix workflow names that are just "Workflow"
    sed -i '' 's/^name: Workflow$/name: '"$(basename "$file" .yml)"'/g' "$temp_file"
    
    # Fix malformed cron schedules
    sed -i '' 's/cron: '\''\*\/10 \* \* \* \*'\''/cron: '\''0 2 * * *'\''/g' "$temp_file"
    
    # Fix malformed permissions
    sed -i '' 's/contents: write/contents: read/g' "$temp_file"
    
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
