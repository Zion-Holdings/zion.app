import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization | Zion Tech Group',
  description: 'Cloud cost optimization services to reduce spend and improve efficiency.',
  robots: { index: false, follow: true },
};

export default function CloudCostRedirect() {
  redirect('/services/cloud-cost-optimization-platform/');
}