import React from 'react';
import Head from 'next/head';

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
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-xl text-white/80">
                Last updated: January 17, 2025
              </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">1. Acceptance of Terms</h2>
                <p className="text-white/80 mb-4">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-fuchsia-400">2. Description of Service</h2>
                <p className="text-white/80 mb-4">
                  Zion Tech Group provides autonomous innovation solutions, AI development services, cloud infrastructure, and technology consulting. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-white/80 ml-6 mb-4">
                  <li>Artificial Intelligence Development</li>
                  <li>Cloud Automation Systems</li>
                  <li>Technology Consulting</li>
                  <li>Infrastructure Management</li>
                  <li>Autonomous Systems</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">3. User Responsibilities</h2>
                <p className="text-white/80 mb-4">
                  Users are responsible for:
                </p>
                <ul className="list-disc list-inside text-white/80 ml-6 mb-4">
                  <li>Providing accurate information</li>
                  <li>Maintaining security of their accounts</li>
                  <li>Complying with applicable laws and regulations</li>
                  <li>Not misusing our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Intellectual Property</h2>
                <p className="text-white/80 mb-4">
                  All content, features, and functionality of our services are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">5. Privacy and Data Protection</h2>
                <p className="text-white/80 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Limitation of Liability</h2>
                <p className="text-white/80 mb-4">
                  Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-red-400">7. Termination</h2>
                <p className="text-white/80 mb-4">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-400">8. Changes to Terms</h2>
                <p className="text-white/80 mb-4">
                  We reserve the right to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-teal-400">9. Contact Information</h2>
                <p className="text-white/80 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <p className="text-white/90">
                    <strong>Email:</strong> legal@zion.tech<br />
                    <strong>Address:</strong> Zion Tech Group, Innovation District<br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </section>
            </div>

            <div className="text-center mt-12">
              <a href="/" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                Return to Homepage
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}