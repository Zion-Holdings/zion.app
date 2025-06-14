import Marketplace, { MarketplaceProps } from '@/pages/Marketplace';
import type { GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';

export const getStaticProps: GetStaticProps<MarketplaceProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${appUrl}/api/marketplace/products?limit=20`);
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
    throw error;
  }
};

export default Marketplace;
