import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Accessibility() {
  return (
    <>
      <SEO
        title="Accessibility | Zion Tech Group"
        description="Zion Tech Group is committed to making our platform accessible to all users. Learn about our accessibility features and commitment."
        keywords="accessibility, Zion Tech Group, inclusive design, web accessibility, WCAG"
        canonical="https://ziontechgroup.com/accessibility"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Accessibility</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Committed to making our platform accessible to all users
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Commitment</h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Accessibility Features</h3>
              <p className="text-zion-slate-light mb-6">
                Our platform includes several accessibility features:
              </p>
              <ul className="text-zion-slate-light mb-6 space-y-2">
                <li>• Keyboard navigation support</li>
                <li>• Screen reader compatibility</li>
                <li>• High contrast mode</li>
                <li>• Resizable text</li>
                <li>• Alternative text for images</li>
                <li>• Semantic HTML structure</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Standards Compliance</h3>
              <p className="text-zion-slate-light mb-6">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
                standards. These guidelines explain how to make web content more accessible for people 
                with disabilities.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Feedback and Support</h3>
              <p className="text-zion-slate-light mb-6">
                We welcome your feedback on the accessibility of our platform. If you experience 
                accessibility barriers or have suggestions for improvement, please contact us.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-zion-slate-light">
                For accessibility-related questions or concerns, please email us at{' '}
                <a href="mailto:accessibility@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">
                  accessibility@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}