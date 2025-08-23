describe('app loader overlay', () => {
  it('hides overlay after navigation', () => {
    cy.visit('/about');
    cy.get('body', { timeout: 16000 })
      .find('[data-testid="loader-overlay"]')
      .should('not.exist');
  });
});
