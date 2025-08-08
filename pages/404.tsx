import Link from 'next/link';
import EnhancedCard from '../components/ui/EnhancedCard';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto">
      <EnhancedCard className="text-center py-12">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Try browsing talent or jobs.</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link href="/talent"><a className="underline">Browse Talent</a></Link>
          <span className="opacity-40">•</span>
          <Link href="/jobs"><a className="underline">Browse Jobs</a></Link>
        </div>
      </EnhancedCard>
    </div>
  );
}