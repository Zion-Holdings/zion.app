describe('Smoke Tests', () => {
  const routesToTest = [
    { path: '/', selector: 'main' },
    { path: '/login', selector: 'main' },
    { path: '/marketplace', selector: 'main' },
    { path: '/community', selector: 'main' },
    { path: '/about', selector: 'main' },
  ];

  routesToTest.forEach(route => {
    it(`should display the main content for ${route.path}`, () => {
      cy.visit(route.path);
      cy.get(route.selector).should('be.visible');
    });
  });
});
