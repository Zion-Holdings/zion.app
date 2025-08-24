import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, FileText, User, Database, Globe, Mail, 
  Phone, MapPin, Calendar, CheckCircle, AlertTriangle, Scale
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  const keyTerms = [
    {
      title: 'Acceptance of Terms',
      description: 'By using our services, you agree to be bound by these terms and conditions.',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Service Description',
      description: 'We provide AI, quantum computing, cybersecurity, and technology consulting services.',
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'User Responsibilities',
      description: 'Users must comply with applicable laws and use services responsibly.',
      icon: User,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intellectual Property',
      description: 'Our services and content are protected by intellectual property rights.',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const userObligations = [
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations',
      icon: Scale
    },
    {
      obligation: 'Authorized Use',
      description: 'Use services only for authorized purposes',
      icon: CheckCircle
    },
    {
      obligation: 'Security',
      description: 'Maintain security of your account and credentials',
      icon: Lock
    },
    {
      obligation: 'Payment',
      description: 'Pay all fees and charges in a timely manner',
      icon: Database
    },
    {
      obligation: 'Content',
      description: 'Ensure content you provide is accurate and lawful',
      icon: FileText
    },
    {
      obligation: 'Cooperation',
      description: 'Cooperate with our reasonable requests',
      icon: User
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems',
    'Interfering with or disrupting our services',
    'Using services for illegal or harmful purposes',
    'Reverse engineering or attempting to copy our technology',
    'Sharing account credentials with unauthorized users',
    'Violating intellectual property rights',
    'Engaging in fraudulent or deceptive practices',
    'Collecting personal information without consent'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Terms of Service - Zion Tech Group | Service Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's terms of service, user obligations, and service conditions for our technology solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, Zion Tech Group terms, service terms" />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Our terms and conditions for using our services." />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group services. 
              Please read them carefully before using our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
          >
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Last Updated</span>
            </div>
            <p className="text-white/70">
              These terms were last updated on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Terms</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Important terms that govern our relationship and service delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${term.color} flex items-center justify-center`}>
                    <term.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{term.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed">{term.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Zion Tech Group provides cutting-edge technology solutions and consulting services
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technology Services</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• AI and Machine Learning Solutions</li>
                  <li>• Quantum Computing Services</li>
                  <li>• Cybersecurity and Threat Protection</li>
                  <li>• Edge Computing and IoT Solutions</li>
                  <li>• Space Technology Innovation</li>
                  <li>• Digital Transformation Consulting</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Service Delivery</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Cloud-based and on-premise solutions</li>
                  <li>• 24/7 technical support and monitoring</li>
                  <li>• Custom development and integration</li>
                  <li>• Training and knowledge transfer</li>
                  <li>• Ongoing maintenance and updates</li>
                  <li>• Performance optimization and scaling</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">User Obligations</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Your responsibilities when using our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.obligation}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <obligation.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{obligation.obligation}</h3>
                </div>
                <p className="text-white/70 text-sm">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prohibited Activities</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Activities that are not permitted when using our services
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Security Violations</h3>
                <ul className="space-y-2">
                  {prohibitedActivities.slice(0, 4).map((activity, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-white/70">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Usage Violations</h3>
                <ul className="space-y-2">
                  {prohibitedActivities.slice(4).map((activity, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-white/70">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Payment Terms</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Understanding our pricing, billing, and payment policies
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Billing & Payment</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Services are billed monthly or annually as specified</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Payment is due upon receipt of invoice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Late payments may result in service suspension</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>All fees are non-refundable unless otherwise stated</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Pricing & Changes</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Pricing is subject to change with 30 days notice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Custom pricing available for enterprise clients</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Volume discounts may apply to large deployments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Additional fees may apply for premium support</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Understanding ownership and rights to our technology and content
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Our Rights</h3>
                <p className="text-white/70 mb-3">
                  Zion Tech Group retains all rights, title, and interest in and to our services, 
                  including all intellectual property rights, proprietary technology, and content.
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Software, algorithms, and technical solutions</li>
                  <li>• Trademarks, service marks, and brand elements</li>
                  <li>• Documentation, training materials, and content</li>
                  <li>• Patents, copyrights, and trade secrets</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Your Rights</h3>
                <p className="text-white/70 mb-3">
                  You retain ownership of your data and content. We grant you a limited, 
                  non-exclusive license to use our services for authorized purposes.
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Your business data and proprietary information</li>
                  <li>• Custom configurations and integrations you develop</li>
                  <li>• Feedback and suggestions you provide</li>
                  <li>• Content you create using our services</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Important information about our liability and your remedies
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="space-y-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Important Notice</h3>
                <p className="text-white/70 text-sm">
                  Our services are provided "as is" without warranties of any kind. 
                  In no event shall Zion Tech Group be liable for indirect, incidental, 
                  special, consequential, or punitive damages.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-2">Excluded Damages</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Lost profits or business opportunities</li>
                    <li>• Data loss or corruption</li>
                    <li>• Third-party claims</li>
                    <li>• Consequential damages</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Liability Cap</h4>
                  <p className="text-white/70 text-sm">
                    Our total liability shall not exceed the amount paid by you 
                    for the specific service giving rise to the claim in the 
                    12 months preceding the claim.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Questions About Terms?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Contact us if you have any questions about these terms of service
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Email</h3>
                <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  legal@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  +1 (302) 464-0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Address</h3>
                <p className="text-white/70 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}