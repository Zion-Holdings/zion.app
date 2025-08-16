#!/bin/bash

# Final comprehensive script to fix all remaining YAML syntax errors

echo "Final fix for remaining YAML syntax errors..."

# Function to fix a single workflow file
fix_workflow() {
    local file="$1"
    echo "Fixing: $file"
    
    # Create backup
    cp "$file" "$file.backup3"
    
    # Fix missing newlines after cron schedules (more comprehensive)
    sed -i '' 's/\(cron: [^:]*\)\njobs:/\1\n\njobs:/g' "$file"
    
    # Fix missing newlines after schedule
    sed -i '' 's/\(schedule:\)\njobs:/\1\n\njobs:/g' "$file"
    
    # Fix missing newlines after on:
    sed -i '' 's/\(on:\)\njobs:/\1\n\njobs:/g' "$file"
    
    # Fix missing newlines after workflow_dispatch
    sed -i '' 's/\(workflow_dispatch:\)\njobs:/\1\n\njobs:/g' "$file"
    
    # Fix missing newlines after permissions
    sed -i '' 's/\(permissions:\)\njobs:/\1\n\njobs:/g' "$file"
    
    # Fix missing newlines after steps:
    sed -i '' 's/\(steps:\)\n    - name:/\1\n      - name:/g' "$file"
    
    # Fix missing newlines after step names (more comprehensive)
    sed -i '' 's/\(- name: [^:]*\)\n    uses:/\1\n      uses:/g' "$file"
    sed -i '' 's/\(- name: [^:]*\)\n    run:/\1\n      run:/g' "$file"
    sed -i '' 's/\(- name: [^:]*\)\n    with:/\1\n      with:/g' "$file"
    sed -i '' 's/\(- name: [^:]*\)\n    if:/\1\n      if:/g' "$file"
    
    # Fix missing newlines after uses:
    sed -i '' 's/\(uses: [^:]*\)\n    with:/\1\n      with:/g' "$file"
    
    # Fix missing newlines after run:
    sed -i '' 's/\(run: [^:]*\)\n    - name:/\1\n      - name:/g' "$file"
    
    # Fix missing newlines after with:
    sed -i '' 's/\(with:\)\n    node-version:/\1\n      node-version:/g' "$file"
    
    # Fix timeout-minutes indentation
    sed -i '' 's/^      timeout-minutes:/    timeout-minutes:/g' "$file"
    
    # Fix runs-on indentation
    sed -i '' 's/^  runs-on:/    runs-on:/g' "$file"
    
    # Fix steps indentation
    sed -i '' 's/^  steps:/    steps:/g' "$file"
    
    # Fix agent-execution indentation
    sed -i '' 's/^  agent-execution:/    agent-execution:/g' "$file"
    
    echo "  Fixed: $file"
}

# Find all workflow files with errors and fix them
for file in $(find .github/workflows -name "*.yml" -o -name "*.yaml"); do
    if ! python3 -c "import yaml; yaml.safe_load(open('$file'))" >/dev/null 2>&1; then
        fix_workflow "$file"
    fi
done

echo "Final workflow fixes completed!"
echo "Note: Backup files have been created with .backup3 extension"
echo "Please review the changes and test the workflows before committing."
