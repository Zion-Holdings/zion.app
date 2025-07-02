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
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'next/router';
import { Product } from '@/services/marketplace';
import { useMediaQuery } from 'usehooks-ts';
import { toast } from '@/hooks/use-toast';
import { captureException } from '@/utils/sentry';

interface ProductCardProps {
  product: Product;
  onBuy?: () => Promise<void>; // Changed to allow async and signal completion/failure
  onBuyAttemptComplete?: () => void; // Callback to signal the buy attempt is finished (success or fail)
  /** Disable the Buy Now button (e.g. when the checkout route isn't ready). */
  buyDisabled?: boolean;
}

export default function ProductCard({ product, onBuy, onBuyAttemptComplete, buyDisabled = false }: ProductCardProps) {
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false); // Added for loading state
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
  // Reset redirecting state if component unmounts (e.g., navigation cancelled by user)
  useEffect(() => {
    return () => {
      setIsRedirecting(false);
    };
  }, []);

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
    if (!isAuthenticated) {
      toast({
        title: 'Login Required',
        description: 'Please log in to add items to your cart.',
        variant: 'destructive',
      });
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`);
      return;
    }
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
        <div className="w-full h-40 relative mb-2 cursor-pointer">
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
          {active && (
            <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">
              <Heart className="text-red-500 fill-red-500" />
            </div>
          )}
        </div>
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
                    if (onBuy) {
                      setIsRedirecting(true);
                      onBuy()
                        .catch(() => {
                          // Error is handled by parent, but we still need to reset loading locally
                        })
                        .finally(() => {
                          setIsRedirecting(false); // Always reset loading state
                          if (onBuyAttemptComplete) {
                            onBuyAttemptComplete(); // Notify parent if it provided this callback
                          }
                        });
                    }
                  }}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  data-testid="buy-now-button"
                  disabled={!isAuthenticated || buyDisabled || isRedirecting}
                >
                  {isRedirecting ? (
                    <>
                      <span className="animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : (
                    'Buy Now'
                  )}
                </Button>
              </TooltipTrigger>
              {!isAuthenticated && !isRedirecting && (
                <TooltipContent>Login required</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}
