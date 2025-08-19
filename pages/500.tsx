import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | Zion Tech Group</title>
        <meta name="description" content="We're experiencing technical difficulties. Our autonomous systems are working to resolve this issue." />
        <meta property="og:title" content="500 - Server Error" />
        <meta property="og:description" content="We're experiencing technical difficulties." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-9xl font-extrabold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              500
            </h1>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Server Error
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Our autonomous systems have encountered an unexpected issue. 
              Don't worry - our AI agents are already working to resolve this.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-400">What's happening?</h3>
              <p className="text-white/70 text-sm">
                Our server encountered an internal error. This is unusual for our autonomous systems, 
                but our AI agents are actively investigating and will have it resolved shortly.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-green-400 mb-2">Status Update</h4>
              <p className="text-xs text-white/60">
                🤖 AI Agents: Investigating root cause<br/>
                🔧 Auto-recovery: In progress<br/>
                📊 System health: Being monitored
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-3 bg-gradient-to-r from-orange-400 to-red-400 text-white font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-200 transform hover:scale-105"
              >
                Try Again
              </button>
              <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                Return Home
              </Link>
            </div>

            <div className="text-sm text-white/50">
              <p>If this persists, please contact our support team at hello@zion.tech</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}