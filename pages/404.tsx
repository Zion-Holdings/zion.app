import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found — Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Animation */}
            <div className="mb-8">
              <div className="text-9xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
                404
              </div>
              <div className="text-6xl mb-6">🤖</div>
            </div>
            
            {/* Error Message */}
            <h1 className="text-4xl font-bold mb-6 text-white">
              Page Not Found
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto">
              The autonomous system couldn't locate the page you're looking for. 
              It might have been moved, deleted, or never existed.
            </p>
            
            {/* Helpful Links */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-cyan-400">
                Here are some helpful links:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <Link href="/" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/20 transition-all">
                  <div className="text-2xl mb-2">🏠</div>
                  <div className="font-semibold">Homepage</div>
                </Link>
                <Link href="/about" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/20 transition-all">
                  <div className="text-2xl mb-2">ℹ️</div>
                  <div className="font-semibold">About Us</div>
                </Link>
                <Link href="/automation" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/20 transition-all">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="font-semibold">Automation</div>
                </Link>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/20 transition-all">
                  <div className="text-2xl mb-2">📧</div>
                  <div className="font-semibold">Contact</div>
                </Link>
              </div>
            </div>
            
            {/* Search Suggestion */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 mb-8">
              <h3 className="text-lg font-semibold mb-3 text-fuchsia-400">
                Can't find what you're looking for?
              </h3>
              <p className="text-white/70 mb-4">
                Try searching our site or browse our main sections to find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                  Browse Blog
                </Link>
                <Link href="/reports" className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  View Reports
                </Link>
              </div>
            </div>
            
            {/* Report Issue */}
            <div className="text-center">
              <p className="text-white/60 mb-4">
                Found a broken link? Help us improve by reporting it.
              </p>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Report Broken Link →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}