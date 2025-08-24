import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
      <p className="opacity-80 mb-4">The page you are looking for does not exist.</p>
      <Link href="/"><a className="px-4 py-2 rounded-md bg-blue-600 text-white">Go Home</a></Link>
    </div>
  );
}