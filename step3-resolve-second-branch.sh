#!/bin/bash

echo "Step 3: Resolving conflicts in second branch..."

# Continue from our conflict resolution branch
git checkout conflict-resolution-main

# Resolve conflicts in the second branch
echo "Resolving conflicts in fix-merge-conflict-in-nextjs-build-f246..."
git checkout -b resolve-branch-2 "origin/cursor/fix-merge-conflict-in-nextjs-build-f246"

# Merge main to trigger conflicts
git merge origin/main --no-commit --no-ff

# Resolve the known conflicts
echo "Removing deleted files:"
echo "  - automation/front-index-advertiser.cjs"
echo "  - netlify/functions/front-enhancer.js"
echo "  - pages/main/front/index.tsx"

git rm automation/front-index-advertiser.cjs
git rm netlify/functions/front-enhancer.js
git rm pages/main/front/index.tsx

# Commit the resolution
git commit -m "Resolve merge conflicts: remove deleted files from main branch"

# Now merge this resolved branch into main
git checkout conflict-resolution-main
git merge resolve-branch-2 --no-ff -m "Merge resolved fix-merge-conflict-in-nextjs-build-f246"

# Clean up
git branch -D resolve-branch-2

echo "Step 3 complete. Second branch resolved and merged."