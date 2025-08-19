#!/bin/bash

# Script to clean up excessive GitHub Actions workflows
# Keeps only essential workflows and removes generic templates

echo "🧹 Cleaning up GitHub Actions workflows..."
echo "=========================================="

WORKFLOWS_DIR=".github/workflows"
BACKUP_DIR=".github/workflows/backup-$(date +%Y%m%d-%H%M%S)"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Essential workflows to keep
ESSENTIAL_WORKFLOWS=(
    "ci.yml"
    "test.yml"
    "deploy.yml"
    "security.yml"
    "dependencies.yml"
    "playwright-smoke.yml"
    "cleanup.yml"
    "maintenance.yml"
)

# Workflows to remove (generic templates)
TEMPLATE_PATTERNS=(
    "agent-*"
    "ai-*"
    "auto-*"
    "app-*"
    "cloud-*"
    "exponential-*"
    "infinite-*"
    "intelligent-*"
    "netlify-*"
    "performance-*"
    "seo-*"
    "sitemap-*"
    "workflow-*"
    "yaml-*"
)

echo "📁 Current workflows: $(ls $WORKFLOWS_DIR/*.yml | wc -l)"
echo ""

# Function to check if workflow is essential
is_essential() {
    local file="$1"
    for essential in "${ESSENTIAL_WORKFLOWS[@]}"; do
        if [[ "$file" == *"$essential" ]]; then
            return 0
        fi
    done
    return 1
}

# Function to check if workflow matches template pattern
is_template() {
    local file="$1"
    local filename=$(basename "$file")
    
    for pattern in "${TEMPLATE_PATTERNS[@]}"; do
        if [[ "$filename" == $pattern ]]; then
            return 0
        fi
    done
    return 1
}

# Process all workflow files
KEPT_COUNT=0
REMOVED_COUNT=0

for file in $WORKFLOWS_DIR/*.yml; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        
        if is_essential "$filename"; then
            echo "✅ Keeping essential workflow: $filename"
            ((KEPT_COUNT++))
        elif is_template "$filename"; then
            echo "🗑️  Removing template workflow: $filename"
            mv "$file" "$BACKUP_DIR/"
            ((REMOVED_COUNT++))
        else
            echo "❓ Unknown workflow: $filename (keeping for now)"
            ((KEPT_COUNT++))
        fi
    fi
done

echo ""
echo "🎉 Cleanup completed!"
echo "📊 Summary:"
echo "   - Workflows kept: $KEPT_COUNT"
echo "   - Workflows removed: $REMOVED_COUNT"
echo "   - Backup location: $BACKUP_DIR"
echo ""

if [ $REMOVED_COUNT -gt 0 ]; then
    echo "💡 Removed workflows are backed up in: $BACKUP_DIR"
    echo "   Review them and restore any that are actually needed"
fi

echo ""
echo "📋 Essential workflows kept:"
for workflow in "${ESSENTIAL_WORKFLOWS[@]}"; do
    if [ -f "$WORKFLOWS_DIR/$workflow" ]; then
        echo "   ✅ $workflow"
    else
        echo "   ❌ $workflow (missing!)"
    fi
done
