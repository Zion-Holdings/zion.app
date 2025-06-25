import React from 'react';
import Link from 'next/link';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { title: 'Products', href: '/admin/products' },
  { title: 'Services', href: '/admin/services' },
  { title: 'Users', href: '/admin/users' },
  { title: 'Reports', href: '/admin/reports' },
  { title: 'Moderation', href: '/admin/moderation' },
  { title: 'Zion Brain', href: '/admin/zion-brain' },
];

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-6 space-y-2 bg-muted/50">
        <h2 className="font-semibold text-lg mb-4">Back Office</h2>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}

export default AdminLayout;
