import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactPublisherModal } from './ContactPublisherModal'; // Assuming .jsx is handled or use './ContactPublisherModal'
import {logErrorToProduction} from '@/utils/productionLogger';


interface ProductActionsProps {
  productId: string;
  addToCart: (id: string) => Promise<unknown>;
  isDisabled?: boolean;
  sellerId?: string;
}

export function ProductActions({ productId, addToCart, isDisabled, sellerId }: ProductActionsProps) {
  const [status, setStatus] = useState('Add to Cart');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal

  const handleAdd = async () => {
    if (loading || isDisabled) return;
    setLoading(true);
    setStatus('Adding...');
    try {
      await addToCart(productId);
      setStatus('Added!');
      setTimeout(() => setStatus('Add to Cart'), 1500); // Reset status after a delay
    } catch (error) {
      logErrorToProduction('Failed to add to cart:', { data: error });
      setStatus('Add to Cart'); // Reset status in case of error
    } finally {
      setLoading(false);
      // If setStatus('Add to Cart') is here, it might override "Added!" before timeout completes.
      // Let's rely on the setTimeout and the catch block for status reset.
    }
  };

  return (
    <> {/* Use a fragment to return multiple elements */}
      <Button onClick={handleAdd} disabled={loading || isDisabled}>
        {status}
      </Button>
      {/* New "Contact Publisher" button */}
      <Button
        onClick={() => setIsModalOpen(true)}
        variant="outline" // Example: use a different button style
        disabled={isDisabled} // Potentially disable if main actions are disabled
        style={{ marginLeft: '10px' }} // Add some spacing
      >
        Contact Publisher
      </Button>

      <ContactPublisherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productId={productId}
        sellerId={sellerId || ""}
      />
    </>
  );
}
