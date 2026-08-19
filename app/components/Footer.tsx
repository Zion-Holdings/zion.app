// app/components/Footer.tsx
'use client';

import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'Services', href: '/services/', group: 'Services & Tech' },
  { label: 'AI Services', href: '/ai-services/', group: 'Services & Tech' },
  { label: 'Products', href: '/products/', group: 'Services & Tech' },
  { label: 'Solutions', href: '/solutions/', group: 'Services & Tech' },
  { label: 'Tools', href: '/tools/', group: 'Free Tools' },
  { label: 'AI Agent Dashboard', href: '/agents-monitoring/', group: 'Free Tools' },
  { label: 'Blog', href: '/blog/', group: 'Company & Trust' },
  { label: 'Use Cases', href: '/use-cases/', group: 'Company & Trust' },
  { label: 'Testimonials', href: '/testimonials/', group: 'Company & Trust' },
  { label: 'About', href: '/about/', group: 'Company & Trust' },
  { label: 'Contact', href: '/contact/', group: 'Company & Trust' },
  { label: 'FAQ', href: '/faq/', group: 'Legal & Resources' },
  { label: 'Privacy', href: '/privacy/', group: 'Legal & Resources' },
  { label: 'Terms', href: '/terms/', group: 'Legal & Resources' },
  { label: 'SLA', href: '/sla/', group: 'Legal & Resources' },
];

const FOOTER_COLUMNS = [
  { title: 'Services & Tech', links: FOOTER_LINKS.filter((l) => l.group === 'Services & Tech') },
  { title: 'Free Tools', links: FOOTER_LINKS.filter((l) => l.group === 'Free Tools') },
  { title: 'Company & Trust', links: FOOTER_LINKS.filter((l) => l.group === 'Company & Trust') },
  { title: 'Legal & Resources', links: FOOTER_LINKS.filter((l) => l.group === 'Legal & Resources') },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs uppercase font-semibold text-slate-500 tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm" role="menubar">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
          <Link
            href="/sitemap.xml"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
