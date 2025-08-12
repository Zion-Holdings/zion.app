describe('sign up flow', () => {
  it('registers new user', () => {
    cy.intercept('POST', '/api/auth/register', {
      statusCode: 201,
      body: { token: 'jwt', user: { id: '1', email: 'new@example.com' } },
    }).as('register');

    cy.visit('/mobile/onboarding');
    cy.contains('Continue').click();
    cy.contains('Continue').click();

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('new@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Create Account').click();

    cy.wait('@register');
    cy.url().should('include', '/mobile');
  });
});
