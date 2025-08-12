// __tests__/pages/EquipmentDetail.test.tsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import EquipmentDetail, { SAMPLE_EQUIPMENT } from '@/pages/EquipmentDetail';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { useRouter } from 'next/router';
import nextRouterMock from 'next-router-mock';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/context/CartContext';

// Mock functions need to be declared before they are used in mock factories
const mockNavigate = jest.fn();
const mockDispatch = jest.fn();
// Specific mock functions for toast, to be used in the factory and for assertions
const mockInfoFnForToast = jest.fn();
const mockSuccessFnForToast = jest.fn();

// Mock dependencies
jest.mock('next/router', () => nextRouterMock);

// Mock useAuth and useCart - we'll access these via jest.mocked later
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
  
  const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;
  const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

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


    (useRouter as any).mockReturnValue({
      push: mockNavigate,
      back: jest.fn(),
      pathname: `/equipment/${testProductId}`,
      asPath: `/equipment/${testProductId}?from=test`,
      query: { id: testProductId }
    });
    mockUseCart.mockReturnValue({
      items: [],
      dispatch: mockDispatch
    });
  });

  test('unauthenticated user clicking "Add to Cart" adds item locally and shows info toast', async () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      user: null,
      isLoading: false
    });

    render(
      <MemoryRouterProvider url={`/equipment/${testProductId}` }>
        <EquipmentDetail />
      </MemoryRouterProvider>
    );

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    await act(async () => {
      fireEvent.click(addToCartButton);
    });

    expect(mockNavigate).not.toHaveBeenCalled();

    const product = SAMPLE_EQUIPMENT[testProductId];
    expect(product).toBeDefined();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.name, price: product.price, quantity: 1 }
    });

    expect(mockInfoFnForToast).toHaveBeenCalledTimes(1);
    expect(mockInfoFnForToast).toHaveBeenCalledWith('Item added. Login to checkout.', {
      action: { label: 'View Cart', onClick: expect.any(Function) }
    });

    expect(mockSuccessFnForToast).not.toHaveBeenCalled();
  });

  test('authenticated user clicking "Add to Cart" adds item and shows success toast', async () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: true,
      user: { id: 'test-user' },
      isLoading: false
    });

    render(
      <MemoryRouterProvider url={`/equipment/${testProductId}` }>
        <EquipmentDetail />
      </MemoryRouterProvider>
    );

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
    expect(mockSuccessFnForToast).toHaveBeenCalledWith(`1× ${product.name} added`, {
      action: { label: 'View Cart', onClick: expect.any(Function) }
    });

    expect(mockNavigate).not.toHaveBeenCalledWith(expect.stringContaining('/login'));
    expect(mockInfoFnForToast).not.toHaveBeenCalled();
  });
});
