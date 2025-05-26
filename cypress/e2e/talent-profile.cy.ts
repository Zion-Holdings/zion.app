describe('talent profile page', () => {
  it('shows the talent name', () => {
    cy.visit('/talent/talent-001');
    cy.contains('Alexandra Chen');
  });

  it('displays skills for first talent slug', () => {
    cy.visit('/talent/t-001');
    cy.contains('Alexandra Chen');
    cy.contains('Machine Learning');
  });
});
