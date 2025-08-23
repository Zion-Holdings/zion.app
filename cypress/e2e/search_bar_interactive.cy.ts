describe('Search Bar Interaction', () => {
  const pagesToTest = [
    { name: 'Home Page', path: '/' },
    { name: 'Checkout Page', path: '/checkout' }, // Assuming '/checkout' is the correct path
    { name: 'Product Page', path: '/marketplace/listing/sample-product-id' }, // Replace with a valid product ID or path
    { name: 'Talent Page', path: '/talent' },
    { name: 'Services Page', path: '/services' },
  ];

  // Selector for the search input within the PrimaryNav component
  // Based on PrimaryNav.tsx, the form around EnhancedSearchInput can be a good target
  // Or the input itself if it has a consistent placeholder or data-testid.
  // Let's assume the input placeholder is "Search..."
  const searchInputSelector = 'header[data-testid="header"] input[placeholder="Search..."]';

  pagesToTest.forEach(page => {
    it(`should be interactive on the ${page.name}`, () => {
      cy.visit(page.path);

      // Ensure the header is visible (it might be sticky or animated)
      cy.get('header[data-testid="header"]').should('be.visible');

      const searchInput = cy.get(searchInputSelector);

      searchInput.should('be.visible');

      // Check if the input is not disabled
      searchInput.should('not.be.disabled');

      // Attempt to focus and type
      // Use { force: true } if normal click/type is flaky due to potential minor overlays (though the z-index fix should prevent major ones)
      // However, it's better if force:true is not needed.
      searchInput.focus().should('have.focus');

      const searchText = 'test search';
      searchInput.type(searchText, { delay: 50 }); // Add a small delay to simulate user typing

      // Verify the input value has changed
      searchInput.should('have.value', searchText);

      // Clear the input for the next test or if other interactions are chained
      searchInput.clear();
      searchInput.should('have.value', '');
    });
  });

  it('should show search suggestions when typing on home page', () => {
    cy.visit('/');
    cy.get('header[data-testid="header"]').should('be.visible');
    const searchInput = cy.get(searchInputSelector);
    searchInput.should('be.visible').type('services', { delay: 50 });

    // Check for the appearance of the suggestions dropdown
    // This selector might need adjustment based on AutocompleteSuggestions.tsx
    cy.get('div[role="listbox"][aria-expanded="true"]').should('be.visible');
    cy.get('div[role="listbox"] div[role="option"]').should('have.length.greaterThan', 0);
  });
});
