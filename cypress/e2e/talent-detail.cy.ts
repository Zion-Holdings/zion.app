describe('talent detail page', () => {
  it('displays profile info from api', () => {
    cy.intercept('GET', '/api/talent/t-001', {
      statusCode: 200,
      body: {
        profile: {
          id: 't-001',
          full_name: 'Cypress Talent',
          bio: 'Testing bio',
          skills: ['React']
        }
      }
    }).as('getTalent');

    cy.visit('/talent/t-001');
    cy.wait('@getTalent');
    cy.get('[data-testid="talent-name"]').should('contain', 'Cypress Talent');
  });
});
