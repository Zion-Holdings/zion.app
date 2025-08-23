describe('talent profile page', () => {
  it('shows the talent name', () => {
    cy.visit('/talent/talent-001');
    cy.contains('Alexandra Chen');
  });
});
