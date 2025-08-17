#!/bin/bash

# Cleanup Old GitHub Actions Workflows
# This script removes old, redundant workflow files and keeps only the essential new ones

echo "🧹 Cleaning up old GitHub Actions workflows..."

# Directory containing workflows
WORKFLOWS_DIR=".github/workflows"

# Essential workflows to keep (the new ones we created)
ESSENTIAL_WORKFLOWS=(
    "ci.yml"                    # Main CI/CD Pipeline
    "test.yml"                  # Test Suite
    "security.yml"              # Security & Dependency Management
    "deploy.yml"                # Deploy to Production
    "maintenance.yml"            # Repository Maintenance
    "workflow-manager.yml"       # Workflow Manager
)

# Backup directory for old workflows
BACKUP_DIR=".github/workflows/backup-$(date +%Y%m%d-%H%M%S)"

echo "📁 Creating backup directory: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

# Move all workflow files to backup first
echo "📦 Backing up all existing workflows..."
for file in "$WORKFLOWS_DIR"/*.yml; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "  - Backing up: $filename"
        mv "$file" "$BACKUP_DIR/"
    fi
done

# Restore only the essential workflows
echo "✅ Restoring essential workflows..."
for workflow in "${ESSENTIAL_WORKFLOWS[@]}"; do
    if [ -f "$BACKUP_DIR/$workflow" ]; then
        echo "  - Restoring: $workflow"
        mv "$BACKUP_DIR/$workflow" "$WORKFLOWS_DIR/"
    else
        echo "  - Warning: $workflow not found in backup"
    fi
done

# Count remaining workflows
REMAINING_COUNT=$(find "$WORKFLOWS_DIR" -name "*.yml" | wc -l)
BACKUP_COUNT=$(find "$BACKUP_DIR" -name "*.yml" | wc -l)

echo ""
echo "🎯 Cleanup Summary:"
echo "  - Essential workflows kept: $REMAINING_COUNT"
echo "  - Old workflows backed up: $BACKUP_COUNT"
echo "  - Backup location: $BACKUP_DIR"
echo ""

# List remaining workflows
echo "📋 Remaining essential workflows:"
for file in "$WORKFLOWS_DIR"/*.yml; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "  ✅ $filename"
    fi
done

echo ""
echo "💡 Next steps:"
echo "  1. Test the remaining workflows manually"
echo "  2. Verify they work correctly"
echo "  3. Delete backup directory if everything works: rm -rf $BACKUP_DIR"
echo "  4. Commit the changes to git"
echo ""
echo "🚀 GitHub Actions cleanup completed!"
