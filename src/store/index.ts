import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import { safeStorage } from '@/utils/safeStorage';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  safeStorage.setItem('cart', JSON.stringify(state.cart.items));
  safeStorage.setItem('wishlist', JSON.stringify(state.wishlist.items));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

