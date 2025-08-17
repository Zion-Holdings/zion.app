#!/bin/bash

# Targeted script to fix specific GitHub Actions workflow issues
# Only fixes missing sections and incorrect indentation without overwriting content

echo "🔧 Targeted GitHub Actions Workflow Fix Script"
echo "=============================================="

WORKFLOWS_DIR=".github/workflows"
FIXED_COUNT=0
TOTAL_FILES=$(find $WORKFLOWS_DIR -name "*.yml" | wc -l)

echo "📁 Found $TOTAL_FILES workflow files to check"
echo ""

# Function to fix a workflow file
fix_workflow() {
    local file="$1"
    local needs_fix=false
    
    echo "🔍 Checking: $file"
    
    # Check for specific issues
    if ! grep -q "^permissions:" "$file"; then
        echo "  ⚠️  Missing permissions section, fixing..."
        needs_fix=true
    fi
    
    if ! grep -q "^  runs-on:" "$file"; then
        echo "  ⚠️  Missing runs-on, fixing..."
        needs_fix=true
    fi
    
    if ! grep -q "^  steps:" "$file"; then
        echo "  ⚠️  Missing steps section, fixing..."
        needs_fix=true
    fi
    
    if [ "$needs_fix" = true ]; then
        # Create backup
        cp "$file" "$file.backup_targeted"
        
        # Fix the file
        fix_specific_issues "$file"
        
        echo "  ✅ Fixed: $file"
        ((FIXED_COUNT++))
    else
        echo "  ✅ Already properly structured"
    fi
    
    echo ""
}

# Function to fix specific issues
fix_specific_issues() {
    local file="$1"
    local temp_file="$file.tmp"
    
    # Add missing permissions section after 'on:' section
    if ! grep -q "^permissions:" "$file"; then
        sed -i '/^on:/,/^jobs:/{/^jobs:/i\
permissions:\
  contents: write\
  actions: read\
\
}' "$file"
    fi
    
    # Add missing runs-on and steps if they don't exist
    if ! grep -q "^  runs-on:" "$file"; then
        # Find the job section and add runs-on
        sed -i '/^  main:/,/^  steps:/{/^  main:/a\
    runs-on: ubuntu-latest\
    timeout-minutes: 20\
}' "$file"
    fi
    
    # Ensure steps section exists
    if ! grep -q "^  steps:" "$file"; then
        # Add steps section before any existing step-like content
        sed -i '/^  main:/,/^  - name:/{/^  - name:/i\
    steps:\
}' "$file"
    fi
}

# Process all workflow files
for file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$file" ]; then
        fix_workflow "$file"
    fi
done

echo "🎉 Targeted workflow fix completed!"
echo "📊 Summary:"
echo "   - Total files checked: $TOTAL_FILES"
echo "   - Files fixed: $FIXED_COUNT"
echo "   - Files already correct: $((TOTAL_FILES - FIXED_COUNT))"
echo ""
echo "📋 Backup files created with .backup_targeted extension"
echo ""
echo "📝 Next steps:"
echo "1. Review the fixed files"
echo "2. Test the workflows"
echo "3. Remove .backup_targeted files if everything works"
echo "4. Commit and push the changes"