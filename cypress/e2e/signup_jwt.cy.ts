describe('JWT signup flow', () => {
  it('stores token and shows avatar after signup', () => {
    const email = `user-${Date.now()}@example.com`;
    cy.intercept('POST', '/auth/register', {
      statusCode: 200,
      body: { token: 'jwt123', user: { id: '1', email } }
    }).as('signup');

    cy.visit('/signup');
    cy.get('input[name="displayName"]').type('Test User');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();

    cy.wait('@signup');
    cy.window().its('localStorage.authToken').should('eq', 'jwt123');
    cy.get('button[aria-label="User profile"]').should('exist');
  });
});
