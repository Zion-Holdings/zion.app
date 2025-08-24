import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface WishlistItem {
  id: string;
  type: string;
  data?: any;
}

export interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

export const getApiUrl = () => {
  const env = (import.meta as any)?.env ?? process.env;
  return env.VITE_API_URL || env.API_URL || '';
};

export const loadWishlistFromDB = createAsyncThunk<WishlistItem[], string>(
  'wishlist/loadFromDB',
  async (userId: string) => {
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);
    if (!res.ok) throw new Error('Failed to load');
    return (await res.json()) as WishlistItem[];
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const exists = state.items.some(
        (item) => item.id === action.payload.id && item.type === action.payload.type
      );
      if (!exists) state.items.push(action.payload);
    },
    removeFromWishlist(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
