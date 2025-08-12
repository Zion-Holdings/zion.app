describe('Search Bar Mobile Responsiveness', () => {
  it('should not have horizontal scroll on mobile and search input should be visible', () => {
    // Set viewport to a small mobile size
    cy.viewport(320, 640);

    // Visit the homepage
    cy.visit('/');

    // Check for the absence of a horizontal scrollbar
    // Ensure the body's scrollWidth is less than or equal to its clientWidth
    cy.get('body').should(($body) => {
      expect($body[0].scrollWidth).to.be.lte($body[0].clientWidth);
    });

    // Optionally, locate the search input and assert it is visible
    // Assuming the placeholder text is unique enough for selection.
    // If not, a more specific selector (like a data-testid) would be better.
    cy.get('input[placeholder*="Search"]').should('be.visible');
  });
});
