import os
import subprocess
from typing import Optional


def ensure_git_identity() -> None:
    name = os.environ.get("GIT_AUTHOR_NAME", "automation-bot")
    email = os.environ.get("GIT_AUTHOR_EMAIL", "automation@local")
    subprocess.run(["git", "config", "user.name", name], check=False)
    subprocess.run(["git", "config", "user.email", email], check=False)


def commit_all_changes(message: str) -> bool:
    subprocess.run(["git", "add", "-A"], check=False)
    # check if any changes
    diff = subprocess.run(["git", "diff", "--cached", "--quiet"], check=False)
    if diff.returncode == 0:
        return False
    subprocess.run(["git", "commit", "-m", message], check=True)
    return True


def open_pr(title: str, body: str, base: str = "main", head: Optional[str] = None) -> str:
    # Use GitHub CLI if available, else push a branch and use API via curl
    head_branch = head or f"automation/{os.urandom(3).hex()}"
    subprocess.run(["git", "checkout", "-B", head_branch], check=True)
    subprocess.run(["git", "push", "-u", "origin", head_branch], check=True)

    repo = os.environ.get("GITHUB_REPOSITORY")
    token = os.environ.get("GITHUB_TOKEN")
    if not (repo and token):
        return f"pushed branch {head_branch}; PR not opened (missing GITHUB_TOKEN)"

    import json, urllib.request
    url = f"https://api.github.com/repos/{repo}/pulls"
    data = json.dumps({"title": title, "body": body, "head": head_branch, "base": base}).encode()
    req = urllib.request.Request(url, data=data, headers={"Authorization": f"Bearer {token}", "Accept": "application/vnd.github+json"})
    with urllib.request.urlopen(req) as resp:
        pr = json.loads(resp.read().decode())
    return pr.get("html_url", "")