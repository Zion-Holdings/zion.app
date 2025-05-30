import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartContextType, CartItem, CartAction } from '@/types/cart';
vu1sbl-codex/implement-cart-recovery-logic
import { safeStorage } from '@/utils/safeStorage';
import { useAuth } from '@/hooks/useAuth';
import { useAnalytics } from './AnalyticsContext'
import { saveCart, getCart } from '@/lib/db';
main

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

  const { user } = useAuth();
  const { trackConversion } = useAnalytics();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      fetch(`/cart/restore/${token}`)
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(data => {
          dispatch({ type: 'SET_ITEMS', payload: data.items as CartItem[] });
          safeStorage.setItem('cart', JSON.stringify(data.items));
          trackConversion('cart_restored');
        })
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
vu1sbl-codex/implement-cart-recovery-logic
    safeStorage.setItem('cart', JSON.stringify(state.items));
    fetch('/cart/snapshot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: state.items,
        user: user?.id,
        email: user?.email,
      }),
    }).catch(() => {});
    saveCart(state.items);
main
  }, [state.items]);

  const value: CartContextType = {
    items: state.items,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
