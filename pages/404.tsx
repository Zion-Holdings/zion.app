import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-semibold mb-3">404 - Page not found</h1>
      <Link href="/"><a className="text-blue-600 hover:underline">Go home</a></Link>
    </div>
  );
}