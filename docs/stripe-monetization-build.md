# Zion Tech Group — Stripe Monetization Build

## Objective
Add real checkout to existing `/pricing/` and `/services/` without rebuilding the app.

## Approach
Use Stripe Payment Links for 1-click hosted checkout and embed them as CTAs on pricing/service pages.

## Pages to Update
- `public/pricing/index.html`
- `public/services/index.html`

## Payment Links to Create in Stripe Dashboard
| Plan | Type | Amount | Link Slug |
|------|------|--------|-----------|
| Starter | one_time | $2,500 | `zion-starter` |
| Growth | subscription | $8,000/month | `zion-growth` |
| Enterprise | custom/quote | contact | keep `/contact/` |

## Next Steps
1. Create Stripe products/prices.
2. Create Payment Links with `subscription_data` for Growth.
3. Paste live links into pricing/service pages.
4. Add success/cancel redirects to `/contact/`.
