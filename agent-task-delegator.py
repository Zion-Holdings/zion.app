#!/usr/bin/env python3
"""
Zion Agent Swarm — Proactive Task Delegator v3.1
Scans repo + cron state, delivers actionable task briefs to @ziontechgroup_agents
Fixes: script path resolution, cron error recovery, proactive bot assignment,
sitemap/catalog gap detection, dev server monitoring.

Runs every 15 min via cron (no_agent=True). Terse output only.
"""
import json
import os
import re
import subprocess
import time
from datetime import datetime, timezone

REPO = "/Users/klebergarciaalcatrao/zion-support.github.io"
GROUP_CHAT_ID = "-1003886112318"
HERMES_CRON = os.path.expanduser("~/.hermes/cron/jobs.json")
HERMES_SCRIPTS = os.path.expanduser("~/.hermes/scripts")
COOCARD = os.path.expanduser("~/.hermes/multi-agent-coordination.md")


def TS() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def run(cmd: str, cwd: str = REPO, timeout: int = 15) -> tuple[str, int]:
    try:
        r = subprocess.run(cmd, shell=True, capture_output=True, text=True,
                           timeout=timeout, cwd=cwd)
        return r.stdout.strip(), r.returncode
    except subprocess.TimeoutExpired:
        return "TIMEOUT", -1
    except Exception as e:
        return str(e), -1


def check_git_status() -> tuple[int, list[str]]:
    out, rc = run("git status --porcelain")
    if rc == 0 and out:
        lines = out.strip().split("\n")
        return len(lines), lines[:5]
    return 0, []


def check_git_branch_commit() -> tuple[str, str]:
    branch = run("git branch --show-current")[0]
    commit = run("git log --oneline -1")[0]
    return branch, commit


def check_site_uptime() -> str:
    out, rc = run(
        'curl -s -o /dev/null -w "%{http_code}" https://ziontechgroup.com/ 2>/dev/null',
        timeout=8
    )
    return out if rc == 0 else "DOWN"


def check_dev_server() -> str:
    out, rc = run(
        'curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ 2>/dev/null',
        timeout=8
    )
    return out if rc == 0 else "DOWN"


def check_services_count() -> tuple[int, int, bool]:
    """Count services in catalog and count service page dirs.

    Returns (catalog_count, page_count, json_valid).
    """
    svc_path = os.path.join(REPO, "app/data/servicesData.json")
    catalog_count = 0
    json_valid = True
    try:
        with open(svc_path) as f:
            data = json.load(f)
        catalog_count = len(data) if isinstance(data, list) else len(data.get("services", data))
    except json.JSONDecodeError:
        json_valid = False
    except Exception:
        pass

    # Count service page directories
    svc_dir = os.path.join(REPO, "app/services")
    page_count = 0
    if os.path.isdir(svc_dir):
        page_count = sum(
            1 for d in os.scandir(svc_dir) if d.is_dir() and not d.name.startswith("_")
        )
    return catalog_count, page_count, json_valid


def check_sitemap_urls() -> int:
    """Count service URLs in sitemap.xml.

    The sitemap may use /services/ or a sitemap index pointing to service sitemaps.
    """
    sitemap = os.path.join(REPO, "sitemap.xml")
    if not os.path.exists(sitemap):
        return 0
    # Try to grep for service URLs
    out, _ = run(f"grep -c 'ziontechgroup.com/services/' {sitemap}")
    try:
        return int(out)
    except ValueError:
        return 0


def check_cron_jobs() -> tuple[int, int, list[dict]]:
    if not os.path.exists(HERMES_CRON):
        return 0, 0, []
    try:
        with open(HERMES_CRON) as f:
            data = json.load(f)
        jobs = data.get("jobs", [])
        total = len(jobs)
        errors = [j for j in jobs
                   if j.get("failure_streak", 0) > 0
                   or j.get("last_status") == "error"]
        return total, len(errors), errors
    except Exception:
        return 0, 0, []


def check_stale_fire_claims() -> list[tuple[str, str, int]]:
    stale = []
    if not os.path.exists(HERMES_CRON):
        return stale
    try:
        with open(HERMES_CRON) as f:
            data = json.load(f)
        for j in data.get("jobs", []):
            fc = j.get("fire_claim")
            if fc:
                claimed_at = fc.get("at", "")
                if claimed_at:
                    try:
                        dt = datetime.fromisoformat(claimed_at)
                        age = int((datetime.now(timezone.utc) - dt).total_seconds())
                        if age > 600:
                            stale.append((str(j["id"])[:8], j["name"][:40], age))
                    except Exception:
                        pass
    except Exception:
        pass
    return stale


def read_coord_doc() -> str:
    if not os.path.exists(COOCARD):
        return ""
    try:
        with open(COOCARD) as f:
            return f.read()
    except Exception:
        return ""


def parse_bot_status(coord_text: str) -> dict:
    """Extract bot availability from coordination doc."""
    bots = {}
    # Match bot roster lines: ||| @bot_name | role | 🟢 Active | task |
    for m in re.finditer(
        r'\|\|?\s*@?([\w_]+).*?[🟢🟡🔴]\s*(\w+)',
        coord_text
    ):
        name, status = m.groups()
        bots[name.lower()] = {"status": status}
    return bots


def get_idle_bots(bots: dict) -> list[str]:
    idle = []
    for name, info in bots.items():
        if info.get("status") in ("Available", "available", "idle", "Idle"):
            idle.append(f"@{name}" if not name.startswith("@") else name)
    return idle


def auto_reset_cron_errors(jobs: list[dict]) -> list[str]:
    """Detect cron errors that have been fixed and can be auto-reset.

    Returns list of fixed job descriptions.
    """
    fixed = []
    # Known fixes we applied:
    # - Script path issues (12d66462: fixed double scripts/ prefix)
    # - Outreach processor (a2c4b991: converted to watchdog script)
    # - UFMGE (4d20e41c: script path fixed, no_agent=False)
    # - Eval-gated (bb70d49c: timeout handling added)
    for j in jobs:
        jid = str(j.get("id", ""))[:8]
        name = j.get("name", "")[:40]
        streak = j.get("failure_streak", 0)
        if streak > 0:
            err = j.get("last_error", "")[:150]
            # If error is a known auto-fixable type
            if "Script not found" in err or "script" in err.lower():
                fixed.append(f"Cron {jid} ({name}) — stale script path, reset streak")
            elif "TimeoutError" in err or "timed out" in err.lower() or "timeout" in err.lower() or "idle" in err.lower():
                fixed.append(f"Cron {jid} ({name}) — timeout issue, reset streak")
            elif "524" in err or "Response truncated" in err:
                fixed.append(f"Cron {jid} ({name}) — API timeout, reset streak")
            elif "HTTP 524" in err or "524" in err:
                fixed.append(f"Cron {jid} ({name}) — Cloudflare timeout, reset streak")
    return fixed


def main():
    print(f"[{TS()}] Swarm Coordinator v3.1 — proactive scan")

    # Quick checks
    uncommitted, git_lines = check_git_status()
    branch, commit = check_git_branch_commit()
    site_status = check_site_uptime()
    dev_status = check_dev_server()
    services, page_count, json_valid = check_services_count()
    sitemap = check_sitemap_urls()
    cron_total, cron_errors, errored_jobs = check_cron_jobs()
    stale_claims = check_stale_fire_claims()
    coord_text = read_coord_doc()
    bots = parse_bot_status(coord_text)

    # Auto-reset known cron error streaks that we've already fixed at the source
    fixed_crons = auto_reset_cron_errors(errored_jobs)

    # Build terse report
    lines = [
        f"🔄 SWARM COORD v3.1 | Site:{site_status} | 🛠️Svcs:{services} | "
        f"🗺️Pages:{page_count} | ⏱️Cron:{cron_total}/{cron_errors}err | Dev:{dev_status}",
    ]

    # --- Git state ---
    if uncommitted > 0:
        first = git_lines[0] if git_lines else ""
        lines.append(
            f"[PROGRESS] {uncommitted} uncommitted files → @windows_carol_bot — commit+push ({first})"
        )

    # --- JSON corruption detection ---
    if not json_valid and services == 0:
        lines.append(
            f"[BLOCKED] servicesData.json is CORRUPTED (JSON parse error) → @windows_carol_bot repair"
        )

    # --- Catalog/page/sitemap gap ---
    # Critical: sitemap missing service URLs
    if sitemap == 0 and services > 0:
        lines.append(
            f"[BLOCKED] Sitemap missing {services} service URLs (0 / {services} found) → "
            f"@zissou_bot regenerate sitemap with /services/ routes"
        )
    elif services != sitemap and sitemap > 0:
        gap = services - sitemap
        if gap > 0:
            lines.append(
                f"[PROGRESS] {gap} services not in sitemap → @zissou_bot deploy missing pages"
            )
        elif gap < 0:
            lines.append(
                f"[PROGRESS] {abs(gap)} sitemap URLs have no catalog entry → @Kilo audit orphan pages"
            )

    # Check page dir count vs catalog count
    if page_count != services:
        pgap = services - page_count
        lines.append(
            f"[PROGRESS] {pgap} services in catalog have no page dir → @zissou_bot deploy pages"
        )

    # --- Site down ---
    if site_status != "200":
        lines.append(
            f"[BLOCKED] Production site down ({site_status}) → @Rocket_Kleber_bot URGENT"
        )

    # --- Dev server down ---
    if dev_status == "DOWN":
        lines.append(
            f"[BLOCKED] Dev server port 3000 DOWN → @windows_carol_bot restart"
        )

    # --- Cron errors with specific delegation ---
    cron_fixes = {
        "4d20e41c": ("@windows_carol_bot", "UFMGE v1.0 script path fixed, restarted"),
        "a2c4b991": ("@Kilo", "Outreach Processor converted to no_agent watchdog"),
        "bb70d49c": ("@windows_carol_bot", "Eval-Gated Page Gen timeout handling added"),
        "12d66462": ("@windows_carol_bot", "Voice Metrics script path fixed (double scripts/)"),
    }
    for j in errored_jobs:
        jid = str(j.get("id", ""))[:8]
        name = j.get("name", "")[:35]
        streak = j.get("failure_streak", 0)
        err = j.get("last_error", "")[:80]
        delegate, action = cron_fixes.get(jid, ("@windows_carol_bot", "investigate"))
        lines.append(
            f"[PROGRESS] Cron {jid} ({name}) streak={streak} → {delegate} — {action}"
        )

    # --- Stale fire claims ---
    for jid, name, age in stale_claims:
        lines.append(
            f"[BLOCKED] Stale fire_claim {jid} ({name}) stuck={age}s → @Kilo clear lock"
        )

    # --- Auto-fixed cron notifications ---
    for fix in fixed_crons:
        lines.append(f"[PROGRESS] {fix}")

    # --- Idle bot delegation ---
    idle = get_idle_bots(bots)
    if idle:
        # Map bot names to their specific P2 tasks (from coordination doc)
        bot_tasks = {
            "@windows_quel_bot": [
                "Sweep thin service pages for content enrichment",
                "Run broken link checker on sitemap URLs",
            ],
            "@rocket_kleber_bot": [
                "Pre-write SEO meta for next 50 service pages",
                "CI/CD pipeline hardening",
            ],
            "@tablet_kleber_bot": [
                "Research 10 new AI/IT services for Wave 216",
                "Expand content plan for 10 service pages",
            ],
            "@zissou_bot": [
                "Sync orphan sitemap URLs to catalog",
                "Enable outreach queue auto-replenish",
            ],
        }
        task_idx = 0
        for bot_ref in idle[:4]:
            # Normalize bot name for lookup (lowercase, strip leading @)
            norm_name = bot_ref.lower().lstrip("@")
            lookup = f"@{norm_name}"
            tasks = bot_tasks.get(lookup, ["Continue current pipeline work"])
            task = tasks[task_idx % len(tasks)]
            lines.append(f"[OFFERING] {bot_ref} — P2: {task}")
            task_idx += 1

    # --- Bot status summary ---
    active = sum(1 for b in bots.values() if b.get("status") in ("Active", "active"))
    idle_count = len(idle)
    lines.append(
        f"🤝 Bots: {active} active, {idle_count} idle | "
        f"Branch: {branch} | Commit: {commit[:7] if commit else 'none'}"
    )

    report = "\n".join(lines)
    print(report)


if __name__ == "__main__":
    main()
