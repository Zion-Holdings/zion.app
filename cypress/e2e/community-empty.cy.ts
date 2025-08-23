describe('community empty category', () => {
  it('shows empty state with disabled CTA', () => {
    cy.intercept('GET', '**/forum_posts*category_id=eq.announcements*', {
      statusCode: 200,
      body: [],
    }).as('getPosts');

    cy.visit('/community/announcements');
    cy.wait('@getPosts');

    cy.contains('No discussions yet');
    cy.contains('Be the first to start a conversation.');
    cy.contains('Create Post').should('be.disabled');
    cy.contains('Create Post').trigger('mouseover');
    cy.contains('Login required');
  });
});
