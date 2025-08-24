import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfService: NextPage = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Terms of Service - Zion Tech Group | Service Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand our service terms, conditions, and legal agreements for technology solutions and consulting services." />
        <meta name="keywords" content="terms of service, terms and conditions, service agreement, Zion Tech Group terms, legal agreement" />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            These terms and conditions govern your use of Zion Tech Group&apos;s services and website. 
            By using our services, you agree to be bound by these terms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>📋 Legal Agreement</span>
            <span>🤝 Service Terms</span>
            <span>🛡️ User Rights</span>
            <span>⚖️ Legal Framework</span>
          </div>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-12 text-center">
          <p className="text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </div>

        {/* Table of Contents */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#acceptance" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">1. Acceptance of Terms</a>
                <a href="#services" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">2. Services Description</a>
                <a href="#user-obligations" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">3. User Obligations</a>
                <a href="#intellectual-property" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">4. Intellectual Property</a>
                <a href="#payment-terms" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">5. Payment Terms</a>
              </div>
              <div className="space-y-2">
                <a href="#confidentiality" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">6. Confidentiality</a>
                <a href="#limitation-liability" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">7. Limitation of Liability</a>
                <a href="#termination" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">8. Termination</a>
                <a href="#governing-law" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">9. Governing Law</a>
                <a href="#contact" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">10. Contact Information</a>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <section id="acceptance" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                By accessing and using Zion Tech Group&apos;s website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Key Points:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>These terms apply to all users of our services</li>
                  <li>Continued use constitutes acceptance of any modifications</li>
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Services Description */}
          <section id="services" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Services Description</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Zion Tech Group provides technology consulting, software development, and digital transformation services including:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Core Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>AI & Machine Learning Solutions</li>
                    <li>Cloud Migration & Infrastructure</li>
                    <li>Cybersecurity & Compliance</li>
                    <li>Custom Software Development</li>
                    <li>Data Analytics & Business Intelligence</li>
                    <li>DevOps & Automation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Project-based consulting</li>
                    <li>Ongoing support and maintenance</li>
                    <li>Training and knowledge transfer</li>
                    <li>24/7 technical support (for applicable services)</li>
                    <li>Regular progress reporting</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Specific service terms and deliverables will be outlined in individual project agreements and statements of work.
                </p>
              </div>
            </div>
          </section>

          {/* User Obligations */}
          <section id="user-obligations" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Obligations</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                As a user of our services, you agree to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">General Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use services only for lawful purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with applicable laws and regulations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Unauthorized access to our systems</li>
                    <li>Distribution of malware or harmful code</li>
                    <li>Attempting to reverse engineer our software</li>
                    <li>Interfering with service availability</li>
                    <li>Violating any third-party rights</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Important:</strong> Violation of these obligations may result in immediate termination of services and legal action.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section id="intellectual-property" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Intellectual Property</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Intellectual Property</h3>
                <p className="text-gray-600 mb-3">
                  Zion Tech Group retains ownership of all intellectual property rights in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Our proprietary software and platforms</li>
                  <li>Service methodologies and processes</li>
                  <li>Company branding and trademarks</li>
                  <li>Pre-existing technology and tools</li>
                  <li>Documentation and training materials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Client Intellectual Property</h3>
                <p className="text-gray-600 mb-3">
                  Clients retain ownership of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Their proprietary business information</li>
                  <li>Client-specific data and content</li>
                  <li>Pre-existing client technology</li>
                  <li>Client branding and trademarks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Deliverables</h3>
                <p className="text-gray-600">
                  Ownership of project deliverables is determined by the specific project agreement. 
                  Generally, custom-developed solutions for clients become their property upon full payment.
                </p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section id="payment-terms" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Structure</h3>
                <p className="text-gray-600 mb-3">
                  Our payment terms vary by service type:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Project Services:</strong> Milestone-based payments or monthly billing</li>
                  <li><strong>Consulting:</strong> Hourly rates with monthly invoicing</li>
                  <li><strong>Recurring Services:</strong> Monthly or annual subscription billing</li>
                  <li><strong>Support Services:</strong> Monthly retainer or per-incident billing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Invoices are due within 30 days of issue</li>
                  <li>Late payments may incur interest charges</li>
                  <li>Services may be suspended for overdue accounts</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  <strong>Flexible Options:</strong> We offer various payment plans and can customize terms for enterprise clients.
                </p>
              </div>
            </div>
          </section>

          {/* Confidentiality */}
          <section id="confidentiality" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Confidentiality</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Confidential Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Business strategies and plans</li>
                    <li>Technical specifications and designs</li>
                    <li>Customer and financial data</li>
                    <li>Proprietary algorithms and processes</li>
                    <li>Trade secrets and know-how</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Protection Measures</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Secure data handling procedures</li>
                    <li>Employee confidentiality agreements</li>
                    <li>Access controls and encryption</li>
                    <li>Regular security audits</li>
                    <li>Incident response protocols</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Duration:</strong> Confidentiality obligations continue for 5 years after the termination of services.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section id="limitation-liability" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Liability Limits</h3>
                <p className="text-gray-600 mb-3">
                  Zion Tech Group&apos;s liability is limited as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Total liability limited to fees paid in the 12 months preceding the claim</li>
                  <li>No liability for indirect, incidental, or consequential damages</li>
                  <li>No liability for lost profits or business interruption</li>
                  <li>Force majeure events are excluded from liability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Exclusions</h3>
                <p className="text-gray-600">
                  These limitations do not apply to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-2">
                  <li>Intentional misconduct or gross negligence</li>
                  <li>Violation of intellectual property rights</li>
                  <li>Breach of confidentiality obligations</li>
                  <li>Personal injury or property damage</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">
                  <strong>Important:</strong> These limitations are essential to our business model and pricing structure.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section id="termination" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Termination</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Termination by Client</h3>
                <p className="text-gray-600 mb-3">
                  Clients may terminate services with written notice:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>30 days notice for ongoing services</li>
                  <li>Immediate termination for material breach</li>
                  <li>Payment for services rendered up to termination date</li>
                  <li>Return of client property and data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Termination by Zion Tech Group</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>30 days notice for convenience</li>
                  <li>Immediate termination for breach of terms</li>
                  <li>Non-payment of fees</li>
                  <li>Illegal or unethical use of services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Post-Termination</h3>
                <p className="text-gray-600">
                  Upon termination, we will assist with transition and provide final deliverables. 
                  Confidentiality obligations continue as specified in Section 6.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section id="governing-law" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Governing Law</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                These terms are governed by and construed in accordance with the laws of the State of Delaware, United States.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Jurisdiction</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>State of Delaware courts have exclusive jurisdiction</li>
                    <li>Federal courts for federal law matters</li>
                    <li>Alternative dispute resolution encouraged</li>
                    <li>Arbitration for certain disputes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Dispute Resolution</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Good faith negotiation first</li>
                    <li>Mediation for complex disputes</li>
                    <li>Arbitration as final resolution</li>
                    <li>Class action waivers apply</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Information</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Zion Tech Group</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown, DE 19709</p>
                    <p>United States</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Methods</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Website:</strong> https://ziontechgroup.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Legal Inquiries:</strong> For legal matters related to these terms, please include &quot;Legal Inquiry&quot; in your email subject line.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Additional Information */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Updates to Terms</h3>
                <p className="opacity-90">
                  We may update these Terms of Service periodically. Material changes will be communicated 
                  via email or website notification at least 30 days in advance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Severability</h3>
                <p className="opacity-90">
                  If any provision of these terms is found to be unenforceable, the remaining provisions 
                  will continue in full force and effect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re committed to transparency and clear communication. 
              If you have questions about these terms, don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;