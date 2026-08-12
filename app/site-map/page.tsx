import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Site Map — Zion Tech Group',
  description: 'Complete site map of Zion Tech Group. Find all pages across services, tools, industries, blog, and company resources.',
  alternates: { canonical: '/site-map/' },
};

export default function SiteMapPage() {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about/' },
        { name: 'Contact', href: '/contact/' },
        { name: 'Consultation', href: '/contact/' },
        { name: 'Careers', href: '/careers/' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'All Solutions', href: '/services/' },
        { name: 'Healthcare', href: '/industries/healthcare/' },
        { name: 'Financial Services', href: '/industries/finance/' },
        { name: 'Retail & E-Commerce', href: '/industries/retail/' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'All Services', href: '/services/' },
        { name: 'AI Services', href: '/ai-automation/' },
        { name: 'Managed IT', href: '/services/' },
        { name: 'Cloud Services', href: '/services/' },
        { name: 'Cybersecurity', href: '/services/' },
        { name: 'Data Analytics', href: '/services/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog/' },
        { name: 'Industries', href: '/industries/' },
        { name: 'Free Tools', href: '/tools/' },
        { name: 'AI Lab', href: '/ai-lab/' },
        { name: 'Documentation', href: '/docs/' },
        { name: 'FAQ', href: '/help/' },
        { name: 'Help Center', href: '/help/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'Partners', href: '/partners/' },
        { name: 'Testimonials', href: '/about/' },
        { name: 'Terms of Service', href: '/terms/' },
        { name: 'Privacy Policy', href: '/privacy/' },
        { name: 'Cookie Policy', href: '/cookies/' },
        { name: 'SLA', href: '/sla/' },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Site Map</h1>
          <p className="mt-4 text-lg text-slate-300">Complete overview of all pages on ziontechgroup.com</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  );
}
