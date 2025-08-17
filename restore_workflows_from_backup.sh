#!/bin/bash

# Restore all workflows from backup to fix broken current workflows
# This script will restore the functional workflows from the backup directory

set -e

BACKUP_DIR=".github/workflows/existing_backup_1755434797"
WORKFLOWS_DIR=".github/workflows"

echo "🔧 Restoring workflows from backup to fix broken current workflows..."

# Check if backup directory exists
if [ ! -d "$BACKUP_DIR" ]; then
    echo "❌ Backup directory $BACKUP_DIR not found!"
    exit 1
fi

# Create a backup of current broken workflows before replacing them
CURRENT_BACKUP_DIR=".github/workflows/broken_workflows_backup_$(date +%s)"
echo "📦 Creating backup of current broken workflows in $CURRENT_BACKUP_DIR"
mkdir -p "$CURRENT_BACKUP_DIR"

# Backup all current workflows
cp -r "$WORKFLOWS_DIR"/*.yml "$CURRENT_BACKUP_DIR/" 2>/dev/null || true

# Count workflows to restore
TOTAL_WORKFLOWS=$(find "$BACKUP_DIR" -name "*.yml" | wc -l)
echo "📊 Found $TOTAL_WORKFLOWS workflows in backup directory"

# Restore each workflow from backup
RESTORED_COUNT=0
FAILED_COUNT=0

for backup_file in "$BACKUP_DIR"/*.yml; do
    if [ -f "$backup_file" ]; then
        filename=$(basename "$backup_file")
        target_file="$WORKFLOWS_DIR/$filename"
        
        echo "🔄 Restoring $filename..."
        
        # Restore the workflow
        if cp "$backup_file" "$target_file"; then
            echo "✅ Successfully restored $filename"
            ((RESTORED_COUNT++))
        else
            echo "❌ Failed to restore $filename"
            ((FAILED_COUNT++))
        fi
    fi
done

echo ""
echo "🎯 Workflow Restoration Summary:"
echo "   Total workflows in backup: $TOTAL_WORKFLOWS"
echo "   Successfully restored: $RESTORED_COUNT"
echo "   Failed to restore: $FAILED_COUNT"
echo "   Current broken workflows backed up to: $CURRENT_BACKUP_DIR"

# Validate the restored workflows
echo ""
echo "🔍 Validating restored workflows..."

VALID_COUNT=0
INVALID_COUNT=0

for workflow_file in "$WORKFLOWS_DIR"/*.yml; do
    if [ -f "$workflow_file" ]; then
        filename=$(basename "$workflow_file")
        
        # Basic YAML validation
        if python3 -c "import yaml; yaml.safe_load(open('$workflow_file'))" 2>/dev/null; then
            echo "✅ $filename - Valid YAML"
            ((VALID_COUNT++))
        else
            echo "❌ $filename - Invalid YAML"
            ((INVALID_COUNT++))
        fi
    fi
done

echo ""
echo "📋 YAML Validation Summary:"
echo "   Valid workflows: $VALID_COUNT"
echo "   Invalid workflows: $INVALID_COUNT"

# Show some key differences between old and new
echo ""
echo "🔍 Key differences between old and restored workflows:"

# Check a few key workflows
for workflow in "ci.yml" "deploy.yml" "playwright-smoke.yml" "test.yml"; do
    if [ -f "$WORKFLOWS_DIR/$workflow" ]; then
        echo ""
        echo "📄 $workflow:"
        
        # Check if it's the basic template or functional
        if grep -q "echo.*completed successfully" "$WORKFLOWS_DIR/$workflow"; then
            echo "   ❌ Still using basic template (needs manual fix)"
        else
            echo "   ✅ Restored functional workflow"
        fi
        
        # Show first few lines
        echo "   First few lines:"
        head -5 "$WORKFLOWS_DIR/$workflow" | sed 's/^/     /'
    fi
done

echo ""
echo "🎉 Workflow restoration completed!"
echo "💡 Next steps:"
echo "   1. Review the restored workflows"
echo "   2. Commit the changes: git add .github/workflows/ && git commit -m 'fix: restore functional workflows from backup'"
echo "   3. Push to trigger the restored workflows: git push"
echo "   4. Check GitHub Actions to ensure they're working properly"