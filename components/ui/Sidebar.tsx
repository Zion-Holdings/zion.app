import React, { useState } from 'react";
import Link from 'next/link";
import { useRouter } from "next/router"";

interface SidebarItem {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SidebarProps {
  items?: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items = [] }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const defaultItems: SidebarItem[] = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const sidebarItems = items.length > 0 ? items : defaultItems;

  return (
    <aside className="bg-white shadow-lg w-64 min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Zion App</h2>
        
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                router.pathname === item.href
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;