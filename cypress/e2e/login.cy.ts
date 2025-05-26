describe('login flow', () => {
  it('shows error on invalid password', () => {
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 401,
      body: { error: 'Invalid credentials' },
    }).as('login');

    cy.visit('/login');
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('badpass');
    cy.contains('Login').click();
    cy.wait('@login');
    cy.contains('Invalid credentials');
  });

  it('redirects to next route on success', () => {
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' },
    }).as('login');

    cy.visit('/login?next=/dashboard');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Login').click();
    cy.wait('@login');
    cy.url().should('include', '/dashboard');
  });
});
