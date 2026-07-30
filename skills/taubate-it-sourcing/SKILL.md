---
name: taubate-it-sourcing
category: recruiting
description: >
  Use when sourcing IT field technicians in São Paulo state.
  Automated candidate discovery across Google, LinkedIn, and local freelancer platforms,
  with public contact extraction and per-candidate WhatsApp outreach templates.
---

# Taubaté IT Sourcing

Automated recruiting workflow for **IT Field Engineers / On-Site Support Technicians / Infrastructure Specialists** in **São Paulo state**, focused on **Taubaté** and adjacent municipalities.

## Parameters

| Parameter       | Default        | Description                                                      |
|-----------------|----------------|------------------------------------------------------------------|
| `LOCATION`      | `Taubaté, SP`  | City/region to source candidates from                            |
| `MAX_CANDIDATES`| `10`           | Maximum number of qualified candidates to return in the final list |

## Mission Profile

**Target roles:**
- Técnico de Campo / Técnico de Suporte Presencial
- Field Support Engineer / Field Service Engineer
- Analista de Infraestrutura (on-site)
- Técnico de Redes / Telecom / Cabeamento

**Required signals:**
- Hardware repair/maintenance
- Structured cabling / rack installation
- Mikrotik / Cisco / network troubleshooting
- Windows/Linux server support
- Field dispatch / disponibilidade para atendimento presencial
- PJ / MEI / prestador de serviço / freelancer / CLT accepted if contractor-friendly

## Workflow

### 1. Primary candidate discovery

Run **independent** public-web searches to build a candidate pool before filtering.

Preferred search queries:
- `site:linkedin.com/in "Técnico de Campo" OR "Técnico de Suporte" OR "Field Support Engineer" LOCATION`
- `site:linkedin.com/in "Analista de Infraestrutura" OR "Técnico de Redes" LOCATION`
- `site:linkedin.com/in Mikrotik OR Cisco OR "Windows Server" LOCATION`
- `site:catho.com.br Técnico de Campo OR Técnico de Suporte OR Infraestrutura LOCATION`
- `site:99freelas.com.br OR site:workana.com técnico campo OR infraestrutura LOCATION`
- `site:github.com "Taubaté" OR "Vale do Paraíba" OR LOCATION IT suporte`
- `site:github.com "email" OR "contato" LOCATION técnico rede`

**Coverage requirement:** search LinkedIn profiles first, then local job boards, then freelancer directories, then GitHub/portfolio sources. Attempt to gather **at least 2× MAX_CANDIDATES** before filtering.

### 2. Candidate filtering

Apply these mandatory filters before scoring:

**Keep only candidates who:**
- Have a location within **30 km of LOCATION** (prefer explicit local names; adjacent towns are acceptable).
- Show explicit signals of field/on-site support or infrastructure expertise.
- Have any verifiable public contact detail **or** a reply-capable public profile (LinkedIn, 99Freelas, Workana, GitHub).

**Discard candidates who:**
- Are solely backend/frontend developers with no infrastructure/field exposure.
- Have no public contact signal after reasonable search expansion.
- Are clearly outside the requested radius.

### 3. Contact enrichment

For each qualified candidate:

- Search by **full name** for email, phone, or WhatsApp exposure:
  - `"First Last" email OR contato OR portfolio OR github OR telefone OR whatsapp`
  - `site:contactout.com "First Last"`
  - `site:rocketreach.co "First Last"`
  - `site:jobbird.com "First Last"`
  - GitHub public commit emails if GitHub handle is identified
- Accept only **publicly indexed contact metadata**; do not scrape login-gated pages or bypass paywalls.
- Record contact as: **email**, **phone/WhatsApp**, or **public profile link** if no direct contact is discoverable.

### 4. Contract-type signal check

For each candidate, do one quick pass for contractor status:
- `site:99freelas.com.br "First Last"`
- `site:workana.com "First Last"`
- `site:empresas.serasaexperian.com.br "First Last"`
- Look for `CNPJ`, `MEI`, `PJ`, `freelance`, `prestador de serviços` in search snippets.

Assign status:
- **PJ/MEI/Independent** — if CNPJ/MEI/PJ/freelance profile found
- **CLT-friendly but contractor-capable** — if employed but profile indicates openness to PJ/avulso
- **Unknown** — if no contracting signal found

### 5. Output format

Return **exactly one CSV-formatted code block** with this header and **up to MAX_CANDIDATES** rows:

```
Candidate Name | Current Title | Location | Email | Phone/WhatsApp | Profile Link | Direct PJ/CLT Status | Qualified Reason
```

Columns:
- `Candidate Name` — full name if available, otherwise first + last
- `Current Title` — current/latest title from source
- `Location` — city/region; omit if unknown
- `Email` — public email found; blank if none
- `Phone/WhatsApp` — public phone/WhatsApp; blank if none
- `Profile Link` — canonical public profile URL
- `Direct PJ/CLT Status` — PJ/MEI/Independent | CLT-friendly but contractor-capable | Unknown
- `Qualified Reason` — short rationale citing the key evidence that survived filtering

### 6. WhatsApp template generation

For each qualified candidate returned, append the following immediately after the CSV block:

```
## WhatsApp Templates

### Candidate: <name>
Oi! 👋 Vaga de **Field Support** em **Taubaté/SP** para atuação presencial.
Buscamos profissional com experiência em redes, hardware e rack, modelo **PJ/avulso ou mensal**.
Você está disponível e qual modelo prefere?
```

**Rules:**
- Translate to **Brazilian Portuguese**.
- Keep each template under **100 words**.
- Do not mention compensation specifics; ask about preferred contract model instead.
- One template per candidate.

## Hard Constraints

- **No scraping of private/restricted data.** Use only publicly indexed search results and public profile snippets.
- **No access-controlled endpoints.** Do not attempt login-gated sites or bypass paywalls.
- **No fabrication.** If contact details are not found in public search snippets, leave the field blank.
- **No outreach execution by this skill.** This skill is sourcing-only; sending messages is a separate action.
- **Respect platform terms.** Use minimal, read-only public queries only.

## Completion

When the skill finishes:
- Provide the CSV table.
- Provide `## WhatsApp Templates` section immediately afterward.
- If fewer than `MAX_CANDIDATES` qualified candidates are found, explicitly state the shortfall and likely causes (e.g., limited public signals in the radius).
