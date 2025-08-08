import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const startYRef = useRef<number | null>(null);
  const deltaYRef = useRef<number>(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    startYRef.current = e.touches[0].clientY;
  }

  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (startYRef.current == null) return;
    deltaYRef.current = e.touches[0].clientY - startYRef.current;
  }

  function onTouchEnd() {
    if (deltaYRef.current > 80) onClose();
    startYRef.current = null;
    deltaYRef.current = 0;
  }

  return (
    <div className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 rounded-t-2xl shadow-xl transition-transform duration-300 ${open ? 'translate-y-0' : 'translate-y-full'}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-neutral-800">
          <span className="font-medium">Menu</span>
          <button aria-label="Close menu" onClick={onClose} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-2" style={{ maxHeight: 'calc(90vh - 56px)' }}>
          <ul className="space-y-1 text-base">
            <li><Link href="/"><a className="block px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">Home</a></Link></li>
            <li><Link href="/browse"><a className="block px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">Browse</a></Link></li>
            <li><Link href="/post"><a className="block px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">Post a Job</a></Link></li>
            <li><Link href="/inbox"><a className="block px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">Inbox</a></Link></li>
            <li><Link href="/dashboard"><a className="block px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">Dashboard</a></Link></li>
            <li className="pt-2 border-t border-gray-200 dark:border-neutral-800"><Link href="/about"><a className="block px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">About</a></Link></li>
            <li><Link href="/blog"><a className="block px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">Blog</a></Link></li>
            <li><Link href="/contact"><a className="block px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800">Contact</a></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}