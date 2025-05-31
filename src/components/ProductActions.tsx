import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext'; // Added
import { toast } from '@/hooks/use-toast'; // Added
import { CartItem } from '@/types/cart'; // Added

interface ProductActionsProps {
  productId: string;
  productName: string; // Added
  price: number;       // Added
  addToCart: (id: string) => Promise<unknown>;
  isDisabled?: boolean;
}

export function ProductActions({ productId, productName, price, addToCart, isDisabled }: ProductActionsProps) {
  const [status, setStatus] = useState('Add to Cart');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useCart(); // Added

  const handleAdd = async () => {
    if (loading || isDisabled) return;
    setLoading(true);
    setStatus('Adding...');
    try {
      await addToCart(productId); // This is the prop function, expected to make the API call

      // Construct CartItem with new props
      const itemToAdd: CartItem = {
        id: productId,
        name: productName, // This 'productName' will be from new props
        price: price,       // This 'price' will be from new props
        quantity: 1
      };
      dispatch({ type: 'ADD_ITEM', payload: itemToAdd });

      setStatus('Added ✓'); // Set new status
      toast.success("Item added to cart successfully!"); // Show toast

      setTimeout(() => {
        setStatus('Add to Cart'); // Revert status after 2 seconds
      }, 2000);

    } catch (error) {
      console.error("Failed to add item to cart:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to add item to cart.";
      toast.error(errorMessage); // Show error toast
      setStatus('Add to Cart'); // Revert status on error
    } finally {
      setLoading(false); // Keep this in finally
      // Ensure no setStatus('Add to Cart') is in finally
    }
  };

  return (
    <Button onClick={handleAdd} disabled={loading || isDisabled}>
      {status}
    </Button>
  );
}
