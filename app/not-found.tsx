'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl font-bold text-cyan-500 mb-8">404</div>
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}