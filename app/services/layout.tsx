import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise AI & IT Services | Zion Tech Group',
  description: 'Browse AI, IT, cloud, security, data, and automation services.',
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* Mobile Sticky CTA for Service Pages */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/30 p-4 shadow-2xl transition-transform duration-300">
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
          >
            💡 Book a Free Strategy Session →
            <span className="hidden sm:inline">Visit /consulting/</span>
          </Link>
          <a
            href="tel:+13024640950"
            className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-700 transition-all"
          >
            ☎ Call
          </a>
        </div>
      </div>
    </>
  );
}