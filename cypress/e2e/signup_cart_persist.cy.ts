describe('signup auth persistence', () => {
  it('remains logged in after signup and can view cart', () => {
    cy.intercept('POST', '/api/auth/register', {
      statusCode: 201,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
    }).as('register');

    cy.visit('/signup');
    cy.get('input[name="displayName"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
    cy.wait('@register');

    cy.visit('/cart');
    cy.contains('Your cart is empty');
  });
});
