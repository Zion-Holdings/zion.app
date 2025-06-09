import Marketplace, { MarketplaceProps } from '../../src/pages/Marketplace';
import type { GetStaticProps } from 'next'; // Changed import

export const getStaticProps: GetStaticProps<MarketplaceProps> = async () => {
  // const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  // const res = await fetch(`${appUrl}/api/marketplace/products?limit=20`);
  // const products = res.ok ? await res.json() : [];
  // For static export, API calls at build time need to be to an absolute URL if self-hosted,
  // or data should be sourced differently (e.g., local file, CMS).
  // Returning empty array as a placeholder.
  return { props: { products: [] } };
};

export default Marketplace;
