describe('Main navigation links', () => {
  it('navigates to each top link without 404', () => {
    const broken: string[] = [];
    cy.visit('/');
    cy.get('header nav a').each(($link) => {
      const href = $link.attr('href');
      if (!href) {
        return;
      }
      cy.log(`Checking ${href}`);
      cy.request({ url: href, failOnStatusCode: false }).then((resp) => {
        if (resp.status === 404) {
          broken.push(href);
          cy.log(`Broken path: ${href}`);
        }
      });
      cy.wrap($link).click();
      cy.location('pathname').should('include', href === '/' ? '/' : href);
      cy.go('back');
    }).then(() => {
      if (broken.length) {
        throw new Error('Broken links found: ' + broken.join(', '));
      }
    });
  });
});
