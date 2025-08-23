describe('cart page loads', () => {
  it('shows cart heading', () => {
    cy.visit('/cart');
    cy.contains('Your Cart');
  });
});
