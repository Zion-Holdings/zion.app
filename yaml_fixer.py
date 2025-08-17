#!/usr/bin/env python3
"""
YAML Auto-Fixer for GitHub Actions Workflows
Fixes common YAML syntax issues automatically
"""

import re
import sys
import os
from pathlib import Path

class YAMLFixer:
    def __init__(self, mode='conservative'):
        self.mode = mode
        self.fixes_applied = []
        self.files_fixed = 0
        
    def fix_file(self, file_path):
        """Fix a single YAML file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            fixes = []
            
            # Apply fixes based on mode
            if self.mode in ['conservative', 'aggressive']:
                content, file_fixes = self.apply_basic_fixes(content)
                fixes.extend(file_fixes)
            
            if self.mode == 'aggressive':
                content, file_fixes = self.apply_aggressive_fixes(content)
                fixes.extend(file_fixes)
            
            # Only write if changes were made
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                self.files_fixed += 1
                self.fixes_applied.extend([f"{file_path}: {fix}" for fix in fixes])
                
                print(f"✅ Fixed {file_path}: {len(fixes)} fixes")
                return True
            else:
                print(f"✅ {file_path}: No fixes needed")
                return False
                
        except Exception as e:
            print(f"❌ Error fixing {file_path}: {e}")
            return False
    
    def apply_basic_fixes(self, content):
        """Apply conservative fixes"""
        fixes = []
        original_content = content
        
        # Fix missing permissions section
        if 'jobs:' in content and 'permissions:' not in content:
            if 'contents: write' in content or 'contents: read' in content:
                # Move permissions to proper section
                content = re.sub(
                    r'(\s+)(contents:\s*(?:read|write))',
                    r'\1permissions:\n\1  \2',
                    content
                )
                fixes.append("Added permissions section")
        
        # Fix malformed job structure
        if re.search(r'jobs:\s*\n\s*\n\s*\n', content):
            content = re.sub(r'jobs:\s*\n\s*\n\s*\n', 'jobs:\n', content)
            fixes.append("Fixed malformed jobs section")
        
        # Fix step indentation
        if re.search(r'^\s{4}-\s+name:', content, re.MULTILINE):
            content = re.sub(r'^(\s{4})(-\s+name:)', r'\1\1\2', content, flags=re.MULTILINE)
            fixes.append("Fixed step indentation")
        
        # Fix missing runs-on
        if re.search(r'^\s+[a-zA-Z_-]+:\s*$', content, re.MULTILINE):
            # Look for job definitions without runs-on
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if re.match(r'^\s+[a-zA-Z_-]+:\s*$', line) and i + 1 < len(lines):
                    next_line = lines[i + 1]
                    if not re.match(r'^\s+(runs-on|needs|strategy|outputs|timeout|env):', next_line):
                        # Insert runs-on if missing
                        lines.insert(i + 1, '    runs-on: ubuntu-latest')
                        fixes.append("Added missing runs-on")
                        break
            content = '\n'.join(lines)
        
        # Fix malformed environment variables
        if re.search(r'^\s+[A-Z_]+:\s*"[^"]*$', content, re.MULTILINE):
            content = re.sub(r'^(\s+[A-Z_]+:\s*"[^"]*)$', r'\1"', content, flags=re.MULTILINE)
            fixes.append("Fixed malformed environment variables")
        
        # Fix common YAML syntax issues
        if 'concurrency:' in content and 'group:' in content:
            # Fix malformed concurrency group
            content = re.sub(
                r'group:\s*"github\.workflow-github\.ref"',
                'group: "github.workflow-${{ github.ref }}"',
                content
            )
            if 'group: "github.workflow-${{ github.ref }}"' in content:
                fixes.append("Fixed concurrency group reference")
        
        # Fix missing quotes around expressions
        content = re.sub(
            r'^(\s*[a-zA-Z_-]+:\s*)([^"\'][^:]*\${{[^}]+}[^"\']*)$',
            r'\1"\2"',
            content,
            flags=re.MULTILINE
        )
        if content != original_content:
            fixes.append("Fixed unquoted expressions")
        
        return content, fixes
    
    def apply_aggressive_fixes(self, content):
        """Apply aggressive fixes"""
        fixes = []
        
        # Fix complex indentation issues
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            # Fix inconsistent indentation
            if line.strip() and not line.startswith('#'):
                # Normalize indentation to 2 spaces
                indent_level = len(line) - len(line.lstrip())
                if indent_level > 0:
                    normalized_indent = '  ' * (indent_level // 2)
                    line = normalized_indent + line.lstrip()
            
            fixed_lines.append(line)
        
        if fixed_lines != lines:
            fixes.append("Normalized indentation")
            content = '\n'.join(fixed_lines)
        
        # Fix malformed YAML structures
        if re.search(r'^\s*-\s*name:\s*[^\n]*\n\s*[a-zA-Z_-]+:', content, re.MULTILINE):
            # Fix missing step structure
            content = re.sub(
                r'(\s*-\s*name:\s*[^\n]*)\n(\s*)([a-zA-Z_-]+:)',
                r'\1\n\2  \3',
                content
            )
            fixes.append("Fixed step structure")
        
        return content, fixes
    
    def get_summary(self):
        """Get summary of fixes applied"""
        return {
            'files_fixed': self.files_fixed,
            'total_fixes': len(self.fixes_applied),
            'fixes': self.fixes_applied
        }

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 yaml_fixer.py <mode> [file1] [file2] ...")
        sys.exit(1)
    
    mode = sys.argv[1]
    files = sys.argv[2:] if len(sys.argv) > 2 else []
    
    if mode not in ['conservative', 'aggressive']:
        print("Mode must be 'conservative' or 'aggressive'")
        sys.exit(1)
    
    fixer = YAMLFixer(mode)
    
    if not files:
        # Process all workflow files
        workflow_dir = Path('.github/workflows')
        if workflow_dir.exists():
            files = list(workflow_dir.glob('*.yml')) + list(workflow_dir.glob('*.yaml'))
            files = [str(f) for f in files]
        else:
            print("No .github/workflows directory found")
            sys.exit(1)
    
    print(f"🔧 YAML Auto-Fixer running in {mode} mode")
    print(f"📁 Processing {len(files)} files...")
    
    for file_path in files:
        if os.path.exists(file_path):
            fixer.fix_file(file_path)
    
    # Print summary
    summary = fixer.get_summary()
    print(f"\n📊 Fix Summary:")
    print(f"  Files fixed: {summary['files_fixed']}")
    print(f"  Total fixes: {summary['total_fixes']}")
    
    if summary['fixes']:
        print(f"\n🔧 Fixes applied:")
        for fix in summary['fixes']:
            print(f"  - {fix}")

if __name__ == '__main__':
    main()