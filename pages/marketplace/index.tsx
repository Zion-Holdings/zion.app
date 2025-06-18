import Marketplace, { MarketplaceProps } from '../../src/pages/Marketplace';
import type { GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';

export const getStaticProps: GetStaticProps<MarketplaceProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!appUrl || appUrl.includes('localhost')) {
    console.warn(
      'NEXT_PUBLIC_APP_URL is not configured for production. Skipping marketplace product fetch.'
    );
    return { props: { products: [] }, revalidate: 60 };
  }
  try {
    const res = await fetch(`${appUrl}/api/marketplace/overview?limit=20`);
    if (!res.ok) {
      const errorText = await res.text();
      console.error(
        `API error fetching marketplace products: ${res.status} ${res.statusText}`,
        errorText
      );
      throw new Error(`Failed to fetch marketplace products: ${res.status} ${errorText}`);
    }
    const products = await res.json();
    return { props: { products }, revalidate: 60 };
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error in getStaticProps for marketplace index:', error);
    // Always allow build to succeed with empty data if fetch fails
    console.warn('getStaticProps failed, returning empty products');
    return { props: { products: [] } };
  }
};

export default Marketplace;
