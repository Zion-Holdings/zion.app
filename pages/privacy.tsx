import React from 'react';
import Head from 'next/head';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Privacy Policy - Zion App</title>
        <meta name="description" content="Privacy policy and data protection information" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we collect, use, and protect your information
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Last updated: January 17, 2025
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (name, email, organization)</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                  <li>Technical information about your device and connection</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Information Sharing
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Data Security
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  These measures include encryption, secure servers, and regular security assessments. 
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Your Rights
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Contact Us
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-slate-800 rounded-lg p-4">
                  <p className="text-white font-medium">Zion App Privacy Team</p>
                  <p>Email: privacy@zion.app</p>
                  <p>Address: [Your Business Address]</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}