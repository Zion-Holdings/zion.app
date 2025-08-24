#!/usr/bin/env python3
import subprocess
import sys
import os

def run_command(cmd, description):
    """Run a git command and return the result"""
    print(f"Running: {description}")
    print(f"Command: {cmd}")
    
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd='/workspace')
        if result.returncode == 0:
            print(f"✅ Success: {description}")
            if result.stdout:
                print(f"Output: {result.stdout}")
        else:
            print(f"❌ Error: {description}")
            if result.stderr:
                print(f"Error: {result.stderr}")
        return result.returncode == 0
    except Exception as e:
        print(f"❌ Exception: {e}")
        return False

def main():
    print("🚀 Starting Git Merge Process...")
    
    # Check current status
    if not run_command("git status", "Check current git status"):
        return False
    
    # Add all changes
    if not run_command("git add .", "Add all changes"):
        return False
    
    # Commit any remaining changes
    if not run_command("git commit -m 'Complete website audit and enhancement merge'", "Commit changes"):
        return False
    
    # Push the branch
    if not run_command("git push origin website-audit-and-enhancement-final", "Push branch"):
        return False
    
    print("\n🎉 Branch pushed successfully!")
    print("📝 Next steps:")
    print("1. Go to GitHub and create a Pull Request")
    print("2. Merge the PR through GitHub interface")
    print("3. Or continue with local merge:")
    
    # Ask if user wants to continue with local merge
    response = input("\nDo you want to continue with local merge to main? (y/n): ")
    if response.lower() == 'y':
        # Switch to main
        if not run_command("git checkout main", "Switch to main branch"):
            return False
        
        # Merge our branch
        if not run_command("git merge website-audit-and-enhancement-final", "Merge branch into main"):
            return False
        
        # Push to main
        if not run_command("git push origin main", "Push to main"):
            return False
        
        print("\n🎉 Successfully merged and pushed to main!")
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)