import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartContextType, CartItem, CartAction } from '@/types/cart';
import { safeStorage } from '@/utils/safeStorage';
import { useAuth } from '@/hooks/useAuth';
import { mergeGuestCart } from '@/services/cartService';

interface CartState { items: CartItem[]; }

const GUEST_CART_KEY = 'guestCart';

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
    if (!user) {
      const stored = safeStorage.getItem(GUEST_CART_KEY);
      if (stored) {
        try {
          const items = JSON.parse(stored) as CartItem[];
          if (items.length) {
            dispatch({ type: 'SET_ITEMS', payload: items });
          }
        } catch {
          /* ignore */
        }
      }
      return;
    }

    const storedGuest = safeStorage.getItem(GUEST_CART_KEY);
    if (storedGuest) {
      try {
        const items = JSON.parse(storedGuest) as CartItem[];
        mergeGuestCart(items).catch(err => console.error('Cart merge failed', err));
        dispatch({ type: 'SET_ITEMS', payload: items });
        safeStorage.removeItem(GUEST_CART_KEY);
      } catch {
        /* ignore */
      }
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      safeStorage.setItem(GUEST_CART_KEY, JSON.stringify(state.items));
    }
  }, [state.items, user]);

  const value: CartContextType = {
    items: state.items,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
