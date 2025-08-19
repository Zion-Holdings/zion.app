describe('quote request step 1', () => {
  it('cannot continue without selecting a service', () => {
    cy.visit('/request-quote');
    cy.contains('Continue').click();
    cy.contains('Service Required');
  });

  it('advances after selecting service', () => {
    cy.visit('/request-quote');
    cy.contains('Services').click();
    cy.contains('AI Development').click();
    cy.contains('Continue').click();
    cy.contains('Tell us about your project');
  });
});
