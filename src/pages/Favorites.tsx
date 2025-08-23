import ProductCard from '@/components/ProductCard';
import { useFavorites } from '@/context/FavoritesContext.jsx';
import { NEW_PRODUCTS } from '@/data/newProductsData';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const map: Record<string, any> = {};
  for (const p of NEW_PRODUCTS) {
    map[p.id] = p;
  }

  const items = favorites.map(id => map[id]).filter(Boolean);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>
      {items.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
