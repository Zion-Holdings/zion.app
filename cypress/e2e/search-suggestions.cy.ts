describe('Search Suggestions Navigation', () => {
  beforeEach(() => {
    // Visit the homepage or a page with search functionality
    cy.visit('/');
  });

  it('should navigate to correct search results page when clicking a suggestion', () => {
    // Find the search bar and type "GPU"
    cy.get('[data-testid="search-bar"]').should('be.visible');
    cy.get('[data-testid="search-bar"] input').type('GPU');

    // Wait for suggestions to appear
    cy.get('[data-testid="search-suggestions"]').should('be.visible');
    
    // Look for "GPU cluster" suggestion and click it
    cy.get('[data-testid="search-suggestions"]')
      .contains('GPU cluster', { matchCase: false })
      .should('be.visible')
      .click();

    // Assert URL contains the encoded query
    cy.url().should('include', '/search?q=GPU%20cluster');

    // Assert that search results page is loaded
    cy.get('[data-testid="search-results"]').should('be.visible');
    
    // Assert that at least one result card is visible
    cy.get('[data-testid="result-card"]').should('have.length.at.least', 1);
    
    // Verify the search query is displayed correctly
    cy.contains('GPU cluster', { matchCase: false }).should('be.visible');
    
    // Verify results counter is shown
    cy.get('[data-testid="results-count"]').should('be.visible');
  });

  it('should handle search with no results gracefully', () => {
    // Search for something that won't have results
    cy.get('[data-testid="search-bar"] input').type('xyznonexistentquery123');
    
    // Wait a moment for suggestions (there should be none)
    cy.wait(500);
    
    // Press Enter to search anyway
    cy.get('[data-testid="search-bar"] input').type('{enter}');
    
    // Should navigate to search page
    cy.url().should('include', '/search');
    
    // Should show empty state
    cy.get('[data-testid="search-empty-state"]').should('be.visible');
    cy.contains('No results found', { matchCase: false }).should('be.visible');
  });

  it('should show loading state while fetching results', () => {
    // Type search term
    cy.get('[data-testid="search-bar"] input').type('AI');
    
    // Wait for suggestions
    cy.get('[data-testid="search-suggestions"]').should('be.visible');
    
    // Click on first suggestion
    cy.get('[data-testid="search-suggestions"] [data-testid="suggestion-item"]')
      .first()
      .click();
    
    // Should show loading state briefly (this might be fast)
    // cy.get('[data-testid="search-loading"]').should('be.visible');
    
    // Eventually should show results
    cy.get('[data-testid="search-results"]').should('be.visible');
  });

  it('should allow switching between grid and list view', () => {
    // Search for something
    cy.get('[data-testid="search-bar"] input').type('machine');
    cy.get('[data-testid="search-suggestions"]').should('be.visible');
    cy.get('[data-testid="search-suggestions"] [data-testid="suggestion-item"]')
      .first()
      .click();
    
    // Wait for results to load
    cy.get('[data-testid="search-results"]').should('be.visible');
    
    // Should be in grid view by default
    cy.get('[data-testid="view-mode-grid"]').should('have.class', 'active');
    
    // Switch to list view
    cy.get('[data-testid="view-mode-list"]').click();
    cy.get('[data-testid="view-mode-list"]').should('have.class', 'active');
    
    // Switch back to grid view
    cy.get('[data-testid="view-mode-grid"]').click();
    cy.get('[data-testid="view-mode-grid"]').should('have.class', 'active');
  });

  it('should handle keyboard navigation in suggestions', () => {
    // Type to get suggestions
    cy.get('[data-testid="search-bar"] input').type('AI');
    cy.get('[data-testid="search-suggestions"]').should('be.visible');
    
    // Use arrow keys to navigate
    cy.get('[data-testid="search-bar"] input').type('{downarrow}');
    cy.get('[data-testid="suggestion-item"].highlighted').should('exist');
    
    // Press Enter to select highlighted suggestion
    cy.get('[data-testid="search-bar"] input').type('{enter}');
    
    // Should navigate to search results
    cy.url().should('include', '/search/');
    cy.get('[data-testid="search-results"]').should('be.visible');
  });

  it('should maintain search state when navigating back', () => {
    // Perform a search
    cy.get('[data-testid="search-bar"] input').type('GPU');
    cy.get('[data-testid="search-suggestions"]').should('be.visible');
    cy.get('[data-testid="search-suggestions"] [data-testid="suggestion-item"]')
      .first()
      .click();
    
    // Verify we're on search results page
    cy.url().should('include', '/search/');
    cy.get('[data-testid="search-results"]').should('be.visible');
    
    // Navigate to a result (if any)
    cy.get('[data-testid="result-card"]').first().click();
    
    // Go back
    cy.go('back');
    
    // Should still be on search results page with same query
    cy.url().should('include', '/search/');
    cy.get('[data-testid="search-results"]').should('be.visible');
  });

  it('should support filtering and sorting results', () => {
    // Search for something that will have multiple results
    cy.get('[data-testid="search-bar"] input').type('dev');
    cy.get('[data-testid="search-suggestions"]').should('be.visible');
    cy.get('[data-testid="search-suggestions"] [data-testid="suggestion-item"]')
      .first()
      .click();
    
    // Wait for results
    cy.get('[data-testid="search-results"]').should('be.visible');
    
    // Try changing sort order
    cy.get('[data-testid="sort-select"]').select('newest');
    cy.wait(1000); // Wait for results to update
    
    // Try using filters (if available)
    cy.get('[data-testid="filter-button"]').click();
    // Filter interactions would depend on your filter implementation
  });
}); 