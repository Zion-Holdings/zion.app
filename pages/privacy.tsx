import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your data in accordance with global privacy standards." />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Privacy and data protection information." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect and handle your information.
            </p>
            <p className="text-sm text-white/50 mt-4">
              Last updated: January 17, 2025
            </p>
          </section>

          <section className="mx-auto max-w-4xl space-y-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Information We Collect</h2>
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Personal Information</h3>
                  <p className="text-sm">We may collect personal information such as your name, email address, phone number, and company information when you:</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Contact us through our website</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request a quote or consultation</li>
                    <li>Use our services</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Technical Information</h3>
                  <p className="text-sm">We automatically collect certain technical information including:</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage patterns and analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">How We Use Your Information</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you relevant updates and newsletters</li>
                  <li>Analyze and improve our website performance</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Information Sharing</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Data Security</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Your Rights</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">You have the right to:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Cookies and Tracking</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage</li>
                  <li>Improve user experience</li>
                  <li>Provide personalized content</li>
                </ul>
                <p className="text-sm mt-4">You can control cookie settings through your browser preferences.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Contact Us</h2>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong>Email:</strong> privacy@zion.tech<br/>
                    <strong>Address:</strong> Zion Tech Group, Global Operations<br/>
                    <strong>Response Time:</strong> We aim to respond within 48 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-white/50">
              <p>This privacy policy is effective as of January 17, 2025 and will remain in effect except with respect to any changes in its provisions in the future.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}