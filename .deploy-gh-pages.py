#!/usr/bin/env python3
import subprocess, shutil, os
from pathlib import Path

REPO = Path("/data/data/com.termux/files/home/zion-support.github.io")
TMP = REPO / ".gh-pages-deploy"
BRANCH = "gh-pages"

# Clean any previous temp deploy dir
if TMP.exists():
    shutil.rmtree(TMP)

# Clone only gh-pages branch
subprocess.run(["git", "clone", "--branch", BRANCH, str(REPO), str(TMP)], check=True)

# Copy blog content from main repo
pub_src = REPO / "public/blog"
pub_dst = TMP / "public/blog"
docs_src = REPO / "docs/blog"
docs_dst = TMP / "docs/blog"

if pub_src.exists():
    if pub_dst.exists():
        shutil.rmtree(pub_dst)
    shutil.copytree(pub_src, pub_dst)
    print(f"Copied public/blog ({len(list(pub_src.iterdir()))} dirs)")
else:
    print("No public/blog to copy")

if docs_src.exists():
    if docs_dst.exists():
        shutil.rmtree(docs_dst)
    shutil.copytree(docs_src, docs_dst)
    print(f"Copied docs/blog ({len(list(docs_src.iterdir()))} dirs)")
else:
    print("No docs/blog to copy")

# Copy _redirects if it exists
redirects_src = REPO / "_redirects"
redirects_dst = TMP / "_redirects"
if redirects_src.exists():
    shutil.copy2(redirects_src, redirects_dst)
    print("Copied _redirects")

# Commit and push
os.chdir(TMP)
subprocess.run(["git", "add", "public/blog", "docs/blog", "_redirects"], check=False)
subprocess.run(["git", "status", "-s"], check=False)
subprocess.run(["git", "commit", "-m", "deploy: direct blog content to gh-pages"], check=False)
subprocess.run(["git", "pull", "--rebase", "origin", BRANCH], check=False)
subprocess.run(["git", "push", "origin", BRANCH], check=False)

# Cleanup
os.chdir(REPO)
shutil.rmtree(TMP)
print("direct gh-pages deploy done")
