import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
  items: string[];
}

const loadState = (): string[] => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const initialState: WishlistState = {
  items: loadState(),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        if (typeof window !== 'undefined') {
          localStorage.setItem('wishlist', JSON.stringify(state.items));
        }
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify(state.items));
      }
    },
    clearWishlist: (state) => {
      state.items = [];
      if (typeof window !== 'undefined') {
        localStorage.removeItem('wishlist');
      }
    },
  },
});

export const { addItem, removeItem, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;