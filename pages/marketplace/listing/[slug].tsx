import type { GetServerSideProps } from 'next';
import type { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data/initialMarketplaceProducts';
import { SERVICES } from '@/data/servicesData';
import * as Sentry from '@sentry/nextjs';
import Head from 'next/head';
import Link from 'next/link';
import { RatingStars } from '@/components/RatingStars';
import ProductReviews from '@/components/ProductReviews';
import { ProductGallery } from '@/components/gallery/ProductGallery';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { toast } from '@/hooks/use-toast';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { fetchProducts, validateProductData, ensureProductIntegrity } from '@/services/marketplace';
import { AppLayout } from '@/layout/AppLayout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface ListingPageProps {
  listing: ProductListing | null;
}

const ListingPage: React.FC<ListingPageProps> = ({ listing }) => {
  const router = useRouter();
  
  if (!listing) {
    return <div className="max-w-3xl mx-auto py-8 px-4">Listing not found.</div>;
  }

  const canonicalUrl = `/marketplace/listing/${listing.id}`;
  const breadcrumbs = getBreadcrumbsForPath(canonicalUrl);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(
      addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 })
    );
    toast({
      title: "Added to cart",
      description: `${listing.title} has been added to your cart`,
    });
  };

  return (
    <>
      <Head>
        <title>{listing.title} | Zion Marketplace</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
      <Breadcrumb className="max-w-3xl mx-auto mt-4 px-4 text-sm text-muted-foreground">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/marketplace">Marketplace</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild aria-current="page">
              <span>{listing.title}</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">{listing.title}</h1>
        {listing.images?.length ? (
          <div className="mb-4">
            <ProductGallery images={listing.images} />
          </div>
        ) : null}
        {typeof listing.rating === 'number' && (
          <div className="mb-2">
            <RatingStars value={listing.rating} count={listing.reviewCount} />
          </div>
        )}
        <div className="font-bold mb-2">
          {listing.currency}
          {listing.price}
        </div>
        {listing.availability && (
          <div className="mb-2 text-sm text-muted-foreground">
            Availability: {listing.availability}
          </div>
        )}
        <p className="mb-4 whitespace-pre-line">{listing.description}</p>
        <div className="mb-4">Seller: {listing.author.name}</div>
        <div className="flex gap-2">
          <button onClick={handleAddToCart} className="rounded bg-primary px-4 py-2 text-primary-foreground">Add to Cart</button>
          <button className="rounded border px-4 py-2">Add to Wishlist</button>
        </div>
        <ProductReviews productId={listing.id} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ListingPageProps> = async ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug as string;
  let listing: ProductListing | null = null;

  Sentry.addBreadcrumb({
    category: 'ssr',
    message: `getServerSideProps for Marketplace Listing: ${slug}`,
    level: 'info',
  });

  try {
    // Step 1: Try to fetch directly by ID from API
    // Assuming fetchProducts can take an `id: slug` parameter or similar for direct lookup.
    // If not, this will behave like `search: slug` and then we filter by id.
    try {
      // Attempting a more specific fetch if the API supports it (e.g., by id)
      // For now, we'll use `search: slug` and then filter, as `fetchProducts` might not support `id: slug` directly.
      // If an `id` param was available, it would be `fetchProducts({ id: slug })`
      const potentialProducts = await fetchProducts({ search: slug /* or id: slug if supported */ });
      const productFromApi = potentialProducts.find((p: any) => p.id === slug);

      if (productFromApi && validateProductData(productFromApi)) {
        const ensuredProduct = ensureProductIntegrity([productFromApi])[0];

        if (ensuredProduct) {
          listing = {
            id: (ensuredProduct as any).id || slug,
            title: (ensuredProduct as any).name || (ensuredProduct as any).title,
            description: (ensuredProduct as any).description,
            price: (ensuredProduct as any).price,
            currency: (ensuredProduct as any).currency || 'USD',
            category: (ensuredProduct as any).category || 'general',
            tags: (ensuredProduct as any).tags,
            images: (ensuredProduct as any).images,
            rating: (ensuredProduct as any).rating,
            reviewCount: (ensuredProduct as any).reviewCount,
            createdAt: (ensuredProduct as any).created_at,
            author: { name: 'Unknown', id: 'unknown' },
            availability: 'Available',
          } as ProductListing;
          Sentry.addBreadcrumb({ message: `Found product ${slug} via API direct ID match.` });
        } else {
          // Handle case where product cannot be ensured
          return {
            notFound: true,
          };
        }
      }
    } catch (apiError) {
      logWarn('API fetch for product ${slug} (attempting ID match) failed:', { data: apiError });
      Sentry.captureMessage(`API fetch for product ${slug} (attempting ID match) failed`, { extra: { error: apiError } });
    }

    // Step 2: If not found via direct API ID lookup, try static data by ID
    if (!listing) {
      Sentry.addBreadcrumb({ message: `Product ${slug} not found via API ID match. Trying static data.` });
      const staticListing =
        INITIAL_MARKETPLACE_PRODUCTS.find((l) => l.id === slug) ||
        MARKETPLACE_LISTINGS.find((l) => l.id === slug) ||
        SERVICES.find((s) => s.id === slug) ||
        null;

      if (staticListing) {
        listing = staticListing as ProductListing; // Assuming static data is already in correct format
        Sentry.addBreadcrumb({ message: `Found product ${slug} in static data.` });
      }
    }
    
    // Step 3: If still not found, try broader API search (if different from step 1)
    // This step might be redundant if step 1 already used `search: slug`.
    // If step 1 was a true `id: slug` call, this would be the fallback general search.
    // For now, we assume step 1 was effectively `search: slug`, so this might not find new items unless API behaves differently.
    // To avoid redundant calls if fetchProducts doesn't differentiate `id` and `search` params well, we can be cautious.
    // Let's assume for now the first API call was comprehensive enough for ID search.

    // Step 4: If still not found, try title-based fuzzy matching on static data
    if (!listing) {
      Sentry.addBreadcrumb({ message: `Product ${slug} not found by ID (API or static). Trying title match on static data.` });
      const allListings = [
        ...INITIAL_MARKETPLACE_PRODUCTS,
        ...MARKETPLACE_LISTINGS,
        ...SERVICES,
      ];
      const matchedByTitle = allListings.find((l) =>
        l.title?.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase() ||
        l.title?.toLowerCase().includes(slug.toLowerCase())
      ) || null;

      if (matchedByTitle) {
        listing = matchedByTitle as ProductListing;
        Sentry.addBreadcrumb({ message: `Found product ${slug} by title match in static data.` });
      }
    }
    
    if (!listing) {
      logInfo(`Listing not found for slug: ${slug}`);
      Sentry.captureMessage(`Listing not found for slug: ${slug}`, { level: 'warning' });
      return { notFound: true };
    }
    
    return { props: { listing } };

  } catch (error) {
    Sentry.captureException(error);
    logErrorToProduction('Critical error in getServerSideProps for marketplace listing ${slug}:', { data: error });
    return { notFound: true }; // Ensure 404 for any unhandled errors
  }
};

export default ListingPage;
