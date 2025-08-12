describe('login link navigation', () => {
  it('navigates to login page from header', () => {
    cy.visit('/');
    cy.get('[data-testid="login-link"]').click();
    cy.url().should('include', '/login');
    cy.get('input[name="email"]').should('be.visible');
  });
});
