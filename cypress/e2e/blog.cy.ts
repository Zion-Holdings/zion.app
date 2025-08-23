describe('blog navigation', () => {
  it('shows blog page header', () => {
    cy.visit('/blog');
    cy.get('h1').should('be.visible').and('contain.text', 'Latest Articles');
  });
  it('opens article from list', () => {
    cy.visit('/blog');
    cy.get('a').contains('Read more').first().click();
    cy.url().should('include', '/blog/');
  });
});
