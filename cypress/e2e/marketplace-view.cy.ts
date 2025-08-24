describe('marketplace view toggle', () => {
  it('switches to list layout', () => {
    cy.visit('/marketplace');
    cy.get('button[aria-label="List view"]').click();
    cy.get('.product-list');
  });
});
