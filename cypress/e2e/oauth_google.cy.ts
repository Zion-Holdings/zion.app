describe('google oauth callback', () => {
  it('stores token and redirects to home', () => {
    const payload = btoa(JSON.stringify({ id: '1', displayName: 'Test User' }));
    const token = `header.${payload}.sig`;
    cy.visit(`/oauth?token=${token}`);
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('[data-testid="home-greeting"]').should('contain', 'Test');
  });
});
