import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { getStripe } from '@/utils/getStripe';
import { useAuth } from '@/hooks/useAuth';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  priceId: string;
}

export function ProductCard({ id, name, price, priceId }: ProductCardProps) {
  const { user } = useAuth();
  const [showGuest, setShowGuest] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const createSession = async (body: any) => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const { sessionId } = await res.json();
    const stripe = await getStripe();
    if (stripe && sessionId) {
      await stripe.redirectToCheckout({ sessionId });
    }
  };

  const handleBuy = async () => {
    if (!user) {
      setShowGuest(true);
      return;
    }
    await createSession({ priceId });
  };

  const handleGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    await createSession({ priceId, email, shipping: address });
  };

  return (
    <div className="border p-4 rounded-md space-y-3">
      <h3 className="font-bold">{name}</h3>
      <p>${price.toFixed(2)}</p>
      <Button onClick={handleBuy}>Buy Now</Button>

      <Dialog open={showGuest} onOpenChange={setShowGuest}>
        <DialogContent>
          <form onSubmit={handleGuest} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Checkout as Guest</DialogTitle>
              <DialogDescription>Enter email and shipping address</DialogDescription>
            </DialogHeader>
            <Input aria-label="Email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <Input aria-label="Shipping" required value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Shipping Address" />
            <DialogFooter>
              <Button type="submit" className="w-full">Checkout</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
