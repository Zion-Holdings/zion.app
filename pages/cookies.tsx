import React from 'react';
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  Cookie, Settings, Shield, Eye, Database, 
  Globe, AlertTriangle, CheckCircle, Clock, Mail
} from 'lucide-react';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025';

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Required for basic website functionality',
      examples: [
        'Authentication and security',
        'Shopping cart functionality',
        'Language preferences',
        'Session management'
      ],
      duration: 'Session or 1 year',
      canDisable: false
    },
    {
      title: 'Analytics Cookies',
      icon: <Database className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Help us understand how visitors use our website',
      examples: [
        'Page views and navigation',
        'User behavior patterns',
        'Performance metrics',
        'Traffic sources'
      ],
      duration: '2 years',
      canDisable: true
    },
    {
      title: 'Functional Cookies',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Enable enhanced functionality and personalization',
      examples: [
        'User preferences',
        'Social media integration',
        'Live chat features',
        'Content recommendations'
      ],
      duration: '1 year',
      canDisable: true
    },
    {
      title: 'Marketing Cookies',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      description: 'Used for advertising and marketing purposes',
      examples: [
        'Targeted advertising',
        'Social media campaigns',
        'Email marketing',
        'Conversion tracking'
      ],
      duration: '2 years',
      canDisable: true
    }
  ];

  const cookiePurposes = [
    {
      title: 'Website Functionality',
      description: 'Ensure the website works properly and securely',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Performance Optimization',
      description: 'Improve website speed and user experience',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'User Experience',
      description: 'Remember your preferences and settings',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Analytics and Insights',
      description: 'Understand how our services are used',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Marketing and Advertising',
      description: 'Provide relevant content and offers',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Security and Safety',
      description: 'Protect against fraud and abuse',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className="relative z-10 pt-8">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Cookie Policy
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Learn how we use cookies to enhance your experience and how you can control them.
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Cookie className="w-6 h-6" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Overview */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    What Are Cookies?
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and personalizing content.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    We use cookies responsibly and only for purposes that enhance your experience. 
                    You have full control over which cookies you accept and can change your preferences 
                    at any time.
                  </p>
                  <div className="flex items-center gap-4 text-cyan-400">
                    <Eye className="w-6 h-6" />
                    <span className="font-medium">Transparent cookie usage</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <Cookie className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cookie Management</h3>
                      <p className="text-gray-300">Full control over your preferences</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">100%</div>
                          <div className="text-gray-400">Optional</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">Easy</div>
                          <div className="text-gray-400">Control</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Cookie Types */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Types of Cookies We Use</h2>
                <p className="text-xl text-gray-300">Understanding the different categories of cookies</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {type.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Duration: {type.duration}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        type.canDisable 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {type.canDisable ? 'Can Disable' : 'Required'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Cookie Purposes */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Why We Use Cookies</h2>
                <p className="text-xl text-gray-300">The benefits cookies provide for you and our services</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cookiePurposes.map((purpose, index) => (
                  <motion.div
                    key={purpose.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {purpose.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{purpose.title}</h3>
                    <p className="text-gray-300 text-sm">{purpose.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Managing Your Cookie Preferences</h2>
                <p className="text-xl text-gray-300">How to control which cookies you accept</p>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Browser Settings</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="text-white font-medium mb-2">Chrome</h4>
                      <p className="text-gray-300 text-sm">
                        Settings → Privacy and security → Cookies and other site data → Block all cookies
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="text-white font-medium mb-2">Firefox</h4>
                      <p className="text-gray-300 text-sm">
                        Options → Privacy & Security → Cookies and Site Data → Block all cookies
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="text-white font-medium mb-2">Safari</h4>
                      <p className="text-gray-300 text-sm">
                        Preferences → Privacy → Block all cookies
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="text-white font-medium mb-2">Edge</h4>
                      <p className="text-gray-300 text-sm">
                        Settings → Cookies and site permissions → Cookies and site data → Block all cookies
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Cookie Consent Tool</h3>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                        <Settings className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Cookie Preferences</h4>
                      <p className="text-gray-300">
                        Use our cookie consent tool to customize which types of cookies you accept.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Essential Cookies</span>
                          <span className="text-green-400 text-sm">Always Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Analytics Cookies</span>
                          <span className="text-cyan-400 text-sm">Optional</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Functional Cookies</span>
                          <span className="text-cyan-400 text-sm">Optional</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Marketing Cookies</span>
                          <span className="text-cyan-400 text-sm">Optional</span>
                        </div>
                      </div>
                      
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                        Manage Preferences
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Third-Party Cookies</h2>
                <p className="text-xl text-gray-300">Understanding cookies from external services</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">What Are Third-Party Cookies?</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Third-party cookies are set by external services that we use to enhance our website 
                      functionality. These services may include analytics providers, social media platforms, 
                      and advertising networks.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We carefully select these services and ensure they comply with our privacy standards. 
                      You can control these cookies through your browser settings or our cookie consent tool.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-4">Common Third-Party Services:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">Google Analytics (website analytics)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">Social media platforms (sharing buttons)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">Payment processors (secure transactions)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">Customer support tools (live chat)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Detailed Information */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Cookie Information</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Cookie Duration</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Cookies have different lifespans depending on their purpose. Session cookies are 
                        deleted when you close your browser, while persistent cookies remain on your device 
                        for a specified period.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We regularly review and update our cookie policies to ensure they align with 
                        best practices and user expectations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Collection</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Cookies may collect information such as your IP address, browser type, operating 
                        system, pages visited, and time spent on our website. This information helps us 
                        improve our services and provide a better user experience.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We do not use cookies to collect personally identifiable information without your 
                        explicit consent.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We may update this Cookie Policy from time to time to reflect changes in our 
                        practices or applicable laws. We will notify you of any material changes by 
                        posting the updated policy on our website.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Your continued use of our website after such changes constitutes acceptance of 
                        the updated policy.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Legal Basis</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our use of cookies is based on your consent for non-essential cookies and our 
                        legitimate interests for essential cookies. You can withdraw your consent at any 
                        time through our cookie consent tool or browser settings.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We are committed to transparency and will always explain why we use cookies 
                        and how you can control them.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Questions About Cookies?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  If you have any questions about our use of cookies or need help managing your preferences, 
                  please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    Contact Form
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
};

export default CookiesPage;