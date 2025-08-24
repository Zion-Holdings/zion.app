import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  HelpCircle, MessageCircle, Phone, Mail, 
  Clock, ChevronDown, ChevronUp, FileText,
  Video, Users, BookOpen
} from 'lucide-react';

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI & Machine Learning, Quantum Computing, Cybersecurity, Cloud Infrastructure, Blockchain & DeFi, and Space Technology services. Our solutions are tailored for various industries including finance, healthcare, manufacturing, government, education, and retail."
    },
    {
      question: "How do I get started with your services?",
      answer: "Getting started is easy! Simply contact us through our contact form, call us at +1 302 464 0950, or email us at kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs and provide a customized solution."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we provide comprehensive ongoing support including 24/7 monitoring, regular updates, maintenance, and technical support. We offer various support packages to meet your specific needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep expertise in Financial Services, Healthcare & Life Sciences, Manufacturing & Industry 4.0, Government & Public Sector, Education & Research, and Retail & E-commerce. However, our solutions can be adapted for any industry."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including SOC 2 compliance, advanced encryption, secure cloud infrastructure, and comprehensive data protection protocols. Your data security is our top priority."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement. This includes user training, technical training, and ongoing support."
    },
    {
      question: "What makes Zion Tech Group different from other technology companies?",
      answer: "We combine cutting-edge AI and quantum computing technology with deep industry expertise. Our autonomous business solutions continuously learn and improve, providing unprecedented efficiency and innovation. We focus on delivering measurable business outcomes, not just technology."
    }
  ];

  const supportChannels = [
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      contact: "+1 302 464 0950",
      availability: "Monday-Friday, 9AM-6PM EST",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive responses",
      icon: Mail,
      contact: "kleber@ziontechgroup.com",
      availability: "24/7 - Response within 24 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      contact: "Available on website",
      availability: "Monday-Friday, 9AM-6PM EST",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and technical documentation",
      icon: FileText,
      href: "/docs"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and tutorials",
      icon: Video,
      href: "/tutorials"
    },
    {
      title: "Knowledge Base",
      description: "Searchable database of common questions and solutions",
      icon: BookOpen,
      href: "/knowledge-base"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share experiences",
      icon: Users,
      href: "/community"
    }
  ];

  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <HelpCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the help you need with our comprehensive support resources and expert assistance
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Multiple ways to get the support you need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{channel.title}</h3>
                  <p className="text-gray-400 mb-6">{channel.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">{channel.availability}</span>
                    </div>
                    <div className="text-blue-400 font-medium">{channel.contact}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our services
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Support Resources</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access comprehensive documentation and learning materials
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Our expert support team is here to help you succeed with our technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Support</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Support</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}