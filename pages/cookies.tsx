import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CookiesPage = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to improve your browsing experience." />
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
              <p className="mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-400 mb-3">
                    These cookies are necessary for the website to function and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                    <li>Authentication and security</li>
                    <li>Basic website functionality</li>
                    <li>Form submission processing</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Performance Cookies</h3>
                  <p className="text-gray-400 mb-3">
                    These cookies help us understand how visitors use our website.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                    <li>Page load times and performance</li>
                    <li>User navigation patterns</li>
                    <li>Error tracking and debugging</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Functional Cookies</h3>
                  <p className="text-gray-400 mb-3">
                    These cookies remember your preferences and settings.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                    <li>Language preferences</li>
                    <li>Theme and display settings</li>
                    <li>Form data retention</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-400 mb-3">
                    These cookies help us analyze website traffic and user behavior.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                    <li>Google Analytics tracking</li>
                    <li>User engagement metrics</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
              <p className="mb-4">
                We may use third-party services that place cookies on your device:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                <li><strong>Social Media:</strong> Social media integration and sharing buttons</li>
                <li><strong>Payment Processors:</strong> Secure payment processing (if applicable)</li>
                <li><strong>Customer Support:</strong> Live chat and support tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-400 mb-3">
                    Most web browsers allow you to control cookies through their settings:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                    <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                    <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                    <li>Safari: Preferences → Privacy → Manage Website Data</li>
                    <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent</h3>
                  <p className="text-gray-400 mb-3">
                    When you first visit our website, you'll see a cookie consent banner that allows you to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your cookie preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Impact of Disabling Cookies</h2>
              <p className="mb-4">
                Please note that disabling certain cookies may affect your experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Some website features may not work properly</li>
                <li>Your preferences may not be remembered</li>
                <li>We may not be able to provide personalized content</li>
                <li>Analytics data may be incomplete</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p className="mb-4">
                We may update this cookie policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about our use of cookies or this cookie policy, please contact us:
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <p className="mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="mb-2"><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <Link 
              href="/privacy" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;