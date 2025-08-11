import json
import os
import time
from datetime import datetime, timezone
from typing import List

import requests

URLS: List[str] = [
    "https://www.github.com",
    "https://www.wikipedia.org",
    "https://example.com",
]


def ensure_directory(path: str) -> None:
    os.makedirs(path, exist_ok=True)


def iso_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def check_url(url: str) -> dict:
    start = time.perf_counter()
    ok = False
    status_code = None
    error = None
    try:
        response = requests.get(url, timeout=20)
        status_code = response.status_code
        ok = 200 <= status_code < 400
    except Exception as e:
        error = str(e)
    elapsed_ms = round((time.perf_counter() - start) * 1000, 1)
    return {
        "url": url,
        "ok": ok,
        "status_code": status_code,
        "response_ms": elapsed_ms,
        "error": error,
        "checked_at": iso_now(),
    }


def run_checks() -> dict:
    results = [check_url(url) for url in URLS]
    summary = {
        "total": len(results),
        "ok": sum(1 for r in results if r["ok"]),
        "fail": sum(1 for r in results if not r["ok"]),
        "avg_ms": round(sum(r["response_ms"] for r in results) / max(1, len(results)), 1),
    }
    return {
        "generated_at": iso_now(),
        "summary": summary,
        "results": results,
    }


def main() -> None:
    output_dir = os.path.join("data", "uptime")
    ensure_directory(output_dir)
    payload = run_checks()
    output_path = os.path.join(output_dir, "latest.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    print(f"Wrote uptime data to {output_path}")


if __name__ == "__main__":
    main()