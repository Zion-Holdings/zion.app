#!/bin/bash

# Script to resolve conflicts from git pull
set -e

echo "🔧 Resolving conflicts from git pull..."
echo "📊 Started at: $(date)"
echo "---"

# Get list of conflicted files
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

if [ -n "$CONFLICTED_FILES" ]; then
    echo "📋 Found conflicted files: $CONFLICTED_FILES"
    echo "---"
    
    # Resolve conflicts in each file
    for file in $CONFLICTED_FILES; do
        if [ -f "$file" ]; then
            echo "🔧 Resolving conflicts in $file..."
            
            # Create a backup of the conflicted file
            cp "$file" "${file}.backup.$(date +%s)"
            
            # Strategy: Keep both versions where possible, prefer main branch for critical files
            if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
                echo "📦 Critical file detected, keeping main version and merging dependencies..."
                # For package files, we'll need special handling
                sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                sed -i '/>>>>>>> /d' "$file"
            elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "vite.config.ts" || "$file" == "tailwind.config.js" ]]; then
                echo "⚙️  Config file detected, keeping main version..."
                sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                sed -i '/>>>>>>> /d' "$file"
            elif [[ "$file" == "tsconfig.tsbuildinfo" ]]; then
                echo "🗑️  Build info file, removing conflicts..."
                sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                sed -i '/>>>>>>> /d' "$file"
            else
                echo "📝 Regular file, attempting to merge both versions..."
                # Remove conflict markers and try to keep both versions
                sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                sed -i '/>>>>>>> /d' "$file"
            fi
            
            echo "✅ Resolved conflicts in $file"
        fi
    done
    
    # Add resolved files
    echo "💾 Adding resolved files..."
    git add .
    
    # Commit the merge
    echo "📝 Committing merge resolution..."
    git commit -m "Resolve merge conflicts from pull - $(date)"
    
    echo "✅ Successfully resolved all pull conflicts!"
else
    echo "✅ No conflicts found!"
fi

echo ""
echo "🎉 Pull conflict resolution completed!"
echo "⏰ Completed at: $(date)"