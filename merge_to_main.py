#!/usr/bin/env python3
import subprocess
import sys
import os
import time

def run_command(cmd, description, cwd='/workspace'):
    """Run a git command and return the result"""
    print(f"\n🔄 Running: {description}")
    print(f"📝 Command: {cmd}")
    
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
        if result.returncode == 0:
            print(f"✅ Success: {description}")
            if result.stdout.strip():
                print(f"📤 Output: {result.stdout.strip()}")
            return True
        else:
            print(f"❌ Error: {description}")
            if result.stderr.strip():
                print(f"🚨 Error: {result.stderr.strip()}")
            return False
    except Exception as e:
        print(f"💥 Exception: {e}")
        return False

def main():
    print("🚀 Starting Comprehensive Git Merge Process...")
    print("=" * 60)
    
    # 1. Check current status
    if not run_command("git status", "Check current git status"):
        print("❌ Failed to check git status. Exiting.")
        return False
    
    # 2. Get current branch
    if not run_command("git branch --show-current", "Get current branch"):
        print("❌ Failed to get current branch. Exiting.")
        return False
    
    # 3. Add all changes
    if not run_command("git add .", "Add all changes"):
        print("❌ Failed to add changes. Exiting.")
        return False
    
    # 4. Commit any remaining changes
    commit_msg = "Complete website audit and enhancement merge - Enhanced navigation structure - Fixed broken links - Created missing pages - Improved site organization"
    if not run_command(f'git commit -m "{commit_msg}"', "Commit changes"):
        print("ℹ️  No new changes to commit or commit failed")
    
    # 5. Push our branch
    if not run_command("git push origin website-audit-and-enhancement-final", "Push website-audit-and-enhancement-final branch"):
        print("❌ Failed to push branch. Exiting.")
        return False
    
    print("\n🎉 Branch pushed successfully!")
    
    # 6. Switch to main branch
    if not run_command("git checkout main", "Switch to main branch"):
        print("❌ Failed to switch to main. Exiting.")
        return False
    
    # 7. Pull latest changes from remote
    if not run_command("git pull origin main", "Pull latest changes from remote main"):
        print("❌ Failed to pull from remote. Exiting.")
        return False
    
    # 8. Merge our branch into main
    if not run_command("git merge website-audit-and-enhancement-final", "Merge website-audit-and-enhancement-final into main"):
        print("❌ Failed to merge branch. Exiting.")
        return False
    
    # 9. Push to main
    if not run_command("git push origin main", "Push merged changes to main"):
        print("❌ Failed to push to main. Exiting.")
        return False
    
    print("\n" + "=" * 60)
    print("🎉 SUCCESSFULLY MERGED INTO MAIN BRANCH!")
    print("=" * 60)
    
    print("\n📋 Next Steps:")
    print("1. ✅ Main branch updated with our changes")
    print("2. 🔍 Check GitHub for open Pull Requests")
    print("3. 🔀 Resolve any conflicts in open PRs")
    print("4. 📦 Merge all open PRs")
    print("5. 🚀 Deploy the updated website")
    
    print("\n🔍 GitHub Pull Requests:")
    print("Visit: https://github.com/Zion-Holdings/zion.app/pulls")
    
    return True

if __name__ == "__main__":
    print("Starting merge process...")
    success = main()
    if success:
        print("\n🎯 All done! Ready for next steps.")
    else:
        print("\n💥 Merge process failed. Please check the errors above.")
        sys.exit(1)