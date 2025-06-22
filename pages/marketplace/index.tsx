import Marketplace, { MarketplaceProps } from '../../src/pages/Marketplace';
import type { GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';

import { withStaticErrorHandling } from '@/utils/withErrorHandling';

const getStaticPropsImpl: GetStaticProps<MarketplaceProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const isBuildTime = process.env.NETLIFY || process.env.NODE_ENV === 'production' && !process.env.RUNTIME_ENVIRONMENT;

  // During build time or when APP_URL is not properly configured, return empty data
  if (!appUrl || appUrl.includes('localhost') || isBuildTime) {
    console.warn(
      'Build time or NEXT_PUBLIC_APP_URL not configured for production. Skipping marketplace product fetch.'
    );
    return { props: { products: [] }, revalidate: 60 };
  }

  try {
    const res = await fetch(`${appUrl}/api/marketplace/overview?limit=20`);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch marketplace products: ${res.status} ${errorText}`);
    }
    const products = await res.json();
    return { props: { products }, revalidate: 60 };
  } catch (error: any) {
    Sentry.captureException(error);
    console.error('Marketplace fetch error during static generation:', error.message);
    return { props: { products: [] }, revalidate: 60 };
  }
};

export const getStaticProps = withStaticErrorHandling(getStaticPropsImpl);

export default Marketplace;
