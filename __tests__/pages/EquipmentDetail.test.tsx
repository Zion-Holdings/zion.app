// __tests__/pages/EquipmentDetail.test.tsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import EquipmentDetail, { SAMPLE_EQUIPMENT } from '@/pages/EquipmentDetail';

// Mock functions need to be declared before they are used in mock factories
const mockNavigate = jest.fn();
const mockDispatch = jest.fn();
// Specific mock functions for toast, to be used in the factory and for assertions
const mockInfoFnForToast = jest.fn();
const mockSuccessFnForToast = jest.fn();

// Mock dependencies
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: () => mockNavigate, // This pattern works because mockNavigate is returned by a function
  useLocation: jest.fn(),
}));

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('@/context/CartContext', () => ({
  useCart: jest.fn(),
}));

// Revised mock for use-toast to avoid ReferenceError
jest.mock('@/hooks/use-toast', () => ({
  toast: {
    info: (...args: any[]) => mockInfoFnForToast(...args),
    success: (...args: any[]) => mockSuccessFnForToast(...args),
  },
}));

describe('EquipmentDetail - Add To Cart', () => {
  const testProductId = 'pro-camera-x1000';
  const originalSampleEquipment = JSON.parse(JSON.stringify(SAMPLE_EQUIPMENT));

  beforeEach(() => {
    // Clear all general mocks
    jest.clearAllMocks();
    // Clear specific toast mock functions
    mockInfoFnForToast.mockClear();
    mockSuccessFnForToast.mockClear();

    for (const key in SAMPLE_EQUIPMENT) {
        delete SAMPLE_EQUIPMENT[key];
    }
    Object.assign(SAMPLE_EQUIPMENT, JSON.parse(JSON.stringify(originalSampleEquipment)));


    if (!SAMPLE_EQUIPMENT[testProductId]) {
        SAMPLE_EQUIPMENT[testProductId] = {
            id: testProductId,
            name: "Test Pro Camera",
            description: "Test camera description.",
            brand: "TestBrand",
            category: "Cameras",
            images: ["/images/equipment-placeholder.svg"],
            price: 100,
            currency: "$",
            inStock: true,
            specifications: [],
            features: [],
            rating: 4.5,
            reviewCount: 10,
            expectedShipping: "1 day",
            warranty: "1 year",
            returnPolicy: "30 days",
        };
    }


    require('react-router-dom').useParams.mockReturnValue({ id: testProductId });
    require('react-router-dom').useLocation.mockReturnValue({
      pathname: `/equipment/${testProductId}`,
      search: '?from=test'
    });
    require('@/context/CartContext').useCart.mockReturnValue({
      items: [],
      dispatch: mockDispatch
    });
  });

  test('unauthenticated user clicking "Add to Cart" is redirected to login and shown a toast', async () => {
    require('@/hooks/useAuth').useAuth.mockReturnValue({
      isAuthenticated: false,
      user: null,
      isLoading: false
    });

    render(<EquipmentDetail />);

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    await act(async () => {
        fireEvent.click(addToCartButton);
    });


    expect(mockNavigate).toHaveBeenCalledTimes(1);
    const expectedNextUrl = encodeURIComponent(`/equipment/${testProductId}?from=test`);
    expect(mockNavigate).toHaveBeenCalledWith(`/login?next=${expectedNextUrl}&msg=login_required`);

    expect(mockInfoFnForToast).toHaveBeenCalledTimes(1);
    expect(mockInfoFnForToast).toHaveBeenCalledWith('Please log in to add items to your cart.');

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockSuccessFnForToast).not.toHaveBeenCalled();
  });

  test('authenticated user clicking "Add to Cart" adds item and shows success toast', async () => {
    require('@/hooks/useAuth').useAuth.mockReturnValue({
      isAuthenticated: true,
      user: { id: 'test-user' },
      isLoading: false
    });

    render(<EquipmentDetail />);

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });

    await act(async () => {
        fireEvent.click(addToCartButton);
    });

    const product = SAMPLE_EQUIPMENT[testProductId];
    expect(product).toBeDefined();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.name, price: product.price, quantity: 1 }
    });

    expect(mockSuccessFnForToast).toHaveBeenCalledTimes(1);
    expect(mockSuccessFnForToast).toHaveBeenCalledWith(`1× ${product.name} added`);

    expect(mockNavigate).not.toHaveBeenCalledWith(expect.stringContaining('/login'));
    expect(mockInfoFnForToast).not.toHaveBeenCalled();
  });
});
