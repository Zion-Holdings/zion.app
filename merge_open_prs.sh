#!/bin/bash

# Script to merge open pull requests and resolve conflicts
# This script will attempt to merge multiple branches and handle conflicts

set -e

echo "Starting merge process for open pull requests..."

# Get list of unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged HEAD | grep -v "HEAD" | head -50)

# Create a temporary branch for merging
MERGE_BRANCH="bulk-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_BRANCHES=()

echo "Created merge branch: $MERGE_BRANCH"
echo "Attempting to merge branches..."

for branch in $UNMERGED_BRANCHES; do
    echo "Processing branch: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "✓ Successfully merged $branch"
        ((SUCCESSFUL_MERGES++))
    else
        echo "✗ Failed to merge $branch - conflicts detected"
        ((FAILED_MERGES++))
        CONFLICT_BRANCHES+=("$branch")
        
        # Abort the merge and continue with next branch
        git merge --abort
    fi
done

echo ""
echo "=== Merge Summary ==="
echo "Successful merges: $SUCCESSFUL_MERGES"
echo "Failed merges: $FAILED_MERGES"
echo "Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES))"

if [ ${#CONFLICT_BRANCHES[@]} -gt 0 ]; then
    echo ""
    echo "Branches with conflicts:"
    for branch in "${CONFLICT_BRANCHES[@]}"; do
        echo "  - $branch"
    done
fi

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"
echo "To continue resolving conflicts: git status"