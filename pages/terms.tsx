import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service to understand the legal agreement between you and Zion Tech Group regarding our services." />
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI and machine learning solutions</li>
                <li>Cloud architecture and infrastructure</li>
                <li>Web and mobile application development</li>
                <li>Cybersecurity services</li>
                <li>Digital transformation consulting</li>
                <li>Data analytics and business intelligence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account and information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Project Terms</h2>
              <p className="mb-4">
                When engaging our services for projects, additional terms and conditions will apply, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Project scope and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment terms and schedules</li>
                <li>Intellectual property rights</li>
                <li>Confidentiality agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional charges</li>
                <li>Project work may be suspended for overdue accounts</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                Intellectual property rights will be determined based on the specific project agreement. 
                Generally, we retain rights to our proprietary tools and methodologies, while clients retain 
                rights to their business-specific deliverables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Confidentiality</h2>
              <p className="mb-4">
                We are committed to maintaining the confidentiality of your business information and will 
                not disclose confidential information to third parties without your consent, except as 
                required by law or as necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                Zion Tech Group's liability is limited to the amount paid for the specific service in question. 
                We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Warranty Disclaimer</h2>
              <p className="mb-4">
                Our services are provided "as is" without warranties of any kind. We do not guarantee that 
                our services will be uninterrupted, error-free, or meet your specific requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
              <p className="mb-4">
                Either party may terminate a service agreement with written notice as specified in the 
                individual agreement. Upon termination, you will be responsible for payment of services 
                rendered up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by the laws of the State of California, United States. 
                Any disputes will be resolved in the courts of San Francisco County, California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services constitutes 
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
              <p className="mb-4">
                If you have questions about these terms of service, please contact us:
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <p className="mb-2"><strong>Email:</strong> legal@ziontechgroup.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="mb-2"><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <Link 
              href="/contact" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;