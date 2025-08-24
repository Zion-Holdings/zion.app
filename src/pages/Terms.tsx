import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group" 
        description="Read the terms and conditions governing your use of Zion Tech Group's marketplace platform." 
        keywords="terms of service, terms and conditions, Zion Tech Group, user agreement"
        canonical="https://ziontechgroup.com/terms"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Terms of Service</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-zion-slate-light mb-4">
                By accessing and using Zion Tech Group's marketplace platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group provides a marketplace platform that connects AI and technology professionals with opportunities, services, and equipment. Our platform includes:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li>Talent marketplace for AI and tech professionals</li>
                <li>Service listings and bookings</li>
                <li>Equipment and product marketplace</li>
                <li>Community forums and networking</li>
                <li>AI matching and recommendation services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.1 Account Creation</h3>
              <p className="text-zion-slate-light mb-4">
                To access certain features of our Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.2 Account Security</h3>
              <p className="text-zion-slate-light mb-4">
                You are responsible for safeguarding the password and for all activities that occur under your account. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
              <p className="text-zion-slate-light mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit malicious code or content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the Service</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Harass, abuse, or harm other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Content and Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">5.1 User Content</h3>
              <p className="text-zion-slate-light mb-4">
                You retain ownership of content you submit to our platform. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with the Service.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">5.2 Platform Content</h3>
              <p className="text-zion-slate-light mb-4">
                The Service and its original content, features, and functionality are owned by Zion Tech Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Marketplace Transactions</h2>
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">6.1 Service Agreements</h3>
              <p className="text-zion-slate-light mb-4">
                When you engage with services or talent through our platform, you enter into agreements with the respective service providers or professionals. Zion Tech Group acts as a facilitator and is not a party to these agreements.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">6.2 Payment and Fees</h3>
              <p className="text-zion-slate-light mb-4">
                All payments are processed through secure third-party payment processors. We may charge service fees for certain transactions. You agree to pay all applicable fees and taxes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h2>
              <p className="text-zion-slate-light mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimers and Limitations</h2>
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">8.1 Service Availability</h3>
              <p className="text-zion-slate-light mb-4">
                We strive to provide a reliable and secure platform, but we do not guarantee that the Service will be uninterrupted, secure, or error-free. The Service is provided "as is" and "as available."
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">8.2 Third-Party Content</h3>
              <p className="text-zion-slate-light mb-4">
                We do not endorse, verify, or guarantee the accuracy, completeness, or usefulness of any third-party content on our platform. You use such content at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <p className="text-zion-slate-light mb-4">
                You agree to defend, indemnify, and hold harmless Zion Tech Group and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <p className="text-zion-slate-light mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <p className="text-zion-slate-light mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zion Tech Group operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p className="text-zion-slate-light mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
                <p className="text-zion-slate-light mb-2">
                  <strong>Email:</strong> legal@ziontechgroup.com
                </p>
                <p className="text-zion-slate-light mb-2">
                  <strong>Address:</strong> Zion Tech Group, Legal Department
                </p>
                <p className="text-zion-slate-light">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
