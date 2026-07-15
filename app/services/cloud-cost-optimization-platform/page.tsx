import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization Platform | Zion Tech Group',
  description: 'Cloud cost optimization platform for multi-cloud spend reduction.',
  robots: { index: false, follow: true },
};

export default function CloudCostRedirect() {
  redirect('/services/cloud-cost-optimization-platform');
}
