import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Accessibility, Eye, Ear, MousePointer, Smartphone, Monitor, Globe, Shield, Users, Award } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable fonts, and screen reader compatibility',
      features: ['WCAG 2.1 AA compliance', 'High contrast themes', 'Font size controls', 'Screen reader support']
    },
    {
      icon: Ear,
      title: 'Auditory Accessibility',
      description: 'Audio alternatives and captioning for multimedia content',
      features: ['Closed captions', 'Audio descriptions', 'Transcripts', 'Volume controls']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods',
      features: ['Full keyboard navigation', 'Voice commands', 'Switch controls', 'Customizable shortcuts']
    },
    {
      icon: Smartphone,
      title: 'Mobile Accessibility',
      description: 'Responsive design and touch-friendly interfaces',
      features: ['Touch targets', 'Gesture alternatives', 'Portrait/landscape support', 'Voice input']
    }
  ];

  const complianceStandards = [
    { standard: 'WCAG 2.1', level: 'AA', status: 'Compliant' },
    { standard: 'Section 508', level: 'Full', status: 'Compliant' },
    { standard: 'ADA Title III', level: 'Full', status: 'Compliant' },
    { standard: 'EN 301 549', level: 'Full', status: 'Compliant' }
  ];

  const testingTools = [
    'WAVE Web Accessibility Evaluator',
    'axe DevTools',
    'Lighthouse Accessibility Audit',
    'Color Contrast Analyzer',
    'Screen Reader Testing',
    'Keyboard Navigation Testing'
  ];

  return (
    <Layout>
      <SEO
        title="Accessibility - Zion Tech Group"
        description="Comprehensive accessibility features and compliance standards for inclusive technology solutions"
        keywords={['accessibility', 'WCAG', 'ADA compliance', 'inclusive design', 'web accessibility']}
        image="https://ziontechgroup.com/og-accessibility.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full">
                <Accessibility className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Inclusive Technology for
              <span className="text-blue-400"> Everyone</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We believe technology should be accessible to all. Our solutions meet the highest accessibility standards 
              and provide inclusive experiences for users of all abilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Test Our Accessibility
              </button>
              <button className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-colors">
                View Compliance Report
              </button>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform provides multiple layers of accessibility support to ensure an inclusive user experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600/20 rounded-lg">
                      <feature.icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Accessibility Compliance
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We maintain the highest standards of accessibility compliance across all our solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Shield className="w-12 h-12 text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {standard.standard}
                  </h3>
                  <p className="text-gray-300 mb-2">Level: {standard.level}</p>
                  <span className="inline-block px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing & Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Accessibility Testing & Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We use industry-leading tools and methodologies to ensure our accessibility standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testingTools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-white font-medium">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience Inclusive Technology?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in creating a more accessible digital world. Our team is ready to help you 
                implement inclusive technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Schedule Accessibility Audit
                </button>
                <button className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-colors">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AccessibilityPage;