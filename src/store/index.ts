import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { CartState } from './cartSlice';
import { default as wishlistReducer, WishlistState } from './wishlistSlice';
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
  if (state.auth.token) {
    safeStorage.setItem('ztg_token', state.auth.token);
  } else {
    safeStorage.removeItem('ztg_token');
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
