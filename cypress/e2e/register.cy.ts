describe('register flow', () => {
  it('can register a new user', () => {
    cy.visit('/signup');
    cy.url().should('include', '/signup');
    cy.get('h2').should('contain.text', 'Create your account');
    cy.get('input[name="displayName"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
  });

  it('visiting /register redirects to /signup and sign-in link works', () => {
    cy.visit('/register');
    cy.url().should('include', '/signup');
    cy.get('h2').should('contain.text', 'Create your account');
    cy.get('a[href="/login"]').click();
    cy.url().should('include', '/login');
  });
});
