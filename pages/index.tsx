import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Welcome to Zion</h1>
      <p className="opacity-80">Explore our AI marketplace and tools.</p>
      <div>
        <Link href="/tokenomics"><a className="px-4 py-2 rounded-md bg-indigo-600 text-white">Open Whitepaper Generator</a></Link>
      </div>
    </div>
  );
}