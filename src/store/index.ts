import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { CartState } from './cartSlice';
import { default as wishlistReducer, WishlistState } from './wishlistSlice';
import authReducer from './authSlice';
import { safeStorage } from '@/utils/safeStorage';
import { logWarn } from '@/utils/productionLogger';

export const store = configureStore({

  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});

// Add throttling to prevent infinite loops
let lastStorageUpdate = 0;
const STORAGE_UPDATE_THROTTLE = 100; // 100ms throttle

store.subscribe(() => {
  const now = Date.now();
  if (now - lastStorageUpdate < STORAGE_UPDATE_THROTTLE) {
    return; // Skip if too soon
  }
  lastStorageUpdate = now;
  
  try {
    const state = store.getState();
    
    // Only update if data has actually changed to prevent infinite loops
    const cartData = JSON.stringify(state.cart.items);
    const wishlistData = JSON.stringify(state.wishlist.items);
    
    if (cartData !== safeStorage.getItem('zion_cart')) {
      safeStorage.setItem('zion_cart', cartData);
    }
    
    if (wishlistData !== safeStorage.getItem('wishlist')) {
      safeStorage.setItem('wishlist', wishlistData);
    }
    
    // Handle auth token storage
    if (state.auth.token) {
      const currentToken = safeStorage.getItem('authToken');
      if (currentToken !== state.auth.token) {
        safeStorage.setItem('authToken', state.auth.token);
        safeStorage.setItem('ztg_token', state.auth.token); // For backward compatibility
      }
    } else {
      // Only remove if they exist to prevent unnecessary operations
      if (safeStorage.getItem('authToken')) {
        safeStorage.removeItem('authToken');
      }
      if (safeStorage.getItem('ztg_token')) {
        safeStorage.removeItem('ztg_token');
      }
    }
  } catch (error) {
    logWarn('Store subscription error (throttled):', { data: error });
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
