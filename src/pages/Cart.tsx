import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { useCart } from '@/context/CartContext';
import { CartItem as CartItemComponent } from '@/components/cart/CartItem';

export default function CartPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, dispatch } = useCart();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  if (!user) {
    toast({
      title: 'Authentication required',
      description: 'Please sign in to view your cart.',
    });
    navigate('/login');
    return null;
  }

  const updateQuantity = (id: string, qty: number) => {
    const updated = items.map(i => (i.id === id ? { ...i, quantity: qty } : i));
    dispatch({ type: 'SET_ITEMS', payload: updated });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <img src="/placeholder.svg" alt="Empty cart" className="mx-auto mb-4" />
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <CartItemComponent
            key={item.id}
            item={item}
            onRemove={removeItem}
            onUpdateQuantity={updateQuantity}
          />
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
