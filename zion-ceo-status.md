# Zion Tech Group — CEO Status

CEO: Kleber Garcia Alcatrão
Company: Zion Tech Group
Last updated: 2026-09-03T09:30 UTC

## Site (live)
- Homepage: https://ziontechgroup.com → HTTP 200 ✓
- HTTP behavior: inconsistent across CDN edge nodes (200/404/301 depending on node/timing)

## Descoberta importante
As rotas antigas foram **removidas intencionalmente**. O novo modelo de negócio opera via:
- `/book/` — Discovery $99, Consulting $499
- `/plans/` — Starter $2,500, Growth $8,000/mo
- `/services/` — página de serviços

A página 404 customizada confirma: *"Old catalog slugs, fake free consultations, and leftover Next.js routes are gone."*

## Rotas ANTIGAS (removidas, não mais 404s críticos)
- /testimonials/, /service-comparison/, /tools/2026-ma-due-diligence-checklist/, /monetization-hub/
- /about, /contact, /blog, /pricing, /cookie-policy, /privacy, /terms, /assessments, /help

## Lead CRM (DADOS REAIS)
- **138 leads** em all-leads.json (NÃO 1933)
- **0 outreach-ready** (NÃO 693)
- Status: 138 discovered
- Miner: 12 queries/ciclo, 0 contacts, 0 new, avg 9.75s/query
- Problema: minerador descobre mas não qualifica

## Outreach
- Status: blocked (0 leads prontos)
- Monitor: 52 inbox_interest, 0 hot_followup sent

## Deploy
- Source: gh-pages branch
- Status: live
- Blocker resolvido — 404s eram de rotas removidas, não problema de deploy

## Monetização ativa
| Oferta | Preço | Rota |
|--------|-------|------|
| Discovery | $99 | /book/ |
| Consulting | $499 | /book/ |
| Starter | $2,500 | /plans/ |
| Growth | $8,000/mo | /plans/ |
