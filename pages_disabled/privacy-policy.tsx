import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy: NextPage = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your data. Read our comprehensive privacy policy covering data collection, usage, and protection measures." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, CCPA, data privacy, Zion Tech Group privacy" />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🛡️ Data Protection</span>
            <span>🔒 Secure Practices</span>
            <span>📋 Transparent Policies</span>
            <span>🌍 Global Compliance</span>
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
                <a href="#information-collection" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">1. Information We Collect</a>
                <a href="#how-we-use" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">2. How We Use Your Information</a>
                <a href="#information-sharing" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">3. Information Sharing and Disclosure</a>
                <a href="#data-security" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">4. Data Security</a>
                <a href="#your-rights" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">5. Your Rights and Choices</a>
              </div>
              <div className="space-y-2">
                <a href="#cookies" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">6. Cookies and Tracking Technologies</a>
                <a href="#third-party" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">7. Third-Party Services</a>
                <a href="#data-retention" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">8. Data Retention</a>
                <a href="#international" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">9. International Data Transfers</a>
                <a href="#contact" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">10. Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <div className="space-y-12">
          {/* Information Collection */}
          <section id="information-collection" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                <p className="text-gray-600 mb-3">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Company name and job title</li>
                  <li>Project requirements and business information</li>
                  <li>Communication preferences and feedback</li>
                  <li>Resume and professional information (for career applications)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-600 mb-3">
                  When you visit our website, we automatically collect certain information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website and search terms</li>
                  <li>Click patterns and user interactions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Information from Third Parties</h3>
                <p className="text-gray-600">
                  We may receive information about you from third-party sources, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-2">
                  <li>Business partners and service providers</li>
                  <li>Social media platforms (when you interact with our content)</li>
                  <li>Public databases and professional networks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section id="how-we-use" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                We use the information we collect for various business purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Service Delivery:</strong> To provide our technology solutions and services</li>
                <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
                <li><strong>Business Development:</strong> To improve our services and develop new solutions</li>
                <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Security:</strong> To protect our systems and prevent fraud</li>
                <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section id="information-sharing" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> When you explicitly authorize us to share your information</li>
                <li><strong>Partnerships:</strong> With business partners for collaborative projects (with your consent)</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section id="data-security" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                We implement comprehensive security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                <li><strong>Access Controls:</strong> Strict access controls and authentication measures</li>
                <li><strong>Regular Audits:</strong> Regular security assessments and penetration testing</li>
                <li><strong>Employee Training:</strong> Comprehensive privacy and security training for all staff</li>
                <li><strong>Incident Response:</strong> Established procedures for handling security incidents</li>
                <li><strong>Compliance:</strong> Adherence to industry security standards and best practices</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section id="your-rights" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Access and Control</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion of your information</li>
                    <li>Object to certain processing activities</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Communication Preferences</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Opt-out of marketing communications</li>
                    <li>Choose your preferred contact method</li>
                    <li>Update your communication preferences</li>
                    <li>Unsubscribe from newsletters</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> To exercise these rights, please contact us using the information provided at the end of this policy. 
                  We will respond to your request within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies and Tracking Technologies</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                  <p className="text-sm text-gray-600">Required for basic website functionality</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand how visitors use our site</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">Used for personalized content and advertising</p>
                </div>
              </div>

              <p className="text-gray-600 mt-4">
                You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* Third Party Services */}
          <section id="third-party" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Third-Party Services</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Our website and services may integrate with third-party services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Analytics:</strong> Google Analytics for website performance insights</li>
                <li><strong>Marketing:</strong> HubSpot for customer relationship management</li>
                <li><strong>Communication:</strong> Slack and Microsoft Teams for project collaboration</li>
                <li><strong>Cloud Services:</strong> AWS, Azure, and Google Cloud for infrastructure</li>
                <li><strong>Payment Processing:</strong> Stripe and PayPal for financial transactions</li>
              </ul>
              
              <p className="text-gray-600 mt-4">
                These third-party services have their own privacy policies. We encourage you to review them to understand how they handle your information.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section id="data-retention" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Data Retention</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide our services and maintain business relationships</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Protect against fraud and security threats</li>
              </ul>
              
              <p className="text-gray-600 mt-4">
                When we no longer need your information, we will securely delete or anonymize it. 
                Specific retention periods vary based on the type of data and business purpose.
              </p>
            </div>
          </section>

          {/* International Transfers */}
          <section id="international" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. International Data Transfers</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Zion Tech Group operates globally, and your information may be transferred to and processed in countries other than your own:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>United States:</strong> Our primary operations and data centers</li>
                <li><strong>European Union:</strong> For EU-based clients and operations</li>
                <li><strong>Other Countries:</strong> Where our service providers are located</li>
              </ul>
              
              <p className="text-gray-600 mt-4">
                We ensure that all international transfers comply with applicable data protection laws and implement appropriate safeguards, 
                such as standard contractual clauses and adequacy decisions.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                If you have questions about this Privacy Policy or our data practices, please contact us:
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
                  <strong>Data Protection Officer:</strong> For privacy-related inquiries, you can also contact our Data Protection Officer 
                  at the email address above with &quot;Privacy Inquiry&quot; in the subject line.
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
                <h3 className="text-lg font-semibold mb-2">Updates to This Policy</h3>
                <p className="opacity-90">
                  We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
                  We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Compliance</h3>
                <p className="opacity-90">
                  This policy complies with applicable privacy laws including GDPR, CCPA, and other regional privacy regulations. 
                  We are committed to maintaining the highest standards of data protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re committed to transparency and protecting your privacy. 
              If you have any questions or concerns, don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;