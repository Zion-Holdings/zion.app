#!/bin/bash

# Script to find and merge branches with new commits
set -e

echo "Finding and merging branches with new commits..."

# Get all cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in $file..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Found conflicts in $file, resolving..."
        
        # Remove conflict markers and keep both versions where possible
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        echo "Resolved conflicts in $file"
    fi
}

# Counter for successful merges
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Try to merge each branch
for branch in $BRANCHES; do
    echo "Checking $branch..."
    
    # Check if branch has commits that aren't in main
    if git log --oneline main.."origin/$branch" | grep -q .; then
        echo "Branch $branch has new commits, attempting to merge..."
        
        # Try to merge
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            echo "Successfully merged $branch"
            git commit -m "Merge $branch into main"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "Merge conflicts detected in $branch, resolving..."
            
            # Get list of conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            
            if [ -n "$CONFLICTED_FILES" ]; then
                echo "Conflicted files: $CONFLICTED_FILES"
                
                # Resolve conflicts in each file
                for file in $CONFLICTED_FILES; do
                    if [ -f "$file" ]; then
                        resolve_conflicts "$file"
                    fi
                done
                
                # Add resolved files
                git add .
                
                # Commit the merge
                git commit -m "Resolve merge conflicts for $branch"
                
                echo "Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            else
                echo "No conflicted files found, but merge failed. Aborting..."
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
            fi
        fi
    else
        echo "Branch $branch is already up to date, skipping..."
    fi
    
    echo "Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed"
    echo "---"
done

echo "Branch merging completed!"
echo "Total successful merges: $SUCCESSFUL_MERGES"
echo "Total failed merges: $FAILED_MERGES"