// Cypress test to ensure marketplace overview loads products

describe('Marketplace Overview', () => {
  it('displays at least one product card', () => {
    cy.visit('/marketplace');
    cy.get('[data-testid="product-card"]', { timeout: 10000 }).should('have.length.at.least', 1);
  });
}); 