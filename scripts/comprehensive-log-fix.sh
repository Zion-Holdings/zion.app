#!/bin/bash

echo "🔧 Comprehensive LogError Import Fix"
echo "=================================="

# Step 1: Fix import statements that contain logError from productionLogger
echo "📝 Step 1: Fixing import statements..."

# Find all files that import logError from productionLogger and fix them
find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .next | while read file; do
    if grep -q "from '@/utils/productionLogger'" "$file" && grep -q "logError" "$file"; then
        echo "  Fixing imports in: $file"
        
        # Fix various import patterns
        sed -i '' '
            s/import { logError }/import { logErrorToProduction }/g
            s/import { logError,/import { logErrorToProduction,/g
            s/, logError }/, logErrorToProduction }/g
            s/, logError,/, logErrorToProduction,/g
            s/logInfo, logWarn, logError/logInfo, logWarn, logErrorToProduction/g
            s/logInfo, logError/logInfo, logErrorToProduction/g
            s/logWarn, logError/logWarn, logErrorToProduction/g
            s/logError, logWarn/logErrorToProduction, logWarn/g
            s/logError, logInfo/logErrorToProduction, logInfo/g
            s/logError, logDebug/logErrorToProduction, logDebug/g
            s/logDebug, logError/logDebug, logErrorToProduction/g
        ' "$file"
    fi
done

# Step 2: Fix function call usages
echo "📝 Step 2: Fixing function calls..."

find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .next | while read file; do
    if grep -q "from '@/utils/productionLogger'" "$file" && grep -q "logError(" "$file"; then
        echo "  Fixing calls in: $file"
        sed -i '' 's/logError(/logErrorToProduction(/g' "$file"
    fi
done

# Step 3: Clean up any double replacements
echo "📝 Step 3: Cleaning up double replacements..."
find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .next | xargs sed -i '' 's/logErrorToProductionToProduction/logErrorToProduction/g'

echo "✅ Fix complete! Testing build..."
npm run build 