import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage." />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-9xl font-extrabold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Page Not Found
            </h2>
            <p className="text-xl text-white/70 mb-8">
              The page you're looking for seems to have wandered off into the digital void. 
              Our AI systems are searching for it, but it might be exploring autonomous territory.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">What happened?</h3>
              <p className="text-white/70 text-sm">
                This could be due to a broken link, a page that was moved or deleted, 
                or perhaps our autonomous systems are still generating this content.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105">
                Return Home
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Contact Support
              </Link>
            </div>

            <div className="text-sm text-white/50">
              <p>If you believe this is an error, please let us know at hello@zion.tech</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}