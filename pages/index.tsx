import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Zion AI Marketplace</h1>
      <p className="text-gray-600">Demo: Contract confirmation and project kickoff flow</p>
      <div className="flex gap-3">
        <Link href="/client/hire" className="px-3 py-2 rounded bg-indigo-600 text-white">Client: Hire</Link>
        <Link href="/dashboard/client" className="px-3 py-2 rounded border">Client Dashboard</Link>
        <Link href="/dashboard/talent" className="px-3 py-2 rounded border">Talent Dashboard</Link>
      </div>
    </div>
  );
}