import { allServices } from '../data/servicesData';
import type { Service } from '../data/servicesData';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Platforms | Zion Tech Group',
  description: 'Six product families, ' + allServices.length + ' services — AI, IT, Cloud, Security, Data, and Automation platforms for enterprise.',
  alternates: { canonical: 'https://ziontechgroup.com/products' },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
