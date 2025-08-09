import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Zion AI Marketplace</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Discover AI talent and leverage autonomous cloud automations.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="font-medium">Browse Talent</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Explore expert profiles and request to hire.</p>
          <div className="mt-3"><Link href="/talent"><a className="text-indigo-600 hover:underline">Open Talent Directory</a></Link></div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="font-medium">Your Favorites</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Save profiles privately and review later.</p>
          <div className="mt-3"><Link href="/favorites"><a className="text-indigo-600 hover:underline">View Favorites</a></Link></div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="font-medium">Autonomous Automations</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Cloud agents run continuously and sync insights.</p>
          <div className="mt-3"><Link href="/automation"><a className="text-indigo-600 hover:underline">Visit Automation Hub</a></Link></div>
        </div>
      </div>
    </div>
  );
}