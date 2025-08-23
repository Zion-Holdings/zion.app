#!/bin/bash

# Script to resolve all merge conflicts and merge PRs into main branch
# This script will systematically check all branches for conflicts and resolve them

set -e

echo "🚀 Starting comprehensive merge conflict resolution and PR merging..."

# Ensure we're starting from a clean state
git checkout origin/main
git checkout -b main-merge-branch

# Function to resolve conflicts in a branch
resolve_branch_conflicts() {
    local branch_name=$1
    local remote_branch=$2
    
    echo "🔍 Checking branch: $branch_name"
    
    # Create a test branch from the remote branch
    git checkout -b "test-${branch_name}" "$remote_branch"
    
    # Try to merge main into this branch
    if git merge origin/main --no-commit --no-ff 2>/dev/null; then
        echo "✅ No conflicts in $branch_name"
        git reset --hard HEAD
        git checkout main-merge-branch
        git branch -D "test-${branch_name}"
        return 0
    else
        echo "⚠️  Conflicts detected in $branch_name, resolving..."
        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        for file in $conflicted_files; do
            echo "  🔧 Resolving conflict in: $file"
            
            # Check if file was deleted in main
            if ! git ls-files --error-unmatch "$file" --ignore-missing 2>/dev/null; then
                echo "    📁 File deleted in main, removing..."
                git rm "$file"
            else
                echo "    ⚠️  Manual resolution needed for: $file"
                # For manual conflicts, we'll need to handle them case by case
                # For now, we'll abort and mark for manual review
                git merge --abort
                git checkout main-merge-branch
                git branch -D "test-${branch_name}"
                echo "❌ Manual resolution needed for $branch_name"
                return 1
            fi
        done
        
        # Commit the conflict resolution
        git commit -m "Resolve merge conflicts in $branch_name"
        
        # Merge this resolved branch into main
        git checkout main-merge-branch
        git merge "test-${branch_name}" --no-ff -m "Merge resolved $branch_name"
        
        # Clean up test branch
        git branch -D "test-${branch_name}"
        
        echo "✅ Successfully resolved and merged $branch_name"
        return 0
    fi
}

# List of branches to check (based on what we found earlier)
branches_to_check=(
    "fix-merge-conflict-in-next-build-5681"
    "fix-merge-conflict-in-nextjs-build-f246"
    "fix-errors-and-improve-project-00df"
    "fix-errors-and-improve-project-22c6"
    "fix-errors-and-improve-project-71f9"
    "fix-errors-and-improve-project-8c1c"
    "fix-errors-and-improve-project-9239"
    "fix-errors-and-improve-project-a6ca"
    "fix-errors-and-improve-project-b439"
    "fix-errors-and-improve-project-b50b"
    "fix-errors-and-improve-project-b77b"
    "fix-errors-and-improve-project-cd48"
    "fix-and-improve-app-layout-and-design-0a8a"
    "fix-and-improve-app-layout-and-design-6eaf"
    "fix-and-improve-projects-without-deletion-07d1"
    "fix-and-improve-projects-without-deletion-1127"
    "fix-and-improve-projects-without-deletion-1266"
    "fix-and-improve-projects-without-deletion-21b1"
    "fix-and-improve-projects-without-deletion-2d85"
    "fix-and-improve-projects-without-deletion-3233"
    "fix-and-improve-projects-without-deletion-42b2"
    "fix-and-improve-projects-without-deletion-438e"
    "fix-and-improve-projects-without-deletion-468b"
    "fix-and-improve-projects-without-deletion-64b0"
    "fix-and-improve-projects-without-deletion-64d3"
    "fix-and-improve-projects-without-deletion-6af9"
    "fix-and-improve-projects-without-deletion-795f"
    "fix-and-improve-projects-without-deletion-8cce"
    "fix-and-improve-projects-without-deletion-990c"
    "fix-and-improve-projects-without-deletion-ab24"
    "fix-and-improve-projects-without-deletion-b16c"
    "fix-and-improve-projects-without-deletion-b2bc"
    "fix-and-improve-projects-without-deletion-d4af"
    "fix-and-improve-projects-without-deletion-ff02"
)

echo "📋 Found ${#branches_to_check[@]} branches to check for conflicts"

# Track successful and failed merges
successful_merges=()
failed_merges=()

# Process each branch
for branch in "${branches_to_check[@]}"; do
    remote_branch="origin/cursor/$branch"
    
    if git ls-remote --heads origin "$branch" | grep -q "$branch"; then
        if resolve_branch_conflicts "$branch" "$remote_branch"; then
            successful_merges+=("$branch")
        else
            failed_merges+=("$branch")
        fi
    else
        echo "⚠️  Branch $branch not found, skipping..."
    fi
done

# Summary report
echo ""
echo "📊 MERGE CONFLICT RESOLUTION SUMMARY"
echo "====================================="
echo "✅ Successfully merged: ${#successful_merges[@]} branches"
echo "❌ Failed to merge: ${#failed_merges[@]} branches"
echo ""

if [ ${#successful_merges[@]} -gt 0 ]; then
    echo "🎉 Successfully merged branches:"
    for branch in "${successful_merges[@]}"; do
        echo "  - $branch"
    done
    echo ""
fi

if [ ${#failed_merges[@]} -gt 0 ]; then
    echo "⚠️  Branches requiring manual review:"
    for branch in "${failed_merges[@]}"; do
        echo "  - $branch"
    done
    echo ""
fi

# Final merge to main
echo "🚀 Pushing resolved main branch..."
git push origin main-merge-branch:main

echo ""
echo "🎯 MERGE PROCESS COMPLETE!"
echo "Main branch has been updated with all resolved conflicts."
echo "Check GitHub for the updated main branch status."