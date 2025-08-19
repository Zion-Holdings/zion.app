import React from 'react';
import Head from 'next/head';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Terms of service and usage conditions for Zion Tech Group." />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Terms of service and usage conditions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Terms and conditions for using our services and website
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                About
              </a>
              <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-4xl">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Acceptance of Terms</h2>
                <p className="text-white/80 mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-white/70">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Use License</h2>
                <p className="text-white/80 mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-white/80 mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or other proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-400">Service Description</h2>
                <p className="text-white/80 mb-4">
                  Zion Tech Group provides AI development, automation services, and technology consulting. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>AI and machine learning development</li>
                  <li>Automation system design and implementation</li>
                  <li>Cloud infrastructure and DevOps services</li>
                  <li>Technology consulting and strategy</li>
                  <li>Performance monitoring and optimization</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Intellectual Property</h2>
                <p className="text-white/80 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors.
                </p>
                <p className="text-white/70">
                  The Service is protected by copyright, trademark, and other laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Limitation of Liability</h2>
                <p className="text-white/80 mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
                <p className="text-white/70">
                  This includes without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Contact Information</h2>
                <p className="text-white/80 mb-4">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <div className="text-center">
                  <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}