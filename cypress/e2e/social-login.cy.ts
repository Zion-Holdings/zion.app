describe('social login buttons redirect through NextAuth', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('google button triggers NextAuth sign-in', () => {
    cy.intercept('GET', '/api/auth/signin/google', (req) => {
      req.reply({ statusCode: 302, headers: { location: '/api/auth/callback/google' } });
    }).as('google');

    cy.contains('button', 'Sign in with Google').click();
    cy.wait('@google');
  });

  it('facebook button triggers NextAuth sign-in', () => {
    cy.intercept('GET', '/api/auth/signin/facebook', (req) => {
      req.reply({ statusCode: 302, headers: { location: '/api/auth/callback/facebook' } });
    }).as('facebook');

    cy.contains('button', 'Sign in with Facebook').click();
    cy.wait('@facebook');
  });
});
