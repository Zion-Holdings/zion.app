describe('wallet dashboard', () => {
  it('shows balance after load', () => {
    cy.intercept('GET', '/api/wallet', {
      statusCode: 200,
      body: { points: 50, history: [] },
    }).as('getWallet');
    cy.visit('/wallet');
    cy.wait('@getWallet');
    cy.contains('Points');
    cy.contains('50');
  });
});
