import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  MessageCircle, 
  BookOpen, 
  Video, 
  Users, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Globe,
  FileText,
  Play,
  Star,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const supportCategories = [
  {
    title: 'Technical Support',
    icon: <Headphones className="w-8 h-8 text-cyan-400" />,
    description: 'Get help with our platforms and services',
    items: [
      'Platform troubleshooting',
      'API integration support',
      'Performance optimization',
      'Security configuration',
      'Deployment assistance'
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-400/30'
  },
  {
    title: 'Documentation',
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    description: 'Comprehensive guides and references',
    items: [
      'Getting started guides',
      'API documentation',
      'Best practices',
      'Troubleshooting guides',
      'Video tutorials'
    ],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-400/30'
  },
  {
    title: 'Training & Onboarding',
    icon: <Video className="w-8 h-8 text-emerald-400" />,
    description: 'Learn to use our platforms effectively',
    items: [
      'Live training sessions',
      'On-demand courses',
      'Certification programs',
      'Custom workshops',
      'Team onboarding'
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-400/30'
  },
  {
    title: 'Community Support',
    icon: <Users className="w-8 h-8 text-orange-400" />,
    description: 'Connect with other users and experts',
    items: [
      'User forums',
      'Knowledge sharing',
      'Peer support',
      'Expert Q&A',
      'Success stories'
    ],
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-400/30'
  }
];

const supportChannels = [
  {
    name: 'Live Chat',
    icon: <MessageCircle className="w-6 h-6" />,
    description: 'Instant support during business hours',
    availability: '24/7',
    responseTime: '< 5 minutes',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-400/30'
  },
  {
    name: 'Email Support',
    icon: <Mail className="w-6 h-6" />,
    description: 'Detailed technical assistance',
    availability: '24/7',
    responseTime: '< 4 hours',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-400/30'
  },
  {
    name: 'Phone Support',
    icon: <Phone className="w-6 h-6" />,
    description: 'Direct conversation with experts',
    availability: '9 AM - 6 PM EST',
    responseTime: 'Immediate',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-400/30'
  },
  {
    name: 'Ticket System',
    icon: <FileText className="w-6 h-6" />,
    description: 'Track and manage support requests',
    availability: '24/7',
    responseTime: '< 2 hours',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-400/30'
  }
];

const faqItems = [
  {
    question: 'How do I get started with Zion Tech Group services?',
    answer: 'Getting started is easy! Simply contact our team through any of our support channels, and we\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
  },
  {
    question: 'What kind of technical support do you provide?',
    answer: 'We provide comprehensive technical support including platform troubleshooting, API integration assistance, performance optimization, security configuration, and deployment support. Our team of experts is available 24/7.'
  },
  {
    question: 'Do you offer training for your platforms?',
    answer: 'Yes! We offer live training sessions, on-demand courses, certification programs, and custom workshops. We also provide team onboarding to ensure your team can use our platforms effectively.'
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'We pride ourselves on fast response times. Live chat responses are typically under 5 minutes, email support within 4 hours, and our ticket system responds within 2 hours. Phone support is immediate during business hours.'
  },
  {
    question: 'Is there a community where I can connect with other users?',
    answer: 'Absolutely! We have active user forums, knowledge sharing platforms, peer support groups, and expert Q&A sessions. Our community is a great place to learn from other users and share experiences.'
  }
];

export default function Support() {
  return (
    <Layout>
      <SEO
        title="Support | Zion Tech Group"
        description="Get comprehensive technical support, documentation, training, and community assistance for all Zion Tech Group platforms and services."
        keywords={["technical support", "customer service", "help documentation", "training", "community support", "Zion Tech Group"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                We're Here to Help
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the support you need to succeed with our cutting-edge technology platforms. 
                Our expert team is available 24/7 to help you maximize the value of our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Start Live Chat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 inline mr-2" />
                  View Documentation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Comprehensive Support Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From technical assistance to training and community support, we provide everything you need to succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border ${category.borderColor} bg-gradient-to-br ${category.color} hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Multiple Ways to Get Help</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're available 24/7 to ensure you never face challenges alone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border ${channel.borderColor} ${channel.bgColor} hover:scale-105 transition-all duration-300`}
                >
                  <div className={`${channel.color} mb-4`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-green-400 font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-cyan-400 font-medium">{channel.responseTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400">
                Find quick answers to common questions about our support services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get the Support You Need?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert team is ready to help you succeed with our technology platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 inline mr-2" />
                  Browse Documentation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}