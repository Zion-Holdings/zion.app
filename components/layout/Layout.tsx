import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import FuturisticNavigation from './FuturisticNavigation';
import FuturisticFooter from './FuturisticFooter';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href}>
      <a className={`block px-3 py-2 rounded-md text-sm ${router.pathname === href ? 'bg-gray-900 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>{label}</a>
    </Link>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <FuturisticNavigation />
      <main className="pt-32 lg:pt-36">
        {children}
      </main>
      <FuturisticFooter />
    </div>
  );
}
