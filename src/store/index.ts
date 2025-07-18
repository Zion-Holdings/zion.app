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