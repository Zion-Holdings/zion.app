import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold mb-4">Page Not Found</h1>
      <Link href="/"><a className="text-blue-600 underline">Back to home</a></Link>
    </div>
  );
}