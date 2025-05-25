describe('theme persistence', () => {
  it('retains theme after reload', () => {
    cy.visit('/');
    cy.get('html').then($html => {
      const initialTheme = $html.hasClass('dark') ? 'dark' : 'light';
      cy.get('button[aria-pressed]').first().click();
      cy.reload();
      cy.get('html').should('have.class', initialTheme === 'dark' ? 'light' : 'dark');
    });
  });
});
