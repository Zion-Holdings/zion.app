#!/bin/bash

# Simple script to check merge status and progress

echo "=== GitHub PR Merge Status Check ==="
echo ""

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Check if we're on a merge branch
if [[ "$CURRENT_BRANCH" == bulk-merge-* ]]; then
    echo "✓ Working on merge branch: $CURRENT_BRANCH"
else
    echo "⚠️  Not on a merge branch"
fi

echo ""

# Check total unmerged branches
TOTAL_UNMERGED=$(git branch -r --no-merged HEAD | grep -v "HEAD" | wc -l)
echo "Total unmerged branches: $TOTAL_UNMERGED"

# Check how many we've processed (commits ahead of main)
if [[ "$CURRENT_BRANCH" == bulk-merge-* ]]; then
    COMMITS_AHEAD=$(git log --oneline origin/main..HEAD | wc -l)
    echo "Branches processed in this session: $COMMITS_AHEAD"
    
    # Estimate progress
    if [ $TOTAL_UNMERGED -gt 0 ]; then
        PROGRESS_PERCENT=$(( (COMMITS_AHEAD * 100) / TOTAL_UNMERGED ))
        echo "Estimated progress: $PROGRESS_PERCENT%"
    fi
fi

echo ""

# Check git status
echo "=== Git Status ==="
git status --porcelain | head -20

if [ $(git status --porcelain | wc -l) -gt 20 ]; then
    echo "... and $(( $(git status --porcelain | wc -l) - 20 )) more files"
fi

echo ""

# Show recent commits
echo "=== Recent Commits ==="
git log --oneline -5

echo ""
echo "=== Next Steps ==="
echo "1. Continue merging: ./robust_merge.sh"
echo "2. Process next batch: ./bulk_merge_prs.sh"
echo "3. Check conflicts: git status"
echo "4. Merge to main when ready: git checkout main && git merge $CURRENT_BRANCH"