import React from 'react';
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Zion Tech Group - Data Protection & Privacy</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information and data privacy rights." />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Data protection and privacy information for users." />
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
              Last updated: January 19, 2025
            </p>
          </section>

          <section className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Introduction</h2>
                <p className="text-white/80 mb-4">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                </p>
                <p className="text-white/70">
                  By using our services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Personal Information</h3>
                    <ul className="space-y-2 text-white/70">
                      <li>• Name and contact information (email, phone number)</li>
                      <li>• Company name and job title</li>
                      <li>• Communication preferences</li>
                      <li>• Information you provide through forms or surveys</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Technical Information</h3>
                    <ul className="space-y-2 text-white/70">
                      <li>• IP address and device information</li>
                      <li>• Browser type and version</li>
                      <li>• Operating system</li>
                      <li>• Pages visited and time spent</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Cookies and Tracking</h3>
                    <ul className="space-y-2 text-white/70">
                      <li>• Essential cookies for website functionality</li>
                      <li>• Analytics cookies to improve user experience</li>
                      <li>• Marketing cookies for personalized content</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-green-400">How We Use Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Service Delivery</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Provide requested services</li>
                      <li>• Process transactions</li>
                      <li>• Send service updates</li>
                      <li>• Respond to inquiries</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Improvement & Analytics</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Analyze website usage</li>
                      <li>• Improve user experience</li>
                      <li>• Develop new features</li>
                      <li>• Conduct research</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Communication</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Send newsletters</li>
                      <li>• Share company updates</li>
                      <li>• Provide support</li>
                      <li>• Marketing communications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Legal Compliance</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Comply with laws</li>
                      <li>• Protect our rights</li>
                      <li>• Prevent fraud</li>
                      <li>• Ensure security</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Information Sharing</h2>
                <p className="text-white/80 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• <strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our website and services</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li>• <strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Data Security</h2>
                <p className="text-white/80 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Technical Measures</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Encryption in transit and at rest</li>
                      <li>• Secure authentication systems</li>
                      <li>• Regular security audits</li>
                      <li>• Access controls and monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Organizational Measures</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Employee training on data protection</li>
                      <li>• Data access policies</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular policy reviews</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Your Privacy Rights</h2>
                <p className="text-white/80 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Access & Control</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Access your personal data</li>
                      <li>• Correct inaccurate information</li>
                      <li>• Delete your data</li>
                      <li>• Restrict processing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Communication & Preferences</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Opt-out of marketing</li>
                      <li>• Update preferences</li>
                      <li>• Data portability</li>
                      <li>• Withdraw consent</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/70 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact Us</h2>
                <p className="text-white/80 mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-white/70">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345</p>
                </div>
                <p className="text-white/70 mt-4">
                  We will respond to your inquiry within 30 days.
                </p>
              </div>

              {/* Updates to Policy */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Updates to This Policy</h2>
                <p className="text-white/80 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• Posting the updated policy on our website</li>
                  <li>• Sending an email notification</li>
                  <li>• Displaying a prominent notice on our website</li>
                </ul>
                <p className="text-white/70 mt-4">
                  Your continued use of our services after any changes indicates your acceptance of the updated policy.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}