import React, { createContext, useContext, useEffect } from 'react';
import type { CartContextType, CartAction, CartItem } from '@/types/cart';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';
import { addItem, removeItem, clear, setItems } from '@/store/cartSlice';
import { safeStorage } from '@/utils/safeStorage'; // Import safeStorage
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart(): CartContextType {
  const ctx = useContext(CartContext) as CartContextType;
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === 'development') {
    logInfo('[CartProvider] Initializing...');
  }
  const items = useSelector((state: RootState) => state.cart.items);
  const reduxDispatch = useDispatch<AppDispatch>();

  // Redux store (cartSlice.ts) is responsible for initial hydration from localStorage.
  // This useEffect was redundant.

  const dispatch = (_action: CartAction) => {
    switch (action.type) {
      case 'ADD_ITEM':
        reduxDispatch(
          addItem({
            id: (action.payload as CartItem).id,
            title: (action.payload as CartItem).name,
            price: (action.payload as CartItem).price,
          }),
        );
        break;
      case 'REMOVE_ITEM':
        reduxDispatch(removeItem(action.payload as string));
        break;
      case 'CLEAR_CART':
        reduxDispatch(clear());
        break;
      case 'SET_ITEMS':
        reduxDispatch(setItems(action.payload as CartItem[]));
        break;
      default:
        // Optional: handle unknown action types
        // logWarn(`[CartProvider] Unknown action type: ${(action as any).type}`);
        break;
    }
  };

  const value: CartContextType = {
    items,
    dispatch,
  };

  // This useEffect for loading items from localStorage was also redundant
  // as cartSlice.ts handles initial load.

  // Persist cart items to localStorage whenever they change from Redux state
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      logInfo('[CartProvider] Persisting items to localStorage:', {
        data: { data: items },
      });
    }
    try {
      // Only persist if localStorage is actually available.
      // safeStorage handles this internally, but good to be mindful.
      safeStorage.setItem('zion_cart', JSON.stringify(items));
    } catch {
      // Catching potential errors during stringify or setItem, though safeStorage also has try/catch.
      logErrorToProduction(
        '[CartProvider] Failed to persist cart to localStorage',
        { data: error },
      );
    }
  }, [items]); // Dependency array ensures this runs when `items` from Redux changes.

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
