import type { GetServerSideProps } from 'next';
import type { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
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

  // Example: Add a breadcrumb for tracing
  // Sentry.addBreadcrumb({
  //   category: 'ssr',
  //   message: `getServerSideProps for Marketplace Listing: ${slug}`,
  //   level: 'info',
  // });

  try {
    // First try to find in MARKETPLACE_LISTINGS
    let listing = MARKETPLACE_LISTINGS.find((l) => l.id === slug) || null;
    
    // If not found, try SERVICES
    if (!listing) {
      listing = SERVICES.find((s) => s.id === slug) || null;
    }
    
    // If still not found, try to load from API or additional data sources
    if (!listing) {
      try {
        // Try to load additional listings that might not be in static data
        const { fetchProducts } = await import('@/services/marketplace');
        const additionalProducts = await fetchProducts({ search: slug });
        const product = additionalProducts.find((p: any) => p.id === slug);
        
        // Transform Product to ProductListing format if found
        if (product) {
          listing = {
            ...product,
            currency: product.currency || 'USD', // Ensure currency is defined
            author: product.author || { name: 'Unknown', id: 'unknown' },
            category: product.category || 'general',
            subcategory: product.subcategory,
            availability: product.availability,
            rating: product.rating,
            reviewCount: product.reviewCount || 0,
            featured: product.featured || false,
            // Ensure all required ProductListing fields are present
          } as ProductListing;
        }
      } catch (apiError) {
        console.warn(`Failed to fetch additional products for slug ${slug}:`, apiError);
      }
    }
    
    // If still not found, try to match by title or other fields
    if (!listing) {
      const allListings = [...MARKETPLACE_LISTINGS, ...SERVICES];
      listing = allListings.find((l) => 
        l.title?.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase() ||
        l.title?.toLowerCase().includes(slug.toLowerCase())
      ) || null;
    }
    
    if (!listing) {
      // Log for debugging but don't treat as error - this is expected for invalid slugs
      console.log(`Listing not found for slug: ${slug}`);
      return { notFound: true };
    }
    
    return { props: { listing } };
  } catch (error) {
    Sentry.captureException(error);
    console.error(`Error in getServerSideProps for marketplace listing ${slug}:`, error);
    
    // Return 404 instead of throwing to prevent 500 errors
    return { notFound: true };
  }
};

export default ListingPage;
