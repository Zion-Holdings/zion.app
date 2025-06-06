import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/ProductCard';

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

export default function Marketplace() {
  const navigate = useNavigate();
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            role="button"
            onClick={() => navigate(`/checkout/${p.id}`)}
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
