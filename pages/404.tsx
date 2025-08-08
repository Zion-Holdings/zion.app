import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 opacity-70">The page you are looking for does not exist.</p>
      <Link href="/"><a className="mt-4 underline">Go home</a></Link>
    </div>
  );
}