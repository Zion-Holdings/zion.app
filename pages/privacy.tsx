import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information and data privacy practices." />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Data privacy and protection practices." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-white/60 mt-4">
              Last updated: January 17, 2025
            </p>
          </section>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Introduction</h2>
              <p className="text-white/80 mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-white/70">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Personal Information</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• Name and contact information (email, phone number)</li>
                    <li>• Company and job title information</li>
                    <li>• Communication preferences</li>
                    <li>• Feedback and survey responses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Technical Information</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Pages visited and time spent</li>
                    <li>• Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-green-400">How We Use Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Service Delivery</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• Provide and maintain our services</li>
                    <li>• Process your requests and inquiries</li>
                    <li>• Send important service updates</li>
                    <li>• Improve our services and user experience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Communication</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• Respond to your questions and support requests</li>
                    <li>• Send newsletters and marketing communications (with consent)</li>
                    <li>• Provide customer service and support</li>
                    <li>• Conduct surveys and research</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Information Sharing and Disclosure</h2>
              <p className="text-white/80 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="text-white/70 space-y-2 ml-4">
                <li>• <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                <li>• <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li>• <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li>• <strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Data Security</h2>
              <p className="text-white/80 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Security Measures</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• Encryption of data in transit and at rest</li>
                    <li>• Regular security assessments and updates</li>
                    <li>• Access controls and authentication</li>
                    <li>• Monitoring and logging of access</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Data Retention</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• We retain your information only as long as necessary</li>
                    <li>• Data is deleted when no longer needed</li>
                    <li>• Retention periods vary by data type</li>
                    <li>• You can request data deletion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Your Privacy Rights</h2>
              <p className="text-white/80 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Access and Control</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• Access your personal information</li>
                    <li>• Update or correct your information</li>
                    <li>• Request deletion of your data</li>
                    <li>• Object to processing of your data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Communication Preferences</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• Opt-out of marketing communications</li>
                    <li>• Manage cookie preferences</li>
                    <li>• Control data sharing settings</li>
                    <li>• Request data portability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Cookies and Tracking Technologies</h2>
              <p className="text-white/80 mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Types of Cookies</h3>
                  <ul className="text-white/70 space-y-1 ml-4">
                    <li>• <strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li>• <strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li>• <strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                  </ul>
                </div>
                <p className="text-white/70">
                  You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Contact Us</h2>
              <p className="text-white/80 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Contact Details</h3>
                  <ul className="text-white/70 space-y-1">
                    <li>• Email: privacy@zion.tech</li>
                    <li>• Phone: +1 (555) 123-4567</li>
                    <li>• Address: Zion Tech Group, Innovation District</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Data Protection Officer</h3>
                  <p className="text-white/70">
                    For data protection inquiries, contact our Data Protection Officer at dpo@zion.tech
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 transform hover:scale-105">
                  Contact Support
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}