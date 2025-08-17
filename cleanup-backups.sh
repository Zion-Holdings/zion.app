#!/bin/bash

# Script to clean up backup files created during workflow fixing
# Use with caution - this will permanently delete backup files

echo "🧹 Workflow Backup Cleanup Script"
echo "=================================="

# Directory containing workflow files
WORKFLOWS_DIR=".github/workflows"

# Find all backup files
BACKUP_FILES=$(find $WORKFLOWS_DIR -name "*.backup*" -o -name "*.autoheal_backup")

if [ -z "$BACKUP_FILES" ]; then
    echo "✅ No backup files found"
    exit 0
fi

echo "📁 Found $(echo "$BACKUP_FILES" | wc -l) backup files:"
echo "$BACKUP_FILES"
echo ""

# Ask for confirmation
read -p "⚠️  Are you sure you want to delete these backup files? (y/N): " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗑️  Deleting backup files..."
    
    # Delete each backup file
    for file in $BACKUP_FILES; do
        echo "  🗑️  Deleting: $file"
        rm "$file"
    done
    
    echo ""
    echo "✅ All backup files have been deleted"
    echo ""
    echo "📝 Note: These files cannot be recovered"
    echo "   If you need to restore a workflow, you'll need to:"
    echo "   1. Check git history"
    echo "   2. Use the auto-healer workflow"
    echo "   3. Manually recreate the workflow"
    
else
    echo "❌ Operation cancelled"
    echo ""
    echo "💡 To clean up later, run:"
    echo "   ./cleanup-backups.sh"
fi