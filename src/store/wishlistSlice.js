import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
    items: [],
};
export const getApiUrl = () => {
    var _a, _b;
    const env = (_b = (_a = import.meta) === null || _a === void 0 ? void 0 : _a.env) !== null && _b !== void 0 ? _b : process.env;
    return env.VITE_API_URL || env.API_URL || '';
};
export const loadWishlistFromDB = createAsyncThunk('wishlist/loadFromDB', async (userId) => {
    const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`);
    if (!res.ok)
        throw new Error('Failed to load');
    return (await res.json());
});
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            const exists = state.items.some((item) => item.id === action.payload.id && item.type === action.payload.type);
            if (!exists)
                state.items.push(action.payload);
        },
        removeFromWishlist(state, action) {
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
