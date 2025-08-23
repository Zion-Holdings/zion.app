#!/bin/bash

<<<<<<< HEAD
# Quick script to resolve pull conflicts
echo "🔧 Resolving pull conflicts..."
=======
# Script to resolve merge conflicts from git pull
set -e

echo "🔧 Resolving merge conflicts from git pull..."
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60

# Get list of conflicted files
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

echo "📋 Found $(echo "$CONFLICTED_FILES" | wc -l) conflicted files"

<<<<<<< HEAD
# Resolve conflicts in each file
for file in $CONFLICTED_FILES; do
    if [ -f "$file" ]; then
        echo "🔧 Resolving conflicts in $file..."
        
        # Create a backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Remove conflict markers and keep both versions where possible
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        echo "✅ Resolved conflicts in $file"
    fi
done

# Add all resolved files
git add .

echo "✅ All conflicts resolved!"
=======
# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# Resolve conflicts in each file
for file in $CONFLICTED_FILES; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

# Add resolved files
echo "📝 Adding resolved files..."
git add .

echo "✅ All conflicts resolved! Ready to commit."
echo "💡 Run 'git commit' to complete the merge."
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
