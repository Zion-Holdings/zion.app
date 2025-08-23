/* eslint-env cypress/globals */
describe('Theme Toggle', () => {
  it('Switches from light to dark and persists', () => {
    cy.visit('/');
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get('html').should('have.attr', 'data-theme', 'dark');
    cy.reload();
    cy.get('html').should('have.attr', 'data-theme', 'dark');
  });
});
