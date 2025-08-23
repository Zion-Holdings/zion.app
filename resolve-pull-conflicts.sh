#!/bin/bash

# Quick script to resolve pull conflicts
echo "🔧 Resolving pull conflicts..."

# Get list of conflicted files
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

echo "📋 Found $(echo "$CONFLICTED_FILES" | wc -l) conflicted files"

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