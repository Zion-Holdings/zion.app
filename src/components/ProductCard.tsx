import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'next/router';
import { Product } from '@/services/marketplace';
import { useMediaQuery } from 'usehooks-ts';
import { toast } from '@/hooks/use-toast';
import { captureException } from '@/utils/sentry';

interface ProductCardProps {
  product: Product;
  onBuy?: () => void;
  /** Disable the Buy Now button (e.g. when the checkout route isn't ready). */
  buyDisabled?: boolean;
}

export default function ProductCard({ product, onBuy, buyDisabled = false }: ProductCardProps) {
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  const stockStatus =
    product.stock === undefined
      ? 'In stock'
      : product.stock <= 0
      ? 'Out of stock'
      : product.stock <= 5
      ? 'Low stock'
      : 'In stock';

  const stockVariant =
    product.stock === undefined
      ? 'success'
      : product.stock <= 0
      ? 'destructive'
      : product.stock <= 5
      ? 'warning'
      : 'success';

  if (!product || typeof product.id !== 'string' || typeof product.title !== 'string' || product.title.trim() === '') {
    captureException(new Error('Invalid product data received by ProductCard'), {
      extra: { product },
    });
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">
        <p className="text-destructive text-sm">Product information unavailable.</p>
        {/* Optionally, provide more details if product ID is known */}
        {/* {product && product.id && <p className="text-xs text-muted-foreground">ID: {product.id}</p>} */}
      </div>
    );
  }

  const active = isWishlisted(product.id);
  const dispatch = useDispatch<AppDispatch>();

  // Title is now guaranteed to be a non-empty string by the check above.
  const productTitle = product.title;

  const addToCart = () => {
    dispatch(addItem({ id: product.id, title: productTitle, price: product.price ?? 0 }));
    toast({
      title: 'Added to cart',
      description: `${productTitle} has been added to your cart`,
      action: {
        label: 'View Cart',
        onClick: () => router.push('/cart'),
      },
    });
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
          fill
          style={{ objectFit: 'cover' }}
          onError={(e) => handleImageError(e)}
          priority={false}
          sizes={imageSizes}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      {stockStatus && (
        <Badge variant={stockVariant as any} className="absolute top-2 left-2">
          {stockStatus}
        </Badge>
      )}
      {active && (
        <div className="absolute top-10 left-2 p-1 rounded-full bg-background/70">
          <Heart className="text-red-500 fill-red-500" />
        </div>
      )}
    </div>
      <Link href={`/marketplace/listing/${product.id}`}>
        <h3 className="font-semibold mb-1">{productTitle}</h3>
      </Link>
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBuy();
                  }}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  data-testid="buy-now-button"
                  disabled={!isAuthenticated || buyDisabled}
                >
                  Buy Now
                </Button>
              </TooltipTrigger>
              {!isAuthenticated && (
                <TooltipContent>Login required</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}
