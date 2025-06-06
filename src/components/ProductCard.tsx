import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';

export interface ProductCardProps {
  product: any;
  onBuy?: () => void;
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const { isWishlisted, toggle } = useWishlist();
  const active = isWishlisted(product.id);
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    dispatch(addItem({ id: product.id, title: product.title, price: product.price ?? 0 }));
  };

  const image = product.images && product.images[0];

  return (
    <div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={() => toggle(product.id)}
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
      <div className="mt-2 flex gap-2">
        <Button size="sm" className="flex-1" onClick={addToCart}>
          Add to Cart
        </Button>
        {onBuy && (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onBuy();
            }}
            size="sm"
            variant="outline"
            className="flex-1"
          >
            Buy Now
          </Button>
        )}
      </div>
    </div>
  );
}
