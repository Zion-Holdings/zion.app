import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Zion AI Marketplace</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Hire vetted AI and IT professionals. Browse profiles, filter by skills, and connect instantly.</p>
        <div className="mt-8">
          <Link href="/talent"><a className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:opacity-90 transition">Browse Talent</a></Link>
        </div>
      </div>
    </div>
  );
}