#!/bin/bash

# Script to recover all deleted workflows from the last 24 hours
# This script checks multiple branches and time periods to find missing workflows

echo "Starting comprehensive workflow recovery from the last 24 hours..."

# Create a directory for recovered workflows
mkdir -p .github/workflows/recovered

# Get current timestamp and 24 hours ago
CURRENT_TIME=$(date +%s)
TWENTY_FOUR_HOURS_AGO=$((CURRENT_TIME - 86400))

echo "Current time: $(date)"
echo "Looking for workflows deleted in the last 24 hours..."

# List of branches to check for workflows
BRANCHES_TO_CHECK=(
    "recovery/full-content-merge"
    "chore/fix-ai-it-ads-sync"
    "cloud/agents-setup"
    "feat/cloud-ai-innovation"
    "fix/ai-it-innovations-factory"
    "fix/netlify-front-link"
    "fix/playwright-node-options"
)

# List of workflows that were deleted (from our earlier analysis)
DELETED_WORKFLOWS=(
    "accessibility-audit.yml"
    "actionlint.yml"
    "actions-keepalive.yml"
    "ai-changelog.yml"
    "ai-content-autonomy.yml"
    "ai-content-factory.yml"
    "ai-it-ads-sync.yml"
    "ai-it-innovations.yml"
    "ai-it-multi-factory.yml"
    "ai-it-ultrafast-sync.yml"
    "ai-research-scout.yml"
    "ai-trends-radar.yml"
    "app-automation.yml"
    "app-monitoring.yml"
    "auto-fix.yml"
    "auto-heal-workflows.yml"
    "auto-media-release.yml"
    "auto-pr-automerge.yml"
    "auto-pr-cursor-branches.yml"
    "auto-semver-release.yml"
    "auto-update-prs.yml"
    "automation-advertiser.yml"
    "automation-cleanup.yml"
    "automation-dashboard.yml"
    "automation-guardian-10min.yml"
    "automation-orchestrator.yml"
    "automations.yml"
    "autonomous-agent-orchestrator.yml"
    "autonomous-auto-discovery.yml"
    "autonomous-auto-merge-to-main.yml"
    "autonomous-cloud-automations.yml"
    "autonomous-cloud-fast.yml"
    "autonomous-cloud-runner.yml"
    "autonomous-cloud.yml"
    "autonomous-content-curation.yml"
    "autonomous-content-scanner.yml"
    "autonomous-deep-maintenance.yml"
    "autonomous-deps-upgrade.yml"
    "autonomous-external-links.yml"
    "autonomous-image-optimizer.yml"
    "autonomous-intelligence.yml"
    "autonomous-keepalive.yml"
    "autonomous-lighthouse.yml"
    "autonomous-marketing-seo.yml"
    "autonomous-minute-orchestrator.yml"
    "autonomous-quick-fixes.yml"
    "autonomous-release.yml"
    "autonomous-self-tune.yml"
    "autonomous-ultrafast.yml"
    "autonomous-workflow-cleanup.yml"
    "autonomous-workflow-watchdog.yml"
    "branch-cleanup.yml"
    "branch-pruner.yml"
    "broken-images.yml"
    "ci-auto-heal.yml"
    "ci-merge-main.yml"
    "ci-quality.yml"
    "cleanup-merged-branches.yml"
    "cloud-agents-fast.yml"
    "cloud-agents.yml"
    "cloud-autonomous-orchestrator.yml"
    "cloud-deep-research.yml"
    "cloud-orchestrator-plus.yml"
    "codeql-analysis.yml"
    "codeql.yml"
    "commit-message-lint.yml"
    "commitlint.yml"
    "components-size-report.yml"
    "content-generation.yml"
    "crawl-normalize.yml"
    "cursor-chat.yml"
    "dead-code-report.yml"
    "dependabot-auto-approve.yml"
    "dependency-auto-upgrade.yml"
    "dependency-management.yml"
    "docs-autogen.yml"
    "docs-intelligence.yml"
    "emergency-fix.yml"
    "ephemeral-branch-autorebase.yml"
    "exponential-agent-factory-proliferation.yml"
    "external-links.yml"
    "fast-auto-push-to-main.yml"
    "fast-lint-sync.yml"
    "front-scheduler.yml"
    "git-ultrafast-sync.yml"
    "guardian-scheduler.yml"
    "homepage-auto-advertiser.yml"
    "homepage-auto-update.yml"
    "instagram-marketing.yml"
    "intelligent-content-generation.yml"
    "knowledge-graph-radar.yml"
    "labeler.yml"
    "lighthouse-budgets.yml"
    "lighthouse-live.yml"
    "link-auto-fix.yml"
    "link-scan-hourly.yml"
    "linkedin-marketing.yml"
    "linkedin-pro.yml"
    "marketing-sync.yml"
    "media-optimizer.yml"
    "monetization.yml"
    "netlify-auto-healer.yml"
    "netlify-automation.yml"
    "netlify-config.yml"
    "og-image-refresh.yml"
    "og-image-update.yml"
    "optimize-images.yml"
    "pa11y.yml"
    "performance-audit.yml"
    "performance-monitoring.yml"
    "pin-actions-weekly.yml"
    "pr-auto-curator.yml"
    "pr-quality-gate.yml"
    "pr-size-labeler.yml"
    "pr-smoke.yml"
    "pr-update-with-main.yml"
    "rapid-git-sync.yml"
    "readme-auto-advertiser.yml"
    "readme-autogen.yml"
    "release-drafter.yml"
    "repo-knowledge-graph.yml"
    "repo-radar.yml"
    "responsive-content.yml"
    "search-index-autogen.yml"
    "security-audit.yml"
    "security-auto-heal.yml"
    "security-gates.yml"
    "security-scan.yml"
    "security-weekly.yml"
    "self-healing-build.yml"
    "self-replicating-factory-manager.yml"
    "seo-audit.yml"
    "seo-validator.yml"
    "site-health-guardian.yml"
    "site-link.yml"
    "sitemap-and-search.yml"
    "sitemap-auto-commit.yml"
    "sitemap-daily.yml"
    "stale.yml"
    "test-auth.yml"
    "todo-issue-sync.yml"
    "topics-and-clusters.yml"
    "ultra-rapid-sync.yml"
    "unused-deps-cleaner.yml"
    "unused-exports-report.yml"
    "variation.yml"
    "venture.yml"
    "workflow-health-monitor.yml"
    "workflow-radar.yml"
    "workflow-supervisor.yml"
    "workflow-watchdog.yml"
    "yaml-auto-fixer-simple.yml"
    "yaml-auto-fixer.yml"
)

echo "Found ${#DELETED_WORKFLOWS[@]} workflows that were deleted"

# Function to recover a workflow from a specific branch
recover_workflow_from_branch() {
    local workflow=$1
    local branch=$2
    local target_path=".github/workflows/recovered/${workflow}"
    
    # Check if workflow already exists in current directory
    if [ -f ".github/workflows/${workflow}" ]; then
        return 0
    fi
    
    # Check if workflow already exists in recovered directory
    if [ -f "${target_path}" ]; then
        return 0
    fi
    
    # Try to get the workflow from the branch
    if git show "${branch}:.github/workflows/${workflow}" > "${target_path}" 2>/dev/null; then
        echo "  ✓ Recovered ${workflow} from ${branch}"
        return 0
    else
        return 1
    fi
}

# Function to recover a workflow from git history (last 24 hours)
recover_workflow_from_history() {
    local workflow=$1
    local target_path=".github/workflows/recovered/${workflow}"
    
    # Check if workflow already exists
    if [ -f ".github/workflows/${workflow}" ] || [ -f "${target_path}" ]; then
        return 0
    fi
    
    # Try to find the workflow in git history from the last 24 hours
    local commit_hash=$(git log --since="24 hours ago" --oneline --name-only --diff-filter=D | grep -B1 "${workflow}" | head -1 | awk '{print $1}')
    
    if [ -n "$commit_hash" ]; then
        # Try to get the workflow from the commit before it was deleted
        if git show "${commit_hash}~1:.github/workflows/${workflow}" > "${target_path}" 2>/dev/null; then
            echo "  ✓ Recovered ${workflow} from git history (commit ${commit_hash})"
            return 0
        fi
    fi
    
    return 1
}

# Recover workflows from branches
echo ""
echo "Recovering workflows from branches..."
branch_recovered=0
for workflow in "${DELETED_WORKFLOWS[@]}"; do
    for branch in "${BRANCHES_TO_CHECK[@]}"; do
        if recover_workflow_from_branch "$workflow" "$branch"; then
            ((branch_recovered++))
            break
        fi
    done
done

# Recover workflows from git history
echo ""
echo "Recovering workflows from git history (last 24 hours)..."
history_recovered=0
for workflow in "${DELETED_WORKFLOWS[@]}"; do
    if recover_workflow_from_history "$workflow"; then
        ((history_recovered++))
    fi
done

# Move recovered workflows to main workflows directory
echo ""
echo "Moving recovered workflows to main workflows directory..."
mv .github/workflows/recovered/*.yml .github/workflows/ 2>/dev/null || true

# Clean up
rmdir .github/workflows/recovered 2>/dev/null || true

echo ""
echo "Recovery complete!"
echo "Recovered ${branch_recovered} workflows from branches"
echo "Recovered ${history_recovered} workflows from git history"
echo "Total recovered: $((branch_recovered + history_recovered))"
echo "Current workflow count: $(find .github/workflows -name "*.yml" -not -path "*/backup-*" | wc -l)"

# Show summary of what was recovered
echo ""
echo "Recovery Summary:"
echo "================="
if [ $((branch_recovered + history_recovered)) -gt 0 ]; then
    echo "Successfully recovered workflows from the last 24 hours!"
else
    echo "No workflows were recovered from the last 24 hours."
    echo "This might mean the workflows were deleted earlier than 24 hours ago."
fi
