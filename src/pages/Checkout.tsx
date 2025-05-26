import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { getStripe } from '@/utils/getStripe';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Checkout() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const { user } = useAuth();
  const [showGuest, setShowGuest] = useState(false);
  const [guestEmail, setGuestEmail] = useState('');
  const [guestAddress, setGuestAddress] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[];
        if (parsed.length > 0) {
          setItems(parsed);
          return;
        }
      } catch {
        // ignore parsing errors
      }
    }
    // Provide mock data if cart empty
    setItems([
      {
        id: 'prod_mock',
        name: 'Test Item',
        price: 25,
        quantity: 1,
      },
    ]);
  }, []);

  const createSession = async (body: any) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const { sessionId } = await response.json();
      const stripe = await getStripe();
      if (stripe && sessionId) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (err) {
      console.error('Checkout error', err);
    }
  };

  const handleCheckout = async () => {
    const product = items[0];
    if (!user) {
      setShowGuest(true);
      return;
    }
    await createSession({ priceId: product.id });
  };

  const handleGuestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const product = items[0];
    await createSession({
      priceId: product.id,
      email: guestEmail,
      shipping: guestAddress,
    });
  };

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-zion-blue p-6">
      <div className="max-w-xl mx-auto bg-zion-blue-dark rounded-lg p-6 text-white space-y-6">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full" onClick={handleCheckout}>Buy Now</Button>
        <Button variant="outline" className="w-full" onClick={() => navigate(-1)}>Back</Button>
      </div>

      <Dialog open={showGuest} onOpenChange={setShowGuest}>
        <DialogContent>
          <form onSubmit={handleGuestSubmit} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Checkout as Guest</DialogTitle>
              <DialogDescription>
                Enter your contact email and shipping address
              </DialogDescription>
            </DialogHeader>
            <Input
              required
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
              placeholder="Email"
              aria-label="Email"
            />
            <Input
              required
              value={guestAddress}
              onChange={(e) => setGuestAddress(e.target.value)}
              placeholder="Shipping Address"
              aria-label="Shipping Address"
            />
            <DialogFooter>
              <Button type="submit" className="w-full">Checkout</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
