#!/bin/bash

# Simple and Robust GitHub Actions Workflow Fix Script
# Fixes common issues without complex sed operations

echo "🔧 Simple Workflow Fix Script"
echo "============================="

WORKFLOWS_DIR=".github/workflows"
BACKUP_DIR=".github/workflows/backup-$(date +%Y%m%d-%H%M%S)"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Function to fix a workflow file
fix_workflow() {
    local file="$1"
    local filename=$(basename "$file")
    
    echo "🔍 Fixing: $filename"
    
    # Create backup
    cp "$file" "$BACKUP_DIR/"
    
    # Fix 1: Add permissions if missing (simple approach)
    if ! grep -q "^permissions:" "$file"; then
        echo "  ➕ Adding permissions section"
        # Insert permissions after the first 'on:' section
        sed -i.bak '1,/^on:/{/^on:/a\
permissions:\
  contents: read\
  actions: read\
}' "$file"
        rm "${file}.bak"
    fi
    
    # Fix 2: Add concurrency if missing
    if ! grep -q "^concurrency:" "$file"; then
        echo "  ➕ Adding concurrency settings"
        # Insert concurrency after permissions or on section
        if grep -q "^permissions:" "$file"; then
            sed -i.bak '/^permissions:/a\
concurrency:\
  group: "'$filename'-${{ github.ref }}"\
  cancel-in-progress: true' "$file"
        else
            sed -i.bak '/^on:/a\
concurrency:\
  group: "'$filename'-${{ github.ref }}"\
  cancel-in-progress: true' "$file"
        fi
        rm "${file}.bak"
    fi
    
    # Fix 3: Add timeout to jobs if missing
    if ! grep -q "timeout-minutes:" "$file"; then
        echo "  ➕ Adding timeout settings"
        # Add timeout after job name
        sed -i.bak 's/^  \([a-zA-Z0-9_-]*\):$/  \1:\n    timeout-minutes: 30/' "$file"
        rm "${file}.bak"
    fi
    
    # Fix 4: Fix permission warnings
    if grep -q "contents: write" "$file" && ! grep -q "pull-requests: write" "$file"; then
        echo "  🔒 Fixing permission warnings"
        sed -i.bak 's/contents: write/contents: write\n  pull-requests: write/' "$file"
        rm "${file}.bak"
    fi
    
    # Fix 5: Add artifact retention
    if grep -q "actions/upload-artifact" "$file" && ! grep -q "retention-days:" "$file"; then
        echo "  📦 Adding artifact retention policy"
        # Update to v4 if needed
        sed -i.bak 's/actions\/upload-artifact@v[0-9]*/actions\/upload-artifact@v4/g' "$file"
        # Add retention after upload-artifact
        sed -i.bak '/actions\/upload-artifact@v4/a\
          retention-days: 7' "$file"
        rm "${file}.bak"
    fi
    
    # Validate YAML syntax
    if python3 -c "import yaml; yaml.safe_load(open('$file'))" 2>/dev/null; then
        echo "  ✅ Fixed successfully"
    else
        echo "  ❌ YAML validation failed, restoring from backup"
        cp "$BACKUP_DIR/$filename" "$file"
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
