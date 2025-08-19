import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and understand the conditions for using our services and website." />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Terms and conditions for using our services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Please read these terms carefully before using our services or website.
            </p>
            <p className="text-sm text-white/50 mt-4">
              Last updated: January 17, 2025
            </p>
          </section>

          <section className="mx-auto max-w-4xl space-y-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Acceptance of Terms</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                <p className="text-sm">These terms apply to all visitors, users, and others who access or use our services.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Description of Service</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">Zion Tech Group provides:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>AI development and consulting services</li>
                  <li>Cloud automation and infrastructure solutions</li>
                  <li>Technology consulting and strategy</li>
                  <li>Content generation and optimization services</li>
                  <li>Educational resources and training materials</li>
                </ul>
                <p className="text-sm mt-4">We reserve the right to modify, suspend, or discontinue any part of our services at any time.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">User Responsibilities</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not interfere with the proper functioning of our services</li>
                  <li>Report any security vulnerabilities you discover</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Intellectual Property</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws.</p>
                <p className="text-sm">You may not reproduce, distribute, modify, or create derivative works without our explicit written permission.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Limitation of Liability</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Your use or inability to use our services</li>
                  <li>Any unauthorized access to or use of our servers</li>
                  <li>Any interruption or cessation of transmission to or from our services</li>
                  <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Service Availability</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">While we strive to maintain high availability of our services, we do not guarantee that our services will be available 100% of the time. We may need to perform maintenance, updates, or other operations that could temporarily affect service availability.</p>
                <p className="text-sm">Our autonomous systems work continuously to maintain optimal performance and uptime.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Termination</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                <p className="text-sm">Upon termination, your right to use our services will cease immediately.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">Governing Law</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">These Terms shall be interpreted and governed by the laws of the jurisdiction in which Zion Tech Group operates, without regard to its conflict of law provisions.</p>
                <p className="text-sm">Any disputes arising from these terms will be resolved through appropriate legal channels.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-pink-400">Changes to Terms</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</p>
                <p className="text-sm">What constitutes a material change will be determined at our sole discretion.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Contact Information</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong>Email:</strong> legal@zion.tech<br/>
                    <strong>Address:</strong> Zion Tech Group, Global Operations<br/>
                    <strong>Response Time:</strong> We aim to respond within 48 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-white/50">
              <p>By using our services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}