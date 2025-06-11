// tests/__mocks__/@stripe/stripe-js.js
const mockStripeInstance = {
  elements: jest.fn(options => {
    return {
      create: jest.fn(type => ({
        mount: jest.fn(),
        destroy: jest.fn(),
        on: jest.fn(),
        update: jest.fn(),
      })),
    };
  }),
  confirmCardPayment: jest.fn(() => Promise.resolve({ paymentIntent: { id: 'pi_mock_core', status: 'succeeded' }, error: null })),
  createPaymentMethod: jest.fn(() => Promise.resolve({ paymentMethod: { id: 'pm_mock_core' }, error: null })),
  retrievePaymentIntent: jest.fn(clientSecret => Promise.resolve({ paymentIntent: { id: 'pi_mock_retrieved_core', client_secret: clientSecret, status: 'succeeded' }, error: null })),
};

const loadStripe = jest.fn(publishableKey => {
  return Promise.resolve(mockStripeInstance);
});

const resetMocks = () => {
  mockStripeInstance.elements.mockClear().mockImplementation(options => ({
    create: jest.fn(type => ({
      mount: jest.fn(),
      destroy: jest.fn(),
      on: jest.fn(),
      update: jest.fn(),
    })),
  }));
  mockStripeInstance.confirmCardPayment.mockClear().mockResolvedValue({ paymentIntent: { id: 'pi_mock_core', status: 'succeeded' }, error: null });
  mockStripeInstance.createPaymentMethod.mockClear().mockResolvedValue({ paymentMethod: { id: 'pm_mock_core' }, error: null });
  mockStripeInstance.retrievePaymentIntent.mockClear().mockImplementation(clientSecret => Promise.resolve({ paymentIntent: { id: 'pi_mock_retrieved_core', client_secret: clientSecret, status: 'succeeded' }, error: null }));

  loadStripe.mockClear().mockImplementation(publishableKey => Promise.resolve(mockStripeInstance));
};

module.exports = {
  loadStripe,
  __mockStripeInstance: mockStripeInstance,
  __resetStripeJSMocks: resetMocks,
};
