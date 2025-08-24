import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Cookie, Settings, Shield, Eye, Database, 
  CheckCircle, AlertTriangle, Info, Globe
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function CookiesPage() {
  const lastUpdated = 'January 15, 2025';

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication and security cookies',
        'Session management cookies',
        'Load balancing cookies',
        'User preference cookies'
      ],
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaign performance.',
      examples: [
        'Social media cookies',
        'Advertising cookies',
        'Retargeting cookies',
        'Campaign tracking cookies'
      ],
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preference cookies',
        'Theme selection cookies',
        'Form auto-fill cookies',
        'User experience cookies'
      ],
      icon: <Settings className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const thirdPartyCookies = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      duration: '2 years',
      privacy: 'https://policies.google.com/privacy'
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media advertising and conversion tracking',
      duration: '3 months',
      privacy: 'https://www.facebook.com/policy.php'
    },
    {
      name: 'LinkedIn Insight',
      purpose: 'Professional networking and business insights',
      duration: '2 years',
      privacy: 'https://www.linkedin.com/legal/privacy-policy'
    },
    {
      name: 'Twitter Ads',
      purpose: 'Social media advertising and engagement tracking',
      duration: '2 years',
      privacy: 'https://twitter.com/en/privacy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Cookie Policy — Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about Zion Tech Group's cookie policy, how we use cookies, and how you can manage your cookie preferences." />
        <meta property="og:title" content="Cookie Policy — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive cookie policy explaining how we use cookies to enhance your experience on our website." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Learn how we use cookies to enhance your experience and how you can manage your preferences.
            </p>
            <div className="mt-8 text-gray-300">
              <p>Last updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device when you visit our website. They help us 
              provide you with a better experience by remembering your preferences, analyzing how you use our site, 
              and personalizing content.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This policy explains what cookies we use, why we use them, and how you can control them. By continuing 
              to use our website, you consent to our use of cookies in accordance with this policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-300">Understanding the different categories of cookies on our website</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{type.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-2">Examples:</h4>
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Cookies */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <p className="text-xl text-gray-300">Cookies from trusted third-party services we use</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thirdPartyCookies.map((cookie, index) => (
              <motion.div
                key={cookie.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{cookie.name}</h3>
                <p className="text-gray-300 mb-3">{cookie.purpose}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Duration: {cookie.duration}</span>
                  <a
                    href={cookie.privacy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-xl text-gray-300">How you can control and manage cookies on our website</p>
          </motion.div>

          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 text-cyan-400 mr-3" />
                Browser Settings
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Block all cookies</li>
                <li>• Block third-party cookies only</li>
                <li>• Delete existing cookies</li>
                <li>• Set preferences for specific websites</li>
                <li>• Receive notifications when cookies are set</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 text-green-400 mr-3" />
                Cookie Consent
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you first visit our website, you&apos;ll see a cookie consent banner that allows you to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Accept all cookies</li>
                <li>• Accept essential cookies only</li>
                <li>• Customize your preferences</li>
                <li>• Learn more about our cookie policy</li>
                <li>• Change your preferences at any time</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                Important Notes
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. 
                  If you disable them, some features may not work correctly.
                </p>
                <p>
                  <strong>Performance Impact:</strong> Disabling certain cookies may affect website performance and 
                  your user experience.
                </p>
                <p>
                  <strong>Third-Party Services:</strong> Some third-party services may continue to set cookies 
                  even if you&apos;ve disabled them in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Contact */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Questions About Cookies?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We&apos;re here to help clarify any questions you may have about our cookie policy.
            </p>
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Cookie Management</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>• Change cookie preferences</p>
                    <p>• Opt-out of tracking</p>
                    <p>• Delete existing cookies</p>
                    <p>• Browser-specific instructions</p>
                    <p>• Third-party opt-outs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}