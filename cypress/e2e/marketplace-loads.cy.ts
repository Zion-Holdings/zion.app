describe('Marketplace Page', () => {
  it('should load and display category cards', () => {
    cy.visit('/marketplace');

    // Wait for category cards to appear
    cy.get('[data-testid="category-card"]', { timeout: 10000 }).should('exist');

    // Assert that at least one category card is rendered
    cy.get('[data-testid="category-card"]').should('have.length.greaterThan', 0);
  });
});
