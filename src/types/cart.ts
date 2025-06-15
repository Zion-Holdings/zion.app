export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  dispatch: React.Dispatch<CartAction>;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: { id: string; title: string; price: number } } // quantity removed, reducer handles it
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_ITEMS'; payload: CartItem[] };
