describe('logout flow', () => {
  beforeEach(() => {
    expect(Cypress.env('TEST_USER_EMAIL'), 'TEST_USER_EMAIL was not set').to.be.a('string');
    expect(Cypress.env('TEST_USER_PASSWORD'), 'TEST_USER_PASSWORD was not set').to.be.a('string');
  });

  it('logs out and shows login link', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: Cypress.env('TEST_USER_EMAIL') } },
    }).as('login');

    cy.intercept('POST', '/api/auth/logout', {
      statusCode: 200,
      body: { success: true },
    }).as('logout');

    cy.visit('/login');
    cy.get('input[name="email"]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('input[name="password"]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.contains('Login').click();
    cy.wait('@login');

    cy.get('header .cursor-pointer').first().click();
    cy.contains('Logout').click();
    cy.wait('@logout');

    cy.get('a[href="/login"]').should('be.visible');
  });
});
