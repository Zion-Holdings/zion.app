describe('talent profile navigation', () => {
  it('opens a profile from the directory', () => {
    cy.visit('/talent');
    cy.contains('Alexandra Chen').click();
    cy.get('[data-testid="talent-details"]').should('contain', 'Alexandra Chen');
  });
});

