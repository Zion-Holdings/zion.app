#!/usr/bin/env python3
"""
Local GitHub Actions workflow validator
Validates all .yml files in .github/workflows/ for proper YAML syntax
"""

import os
import yaml
import sys
from pathlib import Path

def validate_workflow_file(file_path):
    """Validate a single workflow file for YAML syntax"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            yaml.safe_load(f)
        return True, None
    except yaml.YAMLError as e:
        return False, str(e)
    except Exception as e:
        return False, f"Unexpected error: {str(e)}"

def main():
    workflows_dir = Path(".github/workflows")
    
    if not workflows_dir.exists():
        print("❌ .github/workflows directory not found")
        sys.exit(1)
    
    workflow_files = list(workflows_dir.glob("*.yml")) + list(workflows_dir.glob("*.yaml"))
    
    if not workflow_files:
        print("❌ No workflow files found")
        sys.exit(1)
    
    print(f"🔍 Validating {len(workflow_files)} workflow files...")
    print()
    
    valid_count = 0
    invalid_count = 0
    invalid_files = []
    
    for workflow_file in sorted(workflow_files):
        is_valid, error = validate_workflow_file(workflow_file)
        
        if is_valid:
            print(f"✅ {workflow_file.name}")
            valid_count += 1
        else:
            print(f"❌ {workflow_file.name} - {error}")
            invalid_count += 1
            invalid_files.append((workflow_file.name, error))
    
    print()
    print("📊 Validation Summary:")
    print(f"  Total files: {len(workflow_files)}")
    print(f"  Valid files: {valid_count}")
    print(f"  Invalid files: {invalid_count}")
    
    if invalid_files:
        print()
        print("❌ Invalid workflows found:")
        for filename, error in invalid_files:
            print(f"  - {filename}: {error}")
        print()
        print("🚨 Please fix these workflow files before proceeding")
        sys.exit(1)
    else:
        print()
        print("✅ All workflows are valid!")
        print("🚀 Ready to trigger workflows")

if __name__ == "__main__":
    main()