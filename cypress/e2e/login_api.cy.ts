describe('login API endpoint', () => {
  it('returns error on 401', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 401,
      body: { error: 'Invalid credentials' },
    }).as('login');

    cy.visit('/login');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('wrongpass');
    cy.contains('Login').click();
    cy.wait('@login');
    cy.contains('Invalid credentials');
  });

  it('logs in on 200', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
    }).as('login');

    cy.visit('/login');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('secret');
    cy.contains('Login').click();
    cy.wait('@login');
    cy.get('input[name="password"]').should('not.be.disabled');
  });
});
