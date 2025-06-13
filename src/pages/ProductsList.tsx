import ProductCard from '@/components/ProductCard';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';

export default function ProductsList() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div data-testid="products-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MARKETPLACE_LISTINGS.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
