#!/bin/bash

# Better script to fix GitHub Actions workflow files
# Only removes invalid branch_protection_rules without breaking structure

echo "🔧 Fixing GitHub Actions workflow files (better approach)..."

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
    cp "$file" "$file.backup2"
    
    # Remove only the branch_protection_rules section
    # This is more targeted and preserves the structure
    awk '
    /^  # Branch protection rules$/ {
        in_branch_protection = 1
        next
    }
    in_branch_protection && /^    steps:$/ {
        in_branch_protection = 0
        print
        next
    }
    in_branch_protection {
        next
    }
    { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    
    echo "✅ Fixed: $file"
done

echo ""
echo "🎉 All workflow files have been fixed with better approach!"
echo "📋 Backup files have been created with .backup2 extension"
echo ""
echo "📝 Next steps:"
echo "1. Review the fixed files"
echo "2. Test the workflows"
echo "3. Remove .backup2 files if everything works"
echo "4. Commit and push the changes"
