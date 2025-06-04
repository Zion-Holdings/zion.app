import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NextSeo } from '@/components/NextSeo';
import ProductReviews from '@/components/ProductReviews';
import type { Product as ProductModel } from '@prisma/client';

// Define ProductWithReviewStats here or import from a shared types file
// This should match the type returned by `/api/products/[productId]/details`
export type ProductWithReviewStats = ProductModel & {
  averageRating: number | null;
  reviewCount: number;
  // Adding fields to match the enriched type from the API / product card expectations
  title?: string; // Usually mapped from product.name
  category?: string;
  images?: { url: string; alt?: string }[];
  price?: number | null;
  currency?: string;
  tags?: string[];
};

interface RatingStarsProps {
  value: number;
  count?: number;
}

// Using a more robust placeholder that handles null/undefined values for rating
const RatingStarsDisplay: React.FC<RatingStarsProps> = ({ value, count }) => {
  const ratingValue = value ?? 0; // Default to 0 if value is null
  const roundedRating = Math.round(ratingValue);
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < roundedRating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
      ))}
      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
        {ratingValue > 0 ? `${ratingValue.toFixed(1)}/5` : 'Not rated'}
      </span>
      {typeof count !== 'undefined' && (
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({count} reviews)</span>
      )}
    </div>
  );
};

const MarketplaceListingPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = React.useState<ProductWithReviewStats | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!slug) return;
    const fetchProduct = async () => {
      try {
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const res = await fetch(`${appUrl}/api/products/${slug}/details`);
        if (!res.ok) {
          if (res.status === 404) {
            setError('Product not found.');
            return;
          }
          let msg = `Failed to fetch product: ${res.status}`;
          try {
            const data = await res.json();
            msg = data.error || msg;
          } catch {
            msg = res.statusText || msg;
          }
          setError(msg);
          return;
        }
        const data: ProductWithReviewStats = await res.json();
        setProduct(data);
      } catch (e: any) {
        console.error('Error loading product:', e);
        setError('An unexpected error occurred while trying to load product details.');
      }
    };
    fetchProduct();
  }, [slug]);

  if (error) {
    return <div className="text-red-500 max-w-3xl mx-auto py-8 px-4">Error: {error}</div>;
  }
  if (!product) {
    return <div className="max-w-3xl mx-auto py-8 px-4">Product not found.</div>;
  }

  // The slug from URL is product.id because our API uses product.id for fetching
  const productId = product.id;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: (product as any).imageUrl ?? product.images?.[0]?.url,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
    },
    aggregateRating:
      product.reviewCount > 0 && product.averageRating !== null
        ? {
            "@type": "AggregateRating",
            ratingValue: product.averageRating,
            reviewCount: product.reviewCount,
          }
        : undefined,
  };

  return (
    <>
      <NextSeo
        title={product.name}
        description={product.description ?? undefined}
        openGraph={{
          title: product.name,
          description: product.description ?? undefined,
          images: [
            { url: (product as any).imageUrl ?? product.images?.[0]?.url ?? '' },
          ],
        }}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productLd)}
        </script>
      </Helmet>
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8 px-4">

        <h1>{product.name}</h1> {/* Using product.name from the Product model */}

      {/* Display average rating and review count */}
      <div className="my-4">
        <h2 className="text-lg font-semibold mb-2">Overall Rating</h2>
        {product.reviewCount > 0 && product.averageRating !== null ? (
          <RatingStarsDisplay value={product.averageRating} count={product.reviewCount} />
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">No ratings yet for this product.</p>
        )}
      </div>

      {product.description && (
        <div className="mt-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p>{product.description}</p>
        </div>
      )}

      {/* Other product details can go here */}

      <hr className="my-8" />

      {/* Integrate ProductReviews component */}
      <ProductReviews productId={productId} />
    </main>
    </>
  );
};


export default MarketplaceListingPage;
