# Stripe Test Payments

The checkout flow uses Stripe. To ensure payments are processed in test mode for QA and development, specific environment variables must be configured.

## Environment Variables for Test Mode

The primary way to ensure Stripe operates in test mode is by setting the following environment variables:

-   **`STRIPE_TEST_MODE=true`**:
    -   When set to `true`, the backend API (`/api/checkout-session`) will use the `STRIPE_TEST_SECRET_KEY`.
    -   This forces the use of test keys for creating checkout sessions, regardless of the environment (development, staging, or even production if explicitly set).
-   **`NEXT_PUBLIC_STRIPE_TEST_MODE=true`**:
    -   When set to `true`, the frontend (`getStripe()` utility) will use the `NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY`.
    -   This ensures the client-side Stripe.js instance loads with the test publishable key.

**Key Variables Used in Test Mode:**

-   **`NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY`**: Your Stripe test *publishable* key (e.g., `pk_test_...`).
    -   Alternative variable names that might be used as fallbacks by `getStripe()`: `NEXT_PUBLIC_STRIPE_TEST_KEY`, `NEXT_PUBLIC_STRIPE_PK`.
-   **`STRIPE_TEST_SECRET_KEY`**: Your Stripe test *secret* key (e.g., `sk_test_...`).

**Live Keys (for reference, not for QA testing):**
-   `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Live publishable key.
-   `STRIPE_SECRET_KEY`: Live secret key.

**Important:** For QA, ensure `STRIPE_TEST_MODE=true` and `NEXT_PUBLIC_STRIPE_TEST_MODE=true` are set in your `.env.local` file or the environment configuration for your testing deployment. This guarantees that test API keys are used.

## Testing Payments with Stripe Test Cards

When Stripe is in test mode, you can use specific test card numbers to simulate various payment scenarios. No real money is charged.

**Basic Test Card (Generic Visa):**
-   **Card Number:** `4242 4242 4242 4242`
-   **Expiration Date:** Any future date (e.g., 12/30)
-   **CVC:** Any 3 digits (e.g., 123)
-   **Name on Card:** Any name (e.g., Test User)

**Other Useful Test Cards:**

You can find a comprehensive list of test cards for various brands, scenarios (e.g., successful payments, declines, disputes), and countries on the official Stripe documentation:
[Stripe Testing Documentation](https://stripe.com/docs/testing)

Here are a few examples:

| Card Brand | Card Number        | Outcome when used with test keys |
| :--------- | :----------------- | :------------------------------- |
| Visa       | `4242 4242 4242 4242` | Successful payment               |
| Mastercard | `4000 0000 0000 0000` (then follow prompts for 3DS) or specific Mastercard test numbers from Stripe docs. | Successful payment (may require 3DS simulation) |
| Amex       | `3782 8224 6310 005`  | Successful payment               |
| Visa Debit | (Use Visa `4242...`) | Successful payment               |
| Card Declined | (Use specific card numbers from Stripe docs, e.g., a card that triggers "Insufficient Funds") | Payment declined                 |

**Expected Behavior During Testing:**

-   **No Real Charges:** Test cards will not result in actual bank charges.
-   **Stripe Dashboard:** You can view these test transactions in your Stripe Dashboard. Make sure you have "View test data" enabled in the dashboard (usually a toggle on the left sidebar or top right).
-   **Order Status:** The application should reflect the outcome of the payment (e.g., order confirmation page for success, error message for decline). Orders created in test mode are flagged with `sandbox: true` in the `data/orders.json` file.

## Example Checkout Flow

To redirect customers to Stripe Checkout in test mode:

```ts
import { getStripe } from '@/utils/getStripe'; // Ensure this uses NEXT_PUBLIC_STRIPE_TEST_MODE

// getStripe disables Stripe's advanced fraud signals which can
// try to access localStorage. This avoids "Access to storage is not
// allowed" errors in browsers with strict privacy settings.
const stripe = await getStripe();

// Request a Checkout Session from your backend (/api/checkout-session)
// Ensure the backend uses STRIPE_TEST_MODE to select the test secret key.
const response = await axios.post('/api/checkout-session', { cartItems, customer_email });
const session = response.data;

// Redirect the browser to the hosted Checkout page
await stripe?.redirectToCheckout({ sessionId: session.sessionId });
```

## Guest Checkout and Sandbox Login

During development and QA, you can test payments without authenticating a user. Navigate to `/marketplace` (or the relevant page with products), add items to the cart, and proceed to checkout.

For flows that require authentication, you can define development credentials in `.env.local` (see [docs/SECURITY_CREDENTIALS.md](docs/SECURITY_CREDENTIALS.md) for details):
```bash
DEV_USER_1_EMAIL=guest@example.com
DEV_USER_1_PASSWORD=pass1234
```
These credentials allow signing in without creating a real account.

### Staging Test Payments

When the app runs in a staging environment, it should also be configured to use Stripe test mode (via `STRIPE_TEST_MODE=true` and `NEXT_PUBLIC_STRIPE_TEST_MODE=true`). The checkout page should clearly indicate it's a test environment if possible.

### Demo Products

If no products appear in your marketplace view, seed the local database with sample listings:
```bash
npm run seed
```
This executes the Prisma seeding script (`prisma/seed.ts`) so you can fully walk through the checkout process with populated data.

## Sandbox Sample SKUs

If your environment has no products available, the application falls back to a set of demo listings defined in `src/data/marketplaceData.ts`. These sample items let QA walk through the Add‑to‑Cart and payment screens without needing a live catalog. The fallback is automatic whenever the marketplace API returns an error or an empty array.
