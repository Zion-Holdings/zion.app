# Zion Tech Group — Free Email Lead Finder Playbook

Status: implemented 2026-09-05. Queue was drained (0 remaining of 86). Inbox miner cannot refill it.

Do not print prospect emails in chat, Telegram, or commit messages.

## Diagnose

`historical_email_miner.py` only harvests From/Reply-To from existing Gmail. It is not a web finder. After 46 sends on 2026-09-04 the canonical queue is empty. Raising the miner timeout will not create new leads.

Split FIND and SEND. Never find-and-blast in the same tick.

## Pipeline (free)

1. Seed companies (ICP): BR mid-market ops/IT/ERP/fintech/MSP, then US ops leaders.
2. Public-page find (`lead-crm/web_lead_finder.py`): DuckDuckGo HTML + `/contato` `/contact` `/fale-conosco` `/about`.
3. Optional credit finders after a company is qualified (Hunter paused until 2026-09-23; Apollo HOLD).
4. Verify MX locally; paid verifiers only on named emails you intend to send.
5. Append `lead-crm/outreach_ready_canonical.json` with compliance fields.
6. Dedup vs sent history + exclusion list + existing leads + HubSpot.
7. Send small waves: `ZTG_SEND_COUNT=8 ZTG_SEND_ALLOWED=1 python3 lead-crm/_small_wave_send_run.py`
8. Same-day honor of SAIR / STOP.

## Run the finder

```bash
cd $REPO
python3 lead-crm/web_lead_finder.py
# optional caps
ZTG_FIND_MAX=10 ZTG_FIND_DOMAINS=8 python3 lead-crm/web_lead_finder.py
```

Outputs (counts only on stdout):

- `lead-crm/web_finder_health.json`
- `lead-crm/web_finder_cursor.json` (rotates the query list)
- `lead-crm/web_finder_discovered.jsonl`
- new rows in `outreach_ready_canonical.json`

## High-frequency search (fast)

Do not scrape Google HTML. That is why the old miner died (~23s/query on Termux).

Per run (target <45s):

- 6 DuckDuckGo queries, 8s timeout
- 8 company domains
- only contact-like paths
- stop at 15 new emails

Grok Automation "Zion Web Lead Finder" runs weekdays 09:00 and 15:00 America/Sao_Paulo. It searches public pages, writes drafts, does not send.

Rotate query families across runs:

- `"automação de processos" contato site:.com.br`
- `"gestor de TI" "fale conosco" site:.com.br`
- `FinOps OR "custo de cloud" contato site:.com.br`
- `inurl:contato (ERP OR RPA) site:.com.br`
- `"AI automation" "operations" contact -site:linkedin.com`

Dorks once a domain is known:

```
site:{d} inurl:contato OR inurl:contact OR inurl:about
site:{d} "{d}" "@"
filetype:pdf "@{d}" (contato OR email)
```

Highest-volume BR source (not a bought list): RFB CNPJ open data / cnpj.chat export, CNAE 6201-03 / 7020 / 6311 / 8211, situacao=Ativa, porte != MEI. Use the company website to pick a published commercial inbox.

## Free tool credits (2026)

Find

- Skrapp: 100/mo, charged only Valid/Catch-all, rollover. Best volume while Hunter is paused.
- Prospeo: 75 verified + 100 Chrome credits/mo. Best accuracy.
- GetProspect: 50 valid + 100 verify/mo.
- Hunter: paused until 2026-09-23. After that, 50 credits/mo. Use Email Finder (name+domain), not Domain Search. Discover API is company-list only and does not burn email credits.
- Apollo: HOLD. Do not spend.
- Snov.io: 50 shared find+verify+send/mo.
- Skip Lusha / RocketReach free tiers for volume.

Verify (never send on regex alone)

- Mailmeteor web singles (fair use) + Sheets 50/mo
- ZeroBounce 100/mo
- Verifalia 25/day
- Cleanlist ~25–30 no card
- EXPERTE SMTP singles
- Hunter verifier after Sep 23

Send

- Keep `_small_wave_send_run.py` as source of truth
- Mailmeteor merge: 50/day fallback
- YAMM: ~20/day
- Gmail free cap 500 / Workspace 2000 — not the cold-safe number

## Volume after the 46-send day

Safe cold cap from `kleber@ziontechgroup.com`: **8–15/day, weekdays only**.

Warmth rule: +5/day/week max. Pause 48h on bounce spike. Hard stop if complaint rate >0.1%.

Replies beat new cold 10x. Check inbox for `Parceria`, `proposta`, `Re:`, `SAIR`, `STOP` before any new wave.

## Who to email

ALLOW: contato@, comercial@, vendas@, hello@, partners@, sales@, named ops/IT/owner emails from a public team/about/press page.

DENY: info@, suporte@, support@, infra@, noc@, comunicacao@, imprensa@, financeiro@, rh@, privacy@, abuse@, postmaster@, personal gmail/hotmail of employees, Canada without documented implied consent.

Skip HubSpot-already companies: Dock, Pipefy, Conta Azul, Creditas, Celcoin, Simetrik, Recurly, Auxis, Beyond Key, Firstbase, TSIA, Brex, Paysafe.

Hard-deny domains after 550 / NXDOMAIN / admin-block (in `exclusion-list.json`): stonepagamentos.com.br, proxyon.com.br, mail.shopee.com.br, newsletter.shopee.com.br, radix.com.br, github.com.

Verify-required — never auto-queue guessed contato@: totvs.com.br, magazineluiza.com.br, nubank.com.br, apptunix.com, sianet.com.br, d2w.ind.br, fgc.org.br, butantan.gov.br.

Do not domain-deny a living customer for one dead alias (Kenlo, Airbnb guest threads).

## Bounce / opt-out rule

- 550 / 5.1.1 / domain-not-found / blocked by recipient admin → HARD FAIL. Add address + domain to exclusion the same day. Never retry.
- 4xx / DELAY / “will retry” → SOFT. Do not re-send this wave. Recheck after 48h. If it becomes 550, promote to HARD. `news.kilocode.ai` is SOFT until the retry window ends.
- Complaint / SAIR / STOP / “não tenho interesse” → HARD suppress that mailbox. Do not email any alias at that company for 90 days unless they write first.
- Guessed contato@ on enterprise brands that 550’d is not an allow-list exception.

## Every email must include

- Real From: Kleber Garcia Alcatrao `<kleber@ziontechgroup.com>`
- Honest subject (no fake Re:/meeting)
- Why this company
- One ask: Discovery $99 or 15-min Calendly
- Postal address: 364 E Main St STE 1008, Middletown, DE 19709
- SAIR / STOP
- Privacy link: `https://ziontechgroup.com/privacy/` (live EN 200). Switch BR footer to `/privacidade/` only after that URL returns the PT policy on main, not the homepage chrome.

Legal basis for BR B2B: LGPD art. 7º IX legitimate interest. Do not buy lists. Keep source_url on every row.

## Open gaps

1. `/privacidade/` static PT page is on this branch (`public/privacidade/index.html`). Live URL is still chrome 404 until merge + Pages deploy. Confirm HTTP 200 with the PT body before swapping the BR footer.
2. Hunter paused until 2026-09-23; Apollo HOLD; LinkedIn invites paused.
3. Do not invent a CNPJ. Site is DE-address only.
4. 2026-09-04 had 46 sends — stay at 8–15/day weekdays until bounce/complaint is known. Saturday/Sunday: no cold.
