import Link from 'next/link';

export default function UseCases() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Zion Use Cases</h1>
      <p className="text-sm text-gray-600">DAO Phase 2: Governance is now available.</p>
      <div>
        <Link href="/dao"><span className="px-3 py-2 rounded bg-blue-600 text-white cursor-pointer">Open Governance</span></Link>
      </div>
    </div>
  );
}