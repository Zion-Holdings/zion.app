describe('add to cart', () => {
  it('stores item in local storage', () => {
    cy.visit('/equipment/pro-camera-x1000');
    // The deployed site can take a moment to load, so wait up to 10s
    cy.contains('Add to Cart', { timeout: 10000 }).click();
    cy.url().should('include', '/cart');
    cy.window().then((win) => {
      const cart = JSON.parse(win.localStorage.getItem('cart') || '[]');
      expect(cart.length).to.be.greaterThan(0);
      expect(cart[0].id).to.eq('pro-camera-x1000');
    });
  });
});
