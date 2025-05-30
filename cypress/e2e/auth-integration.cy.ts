// Requires TEST_USER_DISPLAY_NAME, TEST_USER_EMAIL, and TEST_USER_PASSWORD in cypress.env.json
// Example cypress.env.json:
// {
//   "TEST_USER_DISPLAY_NAME": "Test User",
//   "TEST_USER_EMAIL": "test@example.com",
//   "TEST_USER_PASSWORD": "Password123"
// }

describe('register and login flow', () => {
  beforeEach(() => {
    // Ensure environment variables are loaded, or provide defaults for local runs if desired
    // For this refactor, we assume they are set in cypress.env.json
    if (!Cypress.env('TEST_USER_EMAIL')) {
      throw new Error('TEST_USER_EMAIL environment variable is not set.');
    }
    if (!Cypress.env('TEST_USER_PASSWORD')) {
      throw new Error('TEST_USER_PASSWORD environment variable is not set.');
    }
    if (!Cypress.env('TEST_USER_DISPLAY_NAME')) {
      throw new Error('TEST_USER_DISPLAY_NAME environment variable is not set.');
    }
  });

  it('registers then logs in and accesses community', () => {
    cy.intercept('POST', '/api/auth/register', {
      statusCode: 201,
      fixture: 'auth/register-success.json', // Use fixture for success response
      headers: { 'set-cookie': 'access=jwt_mock_token_for_registration; HttpOnly; Path=/' },
    }).as('register');

    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      fixture: 'auth/login-success.json', // Use fixture for success response
      headers: { 'set-cookie': 'access=jwt_mock_access_token_for_login; HttpOnly; Path=/' },
    }).as('login');

    // Register
    cy.visit('/signup');
    // TODO: Add data-testid="display-name-input" to the display name input in the app
    cy.get('input[name="displayName"]').type(Cypress.env('TEST_USER_DISPLAY_NAME'));
    // TODO: Add data-testid="email-input" to the email input in the app
    cy.get('input[name="email"]').type(Cypress.env('TEST_USER_EMAIL'));
    // TODO: Add data-testid="password-input" to the password input in the app
    cy.get('input[name="password"]').type(Cypress.env('TEST_USER_PASSWORD'));
    // TODO: Add data-testid="confirm-password-input" to the confirm password input in the app
    cy.get('input[name="confirmPassword"]').type(Cypress.env('TEST_USER_PASSWORD'));
    // TODO: Add data-testid="terms-checkbox" to the terms checkbox in the app
    cy.get('input[type="checkbox"]').check(); // Assuming this is the terms checkbox, needs specific selector

    // TODO: Add data-testid="create-account-button" to the Create Account button in the app
    // cy.get('[data-testid="create-account-button"]').click();
    cy.contains('Create Account').click(); // Kept for now, to be replaced
    cy.wait('@register');

    // Login
    cy.visit('/login?next=/community');
    // TODO: Add data-testid="email-input" to the email input in the app (reused)
    cy.get('input[name="email"]').type(Cypress.env('TEST_USER_EMAIL'));
    // TODO: Add data-testid="password-input" to the password input in the app (reused)
    cy.get('input[name="password"]').type(Cypress.env('TEST_USER_PASSWORD'));

    // TODO: Add data-testid="login-button" to the Login button in the app
    // cy.get('[data-testid="login-button"]').click();
    cy.contains('Login').click(); // Kept for now, to be replaced
    cy.wait('@login');

    cy.url().should('include', '/community');
    // TODO: Add data-testid="community-forum-header" for the text "Community Forum"
    // cy.get('[data-testid="community-forum-header"]').should('be.visible');
    cy.contains('Community Forum'); // Kept for now, to be replaced
  });
});
