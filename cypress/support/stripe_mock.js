/**
 * Mocks the Stripe token creation process.
 * @returns {Cypress.Promise<object>} A promise that resolves with a mock token object.
 */
export const mockStripeTokenCreation = () => {
  return new Cypress.Promise((resolve) => {
    resolve({
      id: 'tok_mockToken123',
      card: {
        last4: '4242',
        brand: 'Visa',
        exp_month: 12,
        exp_year: 2025,
      },
      client_ip: '127.0.0.1',
      created: Math.floor(Date.now() / 1000),
      livemode: false,
      type: 'card',
      used: false,
    });
  });
};

/**
 * Mocks the Stripe payment confirmation process.
 * @returns {Cypress.Promise<object>} A promise that resolves with a mock payment intent object.
 */
export const mockStripePaymentConfirmation = (paymentMethodId = 'pm_mockPaymentMethod123') => {
  return new Cypress.Promise((resolve) => {
    resolve({
      id: 'pi_mockPaymentIntent123',
      object: 'payment_intent',
      amount: 1099, // Example amount
      currency: 'usd',
      status: 'succeeded',
      client_secret: 'pi_mockPaymentIntent123_secret_mockClientSecret123',
      created: Math.floor(Date.now() / 1000),
      livemode: false,
      payment_method: paymentMethodId,
      // Add other relevant fields as needed for your application
    });
  });
};
