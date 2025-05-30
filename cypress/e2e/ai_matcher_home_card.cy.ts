describe('AI Matcher home card', () => {
  it('navigates to the matcher page via Explore button', () => {
    cy.visit('/');
    cy.contains('Explore').click();
    cy.url().should('include', '/match');
  });
});
