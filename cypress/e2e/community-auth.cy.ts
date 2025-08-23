describe('community create post auth redirect', () => {
  it('redirects to login and back to create post', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' },
    }).as('login');

    cy.visit('/community');
    cy.contains('Create New Post').click();
    cy.contains('Please log in to create a post');
    cy.url().should('include', '/login');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Login').click();
    cy.wait('@login');
    cy.url().should('include', '/community?new=1');
  });
});
