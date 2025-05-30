import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { useCart } from '@/context/CartContext';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, dispatch } = useCart();
  const [loading, setLoading] = useState(false);

  if (!user) {
    toast({
      title: 'Authentication required',
      description: 'Please sign in to view your cart.',
    });
    navigate('/login');
    return null;
  }

  useEffect(() => {
    if (!items.length) {
      setLoading(true);
      fetch('/api/cart')
        .then(r => r.json())
        .then(data => dispatch({ type: 'SET_ITEMS', payload: data }))
        .finally(() => setLoading(false));
    }
  }, [items.length, dispatch]);

  const updateQuantity = (id: string, qty: number) => {
    const updated = items.map(i =>
      i.id === id ? { ...i, quantity: qty } : i
    );
    dispatch({ type: 'SET_ITEMS', payload: updated });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'SET_ITEMS', payload: items.filter(i => i.id !== id) });
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={e => updateQuantity(item.id, parseInt(e.target.value || '1', 10))}
                className="w-16 bg-transparent border border-input rounded p-1 text-center"
              />
              <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6 font-semibold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <Button className="mt-4 w-full" onClick={() => navigate('/checkout')}>
        Checkout
      </Button>
    </div>
  );
}
