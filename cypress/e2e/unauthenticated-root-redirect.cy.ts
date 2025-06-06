describe('Unauthenticated Root Redirect', () => {
  it('should redirect unauthenticated users from root to /login', () => {
    // Cypress starts with a clean session, so no explicit logout is needed.
    cy.visit('/');

    // Check if the URL eventually contains /login
    // We use `should('include', '/login')` to handle potential query parameters like ?redirectTo=/
    cy.url().should('include', '/login');

    // Verify that a known element from the login page is visible
    // For example, the "Sign in with Google" button which is inside SocialLogin component
    // The SocialLogin component has a button with "Sign in with Google" as screen reader text
    cy.contains('button', /sign in with google/i).should('be.visible');
  });
});
