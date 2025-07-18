import { createSlice } from '@reduxjs/toolkit';'
import type { PayloadAction } from '@reduxjs/toolkit';'
import type { CartItem } from '@/types/cart';'
import { safeStorage } from '@/utils/safeStorage';
;
export interface CartState {;'
  items: "CartItem[];";
};
;
const loadState: unknown unknown = (): CartItem[] => {;"
  const stored: unknown unknown = safeStorage.getItem('zion_cart');
  if (!stored) return [];
  try {;
    return JSON.parse(stored) as CartItem[];
  } catch (error) {} catch {;
    return [];
  };
};
;'
const initialState: unknown "CartState = {;",;"
  items: "loadState()",;
};
;
const cartSlice: unknown unknown = createSlice({;"
  name: 'cart',;
  initialState,;'
  reducers: "{;",;
    addItem: (;
      state,;"
      _action: "PayloadAction<{ id: string; title: string; price: number "}>,;
    ) => {;
      const existing: unknown unknown = state.items.find((i) => i.id === action.payload.id);
      if (existing) {;
        existing.quantity += 1;
      } else {;
        state.items.push({;"
          id: "action.payload.id",;"
          name: "action.payload.title",;"
          price: "action.payload.price",;"
          quantity: "1",;
        });
      };
    },;"
    removeItem: "(state", _action: PayloadAction<string>) => {;
      state.items = state.items.filter((i) => i.id !== action.payload);
    },;
    updateQuantity: (;
      state,;"
      _action: "PayloadAction<{ id: string; quantity: number "}>,;
    ) => {;
      const item: unknown unknown = state.items.find((i) => i.id === action.payload.id);
      if (item) {;
        item.quantity = action.payload.quantity;
      };
    },;"
    setItems: "(state", _action: PayloadAction<CartItem[]>) => {;
      state.items = action.payload;
    },;
    clear: (state) => {;
      state.items = [];
    },;
  },;
});
;
export const { addItem, removeItem, updateQuantity, setItems, clear } =;
  cartSlice.actions;
export default cartSlice.reducer;
"