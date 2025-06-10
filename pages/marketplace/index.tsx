import Marketplace, { MarketplaceProps } from '@/pages/Marketplace';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<MarketplaceProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${appUrl}/api/marketplace/products?limit=20`);
    const products = res.ok ? await res.json() : [];
    return { props: { products } };
  } catch (error) {
    console.error('Error fetching marketplace products:', error);
    return { props: { products: [] } };
  }
};

export default Marketplace;
