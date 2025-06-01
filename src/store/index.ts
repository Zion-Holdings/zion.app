import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { safeStorage } from '@/utils/safeStorage';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  safeStorage.setItem('cart', JSON.stringify(state.cart.items));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

