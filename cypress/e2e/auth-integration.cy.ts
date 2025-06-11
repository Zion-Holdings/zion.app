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
    if (!Cypress.env('CYPRESS_TEST_USER_EMAIL')) {
      throw new Error('CYPRESS_TEST_USER_EMAIL environment variable is not set.');
    }
    if (!Cypress.env('CYPRESS_TEST_USER_PASSWORD')) {
      throw new Error('CYPRESS_TEST_USER_PASSWORD environment variable is not set.');
    }
    if (!Cypress.env('CYPRESS_TEST_USER_DISPLAY_NAME')) {
      throw new Error('CYPRESS_TEST_USER_DISPLAY_NAME environment variable is not set.');
    }
  });

  it('registers, gets auto-logged in, and user data is available', () => {
    const uniqueEmail = `testuser-${Date.now()}@example.com`;
    const testPassword = Cypress.env('CYPRESS_TEST_USER_PASSWORD');
    const testDisplayName = Cypress.env('CYPRESS_TEST_USER_DISPLAY_NAME');

    // Register - API call will be live
    cy.visit('/signup');
    cy.get('[data-testid="display-name-input"]').type(testDisplayName);
    cy.get('[data-testid="email-input"]').type(uniqueEmail);
    cy.get('[data-testid="password-input"]').type(testPassword);
    cy.get('[data-testid="confirm-password-input"]').type(testPassword);
    cy.get('[data-testid="terms-checkbox"]').check();
    cy.get('[data-testid="create-account-button"]').click();

    // After registration, user should be redirected to dashboard
    // Adding a timeout because the page load and session setting might take a moment.
    cy.url().should('include', '/dashboard', { timeout: 10000 });

    // Verify user session by calling /api/users/me
    // This request will use the session cookie set by Supabase during setSession
    cy.request('/api/users/me').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.email).to.eq(uniqueEmail);
      // Optionally, check for display_name if it's consistently set by your backend
      // expect(response.body.user_metadata?.display_name).to.eq(testDisplayName);
    });

    // Example: Check for a known element on the dashboard page
    // cy.contains('Welcome to your Dashboard!').should('be.visible');
    // This line is commented out as we don't know the exact content of the dashboard.
    // The cy.url() and /api/users/me checks are the primary assertions for now.
  });
});
