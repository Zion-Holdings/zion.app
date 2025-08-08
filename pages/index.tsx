import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Zion OS</h1>
      <p className="text-gray-600 dark:text-gray-300">Launch a full Zion OS instance from a single control panel.</p>
      <Link href="/zion/init">
        <a className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Go to Genesis Deploy</a>
      </Link>
    </div>
  );
}