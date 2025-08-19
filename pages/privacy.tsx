import React from 'react';
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Privacy policy and data protection information for Zion Tech Group." />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Privacy policy and data protection information." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              How we collect, use, and protect your information
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
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Information We Collect</h2>
                <p className="text-white/80 mb-4">
                  We collect information you provide directly to us, such as when you contact us, subscribe to our newsletter, or use our services.
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication preferences</li>
                  <li>Website usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">How We Use Your Information</h2>
                <p className="text-white/80 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new features.
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates and marketing communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-400">Data Protection</h2>
                <p className="text-white/80 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Your Rights</h2>
                <p className="text-white/80 mb-4">
                  You have the right to access, correct, or delete your personal information, and to object to or restrict certain processing activities.
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Contact Us</h2>
                <p className="text-white/80 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us.
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