#!/bin/bash

# Script to recover all deleted workflows from the automation-futuristic-front branch
# This will restore the workflows that were accidentally deleted

echo "🔄 Recovering Deleted Workflows"
echo "==============================="
echo "Recovering workflows from automation-futuristic-front branch"
echo ""

RECOVERY_BRANCH="remotes/origin/chore/automation-futuristic-front"
WORKFLOWS_DIR=".github/workflows"
RECOVERED_COUNT=0

# Create backup of current workflows
BACKUP_DIR=".github/workflows/backup-before-recovery-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📁 Creating backup of current workflows in: $BACKUP_DIR"
cp .github/workflows/*.yml "$BACKUP_DIR/" 2>/dev/null || true

# Function to recover a workflow
recover_workflow() {
    local workflow_name="$1"
    local source_path="$RECOVERY_BRANCH:.github/workflows/$workflow_name"
    
    echo "🔄 Recovering: $workflow_name"
    
    # Check if workflow exists in the recovery branch
    if git show "$source_path" >/dev/null 2>&1; then
        # Recover the workflow
        git show "$source_path" > "$WORKFLOWS_DIR/$workflow_name"
        
        if [ $? -eq 0 ]; then
            echo "  ✅ Successfully recovered: $workflow_name"
            ((RECOVERED_COUNT++))
        else
            echo "  ❌ Failed to recover: $workflow_name"
        fi
    else
        echo "  ⚠️  Workflow not found in recovery branch: $workflow_name"
    fi
}

# List of workflows to recover (based on what we found in the branch)
WORKFLOWS_TO_RECOVER=(
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
    "auto-heal-workflows.yml"
    "auto-media-release.yml"
    "auto-pr-automerge.yml"
    "auto-pr-cursor-branches.yml"
    "auto-semver-release.yml"
    "cloud-agents-fast.yml"
    "cloud-agents.yml"
    "cloud-autonomous-orchestrator.yml"
    "continuous-improvement.yml"
    "cursor-rules-autoupdate.yml"
    "diverse-agent-matrix.yml"
    "exponential-agent-factory-proliferation.yml"
    "frontend-sync-continuous.yml"
    "git-health.yml"
    "git-ultrafast-sync.yml"
    "homepage-auto-advertiser.yml"
    "homepage-auto-update.yml"
    "infinite-improvement-loop.yml"
    "instagram-marketing.yml"
    "instagram-six-hourly.yml"
    "intelligent-content-generation.yml"
    "knowledge-graph-radar.yml"
    "lighthouse-budgets.yml"
    "lighthouse-live.yml"
    "link-auto-fix.yml"
    "link-scan-hourly.yml"
    "linkedin-marketing.yml"
    "linkedin-pro.yml"
    "marketing-daily.yml"
    "marketing-sync.yml"
    "media-optimizer.yml"
    "merge-conflict-guard.yml"
    "monetization-continuous.yml"
    "monetization-daily.yml"
    "netlify-automation.yml"
    "netlify-auto-healer.yml"
    "netlify-config.yml"
    "netlify-functions-trigger.yml"
    "netlify-monitor.yml"
    "og-image-refresh.yml"
    "og-image-update.yml"
    "optimize-images.yml"
    "pa11y.yml"
    "performance-audit.yml"
    "performance-monitoring.yml"
    "performance-weekly.yml"
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
    "revenue-ideas-daily.yml"
    "search-index-autogen.yml"
    "seo-audit.yml"
    "seo-validator.yml"
    "security-audit.yml"
    "security-auto-heal.yml"
    "security-gates.yml"
    "security-scan.yml"
    "security-weekly.yml"
    "self-healing-build.yml"
    "self-replicating-factory-manager.yml"
    "sitemap-and-search.yml"
    "sitemap-auto-commit.yml"
    "sitemap-daily.yml"
    "site-health-guardian.yml"
    "site-link.yml"
    "stale.yml"
    "sync-health.yml"
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
    "yaml-auto-fixer.yml"
    "yaml-auto-fixer-simple.yml"
    "yaml-validator.yml"
)

echo "📋 Found $(echo "${WORKFLOWS_TO_RECOVER[@]}" | wc -w) workflows to recover"
echo ""

# Recover each workflow
for workflow in "${WORKFLOWS_TO_RECOVER[@]}"; do
    recover_workflow "$workflow"
done

echo ""
echo "🎉 Workflow recovery completed!"
echo "📊 Summary:"
echo "   - Workflows recovered: $RECOVERED_COUNT"
echo "   - Backup created in: $BACKUP_DIR"
echo ""
echo "💡 Next steps:"
echo "   1. Review recovered workflows"
echo "   2. Run validation script to check for issues"
echo "   3. Fix any remaining issues"
echo "   4. Test workflows if needed"
echo ""
echo "🔍 To check the results, run:"
echo "   bash validate-workflows-comprehensive.sh"
