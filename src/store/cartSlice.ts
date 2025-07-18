<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CartItem } from '@/types/cart'
import { safeStorage } from '@/utils/safeStorage;;
'
export interface CartState {
  items: "CartItem[]"
}"
;"
const loadState = (): CartItem[] => {;"
  const stored = safeStorage.getItem('zion_cart');
  if (!stored) return [];
  try {;
    return JSON.parse(stored) as CartItem[];
  } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {'
    return [];
  };
}'
;
const initialState: unknown "CartState = {;"
  items: loadState(),;"
};"
;"
const cartSlice = createSlice({;";,"
  name: 'cart','
  initialState,;
  reducers: {;,;"
    addItem: (;"
      state,;"
      _action: "PayloadAction<{ id: string; title: string; price: number "}>,;
    ) => {;
      const existing = state.items.find((i) => i.id === action.payload.id);"
      if (existing) {;";"
        existing.quantity += 1;"
      } else {;"
        state.items.push({;"
          id: "action.payload.id"
          name: "action.payload.title"
          price: "action.payload.price"
          quantity: 1,;"
        });"
      };"
    },;"
    removeItem: (state, _action: PayloadAction<string>) => {;"
      state.items = state.items.filter((i) => i.id !== action.payload);";"
    },;"
    updateQuantity: (;"
      state,;"
      _action: "PayloadAction<{ id: string; quantity: number "}>,;
    ) => {;
      const item = state.items.find((i) => i.id === action.payload.id);"
      if (item) {;";"
        item.quantity = action.payload.quantity;"
      };"
    },;"
    setItems: (state, _action: PayloadAction<CartItem[]>) => {;
=======
import { createSlice } from '@reduxjs/toolkit;'';
import type { PayloadAction } from '@reduxjs/toolkit;'';
import type { CartItem } from '@/types/cart;'';
import { safeStorage } from '@/utils/safeStorage;'
;'';
export interface CartState {;;
  items: "CartItem[];";";""
};";";""
;";";";"";
const loadState: unknown = (): CartItem[] => {;";";";";""
  const stored: unknown = safeStorage.getItem('zion_cart');'
  if (!stored) return [];
  try {;
    return JSON.parse(stored) as CartItem[];
  } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;''
    return [];
  };
};''
;;
const initialState: unknown "CartState = {;",;";";";";""
  items: "loadState()",;";""
};";";""
;";";";"";
const cartSlice: unknown = createSlice({;";,";";";""
  name: 'cart',;''
  initialState,;;
  reducers: "{;",;";";""
    addItem: (;";";";""
      state,;";";";";""
      _action: "PayloadAction<{ id: string; title: string; price: number "}>,;"
    ) => {;
      const existing: unknown = state.items.find((i) => i.id === action.payload.id);""
      if (existing) {;";""
        existing.quantity += 1;";";""
      } else {;";";";""
        state.items.push({;";";";";""
          id: "action.payload.id",;";";";";""
          name: "action.payload.title",;";";";";""
          price: "action.payload.price",;";";";";""
          quantity: "1",;";""
        });";";""
      };";";";""
    },;";";";";""
    removeItem: "(state", _action: PayloadAction<string>) => {;""
      state.items = state.items.filter((i) => i.id !== action.payload);";""
    },;";";""
    updateQuantity: (;";";";""
      state,;";";";";""
      _action: "PayloadAction<{ id: string; quantity: number "}>,;"
    ) => {;
      const item: unknown = state.items.find((i) => i.id === action.payload.id);""
      if (item) {;";""
        item.quantity = action.payload.quantity;";";""
      };";";";""
    },;";";";";""
    setItems: "(state", _action: PayloadAction<CartItem[]>) => {;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      state.items = action.payload;
    },;
    clear: (state) => {;
      state.items = [];
    },;
  },;
<<<<<<< HEAD
});"
export const { addItem, removeItem, updateQuantity, setItems, clear } =;";"
  cartSlice.actions;"
export default cartSlice.reducer;"
"""""
=======
});
;"";
export const { addItem, removeItem, updateQuantity, setItems, clear } =;";""
  cartSlice.actions;";";"";
export default cartSlice.reducer;";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
