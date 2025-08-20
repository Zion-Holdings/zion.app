import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Autonomous Innovation Hub" />
      </Head>
      
      <Layout>
        <div className="relative min-h-screen py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="absolute inset-0 bg-dots opacity-5" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
                Please read these terms carefully before using our services.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="glass rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">2. Use License</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group&apos;s website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">3. Disclaimer</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The materials on Zion Tech Group&apos;s website are provided on an &apos;as is&apos; basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">4. Limitations</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group&apos;s website.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">5. Revisions and Errata</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The materials appearing on Zion Tech Group&apos;s website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">6. Links</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Zion Tech Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">7. Site Terms of Use Modifications</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Zion Tech Group may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">8. Governing Law</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Any claim relating to Zion Tech Group&apos;s website shall be governed by the laws of the State of California without regard to its conflict of law provisions.
                </p>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}