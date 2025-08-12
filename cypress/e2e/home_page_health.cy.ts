describe('Home Page Health', () => {
  it('should load the home page without runtime errors and display content', () => {
    // Navigate to the specified URL
    cy.visit('https://app.ziontechgroup.com/');

    // Check for the presence and content of the main container
    // Wait up to 5 seconds for the element to exist and have children
    cy.get('div#__next', { timeout: 5000 })
      .should('exist') // Ensure the element itself is present
      .and('not.be.empty') // Basic check that it's not literally empty
      .children() // Get children elements
      .should('have.length.greaterThan', 0); // Ensure it has at least one child element

    // The global 'uncaught:exception' handler in cypress/support/e2e.ts
    // will automatically fail the test if any unhandled JavaScript errors occur on the page.
  });
});
