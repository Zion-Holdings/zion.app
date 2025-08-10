import os
import json
from pathlib import Path
from typing import List, Dict
import urllib.request


def _create_issue(title: str, body: str) -> str:
    repo = os.environ.get("GITHUB_REPOSITORY")
    token = os.environ.get("GITHUB_TOKEN")
    if not (repo and token):
        return ""
    url = f"https://api.github.com/repos/{repo}/issues"
    data = json.dumps({"title": title, "body": body}).encode()
    req = urllib.request.Request(url, data=data, headers={"Authorization": f"Bearer {token}", "Accept": "application/vnd.github+json"})
    with urllib.request.urlopen(req) as resp:
        out = json.loads(resp.read().decode())
    return out.get("html_url", "")


def issues_from_intents(intents_path: Path, min_count: int = 5) -> List[str]:
    if not intents_path.exists():
        return []
    intents: List[Dict] = json.loads(intents_path.read_text(encoding="utf-8"))
    urls: List[str] = []
    for row in intents:
        if row.get("count", 0) >= min_count:
            title = f"High-volume intent detected: {row.get('intent')}"
            body = f"Intent '{row.get('intent')}' observed {row.get('count')} times. Consider updating prompts, guides, or skills."
            url = _create_issue(title, body)
            if url:
                urls.append(url)
    return urls


def issues_from_eval(results_path: Path) -> List[str]:
    if not results_path.exists():
        return []
    results: List[Dict] = json.loads(results_path.read_text(encoding="utf-8"))
    failures = [r for r in results if r.get("error")]
    if not failures:
        return []
    title = f"Evaluation failures: {len(failures)} prompts"
    body = "\n".join([f"- {r.get('prompt')}: {r.get('error')}" for r in failures[:20]])
    url = _create_issue(title, body)
    return [url] if url else []