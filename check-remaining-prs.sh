#!/bin/bash

echo "🔍 Checking for remaining open PRs and conflicts..."

# Function to check a branch for conflicts
check_branch_conflicts() {
    local branch_name=$1
    local remote_branch="origin/cursor/$branch_name"
    
    echo "Checking $branch_name..."
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch_name" | grep -q "$branch_name"; then
        echo "  ⚠️  Branch not found, skipping..."
        return 0
    fi
    
    # Create test branch
    git checkout -b "test-$branch_name" "$remote_branch"
    
    # Try to merge main
    if git merge origin/main --no-commit --no-ff 2>/dev/null; then
        echo "  ✅ No conflicts - can merge directly"
        git reset --hard HEAD
        git checkout conflict-resolution-main
        
        # Merge this conflict-free branch
        git merge "test-$branch_name" --no-ff -m "Merge $branch_name (no conflicts)"
        
        git branch -D "test-$branch_name"
        return 0
    else
        echo "  ⚠️  Conflicts detected"
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        local can_auto_resolve=true
        
        for file in $conflicted_files; do
            echo "    🔧 Conflict in: $file"
            
            # Check if it's a deletion conflict (can auto-resolve)
            if ! git ls-files --error-unmatch "$file" --ignore-missing 2>/dev/null; then
                echo "      📁 File deleted in main - will remove"
                git rm "$file"
            else
                echo "      ⚠️  Manual resolution needed"
                can_auto_resolve=false
            fi
        done
        
        if [ "$can_auto_resolve" = true ]; then
            echo "  🔧 Auto-resolving conflicts..."
            git commit -m "Auto-resolve conflicts in $branch_name"
            
            # Merge resolved branch
            git checkout conflict-resolution-main
            git merge "test-$branch_name" --no-ff -m "Merge resolved $branch_name"
            
            git branch -D "test-$branch_name"
            echo "  ✅ Successfully resolved and merged $branch_name"
            return 0
        else
            echo "  ❌ Manual resolution needed for $branch_name"
            git merge --abort
            git checkout conflict-resolution-main
            git branch -D "test-$branch_name"
            return 1
        fi
    fi
}

# List of additional branches to check
additional_branches=(
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

echo "📋 Checking ${#additional_branches[@]} additional branches..."

# Track results
auto_resolved=()
manual_review_needed=()
no_conflicts=()

# Check each branch
for branch in "${additional_branches[@]}"; do
    if check_branch_conflicts "$branch"; then
        if git merge-base --is-ancestor "origin/cursor/$branch" origin/main 2>/dev/null; then
            no_conflicts+=("$branch")
        else
            auto_resolved+=("$branch")
        fi
    else
        manual_review_needed+=("$branch")
    fi
done

# Summary
echo ""
echo "📊 ADDITIONAL BRANCHES SUMMARY"
echo "=============================="
echo "✅ No conflicts (merged): ${#no_conflicts[@]}"
echo "🔧 Auto-resolved (merged): ${#auto_resolved[@]}"
echo "⚠️  Manual review needed: ${#manual_review_needed[@]}"
echo ""

if [ ${#no_conflicts[@]} -gt 0 ]; then
    echo "🎉 Branches merged without conflicts:"
    for branch in "${no_conflicts[@]}"; do
        echo "  - $branch"
    done
    echo ""
fi

if [ ${#auto_resolved[@]} -gt 0 ]; then
    echo "🔧 Branches auto-resolved and merged:"
    for branch in "${auto_resolved[@]}"; do
        echo "  - $branch"
    done
    echo ""
fi

if [ ${#manual_review_needed[@]} -gt 0 ]; then
    echo "⚠️  Branches requiring manual review:"
    for branch in "${manual_review_needed[@]}"; do
        echo "  - $branch"
    done
    echo ""
fi

echo "🚀 Pushing updated main branch..."
git push origin conflict-resolution-main:main

echo ""
echo "🎯 PROCESS COMPLETE!"
echo "Main branch updated with all auto-resolvable conflicts."
echo "Manual review needed for ${#manual_review_needed[@]} branches."