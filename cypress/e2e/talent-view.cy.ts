describe('talent card view', () => {
  it('opens detail page from directory', () => {
    cy.visit('/talent');
    cy.contains('View').first().click();
    cy.get('[data-testid="talent-name"]').should('be.visible');
    cy.get('[data-testid="talent-details"]').should('contain', 'Contact');
  });
});
