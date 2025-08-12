describe('Product Search', () => {
  it('should find an existing product and display it in results', () => {
    // Visit the homepage
    cy.visit('/'); // Assuming homepage is the root

    // Product to search for (from src/data/newProductsData.ts or indexed ES data)
    // Note: For E2E tests, it's better if this data is stable in the test environment's ES index.
    const productName = 'AI-Powered CRM Toolkit';
    const productSearchQuery = 'AI-Powered CRM'; // A partial query that should still find it

    // Type into the search input and submit
    // Using placeholder selector, assuming a global search input is present on homepage
    cy.get('input[placeholder*="Search"]')
      .first() // If multiple search inputs, target the global one
      .type(productSearchQuery);

    // Submit the search by pressing Enter
    cy.get('input[placeholder*="Search"]').first().type('{enter}');

    // Wait for navigation to search results page and for results to load
    cy.url().should('include', '/search?q='); // Check if URL contains the query parameter part

    // Check if product title appears in the results
    // Increased timeout to allow for API call and rendering
    cy.contains('h3', productName, { timeout: 10000 }).should('be.visible');

    // Check the "Products" tab count
    // This selector targets a button with role="tab" that contains the text "Products"
    cy.get('button[role="tab"]').contains('Products').invoke('text').then((text) => {
      // Extracts count from "Products (N)"
      const count = parseInt(text.match(/\((\d+)\)/)?.[1] || '0');
      expect(count).to.be.greaterThan(0);
    });

    // Also verify the product card itself is rendered and contains the product name
    // This selector targets a div with a class containing "bg-zion-blue-dark" (as per SearchPage.tsx)
    // and expects it to contain the productName.
    cy.contains('div[class*="bg-zion-blue-dark"]', productName).within(() => {
      cy.contains('h3', productName).should('be.visible');
      // Optional: Could also check for description if needed and if it's reliably present and indexed.
      // Example: cy.contains('p', 'Streamline customer interactions').should('be.visible');
    });
  });
});
