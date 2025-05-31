// cypress/e2e/cart.cy.ts
describe('Cart Functionality', () => {
  beforeEach(() => {
    // Optional: Clear cart or perform other setup tasks if necessary.
    // For now, login is handled per test.
    // cy.fixture('user.json').then(user => { this.user = user; });
  });

  it('should allow a logged-in user to add an item to the cart and view it', () => {
    // 1. Login using the custom command
    // Assuming 'testuser@example.com' and 'password123' are valid test credentials
    cy.loginByApi('testuser@example.com', 'password123');

    // After loginByApi, it's good practice to visit a page to ensure
    // the session/localStorage is correctly applied to the domain.
    // Visiting the homepage or the product page directly should work.
    // If loginByApi already handles setting up the session for subsequent cy.visit() calls,
    // an explicit visit here might not be strictly necessary but doesn't harm.

    // 2. Navigate to a product page
    // Replace with an actual product page URL or navigation steps if this one isn't suitable.
    // This product page must use the ProductActions component and pass productName & price.
    // Assumed product: ID 'example-product-1', Name 'Example Product', Price (any valid number)
    cy.visit('/marketplace/listing/example-product-1');

    // 3. Add item to cart
    // Using data-cy attribute for the "Add to Cart" button.
    const addToCartButtonSelector = '[data-cy=add-to-cart-button]';

    cy.get(addToCartButtonSelector).should('contain.text', 'Add to Cart').click();

    // Check for button state changes as defined in ProductActions.tsx
    // Initial click changes text to 'Adding...' and disables button
    cy.get(addToCartButtonSelector).should('contain.text', 'Adding...').and('be.disabled');

    // After addToCart promise resolves and CartContext dispatch:
    // Text changes to 'Added ✓', remains disabled briefly (or enabled, depends on exact component logic timing)
    // Toast message "Item added to cart successfully!" should appear (testing toasts is optional here but good)
    cy.get(addToCartButtonSelector, { timeout: 3000 }).should('contain.text', 'Added ✓');

    // After a 2-second timeout in ProductActions:
    // Text reverts to 'Add to Cart' and button becomes enabled.
    cy.get(addToCartButtonSelector, { timeout: 3000 }).should('contain.text', 'Add to Cart').and('not.be.disabled');

    // 4. Navigate to cart page
    cy.visit('/cart');

    // 5. Assert item presence
    // This assertion depends on how cart items are rendered on the /cart page.
    // Assuming each item has a distinguishable element containing the product name.
    // The product name "Example Product" must match the one used on the product page.
    cy.contains('Example Product').should('be.visible'); // Basic check

    // More specific selector if available, e.g., for an element with a class:
    // cy.get('.cart-item .product-name').contains('Example Product').should('be.visible');
    // Or using data-cy attributes if implemented on the cart page:
    // cy.get('[data-cy=cart-item-name]').contains('Example Product').should('be.visible');

    // Optionally, check for quantity if displayed:
    // cy.get('[data-cy=cart-item-quantity]').contains('1').should('be.visible');
  });

  // Future tests:
  // - Verify cart item details (price, quantity)
  // - Test removing an item from the cart
  // - Test updating quantity in the cart
  // - Test cart behavior when not logged in (if applicable)
  // - Test cart persistence across sessions (if applicable)
});
