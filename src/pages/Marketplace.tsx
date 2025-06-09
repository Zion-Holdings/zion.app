import { useRouter } from 'next/router'; // Changed from useNavigate
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  [key: string]: any;
}

async function fetchProducts() {
  // Network errors are caught and logged here.
  // The error is re-thrown to be handled by react-query.
  try {
    const res = await fetch('/api/marketplace/products?limit=20');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json() as Promise<Product[]>;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export interface MarketplaceProps {
  products?: Product[];
}

export default function Marketplace({ products: initialProducts = [] }: MarketplaceProps) {
  const router = useRouter(); // Changed from navigate
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
        {products
          // Filter out products that are null/undefined or lack an 'id' property
          // to prevent rendering errors and ensure data integrity for ProductCard.
          .filter(p => p && p.id)
          .map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onBuy={() => router.push(`/checkout/${p.id}`)} // Changed to router.push
            />
          ))}
      </div>
    </div>
  );
}
