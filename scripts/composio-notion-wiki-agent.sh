#!/bin/bash
# composio-notion-wiki-agent.sh
# Mantém documentação atualizada via GitHub + Linear → Notion
# Criado: 30/08/2026

set -euo pipefail

COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
NOTION_DATABASE_ID="${NOTION_DATABASE_ID:-}"

echo "🤖 Notion Wiki Agent Iniciando..."

python3 << 'PYEOF'
import os
import sys
from datetime import datetime
from composio import Composio

api_key = os.environ.get("COMPOSIO_API_KEY", "")
if not api_key:
    print("⚠️ COMP...Y não configurado")
    sys.exit(0)

try:
    c = Composio(api_key=api_key)
    s = c.create(user_id="zion-wiki-agent")

    # 1. Buscar commits recentes
    commits = s.tools.execute(
        "GITHUB_LIST_COMMITS",
        arguments={"repo": "ziontechgroup/zion-support.github.io", "per_page": 10}
    )

    # 2. Buscar issues fechadas
    issues = s.tools.execute(
        "LINEAR_LIST_ISSUES",
        arguments={"filter": "closed", "last_days": 14}
    )

    # 3. Criar página no Notion
    title = f"Weekly Wiki Update – {datetime.now().strftime('%Y-%m-%d')}"
    content = f"""
## 📚 Weekly Wiki Update

**Data:** {datetime.now().isoformat()}

### Recentes Commits
{chr(10).join([f"- {c.get('sha','')[:7]} - {c.get('message','')[:60]}" for c in commits.get('items',[])[:5]])}

### Issues Fechadas (últimas 14d)
{chr(10).join([f"- #{i.get('identifier','')} – {i.get('title','')[:50]}" for i in issues.get('items',[])[:10]])}

> Atualizado automaticamente pelo Hermes Agent
"""

    result = s.tools.execute(
        "NOTION_CREATE_PAGE",
        arguments={
            "database_id": os.environ.get("NOTION_DATABASE_ID", ""),
            "title": title,
            "content": content
        }
    )

    print(f"✅ Página Notion criada: {result.get('id','unknown')}")

except Exception as e:
    print(f"⚠️ Wiki Agent: {e}")
PYEOF

exit 0
