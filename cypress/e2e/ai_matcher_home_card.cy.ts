describe('AI Matcher home card', () => {
  it('navigates to the matcher page via Explore button', () => {
    cy.visit('/');
    // Allow extra time for page assets to load on the deployed preview
    cy.get('[data-testid="explore-ai-talent-matching-cta"]', { timeout: 10000 }).click();
    cy.url().should('include', '/match');
  });
});
