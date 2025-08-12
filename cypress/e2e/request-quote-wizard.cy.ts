describe('request quote wizard', () => {
  it('selecting a service advances to step 2', () => {
    cy.visit('/request-quote');
    cy.get('[data-testid^="request-quote-"]').first().click();
    cy.get('[data-testid="step-indicator"]').should('contain', '2/3');
  });
});
