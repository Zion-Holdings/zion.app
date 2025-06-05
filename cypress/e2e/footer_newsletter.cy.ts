describe('Footer Newsletter Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow a user to subscribe with a valid email', () => {
    cy.get('input[placeholder="Enter your email"]').type('test@example.com');
    cy.get('form button[type="submit"]').contains('Subscribe').click();
    cy.contains('Subscribed!').should('be.visible');
    cy.get('input[placeholder="Enter your email"]').should('have.value', '');
  });

  it('should show an inline error for an invalid email', () => {
    cy.get('input[placeholder="Enter your email"]').type('invalid-email');
    cy.get('form button[type="submit"]').contains('Subscribe').click();
    cy.contains('Please enter a valid email address.').should('be.visible');
    cy.get('input[placeholder="Enter your email"]').should('have.value', 'invalid-email');
    cy.contains('Subscribed!').should('not.exist');
  });

  it('should show an inline error for an empty email submission', () => {
    cy.get('form button[type="submit"]').contains('Subscribe').click();
    cy.contains('Please enter a valid email address.').should('be.visible');
    cy.contains('Subscribed!').should('not.exist');
  });
});
