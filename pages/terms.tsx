import React from 'react';
import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Terms of Service
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using the Zion Tech Group website and services, you accept and agree 
                  to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides technology consulting, AI solutions, quantum computing services, 
                  cybersecurity solutions, and related technology services to businesses and organizations.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">3. Use License</h2>
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                  website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-gray-300 mb-4">
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose</li>
                  <li>• Attempt to reverse engineer any software on the website</li>
                  <li>• Remove any copyright or other proprietary notations</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer</h2>
                <p className="text-gray-300 mb-4">
                  The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including without limitation, implied warranties or conditions of merchantability, fitness for a 
                  particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">5. Limitations</h2>
                <p className="text-gray-300 mb-4">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without 
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                  the use or inability to use the materials on Zion Tech Group's website.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">6. Accuracy of Materials</h2>
                <p className="text-gray-300 mb-4">
                  The materials appearing on Zion Tech Group's website could include technical, typographical, 
                  or photographic errors. Zion Tech Group does not warrant that any of the materials on its 
                  website are accurate, complete, or current.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">7. Links</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group has not reviewed all of the sites linked to its website and is not responsible 
                  for the contents of any such linked site. The inclusion of any link does not imply endorsement 
                  by Zion Tech Group of the site.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">8. Modifications</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group may revise these terms of service for its website at any time without notice. 
                  By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of Delaware, 
                  United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  and software, is the property of Zion Tech Group and is protected by copyright laws.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">11. Privacy Policy</h2>
                <p className="text-gray-300 mb-4">
                  Your use of our services is also governed by our Privacy Policy, which is incorporated 
                  into these terms by reference.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
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