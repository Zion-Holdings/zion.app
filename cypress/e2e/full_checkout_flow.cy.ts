describe('buy now full checkout', () => {
  it('adds item and completes payment', () => {
    cy.loginByApi('existing@test.com', 'password123');

    cy.intercept('POST', '/api/create-payment-intent', {
      statusCode: 200,
      body: { clientSecret: 'test_secret', id: 'pi_test123' },
    }).as('pi');

    cy.visit('/equipment/pro-camera-x1000');
    cy.contains('Buy Now').click();

    cy.url().should('include', '/checkout');
    cy.get('input[name="name"]').type('QA Tester');
    cy.get('input[name="email"]').type('qa@example.com');
    cy.get('input[name="address"]').type('123 Test St');
    cy.get('input[name="city"]').type('Testville');
    cy.get('input[name="country"]').type('Testland');

    cy.window().then(win => {
      win.Stripe = () => ({
        confirmCardPayment: () => Promise.resolve({ paymentIntent: { id: 'pi_test123', status: 'succeeded' } }),
        elements: () => ({ getElement: () => ({}) }),
      });
    });

    cy.contains('Pay').click();
    cy.wait('@pi');
    cy.url().should('include', '/order-confirmation/pi_test123');
  });
});
