describe('test checkout purchase', () => {
  it('completes a $0.50 test purchase', () => {
    cy.loginByApi('existing@test.com', 'password123');

    const intentId = 'pi_test_123';
    cy.intercept('POST', '/api/create-payment-intent', {
      statusCode: 200,
      body: { clientSecret: 'cs_test_secret', id: intentId },
    }).as('createIntent');
    cy.intercept('POST', '/api/points/add', { statusCode: 200 }).as('addPoints');
    cy.intercept('GET', /\/api\/orders\/.*/, (req) => {
      const id = req.url.split('/').pop();
      req.reply({
        statusCode: 200,
        body: {
          orderId: id,
          date: '2024-05-01',
          total: '$0.50',
          status: 'paid',
          invoiceUrl: '/inv.pdf',
          items: [{ name: 'Test', price: 0.5, quantity: 1 }],
          shippingAddress: { name: 'QA Tester', street: '123', city: 'Test', state: 'TS', zip: '12345' },
          trackingEvents: [],
        },
      });
    }).as('getOrder');

    cy.visit('/checkout?sku=test-sku');
    cy.get('input[name="name"]').type('QA Tester');
    cy.get('input[name="email"]').type('qa@example.com');
    cy.get('input[name="address"]').type('123 Test St');
    cy.get('input[name="city"]').type('Testville');
    cy.get('input[name="country"]').type('Testland');

    cy.contains('Pay with Stripe').click();

    cy.wait('@createIntent');
    cy.wait('@addPoints');
    cy.wait('@getOrder');

    cy.url().should('include', '/orders/');
    cy.contains('Order #').should('be.visible');
  });
});

