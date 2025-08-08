import Link from 'next/link';
import EnhancedCard from '../components/ui/EnhancedCard';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <EnhancedCard>
        <h1 className="text-xl font-semibold">Zion AI Marketplace</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Find top AI talent and AI jobs in one place.</p>
      </EnhancedCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/talent"><a><EnhancedCard><div className="font-medium">Browse Talent →</div></EnhancedCard></a></Link>
        <Link href="/jobs"><a><EnhancedCard><div className="font-medium">Browse Jobs →</div></EnhancedCard></a></Link>
      </div>

      <EnhancedCard>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/dashboard/talent"><a className="underline">Talent Dashboard</a></Link>
          <Link href="/dashboard/client"><a className="underline">Client Dashboard</a></Link>
        </div>
      </EnhancedCard>
    </div>
  );
}