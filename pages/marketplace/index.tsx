import Marketplace, { MarketplaceProps } from '../../src/pages/Marketplace';
import type { GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';

import { withStaticErrorHandling } from '@/utils/withErrorHandling';

const getStaticPropsImpl: GetStaticProps<MarketplaceProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!appUrl || appUrl.includes('localhost')) {
    console.warn(
      'NEXT_PUBLIC_APP_URL is not configured for production. Skipping marketplace product fetch.'
    );
    return { props: { products: [] }, revalidate: 60 };
  }

  const res = await fetch(`${appUrl}/api/marketplace/overview?limit=20`);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch marketplace products: ${res.status} ${errorText}`);
  }
  const products = await res.json();
  return { props: { products }, revalidate: 60 };
};

export const getStaticProps = withStaticErrorHandling(getStaticPropsImpl);

export default Marketplace;
