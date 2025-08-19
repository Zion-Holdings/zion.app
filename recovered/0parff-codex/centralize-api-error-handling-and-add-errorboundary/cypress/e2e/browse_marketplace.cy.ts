describe('hero section browse marketplace', () => {
  it('navigates to marketplace from home', () => {
    cy.visit('/');
    cy.get('#browse-marketplace').click();
    cy.url().should('include', '/marketplace');
  });
});
