#!/bin/bash

# Script to temporarily comment out all SEO usage to get the build working
# This is a temporary fix to get the application building

echo "🔧 Temporarily commenting out SEO usage to get build working..."

# Find all files that have <SEO usage
files=$(grep -l "<SEO" pages/**/*.tsx pages/*.tsx 2>/dev/null)

for file in $files; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Comment out SEO usage patterns
        # Pattern 1: <SEO ... />
        sed -i 's/<SEO /<!-- <SEO /g' "$file"
        sed -i 's/\/>$/\/> -->/g' "$file"
        
        echo "✅ Commented out SEO in: $file"
    fi
done

echo "🎉 SEO usage temporarily commented out!"
echo "📝 Note: This is a temporary fix. You'll need to properly replace SEO with Head later."