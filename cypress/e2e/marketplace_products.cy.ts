describe('marketplace products page', () => {
  it('displays a grid of products', () => {
    cy.visit('/marketplace/products');
    cy.get('[data-testid="products-grid"]', { timeout: 10000 }).within(() => {
      cy.get('[data-testid="product-card"]').should('have.length.greaterThan', 0);
    });
  });
});
