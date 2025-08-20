import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy — Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group - Autonomous Innovation Hub" />
      </Head>
      
      <Layout>
        <div className="relative min-h-screen py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="absolute inset-0 bg-dots opacity-5" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
                Learn how we use cookies to enhance your experience on our website.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="glass rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">How We Use Cookies</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We use cookies for several purposes, including:
                </p>
                <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                  <li>Essential cookies that are necessary for the website to function properly</li>
                  <li>Analytics cookies that help us understand how visitors interact with our website</li>
                  <li>Preference cookies that remember your settings and preferences</li>
                  <li>Marketing cookies that help us deliver relevant content and advertisements</li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">Types of Cookies We Use</h2>
                
                <h3 className="text-2xl font-bold text-white mb-4">Essential Cookies</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Analytics Cookies</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Preference Cookies</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  These cookies allow the website to remember choices you make and provide enhanced, more personal features. The information these cookies collect may be anonymized and they cannot track your browsing activity on other websites.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Third-Party Cookies</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Some cookies are placed by third-party services that appear on our pages. We use these services to provide additional functionality and improve our website performance.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Updates to This Policy</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
                </p>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}