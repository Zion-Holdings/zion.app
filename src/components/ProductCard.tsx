import { Heart } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext.jsx';

export default function ProductCard({ product }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(product.id);

  const image = product.images && product.images[0];

  return (
    <div className="relative border rounded-lg bg-card p-4">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={() => toggleFavorite(product.id)}
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
      </button>
      {image && (
        <img src={image} alt={product.title} className="w-full h-40 object-cover mb-2" />
      )}
      <h3 className="font-semibold mb-1">{product.title}</h3>
      {product.price != null && (
        <p className="text-sm text-muted-foreground">
          {product.currency}
          {product.price}
        </p>
      )}
    </div>
  );
}
