import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  [key: string]: any;
}

async function fetchProducts(page: number, perPage: number): Promise<Product[]> {
  try {
    const res = await fetch(`/api/products?page=${page}&perPage=${perPage}`);
    if (res.status === 404) {
      return [];
    }
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export default function ProductsList() {
  const router = useRouter();
  const page = parseInt((router.query.page as string) || '1', 10);
  const perPage = parseInt((router.query.perPage as string) || '20', 10);

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products', page, perPage],
    queryFn: () => fetchProducts(page, perPage),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-white">Error loading products</div>;
  }

  if (products.length === 0) {
    return <div className="p-6 text-white">No products yet</div>;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((p) => p && p.id)
          .map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onBuy={() => router.push(`/checkout/${p.id}`)}
            />
          ))}
      </div>
    </div>
  );
}
