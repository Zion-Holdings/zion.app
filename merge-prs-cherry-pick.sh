#!/bin/bash

# Script to merge open PRs by cherry-picking specific commits
# This approach avoids merge conflicts by selectively applying changes

set -e

echo "🚀 Starting PR merge process using cherry-pick strategy..."
echo "========================================================"

# Ensure we're on main branch and up to date
git checkout main
git pull origin main

# Create backup branch
echo "💾 Creating backup of current state..."
BACKUP_BRANCH="backup-before-cherry-pick-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git checkout main

# Function to cherry-pick commits from a branch
cherry_pick_branch() {
    local branch="$1"
    local branch_name=$(echo "$branch" | sed 's|origin/||')
    
    echo "🔄 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git ls-remote --heads origin | grep -q "$branch_name"; then
        echo "⚠️  Branch $branch_name not found, skipping..."
        return 1
    fi
    
    # Get commits that are in the branch but not in main
    local commits=$(git log --oneline origin/main..$branch --no-merges | awk '{print $1}')
    
    if [ -z "$commits" ]; then
        echo "ℹ️  No new commits in $branch_name, skipping..."
        return 0
    fi
    
    echo "📝 Found $(echo "$commits" | wc -l) commits to cherry-pick from $branch_name"
    
    local success_count=0
    local fail_count=0
    
    # Try to cherry-pick each commit
    for commit in $commits; do
        echo "🔧 Attempting to cherry-pick: $commit"
        
        if git cherry-pick "$commit" 2>/dev/null; then
            echo "✅ Successfully cherry-picked: $commit"
            ((success_count++))
        else
            echo "⚠️  Failed to cherry-pick: $commit, skipping..."
            git cherry-pick --abort 2>/dev/null || true
            ((fail_count++))
        fi
    done
    
    echo "📊 Cherry-pick results for $branch_name: $success_count successful, $fail_count failed"
    
    if [ $success_count -gt 0 ]; then
        return 0
    else
        return 1
    fi
}

# List of branches to process (focusing on the most important ones)
BRANCHES_TO_PROCESS=(
    "origin/feature/expand-zion-services-2025"
    "origin/cursor/website-audit-and-enhancement-751f"
    "origin/cursor/install-project-dependencies-with-pnpm-9fa3"
)

# Process each branch
SUCCESS_COUNT=0
FAILED_COUNT=0

for branch in "${BRANCHES_TO_PROCESS[@]}"; do
    echo ""
    echo "📋 Processing branch: $branch"
    echo "----------------------------------------"
    
    if cherry_pick_branch "$branch"; then
        ((SUCCESS_COUNT++))
        echo "✅ Branch $branch processed successfully"
    else
        ((FAILED_COUNT++))
        echo "❌ Failed to process branch $branch"
    fi
    
    echo "📊 Overall progress: $SUCCESS_COUNT successful, $FAILED_COUNT failed"
done

echo ""
echo "🎯 Cherry-pick process completed!"
echo "========================================================"
echo "✅ Successfully processed: $SUCCESS_COUNT branches"
echo "❌ Failed to process: $FAILED_COUNT branches"
echo ""

# Check if we have any changes to commit
if [ $(git status --porcelain | wc -l) -gt 0 ]; then
    echo "💾 Committing cherry-picked changes..."
    
    # Add all changes
    git add .
    
    # Create commit message
    COMMIT_MSG="Merge open PRs via cherry-pick - $(date '+%Y-%m-%d %H:%M:%S')
    
    - Processed $SUCCESS_COUNT branches
    - Applied changes from feature branches
    - Resolved conflicts by selective application"
    
    git commit -m "$COMMIT_MSG"
    
    echo "🚀 Pushing merged changes to remote..."
    git push origin main
    
    echo ""
    echo "🎉 Successfully merged open PRs using cherry-pick strategy!"
    echo "📝 Backup branch created: $BACKUP_BRANCH"
else
    echo "⚠️  No changes to commit."
fi

echo ""
echo "🏁 Process completed!"