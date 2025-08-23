describe('cart badge', () => {
  it('shows count after adding first item', () => {
    cy.visit('/marketplace');
    cy.get('[data-testid="add-to-cart-listing-button"]', { timeout: 10000 })
      .first()
      .click();
    cy.url().should('include', '/cart');
    cy.get('[aria-label="Cart"]').find('span').should('contain', '1');
  });
});
