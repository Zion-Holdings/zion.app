#!/usr/bin/env python3
"""
GitHub Actions Workflow Auto-Repair Script
Fixes common YAML syntax errors and structural issues in workflow files
"""

import yaml
import os
import sys
import re
from pathlib import Path
from typing import List, Dict, Any

class WorkflowRepairer:
    def __init__(self, workflows_dir: str = ".github/workflows"):
        self.workflows_dir = Path(workflows_dir)
        self.fixed_count = 0
        self.total_files = 0
        self.errors = []
        
    def fix_all_workflows(self) -> bool:
        """Fix all broken workflow files"""
        if not self.workflows_dir.exists():
            print(f"❌ Workflows directory not found: {self.workflows_dir}")
            return False
            
        workflow_files = list(self.workflows_dir.glob("*.yml"))
        self.total_files = len(workflow_files)
        
        print(f"🔍 Found {self.total_files} workflow files")
        print("=" * 50)
        
        for workflow_file in workflow_files:
            if self.fix_workflow_file(workflow_file):
                self.fixed_count += 1
                
        self.print_summary()
        return len(self.errors) == 0
        
    def fix_workflow_file(self, file_path: Path) -> bool:
        """Fix a single workflow file"""
        print(f"🔧 Checking: {file_path.name}")
        
        try:
            # Read the file
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Check if already valid
            try:
                yaml.safe_load(content)
                print(f"  ✅ Already valid")
                return False
            except yaml.YAMLError:
                print(f"  ❌ YAML validation failed, fixing...")
                
            # Create backup
            backup_path = f"{file_path}.backup"
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(content)
                
            # Fix the content
            fixed_content = self.fix_common_issues(content)
            
            # Validate the fixed content
            try:
                yaml.safe_load(fixed_content)
                print(f"  ✅ YAML validation passed")
            except yaml.YAMLError as e:
                print(f"  ❌ YAML validation still failed: {e}")
                self.errors.append(f"{file_path.name}: {e}")
                return False
                
            # Write the fixed content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
                
            print(f"  ✅ Fixed successfully")
            return True
            
        except Exception as e:
            error_msg = f"Error fixing {file_path.name}: {e}"
            print(f"  ❌ {error_msg}")
            self.errors.append(error_msg)
            return False
            
    def fix_common_issues(self, content: str) -> str:
        """Fix common workflow issues"""
        lines = content.split('\n')
        fixed_lines = []
        
        # State tracking
        in_jobs = False
        in_steps = False
        current_job = None
        job_indent = 0
        has_permissions = False
        has_concurrency = False
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            original_indent = len(line) - len(line.lstrip())
            
            # Track permissions and concurrency
            if stripped == 'permissions:':
                has_permissions = True
            if stripped == 'concurrency:':
                has_concurrency = True
                
            # Detect jobs section
            if stripped == 'jobs:':
                in_jobs = True
                in_steps = False
                fixed_lines.append(line)
                continue
                
            # Detect individual job
            if in_jobs and stripped and not stripped.startswith('-') and ':' in stripped and not stripped.startswith('#'):
                if ':' in stripped and not stripped.endswith(':'):
                    # This is a job name, add proper structure
                    job_name = stripped.split(':')[0].strip()
                    current_job = job_name
                    job_indent = original_indent
                    
                    fixed_lines.append(line)
                    # Add runs-on if missing
                    next_line = lines[i + 1] if i + 1 < len(lines) else ""
                    if 'runs-on:' not in next_line:
                        fixed_lines.append(' ' * (job_indent + 2) + 'runs-on: ubuntu-latest')
                    continue
                    
                if stripped.endswith(':'):
                    # This is a job section start
                    current_job = stripped[:-1].strip()
                    job_indent = original_indent
                    fixed_lines.append(line)
                    continue
                    
            # Detect steps section
            if in_jobs and stripped == 'steps:':
                in_steps = True
                fixed_lines.append(line)
                continue
                
            # Fix step indentation and structure
            if in_steps and stripped.startswith('- name:'):
                # Ensure proper step structure
                step_indent = ' ' * (job_indent + 4)
                fixed_lines.append(step_indent + stripped)
                continue
                
            if in_steps and (stripped.startswith('uses:') or stripped.startswith('run:') or stripped.startswith('if:')):
                # Ensure proper indentation for step properties
                step_indent = ' ' * (job_indent + 6)
                fixed_lines.append(step_indent + stripped)
                continue
                
            if in_steps and stripped.startswith('with:'):
                # Ensure proper indentation for with section
                step_indent = ' ' * (job_indent + 6)
                fixed_lines.append(step_indent + stripped)
                continue
                
            # Handle other lines
            if line.strip() == '':
                fixed_lines.append('')
            elif line.startswith(' '):
                # Preserve existing indentation for other content
                fixed_lines.append(line)
            else:
                # Reset context for top-level sections
                if stripped and not stripped.startswith('#') and ':' in stripped:
                    in_jobs = False
                    in_steps = False
                    current_job = None
                fixed_lines.append(line)
                
        # Ensure proper structure
        result = '\n'.join(fixed_lines)
        
        # Add missing permissions if not present
        if not has_permissions:
            result = result.replace('on:', 'on:\n\npermissions:\n  contents: read\n  actions: read')
            
        # Add missing concurrency if not present
        if not has_concurrency:
            result = result.replace('permissions:', 'permissions:\n\nconcurrency:\n  group: "github.workflow-${{ github.ref }}"\n  cancel-in-progress: true')
            
        return result
        
    def print_summary(self):
        """Print summary of the repair operation"""
        print("\n" + "=" * 50)
        print("🎉 Workflow repair completed!")
        print("📊 Summary:")
        print(f"   - Total files: {self.total_files}")
        print(f"   - Repaired: {self.fixed_count}")
        print(f"   - Already working: {self.total_files - self.fixed_count}")
        
        if self.errors:
            print(f"   - Errors: {len(self.errors)}")
            print("\n❌ Errors encountered:")
            for error in self.errors:
                print(f"   - {error}")
                
        if self.fixed_count > 0:
            print(f"\n📝 Next steps:")
            print("1. Review the repaired workflows")
            print("2. Test the workflows")
            print("3. Remove .backup files if everything works")
            print("4. Commit and push the changes")
            
        print(f"\n💡 Health Score: {((self.total_files - len(self.errors)) * 100 // self.total_files)}%")

def main():
    """Main function"""
    repairer = WorkflowRepairer()
    
    try:
        success = repairer.fix_all_workflows()
        if success:
            print("\n✅ All workflows are now valid!")
            sys.exit(0)
        else:
            print(f"\n⚠️  Some workflows still have issues")
            sys.exit(1)
    except KeyboardInterrupt:
        print("\n\n⏹️  Operation cancelled by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()