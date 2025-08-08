import Link from 'next/link';
import { Home, Search, PlusCircle, Mail, LayoutGrid } from 'lucide-react';

export default function MobileTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="max-w-screen-md mx-auto grid grid-cols-5 gap-1 px-2 py-1">
        <Link href="/" passHref>
          <a className="flex flex-col items-center justify-center py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
            <Home className="h-5 w-5" />
            <span className="mt-0.5">Home</span>
          </a>
        </Link>
        <Link href="/browse" passHref>
          <a className="flex flex-col items-center justify-center py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
            <Search className="h-5 w-5" />
            <span className="mt-0.5">Browse</span>
          </a>
        </Link>
        <Link href="/post" passHref>
          <a className="flex flex-col items-center justify-center py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
            <PlusCircle className="h-6 w-6" />
            <span className="mt-0.5">Post</span>
          </a>
        </Link>
        <Link href="/inbox" passHref>
          <a className="flex flex-col items-center justify-center py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
            <Mail className="h-5 w-5" />
            <span className="mt-0.5">Inbox</span>
          </a>
        </Link>
        <Link href="/dashboard" passHref>
          <a className="flex flex-col items-center justify-center py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
            <LayoutGrid className="h-5 w-5" />
            <span className="mt-0.5">Dashboard</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}