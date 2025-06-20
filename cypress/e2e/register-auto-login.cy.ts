describe('register auto login redirect', () => {
  it('creates account and goes to dashboard', () => {
    // 🔐 SECURITY: Use environment variables for test credentials
    const email = Cypress.env('DEV_USER_1_EMAIL') || 'test.dev@example.com';
    const password = Cypress.env('DEV_USER_1_PASSWORD') || 'SecureTestPass123!';

    cy.intercept('POST', '/api/auth/register', {
      statusCode: 201,
      body: { token: 'jwt', user: { id: '1', email } },
      headers: { 'set-cookie': 'authToken=jwt; HttpOnly; Path=/; Secure; SameSite=Strict' },
    }).as('register');

    cy.visit('/signup');
    cy.get('input[name="firstName"], input[name="displayName"]').first().type('Test');
    cy.get('input[name="lastName"], input[name="lastName"]').first().type('User');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirmPassword"]').type(password);
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
    cy.wait('@register');
    cy.url().should('include', '/dashboard');
  });
});
