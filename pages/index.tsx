import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold">Zion App</h1>
      <p className="mt-2">Welcome. Explore the new contract builder:</p>
      <Link href="/contract-builder"><span className="text-blue-600 underline mt-3 inline-block">Open Contract Builder</span></Link>
    </main>
  );
}