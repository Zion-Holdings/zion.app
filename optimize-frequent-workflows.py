#!/usr/bin/env python3
"""
Optimize workflows with very frequent schedules to reduce resource usage
"""

import os
import glob
import re

def optimize_workflow_file(file_path):
    """Optimize a single workflow file by reducing frequent schedules"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Optimize very frequent schedules
        # Change */5 to */60 (every hour instead of every 5 minutes)
        content = re.sub(
            r"cron: '\*/5 \* \* \* \*'",
            "cron: '0 * * * *'",
            content
        )
        
        # Change */30 to */120 (every 2 hours instead of every 30 minutes)
        content = re.sub(
            r"cron: '\*/30 \* \* \* \*'",
            "cron: '0 */2 * * *'",
            content
        )
        
        # Change */15 to */60 (every hour instead of every 15 minutes)
        content = re.sub(
            r"cron: '\*/15 \* \* \* \*'",
            "cron: '0 * * * *'",
            content
        )
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Optimized: {file_path}")
            return True
        else:
            print(f"✅ Already optimized: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error optimizing {file_path}: {e}")
        return False

def main():
    """Main function to optimize frequent workflows"""
    print("🔧 Optimizing workflows with frequent schedules...")
    
    # Find all workflow files
    workflow_files = glob.glob(".github/workflows/*.yml")
    
    # Skip backup directory
    workflow_files = [f for f in workflow_files if "broken_workflows_backup" not in f]
    
    optimized_count = 0
    total_count = len(workflow_files)
    
    for workflow_file in workflow_files:
        if optimize_workflow_file(workflow_file):
            optimized_count += 1
    
    print(f"\n🎉 Workflow optimization completed!")
    print(f"📊 Optimized: {optimized_count}/{total_count} workflows")

if __name__ == "__main__":
    main()
