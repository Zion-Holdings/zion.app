describe('login to reach marketplace', () => {
  it('allows user to login and redirect to marketplace', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' },
    }).as('login');

    cy.visit('/login?next=/marketplace');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Login').click();
    cy.wait('@login');
    cy.url().should('include', '/marketplace');
  });
});
