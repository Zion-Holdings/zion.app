import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import authReducer from './authSlice';
import { safeStorage } from '@/utils/safeStorage';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  safeStorage.setItem('zion_cart', JSON.stringify(state.cart.items));
  safeStorage.setItem('wishlist', JSON.stringify(state.wishlist.items));
  safeStorage.setItem('is_logged_in', JSON.stringify(state.auth.isLoggedIn));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

