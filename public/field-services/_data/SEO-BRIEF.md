# Field Services SEO Brief (2026 Q3)

## Keyword pattern

| Page type | Title pattern | Meta description pattern |
|-----------|---------------|--------------------------|
| Hub | `Global Field Services Rate Card (USD) \| Zion` (~52 chars) | Mentions 231 countries, Priority/SBD, NBD, 2BD IMAC, T&M, FTE, Stripe, Discovery $99 (~155 chars) |
| Country | `IT Field Service Rates in {Country} (USD) \| Zion` | `{Country}` + NBD/IMAC/T&M price anchors in USD + Stripe |

Primary intents: **IT field service rates**, **onsite IT support cost**, **NBD / SBD / IMAC pricing**, **T&M vs FTE**, country + USD.

## Region clusters

Pages share structural sections but rewrite lead, SLA guidance, and delivery notes by **cluster**, then inject **country name + live price anchors** (NBD incident, Priority/SBD, IMAC, T&M daily/weekly, FTE) so copy is not a thin template.

| Cluster ID | Macro | Examples |
|------------|-------|----------|
| `north_america` | Americas | United States, Canada, Mexico |
| `latin_america` | Americas | Brazil, Chile, Colombia, Peru |
| `caribbean` | Americas | Jamaica, Barbados, Cayman Islands |
| `western_europe` | EMEA | Germany, France, UK, Netherlands |
| `northern_europe` | EMEA | Sweden, Norway, Finland, Estonia |
| `southern_europe` | EMEA | Spain, Italy, Portugal, Greece |
| `eastern_europe` | EMEA | Poland, Romania, Serbia, Turkey |
| `middle_east` | EMEA | UAE, Saudi Arabia, Israel, Qatar |
| `north_africa` | Africa | Egypt, Morocco, Tunisia, Algeria |
| `sub_saharan_africa` | Africa | Nigeria, Kenya, South Africa, Ghana |
| `south_asia` | APAC | India, Pakistan, Bangladesh, Sri Lanka |
| `east_asia` | APAC | Japan, China, South Korea, Taiwan |
| `southeast_asia` | APAC | Singapore, Indonesia, Thailand, Vietnam |
| `central_asia` | APAC | Kazakhstan, Uzbekistan, Kyrgyzstan |
| `oceania` | APAC | Australia, New Zealand, Fiji, Guam |

Deterministic variant index = `sha256(slug) % N` picks lead / choose-SLA / delivery / FAQ rotation inside each cluster.

## On-page checklist

- Hub: H1 + 300–500 word explainer, how-to steps, 6+ FAQ, JSON-LD `WebPage` + `ItemList` + `FAQPage`, `index,follow`, canonical, OG.
- Country: unique H1/meta, ≥450 words prose beyond price cards, 5–6 FAQ with country baked in, 12 SKU cards with live `buy.stripe.com` links only (never invent), JSON-LD `Service` + `OfferCatalog`, internal links to `/field-services/`, `/discovery/`, `/plans/`, `/enterprise/`.
- CTA: Discovery $99 Payment Link + contact.

## Regeneration

```bash
python3 /workspace/zion-qa/field-rates/generate_pages.py
```

Inputs: `rate-card-2026q3.json` (prices + plinks), `stripe-ledger.json` (plink backup).  
Output: `/workspace/zion-qa/field-rates/pages/` (hub + `{slug}/index.html`).


## Pass-2 uniqueness (anti-thin) — 2026-09-06

Pass-1 was rejected for within-cluster lead Jaccard **0.87–0.96** (only 2–4 full-template leads with name/price swaps).

### Pass-2 generator changes (`generate_pages.py`)
- **Lead composition**: multi-slot banks (≥12 openings + 12 context + 12 price + 12 SLA + 12 billing + 12 closers + 20 micro-facts). Seeded shuffle (`sha256("lead-v2:"+slug)`) picks one per slot + 2 micros + a numeric snapshot sentence. Target: lead ≥80 words, pairwise lead Jaccard ≪ 0.70.
- **When-to-choose / delivery / glossary / more-prose**: synonym banks + paragraph shuffle per slug salt (`choose-v2`, `delivery-v2`, `glossary-v2`, `more-v2`).
- **FAQ**: pool of 12 items; always includes ≥2 country-named questions that cite local OOH/weekend uplift percentages.
- **Robots**: country pages emit `noindex, follow` until Chefe flips after dual COPY-OK. Hub stays `index,follow`.
- **Stripe**: still resolves exclusively from `rate-card-2026q3.json` plinks (backup: `stripe-ledger.json`); never invents URLs. Expected preserved count **2772**.

### Gate (run inside `generate_pages.py`)
1. Regenerate hub + 231 countries under `pages/`.
2. Within-cluster **lead** word-set Jaccard for all pairs — **fail if max ≥ 0.70**; print per-cluster max/median.
3. Sample 10 countries: ≥12 `buy.stripe.com`, lead ≥80 words, prose ≥450 beyond cards, robots `noindex, follow`.
4. Hub robots must remain `index,follow`.

### Pass-2 measured results
| Metric | Value |
|--------|-------|
| Countries regenerated | 231 |
| Plinks preserved | 2772 |
| Lead words min / median / max | 178 / 199 / 233 |
| Prose words (ex-cards) min / median / max | 1148 / 1256 / 1416 |
| Within-cluster lead Jaccard max | **0.523** |
| Within-cluster lead Jaccard median | **0.184** |
| Worst pair | `sub_saharan_africa`: central-african-republic vs madagascar |
| Hub robots | `index,follow` |
| Country robots | `noindex, follow` |

### Dual COPY-OK review candidates (8)
Diverse clusters for human review before Chefe flips robots to indexable:

1. `brazil` (latin_america)
2. `united-states` (north_america)
3. `germany` (western_europe)
4. `japan` (east_asia)
5. `south-africa` (sub_saharan_africa)
6. `india` (south_asia)
7. `united-arab-emirates` (middle_east)
8. `australia` (oceania)

After dual COPY-OK, flip those countries’ robots from `noindex, follow` → `index,follow` and reindex.

### Regeneration
```bash
python3 /workspace/zion-qa/field-rates/generate_pages.py
```
