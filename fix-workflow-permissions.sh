#!/bin/bash

# Script to fix invalid branch_protection_rules in GitHub Actions workflow files

echo "🔍 Searching for workflow files with invalid branch_protection_rules..."

# Find all workflow files with the invalid syntax
files_with_errors=$(grep -l "branch_protection_rules:" .github/workflows/*.yml)

if [ -z "$files_with_errors" ]; then
    echo "✅ No files with invalid branch_protection_rules found!"
    exit 0
fi

echo "❌ Found $(echo "$files_with_errors" | wc -l) files with invalid syntax:"
echo "$files_with_errors"
echo ""

# Backup directory
backup_dir=".github/workflows/backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir"

echo "📁 Creating backup in $backup_dir"

# Fix each file
fixed_count=0
for file in $files_with_errors; do
    echo "🔧 Fixing $file..."
    
    # Create backup
    cp "$file" "$backup_dir/"
    
    # Remove the invalid branch_protection_rules section
    # This removes from "# Branch protection rules" comment to the end of that section
    sed -i.bak '/# Branch protection rules/,/required_conversation_resolution: true/d' "$file"
    
    # Clean up backup files
    rm -f "$file.bak"
    
    # Verify the fix
    if ! grep -q "branch_protection_rules:" "$file"; then
        echo "✅ Fixed $file"
        ((fixed_count++))
    else
        echo "❌ Failed to fix $file"
    fi
done

echo ""
echo "🎉 Fixed $fixed_count out of $(echo "$files_with_errors" | wc -l) files"
echo "📁 Backups saved in $backup_dir"
echo ""
echo "⚠️  Note: Branch protection rules should be configured in repository settings, not in workflow files."
echo "   Go to Settings → Branches → Branch protection rules to configure them properly."
