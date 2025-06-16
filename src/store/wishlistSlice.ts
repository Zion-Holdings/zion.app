import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { safeStorage } from '@/utils/safeStorage';

export interface WishlistState {
  items: string[];
}

const loadState = (): string[] => {
  const stored = safeStorage.getItem('wishlist');
  if (!stored) return [];
  try {
    return JSON.parse(stored) as string[];
  } catch {
    return [];
  }
};

const initialState: WishlistState = {
  items: loadState(),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(id => id !== action.payload);
    },
    set: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload;
    },
  },
});

export const { add, remove, set } = wishlistSlice.actions;
export default wishlistSlice.reducer;
