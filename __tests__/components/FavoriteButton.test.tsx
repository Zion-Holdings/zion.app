import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '@/store/wishlistSlice';
import { FavoriteButton } from '@/components/FavoriteButton';

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ isAuthenticated: true, user: { id: 'u1' } })
}));

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve([]) })) as jest.Mock;
});

const renderWithStore = (ui: React.ReactElement) => {
  const store = configureStore({ reducer: { wishlist: wishlistReducer } });
  return { ...render(<Provider store={store}>{ui}</Provider>), store };
};

test('clicking heart adds item to wishlist', () => {
  const { store } = renderWithStore(<FavoriteButton itemId="p1" itemType="product" />);
  fireEvent.click(screen.getByRole('button'));
  expect(store.getState().wishlist.items).toHaveLength(1);
});
