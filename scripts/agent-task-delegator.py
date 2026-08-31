#!/usr/bin/env python3
"""
Zion Agent Swarm — Proactive Task Delegator v3.1

Coordinates @ziontechgroup_agents work: site health, catalog/sitemap sync,
cron health, GitHub Actions status, and actionable delegations.
Optimized for speed: targeted checks, minimal API calls, precise delegation.
Scans the zion-support.github.io repo for issues and delivers actionable task
briefs to @ziontechgroup_agents group (chat_id: -1003886112318).

Runs every 15 min via cron. Terse output only.
Optimized for speed: targeted checks, minimal API calls, precise delegation.
"""
import json
import os
import re
import subprocess
from datetime import datetime, timezone

REPO = os.environ.get("ZTG_REPO", os.getcwd())
GROUP_CHAT_ID = "-1003886112318"
HERMES_CRON = os.path.expanduser("~/.hermes/cron/jobs.json")


def ts():
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def run(cmd, cwd=REPO, timeout=15):
    try:
        r = subprocess.run(cmd, shell=True, capture_output=True, text=True,
                           timeout=timeout, cwd=cwd)
        return r.stdout.strip(), r.returncode
    except subprocess.TimeoutExpired:
        return "TIMEOUT", -1
    except Exception as e:
        return str(e), -1


def check_git_status():
    out, rc = run("git status --porcelain")
    if rc == 0 and out:
        lines = out.strip().split("\n")
        return len(lines), lines[:3]
    return 0, []


def check_cron_health():
    if not os.path.exists(HERMES_CRON):
        return 0, 0, []
    try:
        with open(HERMES_CRON) as f:
            data = json.load(f)
        jobs = data.get("jobs", [])
        total = len(jobs)
        errors = [j for j in jobs if j.get("failure_streak", 0) > 0]
        return total, len(errors), errors
    except Exception:
        return 0, 0, []


def check_services_count():
    svc_path = os.path.join(REPO, "app/data/servicesData.json")
    try:
        with open(svc_path) as f:
            data = json.load(f)
        return len(data) if isinstance(data, list) else 0
    except Exception:
        return 0


def check_sitemap_coverage():
    sitemap = os.path.join(REPO, "public/sitemap.xml")
    if not os.path.exists(sitemap):
        return 0
    out, _ = run(f"grep -c '<loc>' {sitemap}")
    try:
        return int(out)
    except ValueError:
        return 0


def check_site():
    out, rc = run(
        'curl -s -o /dev/null -w "%{http_code}" https://ziontechgroup.com/ 2>/dev/null',
        timeout=8
    )
    return out if rc == 0 else "DOWN"


def generate_brief():
    """Generate terse status brief for Telegram group."""
    site = check_site()
    svc_count = check_services_count()
    sitemap_urls = check_sitemap_coverage()
    git_changes, git_samples = check_git_status()
    cron_total, cron_errors, cron_err_list = check_cron_health()

    lines = []
    lines.append(f"🤖 ZION SWARM BRIEF — {ts()}")
    lines.append("")

    # Site status
    if site == "200":
        lines.append("✅ Site: UP (200)")
    else:
        lines.append(f"🔴 Site: {site}")

    # Catalog
    lines.append(f"📊 Services: {svc_count:,} | Sitemap: {sitemap_urls:,} URLs")

    # Git
    if git_changes > 0:
        lines.append(f"⚠️ Git: {git_changes} uncommitted changes")
        for s in git_samples:
            lines.append(f"   {s.strip()}")
    else:
        lines.append("✅ Git: clean")

    # Cron
    if cron_errors > 0:
        lines.append(f"⚠️ Cron: {cron_errors}/{cron_total} jobs with errors")
        for j in cron_err_list[:3]:
            lines.append(f"   — {j.get('name', '?')}: f={j.get('failure_streak', 0)}")
    else:
        lines.append(f"✅ Cron: {cron_total}/{cron_total} healthy")

    # Delegation logic
    lines.append("")
    lines.append("📋 DELEGATIONS:")
    lines.append("   👥 Agentes: @devops-leader @seo-agent @growth-engine @outreach-coord")

    if site != "200":
        lines.append("   @devops-leader → INVESTIGAR site down IMEDIATAMENTE")

    if git_changes > 50:
        lines.append("   @devops-leader → COMMIT ou STASH mudanças (>50 files)")

    if svc_count > sitemap_urls + 50:
        lines.append("   @seo-agent → SYNC sitemap/generate_service_index/generate-sitemap-feed")

    if cron_errors > 0:
        for j in cron_err_list:
            name = j.get("name", "")
            if "deploy" in name.lower():
                lines.append("   @build-engineer → FIX " + name)
            elif "outreach" in name.lower():
                lines.append("   @outreach-coord → FIX " + name)
            elif "smoke" in name.lower() or "monitor" in name.lower():
                lines.append("   @devops-leader → FIX " + name)

    if sitemap_urls < svc_count - 50:
        lines.append("   @seo-agent → SYNC sitemap/generate_service_index/generate-sitemap-feed")
    if svc_count < 20000:
        lines.append("   @growth-engine → GENERATE new services")

    lines.append("")
    lines.append("🎯 PRIORIDADE: Site UP → Cron Healthy → Sitemap Sync")
    lines.append("")
    lines.append("🔍 GAPS / BOTTLENECKS:")
    if site != "200":
        lines.append("   • Site indisponível — bloqueia toda a cadeia de validação e deploy.")
    if cron_errors > 0:
        lines.append(f"   • Cron instability: {cron_errors}/{cron_total} jobs com failure_streak — pode saturar retries e atrasar content/outreach loops.")
    if git_changes > 0:
        lines.append(f"   • Git drift: {git_changes} arquivos alterados sem commit — risco de perda de trabalho e conflitos em produção.")
    if sitemap_urls < svc_count - 50:
        lines.append("   • Sitemap lag: index menor que catálogo — SEO perde cobertura e crawl budget.")
    else:
        lines.append("   • Sitemap coverage ok (não é gargalo no momento).")
    if svc_count < 20000:
        lines.append(f"   • Catálogo abaixo do alvo ({svc_count:,} < 20k) — limita pipeline de conteúdo exponencial.")
    lines.append("")
    lines.append("📌 NEXT ACTIONS:")
    if site != "200":
        lines.append("   1) @devops-leader restaura site e valida /health + rotas críticas.")
    if cron_errors > 0:
        lines.append("   2) Ajustar política de retry / fallback nos jobs com failure_streak alto.")
    if git_changes > 0:
        lines.append("   3) @devops-leader faz commit/stash das mudanças pendentes antes do próximo deploy.")
    if svc_count < 20000:
        lines.append("   4) @growth-engine acelera geração de serviços até atingir 20k.")

    return "\n".join(lines)


if __name__ == "__main__":
    brief = generate_brief()
    print(brief)
