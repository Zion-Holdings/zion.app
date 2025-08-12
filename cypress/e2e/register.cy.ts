describe('register flow', () => {
  beforeEach(() => {
    // Ensure environment variables are set
    expect(Cypress.env('TEST_USER_DISPLAY_NAME'), 'TEST_USER_DISPLAY_NAME was not set').to.be.a('string');
    expect(Cypress.env('TEST_USER_EMAIL'), 'TEST_USER_EMAIL was not set').to.be.a('string');
    expect(Cypress.env('TEST_USER_PASSWORD'), 'TEST_USER_PASSWORD was not set').to.be.a('string');
  });

  it('can register a new user', () => {
    // Use a unique email for each test run to avoid conflicts
    const uniqueEmail = `testuser-${Date.now()}@example.com`;

    cy.intercept('POST', '/api/auth/register', {
      statusCode: 201, // Or 200, depending on your API
      body: { message: 'User registered successfully' }, // Adjust as per your API response
    }).as('registerUser');

    cy.visit('/signup');
    cy.url().should('include', '/signup');
    cy.get('h2').should('contain.text', 'Create your account');
    cy.get('input[name="displayName"]').type(Cypress.env('TEST_USER_DISPLAY_NAME'));
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="password"]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('input[name="confirmPassword"]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
    cy.wait('@registerUser');
    // Add assertions here based on your application's behavior after successful registration
    // For example, redirect to login or dashboard
    // cy.url().should('include', '/login');
  });

  it('shows error on duplicate email', () => {
    cy.intercept('POST', '/api/auth/register', {
      statusCode: 409,
      body: { error: 'Email already exists' },
    }).as('registerDuplicateEmail');

    cy.visit('/signup');
    cy.get('input[name="displayName"]').type(Cypress.env('TEST_USER_DISPLAY_NAME'));
    cy.get('input[name="email"]').type(Cypress.env('TEST_USER_EMAIL')); // Use the pre-defined email that would be a duplicate
    cy.get('input[name="password"]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('input[name="confirmPassword"]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
    cy.wait('@registerDuplicateEmail');
    cy.get('[data-testid="error-message"]').should('be.visible').and('contain', 'Email already exists');
  });

  it('visiting /register shows register form and sign-in link works', () => {
    cy.visit('/register');
    cy.url().should('include', '/register');
    cy.get('h2').should('contain.text', 'Create account');
    cy.get('a[href="/login"]').click();
    cy.url().should('include', '/login');
  });
});
