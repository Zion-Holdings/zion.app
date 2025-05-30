// Requires TEST_USER_NAME, EXISTING_USER_EMAIL, EXISTING_USER_PASSWORD and STRIPE_TEST_CARD in cypress.env.json
// Example cypress.env.json:
// {
//   "TEST_USER_NAME": "Test User",
//   "EXISTING_USER_EMAIL": "existing@test.com",
//   "EXISTING_USER_PASSWORD": "password123",
//   "STRIPE_TEST_CARD": "4242424242424242"
// }

// Define constants for frequently used strings or identifiers if they are not dynamic
const COMMUNITY_POST_TITLE = 'Automated test post';
const COMMUNITY_POST_CONTENT = 'This post was created by Cypress during an automated test.';

describe('Critical user journeys', () => {
  beforeEach(() => {
    cy.visit('/');
    // Ensure environment variables are loaded
    if (!Cypress.env('EXISTING_USER_EMAIL') || !Cypress.env('EXISTING_USER_PASSWORD')) {
      throw new Error('EXISTING_USER_EMAIL or EXISTING_USER_PASSWORD environment variables are not set.');
    }
    if (!Cypress.env('TEST_USER_NAME')) {
      throw new Error('TEST_USER_NAME environment variable is not set.');
    }
    if (!Cypress.env('STRIPE_TEST_CARD')) {
        throw new Error('STRIPE_TEST_CARD environment variable is not set.');
    }
  });

  it('Registers a new user successfully', () => {
    cy.intercept('POST', '/api/auth/register').as('register');
    // TODO: Add data-testid="signup-nav-link" to the Sign up link in the nav
    // cy.get('[data-testid="signup-nav-link"]').click();
    cy.get('nav').contains('Sign up').click(); // Kept for now

    // TODO: Add data-testid="name-input"
    cy.get('input[name="name"]').type(Cypress.env('TEST_USER_NAME'));
    // Using dynamic email generation is good practice
    const uniqueEmail = `testuser${Date.now()}@example.com`;
    // TODO: Add data-testid="email-input"
    cy.get('input[name="email"]').type(uniqueEmail);
    // TODO: Add data-testid="password-input"
    cy.get('input[name="password"]').type('StrongP@ssw0rd'); // Consider making this an env var if it needs to be consistent
    // TODO: Add data-testid="confirm-password-input"
    cy.get('input[name="confirmPassword"]').type('StrongP@ssw0rd');
    // TODO: Add data-testid="terms-checkbox"
    cy.get('input[type="checkbox"]').check(); // Assuming terms checkbox

    // TODO: Add data-testid="create-account-button"
    // cy.get('[data-testid="create-account-button"]').click();
    cy.contains('Create Account').click(); // Kept for now
    cy.wait('@register').its('response.statusCode').should('eq', 201);
    // TODO: Add data-testid="dashboard-header" or similar to confirm page change
    cy.url().should('include', '/dashboard');
  });

  it('Logs in and completes Stripe test checkout', () => {
    // loginByApi should ideally use env vars internally
    cy.loginByApi(Cypress.env('EXISTING_USER_EMAIL'), Cypress.env('EXISTING_USER_PASSWORD'));
    cy.visit('/marketplace');

    // TODO: Add data-testid="buy-now-button" to Buy Now buttons
    // cy.get('[data-testid="buy-now-button"]').first().click();
    cy.contains('Buy Now').first().click(); // Kept for now

    cy.url().should('include', '/checkout');
    // The Stripe iframe interaction is inherently tricky.
    // This selector might be the best available if Stripe doesn't offer test-specific selectors.
    cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
      // const stripeCardNumber = Cypress.env('STRIPE_TEST_CARD');
      // Further actions to fill the Stripe form would go here, using stripeCardNumber
      // For example (conceptual, actual Stripe field selectors needed):
      // const body = $iframe.contents().find('body');
      // cy.wrap(body).find('input[name="cardNumber"]').type(stripeCardNumber);
      // cy.wrap(body).find('input[name="exp-date"]').type('12/25');
      // cy.wrap(body).find('input[name="cvc"]').type('123');
      // cy.wrap(body).find('button[type="submit"]').click();
      cy.log('Stripe iframe found. Test card number: ' + Cypress.env('STRIPE_TEST_CARD') + '. Implement actual filling logic.');
    });

    // TODO: Add data-testid="payment-success-message"
    // cy.get('[data-testid="payment-success-message"]').should('be.visible');
    cy.contains('Payment successful').should('be.visible'); // Kept for now
  });

  it('Loads equipment detail page', () => {
    cy.visit('/equipment');
    // TODO: Add data-testid="equipment-link-rack-mount" or similar for equipment links
    // cy.get('[data-testid="equipment-link-rack-mount"]').click();
    cy.contains('Rack Mount').click(); // Kept for now, assuming "Rack Mount" is link text

    // TODO: Add data-testid="specs-section" or similar to confirm content
    // cy.get('[data-testid="specs-section"]').should('be.visible');
    cy.contains('Specs').should('be.visible'); // Kept for now
  });

  it('Creates a community post', () => {
    // loginByApi should ideally use env vars internally
    cy.loginByApi(Cypress.env('EXISTING_USER_EMAIL'), Cypress.env('EXISTING_USER_PASSWORD'));
    cy.visit('/community');

    // TODO: Add data-testid="create-new-post-button"
    // cy.get('[data-testid="create-new-post-button"]').click();
    cy.contains('Create New Post').click(); // Kept for now

    // TODO: Add data-testid="post-title-input"
    cy.get('input[name="title"]').type(COMMUNITY_POST_TITLE);
    // TODO: Add data-testid="post-content-input"
    cy.get('textarea[name="content"]').type(COMMUNITY_POST_CONTENT);

    // TODO: Add data-testid="publish-post-button"
    // cy.get('[data-testid="publish-post-button"]').click();
    cy.contains('Publish').click(); // Kept for now

    // TODO: Add data-testid="post-publish-success-message"
    // cy.get('[data-testid="post-publish-success-message"]').should('be.visible');
    cy.contains('Post published successfully').should('be.visible'); // Kept for now
  });
});
