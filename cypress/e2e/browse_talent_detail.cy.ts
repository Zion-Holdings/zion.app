describe('browse talents and view detail', () => {
  it('opens a talent detail page from the listing', () => {
    cy.visit('/talent');
    cy.contains('View').first().click();
    cy.get('[data-testid="talent-name"]').should('be.visible');
  });
});
