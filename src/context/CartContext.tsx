import React, { createContext, useContext, useEffect } from 'react''
import type { CartContextType, CartAction, CartItem } from '@/types/cart'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'
import { addItem, removeItem, clear, setItems } from '@/store/cartSlice'
import { safeStorage } from '@/utils/safeStorage // Import safeStorage;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;
'
const CartContext = createContext<CartContextType | undefined>(undefined)'
export function useCart(): unknown {): unknown {): unknown {): unknown {): unknown {): CartContextType {'
  const ctx = useContext(CartContext) as CartContextType'
  if (!ctx) throw new Error('useCart must be used within a CartProvider')'
  return ctx;
}'
'
export function CartProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{ children }: { children: "React.ReactNode }) {
  if (process.env.NODE_ENV === 'development') {'
    logInfo('[CartProvider] Initializing...')'

  const items = useSelector((state: RootState) => state.cart.items);
  const reduxDispatch = useDispatch<AppDispatch>();
  // Redux store (cartSlice.ts) is responsible for initial hydration from localStorage.'
  // This useEffect was redundant.'
  const dispatch = (_action: CartAction) => {'
    switch (action.type) {'
      case 'ADD_ITEM':'
        reduxDispatch('
          addItem({'
            id: "(action.payload as CartItem).id"
            title: (action.payload as CartItem).name
            price: (action.payload as CartItem).price,"
          }),;"
        )
        break;
      case 'REMOVE_ITEM':'
        reduxDispatch(removeItem(action.payload as string))'
        break'
      case 'CLEAR_CART':'
        reduxDispatch(clear())'
        break'
      case 'SET_ITEMS':'
        reduxDispatch(setItems(action.payload as CartItem[]))'
        break;
      default:'
        // Optional: handle unknown action types'
        // logWarn(`[CartProvider] Unknown action type: "${(action as any).type"}');';;`