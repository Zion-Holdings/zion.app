#!/bin/bash

# Bulk merge all open PRs with intelligent conflict resolution
# This script will attempt to merge all unmerged branches systematically

set -e

echo "Starting bulk merge of all open PRs..."

# Get list of all unmerged branches, excluding backup and test branches
UNMERGED_BRANCHES=$(git branch -r --no-merged HEAD | grep -v "dependabot" | grep -v "backup" | grep -v "test-backup" | grep -v "merge-backup" | grep -v "comprehensive-merge-backup" | grep -v "streamlined-backup")

# Create a comprehensive merge branch
MERGE_BRANCH="bulk-merge-all-prs-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)

echo "Created merge branch: $MERGE_BRANCH"
echo "Total branches to process: $TOTAL_BRANCHES"
echo "Starting merge process..."

# Process each branch
for branch in $UNMERGED_BRANCHES; do
    echo ""
    echo "=== Processing branch $((++PROCESSED))/$TOTAL_BRANCHES: $branch ==="
    
    # Check commit count
    COMMIT_COUNT=$(git log --oneline HEAD.."$branch" 2>/dev/null | wc -l || echo "0")
    echo "Commits ahead: $COMMIT_COUNT"
    
    # Skip branches with too many commits
    if [ "$COMMIT_COUNT" -gt 100 ]; then
        echo "⚠️  Skipping $branch - too many commits ($COMMIT_COUNT)"
        ((SKIPPED_BRANCHES++))
        continue
    fi
    
    # Try to merge with different strategies
    MERGE_SUCCESS=false
    
    # Strategy 1: Try merge with theirs strategy
    echo "Trying merge with 'theirs' strategy..."
    if git merge "$branch" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
        echo "✓ Successfully merged $branch (theirs strategy)"
        ((SUCCESSFUL_MERGES++))
        MERGE_SUCCESS=true
    else
        # Strategy 2: Try with ours strategy
        echo "Trying merge with 'ours' strategy..."
        git merge --abort 2>/dev/null || true
        if git merge "$branch" --no-edit --strategy=recursive -X ours 2>/dev/null; then
            echo "✓ Successfully merged $branch (ours strategy)"
            ((SUCCESSFUL_MERGES++))
            MERGE_SUCCESS=true
        else
            # Strategy 3: Try cherry-pick
            git merge --abort 2>/dev/null || true
            echo "Trying cherry-pick approach..."
            
            COMMITS=$(git log --oneline HEAD.."$branch" 2>/dev/null | awk '{print $1}' | tac)
            CHERRY_SUCCESS=true
            
            for commit in $COMMITS; do
                if ! git cherry-pick "$commit" --no-edit 2>/dev/null; then
                    echo "Cherry-pick failed for commit $commit, aborting..."
                    git cherry-pick --abort 2>/dev/null || true
                    CHERRY_SUCCESS=false
                    break
                fi
            done
            
            if [ "$CHERRY_SUCCESS" = true ]; then
                echo "✓ Successfully cherry-picked $branch"
                ((SUCCESSFUL_MERGES++))
                MERGE_SUCCESS=true
            else
                echo "✗ All merge strategies failed for $branch"
                ((FAILED_MERGES++))
            fi
        fi
    fi
    
    if [ "$MERGE_SUCCESS" = true ]; then
        echo "Branch $branch processed successfully"
    fi
    
    # Progress update
    echo "Progress: $PROCESSED/$TOTAL_BRANCHES branches processed"
done

echo ""
echo "=== Bulk Merge Summary ==="
echo "Total branches: $TOTAL_BRANCHES"
echo "Successful merges: $SUCCESSFUL_MERGES"
echo "Failed merges: $FAILED_MERGES"
echo "Skipped branches: $SKIPPED_BRANCHES"
echo "Success rate: $((SUCCESSFUL_MERGES * 100 / TOTAL_BRANCHES))%"

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"
echo "To push this branch: git push origin $MERGE_BRANCH"
echo "To check status: git status"