// import { mockStripeTokenCreation, mockStripePaymentConfirmation } from '../support/stripe_mock.js'; // Removed as cypress-stripe will handle mocking

describe('Checkout Flow with Mocked Stripe', () => {
  it('should successfully complete the checkout process with mocked Stripe API calls', () => {
    // Initialize cypress-stripe mocks
    // This typically mocks the Stripe.js script and Elements creation
    cy.stripeElements();

    // Navigate to the application's checkout page
    cy.visit('/checkout');

    // Fill in basic dummy data for checkout form fields
    cy.get('[data-testid=checkout-name-input]').type('John Doe');
    cy.get('[data-testid=checkout-address-input]').type('123 Main St');
    cy.get('[data-testid=checkout-email-input]').type('john.doe@example.com');
    // Add more fields as necessary, e.g., city, postal code, etc.
    cy.get('[data-testid=checkout-city-input]').type('Anytown');
    cy.get('[data-testid=checkout-postal-code-input]').type('12345');

    // Click the submit button to proceed with payment
    // The test will now rely on cypress-stripe to handle Stripe interactions.
    // If cypress-stripe requires specific commands to fill card details, those would go here.
    // For now, we assume it handles the form submission part automatically or with further configuration.
    cy.get('[data-testid=checkout-submit-button]').click();

    // Assert that after a successful mock payment, the user is redirected to a success page
    // The specific waits for Stripe API calls might not be needed if cypress-stripe handles them.
    cy.url().should('include', '/checkout/success');

    // Optionally, verify content on the success page
    cy.contains('h1', 'Your order was successful!').should('be.visible');
  });
});
