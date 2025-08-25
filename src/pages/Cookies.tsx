import React from 'react';
import { SEO } from '@/components/SEO';

export default function Cookies() {
  return (
    <>
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience"
        keywords="cookie policy, cookies, tracking, privacy, Zion Tech Group cookies"
        canonical="https://ziontechgroup.com/cookies"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-zion-slate-light">
                Last updated: December 15, 2024
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-zion-slate-light mb-6">
                  This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar 
                  technologies when you visit our website. This policy should be read together with our Privacy Policy, 
                  which explains how we use your personal information.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  What Are Cookies?
                </h2>
                <p className="text-zion-slate-light mb-6">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                  when you visit a website. They help websites remember information about your visit, such as your 
                  preferred language and other settings, which can make your next visit easier and the site more useful to you.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  How We Use Cookies
                </h2>
                <p className="text-zion-slate-light mb-4">
                  We use cookies for several purposes, including:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Essential cookies that are necessary for the website to function properly</li>
                  <li>Analytics cookies that help us understand how visitors interact with our website</li>
                  <li>Functionality cookies that remember your preferences and settings</li>
                  <li>Marketing cookies that help us deliver relevant content and advertisements</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Types of Cookies We Use
                </h2>
                
                <h3 className="text-xl font-bold text-white mb-3 mt-6">Essential Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies are essential for the website to function and cannot be switched off in our systems. 
                  They are usually only set in response to actions made by you which amount to a request for services, 
                  such as setting your privacy preferences, logging in, or filling in forms.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Analytics Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the 
                  performance of our site. They help us to know which pages are the most and least popular and 
                  see how visitors move around the site.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Functionality Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. 
                  They may be set by us or by third-party providers whose services we have added to our pages.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Marketing Cookies</h3>
                <p className="text-zion-slate-light mb-6">
                  These cookies may be set through our site by our advertising partners. They may be used by 
                  those companies to build a profile of your interests and show you relevant advertisements on other sites.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Third-Party Cookies
                </h2>
                <p className="text-zion-slate-light mb-6">
                  In addition to our own cookies, we may also use various third-party cookies to report usage 
                  statistics of the website, deliver advertisements on and through the website, and so on. 
                  These third-party cookies are not under our control and are subject to the third party's privacy policy.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-zion-slate-light mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already 
                  on your computer and you can set most browsers to prevent them from being placed. However, 
                  if you do this, you may have to manually adjust some preferences every time you visit a site.
                </p>
                <p className="text-zion-slate-light mb-6">
                  Most web browsers allow you to manage cookies through their settings preferences. To learn more 
                  about how to manage cookies, visit the help section of your browser.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Specific Cookie Information
                </h2>
                <p className="text-zion-slate-light mb-4">
                  Below is a list of the main cookies we use and their purposes:
                </p>
                
                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Essential Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>session_id:</strong> Maintains your session while using our website</li>
                    <li><strong>csrf_token:</strong> Protects against cross-site request forgery attacks</li>
                    <li><strong>preferences:</strong> Stores your basic website preferences</li>
                  </ul>
                </div>

                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>_ga:</strong> Google Analytics cookie for tracking website usage</li>
                    <li><strong>_gid:</strong> Google Analytics cookie for tracking user sessions</li>
                    <li><strong>_gat:</strong> Google Analytics cookie for controlling request rate</li>
                  </ul>
                </div>

                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Functionality Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>theme:</strong> Remembers your preferred color theme</li>
                    <li><strong>language:</strong> Stores your preferred language setting</li>
                    <li><strong>notifications:</strong> Remembers your notification preferences</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Updates to This Policy
                </h2>
                <p className="text-zion-slate-light mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or 
                  for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Contact Us
                </h2>
                <p className="text-zion-slate-light mb-6">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-4">
                  <p className="text-zion-slate-light mb-2">
                    <strong>Email:</strong> kleber@ziontechgroup.com
                  </p>
                  <p className="text-zion-slate-light mb-2">
                    <strong>Phone:</strong> +1 (302) 464-0950
                  </p>
                  <p className="text-zion-slate-light">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}