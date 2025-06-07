describe('signup to checkout flow', () => {
  it('registers, logs in, adds to cart and completes checkout', () => {
    cy.intercept('POST', '/auth/register', {
      statusCode: 201,
      body: { token: 'jwt', user: { id: '1', email: 'new@example.com' } },
    }).as('register');

    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'new@example.com' } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' },
    }).as('login');

    cy.intercept('POST', '/api/create-payment-intent', {
      statusCode: 200,
      body: { clientSecret: 'test_secret', id: 'pi_test123' },
    }).as('pi');

    cy.visit('/signup');
    cy.get('input[name="displayName"]').type('Test User');
    cy.get('input[name="email"]').type('new@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create Account').click();
    cy.wait('@register');

    cy.visit('/login');
    cy.get('input[name="email"]').type('new@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.contains('Login').click();
    cy.wait('@login');

    cy.visit('/equipment/pro-camera-x1000');
    cy.contains('Add to Cart').click();
    cy.visit('/cart');
    cy.contains('Checkout').click();

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('qa@example.com');
    cy.get('input[name="address"]').type('123 Test St');
    cy.get('input[name="city"]').type('Testville');
    cy.get('input[name="country"]').type('Testland');

    cy.window().then((win) => {
      win.Stripe = () => ({
        confirmCardPayment: () =>
          Promise.resolve({ paymentIntent: { id: 'pi_test123', status: 'succeeded' } }),
        elements: () => ({ getElement: () => ({}) }),
      });
    });

    cy.contains('Pay').click();
    cy.wait('@pi');
    cy.url().should('include', '/order-confirmation/pi_test123');
  });
});
