#!/usr/bin/env python3
"""Stage specific files (skip huge JSON), commit, and push."""
import subprocess
import os

ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"

def run(cmd, timeout=120):
    return subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=timeout)

# Remove git lock
if os.path.exists(os.path.join(ROOT, ".git", "index.lock")):
    os.remove(os.path.join(ROOT, ".git", "index.lock"))
    print("Removed .git/index.lock")

# Stage specific files (not the 95MB servicesData.json)
critical_files = [
    "public/_redirects",
    "public/robots.txt",
    "public/sitemap.xml",
    "sitemap.xml",
    "app/services/[id]/page.tsx",
    "app/industries/finance/page.tsx",
    "app/about/team/page.tsx",
    "feed.xml",
    ".github/workflows/gh-pages.yml",
]

# Add blog pages individually
blog_pages = []
for root, dirs, files in os.walk(os.path.join(ROOT, "app", "blog")):
    for f in files:
        if f == "page.tsx":
            rel = os.path.relpath(os.path.join(root, f), ROOT)
            if rel not in blog_pages:
                blog_pages.append(rel)

# Stage critical files
for f in critical_files:
    result = run(["git", "add", f], timeout=30)
    if result.returncode != 0 and "does not have" not in result.stderr:
        print(f"  ⚠️  {f}: {result.stderr.strip()[:100]}")
    else:
        print(f"  ✅ {f}")

# Stage blog pages (limit to the ones we created)
created_blogs = [
    "app/blog/ai-for-data-engineering-and-pipeline-automation/page.tsx",
    "app/blog/ai-for-devops-and-incident-response/page.tsx",
    "app/blog/ai-for-it-operations-and-observability/page.tsx",
    "app/blog/ai-for-managed-it-and-enterprise-support/page.tsx",
    "app/blog/ai-for-network-operations-and-telecom-automation/page.tsx",
    "app/blog/ai-for-project-management-and-delivery/page.tsx",
    "app/blog/ai-for-quality-assurance-and-testing/page.tsx",
    "app/blog/ai-for-revenue-operations-and-business-intelligence/page.tsx",
    "app/blog/ai-for-sales-automation-and-crm-intelligence/page.tsx",
    "app/blog/ai-for-security-operations-and-compliance/page.tsx",
    "app/blog/ai-for-service-desk-and-support-automation/page.tsx",
    "app/blog/ai-predictive-maintenance-for-infrastructure/page.tsx",
]
for f in created_blogs:
    if os.path.exists(os.path.join(ROOT, f)):
        result = run(["git", "add", f], timeout=10)
        print(f"  ✅ {f}" if result.returncode == 0 else f"  ⚠️  {f}")

# Stage scripts
for s in ["scripts/fix_service_pages.cjs", "scripts/generate-public-sitemap.cjs", "scripts/deep_crawl.py", "scripts/analyze_crawl.py"]:
    if os.path.exists(os.path.join(ROOT, s)):
        run(["git", "add", s], timeout=10)

print(f"\nTotal blog pages available: {len(blog_pages)}")

# Commit
result = run(["git", "commit", "-m", "fix: resolve broken links, add redirects, sitemap, robots.txt, content"], timeout=60)
if "nothing to commit" in result.stdout:
    print("Nothing new to commit")
else:
    print(f"Committed: {result.stdout.strip()[:200]}")

# Push with retries
for attempt in range(5):
    result = run(["git", "push", "origin", "main"], timeout=300)
    if result.returncode == 0:
        print(f"\n✅ PUSH SUCCESS")
        break
    else:
        if "fetch first" in result.stderr or "rejected" in result.stderr:
            print(f"Attempt {attempt+1}: Remote ahead, pulling...")
            run(["git", "stash", "-u"], timeout=60)
            pull = run(["git", "pull", "origin", "main", "--no-edit"], timeout=120)
            print(f"  Pull done")
            run(["git", "stash", "pop"], timeout=60)
            # Re-add files after stash pop
            for f in critical_files + created_blogs:
                if os.path.exists(os.path.join(ROOT, f)):
                    run(["git", "add", f], timeout=30)
            for s in ["scripts/fix_service_pages.cjs", "scripts/generate-public-sitemap.cjs", "scripts/deep_crawl.py"]:
                if os.path.exists(os.path.join(ROOT, s)):
                    run(["git", "add", s], timeout=10)
            run(["git", "commit", "-m", "fix: resolve broken links, add redirects, sitemap, robots.txt, content"], timeout=60)
        else:
            print(f"Push error: {result.stderr[:300]}")
            break
else:
    print("\n❌ FAILED to push after 5 attempts")
