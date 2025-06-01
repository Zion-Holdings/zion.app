import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { NEW_PRODUCTS } from '@/data/newProductsData';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { SEO } from '@/components/SEO';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(
    NEW_PRODUCTS.find((p) => p.id === id) || null
  );
  const { items, dispatch } = useCart();
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const res = await fetch(`/api/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        }
      } catch (err) {
        // Fail silently and fall back to local data
        console.error('Error fetching product', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-6 text-white">Product not found</div>;
  }

  const inCart = items.some(i => i.id === product.id);

  const handleAdd = () => {
    if (inCart) return;
    setAdding(true);
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.title, price: product.price ?? 0, quantity: 1 }
    });
    toast.success(`1× ${product.title} added`);
    setTimeout(() => setAdding(false), 500);
  };

  return (
    <>
      <SEO
        title={product.title}
        description={product.description}
        ogImage={product.images?.[0]}
      />
      <div className="min-h-screen bg-zion-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="mb-6">{product.description}</p>
        <Button onClick={handleAdd} disabled={adding || inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
        </Button>
      </div>
    </>
  );
}
