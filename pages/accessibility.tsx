import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import { Accessibility, Eye, Ear, Hand, Brain, CheckCircle } from 'lucide-react';

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable fonts, and screen reader compatibility',
      features: ['WCAG 2.1 AA compliance', 'Screen reader optimization', 'High contrast themes', 'Font size controls']
    },
    {
      icon: <Ear className="w-6 h-6" />,
      title: 'Auditory Accessibility',
      description: 'Audio alternatives and captioning for multimedia content',
      features: ['Video captions', 'Audio descriptions', 'Transcripts', 'Volume controls']
    },
    {
      icon: <Hand className="w-6 h-6" />,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods',
      features: ['Full keyboard navigation', 'Voice control support', 'Gesture alternatives', 'Customizable controls']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation and simplified interfaces',
      features: ['Simple language', 'Consistent navigation', 'Error prevention', 'Help and support']
    }
  ];

  const complianceStandards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Accessibility | Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group is committed to digital accessibility. Learn about our accessibility features and compliance standards." />
        <link rel="canonical" href="https://ziontechgroup.com/accessibility" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-6">
              <Accessibility className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Accessibility
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
              We believe that technology should be inclusive and accessible to everyone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Report Accessibility Issues</Button>
              <Button href="/support" variant="outline" className="px-8 py-4">Get Support</Button>
            </div>
          </header>

          {/* Accessibility Features */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Accessibility Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Standards */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Compliance Standards
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-200">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Help with Accessibility?
              </h2>
              <p className="text-gray-300 mb-6">
                If you experience any accessibility barriers or have suggestions for improvement, 
                please contact our accessibility team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" className="px-6 py-3">Contact Us</Button>
                <Button href="/support" variant="outline" className="px-6 py-3">Support Center</Button>
              </div>
            </div>
          </section>

          {/* Commitment Statement */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-black/40 border border-gray-700/60">
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group is committed to continuously improving the accessibility of our digital platforms. 
                We regularly review and update our accessibility features based on user feedback and evolving standards. 
                Our goal is to provide an inclusive digital experience for all users, regardless of their abilities.
              </p>
            </div>
          </section>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}