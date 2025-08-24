#!/usr/bin/env python3
"""
GitHub Actions Workflow Recovery Script
Systematically fixes YAML syntax issues without corrupting files
"""

import re
import sys
import os
from pathlib import Path
import yaml

class WorkflowRecovery:
    def __init__(self):
        self.fixes_applied = []
        self.files_fixed = 0
        
    def fix_file(self, file_path):
        """Fix a single workflow file with targeted fixes"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            fixes = []
            
            # Fix 1: Fix common YAML syntax issues
            content = self.fix_yaml_syntax(content, fixes)
            
            # Fix 2: Fix workflow structure issues
            content = self.fix_workflow_structure(content, fixes)
            
            # Fix 3: Fix step formatting
            content = self.fix_step_formatting(content, fixes)
            
            # Write the fixed content back if changes were made
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                self.fixes_applied.extend(fixes)
                self.files_fixed += 1
                return True
            
            return False
            
        except Exception as e:
            print(f"❌ Error fixing {file_path}: {str(e)}")
            return False
    
    def fix_yaml_syntax(self, content, fixes):
        """Fix basic YAML syntax issues"""
        # Fix unquoted expressions
        content = re.sub(
            r'(\s+)([^:\s]+):\s*\${{([^}]+)}}',
            r'\1\2: "${{\3}}"',
            content
        )
        if content != content:
            fixes.append("Fixed unquoted expressions")
        
        # Fix malformed environment variables
        content = re.sub(
            r'(\s+)([^:\s]+):\s*([^:\s]+):\s*([^\n]+)',
            r'\1\2:\n\1  \3: \4',
            content
        )
        if content != content:
            fixes.append("Fixed malformed environment variables")
        
        return content
    
    def fix_workflow_structure(self, content, fixes):
        """Fix workflow structure issues"""
        # Ensure proper job structure
        if 'jobs:' in content and 'runs-on:' not in content:
            # Add basic job structure if missing
            content = re.sub(
                r'(jobs:\s*\n\s*\w+:\s*\n)',
                r'\1    runs-on: ubuntu-latest\n    steps:\n',
                content
            )
            fixes.append("Added missing job structure")
        
        # Fix permissions section
        if 'permissions:' in content and 'contents:' in content:
            # Ensure proper permissions formatting
            content = re.sub(
                r'permissions:\s*\n\s*contents:\s*([^\n]+)',
                r'permissions:\n  contents: \1',
                content
            )
            fixes.append("Fixed permissions section")
        
        return content
    
    def fix_step_formatting(self, content, fixes):
        """Fix step formatting issues"""
        # Fix step indentation
        content = re.sub(
            r'(\s+)- name: ([^\n]+)\n(\s+)([^\n]+)',
            r'\1- name: \2\n\1  \3',
            content
        )
        if content != content:
            fixes.append("Fixed step indentation")
        
        return content
    
    def validate_file(self, file_path):
        """Validate that a file has correct YAML syntax"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                yaml.safe_load(f)
            return True
        except Exception:
            return False
    
    def recover_all_workflows(self):
        """Recover all workflow files systematically"""
        workflows_dir = Path('.github/workflows')
        
        if not workflows_dir.exists():
            print("❌ .github/workflows directory not found")
            return
        
        yaml_files = list(workflows_dir.glob('*.yml'))
        print(f"🔧 Found {len(yaml_files)} workflow files to recover")
        
        # First, identify which files are valid and which need fixing
        valid_files = []
        invalid_files = []
        
        for yaml_file in yaml_files:
            if self.validate_file(yaml_file):
                valid_files.append(yaml_file)
            else:
                invalid_files.append(yaml_file)
        
        print(f"✅ Valid files: {len(valid_files)}")
        print(f"❌ Invalid files: {len(invalid_files)}")
        
        # Fix invalid files
        for yaml_file in invalid_files:
            print(f"🔧 Fixing {yaml_file.name}...")
            if self.fix_file(yaml_file):
                print(f"✅ Fixed {yaml_file.name}")
            else:
                print(f"⚠️  No fixes needed for {yaml_file.name}")
        
        # Validate all files after fixing
        print("\n🔍 Validating all files after recovery...")
        final_valid = 0
        final_invalid = 0
        
        for yaml_file in yaml_files:
            if self.validate_file(yaml_file):
                final_valid += 1
                print(f"✅ {yaml_file.name} - Valid")
            else:
                final_invalid += 1
                print(f"❌ {yaml_file.name} - Still invalid")
        
        print(f"\n📊 Recovery Summary:")
        print(f"  Files fixed: {self.files_fixed}")
        print(f"  Total fixes: {len(self.fixes_applied)}")
        print(f"  Final valid files: {final_valid}")
        print(f"  Final invalid files: {final_invalid}")
        
        if self.fixes_applied:
            print(f"\n🔧 Fixes applied:")
            for fix in set(self.fixes_applied):
                count = self.fixes_applied.count(fix)
                print(f"  - {fix}: {count} times")

if __name__ == "__main__":
    recovery = WorkflowRecovery()
    recovery.recover_all_workflows()