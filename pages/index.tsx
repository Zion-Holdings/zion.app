import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Welcome to Zion</h1>
      <p className="opacity-80">Start by posting a job or browsing top talent.</p>
      <div className="flex gap-2">
        <Link href="/jobs/post"><a className="px-4 py-2 rounded-md bg-blue-600 text-white">Post a Job</a></Link>
        <Link href="/talent"><a className="px-4 py-2 rounded-md border">Browse Talent</a></Link>
        <Link href="/dashboard"><a className="px-4 py-2 rounded-md border">Dashboard</a></Link>
      </div>
    </div>
  );
}