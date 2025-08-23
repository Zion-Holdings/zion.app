#!/bin/bash

echo "Step 1: Checking for merge conflicts in key branches..."

# Start from main
git checkout origin/main
git checkout -b conflict-resolution-main

# Check specific branches that we know have conflicts
branches_with_conflicts=(
    "fix-merge-conflict-in-next-build-5681"
    "fix-merge-conflict-in-nextjs-build-f246"
)

for branch in "${branches_with_conflicts[@]}"; do
    echo "Checking $branch..."
    git checkout -b "check-$branch" "origin/cursor/$branch"
    
    # Try to merge main
    if git merge origin/main --no-commit --no-ff 2>/dev/null; then
        echo "✅ No conflicts in $branch"
        git reset --hard HEAD
    else
        echo "⚠️  Conflicts found in $branch"
        # List conflicted files
        git diff --name-only --diff-filter=U
    fi
    
    git checkout conflict-resolution-main
    git branch -D "check-$branch"
done

echo "Step 1 complete. Check the output above for conflicts."