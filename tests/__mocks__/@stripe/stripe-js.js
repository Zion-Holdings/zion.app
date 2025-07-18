 
// tests/__mocks__/@stripe/stripe-js.js;
const mockStripeInstance = {
  elements: vi.fn(_options => {
    return {
      create: vi.fn(_type => ({
        mount: vi.fn(),
        destroy: vi.fn(),
        on: vi.fn(),
        update: vi.fn(),
      })),
    };
  }),
  confirmCardPayment: vi.fn(() => Promise.resolve({ paymentIntent: { id: 'pi_mock_core', status: 'succeeded' }, error: null })),'  createPaymentMethod: vi.fn(() => Promise.resolve({ paymentMethod: { id: 'pm_mock_core' }, error: null })),'  retrievePaymentIntent: vi.fn(clientSecret => Promise.resolve({ paymentIntent: { id: 'pi_mock_retrieved_core', client_secret: clientSecret, status: 'succeeded' }, error: null })),'};
;
const loadStripe = vi.fn(_publishableKey => {
  return Promise.resolve(mockStripeInstance);
});
;
const resetMocks = () => {
  mockStripeInstance.elements.mockClear().mockImplementation(_options => ({
    create: vi.fn(_type => ({
      mount: vi.fn(),
      destroy: vi.fn(),
      on: vi.fn(),
      update: vi.fn(),
    })),
  }));
  mockStripeInstance.confirmCardPayment.mockClear().mockResolvedValue({ paymentIntent: { id: 'pi_mock_core', status: 'succeeded' }, error: null });'  mockStripeInstance.createPaymentMethod.mockClear().mockResolvedValue({ paymentMethod: { id: 'pm_mock_core' }, error: null });'  mockStripeInstance.retrievePaymentIntent.mockClear().mockImplementation(clientSecret => Promise.resolve({ paymentIntent: { id: 'pi_mock_retrieved_core', client_secret: clientSecret, status: 'succeeded' }, error: null }));'
  loadStripe.mockClear().mockImplementation(_publishableKey => Promise.resolve(mockStripeInstance));
};

module.exports = {
  loadStripe,
  __mockStripeInstance: mockStripeInstance,
  __resetStripeJSMocks: resetMocks,
};
