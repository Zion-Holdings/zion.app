#!/usr/bin/env python3
"""
composio-state-scanner.py
=========================
Escaneia o estado real do Composio para o Zion: chave, contas ativas,
auth_configs, toolkits disponíveis, e mapeia contra os 47 apps esperados.

Uso:
    export COMPOSIO_API_KEY="ak_..."
    python composio-state-scanner.py

Saída: JSON com estado real + gaps vs lista de 47 apps esperados.
Estado salvo em /tmp/composio-state-scan.json
"""

import os
import sys
import json
from datetime import datetime

COMPOSIO_API_KEY = os.environ.get("COMPOSIO_API_KEY", "")

# 47 apps esperados (integração map)
EXPECTED_APPS = [
    # CRITICAL (16)
    "github", "slack", "linear", "gmail", "notion", "hubspot",
    "firecrawl", "browser_tool", "vercel", "cloudflare",
    "supabase", "stripe", "posthog", "sentry", "whatsapp", "linkedin",
    # HIGH (11)
    "telegram", "discord", "google_calendar", "google_sheets",
    "google_docs", "google_drive", "google_tasks",
    "airtable", "perplexity_ai", "tavily", "exa",
    # MEDIUM (8)
    "outlook", "twitter", "todoist", "pipedrive", "snowflake",
    "jira", "trello", "asana",
    # LOW (8+)
    "clickup", "facebook", "instagram", "figma",
    "salesforce", "newrelic", "calendly", "sendgrid",
    "mailchimp", "shopify", "zendesk", "confluence",
    "gitlab", "dropbox",
]

def main():
    if not COMPOSIO_API_KEY:
        print("❌ COMPOSIO_API_KEY não configurada")
        print("   export COMPOSIO_API_KEY=\"ak_...\"")
        sys.exit(1)

    try:
        import composio
    except ImportError:
        print("❌ composio SDK não instalado")
        print("   pip install composio")
        sys.exit(1)

    print(f"🔍 Escaneando Composio — {datetime.now().isoformat()}")
    print(f"   Chave: {COMPOSIO_API_KEY[:8]}...{COMPOSIO_API_KEY[-4:]}")

    sdk = composio.Composio(api_key=COMPOSIO_API_KEY)

    # 1. Check if SDK init works
    init_ok = True
    try:
        # Test real surface — filtered probe
        tools = sdk.tools.get_raw_composio_tools(tools=["GITHUB_GET_REPOSITORY"])
        print(f"   ✅ SDK init + filtered probe OK ({len(tools)} tools)")
    except Exception as e:
        init_ok = False
        print(f"   ❌ SDK probe falhou: {type(e).__name__}: {e}")

    # 2. List connected accounts
    accounts = {"ACTIVE": [], "INITIALIZING": [], "EXPIRED": [], "other": []}
    try:
        accts_resp = sdk.connected_accounts.list()
        for a in accts_resp.items:
            status = a.status
            toolkit = a.toolkit.slug if a.toolkit else "unknown"
            entry = {
                "id": a.id,
                "toolkit": toolkit,
                "status": status,
                "user_id": a.user_id,
                "redirect_url": a.redirect_url or "",
            }
            if status in ("ACTIVE", "AUTHENTICATED"):
                accounts["ACTIVE"].append(entry)
            elif status == "INITIALIZING":
                accounts["INITIALIZING"].append(entry)
            elif status == "EXPIRED":
                accounts["EXPIRED"].append(entry)
            else:
                accounts["other"].append(entry)
    except Exception as e:
        print(f"   ⚠️  connected_accounts.list falhou: {e}")

    total_accounts = sum(len(v) for v in accounts.values())
    print(f"\n   Contas conectadas: {total_accounts} total")
    print(f"   ACTIVE: {len(accounts['ACTIVE'])}")
    print(f"   INITIALIZING: {len(accounts['INITIALIZING'])}")
    print(f"   EXPIRED: {len(accounts['EXPIRED'])}")

    for status_key in ("ACTIVE", "INITIALIZING", "EXPIRED"):
        for a in accounts[status_key]:
            print(f"      [{status_key}] {a['toolkit']:20s} {a['id']}  user={a['user_id']}")
            if a['redirect_url']:
                print(f"         → redirect: {a['redirect_url']}")

    # 3. List auth configs
    auth_configs = []
    try:
        ac_list = sdk.auth_configs.list()
        for ac in ac_list.items:
            auth_configs.append({
                "id": ac.id,
                "toolkit": ac.toolkit.slug if ac.toolkit else "unknown",
                "name": ac.name,
                "type": ac.type,
            })
    except Exception as e:
        print(f"\n   ⚠️  auth_configs.list falhou: {e}")

    print(f"\n   Auth configs: {len(auth_configs)}")
    for ac in auth_configs:
        print(f"      {ac['toolkit']:20s} {ac['id']}  type={ac['type']}")

    # 4. Compare with expected apps
    connected_toolkits = set(a["toolkit"] for a in accounts["ACTIVE"])
    all_known_toolkits = connected_toolkits | set(a["toolkit"] for a in accounts["INITIALIZING"]) | set(a["toolkit"] for a in accounts["EXPIRED"])
    auth_toolkits = set(ac["toolkit"] for ac in auth_configs)

    missing = [app for app in EXPECTED_APPS if app not in all_known_toolkits]
    ready = [app for app in EXPECTED_APPS if app in connected_toolkits]
    needs_human = [app for app in EXPECTED_APPS if app in all_known_toolkits and app not in connected_toolkits]

    print(f"\n   📊 Resumo:")
    print(f"   Apps conectados (ACTIVE): {len(ready)} / {len(EXPECTED_APPS)}")
    print(f"   Apps conectados (qualquer status): {len(needs_human)} / {len(EXPECTED_APPS)}")
    print(f"   Apps não encontrados: {len(missing)}")

    if ready:
        print(f"\n   ✅ READY (ACTIVE):")
        for app in ready:
            print(f"      {app}")

    if needs_human:
        print(f"\n   ⏳ NEEDS HUMAN (INITIALIZING/EXPIRED):")
        for app in needs_human:
            entries = [a for a in accounts["INITIALIZING"] + accounts["EXPIRED"] if a["toolkit"] == app]
            for e in entries:
                if e["redirect_url"]:
                    print(f"      {app:20s} → visit: {e['redirect_url']}")
                else:
                    print(f"      {app:20s} → EXPIRED (recreate)")

    if missing:
        print(f"\n   ❌ NOT CONNECTED ({len(missing)}):")
        for app in missing[:15]:
            print(f"      {app}")
        if len(missing) > 15:
            print(f"      ... e mais {len(missing) - 15}")

    # Build output
    output = {
        "timestamp": datetime.now().isoformat(),
        "api_key_valid": init_ok,
        "total_accounts": total_accounts,
        "active_count": len(accounts["ACTIVE"]),
        "initializing_count": len(accounts["INITIALIZING"]),
        "expired_count": len(accounts["EXPIRED"]),
        "accounts_active": accounts["ACTIVE"],
        "accounts_initializing": accounts["INITIALIZING"],
        "accounts_expired": accounts["EXPIRED"],
        "auth_configs": auth_configs,
        "connected_toolkits": sorted(connected_toolkits),
        "ready_apps": ready,
        "needs_human_apps": needs_human,
        "missing_apps": missing,
        "expected_total": len(EXPECTED_APPS),
    }

    out_path = "/tmp/composio-state-scan.json"
    with open(out_path, "w") as f:
        json.dump(output, f, indent=2)
    print(f"\n   💾 Estado salvo: {out_path}")

    # Return exit code based on readiness
    if init_ok and ready:
        print(f"\n   🟢 Zion tem {len(ready)} apps prontas para automação")
        sys.exit(0)
    elif init_ok:
        print(f"\n   🟡 Chave válida, mas apenas {len(ready)} apps ATIVAS — precisa conectar mais")
        sys.exit(0)
    else:
        print(f"\n   🔴 Chave inválida — nada pode rodar")
        sys.exit(1)

if __name__ == "__main__":
    main()
