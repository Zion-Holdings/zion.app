describe('404 Return Home link', () => {
  it('navigates to home from 404 page', () => {
    cy.visit('/nonexistent-path', { failOnStatusCode: false });
    cy.contains('Return to Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
