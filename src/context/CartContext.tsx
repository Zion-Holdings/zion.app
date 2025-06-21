const safeStorage = {
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error("Error setting item in localStorage:", error);
    }
  },
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  },
  removeItem: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from localStorage:", error);
    }
  },
};
import React, { createContext, useContext, useEffect } from 'react';
import { CartContextType, CartAction, CartItem } from '@/types/cart';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';
import { addItem, removeItem, clear, setItems } from '@/store/cartSlice';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart(): CartContextType {
  const ctx = useContext(CartContext) as CartContextType;
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  console.log('[CartProvider] Initializing...');
  const items = useSelector((state: RootState) => state.cart.items);
  const reduxDispatch = useDispatch<AppDispatch>();

  // On mount, if Redux has no cart items but localStorage does, hydrate the store
  useEffect(() => {
    if (items.length === 0) {
      const stored = safeStorage.getItem('zion_cart');
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CartItem[];
          if (parsed.length > 0) {
            reduxDispatch(setItems(parsed));
          }
        } catch {
          // Ignore parse errors and fall back to empty cart
        }
      }
    }
  }, []);

  const dispatch = (action: CartAction) => {
    switch (action.type) {
      case 'ADD_ITEM':
        reduxDispatch(
          addItem({
            id: action.payload.id,
            title: action.payload.name,
            price: action.payload.price,
          })
        );
        break;
      case 'REMOVE_ITEM':
        reduxDispatch(removeItem(action.payload));
        break;
      case 'CLEAR_CART':
        reduxDispatch(clear());
        break;
      case 'SET_ITEMS':
        reduxDispatch(setItems(action.payload));
        break;
      default:
        break;
    }
  };

  const value: CartContextType = {
    items,
    dispatch,
  };

  // Persist cart items to localStorage whenever they change
  useEffect(() => {
    try {
      safeStorage.setItem('zion_cart', JSON.stringify(items));
    } catch {}
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
