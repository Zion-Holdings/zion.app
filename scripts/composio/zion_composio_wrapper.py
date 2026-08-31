from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[2]


def _run(tool: str, payload: dict[str, Any]) -> dict[str, Any]:
    if shutil.which("composio") is None:
        return {
            "ok": False,
            "tool": tool,
            "error": "composio binary not available; use GitHub Actions workflow or install composio",
        }
    cmd = ["composio", "run", json.dumps({"tool": tool, "input": payload})]
    try:
        proc = subprocess.run(cmd, capture_output=True, text=True, check=False, timeout=60)
    except FileNotFoundError as exc:
        return {"ok": False, "tool": tool, "error": f"composio binary not found: {exc}"}
    except subprocess.TimeoutExpired:
        return {"ok": False, "tool": tool, "error": "composio call timed out"}
    raw = (proc.stdout or proc.stderr or "").strip()
    if proc.returncode != 0 and not raw:
        return {
            "ok": False,
            "tool": tool,
            "error": f"composio exited {proc.returncode}",
            "stderr": proc.stderr,
        }
    if not raw:
        return {"ok": True, "tool": tool, "raw": ""}
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        return {"ok": True, "tool": tool, "raw": raw}
    if isinstance(data, dict):
        if "error" in data:
            return {"ok": False, "tool": tool, "error": data["error"], "raw": data}
        return {"ok": True, "tool": tool, "data": data}
    return {"ok": True, "tool": tool, "data": data}


def run(tool: str, payload: dict[str, Any] | None = None) -> dict[str, Any]:
    return _run(tool, payload or {})


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"ok": False, "error": "tool required"}))
        raise SystemExit(2)
    print(json.dumps(run(sys.argv[1], json.loads(sys.argv[2]) if len(sys.argv) > 2 else {}), ensure_ascii=False))
