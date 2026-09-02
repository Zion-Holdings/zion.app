# Zion Tech Group - Monetization Implementation

## Stack Selected
- Affiliates/Partners: PartnerStack or Tapfiliate
- Payments/Subscriptions: Stripe Connect or Lemon Squeezy
- Newsletter: beehiiv or Ghost
- Usage-based billing: Flexprice or Orb

## Accounts to Create
1. Stripe: https://dashboard.stripe.com/get-started
2. Lemon Squeezy: https://app.lemonsqueezy.com/signup
3. PartnerStack: https://app.partnerstack.com/signup
4. Tapfiliate: https://app.tapfiliate.com/signup
5. beehiiv: https://app.beehiiv.com/signup
6. Ghost: https://ghost.org/signup/
7. Flexprice: https://app.flexprice.io/signup
8. Orb: https://app.orb.com/signup

## Integration Steps
1. Add Stripe Checkout to /pricing/ CTAs
2. Create PartnerStack program and add affiliate links to /services/
3. Embed beehiiv newsletter form on /newsletter/
4. Add Flexprice/Orb webhook endpoints for usage tracking
5. Update /tools/ with premium tool prompts

## Files to Modify
- app/pricing/page.tsx - Add Stripe Checkout buttons
- app/services/*/page.tsx - Add affiliate disclosure + links
- app/newsletter/page.tsx - Embed beehiiv form
- app/tools/page.tsx - Add premium tool CTAs
