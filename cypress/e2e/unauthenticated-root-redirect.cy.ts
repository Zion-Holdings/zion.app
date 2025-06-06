describe('Unauthenticated Root Access', () => {
  it('should allow unauthenticated users to view the home page', () => {
    cy.visit('/');

    // Ensure we remain on the home page
    cy.url().should('eq', Cypress.config().baseUrl + '/');

    // Check that a key element from the home page is visible
    cy.get('main').should('be.visible');
  });
});
