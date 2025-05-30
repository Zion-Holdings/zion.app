import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';

interface ProductActionsProps {
  onAddToCart: () => Promise<void> | void;
}

export function ProductActions({ onAddToCart }: ProductActionsProps) {
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState('Add to Cart');

  const addToCart = async () => {
    setLoading(true);
    try {
      await onAddToCart();
      toast('2U Rack Mount Server added to cart');
      setLabel('Added!');
      setTimeout(() => setLabel('Add to Cart'), 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={addToCart} disabled={loading}>
      {loading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          {label}
        </span>
      ) : (
        label
      )}
    </Button>
  );
}
