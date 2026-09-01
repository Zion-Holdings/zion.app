#!/usr/bin/env python3
"""Agent task delegator: scan repo/scripts/pipeline state, detect gaps/bottlenecks,
and emit a JSON report consumable by cron-swarm-coordinator.sh.

Outputs:
  /tmp/agent_task_delegator_report.json
  STDOUT: one-line summary
"""
import os
import sys
import json
from datetime import datetime

REPO = os.environ.get("REPO", "/data/data/com.termux/files/home/ztg/repo")
OUT = os.environ.get("AGENT_TASK_DELEGATOR_OUT", "/data/data/com.termux/files/home/ztg/repo/tmp/agent_task_delegator_report.json")


def main():
    repo = REPO
    findings = []
    gaps = []
    bottlenecks = []

    # 1) Script health scan - recursive scan
    scripts = []
    scripts_dir = os.path.join(repo, "scripts")
    if os.path.isdir(scripts_dir):
        for root, dirs, files in os.walk(scripts_dir):
            for name in files:
                if name.endswith((".py", ".sh")):
                    scripts.append(os.path.join(root, name))
    scripts = sorted(set(scripts))
    missing = [p for p in scripts if not os.path.isfile(p)]
    if missing:
        gaps.append({"type": "missing_scripts", "count": len(missing), "items": missing})

    # 2) Outreach pipeline gap scan
    om_dir = os.path.join(repo, "outreach_monitor/processed")
    pending = 0
    if os.path.isdir(om_dir):
        for name in ["pending_ceo_drafts.jsonl", "pending_replies.jsonl", "pending_outbound.jsonl"]:
            p = os.path.join(om_dir, name)
            try:
                with open(p, "r", encoding="utf-8", errors="ignore") as f:
                    pending += sum(1 for _ in f)
            except FileNotFoundError:
                pass
    if pending > 0:
        bottlenecks.append({"type": "outreach_pending", "count": pending})

    # 3) Git state: uncommitted/untracked
    git_status = []
    try:
        import subprocess
        res = subprocess.run(
            ["bash", "-lc", "git status --short --branch | head -200"],
            cwd=repo, capture_output=True, text=True, check=False
        )
        git_status = [line for line in res.stdout.splitlines() if line.strip()]
    except Exception:
        git_status = []
    if git_status:
        gaps.append({"type": "git_uncommitted", "count": len(git_status), "items": git_status[:20]})

    # 4) Composio workflows presence
    wf_dir = os.path.join(repo, ".github/workflows")
    wfs = []
    if os.path.isdir(wf_dir):
        wfs = [os.path.join(wf_dir, x) for x in os.listdir(wf_dir) if x.endswith((".yml", ".yaml"))]
    if not wfs:
        gaps.append({"type": "missing_workflows", "count": 0})

    report = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "repo": repo,
        "scripts_found": len(scripts),
        "gaps": gaps,
        "bottlenecks": bottlenecks,
        "findings": findings,
    }

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)

    print(f"delegator_report={json.dumps(report, ensure_ascii=False)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
