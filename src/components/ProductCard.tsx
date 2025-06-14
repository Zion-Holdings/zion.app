import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState for error handling

export interface ProductCardProps {
  product: any;
  onBuy?: () => void;
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);

  if (!product || typeof product.id !== 'string') {
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center" data-testid="product-card-error">
        <p className="text-red-500">Invalid product data.</p>
      </div>
    );
  }

  const active = isWishlisted(product.id);
  const dispatch = useDispatch<AppDispatch>();

  const productTitle = typeof product.title === 'string' ? product.title : 'Untitled Product';

  const addToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        title: productTitle,
        price: product.price ?? 0,
        image: imageUrl || undefined,
      })
    );
  };

  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
  const imageAltText = productTitle;

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
    }
  };

  return (
    <div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={() => toggle(product.id)}
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
      </button>

      <div className="w-full h-40 relative mb-2"> {/* Added relative positioning for Image with layout='fill' */}
        {imageUrl && !imageError ? (
          <Image
            src={imageUrl}
            alt={imageAltText}
            layout="fill" // Use fill to cover the container
            objectFit="cover" // Equivalent to object-cover
            onError={handleImageError}
            priority={false} // These are typically not LCP images
            // Add sizes attribute for better performance with layout="fill" or "responsive"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

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
            data-testid="buy-now-button"
          >
            Buy Now
          </Button>
        )}
      </div>
    </div>
  );
}
