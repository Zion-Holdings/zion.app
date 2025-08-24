describe('request quote wizard', () => {
  it('selecting a service advances to details', () => {
    cy.visit('/request-quote');
    cy.get('[data-testid^="service-card-"]').first().click();
    cy.window()
      .its('wizardState.step')
      .should('eq', 'Details');
  });
});
