import type { GetServerSideProps } from 'next';
import type { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { SERVICES } from '@/data/servicesData';
import * as Sentry from '@sentry/nextjs';
import Head from 'next/head';
import Link from 'next/link';

interface ListingPageProps {
  listing: ProductListing | null;
}

const ListingPage: React.FC<ListingPageProps> = ({ listing }) => {
  if (!listing) {
    return <div className="max-w-3xl mx-auto py-8 px-4">Listing not found.</div>;
  }

  const canonicalUrl = `/marketplace/listing/${listing.id}`;

  return (
    <>
      <Head>
        <title>{listing.title} | Zion Marketplace</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <nav className="max-w-3xl mx-auto mt-4 px-4 text-sm text-muted-foreground space-x-1" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/marketplace" className="hover:underline">Marketplace</Link>
        <span>/</span>
        <span aria-current="page" className="text-foreground font-medium">{listing.title}</span>
      </nav>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">{listing.title}</h1>
        {listing.images?.length ? (
          <div className="mb-4">
            <img src={listing.images[0]} alt={listing.title} className="rounded-md w-full object-cover" />
          </div>
        ) : null}
        <div className="font-bold mb-2">
          {listing.currency}
          {listing.price}
        </div>
        <p className="mb-4 whitespace-pre-line">{listing.description}</p>
        <div className="mb-4">Seller: {listing.author.name}</div>
        <div className="flex gap-2">
          <button className="rounded bg-primary px-4 py-2 text-primary-foreground">Add to Cart</button>
          <button className="rounded border px-4 py-2">Add to Wishlist</button>
        </div>
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
    const listing =
      MARKETPLACE_LISTINGS.find((l) => l.id === slug) ||
      SERVICES.find((s) => s.id === slug) ||
      null;
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
