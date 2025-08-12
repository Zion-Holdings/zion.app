describe('guest buy now flow', () => {
  it('redirects through login to checkout', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' },
    }).as('login');

    cy.visit('/equipment/pro-camera-x1000');
    cy.contains('Buy Now').click();
    cy.url().should('include', '/login?next=%2Fcheckout%3Fsku%3Dpro-camera-x1000');

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Login').click();
    cy.wait('@login');

    cy.url().should('include', '/checkout?sku=pro-camera-x1000');
    cy.contains('pro-camera-x1000');
  });
});
