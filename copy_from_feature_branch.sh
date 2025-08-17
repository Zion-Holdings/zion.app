#!/bin/bash

# Script to copy missing workflows from the chore/fix-ai-it-ads-sync branch

echo "Copying missing workflows from chore/fix-ai-it-ads-sync branch..."

# List of workflows to copy from feature branch
FEATURE_WORKFLOWS=(
    "actions-keepalive.yml"
    "ai-changelog.yml"
    "ai-content-autonomy.yml"
    "ai-content-factory.yml"
    "ai-it-ads-sync.yml"
    "ai-it-innovations.yml"
    "ai-it-multi-factory.yml"
    "ai-it-ultrafast-sync.yml"
    "ai-research-scout.yml"
    "cloud-agents-fast.yml"
    "cloud-agents.yml"
    "git-ultrafast-sync.yml"
    "lighthouse-live.yml"
    "pa11y.yml"
    "pr-auto-curator.yml"
    "seo-validator.yml"
    "workflow-radar.yml"
)

echo "Found ${#FEATURE_WORKFLOWS[@]} workflows to copy from feature branch"

# Copy each workflow
copied_count=0
for workflow in "${FEATURE_WORKFLOWS[@]}"; do
    echo "Copying ${workflow}..."
    
    # Check if workflow already exists
    if [ -f ".github/workflows/${workflow}" ]; then
        echo "  ⚠️  ${workflow} already exists, skipping"
        continue
    fi
    
    # Copy from feature branch
    if git show "chore/fix-ai-it-ads-sync:.github/workflows/${workflow}" > ".github/workflows/${workflow}" 2>/dev/null; then
        echo "  ✓ Copied ${workflow}"
        ((copied_count++))
    else
        echo "  ✗ Failed to copy ${workflow}"
    fi
done

echo ""
echo "Copy complete!"
echo "Copied ${copied_count} workflows from feature branch"
echo "Current workflow count: $(find .github/workflows -name "*.yml" -not -path "*/backup-*" | wc -l)"
