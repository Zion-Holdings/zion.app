<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit;
import cartReducer from './cartSlice;
import wishlistReducer from './wishlistSlice;
import authReducer from './authSlice;

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
=======
import { configureStore } from '@reduxjs/toolkit'
import { default as cartReducer } from './cartSlice'
import type { CartState as _CartState } from './cartSlice'
import { default as wishlistReducer } from './wishlistSlice'
import type { WishlistState as _WishlistState } from './wishlistSlice'
import authReducer from './authSlice'
import { safeStorage } from '@/utils/safeStorage'
import { logWarn } from '@/utils/productionLogger;
'
export const store: configureStore({;",;"
  reducer: {
    cart: "cartReducer"
    wishlist: "wishlistReducer'
    auth: authReducer,;';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
