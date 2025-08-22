import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found | Zion Tech Group" description="The page you're looking for doesn't exist." noIndex noindex />
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4">404</h1>
          <p className="text-gray-300 mb-8">Sorry, we couldn’t find that page.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors">
            Go back home
          </Link>
        </div>
      </section>
    </>
  );
}