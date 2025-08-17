#!/bin/bash

# Script to fix YAML syntax errors in GitHub workflow files
# Fixes unquoted names containing colons

echo "Fixing YAML syntax errors in workflow files..."

# Find all workflow files with unquoted names containing colons
workflow_files=$(grep -l "name: [^\"].*:.*" .github/workflows/*.yml 2>/dev/null)

if [ -z "$workflow_files" ]; then
    echo "No workflow files with syntax errors found."
    exit 0
fi

echo "Found $(echo "$workflow_files" | wc -l) workflow files to fix:"
echo "$workflow_files"
echo

# Fix each file
for file in $workflow_files; do
    echo "Fixing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Fix the name field by adding quotes around values containing colons
    sed -i '' 's/^name: \([^"]*:.*\)$/name: "\1"/' "$file"
    
    # Verify the fix
    if node -e "const yaml = require('js-yaml'); const fs = require('fs'); try { yaml.load(fs.readFileSync('$file', 'utf8')); console.log('✓ Valid YAML'); } catch(e) { console.error('✗ YAML error:', e.message); }" 2>/dev/null | grep -q "Valid YAML"; then
        echo "  ✓ Fixed successfully"
        rm "$file.backup"
    else
        echo "  ✗ Fix failed, restoring backup"
        mv "$file.backup" "$file"
    fi
done

echo
echo "YAML syntax fix completed!"
