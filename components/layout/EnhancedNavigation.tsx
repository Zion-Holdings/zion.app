import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function EnhancedNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/">
            <a className="font-semibold text-lg">Zion</a>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/about"><a className="hover:opacity-80">About</a></Link>
            <Link href="/blog"><a className="hover:opacity-80">Blog</a></Link>
            <Link href="/contact"><a className="hover:opacity-80">Contact</a></Link>
          </div>
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}