import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Zion AI Marketplace</h1>
      <p className="text-gray-600 dark:text-gray-300">Discover and hire top AI talent.</p>
      <Link href="/talent" className="enhanced-button enhanced-button-primary inline-block">Browse Talent</Link>
    </div>
  );
}