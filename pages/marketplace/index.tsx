import Marketplace, { MarketplaceProps } from '../../src/pages/Marketplace';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<MarketplaceProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const res = await fetch(`${appUrl}/api/marketplace/products?limit=20`);
  const products = res.ok ? await res.json() : [];
  return { props: { products } };
};

export default Marketplace;
