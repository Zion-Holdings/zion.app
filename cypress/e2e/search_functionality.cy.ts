describe('Search Functionality', () => {
  beforeEach(() => {
    // Visit the home page or any page with the header search bar
    cy.visit('/');
  });

  it('should navigate to search results page with query parameter when submitting from header search', () => {
    const searchQuery = 'AI';
    const encodedSearchQuery = encodeURIComponent(searchQuery);

    // Find the header search input, type the query, and submit
    // Assuming the input is within a form in the header
    // Adjust selector if EnhancedSearchInput is not directly in a form or has a more specific parent
    cy.get('header form[class*="md:block"] input[type="text"]').should('be.visible').first().as('searchInput');
    cy.get('@searchInput').type(searchQuery);
    cy.get('@searchInput').closest('form').submit();

    // Verify URL
    cy.url().should('include', `/search?q=${encodedSearchQuery}`);

    // Verify search query is displayed on the results page
    cy.contains(`Search Results for "${searchQuery}"`).should('be.visible');

    // Verify results count is displayed (actual number doesn't matter as much as its presence)
    cy.get('[data-testid="results-count"]').should('be.visible').and('contain.text', 'results for "AI"');
     // Or, if the text is more dynamic:
    cy.contains(/Found \d+ results for "AI"/).should('be.visible');


    // Further check: Ensure some results are attempted to be displayed
    // This depends on the structure of your SearchTabs and result items
    // For example, if SearchTabs renders a div with data-testid="search-tabs-content"
    // cy.get('[data-testid="search-tabs-content"]').should('exist');
  });

  it('should navigate to search results page using query parameter when selecting a generic suggestion', () => {
    const searchQuery = 'Mod'; // Partial query to trigger suggestions
    const suggestionTextToClick = 'AI models'; // A known generic suggestion text from generateSearchSuggestions

    // Type partial query to show suggestions
    cy.get('header form[class*="md:block"] input[type="text"]').should('be.visible').first().as('searchInput');
    cy.get('@searchInput').type(searchQuery);

    // Wait for suggestions to appear and click the specific one
    // Adjust selector for suggestion items based on AutocompleteSuggestions structure
    cy.get('[data-testid="suggestion-item"]', { timeout: 5000 }) // Wait for suggestions
      .contains(suggestionTextToClick)
      .click();

    // Verify URL
    cy.url().should('include', `/search?q=${encodeURIComponent(suggestionTextToClick)}`);

    // Verify search query is displayed on the results page
    cy.contains(`Search Results for "${suggestionTextToClick}"`).should('be.visible');
  });
});
