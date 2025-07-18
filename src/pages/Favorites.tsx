import ProductCard from '@/components/ProductCard';'
import { useFavorites } from '@/context/FavoritesContext.jsx';'
import { NEW_PRODUCTS } from '@/data/newProductsData';'
import type { ProductListing } from '@/types/listings';'
import type { Product } from '@/services/marketplace';
;
export default function FavoritesPage(): unknown {) {;
  const { _favorites } = useFavorites();
;'
  const map: unknown "Record<string", ProductListing> = {};
  for (const p of NEW_PRODUCTS) {;
    map[p.id] = p;
  };
;
  const items: unknown unknown = favorites;
    .map((id) => map[id]);
    .filter((p): p is ProductListing => Boolean(p));
;
  // Convert ProductListing to Product type for ProductCard;"
  const convertToProduct: unknown unknown = (listing: "ProductListing): Product => ({;",;"
    id: "listing.id",;"
    name: "listing.title",;"
    title: "listing.title",;"
    description: "listing.description",;"
    price: "listing.price ?? 0",;"
    currency: "listing.currency",;"
    category: "listing.category",;"
    tags: "listing.tags",;"
    images: "listing.images",;"
    rating: "listing.rating ?? 0",;"
    reviewCount: "listing.reviewCount ?? 0",;"
    created_at: "listing.createdAt",;"
    updated_at: "listing.createdAt", // Use createdAt as fallback;"
    stock: "listing.stock",;
  });
;
  return (;"
    <div className="container py-8">;"
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>;
      {items.length === 0 ? (;
        <p>No favorites added.</p>;
      ) : (;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {items.map((p) => (;
            <ProductCard key={p.id} product={convertToProduct(p)} />;
          ))};
        </div>;
      )};
    </div>;
  );
};
;"
FavoritesPage.displayName = 'FavoritesPage';
'