describe('theme toggle', () => {
  it('toggles and persists theme', () => {
    cy.visit('/theme-test');
    cy.get('button[aria-label="Toggle theme"]').click();
    cy.get('html').should('have.class', 'dark');
    cy.reload();
    cy.get('html').should('have.class', 'dark');

    cy.get('button[aria-label="Toggle theme"]').click();
    cy.get('html').should('not.have.class', 'dark');
    cy.reload();
    cy.get('html').should('not.have.class', 'dark');
  });
});
