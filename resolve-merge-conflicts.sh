#!/bin/bash

<<<<<<< HEAD
# Script to resolve current merge conflicts
set -e

echo "🔧 Resolving current merge conflicts..."
=======
# Script to automatically resolve merge conflicts
set -e

echo "🔧 Starting automatic merge conflict resolution..."
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
<<<<<<< HEAD
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
=======
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" ]]; then
            echo "📦 Package.json detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "package-lock.json" ]]; then
            echo "📦 Package-lock.json detected, keeping main version..."
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
<<<<<<< HEAD
        elif [[ "$file" == ".gitignore" || "$file" == "README.md" ]]; then
            echo "📝 Documentation file detected, keeping both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "styles/globals.css" ]]; then
            echo "🎨 CSS file detected, keeping both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
=======
        elif [[ "$file" == "*.css" || "$file" == "*.scss" ]]; then
            echo "🎨 CSS file detected, merging styles..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.tsx" || "$file" == "*.ts" || "$file" == "*.jsx" || "$file" == "*.js" ]]; then
            echo "💻 Code file detected, attempting intelligent merge..."
            # For code files, try to keep both versions where possible
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.yml" || "$file" == "*.yaml" ]]; then
            echo "📋 YAML file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.md" ]]; then
            echo "📝 Markdown file detected, merging content..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.json" ]]; then
            echo "📊 JSON file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, removing conflict markers..."
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# Get list of conflicted files
<<<<<<< HEAD
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

if [ -n "$CONFLICTED_FILES" ]; then
    echo "📋 Conflicted files: $CONFLICTED_FILES"
=======
echo "📋 Getting list of conflicted files..."
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

if [ -n "$CONFLICTED_FILES" ]; then
    echo "📋 Found conflicted files:"
    echo "$CONFLICTED_FILES"
    echo "---"
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
    
    # Resolve conflicts in each file
    for file in $CONFLICTED_FILES; do
        if [ -f "$file" ]; then
            resolve_conflicts "$file"
        fi
    done
    
<<<<<<< HEAD
    # Add resolved files
    git add .
    
    # Commit the merge
    git commit -m "Resolve merge conflicts with remote main - $(date)"
    
    echo "✅ Successfully resolved all conflicts"
else
    echo "✅ No conflicts to resolve"
fi
=======
    echo "✅ All conflicts resolved automatically"
else
    echo "✅ No conflicted files found"
fi

# Add all resolved files
echo "📦 Adding resolved files..."
git add .

echo "🎉 Merge conflict resolution completed!"
echo "💡 You can now commit the merge with: git commit -m 'Resolve merge conflicts'"
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
