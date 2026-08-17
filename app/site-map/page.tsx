import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import Section from '@/components/Section';

export const metadata = {
  title: 'Site Map | Zion Tech Group',
  description: 'Complete site map of Zion Tech Group.',
  alternates: { canonical: '/site-map' },
};

const sections = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Consultation', href: '/consultation' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'All Solutions', href: '/solutions' },
      { name: 'Healthcare', href: '/solutions/healthcare' },
      { name: 'Financial Services', href: '/solutions/financial-services' },
      { name: 'Manufacturing', href: '/solutions/manufacturing-industrial' },
      { name: 'E-Commerce', href: '/solutions/ecommerce-retail' },
      { name: 'Technology & SaaS', href: '/solutions/technology-and-saas' },
      { name: 'Logistics', href: '/solutions/logistics-supply-chain' },
      { name: 'Government', href: '/solutions/government-and-public-sector' },
      { name: 'Insurance', href: '/solutions/insurance' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'All Services', href: '/services' },
      { name: 'AI Services', href: '/ai-services' },
      { name: 'Products', href: '/products' },
      { name: 'Micro SAAS', href: '/micro-saas-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Cloud Services', href: '/cloud-services' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'Data Analytics', href: '/data-services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Industries', href: '/industries' },
      { name: 'Free Tools Hub', href: '/free-tools-hub' },
      { name: 'Free Resources', href: '/free-resources' },
      { name: 'AI Lab', href: '/ai-lab' },
      { name: 'Documentation', href: '/docs' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Help Center', href: '/help' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Partners', href: '/partners' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Community', href: '/community' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'SLA', href: '/sla' },
      { name: 'Changelog', href: '/changelog' },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageWrapper>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Site Map</h1>
          <p className="mt-4 text-lg text-slate-300">Complete overview of all pages on ziontechgroup.com</p>
        </div>
      </PageWrapper>

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-purple-300 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}