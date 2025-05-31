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
      const stored = safeStorage.getItem(`cart_${user.id}`);
      if (stored) {
        try {
          const items = JSON.parse(stored) as CartItem[];
          // Ensure we only dispatch if there are actually items to set,
          // otherwise, it might overwrite an empty cart that was cleared due to logout/login.
          if (items.length > 0) {
            dispatch({ type: 'SET_ITEMS', payload: items });
          } else {
            // If stored cart is empty, ensure current state is also empty.
            // This handles cases where a user had items, cleared them, and logs back in.
            dispatch({ type: 'CLEAR_CART' });
          }
        } catch {
          // If parsing fails, perhaps clear the cart or log an error
          dispatch({ type: 'CLEAR_CART' });
          console.error('Failed to parse cart items from storage.');
          /* ignore for now */
        }
      } else {
        // No cart in storage for this user, ensure state is cleared.
        // This is important if a user logs out (which clears state) and then logs
        // into an account that has never had a cart.
        dispatch({ type: 'CLEAR_CART' });
      }
    } else {
      // No user logged in, clear items from state
      dispatch({ type: 'CLEAR_CART' });
    }
  }, [user]); // Effect runs when user object changes

  useEffect(() => {
    // Only save to localStorage if there's a user and items are not empty,
    // to avoid saving an empty cart array just after clearing or on initial load for a new user.
    // However, if items become empty due to user action (e.g. removing last item), it should be saved.
    // So, the condition `state.items.length > 0` might be too restrictive.
    // Let's save even if items are empty, so that if a user clears their cart, it remains cleared on next login.
    if (user && user.id) {
      safeStorage.setItem(`cart_${user.id}`, JSON.stringify(state.items));
    }
    // Do not save if there's no user.
  }, [state.items, user]); // Effect runs when items or user change

  const value: CartContextType = {
    items: state.items,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
