import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'next/router';
import { Product } from '@/types/product';
import { useMediaQuery } from 'usehooks-ts';
import { useEnqueueSnackbar } from '@/context/SnackbarContext';
import { captureException } from '@/utils/sentry';

interface ProductCardProps {
  product: Product;
  onBuy?: () => void;
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

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
    if (!isAuthenticated) {
      enqueueSnackbar("Please log in to add items", { variant: 'warning' });
      router.push('/login?next=' + router.asPath);
      return;
    }
    dispatch(addItem({ id: product.id, title: productTitle, price: product.price ?? 0 }));
  };

  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
  const imageAltText = productTitle;

  const handleImageError = (error: any) => {
    if (!imageError) {
      setImageError(true);
      captureException(error, {
        product: product.id,
        imageUrl,
      });
    }
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1200px)');

  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';

  return (
    <div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={() => toggle(product.id)}
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
      </button>

    <div className="w-full h-40 relative mb-2">
      {imageUrl && !imageError ? (
        <Image
          src={imageUrl}
          alt={imageAltText}
          layout="fill"
          objectFit="cover"
          onError={(e) => handleImageError(e)}
          priority={false}
          sizes={imageSizes}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      {active && (
        <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">
          <Heart className="text-red-500 fill-red-500" />
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
            disabled={!isAuthenticated}
          >
            Buy Now
          </Button>
        )}
      </div>
    </div>
  );
}
