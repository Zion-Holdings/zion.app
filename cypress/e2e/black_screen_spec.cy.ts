describe('Zion App Load Test', () => {
  it('Should load without black screen or major rendering failure', () => {
    cy.visit('https://app.ziontechgroup.com');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('body').should('not.have.css', 'background-color', 'rgb(0, 0, 0)');
  });
});
