import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's privacy policy and data handling practices." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                How we collect, use, and protect your information.
              </p>
            </section>

            <div className="prose prose-invert max-w-none">
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <p className="text-lg text-white/80 mb-6">
                  <strong>Last updated:</strong> January 15, 2025
                </p>
                
                <p className="text-lg text-white/80 mb-8">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or use our services.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Personal Information</h3>
                <p className="mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>• Contact us through our contact forms</li>
                  <li>• Subscribe to our newsletter</li>
                  <li>• Request information about our services</li>
                  <li>• Apply for employment opportunities</li>
                </ul>
                
                <p className="mb-6">
                  This information may include your name, email address, phone number, company name, 
                  and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-green-400">Automatically Collected Information</h3>
                <p className="mb-4">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>• IP address and location data</li>
                  <li>• Browser type and version</li>
                  <li>• Operating system</li>
                  <li>• Pages visited and time spent on each page</li>
                  <li>• Referring website</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-yellow-400">How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>• Provide and maintain our services</li>
                  <li>• Respond to your inquiries and provide customer support</li>
                  <li>• Send you newsletters and marketing communications (with your consent)</li>
                  <li>• Improve our website and services</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Protect against fraud and abuse</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-blue-400">Information Sharing and Disclosure</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>• Service providers who assist us in operating our website and services</li>
                  <li>• Legal requirements, such as responding to subpoenas or court orders</li>
                  <li>• Protection of our rights, property, or safety</li>
                  <li>• Business transfers, such as mergers or acquisitions</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-purple-400">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Your Rights and Choices</h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>• Access and review your personal information</li>
                  <li>• Correct inaccurate or incomplete information</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Object to or restrict certain processing activities</li>
                  <li>• Withdraw consent for marketing communications</li>
                  <li>• Request data portability</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>• Essential cookies for website functionality</li>
                  <li>• Analytics cookies to understand website usage</li>
                  <li>• Marketing cookies for personalized content</li>
                </ul>
                
                <p className="mb-6">
                  You can control cookie settings through your browser preferences. However, disabling 
                  certain cookies may affect website functionality.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-green-400">Third-Party Services</h2>
                <p className="mb-6">
                  Our website may contain links to third-party websites or services. We are not 
                  responsible for the privacy practices of these third parties. We encourage you to 
                  review their privacy policies before providing any personal information.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Children's Privacy</h2>
                <p className="mb-6">
                  Our services are not intended for children under the age of 13. We do not knowingly 
                  collect personal information from children under 13. If you believe we have collected 
                  such information, please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-blue-400">International Data Transfers</h2>
                <p className="mb-6">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure that such transfers comply with applicable data protection laws and implement 
                  appropriate safeguards to protect your information.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-purple-400">Changes to This Privacy Policy</h2>
                <p className="mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                  We encourage you to review this Privacy Policy periodically.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                
                <div className="bg-white/5 p-6 rounded-lg mb-6">
                  <ul className="space-y-2">
                    <li>• Email: privacy@zion.tech</li>
                    <li>• Website: <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact Form</Link></li>
                    <li>• Address: Global Operations, Cloud-Native Infrastructure</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Compliance</h2>
                <p className="mb-6">
                  This Privacy Policy complies with applicable data protection laws, including:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>• General Data Protection Regulation (GDPR)</li>
                  <li>• California Consumer Privacy Act (CCPA)</li>
                  <li>• Other applicable privacy and data protection laws</li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <p className="text-white/60">
                    By using our website and services, you acknowledge that you have read and 
                    understood this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}