describe('orders page', () => {
  it('loads orders and shows download link', () => {
    const orders = [
      { orderId: 'ORD-1', date: '2024-05-01', total: 99.99, status: 'paid', invoiceUrl: '/inv1.pdf' }
    ];
    cy.intercept('GET', '/api/orders*', {
      statusCode: 200,
      body: orders,
    }).as('getOrders');

    cy.visit('/orders');
    cy.wait('@getOrders');
    cy.get('table tbody tr').should('have.length', orders.length);
    cy.contains('Download PDF');
  });
});
