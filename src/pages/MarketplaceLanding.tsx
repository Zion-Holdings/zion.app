import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/ProductCard';
import { showError } from '@/utils/showToast';

interface Product {
  id: string;
  [key: string]: any;
}

async function fetchProducts() {
  const res = await fetch('/api/products?limit=20');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json() as Promise<Product[]>;
}

export default function MarketplaceLanding() {
  const navigate = useNavigate();
  const { data: products = [], error } = useQuery('products', fetchProducts, {
    retry: 1,
    onError: () => showError('products', 'Unable to load products'),
  });

  if (!products.length && !error) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-white">Error loading products</div>;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p: Product) => (
          <ProductCard
            key={p.id}
            product={p}
            onBuy={() => navigate(`/checkout/${p.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
