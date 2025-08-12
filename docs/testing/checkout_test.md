# Checkout Flow Cypress Test

This document describes the Cypress test for the checkout flow, which includes a mock for Stripe payments.

## Overview

The test (`cypress/e2e/checkout_flow_spec.cy.ts`) simulates a user going through the checkout process. It uses a mock Stripe implementation to avoid making real API calls to Stripe.

## Running the Test

To run this specific test, you can use the Cypress test runner:

```bash
npx cypress open
```

Then, select `checkout_flow_spec.cy.ts` from the list of integration tests.

Alternatively, you can run it directly from the command line:

```bash
npx cypress run --spec "cypress/e2e/checkout_flow_spec.cy.ts"
```

## Stripe Mock Implementation

The Stripe mock is located in `cypress/support/stripe_mock.js`. It provides functions to simulate:

- **Token Creation**: `mockStripeTokenCreation()`
  - Intercepts `POST https://api.stripe.com/v1/tokens`.
  - Returns a mock token object.
- **Payment Confirmation**: `mockStripePaymentConfirmation()`
  - Intercepts `POST https://api.stripe.com/v1/payment_intents/*`.
  - Returns a mock payment intent object with a 'succeeded' status.

These mocks allow the test to verify the checkout completion logic, including redirection to a success page, without actual payment processing.

## Environment Variables

Currently, this test does not require any specific environment variables to be set, as it uses a self-contained mock for payment processing.
