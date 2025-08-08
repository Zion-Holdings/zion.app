import Link from 'next/link';
export default function Home() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Welcome to Zion</h1>
      <Link href="/governance"><a className="underline">Go to Governance</a></Link>
    </div>
  );
}