import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Welcome</h1>
      <p className="text-sm opacity-80 mb-4">Explore our IT service providers and solutions.</p>
      <Link href="/providers"><a className="enhanced-button enhanced-button-primary">Browse Providers</a></Link>
    </div>
  );
}