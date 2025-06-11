import Marketplace, { MarketplaceProps } from '@/pages/Marketplace';
import type { GetServerSideProps } from 'next';
import * as Sentry from '@sentry/nextjs';

export const getServerSideProps: GetServerSideProps<MarketplaceProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${appUrl}/api/marketplace/products?limit=20`);
    if (!res.ok) {
      // Log and throw an error if the response is not OK
      // This ensures that Sentry captures issues with the API request.
      const errorText = await res.text();
      console.error(`API error fetching marketplace products: ${res.status} ${res.statusText}`, errorText);
      throw new Error(`Failed to fetch marketplace products: ${res.status} ${errorText}`);
    }
    const products = await res.json();
    return { props: { products } };
  } catch (error) {
    Sentry.captureException(error);
    // Log the error locally if needed, then re-throw for Sentry HOC to capture
    console.error('Error in getServerSideProps for marketplace index:', error);
    throw error;
  }
};

export default Marketplace;
