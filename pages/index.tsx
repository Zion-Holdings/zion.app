import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold text-white">Zion AI Marketplace</h1>
      <p className="text-slate-300 mt-2">Explore top-tier AI talent.</p>
      <div className="mt-4">
        <Link href="/talent"><a className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2 text-white">Browse Talent</a></Link>
      </div>
    </div>
  );
}