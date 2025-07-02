/* eslint-env cypress/globals */
describe('add to cart', () => {
  beforeEach(() => {
    // Clear the cart from localStorage before each test
    window.localStorage.removeItem('cart');
  });

  it('stores item in local storage', () => {
    cy.visit('/equipment/pro-camera-x1000');
    // The deployed site can take a moment to load, so wait up to 10s
    cy.get('[data-testid="add-to-cart-button"]', { timeout: 10000 }).click();
    cy.url().should('include', '/cart');
    cy.window().then((win) => {
      const cart = JSON.parse(win.localStorage.getItem('cart') || '[]');
      expect(cart.length).to.be.greaterThan(0);
      expect(cart[0].id).to.eq('pro-camera-x1000');
    });
  });

  it('adds item from marketplace product card icon and stays on page', () => {
    // Visit the marketplace page
    cy.visit('/marketplace');

    // Wait for products to load and find the first product card
    // Using a more robust selector if product cards have a specific data-testid
    // For now, assuming the structure from MarketplacePage.tsx
    cy.get('[data-testid="add-to-cart-listing-button"]', { timeout: 10000 })
      .first()
      .should('be.visible')
      .click();

    // Check for the success notification (adjust selector based on actual implementation)
    cy.contains('added', { matchCase: false }).should('be.visible');

    // Verify item in localStorage (using 'zion_cart' as per cartSlice.ts)
    cy.window().then((win) => {
      // Wait for localStorage to update
      return cy.waitUntil(() => {
        const cartData = win.localStorage.getItem('zion_cart');
        return cartData && JSON.parse(cartData).length > 0;
      }, {
        timeout: 5000,
        interval: 500,
        errorMsg: 'Cart in localStorage was not updated in time'
      }).then(() => {
        const cart = JSON.parse(win.localStorage.getItem('zion_cart') || '[]');
        expect(cart.length).to.be.greaterThan(0);
        // We don't know the exact ID of the first product, so just check that something was added
        expect(cart[0]).to.have.property('id');
        expect(cart[0].quantity).to.eq(1);
      });
    });

    // Ensure the URL is still /marketplace
    cy.url().should('include', '/marketplace');

    // Optional: Check if cart count in header updates if such an element exists
    // cy.get('[data-testid="cart-count"]').should('contain', '1');
  });
});
