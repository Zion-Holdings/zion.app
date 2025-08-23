import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Globe, Database, Bell, Key, CheckCircle, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Privacy: React.FC = () => {
  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email, phone number, and company information',
      examples: ['Contact details', 'Account credentials', 'Profile information'],
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Usage Data',
      description: 'How you interact with our services and website',
      examples: ['Page visits', 'Feature usage', 'Performance metrics'],
      icon: <Eye className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Technical Data',
      description: 'Device and browser information for service optimization',
      examples: ['IP address', 'Browser type', 'Device specifications'],
      icon: <Database className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'AI Training Data',
      description: 'Data used to improve our AI consciousness systems',
      examples: ['Interaction patterns', 'Feedback responses', 'Learning data'],
      icon: <Key className="w-6 h-6 text-yellow-400" />
    }
  ];

  const dataUses = [
    {
      title: 'Service Provision',
      description: 'To provide and maintain our AI consciousness and quantum computing services',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Communication',
      description: 'To send important updates, support responses, and service notifications',
      icon: <Bell className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Service Improvement',
      description: 'To analyze usage patterns and enhance our technology offerings',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Security & Compliance',
      description: 'To ensure platform security and comply with legal obligations',
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const dataProtection = [
    {
      title: 'Encryption',
      description: 'All data is encrypted using industry-standard AES-256 encryption',
      icon: <Lock className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Access Controls',
      description: 'Strict role-based access controls and authentication requirements',
      icon: <Key className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Regular Audits',
      description: 'Comprehensive security audits and penetration testing',
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Data Minimization',
      description: 'We only collect data that is necessary for service provision',
      icon: <Eye className="w-6 h-6 text-yellow-400" />
    }
  ];

  const userRights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of all personal data we hold about you',
      icon: <Eye className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Correct Information',
      description: 'Update or correct inaccurate personal information',
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    {
      title: 'Delete Data',
      description: 'Request deletion of your personal data (with exceptions)',
      icon: <AlertTriangle className="w-5 h-5 text-red-400" />
    },
    {
      title: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: <Database className="w-5 h-5 text-purple-400" />
    },
    {
      title: 'Object to Processing',
      description: 'Object to certain types of data processing',
      icon: <Shield className="w-5 h-5 text-yellow-400" />
    },
    {
      title: 'Withdraw Consent',
      description: 'Withdraw consent for data processing where applicable',
      icon: <Lock className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Privacy & Data Protection
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your privacy is fundamental to us. Learn how we protect your data 
                and maintain transparency in our data practices.
              </p>
              
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Collection Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Data We Collect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We collect only the data necessary to provide our services and improve your experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {dataCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                    <div className="space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Usage Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Use Your Data
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use your data responsibly and only for purposes that benefit your experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {dataUses.map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {use.icon}
                    <h3 className="text-2xl font-bold text-white">{use.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{use.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement industry-leading security measures to keep your data safe.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataProtection.map((protection, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="mb-4">{protection.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{protection.title}</h3>
                  <p className="text-gray-300 text-sm">{protection.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Rights Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have control over your personal data. Here are your rights and how to exercise them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    {right.icon}
                    <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Additional Information
              </h2>
              <p className="text-lg text-gray-300">
                Important details about data sharing, retention, and international transfers.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Data Sharing</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal data to third parties. We may share data with trusted service providers who assist us in operating our services, conducting business, or serving users, so long as those parties agree to keep this information confidential.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We may also release information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Data Retention</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When we no longer need your personal data, we will securely delete or anonymize it. You may request deletion of your data at any time, subject to certain legal obligations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">International Transfers</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your personal data may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For transfers to countries outside the European Economic Area (EEA), we rely on adequacy decisions, standard contractual clauses, or other appropriate safeguards as required by law.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                If you have questions about this Privacy Policy or want to exercise your rights, 
                please contact our Data Protection Officer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact DPO
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Download Privacy Policy
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Privacy;

 