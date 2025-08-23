/* eslint-env cypress/globals */
const viewports = ['macbook-15', 'iphone-6'];

viewports.forEach(viewport => {
  describe(`Layout Test on ${viewport}`, () => {
    it('Should render layout correctly', () => {
      cy.viewport(viewport);
      cy.visit('/');
      cy.get('header').should('be.visible');
      cy.get('footer').should('be.visible');
      cy.get('main').should('exist');
    });
  });
});
