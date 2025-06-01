import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartContextType, CartItem, CartAction } from '@/types/cart';
import { safeStorage } from '@/utils/safeStorage';
import { useAuth } from '@/hooks/useAuth';

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
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.id) {
      // Try user-specific cart first
      const storedUser = safeStorage.getItem(`cart_${user.id}`);
      const storedGuest = safeStorage.getItem('cart');
      let items: CartItem[] = [];
      if (storedUser) {
        try { items = JSON.parse(storedUser) as CartItem[]; } catch { /* ignore */ }
      } else if (storedGuest) {
        try { items = JSON.parse(storedGuest) as CartItem[]; } catch { /* ignore */ }
        safeStorage.removeItem('cart');
      }
      dispatch({ type: 'SET_ITEMS', payload: items });
    } else {
      const stored = safeStorage.getItem('cart');
      if (stored) {
        try {
          const items = JSON.parse(stored) as CartItem[];
          dispatch({ type: 'SET_ITEMS', payload: items });
        } catch {
          dispatch({ type: 'CLEAR_CART' });
        }
      } else {
        dispatch({ type: 'CLEAR_CART' });
      }
    }
  }, [user]);

  useEffect(() => {
    // Only save to localStorage if there's a user and items are not empty,
    // to avoid saving an empty cart array just after clearing or on initial load for a new user.
    // However, if items become empty due to user action (e.g. removing last item), it should be saved.
    // So, the condition `state.items.length > 0` might be too restrictive.
    // Let's save even if items are empty, so that if a user clears their cart, it remains cleared on next login.
    if (user && user.id) {
      safeStorage.setItem(`cart_${user.id}`, JSON.stringify(state.items));
    } else {
      safeStorage.setItem('cart', JSON.stringify(state.items));
    }
  }, [state.items, user]); // Effect runs when items or user change

  const value: CartContextType = {
    items: state.items,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
