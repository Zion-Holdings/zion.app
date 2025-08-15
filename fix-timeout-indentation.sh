#!/bin/bash

# Script to fix timeout-minutes indentation in GitHub Actions workflow files
# Changes 6-space indentation to 4-space indentation

echo "🔧 Fixing timeout-minutes indentation in workflow files..."

# Directory containing workflow files
WORKFLOWS_DIR=".github/workflows"

# Find all workflow files with timeout-minutes
FILES_WITH_TIMEOUT=$(grep -l "timeout-minutes:" $WORKFLOWS_DIR/*.yml)

if [ -z "$FILES_WITH_TIMEOUT" ]; then
    echo "✅ No workflow files with timeout-minutes found"
    exit 0
fi

echo "📁 Found $(echo "$FILES_WITH_TIMEOUT" | wc -l) workflow files with timeout-minutes"
echo ""

# Process each file
for file in $FILES_WITH_TIMEOUT; do
    echo "🔧 Checking: $file"
    
    # Check if the file has incorrect indentation (6 spaces)
    if grep -q "      timeout-minutes:" "$file"; then
        echo "  ⚠️  Found incorrect indentation, fixing..."
        
        # Create backup
        cp "$file" "$file.backup4"
        
        # Fix the indentation: change 6 spaces to 4 spaces
        sed -i '' 's/      timeout-minutes:/    timeout-minutes:/g' "$file"
        
        echo "  ✅ Fixed indentation in $file"
    else
        echo "  ✅ Indentation already correct"
    fi
done

echo ""
echo "🎉 All timeout-minutes indentation issues have been fixed!"
echo "📋 Backup files have been created with .backup4 extension"
echo ""
echo "📝 Next steps:"
echo "1. Review the fixed files"
echo "2. Test the workflows"
echo "3. Remove .backup4 files if everything works"
echo "4. Commit and push the changes"
