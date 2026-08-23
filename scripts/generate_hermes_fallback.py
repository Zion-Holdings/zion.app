#!/usr/bin/env python3
"""Gera HTML estático de fallback para as 4 rotas Hermès Agent e atualiza _redirects."""

import os
import re
import json
from pathlib import Path

REPO = Path("/Users/miami2/zion-support.github.io")
PUBLIC = REPO / "public"
DOCS = REPO / "docs"

PAGES = [
    {
        "slug": "services/hermes-agent-content-publishing-distribution",
        "src": REPO / "app/services/hermes-agent-content-publishing-distribution/page.tsx",
        "type": "service",
        "title": "Hermes Agent Content Publishing & Distribution",
        "desc": "Autônomo pipeline de conteúdo com revisão humana: criação, SEO, multi-canal e distribuição com agentes Hermes. Publicação contínua, rastreamento de performance, escala sem perder qualidade.",
        "canonical": "https://ziontechgroup.com/services/hermes-agent-content-publishing-distribution",
    },
    {
        "slug": "blog/hermes-agent-crescimento-explosivo",
        "src": REPO / "app/blog/hermes-agent-crescimento-explosivo/page.tsx",
        "type": "article",
        "title": "Como o Hermes Agent Levou a Zion Tech Group de 16K para 97K Serviços em Semanas",
        "desc": "Zion Tech Group cresceu de 16.000 para 97.000 serviços catalogados em semanas usando agentes Hermes para indexar, descrever, categorizar e publicar — sem contratar equipe de conteúdo.",
        "canonical": "https://ziontechgroup.com/blog/hermes-agent-crescimento-explosivo/",
        "date": "2026-08-21",
    },
    {
        "slug": "blog/empresas-hermesses-agent-catalogo",
        "src": REPO / "app/blog/empresas-hermesses-agent-catalogo/page.tsx",
        "type": "article",
        "title": "Como Empresas Usam Agentes Hermes para Criar Catálogos de Serviços Infinitos",
        "desc": "Empresas estão usando agentes Hermes para gerar catálogos de serviços infinitos — indexando, descrevendo, categorizando e publicando automaticamente. Sem equipe de conteúdo. Sem gargalo manual.",
        "canonical": "https://ziontechgroup.com/blog/empresas-hermesses-agent-catalogo/",
        "date": "2026-08-21",
    },
    {
        "slug": "blog/hermes-agent-criar-catalogo-servicos-infinito",
        "src": REPO / "app/blog/hermes-agent-criar-catalogo-servicos-infinito/page.tsx",
        "type": "article",
        "title": "Como Criar um Catálogo de Serviços Infinito com Agentes de IA",
        "desc": "Guia prático para criar um catálogo de serviços infinito usando agentes Hermes: indexação automática, descrição, categorização e publicação sem gargalo manual.",
        "canonical": "https://ziontechgroup.com/blog/hermes-agent-criar-catalogo-servicos-infinito/",
        "date": "2026-08-21",
    },
]


def extract_body_text(content: str) -> str:
    """Extrai o conteúdo textual dos JSX das páginas."""
    # Remove import/export statements e JSX tags, mantém texto
    lines = content.splitlines()
    body_lines = []
    in_body = False
    for line in lines:
        stripped = line.strip()
        if "<div className=\"max-w" in stripped or '<div className="max-w' in stripped:
            in_body = True
        if in_body:
            # Remove tags JSX, mantém texto
            text = re.sub(r'<[^>]+>', ' ', stripped)
            text = re.sub(r'\{[^}]*\}', '', text)
            text = re.sub(r'className="[^"]*"', '', text)
            text = re.sub(r"className='[^']*'", '', text)
            text = re.sub(r'\s+', ' ', text).strip()
            if text and len(text) > 3:
                body_lines.append(text)
        if in_body and ('</StandardPage>' in stripped or '</StandardPage>' in stripped):
            break
    return '\n'.join(body_lines)


def generate_html(page: dict, body_text: str) -> str:
    """Gera HTML estático completo."""
    slug = page["slug"]
    title = page["title"]
    desc = page["desc"]
    canonical = page["canonical"]
    date = page.get("date", "")

    json_ld = {
        "@context": "https://schema.org",
        "@type": page["type"] == "service" and "Service" or "Article",
        "name": title,
        "description": desc,
        "url": canonical,
    }
    if page["type"] == "article":
        json_ld["datePublished"] = date
        json_ld["author"] = {"@type": "Organization", "name": "Zion Tech Group"}
        json_ld["publisher"] = {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"}

    json_ld_str = json.dumps(json_ld, indent=2, ensure_ascii=False)

    # Constrói HTML
    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Zion Tech Group</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{canonical}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{canonical}">
<meta property="og:type" content="{'website' if page['type'] == 'service' else 'article'}">
<script type="application/ld+json">
{json_ld_str}
</script>
<style>
  body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; color: #1a1a1a; line-height: 1.6; }}
  h1 {{ font-size: 2em; margin-bottom: 0.5em; }}
  h2 {{ font-size: 1.5em; margin-top: 1.5em; margin-bottom: 0.5em; }}
  .meta {{ color: #666; font-size: 0.9em; margin-bottom: 2em; }}
  .actions {{ margin: 2em 0; padding: 1em; background: #f5f5f5; border-radius: 8px; }}
  .actions a {{ display: inline-block; margin-right: 1em; padding: 0.5em 1em; background: #2563eb; color: white; text-decoration: none; border-radius: 4px; }}
  .actions a.secondary {{ background: #e5e7eb; color: #374151; }}
  footer {{ margin-top: 3em; padding-top: 1em; border-top: 1px solid #e5e7eb; color: #666; font-size: 0.85em; }}
</style>
</head>
<body>
<h1>{title}</h1>
<p class="meta">{"Publicado em " + date if date else ""} | <a href="https://ziontechgroup.com">Zion Tech Group</a></p>
<div class="actions">
  <a href="/contact/">Fale com um engenheiro</a>
  <a href="/services/" class="secondary">Explorar todos os serviços</a>
</div>
<article>
{body_text}
</article>
<footer>
  Zion Tech Group — AI & IT Services com agentes autônomos.<br>
  <a href="https://ziontechgroup.com">Visite ziontechgroup.com</a>
</footer>
</body>
</html>
"""
    return html


def update_redirects():
    """Adiciona regras de redirect para as 4 rotas em public/_redirects e docs/_redirects."""
    rules = []
    for page in PAGES:
        slug = page["slug"]
        # Para blog, adiciona barra final
        if slug.startswith("blog/"):
            redirect_from = f"/{slug}/"
            redirect_to = f"/{slug}/"
        else:
            redirect_from = f"/{slug}/"
            redirect_to = f"/{slug}/"
        rules.append(f"{redirect_from} {redirect_to} 200")

    for base_dir in [PUBLIC, DOCS]:
        redirects_file = base_dir / "_redirects"
        if redirects_file.exists():
            content = redirects_file.read_text(encoding="utf-8")
            new_content = content
            for rule in rules:
                if rule not in content:
                    new_content += f"\n{rule}\n"
            if new_content != content:
                redirects_file.write_text(new_content, encoding="utf-8")
                print(f"Atualizado: {redirects_file}")
        else:
            redirects_file.write_text("\n".join(rules) + "\n", encoding="utf-8")
            print(f"Criado: {redirects_file}")


def main():
    for page in PAGES:
        src = page["src"]
        if not src.exists():
            print(f"ERRO: {src} não existe")
            continue

        content = src.read_text(encoding="utf-8")
        body_text = extract_body_text(content)

        # Gera HTML para public/ e docs/
        html = generate_html(page, body_text)

        for base_dir in [PUBLIC, DOCS]:
            dest_dir = base_dir / page["slug"]
            dest_dir.mkdir(parents=True, exist_ok=True)
            dest_file = dest_dir / "index.html"
            dest_file.write_text(html, encoding="utf-8")
            print(f"Gerado: {dest_file}")

    update_redirects()
    print("\nConcluído. HTML estático gerado e _redirects atualizados.")


if __name__ == "__main__":
    main()
