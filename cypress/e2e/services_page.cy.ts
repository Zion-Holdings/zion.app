describe('Services page', () => {
  it('visits page and shows service cards', () => {
    cy.request('/services').its('status').should('eq', 200);
    cy.visit('/services');
    cy.get('[data-testid="services-list"]', { timeout: 10000 })
      .children()
      .should('have.length.greaterThan', 0);
  });
});
