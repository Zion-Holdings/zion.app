import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Zion Tech Group</title>
        <meta name="description" content="Terms of service and usage conditions for Zion Tech Group services." />
        <meta property="og:title" content="Terms of Service — Zion Tech Group" />
        <meta property="og:description" content="Terms of service and usage conditions for Zion Tech Group services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">1. Acceptance of Terms</h2>
              <p className="text-white/80 mb-6">
                By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-fuchsia-400 mb-6">2. Use License</h2>
              <p className="text-white/80 mb-6">
                Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-bold text-purple-400 mb-6">3. Disclaimer</h2>
              <p className="text-white/80 mb-6">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-yellow-400 mb-6">4. Limitations</h2>
              <p className="text-white/80 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website.
              </p>

              <h2 className="text-2xl font-bold text-green-400 mb-6">5. Revisions and Errata</h2>
              <p className="text-white/80 mb-6">
                The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current.
              </p>

              <h2 className="text-2xl font-bold text-blue-400 mb-6">6. Links</h2>
              <p className="text-white/80 mb-6">
                Zion Tech Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site.
              </p>

              <h2 className="text-2xl font-bold text-indigo-400 mb-6">7. Site Terms of Use Modifications</h2>
              <p className="text-white/80 mb-6">
                Zion Tech Group may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>

              <h2 className="text-2xl font-bold text-red-400 mb-6">8. Governing Law</h2>
              <p className="text-white/80 mb-6">
                Any claim relating to Zion Tech Group's website shall be governed by the laws of the State of California without regard to its conflict of law provisions.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12">
            <p className="text-white/70 mb-4">Questions about these terms?</p>
            <Link href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}