import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartContextType, CartItem, CartAction } from '@/types/cart';
import { saveCart, getCart } from '@/lib/db';

interface CartState { items: CartItem[]; }

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id);
      let items;
      if (existing) {
        items = state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {
        items = [...state.items, action.payload];
      }
      return { items };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.id !== action.payload) };
    case 'CLEAR_CART':
      return { items: [] };
    case 'SET_ITEMS':
      return { items: action.payload };
    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart(): CartContextType {
  const ctx = useContext(CartContext) as CartContextType;
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    getCart().then(items => {
      if (items.length) {
        dispatch({ type: 'SET_ITEMS', payload: items as CartItem[] });
      }
    });
  }, []);

  useEffect(() => {
    saveCart(state.items);
  }, [state.items]);

  const value: CartContextType = {
    items,
    dispatch,
  };

  // This useEffect for loading items from localStorage was also redundant
  // as cartSlice.ts handles initial load.

  // Persist cart items to localStorage whenever they change from Redux state
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      logInfo('[CartProvider] Persisting items to localStorage:', { data:  { data: items } });
    }
    try {
      // Only persist if localStorage is actually available.
      // safeStorage handles this internally, but good to be mindful.
      safeStorage.setItem('zion_cart', JSON.stringify(items));
    } catch (error) {
      // Catching potential errors during stringify or setItem, though safeStorage also has try/catch.
      logErrorToProduction('[CartProvider] Failed to persist cart to localStorage', { data: error });
    }
  }, [items]); // Dependency array ensures this runs when `items` from Redux changes.

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
