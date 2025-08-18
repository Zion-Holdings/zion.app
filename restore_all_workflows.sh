#!/bin/bash

# Script to restore all workflows from the backup directory
# This will recover all the workflows that were deleted in the last 24 hours

echo "Starting workflow restoration from backup directory..."

# Check if backup directory exists
if [ ! -d ".github/workflows/backup-20250817-094520" ]; then
    echo "Error: Backup directory not found!"
    echo "Expected: .github/workflows/backup-20250817-094520"
    exit 1
fi

# Count workflows in backup
BACKUP_COUNT=$(find .github/workflows/backup-20250817-094520 -name "*.yml" | wc -l)
echo "Found ${BACKUP_COUNT} workflows in backup directory"

# Count current workflows (excluding backup directories)
CURRENT_COUNT=$(find .github/workflows -name "*.yml" -not -path "*/backup-*" | wc -l)
echo "Current workflow count: ${CURRENT_COUNT}"

# Create a temporary directory for restoration
TEMP_DIR=".github/workflows/temp_restore_$(date +%s)"
mkdir -p "$TEMP_DIR"

echo ""
echo "Restoring workflows..."

# Copy all workflows from backup to temp directory first
cp .github/workflows/backup-20250817-094520/*.yml "$TEMP_DIR/"

# Check for conflicts with existing workflows
CONFLICTS=0
for workflow in "$TEMP_DIR"/*.yml; do
    if [ -f "$workflow" ]; then
        filename=$(basename "$workflow")
        if [ -f ".github/workflows/$filename" ]; then
            echo "  ⚠️  Conflict detected: $filename already exists"
            ((CONFLICTS++))
        else
            echo "  ✓ Ready to restore: $filename"
        fi
    fi
done

if [ $CONFLICTS -gt 0 ]; then
    echo ""
    echo "Found ${CONFLICTS} conflicts with existing workflows."
    echo "Backing up existing workflows before restoration..."
    
    # Create backup of existing workflows
    BACKUP_EXISTING=".github/workflows/existing_backup_$(date +%s)"
    mkdir -p "$BACKUP_EXISTING"
    
    for workflow in "$TEMP_DIR"/*.yml; do
        if [ -f "$workflow" ]; then
            filename=$(basename "$workflow")
            if [ -f ".github/workflows/$filename" ]; then
                cp ".github/workflows/$filename" "$BACKUP_EXISTING/"
                echo "  ✓ Backed up existing: $filename"
            fi
        fi
    done
fi

echo ""
echo "Moving workflows to main directory..."

# Move all workflows from temp to main workflows directory
mv "$TEMP_DIR"/*.yml .github/workflows/ 2>/dev/null

# Clean up temp directory
rmdir "$TEMP_DIR" 2>/dev/null

# Final count
FINAL_COUNT=$(find .github/workflows -name "*.yml" -not -path "*/backup-*" | wc -l)

echo ""
echo "Restoration complete!"
echo "====================="
echo "Workflows before: ${CURRENT_COUNT}"
echo "Workflows restored: ${BACKUP_COUNT}"
echo "Workflows after: ${FINAL_COUNT}"
echo "Conflicts resolved: ${CONFLICTS}"

if [ $CONFLICTS -gt 0 ]; then
    echo ""
    echo "Existing workflows were backed up to: ${BACKUP_EXISTING}"
    echo "You can review and restore specific workflows if needed."
fi

echo ""
echo "All workflows have been restored from the backup directory!"
echo "The repository should now contain all the workflows that were deleted."

