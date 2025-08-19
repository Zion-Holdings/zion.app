import React from 'react';
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — Zion Tech Group</title>
        <meta name="description" content="Terms of service and usage agreement for Zion Tech Group's autonomous systems and services." />
        <meta property="og:title" content="Terms of Service — Zion Tech Group" />
        <meta property="og:description" content="Terms of service and usage agreement for Zion Tech Group's autonomous systems and services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Please read these terms carefully before using our autonomous systems and services.
            </p>
            <p className="text-sm text-white/60 mt-4">Last updated: January 2025</p>
          </section>

          <div className="max-w-4xl mx-auto">
            {/* Acceptance of Terms */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">1. Acceptance of Terms</h2>
              <p className="text-white/80 mb-4">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-white/80">
                These terms apply to all visitors, users, and others who access or use our autonomous systems, automation services, 
                and cloud infrastructure solutions.
              </p>
            </section>

            {/* Description of Service */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">2. Description of Service</h2>
              <p className="text-white/80 mb-4">
                Zion Tech Group provides autonomous innovation systems, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>AI-powered automation workflows and systems</li>
                <li>Cloud infrastructure and deployment solutions</li>
                <li>Content generation and management services</li>
                <li>Monitoring and analytics platforms</li>
                <li>API access and integration services</li>
                <li>Technical consulting and support</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-green-400">3. User Accounts</h2>
              <p className="text-white/80 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p className="text-white/80 mb-4">
                You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions 
                under your account, whether or not you have authorized such activities or actions.
              </p>
              <p className="text-white/80">
                You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </section>

            {/* Acceptable Use */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Acceptable Use</h2>
              <p className="text-white/80 mb-4">
                You may not use our services for any illegal or unauthorized purpose. You must not, in the use of the service, 
                violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).
              </p>
              <p className="text-white/80 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Use the service to transmit any viruses, malware, or other malicious code</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Use the service for any commercial purpose without our express written consent</li>
                <li>Reverse engineer, decompile, or disassemble any portion of our services</li>
                <li>Use automated systems to access our services in a manner that sends more requests than a human could reasonably produce</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">5. Intellectual Property</h2>
              <p className="text-white/80 mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive property of 
                Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-white/80 mb-4">
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
              <p className="text-white/80">
                You retain ownership of any content you submit, post, or display on or through the service. By submitting content, 
                you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.
              </p>
            </section>

            {/* Privacy Policy */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Privacy Policy</h2>
              <p className="text-white/80 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                to understand our practices.
              </p>
              <p className="text-white/80">
                By using our service, you consent to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-red-400">7. Termination</h2>
              <p className="text-white/80 mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-white/80 mb-4">
                If you wish to terminate your account, you may simply discontinue using the service.
              </p>
              <p className="text-white/80">
                All provisions of the Terms which by their nature should survive termination shall survive termination, 
                including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">8. Limitation of Liability</h2>
              <p className="text-white/80 mb-4">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Your use or inability to use the service</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the service</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the service</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">9. Disclaimers</h2>
              <p className="text-white/80 mb-4">
                The information on this service is provided on an "as is" basis. Zion Tech Group makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
              <p className="text-white/80">
                We do not warrant that the service will be uninterrupted or error-free, that defects will be corrected, 
                or that the service or the server that makes it available are free of viruses or other harmful components.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-teal-400">10. Governing Law</h2>
              <p className="text-white/80 mb-4">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Zion Tech Group operates, 
                without regard to its conflict of law provisions.
              </p>
              <p className="text-white/80">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. 
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions 
                of these Terms will remain in effect.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-pink-400">11. Changes to Terms</h2>
              <p className="text-white/80 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-white/80">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service 
                after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="p-8 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">12. Contact Information</h2>
              <p className="text-white/80 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-white/80">
                <p>Email: legal@zion.tech</p>
                <p>Address: Zion Tech Group Legal Department</p>
                <p>Website: <a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact Form</a></p>
              </div>
            </section>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/privacy" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                  Contact Us
                </a>
                <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}