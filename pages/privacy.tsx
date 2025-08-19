import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's privacy practices and how we protect your data." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </section>

            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <div className="mb-8">
                  <p className="text-lg text-white/80">
                    <strong>Last updated:</strong> January 15, 2025
                  </p>
                  <p className="text-lg text-white/80">
                    Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                    information when you visit our website and use our services.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Information We Collect</h2>
                <p className="mb-4">
                  We collect information that you provide directly to us, such as when you:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Contact us through our website forms</li>
                  <li>• Subscribe to our newsletter or blog</li>
                  <li>• Request information about our services</li>
                  <li>• Participate in surveys or feedback forms</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Personal Information</h3>
                <p className="mb-4">
                  The personal information we may collect includes:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Name and contact information (email, phone number)</li>
                  <li>• Company or organization name</li>
                  <li>• Job title or role</li>
                  <li>• Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-green-400">Automatically Collected Information</h3>
                <p className="mb-4">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="space-y-2 mb-6">
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
                <ul className="space-y-2 mb-6">
                  <li>• Provide and improve our services</li>
                  <li>• Respond to your inquiries and requests</li>
                  <li>• Send you updates, newsletters, and marketing communications</li>
                  <li>• Analyze website usage and improve user experience</li>
                  <li>• Ensure security and prevent fraud</li>
                  <li>• Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-blue-400">Information Sharing and Disclosure</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• <strong>Service Providers:</strong> We may share information with trusted third-party 
                  service providers who assist us in operating our website and providing services</li>
                  <li>• <strong>Legal Requirements:</strong> We may disclose information if required by law 
                  or to protect our rights, property, or safety</li>
                  <li>• <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale 
                  of assets, your information may be transferred</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-purple-400">Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or destruction. 
                  These measures include:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Access controls and authentication measures</li>
                  <li>• Employee training on data protection</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Your Rights and Choices</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Access and review your personal information</li>
                  <li>• Correct inaccurate or incomplete information</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Opt out of marketing communications</li>
                  <li>• Object to certain processing of your information</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience 
                  and analyze website usage. You can control cookie settings through your browser preferences.
                </p>

                <h3 className="text-xl font-bold mb-3 text-green-400">Types of Cookies We Use</h3>
                <ul className="space-y-2 mb-6">
                  <li>• <strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant content and advertisements</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Third-Party Links</h2>
                <p className="mb-6">
                  Our website may contain links to third-party websites. We are not responsible for 
                  the privacy practices or content of these external sites. We encourage you to review 
                  their privacy policies before providing any personal information.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-blue-400">Children's Privacy</h2>
                <p className="mb-6">
                  Our services are not intended for children under the age of 13. We do not knowingly 
                  collect personal information from children under 13. If you believe we have collected 
                  such information, please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-purple-400">International Data Transfers</h2>
                <p className="mb-6">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure that such transfers comply with applicable data protection laws and implement 
                  appropriate safeguards to protect your information.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Changes to This Privacy Policy</h2>
                <p className="mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                  We encourage you to review this Privacy Policy periodically.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                <div className="bg-white/5 p-6 rounded-lg mb-6">
                  <ul className="space-y-2">
                    <li>• <strong>Email:</strong> privacy@zion.tech</li>
                    <li>• <strong>Website:</strong> <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact Form</Link></li>
                    <li>• <strong>Address:</strong> Zion Tech Group, Global Operations</li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm text-white/60">
                    This Privacy Policy is effective as of January 15, 2025, and will remain in effect 
                    except with respect to any changes in its provisions in the future, which will be 
                    in effect immediately after being posted on this page.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                ← Back to Contact
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}