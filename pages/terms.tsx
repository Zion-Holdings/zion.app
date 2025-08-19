import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Zion Tech Group</title>
        <meta name="description" content="Terms of Service and legal agreements for Zion Tech Group services." />
        <meta property="og:title" content="Terms of Service — Zion Tech Group" />
        <meta property="og:description" content="Terms of Service and legal agreements for Zion Tech Group services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-white/80">Last updated: January 17, 2025</p>
          </div>

          {/* Terms Content */}
          <div className="prose prose-invert max-w-4xl mx-auto">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">1. Acceptance of Terms</h2>
              <p className="text-white/80 mb-4">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">2. Description of Service</h2>
              <p className="text-white/80 mb-4">
                Zion Tech Group provides autonomous cloud automation, AI development, and technology consulting services. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-white/80 ml-6 mb-4">
                <li>Cloud infrastructure automation</li>
                <li>AI and machine learning solutions</li>
                <li>Technology consulting and advisory</li>
                <li>Autonomous system development</li>
                <li>Performance optimization services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">3. User Responsibilities</h2>
              <p className="text-white/80 mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-white/80 ml-6 mb-4">
                <li>Providing accurate information</li>
                <li>Maintaining the security of their accounts</li>
                <li>Complying with applicable laws and regulations</li>
                <li>Not interfering with our services or systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">4. Intellectual Property</h2>
              <p className="text-white/80 mb-4">
                All content, features, and functionality of our services are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">5. Privacy and Data Protection</h2>
              <p className="text-white/80 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">6. Limitation of Liability</h2>
              <p className="text-white/80 mb-4">
                Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">7. Termination</h2>
              <p className="text-white/80 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">8. Changes to Terms</h2>
              <p className="text-white/80 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">9. Governing Law</h2>
              <p className="text-white/80 mb-4">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zion Tech Group operates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">10. Contact Information</h2>
              <p className="text-white/80 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-white/90">Zion Tech Group</p>
                <p className="text-white/80">Email: legal@zion.tech</p>
                <p className="text-white/80">Website: <a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact Page</a></p>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-colors mr-4">
              Contact Us
            </Link>
            <Link href="/privacy" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
              Privacy Policy
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}