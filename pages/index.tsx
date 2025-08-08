import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Zion</h1>
      <p>Welcome. Visit the org chart:</p>
      <Link className="text-indigo-600 underline" href="/team">/team</Link>
    </div>
  );
}