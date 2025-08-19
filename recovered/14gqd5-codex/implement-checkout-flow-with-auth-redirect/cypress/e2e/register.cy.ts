describe('register flow', () => {
  it('can register a new user', () => {
    cy.visit('/signup');
    cy.get('input[name="displayName"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
  });
});
