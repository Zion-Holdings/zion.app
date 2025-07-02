// eslint-disable-next-line @typescript-eslint/no-require-imports
// tests/__mocks__/@stripe/stripe-js.js
const mockStripeInstance = {
  elements: vi.fn(options => {
    return {
      create: vi.fn(type => ({
        mount: vi.fn(),
        destroy: vi.fn(),
        on: vi.fn(),
        update: vi.fn(),
      })),
    };
  }),
  confirmCardPayment: vi.fn(() => Promise.resolve({ paymentIntent: { id: 'pi_mock_core', status: 'succeeded' }, error: null })),
  createPaymentMethod: vi.fn(() => Promise.resolve({ paymentMethod: { id: 'pm_mock_core' }, error: null })),
  retrievePaymentIntent: vi.fn(clientSecret => Promise.resolve({ paymentIntent: { id: 'pi_mock_retrieved_core', client_secret: clientSecret, status: 'succeeded' }, error: null })),
};

const loadStripe = vi.fn(publishableKey => {
  return Promise.resolve(mockStripeInstance);
});

const resetMocks = () => {
  mockStripeInstance.elements.mockClear().mockImplementation(options => ({
    create: vi.fn(type => ({
      mount: vi.fn(),
      destroy: vi.fn(),
      on: vi.fn(),
      update: vi.fn(),
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
