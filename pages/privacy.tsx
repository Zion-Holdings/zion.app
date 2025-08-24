import React from 'react';
import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Name, email address, and contact information</li>
                  <li>• Company and job title information</li>
                  <li>• Service preferences and requirements</li>
                  <li>• Communication history and support requests</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Provide and improve our services</li>
                  <li>• Communicate with you about our services</li>
                  <li>• Send you technical notices and support messages</li>
                  <li>• Respond to your comments and questions</li>
                  <li>• Develop new products and services</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• With your consent</li>
                  <li>• To comply with legal obligations</li>
                  <li>• To protect our rights and safety</li>
                  <li>• In connection with a business transfer</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your information</li>
                  <li>• Object to processing of your information</li>
                  <li>• Withdraw consent where applicable</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-300 mb-4">
                  We use cookies and similar technologies to enhance your experience on our website, 
                  analyze usage patterns, and provide personalized content.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Services</h2>
                <p className="text-gray-300 mb-4">
                  Our website may contain links to third-party websites and services. We are not 
                  responsible for the privacy practices of these third parties.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                <p className="text-gray-300 mb-4">
                  Our services are not intended for children under 13 years of age. We do not 
                  knowingly collect personal information from children under 13.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">9. International Transfers</h2>
                <p className="text-gray-300 mb-4">
                  Your information may be transferred to and processed in countries other than your 
                  own. We ensure appropriate safeguards are in place for such transfers.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this privacy policy or our privacy practices, 
                  please contact us at:
                </p>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    <strong>Email:</strong> kleber@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 302 464 0950<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}