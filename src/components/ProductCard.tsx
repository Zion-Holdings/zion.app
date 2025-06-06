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
  // Validate the product prop:
  // - Ensure product itself is not null or undefined.
  // - Ensure product.id is a string.
  // If validation fails, render a fallback UI.
  if (!product || typeof product.id !== 'string') {
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center" data-testid="product-card-error">
        <p className="text-red-500">Invalid product data.</p>
      </div>
    );
  }

  const active = isWishlisted(product.id); // product.id is confirmed valid by the check above
  const dispatch = useDispatch<AppDispatch>();

  // Validate product.title:
  // - Ensure product.title is a string.
  // - If not, use "Untitled Product" as a fallback.
  const productTitle = typeof product.title === 'string' ? product.title : 'Untitled Product';

  const addToCart = () => {
    // Ensure product.id and product.title are valid before adding to cart
    dispatch(addItem({ id: product.id, title: productTitle, price: product.price ?? 0 }));
  };

  // Validate product.images:
  // - Ensure product.images is an array and has at least one element.
  // - If not, set image to null to render a placeholder.
  const image = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
  const imageAltText = productTitle; // Use validated title for alt text

  return (
    <div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={() => toggle(product.id)} // product.id is validated
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
      </button>
      {image ? (
        <img src={image} alt={imageAltText} className="w-full h-40 object-cover mb-2" />
      ) : (
        // Fallback UI for missing image
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-2">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      {/* Display validated product title */}
      <h3 className="font-semibold mb-1">{productTitle}</h3>
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
