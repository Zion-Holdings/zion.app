#!/bin/bash

# Script to recover deleted GitHub Actions workflows
# This script recovers workflows that were accidentally deleted

echo "Starting workflow recovery process..."

# Create a directory for recovered workflows
mkdir -p .github/workflows/recovered

# List of important workflows to recover (excluding agent-specific ones)
IMPORTANT_WORKFLOWS=(
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

echo "Found ${#IMPORTANT_WORKFLOWS[@]} important workflows to recover"

# Function to recover a workflow
recover_workflow() {
    local workflow=$1
    local target_path=".github/workflows/recovered/${workflow}"
    
    echo "Recovering ${workflow}..."
    
    # Try to find the workflow in git history
    if git show HEAD~1:.github/workflows/${workflow} > "${target_path}" 2>/dev/null; then
        echo "  ✓ Recovered from HEAD~1"
        return 0
    elif git show HEAD~2:.github/workflows/${workflow} > "${target_path}" 2>/dev/null; then
        echo "  ✓ Recovered from HEAD~2"
        return 0
    elif git show HEAD~5:.github/workflows/${workflow} > "${target_path}" 2>/dev/null; then
        echo "  ✓ Recovered from HEAD~5"
        return 0
    elif git show HEAD~10:.github/workflows/${workflow} > "${target_path}" 2>/dev/null; then
        echo "  ✓ Recovered from HEAD~10"
        return 0
    else
        echo "  ✗ Could not recover ${workflow}"
        return 1
    fi
}

# Recover workflows
recovered_count=0
for workflow in "${IMPORTANT_WORKFLOWS[@]}"; do
    if recover_workflow "$workflow"; then
        ((recovered_count++))
    fi
done

echo ""
echo "Recovery complete!"
echo "Recovered ${recovered_count} workflows out of ${#IMPORTANT_WORKFLOWS[@]} attempted"
echo "Recovered workflows are in .github/workflows/recovered/"

# Move recovered workflows to main workflows directory
echo "Moving recovered workflows to main workflows directory..."
mv .github/workflows/recovered/*.yml .github/workflows/ 2>/dev/null || true

# Clean up
rmdir .github/workflows/recovered 2>/dev/null || true

echo "All recovered workflows have been moved to .github/workflows/"
echo "Current workflow count: $(find .github/workflows -name "*.yml" -not -path "*/backup-*" | wc -l)"
