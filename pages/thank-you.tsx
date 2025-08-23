import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Mail, 
  Clock, 
  Users, 
  ArrowRight,
  Home,
  Briefcase,
  Phone
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';

const ThankYouPage: React.FC = () => {
  const nextSteps = [
    {
      title: 'Confirmation Email',
      description: 'You\'ll receive a confirmation email within the next few minutes.',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Team Review',
      description: 'Our team will review your inquiry within 24 hours.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Follow-up Call',
      description: 'We\'ll schedule a follow-up call to discuss your needs in detail.',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const quickActions = [
    {
      title: 'Explore Our Services',
      description: 'Learn more about our cutting-edge technology solutions',
      href: '/services',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-cyan-500 to-purple-600'
    },
    {
      title: 'View Case Studies',
      description: 'See how we\'ve helped other organizations succeed',
      href: '/case-studies',
      icon: <Users className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Download Resources',
      description: 'Access our whitepapers, guides, and technical documentation',
      href: '/resources',
      icon: <Mail className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Thank You - Zion Tech Group"
        description="Thanks for contacting Zion Tech Group. We will be in touch soon to discuss your technology needs and how we can help transform your business."
        keywords={["thank you", "contact confirmation", "Zion Tech Group", "technology consultation"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Success Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Thank You!
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your message has been received successfully. Our team will get back to you shortly 
                to discuss how we can help transform your business with cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 max-w-2xl mx-auto mb-8">
                <p className="text-lg text-gray-300 mb-4">
                  Need immediate assistance?
                </p>
                <div className="flex items-center justify-center gap-6 text-gray-300">
                  <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Phone className="w-5 h-5" />
                    +1 302 464 0950
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Mail className="w-5 h-5" />
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What Happens Next?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Here\'s what you can expect from our team in the coming days.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                While You Wait
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our resources and learn more about how we can help your organization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{action.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{action.description}</p>
                  <Link
                    href={action.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Explore our services and see how we can transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 inline-flex items-center"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ThankYouPage;