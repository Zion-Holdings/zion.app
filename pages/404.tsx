import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      <div className="mt-6">
        <Link href="/"><a className="underline">Go home</a></Link>
      </div>
    </div>
  );
}