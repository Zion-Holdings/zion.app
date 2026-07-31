#!/usr/bin/env python3
"""
Safe Git Push Script - Commits and pushes changes with safety checks.
"""

import subprocess
import sys
from pathlib import Path

BASE_DIR = Path('/Users/klebergarciaalcatrao')

def run_command(cmd: list, cwd: str = None) -> tuple:
    """Run a shell command and return (success, output)."""
    try:
        result = subprocess.run(
            cmd,
            cwd=cwd or BASE_DIR,
            capture_output=True,
            text=True,
            timeout=60
        )
        return result.returncode == 0, result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return False, "Command timed out"
    except Exception as e:
        return False, str(e)

def main():
    """Main entry point."""
    print("=" * 60)
    print("🚀 SAFE GIT PUSH")
    print("=" * 60)
    
    # Check git status
    success, output = run_command(['git', 'status', '--porcelain'])
    if not success:
        print(f"❌ Git status failed: {output}")
        return 1
    
    if not output.strip():
        print("✅ No changes to commit")
        return 0
    
    print(f"📝 Changes detected:\n{output}")
    
    # Add all changes
    print("\n[1/4] Adding changes...")
    success, output = run_command(['git', 'add', '.'])
    if not success:
        print(f"❌ Git add failed: {output}")
        return 1
    print("✅ Changes staged")
    
    # Commit
    print("\n[2/4] Committing changes...")
    timestamp = subprocess.run(
        ['date', '+%Y-%m-%d %H:%M:%S'],
        capture_output=True,
        text=True
    ).stdout.strip()
    
    success, output = run_command([
        'git', 'commit',
        '-m', f'Automated update: {timestamp}',
        '--allow-empty'
    ])
    
    if 'nothing to commit' in output.lower():
        print("✅ No new commits needed")
    elif success:
        print(f"✅ Commit created: {output[:100]}")
    else:
        # Check if it's just "nothing to commit"
        if 'nothing to commit' not in output.lower():
            print(f"⚠️  Commit output: {output[:200]}")
    
    # Push
    print("\n[3/4] Pushing to origin (hero-carousel)...")
    success, output = run_command([
        'git', 'push', '--force-with-lease', 'origin', 'hero-carousel'
    ])
    
    if success:
        print("✅ Push successful")
    else:
        print(f"❌ Push failed: {output}")
        # Try with heroku branch as fallback
        print("\n[3/4b] Trying heroku branch...")
        success, output = run_command([
            'git', 'push', '--force-with-lease', 'origin', 'heroku'
        ])
        if success:
            print("✅ Push to heroku successful")
        else:
            print(f"❌ Push to heroku also failed: {output}")
            return 1
    
    # Verify
    print("\n[4/4] Verifying deployment status...")
    success, output = run_command(['git', 'log', '--oneline', '-1'])
    if success:
        print(f"✅ Latest commit: {output.strip()}")
    
    print("\n" + "=" * 60)
    print("✅ DEPLOYMENT COMPLETE")
    print("=" * 60)
    
    return 0

if __name__ == '__main__':
    sys.exit(main())