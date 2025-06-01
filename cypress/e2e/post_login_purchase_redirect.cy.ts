describe('purchase redirect after login', () => {
  it('returns to checkout after logging in', () => {
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' },
    }).as('login');

    cy.visit('/product/123');
    cy.contains('Buy Now').click();
    cy.url().should('include', '/login?next=/checkout/123');

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Login').click();
    cy.wait('@login');

    cy.url().should('include', '/checkout/123');
  });
});
