describe('login flow', () => {
  beforeEach(() => {
    // Ensure environment variables are set
    expect(Cypress.env('TEST_USER_EMAIL'), 'TEST_USER_EMAIL was not set').to.be.a('string');
    expect(Cypress.env('TEST_USER_PASSWORD'), 'TEST_USER_PASSWORD was not set').to.be.a('string');
  });

  it('shows error on invalid password', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 401,
      body: { error: 'Invalid credentials' },
    }).as('login');

    cy.visit('/login');
    cy.get('input[name="email"]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('input[name="password"]').type('badpass');
    cy.contains('Login').click();
    cy.wait('@login');
    cy.contains('Invalid credentials');
    // Check for the error toast message
    cy.get('[data-testid="toast-error"]').should('be.visible').and('contain', 'Invalid credentials');
  });

  it('redirects to next route on success', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: Cypress.env('TEST_USER_EMAIL') } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' },
    }).as('login');

    cy.visit('/login?next=/dashboard');
    cy.get('input[name="email"]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('input[name="password"]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.contains('Login').click();
    cy.wait('@login');
    cy.url().should('include', '/dashboard');
  });

  it('should display login form elements on /login route', () => {
    cy.visit('/login');

    // Check for email input
    cy.get('input[name="email"]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'you@example.com');

    // Check for password input
    cy.get('input[name="password"]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Enter password');

    // Check for login button
    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('contain.text', 'Login'); // Or use .invoke('text').then((text) => expect(text.trim()).to.equal('Login')); if needed for precise match
  });
});
