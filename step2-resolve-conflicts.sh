#!/bin/bash

echo "Step 2: Resolving merge conflicts..."

# Start from our conflict resolution branch
git checkout conflict-resolution-main

# Resolve conflicts in the first branch
echo "Resolving conflicts in fix-merge-conflict-in-next-build-5681..."
git checkout -b resolve-branch-1 "origin/cursor/fix-merge-conflict-in-next-build-5681"

# Merge main to trigger conflicts
git merge origin/main --no-commit --no-ff

# Resolve the known conflict
echo "Removing deleted file: pages/main/front/index.tsx"
git rm pages/main/front/index.tsx

# Commit the resolution
git commit -m "Resolve merge conflict: remove deleted pages/main/front/index.tsx"

# Now merge this resolved branch into main
git checkout conflict-resolution-main
git merge resolve-branch-1 --no-ff -m "Merge resolved fix-merge-conflict-in-next-build-5681"

# Clean up
git branch -D resolve-branch-1

echo "Step 2 complete. First branch resolved and merged."