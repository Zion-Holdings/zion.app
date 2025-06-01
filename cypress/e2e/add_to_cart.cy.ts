describe('add to cart', () => {
  it('stores item in local storage', () => {
    cy.visit('/equipment/pro-camera-x1000');
    cy.contains('Add to Cart').click();
    cy.wait(900);
    cy.window().then((win) => {
      const cart = JSON.parse(win.localStorage.getItem('cart') || '[]');
      expect(cart.length).to.be.greaterThan(0);
      expect(cart[0].id).to.eq('pro-camera-x1000');
    });
  });
});
