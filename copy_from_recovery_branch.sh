#!/bin/bash

# Script to copy workflows from the recovery branch

echo "Copying workflows from recovery/full-content-merge branch..."

# List of workflows to copy from recovery branch
RECOVERY_WORKFLOWS=(
    "actionlint.yml"
    "agent-of-agents-trigger.yml"
    "ai-trends-radar.yml"
    "automation-advertiser.yml"
    "ci-self-heal.yml"
    "ci.yml"
    "cloud-autonomous-orchestrator.yml"
    "codeql.yml"
    "commitlint.yml"
    "cursor-chat.yml"
    "docs-intelligence.yml"
    "front-scheduler.yml"
    "guardian-scheduler.yml"
    "instagram-marketing.yml"
    "knowledge-graph-radar.yml"
    "linkedin-marketing.yml"
    "linkedin-pro.yml"
    "media-optimizer.yml"
    "monetization.yml"
    "netlify-config.yml"
    "netlify-functions-trigger.yml"
    "readme-auto-advertiser.yml"
    "responsive-content.yml"
    "security-auto-heal.yml"
    "site-health-guardian.yml"
    "site-link.yml"
    "topics-and-clusters.yml"
    "ultra-rapid-sync.yml"
    "variation.yml"
    "venture.yml"
)

echo "Found ${#RECOVERY_WORKFLOWS[@]} workflows to copy"

# Copy each workflow
copied_count=0
for workflow in "${RECOVERY_WORKFLOWS[@]}"; do
    echo "Copying ${workflow}..."
    
    # Check if workflow already exists
    if [ -f ".github/workflows/${workflow}" ]; then
        echo "  ⚠️  ${workflow} already exists, skipping"
        continue
    fi
    
    # Copy from recovery branch
    if git show "recovery/full-content-merge:.github/workflows/${workflow}" > ".github/workflows/${workflow}" 2>/dev/null; then
        echo "  ✓ Copied ${workflow}"
        ((copied_count++))
    else
        echo "  ✗ Failed to copy ${workflow}"
    fi
done

echo ""
echo "Copy complete!"
echo "Copied ${copied_count} workflows from recovery branch"
echo "Current workflow count: $(find .github/workflows -name "*.yml" -not -path "*/backup-*" | wc -l)"
