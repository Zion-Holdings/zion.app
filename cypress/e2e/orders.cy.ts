describe('orders page', () => {'  it('loads orders and shows download link', function () {'    // Ensure we have a logged in user so the orders query runs'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    if (!Cypress.env('EXISTING_USER_EMAIL') || !Cypress.env('EXISTING_USER_PASSWORD')) {'      cy.log('EXISTING_USER_EMAIL or EXISTING_USER_PASSWORD not set, skipping test');'      this.skip();'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
    cy.loginByApi(
      Cypress.env('EXISTING_USER_EMAIL'),'      Cypress.env('EXISTING_USER_PASSWORD')'    );'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    const orders = [
      { orderId: 'ORD-1', date: '2024-05-01', total: 99.99, status: 'paid', invoiceUrl: '/inv1.pdf' }'    ];'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    cy.intercept('GET', '/api/orders*', {'      statusCode: 200,'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      body: orders,
    }).as('getOrders');''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    cy.visit('/orders');'    cy.wait('@getOrders');'    cy.get('table tbody tr').should('have.length', orders.length);'    cy.contains('Download PDF');'  });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
});
