// eslint-disable-next-line @typescript-eslint/no-require-imports
// tests/__mocks__/@stripe/react-stripe-js.js
import React from 'react';

const mockStripe = {
  confirmCardPayment: jest.fn(() => Promise.resolve({ paymentIntent: { id: 'pi_mock', status: 'succeeded' }, error: null })),
  createPaymentMethod: jest.fn(() => Promise.resolve({ paymentMethod: { id: 'pm_mock' }, error: null })),
  retrievePaymentIntent: jest.fn(clientSecret => Promise.resolve({ paymentIntent: { id: 'pi_mock_retrieved', client_secret: clientSecret, status: 'succeeded' }, error: null })),
  // Add other Stripe methods your application uses
};

const mockElements = {
  getElement: jest.fn(type => {
    return {
      mount: jest.fn(),
      destroy: jest.fn(),
      on: jest.fn((event, handler) => {
        if (event === 'change') {
          mockElements.triggerChange = handler;
        }
      }),
      update: jest.fn(),
      clear: jest.fn(),
      focus: jest.fn(),
    };
  }),
  triggerChange: (event) => {},
  submit: jest.fn(() => Promise.resolve({ error: null })),
};

const useStripe = jest.fn(() => mockStripe);
const useElements = jest.fn(() => mockElements);

const Elements = ({ children, stripe, options }) => <div data-testid="mock-elements">{children}</div>;
const CardElement = (props) => <div data-testid="mock-card-element" {...props} />;
const PaymentElement = (props) => <div data-testid="mock-payment-element" {...props} />;
const IdealBankElement = (props) => <div data-testid="mock-ideal-bank-element" {...props} />;
const AddressElement = (props) => <div data-testid="mock-address-element" {...props} />;
const LinkAuthenticationElement = (props) => <div data-testid="mock-link-authentication-element" {...props} />;

const resetMocks = () => {
  mockStripe.confirmCardPayment.mockClear().mockResolvedValue({ paymentIntent: { id: 'pi_mock', status: 'succeeded' }, error: null });
  mockStripe.createPaymentMethod.mockClear().mockResolvedValue({ paymentMethod: { id: 'pm_mock' }, error: null });
  mockStripe.retrievePaymentIntent.mockClear().mockImplementation(clientSecret => Promise.resolve({ paymentIntent: { id: 'pi_mock_retrieved', client_secret: clientSecret, status: 'succeeded' }, error: null }));

  mockElements.getElement.mockClear().mockImplementation(type => ({
    mount: jest.fn(),
    destroy: jest.fn(),
    on: jest.fn((event, handler) => { if (event === 'change') { mockElements.triggerChange = handler; }}),
    update: jest.fn(),
    clear: jest.fn(),
    focus: jest.fn(),
  }));
  mockElements.submit.mockClear().mockResolvedValue({ error: null });

  useStripe.mockClear().mockReturnValue(mockStripe);
  useElements.mockClear().mockReturnValue(mockElements);
};

module.exports = {
  useStripe,
  useElements,
  Elements,
  CardElement,
  PaymentElement,
  IdealBankElement,
  AddressElement,
  LinkAuthenticationElement,
  __mockStripe: mockStripe,
  __mockElements: mockElements,
  __resetStripeMocks: resetMocks,
};
