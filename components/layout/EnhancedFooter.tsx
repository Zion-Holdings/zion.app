import Link from 'next/link';

export default function EnhancedFooter() {
  return (
    <>
      <div className="border-t border-gray-200 dark:border-gray-800 text-sm py-6 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Zion Tech Solutions</p>
          <div className="opacity-70">All rights reserved.</div>
        </div>
      </div>
      {/* Sticky mobile action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 md:hidden">
        <div className="max-w-screen-sm mx-auto px-4">
          <nav className="grid grid-cols-3 gap-2 py-2 text-sm">
            <Link href="/jobs/post">
              <a className="flex flex-col items-center justify-center py-2 rounded-md active:scale-[0.98] transition">
                <span className="text-xs">Post Job</span>
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="flex flex-col items-center justify-center py-2 rounded-md active:scale-[0.98] transition">
                <span className="text-xs">Dashboard</span>
              </a>
            </Link>
            <Link href="/messages">
              <a className="flex flex-col items-center justify-center py-2 rounded-md active:scale-[0.98] transition">
                <span className="text-xs">Messages</span>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}