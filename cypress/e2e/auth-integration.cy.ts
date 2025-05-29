describe('register and login flow', () => {
  it('registers then logs in and accesses community', () => {
    cy.intercept('POST', '/api/auth/register', {
      statusCode: 201,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
      headers: { 'set-cookie': 'access=jwt; HttpOnly; Path=/' },
    }).as('register');

    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: {
        accessToken: 'jwt',
        refreshToken: 'ref',
        user: { id: '1', email: 'test@example.com' },
      },
      headers: { 'set-cookie': 'access=jwt; HttpOnly; Path=/' },
    }).as('login');

    // Register
    cy.visit('/signup');
    cy.get('input[name="displayName"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
    cy.wait('@register');

    // Login
    cy.visit('/login?next=/community');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Login').click();
    cy.wait('@login');

    cy.url().should('include', '/community');
    cy.contains('Community Forum');
  });
});
