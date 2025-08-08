import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to Zion</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Explore products, services, and our learning platform.</p>
      <Link href="/academy"><a className="text-blue-600 underline">Go to Zion Academy</a></Link>
    </div>
  );
}