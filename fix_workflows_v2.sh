#!/bin/bash

# Improved script to fix YAML syntax errors in GitHub Actions workflows

echo "Fixing YAML syntax errors in workflow files (version 2)..."

# Function to fix a single workflow file
fix_workflow() {
    local file="$1"
    echo "Fixing: $file"
    
    # Create backup
    cp "$file" "$file.backup2"
    
    # Fix the malformed quotes first (remove double quotes)
    sed -i '' 's/^name: ""Agent: /name: "Agent: /g' "$file"
    sed -i '' 's/^name: ""\(.*\): \(.*\)""$/name: "\1: \2"/g' "$file"
    
    # Fix missing newlines after jobs:
    sed -i '' 's/^jobs:$/jobs:\n/' "$file"
    
    # Fix missing newlines after step names (look for - name: followed by uses: without newline)
    sed -i '' 's/\(- name: [^:]*\)\n    uses:/\1\n      uses:/g' "$file"
    
    # Fix missing newlines after step names (look for - name: followed by run: without newline)
    sed -i '' 's/\(- name: [^:]*\)\n    run:/\1\n      run:/g' "$file"
    
    # Fix missing newlines after step names (look for - name: followed by with: without newline)
    sed -i '' 's/\(- name: [^:]*\)\n    with:/\1\n      with:/g' "$file"
    
    # Fix timeout-minutes indentation (common issue)
    sed -i '' 's/^      timeout-minutes:/    timeout-minutes:/g' "$file"
    
    # Fix missing newlines after cron schedules
    sed -i '' 's/\(cron: [^:]*\)\njobs:/\1\n\njobs:/g' "$file"
    
    # Fix missing newlines after workflow_dispatch
    sed -i '' 's/\(workflow_dispatch:\)\npermissions:/\1\n\npermissions:/g' "$file"
    
    # Fix missing newlines after workflow_dispatch
    sed -i '' 's/\(workflow_dispatch:\)\njobs:/\1\n\njobs:/g' "$file"
    
    # Fix missing newlines after schedule
    sed -i '' 's/\(schedule:\)\njobs:/\1\n\njobs:/g' "$file"
    
    # Fix missing newlines after on:
    sed -i '' 's/\(on:\)\njobs:/\1\n\njobs:/g' "$file"
    
    echo "  Fixed: $file"
}

# Find all workflow files with errors and fix them
for file in $(find .github/workflows -name "*.yml" -o -name "*.yaml"); do
    if ! python3 -c "import yaml; yaml.safe_load(open('$file'))" >/dev/null 2>&1; then
        fix_workflow "$file"
    fi
done

echo "Workflow fixes completed (version 2)!"
echo "Note: Backup files have been created with .backup2 extension"
echo "Please review the changes and test the workflows before committing."
