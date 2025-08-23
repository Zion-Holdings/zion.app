# Third-Party API Integrations

## Overview
This summary outlines how the application connects with essential third-party services: maps, payments and social login. These integrations enable key features like contact location display, secure payments and quick sign-in via popular providers.

## Maps
- **File**: `src/pages/Contact.tsx`
- **Service**: Google Maps Embed API
- **Usage**: An `<iframe>` embed shows office locations on the Contact page.
- **Customization**: Replace the `src` URL with your own Google Maps embed link or introduce an environment variable (e.g., `NEXT_PUBLIC_MAPS_EMBED_URL`) to easily swap locations without editing code.

## Payments
- **Files**: `pages/api/create-payment-intent.ts`, `supabase/functions/create-checkout/index.ts`, `src/components/transactions/PaymentButton.tsx`
- **Service**: Stripe
- **Features**:
  - Server-side API route creates payment intents.
  - Supabase Edge Function handles checkout sessions and records transactions.
  - `PaymentButton` component triggers the checkout flow from the UI.
- **Environment Variables**:
  - `STRIPE_SECRET_KEY` / `STRIPE_TEST_SECRET_KEY`
  - `STRIPE_TEST_MODE` and `NEXT_PUBLIC_STRIPE_TEST_MODE`
  - Publishable keys used by `getStripe()` in the frontend

## Social Login
- **Files**: `pages/api/auth/[...nextauth].ts`, `server/routes/authSocial.js`, `src/hooks/auth/useSocialAuth.ts`
- **Service**: NextAuth with Supabase and Passport strategies
- **Supported Providers**: Google, Facebook, Twitter, LinkedIn (others can be enabled)
- **Environment Variables**: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `FACEBOOK_CLIENT_ID`, `FACEBOOK_CLIENT_SECRET`, `TWITTER_CLIENT_ID`, `TWITTER_CLIENT_SECRET`, etc.
- **Flow**: Login buttons call `openAuthPopup` which redirects through NextAuth or the server routes, creating a session in Supabase on success.

## Testing
- Cypress tests (`cypress/e2e/social-login.cy.ts`) verify that social login buttons hit the correct NextAuth endpoints.
- Checkout flow tests use Stripe mocks (`cypress/e2e/full_checkout_flow.cy.ts`).

---
These integrations provide a solid foundation for location display, secure transactions and user authentication through trusted providers.
