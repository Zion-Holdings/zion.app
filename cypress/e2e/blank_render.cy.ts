const routesToCheck = [
  '/',
  '/marketplace',
  '/services',
  '/talent',
  '/equipment',
  '/about',
  '/blog',
];

describe('Blank render detection', () => {
  routesToCheck.forEach((path) => {
    it(`renders content for ${path}`, () => {
      cy.visit(path);
      cy.get('main', { timeout: 10000 })
        .children()
        .should('not.be.empty');
    });
  });
});
