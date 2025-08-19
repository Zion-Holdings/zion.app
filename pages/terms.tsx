import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group's autonomous technology solutions and services." />
        <meta property="og:title" content="Terms of Service | Zion Tech Group" />
        <meta property="og:description" content="Terms of Service for our autonomous technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/80 mb-6">
                  Last updated: January 17, 2025
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">1. Acceptance of Terms</h2>
                <p className="text-white/80 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">2. Services Description</h2>
                <p className="text-white/80 mb-6">
                  Zion Tech Group provides autonomous technology solutions, AI automation services, cloud infrastructure, and related technology consulting services.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">3. Use of Services</h2>
                <p className="text-white/80 mb-6">
                  You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">4. Intellectual Property</h2>
                <p className="text-white/80 mb-6">
                  All content, features, and functionality of our services are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">5. Privacy Policy</h2>
                <p className="text-white/80 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">6. Limitation of Liability</h2>
                <p className="text-white/80 mb-6">
                  Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">7. Contact Information</h2>
                <p className="text-white/80 mb-6">
                  If you have any questions about these Terms of Service, please contact us through our website.
                </p>
              </div>
              
              <div className="text-center mt-8">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}