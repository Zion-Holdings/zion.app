#!/bin/bash

echo "🔧 Fixing invalid GitHub Actions context variables..."

# Fix workflows with invalid github.workflow context
echo "📝 Fixing github.workflow context issues..."

# Find all workflows with github.workflow and fix them
find .github/workflows -name "*.yml" -exec grep -l "github\.workflow" {} \; | while read -r file; do
    echo "Fixing: $file"
    
    # Get the workflow name from the file
    workflow_name=$(grep "^name:" "$file" | head -1 | sed 's/^name:\s*//' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')
    
    if [ -n "$workflow_name" ]; then
        # Replace github.workflow with the actual workflow name
        sed -i '' "s/github\.workflow/$workflow_name/g" "$file"
        echo "  ✅ Fixed: replaced github.workflow with $workflow_name"
    else
        echo "  ⚠️  Could not determine workflow name for $file"
    fi
done

echo "✅ Context variable fixes completed!"
