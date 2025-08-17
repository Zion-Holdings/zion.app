#!/usr/bin/env python3
"""
Robust YAML Fixer for GitHub Actions Workflows
Fixes deeply corrupted YAML structure
"""

import re
import sys
import os
from pathlib import Path

class RobustYAMLFixer:
    def __init__(self):
        self.fixes_applied = []
        self.files_fixed = 0
        
    def fix_file(self, file_path):
        """Fix a single YAML file with robust structural fixes"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            fixes = []
            
            # Fix 1: Remove misplaced runs-on from on section
            content = re.sub(
                r'on:\s*\n\s*runs-on:\s*ubuntu-latest\s*\n',
                'on:\n',
                content
            )
            if content != original_content:
                fixes.append("Removed misplaced runs-on from on section")
                original_content = content
            
            # Fix 2: Remove misplaced runs-on from workflow_dispatch
            content = re.sub(
                r'workflow_dispatch:\s*\n\s*runs-on:\s*ubuntu-latest\s*\n',
                'workflow_dispatch:\n',
                content
            )
            if content != original_content:
                fixes.append("Removed misplaced runs-on from workflow_dispatch")
                original_content = content
            
            # Fix 3: Fix broken job structure
            if 'jobs:' in content and 'runs-on:' not in content:
                # Find the jobs section and add proper structure
                content = re.sub(
                    r'jobs:\s*\n\s*optimize:\s*\n\s*fetch-depth:\s*0',
                    'jobs:\n  optimize:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0',
                    content
                )
                fixes.append("Fixed broken job structure")
            
            # Fix 4: Fix broken step structure
            content = re.sub(
                r'(\s+)- name: ([^\n]+)\n(\s+)([^\n]+)',
                r'\1- name: \2\n\1  \3',
                content
            )
            if content != original_content:
                fixes.append("Fixed step structure")
                original_content = content
            
            # Fix 5: Fix malformed permissions section
            content = re.sub(
                r'permissions:\s*\n\s*\n\s*contents:\s*write',
                'permissions:\n  contents: write',
                content
            )
            if content != original_content:
                fixes.append("Fixed malformed permissions section")
                original_content = content
            
            # Fix 6: Fix broken step indentation
            content = re.sub(
                r'(\s+)- name: ([^\n]+)\n(\s+)([^\n]+)',
                r'\1- name: \2\n\1  \3',
                content
            )
            if content != original_content:
                fixes.append("Fixed step indentation")
                original_content = content
            
            # Fix 7: Add missing checkout step if not present
            if 'uses: actions/checkout@v4' not in content and 'jobs:' in content:
                # Insert checkout step after job definition
                content = re.sub(
                    r'(jobs:\s*\n\s*\w+:\s*\n\s*runs-on:\s*ubuntu-latest\s*\n)',
                    r'\1    steps:\n      - name: Checkout\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n',
                    content
                )
                fixes.append("Added missing checkout step")
            
            # Fix 8: Fix broken step syntax
            content = re.sub(
                r'(\s+)- name: ([^\n]+)\n(\s+)([^\n]+)',
                r'\1- name: \2\n\1  \3',
                content
            )
            if content != original_content:
                fixes.append("Fixed broken step syntax")
                original_content = content
            
            # Fix 9: Ensure proper YAML structure
            if 'steps:' not in content and 'jobs:' in content:
                # Add basic structure
                content = re.sub(
                    r'(jobs:\s*\n\s*\w+:\s*\n\s*runs-on:\s*ubuntu-latest\s*\n)',
                    r'\1    steps:\n      - name: Checkout\n        uses: actions/checkout@v4\n',
                    content
                )
                fixes.append("Added basic workflow structure")
            
            # Write the fixed content back
            if fixes:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                self.fixes_applied.extend(fixes)
                self.files_fixed += 1
                return True
            
            return False
            
        except Exception as e:
            print(f"❌ Error fixing {file_path}: {str(e)}")
            return False
    
    def fix_all_workflows(self):
        """Fix all workflow files"""
        workflows_dir = Path('.github/workflows')
        
        if not workflows_dir.exists():
            print("❌ .github/workflows directory not found")
            return
        
        yaml_files = list(workflows_dir.glob('*.yml'))
        print(f"🔧 Found {len(yaml_files)} workflow files to fix")
        
        for yaml_file in yaml_files:
            print(f"🔧 Fixing {yaml_file.name}...")
            if self.fix_file(yaml_file):
                print(f"✅ Fixed {yaml_file.name}")
            else:
                print(f"⚠️  No fixes needed for {yaml_file.name}")
        
        print(f"\n📊 Fix Summary:")
        print(f"  Files fixed: {self.files_fixed}")
        print(f"  Total fixes: {len(self.fixes_applied)}")
        
        if self.fixes_applied:
            print(f"\n🔧 Fixes applied:")
            for fix in set(self.fixes_applied):
                count = self.fixes_applied.count(fix)
                print(f"  - {fix}: {count} times")

if __name__ == "__main__":
    fixer = RobustYAMLFixer()
    fixer.fix_all_workflows()