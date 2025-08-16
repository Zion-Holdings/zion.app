#!/bin/bash

# Script to fix GitHub Actions workflow files
# Removes invalid branch_protection_rules and fixes YAML syntax

echo "🔧 Fixing GitHub Actions workflow files..."

# Directory containing workflow files
WORKFLOWS_DIR=".github/workflows"

# Find all workflow files with branch_protection_rules
FILES_TO_FIX=$(grep -l "branch_protection_rules" $WORKFLOWS_DIR/*.yml)

if [ -z "$FILES_TO_FIX" ]; then
    echo "✅ No workflow files with branch_protection_rules found"
    exit 0
fi

echo "📁 Found $(echo "$FILES_TO_FIX" | wc -l) workflow files to fix:"
echo "$FILES_TO_FIX"
echo ""

# Process each file
for file in $FILES_TO_FIX; do
    echo "🔧 Fixing: $file"
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Remove branch_protection_rules section and fix structure
    # This sed command removes the entire branch_protection_rules block
    sed -i.tmp '/^  # Branch protection rules$/,/^    steps:$/d' "$file"
    
    # Remove the temporary file
    rm "$file.tmp"
    
    # Fix common YAML issues
    # Remove empty lines that might cause issues
    sed -i.tmp '/^[[:space:]]*$/d' "$file"
    
    # Remove the temporary file
    rm "$file.tmp"
    
    echo "✅ Fixed: $file"
done

echo ""
echo "🎉 All workflow files have been fixed!"
echo "📋 Backup files have been created with .backup extension"
echo ""
echo "📝 Next steps:"
echo "1. Review the fixed files"
echo "2. Test the workflows"
echo "3. Remove .backup files if everything works"
echo "4. Commit and push the changes"
