#!/bin/bash

echo "🔧 Fixing malformed concurrency groups..."

# Fix workflows with malformed concurrency groups
echo "📝 Fixing concurrency group syntax issues..."

# Find all workflows with malformed concurrency groups and fix them
find .github/workflows -name "*.yml" -exec grep -l "group: \"\${{" {} \; | while read -r file; do
    echo "Fixing: $file"
    
    # Get the workflow name from the file
    workflow_name=$(grep "^name:" "$file" | head -1 | sed 's/^name:\s*//' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')
    
    if [ -n "$workflow_name" ]; then
        # Replace the malformed concurrency group with proper syntax
        sed -i '' "s/group: \"\${{ $workflow_name }}-/group: \"$workflow_name-/" "$file"
        echo "  ✅ Fixed: corrected concurrency group syntax for $workflow_name"
    else
        echo "  ⚠️  Could not determine workflow name for $file"
    fi
done

echo "✅ Concurrency group fixes completed!"
