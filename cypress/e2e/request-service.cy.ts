describe('request service form', () => {
  it('submits service request', () => {
    cy.intercept('POST', '/api/service-request').as('request');
    cy.visit('/request-service');
    cy.get('input[placeholder="Your name"]').type('John Doe');
    cy.get('input[placeholder="Email"]').type('john@example.com');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('textarea').type('Need help');
    cy.get('.request-btn').click();
    cy.wait('@request').its('response.statusCode').should('eq', 200);
  });
});
