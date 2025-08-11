import json
import os
from datetime import datetime, timedelta, timezone
from urllib.parse import urlencode

import requests


def ensure_directory(path: str) -> None:
    os.makedirs(path, exist_ok=True)


def iso_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def fetch_trending_repositories(days: int = 7, per_page: int = 50) -> dict:
    created_since = (datetime.now(timezone.utc) - timedelta(days=days)).date().isoformat()
    query_params = {
        "q": f"created:>={created_since}",
        "sort": "stars",
        "order": "desc",
        "per_page": str(per_page),
        "page": "1",
    }
    url = f"https://api.github.com/search/repositories?{urlencode(query_params)}"

    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "cloud-automations-bot/1.0",
    }
    token = os.getenv("GITHUB_TOKEN") or os.getenv("GH_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    response = requests.get(url, headers=headers, timeout=30)
    if response.status_code != 200:
        raise SystemExit(
            f"GitHub API error {response.status_code}: {response.text[:200]}"
        )

    data = response.json()
    items = data.get("items", [])

    repositories = []
    for item in items:
        repositories.append(
            {
                "name": item.get("name"),
                "full_name": item.get("full_name"),
                "html_url": item.get("html_url"),
                "description": item.get("description"),
                "stargazers_count": item.get("stargazers_count"),
                "language": item.get("language"),
                "topics": item.get("topics", []),
                "created_at": item.get("created_at"),
                "updated_at": item.get("updated_at"),
            }
        )

    return {
        "generated_at": iso_now(),
        "window_days": days,
        "total": len(repositories),
        "repositories": repositories,
        "source": {
            "api": "https://api.github.com/search/repositories",
            "query": query_params,
        },
    }


def main() -> None:
    output_dir = os.path.join("data", "trending")
    ensure_directory(output_dir)
    payload = fetch_trending_repositories()
    output_path = os.path.join(output_dir, "latest.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    print(f"Wrote trending data to {output_path}")


if __name__ == "__main__":
    main()