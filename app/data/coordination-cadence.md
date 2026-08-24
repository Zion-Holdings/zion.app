# Coordination Cadence — Zion Agents Operational Rhythm

**Created:** 2026-08-21  
**Purpose:** Define the recurring beat for agent coordination to avoid silos, duplication, and silent stalls.

---

## Rhythm Overview

| Cadence | Frequency | Who | What | Where |
|---------|-----------|-----|-------|-------|
| P0/P1 pulse | Hourly | All agents | Review active claims, detect stalls, escalate | Telegram group `@ZIONTECHGROUP_AGENTS` |
| Daily digest | Daily (08:00 BRT) | Orchestrator | Dashboard snapshot + backlog grooming | Telegram group + dashboard page |
| Weekly strategy | Weekly (Monday 09:00 BRT) | Orchestrator + Kleber | Strategy review, drop stalled initiatives, propose new experiments | Telegram group + call |

---

## Hourly P0/P1 Pulse

**Trigger:** Every hour on the hour (cron or manual by any agent).

**Checklist:**
1. Scan group for `⚡ DELEGATION` messages with no claim in the SLA window.
2. P0 with no claim in 15 min → re-dispatch with `@GrowthAgent ❌ STALLED` and @mention Kleber.
3. P1 with no claim in 30 min → re-dispatch with `@TargetAgent ❌ STALLED`.
4. Any agent that posted a BLOCKER in the last hour → check if resolved or needs escalation.
5. Post a one-line status: `⏰ PULSE: [N] active claims, [M] stalls detected, [actions taken]`.

**Who can run it:** Any agent. The orchestrator runs it as default; others step in when they see a gap.

---

## Daily Digest (08:00 BRT)

**Trigger:** Cron job or orchestrator at 08:00 BRT daily.

**Contents:**
1. Dashboard snapshot — key metrics from `/dashboard/` (services count, leads in pipeline, sends attempted/succeeded, top industries, site health).
2. Kanban card movement summary — cards that moved queue→claimed→in_progress→review→done in the last 24h.
3. New claims posted, claims completed, stalls detected.
4. One-line recommendation: what to prioritize next.

**Format (for Telegram):**
```
📊 DAILY DIGEST — Zion Agents
Data: [date BRT]

SERVIÇOS: [N] indexados · [M] adicionados hoje · última descoberta: [timestamp]
LEADS: [N] no pipeline · etapas: initial=[a], followup1=[b], followup2=[c], followup3=[d], reengage=[e]
OUTREACH: [N] tentados · [M] entregues · [K] falhas · taxa: [P]%
PAGES: [N] rotas verificadas · [OK] 200 · [404] 404 · [OUT] outros
AGENTS: [N] ativos neste sessão

KANBAN: [resumo de 1 linha — cards que mudaram de coluna]
PRÓXIMO: [prioridade de uma linha]
```

**Post to:** Telegram group `@ZIONTECHGROUP_AGENTS` (via Kleber manual paste) + rendered on `/dashboard/`.

---

## Weekly Strategy (Monday 09:00 BRT)

**Trigger:** Orchestrator + Kleber, 30-min review.

**Contents:**
1. What moved this week — initiatives that went queue→done, metrics that improved.
2. What stalled — initiatives with no movement, agents that posted BLOCKERs.
3. Drop or defer — initiatives that aren't delivering; reallocate agent time.
4. New experiments — propose 1-3 new growth experiments for the coming week.
5. Decisions needed from Kleber — strategic calls that require human sign-off.

**Format:**
```
🔍 WEEKLY STRATEGY — Zion Agents
Week: [date range]

O QUE MOVEU:
- [Initiative] → [done / in_progress / stalled], métrica chave: [value]

O QUE STALLOUU:
- [Initiative]: [reason], [agent(s)] envolvidos, [next step]

NOVE EXPERIMENTOS PROPOSTOS:
1. [Experiment] — por que vale a pena, quem executa, métrica de sucesso

DECISÕES NECESSÁRIAS (Kleber):
- [Decision] — impacto, opções, recomendação

Próxima revisão: [next Monday date]
```

---

## Agent Self-Serve Rules

1. **Sem trabalho delegado?** Escaneie o grupo para tarefas P1/P2 não reclamadas. Claim a que você pode entregar.
2. **Sem tarefas no grupo?** Verifique o Kanban. Se vazio, proponha uma iniciativa nova com `PROPOSAL:` no grupo.
3. **Bloqueado?** Poste `BLOCKER:` imediatamente com detalhes — não espere.
4. **Pronto para reportar?** Use o formato `RESULT:` com a saída esperada definida na delegação.
5. **Conflito com outro agente?** Verifique o grupo antes de iniciar trabalho que pode sobrepor — coordene, não duplica.

---

## Escalation Quick Reference

| Situation | Action | Timeline |
|-----------|--------|----------|
| P0 sem claim | Re-dispatch + @mention Kleber | 15 min |
| P1 sem claim | Re-dispatch com `@Agent ❌ STALLED` | 30 min |
| Agent bloqueado | Post `BLOCKER:` com detalhes | Imediato |
| Kanban vazio | Proponha iniciativa nova | Dentro de 1h |
| Métrica regressou | Routa para DevAgent + post `ALERT:` | Imediato |

---

## Arquivos de Referência

- `zion-telegram-coordination-message.txt` — mensagem de dispatch pronta para o grupo
- `app/data/coordination-contacts.md` — contatos e caminhos de escalação
- `public/dashboard/index.html` — dashboard de métricas em tempo real
- `zion-growth-coordination-plan.md` — plano de crescimento com 5 iniciativas
