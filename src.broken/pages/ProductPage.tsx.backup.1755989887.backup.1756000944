import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NEW_PRODUCTS } from '@/data/newProductsData';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

export default function ProductPage() {
  const { id } = useParams();
  const product = NEW_PRODUCTS.find(p => p.id === id);
  const { dispatch } = useCart();
  const [adding, setAdding] = useState(false);

  if (!product) {
    return <div className="p-6 text-white">Product not found</div>;
  }

  const handleAdd = () => {
    setAdding(true);
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.title, price: product.price ?? 0, quantity: 1 }
    });
    toast({ title: 'Added to cart', variant: 'success' });
    setTimeout(() => setAdding(false), 500);
  };

  return (
    <div className="min-h-screen bg-zion-blue p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="mb-6">{product.description}</p>
      <Button onClick={handleAdd} disabled={adding}>
        {adding ? 'Adding...' : 'Add to Cart'}
      </Button>
    </div>
  );
}
