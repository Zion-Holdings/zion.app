describe('home page error handling', () => {
  it('shows fallback banner when server-side props fail', () => {
    cy.visit('/?forceError=1');
    cy.contains('Failed to load home page.').should('be.visible');
  });
});
