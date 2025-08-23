import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Shield, 
  CheckCircle, 
  Globe, 
  Award,
  Accessibility,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const accessibilityFeatures = [
    {
      category: 'Visual Accessibility',
      icon: <Eye className="w-8 h-8" />,
      features: [
        'High contrast color schemes',
        'Adjustable font sizes',
        'Screen reader compatibility',
        'Alternative text for images',
        'Keyboard navigation support',
        'Focus indicators'
      ]
    },
    {
      category: 'Auditory Accessibility',
      icon: <Ear className="w-8 h-8" />,
      features: [
        'Closed captions for videos',
        'Audio descriptions',
        'Transcripts for audio content',
        'Visual alerts for sounds',
        'Volume controls',
        'Audio feedback options'
      ]
    },
    {
      category: 'Motor Accessibility',
      icon: <Hand className="w-8 h-8" />,
      features: [
        'Voice control integration',
        'Switch navigation support',
        'Keyboard-only navigation',
        'Touch-friendly interfaces',
        'Gesture alternatives',
        'Assistive technology compatibility'
      ]
    },
    {
      category: 'Cognitive Accessibility',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Clear, simple language',
        'Consistent navigation',
        'Logical content structure',
        'Error prevention',
        'Help and support options',
        'Customizable interfaces'
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      icon: <Award className="w-6 h-6" />
    },
    {
      standard: 'Section 508',
      description: 'Federal accessibility requirements for electronic and information technology',
      icon: <Shield className="w-6 h-6" />
    },
    {
      standard: 'ADA Title III',
      description: 'Americans with Disabilities Act requirements for public accommodations',
      icon: <Globe className="w-6 h-6" />
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility requirements for ICT products and services',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const testingTools = [
    {
      name: 'Automated Testing',
      description: 'AI-powered accessibility scanning and validation',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: 'Manual Testing',
      description: 'Expert accessibility audits and user testing',
      icon: <Accessibility className="w-6 h-6" />
    },
    {
      name: 'Mobile Testing',
      description: 'Cross-device accessibility validation',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      name: 'Continuous Monitoring',
      description: 'Ongoing accessibility compliance tracking',
      icon: <Tablet className="w-6 h-6" />
    }
  ];

  return (
    <Layout
      title="Digital Accessibility Solutions | Zion Tech Group"
      description="Comprehensive digital accessibility solutions ensuring your digital products are inclusive and accessible to all users. WCAG 2.1 AA compliant."
      keywords="digital accessibility, WCAG compliance, ADA compliance, inclusive design, accessibility testing, assistive technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
                <Accessibility className="w-4 h-4" />
                <span>Digital Accessibility Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Inclusive Digital Experiences
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Make your digital products accessible to everyone. Our comprehensive accessibility solutions 
                ensure compliance with global standards and create inclusive user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  Get Accessibility Audit
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products 
                are usable by people with diverse abilities and needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-white">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-white/80">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Global Compliance Standards
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our solutions ensure compliance with international accessibility standards and regulations, 
                protecting your business and serving all users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {standard.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {standard.standard}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {standard.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing & Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Accessibility Testing & Tools
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive testing solutions to identify and resolve accessibility issues, 
                ensuring your digital products meet the highest standards of inclusivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {tool.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {tool.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make Your Digital Products Accessible?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join the movement toward digital inclusion. Our accessibility experts are ready to help 
              you create products that everyone can use and enjoy.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Start Your Accessibility Journey
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AccessibilityPage;