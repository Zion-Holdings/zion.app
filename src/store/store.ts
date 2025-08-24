import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
