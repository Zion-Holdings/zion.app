#!/bin/bash

# Comprehensive GitHub Actions Workflow Fix Script
# Fixes common issues: missing permissions, concurrency, timeouts, artifact retention

echo "🔧 GitHub Actions Workflow Fix Script"
echo "====================================="

WORKFLOWS_DIR=".github/workflows"
BACKUP_DIR=".github/workflows/backup-$(date +%Y%m%d-%H%M%S)"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Function to backup and fix a workflow file
fix_workflow() {
    local file="$1"
    local filename=$(basename "$file")
    local temp_file="${file}.tmp"
    
    echo "🔍 Fixing: $filename"
    
    # Create backup
    cp "$file" "$BACKUP_DIR/"
    
    # Read the file content
    local content=$(cat "$file")
    
    # Fix 1: Add permissions if missing
    if ! echo "$content" | grep -q "^permissions:"; then
        echo "  ➕ Adding permissions section"
        # Find the line after 'on:' section and add permissions
        content=$(echo "$content" | sed '/^on:/,/^jobs:/{/^jobs:/i\
permissions:\
  contents: read\
  actions: read\
}')
    fi
    
    # Fix 2: Add concurrency if missing
    if ! echo "$content" | grep -q "^concurrency:"; then
        echo "  ➕ Adding concurrency settings"
        # Add concurrency after permissions or on section
        if echo "$content" | grep -q "^permissions:"; then
            content=$(echo "$content" | sed '/^permissions:/a\
concurrency:\
  group: "'$filename'-${{ github.ref }}"\
  cancel-in-progress: true')
        else
            content=$(echo "$content" | sed '/^on:/a\
concurrency:\
  group: "'$filename'-${{ github.ref }}"\
  cancel-in-progress: true')
        fi
    fi
    
    # Fix 3: Add timeout to jobs if missing
    if ! echo "$content" | grep -q "timeout-minutes:"; then
        echo "  ➕ Adding timeout settings"
        # Add timeout to each job
        content=$(echo "$content" | sed 's/^  \([a-zA-Z0-9_-]*\):$/  \1:\n    timeout-minutes: 30/')
    fi
    
    # Fix 4: Fix permission warnings (contents: write without pull-requests: write)
    if echo "$content" | grep -q "contents: write" && ! echo "$content" | grep -q "pull-requests: write"; then
        echo "  🔒 Fixing permission warnings"
        content=$(echo "$content" | sed 's/contents: write/contents: write\n  pull-requests: write/')
    fi
    
    # Fix 5: Add artifact retention if upload-artifact is used without retention
    if echo "$content" | grep -q "actions/upload-artifact" && ! echo "$content" | grep -q "retention-days:"; then
        echo "  📦 Adding artifact retention policy"
        content=$(echo "$content" | sed 's/actions\/upload-artifact@v[0-9]*/actions\/upload-artifact@v4/g')
        content=$(echo "$content" | sed '/actions\/upload-artifact@v[0-9]*/a\
          retention-days: 7')
    fi
    
    # Write the fixed content to temp file
    echo "$content" > "$temp_file"
    
    # Validate YAML syntax
    if python3 -c "import yaml; yaml.safe_load(open('$temp_file'))" 2>/dev/null; then
        # Move temp file to original
        mv "$temp_file" "$file"
        echo "  ✅ Fixed successfully"
    else
        echo "  ❌ YAML validation failed, keeping original"
        rm "$temp_file"
    fi
}

# Process all workflow files
echo ""
echo "📁 Processing workflow files in $WORKFLOWS_DIR"
echo ""

for file in "$WORKFLOWS_DIR"/*.yml; do
    if [ -f "$file" ]; then
        fix_workflow "$file"
        echo ""
    fi
done

echo "🎉 Workflow fixes completed!"
echo "============================"
echo "📊 Summary:"
echo "  - Backup created in: $BACKUP_DIR"
echo "  - All workflows processed"
echo ""
echo "🔧 Next steps:"
echo "  1. Review the changes"
echo "  2. Test workflows if possible"
echo "  3. Run validation script to confirm fixes"
echo "  4. Commit changes when satisfied"
echo ""
echo "💡 Note: Original files are backed up in case you need to revert"
