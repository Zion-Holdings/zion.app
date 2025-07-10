import ProductCard from '@/components/ProductCard';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';

export default function ProductsList() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div data-testid="products-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MARKETPLACE_LISTINGS.map(p => (
          <ProductCard key={p.id} product={{
            id: p.id,
            name: p.title ?? '',
            title: p.title ?? '',
            description: p.description ?? '',
            category: p.category ?? '',
            price: typeof p.price === 'number' ? p.price : 0,
            currency: p.currency ?? '',
            tags: p.tags ?? [],
            images: p.images ?? [],
            rating: typeof p.rating === 'number' ? p.rating : 0,
            reviewCount: typeof p.reviewCount === 'number' ? p.reviewCount : 0,
            created_at: p.createdAt ?? '',
            updated_at: p.createdAt ?? '',
            stock: p.stock ?? 0,
            in_stock: (p.stock ?? 0) > 0,
            specifications: Array.isArray(p.specifications)
              ? Object.fromEntries(p.specifications.map((v, i) => [i.toString(), v]))
              : (p.specifications ?? {}),
            author: p.author ?? { name: '', id: '' },
            uspHeadline: p.uspHeadline ?? '',
          }} />
        ))}
      </div>
    </div>
  );
}