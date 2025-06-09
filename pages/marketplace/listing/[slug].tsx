import type { GetStaticProps, GetStaticPaths } from 'next'; // Updated import
import type { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';

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

// export const getServerSideProps: GetServerSideProps<ListingPageProps> = async ({ params }) => {
//   const slug = params?.slug as string;
//   const listing = MARKETPLACE_LISTINGS.find((l) => l.id === slug) || null;
//   if (!listing) {
//     return { notFound: true };
//   }
//   return { props: { listing } };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  // For a dummy setup, we don't pre-render any paths
  // Real implementation might query a DB for all slugs
  return {
    paths: [],
    fallback: 'blocking', // or true, if you want to show a fallback UI
  };
};

export const getStaticProps: GetStaticProps<ListingPageProps> = async (context) => {
  const slug = context.params?.slug as string;
  // In a real scenario, fetch data based on slug
  // For this dummy version, we'll try to find it in the static data or return null
  const listing = MARKETPLACE_LISTINGS.find((l) => l.id === slug) || null;

  if (!listing) {
    return { notFound: true };
  }

  return {
    props: { listing },
    // revalidate: 60, // Optional: enable ISR
  };
};

export default ListingPage;
