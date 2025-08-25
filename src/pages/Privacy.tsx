import React from 'react';
import { SEO } from '@/components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information"
        keywords="privacy policy, data protection, personal information, Zion Tech Group privacy"
        canonical="https://ziontechgroup.com/privacy"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-zion-slate-light">
                Last updated: December 15, 2024
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-zion-slate-light mb-6">
                  At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our services.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Information We Collect
                </h2>
                <p className="text-zion-slate-light mb-4">
                  We collect information that you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Create an account or profile</li>
                  <li>Post jobs or services on our marketplace</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Apply for employment opportunities</li>
                </ul>

                <p className="text-zion-slate-light mb-4">
                  The types of information we may collect include:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Professional credentials and work history</li>
                  <li>Company information and business details</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  How We Use Your Information
                </h2>
                <p className="text-zion-slate-light mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and payments</li>
                  <li>Send you important updates and notifications</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our services and develop new features</li>
                  <li>Ensure compliance with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-zion-slate-light mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>With service providers who assist us in operating our platform</li>
                  <li>To comply with legal requirements or protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Data Security
                </h2>
                <p className="text-zion-slate-light mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-zion-slate-light mb-6">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Improve our services and user experience</li>
                </ul>

                <p className="text-zion-slate-light mb-6">
                  You can control cookie settings through your browser preferences, though disabling certain cookies may 
                  affect the functionality of our website.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Your Rights and Choices
                </h2>
                <p className="text-zion-slate-light mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Update or correct inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Data Retention
                </h2>
                <p className="text-zion-slate-light mb-6">
                  We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
                  resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or 
                  anonymize it.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  International Data Transfers
                </h2>
                <p className="text-zion-slate-light mb-6">
                  Your personal information may be transferred to and processed in countries other than your own. We ensure that 
                  such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Children's Privacy
                </h2>
                <p className="text-zion-slate-light mb-6">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information 
                  from children under 13. If you believe we have collected such information, please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-zion-slate-light mb-6">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the 
                  "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Contact Us
                </h2>
                <p className="text-zion-slate-light mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-zion-blue rounded-lg p-6 mb-6">
                  <p className="text-white font-semibold mb-2">Zion Tech Group</p>
                  <p className="text-zion-slate-light">Email: privacy@ziontechgroup.com</p>
                  <p className="text-zion-slate-light">Phone: +1-302-464-0950</p>
                  <p className="text-zion-slate-light">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>

                <p className="text-zion-slate-light text-sm">
                  This Privacy Policy is effective as of the date listed above and applies to all users of our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}