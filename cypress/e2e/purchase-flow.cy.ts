describe('purchase flow', () => {
  it('completes checkout with Stripe test mode', () => {
    cy.intercept('POST', '/api/checkout_sessions', {
      statusCode: 200,
      body: { sessionId: 'sess_test' },
    }).as('createSession');

    cy.visit('/checkout', {
      onBeforeLoad(win) {
        win.Stripe = function () {
          return {
            redirectToCheckout: cy.stub().as('redirect'),
          } as any;
        };
      },
    });

    cy.contains('Buy Now').click();
    cy.wait('@createSession');
    cy.get('@redirect').should('have.been.called');
  });
});
