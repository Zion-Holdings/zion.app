import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  [key: string]: any;
}

async function fetchProducts() {
  const res = await fetch('/api/marketplace/products?limit=20');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json() as Promise<Product[]>;
}

export interface MarketplaceProps {
  products?: Product[];
}

export default function Marketplace({ products: initialProducts = [] }: MarketplaceProps) {
  const navigate = useNavigate();
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialData: initialProducts,
  });

  if (isLoading) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-white">Error loading products</div>;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
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
