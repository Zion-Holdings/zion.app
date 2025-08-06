import Link from 'next/link';
import type { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white px-4 text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl mb-6 font-semibold">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-xl">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-2 px-6 rounded"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Custom404;
