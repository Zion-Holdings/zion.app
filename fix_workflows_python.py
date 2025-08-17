#!/usr/bin/env python3
"""
GitHub Actions Workflow Fix Script
Fixes common issues using proper YAML parsing
"""

import yaml
import os
import shutil
from datetime import datetime
from pathlib import Path

def fix_workflow_file(file_path):
    """Fix a single workflow file"""
    filename = os.path.basename(file_path)
    print(f"🔍 Fixing: {filename}")
    
    try:
        # Read and parse YAML
        with open(file_path, 'r') as f:
            content = yaml.safe_load(f)
        
        if not content:
            print(f"  ❌ Empty or invalid YAML file")
            return False
        
        # Fix 1: Add permissions if missing
        if 'permissions' not in content:
            print(f"  ➕ Adding permissions section")
            content['permissions'] = {
                'contents': 'read',
                'actions': 'read'
            }
        
        # Fix 2: Add concurrency if missing
        if 'concurrency' not in content:
            print(f"  ➕ Adding concurrency settings")
            content['concurrency'] = {
                'group': f"{filename}-${{{{ github.ref }}}}",
                'cancel-in-progress': True
            }
        
        # Fix 3: Add timeout to jobs if missing
        if 'jobs' in content:
            for job_name, job_config in content['jobs'].items():
                if isinstance(job_config, dict) and 'timeout-minutes' not in job_config:
                    print(f"  ➕ Adding timeout to job: {job_name}")
                    job_config['timeout-minutes'] = 30
        
        # Fix 4: Fix permission warnings
        if 'permissions' in content:
            if content['permissions'].get('contents') == 'write' and 'pull-requests' not in content['permissions']:
                print(f"  🔒 Fixing permission warnings")
                content['permissions']['pull-requests'] = 'write'
        
        # Fix 5: Add artifact retention
        if 'jobs' in content:
            for job_name, job_config in content['jobs'].items():
                if isinstance(job_config, dict) and 'steps' in job_config:
                    for step in job_config['steps']:
                        if isinstance(step, dict) and step.get('uses', '').startswith('actions/upload-artifact'):
                            # Update to v4 if needed
                            if not step['uses'].endswith('@v4'):
                                step['uses'] = 'actions/upload-artifact@v4'
                            
                            # Add retention if missing
                            if 'with' in step and 'retention-days' not in step['with']:
                                print(f"  📦 Adding artifact retention to {job_name}")
                                step['with']['retention-days'] = 7
        
        # Write back to file
        with open(file_path, 'w') as f:
            yaml.dump(content, f, default_flow_style=False, sort_keys=False, indent=2)
        
        # Validate the fixed YAML
        with open(file_path, 'r') as f:
            yaml.safe_load(f)
        
        print(f"  ✅ Fixed successfully")
        return True
        
    except Exception as e:
        print(f"  ❌ Error fixing file: {str(e)}")
        return False

def main():
    """Main function"""
    print("🔧 Python-based Workflow Fix Script")
    print("===================================")
    
    workflows_dir = Path(".github/workflows")
    backup_dir = workflows_dir / f"backup-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    
    # Create backup directory
    backup_dir.mkdir(parents=True, exist_ok=True)
    
    # Get all workflow files
    workflow_files = list(workflows_dir.glob("*.yml"))
    
    if not workflow_files:
        print("❌ No workflow files found")
        return
    
    print(f"📁 Processing {len(workflow_files)} workflow files in {workflows_dir}")
    print("")
    
    successful_fixes = 0
    total_files = len(workflow_files)
    
    for workflow_file in workflow_files:
        # Create backup
        shutil.copy2(workflow_file, backup_dir / workflow_file.name)
        
        # Fix the workflow
        if fix_workflow_file(workflow_file):
            successful_fixes += 1
        
        print("")
    
    print("🎉 Workflow fixes completed!")
    print("============================")
    print(f"📊 Summary:")
    print(f"  - Total files processed: {total_files}")
    print(f"  - Successfully fixed: {successful_fixes}")
    print(f"  - Failed: {total_files - successful_fixes}")
    print(f"  - Backup created in: {backup_dir}")
    print("")
    print("🔧 Next steps:")
    print("  1. Review the changes")
    print("  2. Test workflows if possible")
    print("  3. Run validation script to confirm fixes")
    print("  4. Commit changes when satisfied")

if __name__ == "__main__":
    main()
