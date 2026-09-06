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
