import { mockStripeTokenCreation, mockStripePaymentConfirmation } from ../support/stripe_mock.js';
describe('Checkout Flow with Mocked Stripe', () => {'  it('should successfully complete the checkout process with mocked Stripe API calls', () => {'    // Navigate to the application's checkout page'    cy.visit('/checkout');
    // Fill in basic dummy data for checkout form fields
    cy.get('[data-testid=checkout-name-input]).type('John Doe');    cy.get('[data-testid=checkout-address-input]).type('123 Main St');    cy.get('[data-testid=checkout-email-input]).type('john.doe@example.com');    // Add more fields as necessary, e.g., city, postal code, etc.
    cy.get('[data-testid=checkout-city-input]).type('Anytown');    cy.get('[data-testid=checkout-postal-code-input]).type('12345');
    // Intercept Stripe API call for token creation
    cy.intercept('POST', https://api.stripe.com/v1/tokens', (req) => {'      req.reply(mockStripeTokenCreation());
    }).as('createStripeToken');
    // Intercept Stripe API call for payment confirmation
    cy.intercept('POST', https://api.stripe.com/v1/payment_intents/*', (req) => {'      req.reply(mockStripePaymentConfirmation());
    }).as('confirmStripePayment');
    // Click the submit button to proceed with payment
    cy.get('[data-testid=checkout-submit-button]).click();
    // Wait for the mocked API calls to ensure they were called
    cy.wait('@createStripeToken');    cy.wait('@confirmStripePayment');
    // Assert that after a successful mock payment, the user is redirected to a success page
    // The specific waits for Stripe API calls might not be needed if cypress-stripe handles them.
    cy.url().should('include', /checkout/success');
    // Optionally, verify content on the success page
    cy.contains('h1', Your order was successful!').should('be.visible');  });
});
