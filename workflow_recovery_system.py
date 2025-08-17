#!/usr/bin/env python3
"""
Comprehensive Workflow Recovery System
Recovers corrupted GitHub Actions workflow files systematically
"""

import os
import sys
from pathlib import Path
import re
import yaml

class WorkflowRecoverySystem:
    def __init__(self):
        self.workflow_dir = Path('.github/workflows')
        self.recovery_log = []
        self.fixes_applied = {}
        
    def analyze_file(self, file_path):
        """Analyze a single file to understand its corruption"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Try to parse with YAML
            try:
                yaml.safe_load(content)
                return {'status': 'valid', 'content': content}
            except Exception as e:
                return {'status': 'corrupted', 'error': str(e), 'content': content}
                
        except Exception as e:
            return {'status': 'unreadable', 'error': str(e)}
    
    def detect_corruption_pattern(self, content, error_msg):
        """Detect the specific corruption pattern in a file"""
        lines = content.split('\n')
        
        # Pattern 1: Missing runs-on and steps sections
        if 'jobs:' in content and 'runs-on:' not in content:
            return 'missing_structure'
        
        # Pattern 2: Malformed step properties
        if any(line.strip().startswith('- uses:') or 
               line.strip().startswith('- run:') or 
               line.strip().startswith('- with:') for line in lines):
            return 'malformed_steps'
        
        # Pattern 3: Missing step context
        if any(line.strip().startswith('uses:') or 
               line.strip().startswith('run:') or 
               line.strip().startswith('with:') for line in lines):
            if not any(line.strip().startswith('      ') for line in lines):
                return 'missing_step_context'
        
        # Pattern 4: Malformed job properties
        if any(line.strip().startswith('- runs-on:') or 
               line.strip().startswith('- timeout-minutes:') or 
               line.strip().startswith('- needs:') for line in lines):
            return 'malformed_job_properties'
        
        # Pattern 5: Stray content
        if 'contents: write' in content:
            return 'stray_content'
        
        return 'unknown'
    
    def fix_missing_structure(self, content):
        """Fix files missing runs-on and steps sections"""
        lines = content.split('\n')
        fixed_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            stripped = line.strip()
            
            # Look for job definitions
            if stripped.startswith('- ') and not stripped.startswith('- name:'):
                fixed_lines.append(line)
                i += 1
                
                # Add missing runs-on and steps
                fixed_lines.append('    runs-on: ubuntu-latest')
                fixed_lines.append('    steps:')
                
                # Process all properties until we hit another job or section
                while i < len(lines):
                    next_line = lines[i]
                    next_stripped = next_line.strip()
                    
                    # Stop if we hit another job or section
                    if (next_stripped.startswith('- ') or
                        next_stripped.startswith('jobs:') or
                        next_stripped.startswith('on:') or
                        next_stripped.startswith('permissions:') or
                        next_stripped.startswith('concurrency:')):
                        break
                    
                    # Fix step properties - add proper indentation
                    if (next_stripped.startswith('uses:') or 
                        next_stripped.startswith('run:') or 
                        next_stripped.startswith('with:') or
                        next_stripped.startswith('id:') or
                        next_stripped.startswith('env:') or
                        next_stripped.startswith('working-directory:') or
                        next_stripped.startswith('shell:') or
                        next_stripped.startswith('timeout-minutes:') or
                        next_stripped.startswith('continue-on-error:')):
                        
                        # Ensure proper indentation (8 spaces for step properties)
                        if not next_line.startswith('        '):
                            next_line = '        ' + next_stripped
                    
                    fixed_lines.append(next_line)
                    i += 1
            else:
                fixed_lines.append(line)
                i += 1
        
        return '\n'.join(fixed_lines)
    
    def fix_malformed_steps(self, content):
        """Fix malformed step structures"""
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            stripped = line.strip()
            
            # Fix malformed step properties
            if stripped.startswith('- uses:') or stripped.startswith('- run:') or stripped.startswith('- with:'):
                # Convert to proper step structure
                if stripped.startswith('- uses:'):
                    fixed_lines.append('      - name: Step')
                    fixed_lines.append('        ' + stripped[2:])
                elif stripped.startswith('- run:'):
                    fixed_lines.append('      - name: Step')
                    fixed_lines.append('        ' + stripped[2:])
                elif stripped.startswith('- with:'):
                    fixed_lines.append('      - name: Step')
                    fixed_lines.append('        ' + stripped[2:])
            else:
                fixed_lines.append(line)
        
        return '\n'.join(fixed_lines)
    
    def fix_missing_step_context(self, content):
        """Fix step properties missing proper context"""
        lines = content.split('\n')
        fixed_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            stripped = line.strip()
            
            # Look for step properties without context
            if (stripped.startswith('uses:') or 
                stripped.startswith('run:') or 
                stripped.startswith('with:') or
                stripped.startswith('id:') or
                stripped.startswith('env:') or
                stripped.startswith('working-directory:') or
                stripped.startswith('shell:') or
                stripped.startswith('timeout-minutes:') or
                stripped.startswith('continue-on-error:')):
                
                # Check if this should be under a step
                if i > 0:
                    prev_line = lines[i-1].strip()
                    if prev_line.startswith('- name:') and not line.startswith('        '):
                        # This should be indented under the step
                        line = '        ' + stripped
                    elif not prev_line.startswith('- name:'):
                        # This property is orphaned, remove it
                        i += 1
                        continue
            
            fixed_lines.append(line)
            i += 1
        
        return '\n'.join(fixed_lines)
    
    def fix_malformed_job_properties(self, content):
        """Fix malformed job properties"""
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            stripped = line.strip()
            
            # Fix malformed job properties
            if (stripped.startswith('- runs-on:') or 
                stripped.startswith('- timeout-minutes:') or 
                stripped.startswith('- needs:') or
                stripped.startswith('- if:') or
                stripped.startswith('- env:') or
                stripped.startswith('- strategy:') or
                stripped.startswith('- matrix:') or
                stripped.startswith('- fail-fast:') or
                stripped.startswith('- max-parallel:') or
                stripped.startswith('- steps:') or
                stripped.startswith('- outputs:') or
                stripped.startswith('- uses:') or
                stripped.startswith('- with:') or
                stripped.startswith('- secrets:') or
                stripped.startswith('- permissions:')):
                
                # Remove the dash and add proper indentation
                line = '  ' + stripped[2:]
            else:
                fixed_lines.append(line)
        
        return '\n'.join(fixed_lines)
    
    def fix_stray_content(self, content):
        """Remove stray content that shouldn't be there"""
        # Remove malformed contents: write
        content = re.sub(r'\s+contents:\s*write\s*\n?', '\n', content)
        
        # Remove other common stray content
        content = re.sub(r'\s+permissions:\s*write\s*\n?', '\n', content)
        
        return content
    
    def recover_file(self, file_path):
        """Recover a single corrupted file"""
        print(f"🔧 Recovering: {file_path}")
        
        # Analyze the file
        analysis = self.analyze_file(file_path)
        
        if analysis['status'] == 'valid':
            print(f"✅ {file_path} is already valid")
            return True
        
        if analysis['status'] == 'unreadable':
            print(f"❌ {file_path} cannot be read: {analysis['error']}")
            return False
        
        # Get content and error
        content = analysis['content']
        error_msg = analysis['error']
        
        # Detect corruption pattern
        pattern = self.detect_corruption_pattern(content, error_msg)
        print(f"   Pattern detected: {pattern}")
        
        # Apply appropriate fixes
        original_content = content
        fixes_applied = []
        
        if pattern == 'missing_structure':
            content = self.fix_missing_structure(content)
            fixes_applied.append("Fixed missing runs-on and steps sections")
        
        if pattern == 'malformed_steps':
            content = self.fix_malformed_steps(content)
            fixes_applied.append("Fixed malformed step structures")
        
        if pattern == 'missing_step_context':
            content = self.fix_missing_step_context(content)
            fixes_applied.append("Fixed missing step context")
        
        if pattern == 'malformed_job_properties':
            content = self.fix_malformed_job_properties(content)
            fixes_applied.append("Fixed malformed job properties")
        
        if pattern == 'stray_content':
            content = self.fix_stray_content(content)
            fixes_applied.append("Removed stray content")
        
        # Apply general cleanup
        content = self.cleanup_general_issues(content)
        
        # Validate the fixed content
        try:
            yaml.safe_load(content)
            print(f"✅ Recovery successful: {', '.join(fixes_applied)}")
            
            # Write the fixed content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            self.fixes_applied[file_path] = fixes_applied
            return True
            
        except Exception as e:
            print(f"❌ Recovery failed: {e}")
            # Try to apply more aggressive fixes
            content = self.apply_aggressive_fixes(original_content)
            try:
                yaml.safe_load(content)
                print(f"✅ Aggressive recovery successful")
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                self.fixes_applied[file_path] = fixes_applied + ["Aggressive fixes applied"]
                return True
            except Exception as e2:
                print(f"❌ Aggressive recovery also failed: {e2}")
                return False
    
    def cleanup_general_issues(self, content):
        """Apply general cleanup fixes"""
        # Fix common YAML issues
        content = content.replace('concurrency:"', 'concurrency:')
        content = content.replace('group: "github.workflow-github.ref', 'group: "github.workflow-${{ github.ref }}"')
        content = content.replace('cancel-in-progress: "true', 'cancel-in-progress: true')
        content = content.replace('""', '"')
        content = content.replace('run: |"', 'run: |')
        content = content.replace('id: "', 'id: ')
        
        # Remove trailing quotes
        if content.strip().endswith('"'):
            content = content.rstrip('"')
        
        return content
    
    def apply_aggressive_fixes(self, content):
        """Apply aggressive fixes for severely corrupted files"""
        lines = content.split('\n')
        fixed_lines = []
        
        # Look for any semblance of structure
        in_jobs = False
        in_steps = False
        current_job = None
        
        for line in lines:
            stripped = line.strip()
            
            if stripped == 'jobs:':
                in_jobs = True
                fixed_lines.append(line)
                continue
            
            if in_jobs and stripped.startswith('- '):
                # This is a job
                current_job = stripped[2:].split(':')[0]
                fixed_lines.append(line)
                fixed_lines.append('    runs-on: ubuntu-latest')
                fixed_lines.append('    steps:')
                in_steps = True
                continue
            
            if in_steps and stripped.startswith('- name:'):
                # This is a step
                fixed_lines.append('      ' + line.strip())
                continue
            
            if in_steps and (stripped.startswith('uses:') or 
                            stripped.startswith('run:') or 
                            stripped.startswith('with:')):
                # This is a step property
                fixed_lines.append('        ' + stripped)
                continue
            
            # Skip malformed lines
            if (stripped.startswith('- uses:') or 
                stripped.startswith('- run:') or 
                stripped.startswith('- with:') or
                stripped.startswith('- runs-on:') or
                stripped.startswith('- timeout-minutes:')):
                continue
            
            # Keep other lines
            fixed_lines.append(line)
        
        return '\n'.join(fixed_lines)
    
    def recover_all_files(self):
        """Recover all corrupted workflow files"""
        print("🚀 Starting comprehensive workflow recovery...")
        
        workflow_files = list(self.workflow_dir.glob('*.yml'))
        print(f"📁 Found {len(workflow_files)} workflow files")
        
        # Analyze all files first
        valid_count = 0
        corrupted_count = 0
        
        for file_path in workflow_files:
            analysis = self.analyze_file(file_path)
            if analysis['status'] == 'valid':
                valid_count += 1
            else:
                corrupted_count += 1
        
        print(f"📊 Initial status: {valid_count} valid, {corrupted_count} corrupted")
        
        # Recover corrupted files
        recovered_count = 0
        for file_path in workflow_files:
            analysis = self.analyze_file(file_path)
            if analysis['status'] != 'valid':
                if self.recover_file(file_path):
                    recovered_count += 1
        
        # Final validation
        final_valid_count = 0
        final_corrupted_count = 0
        
        for file_path in workflow_files:
            analysis = self.analyze_file(file_path)
            if analysis['status'] == 'valid':
                final_valid_count += 1
            else:
                final_corrupted_count += 1
        
        print(f"\n🎉 Recovery Complete!")
        print(f"📊 Final status: {final_valid_count} valid, {final_corrupted_count} corrupted")
        print(f"🔧 Files recovered: {recovered_count}")
        
        if final_corrupted_count > 0:
            print(f"\n⚠️  {final_corrupted_count} files still need manual attention")
            print("These files have complex structural issues that require human intervention")
        
        return final_valid_count, final_corrupted_count, recovered_count

def main():
    recovery_system = WorkflowRecoverySystem()
    valid, corrupted, recovered = recovery_system.recover_all_files()
    
    print(f"\n📋 Recovery Summary:")
    print(f"   ✅ Valid files: {valid}")
    print(f"   ❌ Corrupted files: {corrupted}")
    print(f"   🔧 Files recovered: {recovered}")
    print(f"   📁 Total files: {valid + corrupted}")

if __name__ == '__main__':
    main()
