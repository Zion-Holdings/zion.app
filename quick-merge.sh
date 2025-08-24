#!/bin/bash

# Quick merge script - processes just a few branches at a time

set -e

echo "Starting quick merge of open pull requests..."
echo "=================================================="

# Ensure we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Get just 5 recent branches
echo "Fetching 5 most recent branches..."
git fetch --all

RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/ | grep -v "origin/main" | grep -v "backup" | head -5)

echo "Processing 5 recent branches:"
echo "$RECENT_BRANCHES"
echo ""

# Counter
SUCCESSFUL=0
FAILED=0

# Process each branch
while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        branch_name=$(echo "$branch" | sed 's/origin\///')
        echo "Processing: $branch_name"
        
        # Create temp branch
        temp_branch="temp-$(date +%s)-$branch_name"
        
        # Try to checkout
        if git checkout -b "$temp_branch" "origin/$branch_name" 2>/dev/null; then
            echo "  ✅ Checked out $branch_name"
            
            # Try to merge with main
            if git merge main --no-edit --no-ff 2>/dev/null; then
                echo "  ✅ Merged with main"
                
                # Switch back to main and merge
                git checkout main
                if git merge "$temp_branch" --no-edit --no-ff 2>/dev/null; then
                    echo "  ✅ Merged into main"
                    
                    # Clean up
                    git branch -D "$temp_branch"
                    
                    # Try to push
                    if git push origin main 2>/dev/null; then
                        echo "  ✅ Pushed to origin/main"
                        SUCCESSFUL=$((SUCCESSFUL + 1))
                    else
                        echo "  ⚠️  Failed to push"
                        FAILED=$((FAILED + 1))
                    fi
                else
                    echo "  ❌ Failed to merge into main"
                    git merge --abort 2>/dev/null || true
                    git checkout main
                    git branch -D "$temp_branch" 2>/dev/null || true
                    FAILED=$((FAILED + 1))
                fi
            else
                echo "  ⚠️  Merge conflict, resolving..."
                
                # Resolve conflicts by taking incoming changes
                git checkout --theirs . 2>/dev/null || true
                git add . 2>/dev/null || true
                
                if git commit -m "Resolve conflicts for $branch_name" 2>/dev/null; then
                    echo "  ✅ Conflicts resolved"
                    
                    # Switch back to main and merge
                    git checkout main
                    if git merge "$temp_branch" --no-edit --no-ff 2>/dev/null; then
                        echo "  ✅ Merged resolved conflicts into main"
                        
                        # Clean up and push
                        git branch -D "$temp_branch"
                        if git push origin main 2>/dev/null; then
                            echo "  ✅ Pushed to origin/main"
                            SUCCESSFUL=$((SUCCESSFUL + 1))
                        else
                            echo "  ⚠️  Failed to push"
                            FAILED=$((FAILED + 1))
                        fi
                    else
                        echo "  ❌ Failed to merge resolved conflicts"
                        git merge --abort 2>/dev/null || true
                        git checkout main
                        git branch -D "$temp_branch" 2>/dev/null || true
                        FAILED=$((FAILED + 1))
                    fi
                else
                    echo "  ❌ Failed to commit resolved conflicts"
                    git checkout main
                    git branch -D "$temp_branch" 2>/dev/null || true
                    FAILED=$((FAILED + 1))
                fi
            fi
        else
            echo "  ❌ Failed to checkout $branch_name"
            FAILED=$((FAILED + 1))
        fi
        
        echo ""
    fi
done <<< "$RECENT_BRANCHES"

echo "=================================================="
echo "Quick merge completed!"
echo "Successful: $SUCCESSFUL"
echo "Failed: $FAILED"
echo "=================================================="

# Clean up temp branches
echo "Cleaning up..."
git branch | grep "temp-" | xargs -r git branch -D

echo "Done!"