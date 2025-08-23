describe('Critical user journeys', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Registers a new user successfully', () => {
    cy.intercept('POST', '/api/auth/register').as('register');
    cy.get('nav').contains('Sign up').click();
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type(`testuser${Date.now()}@example.com`);
    cy.get('input[name="password"]').type('StrongP@ssw0rd');
    cy.get('input[name="confirmPassword"]').type('StrongP@ssw0rd');
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
    cy.wait('@register').its('response.statusCode').should('eq', 201);
    cy.url().should('include', '/dashboard');
  });

  it('Logs in and completes Stripe test checkout', () => {
    cy.loginByApi('existing@test.com', 'password123');
    cy.visit('/marketplace');
    cy.contains('Buy Now').first().click();
    cy.url().should('include', '/checkout');
    cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
      // fill Stripe test card 4242 4242 4242 4242
    });
    cy.contains('Payment successful').should('be.visible');
  });

  it('Loads equipment detail page', () => {
    cy.visit('/equipment');
    cy.contains('Rack Mount').click();
    cy.contains('Specs').should('be.visible');
  });

  it('Creates a community post', () => {
    cy.loginByApi('existing@test.com', 'password123');
    cy.visit('/community');
    cy.contains('Create New Post').click();
    cy.get('input[name="title"]').type('Automated test post');
    cy.get('textarea[name="content"]').type('This post was created by Cypress.');
    cy.contains('Publish').click();
    cy.contains('Post published successfully').should('be.visible');
  });
});

