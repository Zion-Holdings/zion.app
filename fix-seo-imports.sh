#!/bin/bash

# Script to fix all SEO import issues in the Zion Tech Group application
# This script replaces SEO component imports with Next.js Head imports

echo "🔧 Fixing SEO import issues across all pages..."

# Find all files that import SEO from components/SEO
files=$(grep -l "import.*SEO.*from.*components/SEO" pages/**/*.tsx pages/*.tsx 2>/dev/null)

for file in $files; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Replace SEO import with Head import
        sed -i 's/import SEO from '\''\.\.\/components\/SEO'\'';/import Head from '\''next\/head'\'';/g' "$file"
        sed -i 's/import SEO from '\''\.\.\/\.\.\/components\/SEO'\'';/import Head from '\''next\/head'\'';/g' "$file"
        
        # Replace SEO usage patterns
        # Pattern 1: <SEO title={...} description={...} />
        sed -i 's/<SEO title={\([^}]*\)} description={\([^}]*\)} \/>/<Head>\n\t\t\t<title>{\1}<\/title>\n\t\t\t<meta name="description" content={\2} \/>\n\t\t<\/Head>/g' "$file"
        
        # Pattern 2: <SEO title="..." description="..." />
        sed -i 's/<SEO title="\([^"]*\)" description="\([^"]*\)" \/>/<Head>\n\t\t\t<title>\1<\/title>\n\t\t\t<meta name="description" content="\2" \/>\n\t\t<\/Head>/g' "$file"
        
        # Pattern 3: <SEO title="..." description="..." keywords={...} />
        sed -i 's/<SEO title="\([^"]*\)" description="\([^"]*\)" keywords={\([^}]*\)} \/>/<Head>\n\t\t\t<title>\1<\/title>\n\t\t\t<meta name="description" content="\2" \/>\n\t\t\t<meta name="keywords" content={\3} \/>\n\t\t<\/Head>/g' "$file"
        
        # Pattern 4: <SEO title="..." description="..." keywords={...} canonical="..." />
        sed -i 's/<SEO title="\([^"]*\)" description="\([^"]*\)" keywords={\([^}]*\)} canonical="\([^"]*\)" \/>/<Head>\n\t\t\t<title>\1<\/title>\n\t\t\t<meta name="description" content="\2" \/>\n\t\t\t<meta name="keywords" content={\3} \/>\n\t\t\t<link rel="canonical" href="\4" \/>\n\t\t<\/Head>/g' "$file"
        
        # Pattern 5: <SEO title="..." description="..." keywords={...} canonical="..." section="..." tags={...} />
        sed -i 's/<SEO title="\([^"]*\)" description="\([^"]*\)" keywords={\([^}]*\)} canonical="\([^"]*\)" section="\([^"]*\)" tags={\([^}]*\)} \/>/<Head>\n\t\t\t<title>\1<\/title>\n\t\t\t<meta name="description" content="\2" \/>\n\t\t\t<meta name="keywords" content={\3} \/>\n\t\t\t<link rel="canonical" href="\4" \/>\n\t\t\t<meta name="section" content="\5" \/>\n\t\t\t<meta name="keywords" content={\6} \/>\n\t\t<\/Head>/g' "$file"
        
        # Pattern 6: <SEO title="..." noindex />
        sed -i 's/<SEO title="\([^"]*\)" noindex \/>/<Head>\n\t\t\t<title>\1<\/title>\n\t\t\t<meta name="robots" content="noindex" \/>\n\t\t<\/Head>/g' "$file"
        
        # Pattern 7: <SEO title={...} description={...} keywords={...} canonical={...} section={...} tags={...} />
        sed -i 's/<SEO title={\([^}]*\)} description={\([^}]*\)} keywords={\([^}]*\)} canonical={\([^}]*\)} section={\([^}]*\)} tags={\([^}]*\)} \/>/<Head>\n\t\t\t<title>{\1}<\/title>\n\t\t\t<meta name="description" content={\2} \/>\n\t\t\t<meta name="keywords" content={\3} \/>\n\t\t\t<link rel="canonical" href={\4} \/>\n\t\t\t<meta name="section" content={\5} \/>\n\t\t\t<meta name="keywords" content={\6} \/>\n\t\t<\/Head>/g' "$file"
        
        echo "✅ Fixed: $file"
    fi
done

echo "🎉 SEO import fixes completed!"
echo "📝 Note: You may need to manually adjust some complex SEO usage patterns"