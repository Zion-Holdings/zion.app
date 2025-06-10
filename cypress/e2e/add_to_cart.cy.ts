describe('add to cart', () => {
  beforeEach(() => {
    // Clear the cart from localStorage before each test
    window.localStorage.removeItem('cart');
  });

  it('stores item in local storage', () => {
    cy.visit('/equipment/pro-camera-x1000');
    cy.contains('Add to Cart').click();
    cy.url().should('include', '/cart');
    cy.window().then((win) => {
      const cart = JSON.parse(win.localStorage.getItem('cart') || '[]');
      expect(cart.length).to.be.greaterThan(0);
      expect(cart[0].id).to.eq('pro-camera-x1000');
    });
  });
});
