// cypress/e2e/talent-profile.cy.ts
describe('Talent Profile Page', () => {
  // Existing test - keep as is
  it('opens a profile from the directory', () => {
    cy.visit('/talent');
    cy.contains('Alexandra Chen').click(); // Assuming 'Alexandra Chen' exists for this flow
    cy.get('[data-testid="talent-details"]').should('contain', 'Alexandra Chen');
  });

  // New test based on issue requirements
  it('directly navigates to a talent profile page and checks the heading', () => {
    // Assuming a talent with slug 'alexander-chen' exists and their name is "Alexander Chen"
    // The issue specifies 'alexander‑chen' (with non-breaking hyphen) but standard slugs use regular hyphens.
    // We will use 'alexander-chen' for the URL.
    cy.visit('/talent/alexander-chen');

    // Wait for the h1 to potentially appear after data loading
    // Assert that the h1 element contains "Alexander Chen"
    // The h1 is inside the div with data-testid="talent-details",
    // but targeting h1 directly is also fine as per issue.
    cy.get('h1', { timeout: 10000 }).should('contain.text', 'Alexander Chen');
  });
});
