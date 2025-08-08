import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">404</h1>
      <p>Page not found.</p>
      <Link href="/" className="text-blue-600 hover:underline">Go home</Link>
    </div>
  );
}