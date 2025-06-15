import React, { createContext, useContext } from 'react';
import { CartContextType, CartAction } from '@/types/cart';
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

  const dispatch = (action: CartAction) => {
    switch (action.type) {
      case 'ADD_ITEM':
        reduxDispatch(
          addItem({ // addItem from cartSlice expects { id, title, price }
            id: action.payload.id,
            title: action.payload.title, // action.payload is now { id, title, price, quantity? }
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

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
