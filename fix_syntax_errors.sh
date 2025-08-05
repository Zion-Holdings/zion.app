#!/bin/bash

# Fix common syntax errors in TypeScript files
echo "Fixing syntax errors in TypeScript files..."

# Find all files with syntax errors and fix them
find pages -name "*.tsx" -type f | while read file; do
    echo "Processing: $file"
    
    # Fix common patterns
    sed -i '' \
        -e "s/'''//g" \
        -e "s/\"\"\"//g" \
        -e "s/''//g" \
        -e "s/\"\"//g" \
        -e "s/import Head from 'next/head';'''/import Head from 'next\/head';/g" \
        -e "s/import Layout from '\.\.\/components\/Layout';'''/import Layout from '\.\.\/components\/Layout';/g" \
        -e "s/content=\([^>]*\) >/content=\"\1\" \/>/g" \
        -e "s/className=\([^>]*\) >/className=\"\1\">/g" \
        -e "s/className=\([^>]*\) \"/className=\"\1\"/g" \
        -e "s/\" >/\" \/>/g" \
        -e "s/\"\"//g" \
        -e "s/''//g" \
        "$file"
done

echo "Syntax error fixes completed!" 