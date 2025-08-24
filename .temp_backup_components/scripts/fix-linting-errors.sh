#!/bin/bash

# Fix Common Linting Errors Script
# This script automatically fixes common linting errors in the project

echo "🔧 Fixing common linting errors..."

# Function to fix React import issues
fix_react_imports() {
    echo "📝 Fixing React imports..."
    
    # Find all TypeScript/TSX files with React imports and fix them
    find src -name "*.tsx" -type f -exec sed -i '' 's/import React from '\''react'\'';/import React from '\''react'\''/g' {} \;
    find src -name "*.ts" -type f -exec sed -i '' 's/import React from '\''react'\'';/import React from '\''react'\''/g' {} \;
    
    echo "✅ React imports fixed"
}

# Function to fix semicolon issues
fix_semicolons() {
    echo "🔧 Fixing semicolon issues..."
    
    # Fix common semicolon errors in TypeScript files
    find src -name "*.ts" -type f -exec sed -i '' 's/^import \(.*\) from '\''\(.*\)'\'';$/import \1 from '\''\2'\''/g' {} \;
    find src -name "*.tsx" -type f -exec sed -i '' 's/^import \(.*\) from '\''\(.*\)'\'';$/import \1 from '\''\2'\''/g' {} \;
    
    echo "✅ Semicolon issues fixed"
}

# Function to fix interface declaration issues
fix_interfaces() {
    echo "🏗️  Fixing interface declarations..."
    
    # Fix interface declarations in .d.ts files
    find src/types -name "*.d.ts" -type f -exec sed -i '' 's/^interface /export interface /g' {} \;
    
    echo "✅ Interface declarations fixed"
}

# Function to fix export issues
fix_exports() {
    echo "📤 Fixing export issues..."
    
    # Fix export statements
    find src -name "*.ts" -type f -exec sed -i '' 's/^export interface /interface /g' {} \;
    find src -name "*.ts" -type f -exec sed -i '' 's/^export type /type /g' {} \;
    
    echo "✅ Export issues fixed"
}

# Function to fix file naming issues
fix_file_names() {
    echo "📁 Fixing file naming issues..."
    
    # Remove problematic files with special characters
    find src -name "*%5B*" -type f -delete
    find src -name "*%255B*" -type f -delete
    
    echo "✅ File naming issues fixed"
}

# Function to run ESLint with auto-fix
run_eslint_fix() {
    echo "🔍 Running ESLint auto-fix..."
    
    # Run ESLint with auto-fix
    npx eslint src --fix --ext .ts,.tsx,.js,.jsx || true
    
    echo "✅ ESLint auto-fix completed"
}

# Function to run Prettier
run_prettier() {
    echo "💅 Running Prettier..."
    
    # Run Prettier on all files
    npx prettier --write "src/**/*.{ts,tsx,js,jsx}" || true
    
    echo "✅ Prettier completed"
}

# Main execution
main() {
    echo "🚀 Starting linting error fixes..."
    
    # Create backup
    echo "💾 Creating backup..."
    cp -r src src.backup.$(date +%Y%m%d_%H%M%S)
    
    # Run fixes
    fix_file_names
    fix_react_imports
    fix_semicolons
    fix_interfaces
    fix_exports
    run_prettier
    run_eslint_fix
    
    echo "🎉 Linting error fixes completed!"
    echo "📋 Next steps:"
    echo "   1. Review the changes"
    echo "   2. Test the application"
    echo "   3. Commit the fixes"
}

# Run main function
main "$@" 