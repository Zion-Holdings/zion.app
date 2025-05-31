import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProductActionsProps {
  productId: string;
  addToCart: (id: string) => Promise<unknown>;
  isDisabled?: boolean;
}

export function ProductActions({ productId, addToCart, isDisabled }: ProductActionsProps) {
  const [status, setStatus] = useState('Add to Cart');
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (loading || isDisabled) return;
    setLoading(true);
    setStatus('Adding...');
    try {
      await addToCart(productId);
      setStatus('Added!');
      setTimeout(() => setStatus('Add to Cart'), 1500);
    } finally {
      setLoading(false);
      setStatus('Add to Cart');
    }
  };

  return (
    <Button onClick={handleAdd} disabled={loading || isDisabled}>
      {status}
    </Button>
  );
}
