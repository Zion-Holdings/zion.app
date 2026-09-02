from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[2]


def _run_composio(tool: str, payload: dict[str, Any]) -> dict[str, Any]:
    cmd = [
        "composio",
        "run",
        json.dumps(
            {
                "tool": tool,
                "input": payload,
            }
        ),
    ]
    try:
        proc = subprocess.run(cmd, capture_output=True, text=True, check=False)
    except FileNotFoundError as exc:
        return {"ok": False, "tool": tool, "error": f"composio binary not found: {exc}"}
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


def _write_report(label: str, payload: dict[str, Any]) -> Path:
    out = REPO_ROOT / "automation" / "reports" / f"composio-{label}.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(payload, indent=2, ensure_ascii=False))
    return out


def cmd_health(_args: argparse.Namespace) -> int:
    tools = [
        "GMAIL_LIST_THREADS",
        "LINEAR_LIST_LINEAR_ISSUES",
        "GITHUB_CREATE_AN_ISSUE",
        "GOOGLE_ANALYTICS_LIST_ACCOUNT_SUMMARIES",
        "SENTRY_GET_ORGANIZATION_DETAILS",
        "CLOUDFLARE_LIST_ZONES",
        "APOLLO_PEOPLE_ENRICHMENT",
        "GOOGLECALENDAR_LIST_CALENDARS",
        "GOOGLESHEETS_SEARCH_SPREADSHEETS",
    ]
    results: dict[str, Any] = {"ok": True, "results": {}}
    for tool in tools:
        results["results"][tool] = _run_composio(tool, {})
    return 0 if results["ok"] else 1


def cmd_enrich_lead(args: argparse.Namespace) -> int:
    result = _run_composio(
        "APOLLO_PEOPLE_ENRICHMENT",
        {
            "q_keywords": args.domain,
            "person_titles": ["CTO", "VP Engineering"],
        },
    )
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0 if result.get("ok") else 1


def cmd_create_linear_issue(args: argparse.Namespace) -> int:
    result = _run_composio(
        "LINEAR_CREATE_LINEAR_ISSUE",
        {
            "team_id": "a92e1670-db71-4cec-bb71-b3c647ca164b",
            "title": args.title,
            "description": args.description,
        },
    )
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0 if result.get("ok") else 1


def cmd_linear_backlog(args: argparse.Namespace) -> int:
    payload: dict[str, Any] = {"state": args.state, "first": args.first}
    if args.project_id:
        payload["project_id"] = args.project_id
    result = _run_composio("LINEAR_LIST_LINEAR_ISSUES", payload)
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0 if result.get("ok") else 1


def cmd_create_github_issue(args: argparse.Namespace) -> int:
    result = _run_composio(
        "GITHUB_CREATE_AN_ISSUE",
        {
            "owner": args.owner,
            "repo": args.repo,
            "title": args.title,
            "body": args.body,
        },
    )
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0 if result.get("ok") else 1


def analytics_report(property_id: str, days: int = 7) -> dict[str, Any]:
    return _run_composio(
        "GOOGLE_ANALYTICS_BATCH_RUN_REPORTS",
        {
            "property": property_id,
            "requests": [
                {
                    "dateRanges": [
                        {
                            "startDate": f"{days}daysAgo",
                            "endDate": "today",
                        }
                    ],
                    "metrics": [{"name": "users", "expression": "users"}],
                }
            ],
        },
    )


def cloudflare_zones() -> dict[str, Any]:
    return _run_composio("CLOUDFLARE_LIST_ZONES", {})


def sentry_org_details() -> dict[str, Any]:
    return _run_composio("SENTRY_GET_ORGANIZATION_DETAILS", {})


def list_sentry_issues(org: str, days: int = 7) -> dict[str, Any]:
    return _run_composio(
        "SENTRY_LIST_AN_ORGANIZATIONS_ISSUES",
        {
            "organization": org,
            "query": f"lastSeen:-{days}d",
            "limit": 50,
        },
    )


def list_google_calendars() -> dict[str, Any]:
    return _run_composio("GOOGLECALENDAR_LIST_CALENDARS", {})


def search_google_sheets(query: str) -> dict[str, Any]:
    return _run_composio("GOOGLESHEETS_SEARCH_SPREADSHEETS", {"query": query})


def save_report(label: str, payload: dict[str, Any]) -> Path:
    out = REPO_ROOT / "automation" / "reports" / f"composio-{label}.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(payload, indent=2, ensure_ascii=False))
    return out


def cmd_analytics(args: argparse.Namespace) -> int:
    result = analytics_report(args.property_id, days=args.days)
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0 if result.get("ok") else 1


def cmd_cloudflare(args: argparse.Namespace) -> int:
    result = cloudflare_zones()
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0 if result.get("ok") else 1


def cmd_sentry(args: argparse.Namespace) -> int:
    org = args.org or os.environ.get("SENTRY_ORG", "zion-tech-group")
    issues = list_sentry_issues(org, days=args.days)
    print(json.dumps(issues, indent=2, ensure_ascii=False))
    return 0 if issues.get("ok") else 1


def cmd_calendar(args: argparse.Namespace) -> int:
    result = list_google_calendars()
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0 if result.get("ok") else 1


def cmd_sheets(args: argparse.Namespace) -> int:
    result = search_google_sheets(args.query)
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0 if result.get("ok") else 1


def cmd_save(args: argparse.Namespace) -> int:
    if args.command == "health":
        payload: dict[str, Any] = {"note": "run health subcommand"}
    else:
        payload = {"note": f"save {args.command} output here"}
    path = save_report(args.label, payload)
    print(path)
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="Composio harness for Zion workflows")
    sub = p.add_subparsers(dest="command")

    sub.add_parser("health", help="Run connectivity health checks")

    enrich = sub.add_parser("enrich-lead", help="Enrich lead via Apollo")
    enrich.add_argument("company")
    enrich.add_argument("domain")

    li = sub.add_parser("create-linear-issue", help="Create Linear issue")
    li.add_argument("title")
    li.add_argument("description")

    lb = sub.add_parser("linear-backlog", help="List Linear issues")
    lb.add_argument("--first", type=int, default=10)
    lb.add_argument("--project-id", default=None)
    lb.add_argument("--state", default="open")

    gi = sub.add_parser("create-github-issue", help="Create GitHub issue")
    gi.add_argument("owner")
    gi.add_argument("repo")
    gi.add_argument("title")
    gi.add_argument("body")

    ga = sub.add_parser("analytics", help="Google Analytics report")
    ga.add_argument("property_id", default="properties/399939963")
    ga.add_argument("--days", type=int, default=7)

    sub.add_parser("cloudflare", help="List Cloudflare zones")
    sub.add_parser("sentry", help="Sentry org details")
    sub.add_parser("calendar", help="List Google Calendars")

    sh = sub.add_parser("sheets", help="Search Google Sheets")
    sh.add_argument("query")

    return p


def main(argv: list[str] | None = None) -> int:
    p = build_parser()
    args = p.parse_args(argv)
    if not args.command:
        p.print_help()
        return 2

    dispatch = {
        "health": cmd_health,
        "enrich-lead": cmd_enrich_lead,
        "create-linear-issue": cmd_create_linear_issue,
        "linear-backlog": cmd_linear_backlog,
        "create-github-issue": cmd_create_github_issue,
        "analytics": cmd_analytics,
        "cloudflare": cmd_cloudflare,
        "sentry": cmd_sentry,
        "calendar": cmd_calendar,
        "sheets": cmd_sheets,
    }
    fn = dispatch.get(args.command)
    if fn is None:
        p.print_help()
        return 2
    return fn(args)


if __name__ == "__main__":
    raise SystemExit(main())
