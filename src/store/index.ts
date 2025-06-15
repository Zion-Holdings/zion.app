import { configureStore } from '@reduxjs/toolkit';
import { CartState } from './cartSlice';
import { WishlistState } from './wishlistSlice';
import authReducer from './authSlice';
import { safeStorage } from '@/utils/safeStorage';
import { AuthState } from '@/types/auth';

export interface RootState {
  cart: CartState;
  wishlist: WishlistState;
  auth: AuthState;
}

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
  if (state.auth.token) {
    safeStorage.setItem('ztg_token', state.auth.token);
  } else {
    safeStorage.removeItem('ztg_token');
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
