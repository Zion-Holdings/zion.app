import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Zion</h1>
      <p className="text-gray-600 dark:text-gray-300">Explore our portals:</p>
      <div className="flex gap-4">
        <Link href="/investors"><a className="px-4 py-2 rounded bg-gray-900 text-white">Investor Portal</a></Link>
        <Link href="/franchise-portal"><a className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800">Franchise Portal</a></Link>
      </div>
    </div>
  );
}