#!/bin/bash

# Clean up unnecessary workflow files
# Keep only essential workflows and remove generic/duplicate ones

echo "Cleaning up GitHub Actions workflows..."

# List of workflows to KEEP (essential ones)
KEEP_WORKFLOWS=(
    "ci.yml"
    "test.yml"
    "playwright-smoke.yml"
    "deploy.yml"
    "dependencies.yml"
    "cleanup.yml"
    "security.yml"
    "maintenance.yml"
)

# Remove all workflow files except the ones we want to keep
for file in *.yml; do
    if [[ -f "$file" ]]; then
        keep=false
        for keep_file in "${KEEP_WORKFLOWS[@]}"; do
            if [[ "$file" == "$keep_file" ]]; then
                keep=true
                break
            fi
        done
        
        if [[ "$keep" == false ]]; then
            echo "Removing: $file"
            rm "$file"
        else
            echo "Keeping: $file"
        fi
    fi
done

echo "Workflow cleanup complete!"
echo "Kept workflows: ${KEEP_WORKFLOWS[*]}"
