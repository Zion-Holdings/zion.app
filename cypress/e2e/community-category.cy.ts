describe('community category listing', () => {
  it('displays posts in Getting Hired category', () => {
    cy.visit('/community');
    cy.contains('Getting Hired').click();
    cy.get('[data-testid="post-card"]').its('length').should('be.greaterThan', 0);
  });
});
