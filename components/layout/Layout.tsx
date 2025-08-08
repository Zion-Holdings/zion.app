import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href}>
      <a className={`block px-3 py-2 rounded-md text-sm ${router.pathname === href ? 'bg-gray-900 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>{label}</a>
    </Link>
  );

  return (
    <div className="min-h-[70vh] grid grid-cols-12 gap-6">
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4 h-max sticky top-20">
        <div className="mb-3 text-xs uppercase tracking-wide text-gray-500">Portals</div>
        <nav className="space-y-1">
          <NavLink href="/investors" label="Investor Portal" />
          <NavLink href="/franchise-portal" label="Franchise Portal" />
        </nav>
        <div className="mt-6 text-xs uppercase tracking-wide text-gray-500">Investors</div>
        <nav className="space-y-1">
          <NavLink href="/investors#deck" label="Pitch Deck" />
          <NavLink href="/investors#kpis" label="KPIs" />
          <NavLink href="/investors#downloads" label="Downloads" />
        </nav>
        <div className="mt-6 text-xs uppercase tracking-wide text-gray-500">Franchise</div>
        <nav className="space-y-1">
          <NavLink href="/franchise-portal#apply" label="Apply" />
          <NavLink href="/franchise-portal#toolkit" label="Toolkit" />
          <NavLink href="/franchise-portal#admin" label="Admin" />
        </nav>
      </aside>
      <main className="col-span-12 md:col-span-9 lg:col-span-10">
        {children}
      </main>
    </div>
  );
}