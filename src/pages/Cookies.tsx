import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Cookies() {
  return (
    <>
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to improve your experience on our platform."
        keywords="cookie policy, cookies, Zion Tech Group, privacy, data collection"
        canonical="https://ziontechgroup.com/cookies"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Cookie Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              How we use cookies and similar technologies to enhance your experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-6">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our platform.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">How We Use Cookies</h3>
              <p className="text-zion-slate-light mb-6">
                We use cookies for several purposes, including:
              </p>
              <ul className="text-zion-slate-light mb-6 space-y-2">
                <li>• Essential cookies for basic website functionality</li>
                <li>• Performance cookies to analyze site usage</li>
                <li>• Functionality cookies to remember your preferences</li>
                <li>• Marketing cookies to provide relevant content</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Managing Your Cookie Preferences</h3>
              <p className="text-zion-slate-light mb-6">
                You can control and manage cookies through your browser settings. However, 
                disabling certain cookies may affect the functionality of our website.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Updates to This Policy</h3>
              <p className="text-zion-slate-light">
                We may update this Cookie Policy from time to time. Please check back 
                periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}