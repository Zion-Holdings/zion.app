import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold">Zion</h1>
      <p className="text-gray-600">Welcome.</p>
      <div className="mt-4">
        <Link href="/admin/jobs/syndication"><a className="text-indigo-600 underline">Go to Admin • Job Syndication</a></Link>
      </div>
    </div>
  );
}