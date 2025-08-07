import Link from 'next/link';
import type { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page not found</p>
        <Link href="/" className="text-blue-500 hover:text-blue-400">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
