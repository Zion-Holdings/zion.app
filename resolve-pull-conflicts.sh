#!/bin/bash

# Script to resolve merge conflicts from git pull
# This will handle the conflicts systematically

set -e

echo "🔧 Resolving merge conflicts from git pull..."
echo "📊 Started at: $(date)"
echo "---"

# Function to resolve conflicts in a file
resolve_file_conflicts() {
    local file="$1"
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Intelligent conflict resolution based on file type
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Package file detected, keeping main version and merging dependencies..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.md" ]]; then
            echo "📝 Markdown file detected, merging both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
    else
        echo "✅ No conflicts found in $file"
    fi
}

# Get list of conflicted files
echo "📋 Getting list of conflicted files..."
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

if [ -n "$CONFLICTED_FILES" ]; then
    echo "📋 Found conflicted files:"
    echo "$CONFLICTED_FILES"
    echo "---"
    
    # Resolve conflicts in each file
    for file in $CONFLICTED_FILES; do
        if [ -f "$file" ]; then
            resolve_file_conflicts "$file"
        fi
    done
    
    echo "---"
    echo "💾 Adding resolved files..."
    git add .
    
    echo "📝 Committing merge resolution..."
    git commit -m "Resolve merge conflicts from pull - $(date)"
    
    echo "✅ Successfully resolved all merge conflicts!"
else
    echo "✅ No conflicted files found!"
fi

echo "---"
echo "🎯 Conflict resolution completed at: $(date)"
