import type { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => (
  <div className="py-16 text-center">
    <h1 className="text-3xl font-bold mb-2">Page not found</h1>
    <p className="text-gray-600 dark:text-gray-400 mb-4">The page you are looking for does not exist.</p>
    <Link href="/"><a className="text-blue-600 hover:underline">Go back home</a></Link>
  </div>
);

export default NotFound;