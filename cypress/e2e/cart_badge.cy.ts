describe('cart badge', () => {
  it('shows count after adding first item', () => {
    cy.visit('/marketplace');
    cy.contains('Add to Cart').first().click();
    cy.url().should('include', '/cart');
    cy.get('[aria-label="Cart"]').find('span').should('contain', '1');
  });
});
