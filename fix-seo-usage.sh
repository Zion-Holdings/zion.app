#!/bin/bash

echo "Fixing SEO component usage across the codebase..."

# Function to fix SEO component usage
fix_seo_usage() {
    local file="$1"
    echo "Processing: $file"
    
    # Create a temporary file
    local temp_file=$(mktemp)
    
    # Process the file and convert old SEO usage to new format
    sed -E '
        # Match SEO component with title, description, keywords, image, canonical, noindex
        s/<SEO\s+title="([^"]+)"\s+description="([^"]+)"\s+keywords=\{([^}]+)\}\s+image="([^"]+)"\s+canonical="([^"]+)"\s*\/>/<SEO data={{\n          pageTitle: "\1",\n          pageDescription: "\2",\n          pageKeywords: \3,\n          canonical: "\5"\n        }} \/>/g;
        
        # Match SEO component with title, description, keywords, canonical
        s/<SEO\s+title="([^"]+)"\s+description="([^"]+)"\s+keywords=\{([^}]+)\}\s+canonical="([^"]+)"\s*\/>/<SEO data={{\n          pageTitle: "\1",\n          pageDescription: "\2",\n          pageKeywords: \3,\n          canonical: "\4"\n        }} \/>/g;
        
        # Match SEO component with title, description, keywords
        s/<SEO\s+title="([^"]+)"\s+description="([^"]+)"\s+keywords=\{([^}]+)\}\s*\/>/<SEO data={{\n          pageTitle: "\1",\n          pageDescription: "\2",\n          pageKeywords: \3\n        }} \/>/g;
        
        # Match SEO component with title, description, canonical
        s/<SEO\s+title="([^"]+)"\s+description="([^"]+)"\s+canonical="([^"]+)"\s*\/>/<SEO data={{\n          pageTitle: "\1",\n          pageDescription: "\2",\n          canonical: "\3"\n        }} \/>/g;
        
        # Match SEO component with title, description
        s/<SEO\s+title="([^"]+)"\s+description="([^"]+)"\s*\/>/<SEO data={{\n          pageTitle: "\1",\n          pageDescription: "\2"\n        }} \/>/g;
        
        # Match SEO component with title only
        s/<SEO\s+title="([^"]+)"\s*\/>/<SEO data={{\n          pageTitle: "\1"\n        }} \/>/g;
        
        # Match SEO component with title and noindex
        s/<SEO\s+title="([^"]+)"\s+noindex\s*\/>/<SEO data={{\n          pageTitle: "\1",\n          robots: "noindex, nofollow"\n        }} \/>/g;
    ' "$file" > "$temp_file"
    
    # Replace the original file with the fixed version
    mv "$temp_file" "$file"
}

# Find all TypeScript/TSX files and fix them
find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v .git | while read -r file; do
    # Check if file contains old SEO usage
    if grep -q '<SEO[^>]*title=' "$file"; then
        fix_seo_usage "$file"
    fi
done

echo "SEO component usage fixes completed!"