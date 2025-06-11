import type { GetServerSideProps } from 'next';
import type { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import * as Sentry from '@sentry/nextjs';

interface ListingPageProps {
  listing: ProductListing | null;
}

const ListingPage: React.FC<ListingPageProps> = ({ listing }) => {
  if (!listing) {
    return <div className="max-w-3xl mx-auto py-8 px-4">Listing not found.</div>;
  }

  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <h1>{listing.title}</h1>
      {listing.images?.length ? (
        <div className="mb-4">
          <img src={listing.images[0]} alt={listing.title} />
        </div>
      ) : null}
      <div className="font-bold mb-2">
        {listing.currency}
        {listing.price}
      </div>
      <p className="mb-4">{listing.description}</p>
      <div className="mb-4">Seller: {listing.author.name}</div>
      <div className="flex gap-2">
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<ListingPageProps> = async ({ params }) => {
  const slug = params?.slug as string;

  // Example: Add a breadcrumb for tracing
  // Sentry.addBreadcrumb({
  //   category: 'ssr',
  //   message: `getServerSideProps for Marketplace Listing: ${slug}`,
  //   level: 'info',
  // });

  try {
    const listing = MARKETPLACE_LISTINGS.find((l) => l.id === slug) || null;
    if (!listing) {
      // This will be handled by Next.js to show a 404 page.
      // Sentry typically doesn't report 404s as errors unless configured to do so,
      // or if an error occurs while trying to render the 404 page itself.
      return { notFound: true };
    }
    return { props: { listing } };
  } catch (error) {
    Sentry.captureException(error);
    // This catch block would handle any unexpected errors during the listing lookup.
    // console.error(`Error in getServerSideProps for marketplace listing ${slug}:`, error);
    // Re-throw the error so withSentryGetServerSideProps can capture it.
    throw error;
  }
};

export default ListingPage;
