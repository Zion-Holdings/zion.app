import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[];
        setItems(parsed);
      } catch {
        // ignore
      }
    }
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {items.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="font-semibold mb-4">Total: ${total.toFixed(2)}</div>
          <Link className="underline" to="/checkout">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
}
