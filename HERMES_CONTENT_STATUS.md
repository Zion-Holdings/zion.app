# Hermes Agent Content — Status
# Kleber: cole no grupo

## Conteúdo Criado (verificado no disco)

### 1. Service Pages (3 new)

**a) hermes-agent-bot-mode**
`app/services/hermes-agent-bot-mode/page.tsx`
- Bot Mode service page with 4 key capabilities, 3 use cases, 3-tier pricing

**b) hermes-agent-plugin-development**
`app/services/hermes-agent-plugin-development/page.tsx`
- Plugin development service with 6 plugin types, capabilities table, 2-tier pricing

**c) hermes-agent-a2a-protocol**
`app/services/hermes-agent-a2a-protocol/page.tsx`
- A2A v1.0 protocol integration service with 4 use cases, 2-tier pricing

### 2. Blog Posts (2 new, data-driven via [slug] route)

**a) hermes-agent-bot-mode**
- Added to `app/data/blogPosts.json`
- Article: "Hermes Agent Bot Mode: How to Build a Team of Specialist AI Bots"

**b) building-custom-plugins-for-hermes-agent**
- Added to `app/data/blogPosts.json`
- Article: "Building Custom Plugins for Hermes Agent — A Developer Guide"

### 3. Hermes Plugin (zion-tech-platform)

`~/.hermes/plugins/zion-tech-platform/`
- `plugin.yaml` — manifest with requires_env
- `__init__.py` — 3 tools: zion_service_lookup, zion_blog_lookup, zion_check_routes + hook

### 4. Skill: hermes-agent-site-operations

`.hermes/skills/hermes-agent-site-operations/SKILL.md`
- Full operational playbook for Hermes Agent + Zion site

### 5. Data Updates

- `servicesData.json` — 3 new service entries added (total: 16,355)
- `blogPosts.json` — 2 new blog posts added (total: 4,072)

## Próximos Passos
- [x] Git add + commit dos arquivos
- [ ] Git pull --rebase + push origin main
- [ ] Gerar sitemap com `npm run generate-sitemap`
- [ ] Verificar no site (ziontechgroup.com) com curl
