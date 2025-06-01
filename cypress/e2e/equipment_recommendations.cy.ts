describe('equipment AI recommendations', () => {
  it('shows login modal for guests', () => {
    cy.visit('/equipment');
    cy.contains('AI Recommendations').click();
    cy.contains('Please login to see AI recommendations.');
  });

  it('fetches and displays recommendations after login', () => {
    const recs = [
      { id: 'r1', title: 'Recommended 1', description: '', category: 'Servers', price: 1, currency: '$', tags: [], author: { name: 'a', id: 'a' }, images: [], createdAt: '2024-01-01' }
    ];
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'test@example.com' } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' },
    }).as('login');
    cy.intercept('GET', '/api/recommendations?userId=1', { statusCode: 200, body: recs }).as('recs');

    cy.visit('/login?next=/equipment');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Login').click();
    cy.wait('@login');
    cy.url().should('include', '/equipment');

    cy.contains('AI Recommendations').click();
    cy.wait('@recs');
    cy.contains('Recommended 1');
  });
});
