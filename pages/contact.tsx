import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (302) 464-0950",
      link: "tel:+13024640950",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Delaware, United States",
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM EST",
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, quantum computing, and innovative technology services." />
        <meta name="keywords" content="contact, Zion Tech Group, AI solutions, quantum computing, technology services" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group for AI solutions and innovative technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <EnhancedNavigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Get in
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Ready to transform your business with cutting-edge AI technology?
                Let&apos;s discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mb-4 mx-auto`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                  {info.link !== "#" ? (
                    <a 
                      href={info.link}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </p>
              </div>
              <EnhancedContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </div>
  );
}