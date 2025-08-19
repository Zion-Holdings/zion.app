describe('forgot password', () => {
  it('shows success toast after submit', () => {
    cy.intercept('POST', '/auth/forgot-password', {
      statusCode: 200
    }).as('reset');

    cy.visit('/forgot-password');
    cy.get('input[name="email"]').type('user@example.com');
    cy.contains('Submit').click();
    cy.wait('@reset');
    cy.contains('Email sent');
  });
});
