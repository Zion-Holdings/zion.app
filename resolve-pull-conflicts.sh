#!/bin/bash

# Script to resolve conflicts from git pull
set -e

echo "Resolving conflicts from git pull..."

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

# Get list of conflicted files
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

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
git commit -m "Resolve conflicts from git pull"

echo "Successfully resolved all conflicts from git pull!"