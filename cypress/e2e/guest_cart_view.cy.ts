describe('guest cart view', () => {
  it('shows cart summary for guest users', () => {
    cy.visit('/equipment/pro-camera-x1000');
    cy.contains('Add to Cart').click();
    cy.visit('/cart');
    cy.contains('Shopping Cart').should('be.visible');
    cy.contains('Login to Checkout').should('be.visible');
  });
});
