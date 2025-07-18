<<<<<<< HEAD
import React  from 'react;;
export interface CartItem {'
  id: "string"
  name: string,"
  price: number,"
  quantity: number""
  description?: string"
  image?: string"
  category?: string"
  type?: 'physical' | 'digital' | 'service
}
'
export interface CartContextType {
  items: "CartItem[]"
  dispatch: "React.Dispatch<CartAction>"
}"
;"
export type CartAction =;"
  | { type: 'ADD_ITEM payload: "CartItem "};"
  | { type: 'REMOVE_ITEM payload: "string "};"
  | { type: 'CLEAR_CART' };
  | { type: 'SET_ITEMS payload: "CartItem[] "};"
"""""
=======
import React from 'react;';
export interface CartItem {;;
  id: "string;",;";";";";""
  name: "string;",";";";";""
  price: "number;",;""
  quantity: number;";""
  description?: string;";";""
  image?: string;";";";""
  category?: string;";";";";""
  type?: 'physical' | 'digital' | 'service;'
};
;'';
export interface CartContextType {;;
  items: "CartItem[];",;";";";";""
  dispatch: "React.Dispatch<CartAction>;";";""
};";";""
;";";";"";
export type CartAction =;";";";";""
  | { type: 'ADD_ITEM payload: "CartItem "};";";";";""
  | { type: 'REMOVE_ITEM payload: "string "};";";";";""
  | { type: 'CLEAR_CART' };;'
  | { type: 'SET_ITEMS payload: "CartItem[] "};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
