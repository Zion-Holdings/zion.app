describe('blog navigation', () => {
  it('opens article from list', () => {
    cy.visit('/blog');
    cy.get('a').contains('Read more').first().click();
    cy.url().should('include', '/blog/');
  });
});
