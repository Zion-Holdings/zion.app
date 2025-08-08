import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Welcome</h1>
      <p className="text-gray-700">Explore our curated network of experts.</p>
      <div className="flex items-center gap-3">
        <Link href="/talent"><a className="px-4 py-2 rounded bg-black text-white">Browse Talent</a></Link>
        <Link href="/favorites"><a className="px-4 py-2 rounded bg-gray-100">Your Favorites</a></Link>
      </div>
    </div>
  );
}