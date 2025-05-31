describe('talent detail page', () => {
  it('loads profile from API', () => {
    cy.intercept('GET', '/api/talent/t-123', {
      statusCode: 200,
      body: {
        id: 't-123',
        full_name: 'Cypress Talent',
        bio: 'Testing bio',
        skills: ['Cypress'],
      },
    }).as('getTalent');

    cy.visit('/talent/t-123');
    cy.wait('@getTalent');
    cy.get('[data-testid="talent-name"]').should('contain', 'Cypress Talent');
  });
});
