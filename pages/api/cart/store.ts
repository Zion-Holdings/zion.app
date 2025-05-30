export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export let cart: CartItem[] = [];
