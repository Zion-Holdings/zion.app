import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/types/cart';
import { safeStorage } from '@/utils/safeStorage';

export interface CartState {
  items: CartItem[];
}

const loadState = (): CartItem[] => {
  const stored = safeStorage.getItem('zion_cart');
  if (!stored) return [];
  try {
    return JSON.parse(stored) as CartItem[];
  } catch {
    return [];
  }
};

const initialState: CartState = {
  items: loadState(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    setItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    clear: state => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, setItems, clear } =
  cartSlice.actions;
export default cartSlice.reducer;

