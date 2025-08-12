import { useRouter } from 'next/router'; // Changed from useNavigate
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/services/marketplace';
import { showError } from '@/utils/showToast';

async function fetchProducts() {
  const res = await fetch('/api/products?limit=20');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json() as Promise<Product[]>;
}

export default function MarketplaceLanding() {
  const router = useRouter(); // Changed from navigate
  const { data: products = [], error, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    retry: 1,
  });

  useEffect(() => {
    if (isError && error) {
      showError('products', 'Unable to load products');
    }
  }, [isError, error]);

  if (!products.length && !isError) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  if (isError) {
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
            onBuy={async () => {
              await router.push(`/checkout/${p.id}`);
            }}
            buyDisabled
          />
        ))}
      </div>
    </div>
  );
}
