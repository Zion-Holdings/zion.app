import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Globe, Users,
  MessageSquare, Calendar, Video, PhoneCall
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "kleber@ziontechgroup.com",
      action: "Send Email",
      href: "mailto:kleber@ziontechgroup.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (302) 464-0950",
      action: "Call Now",
      href: "tel:+13024640950",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Schedule a personalized demo",
      contact: "Book Online",
      action: "Schedule Demo",
      href: "/schedule-demo",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Available 24/7",
      action: "Start Chat",
      href: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const officeLocations = [
    {
      city: "Delaware, USA",
      address: "Main Headquarters",
      timezone: "EST (UTC-5)",
      hours: "Mon-Fri 9AM-6PM",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500"
    },
    {
      city: "Global Remote",
      address: "Distributed Team",
      timezone: "Multiple Timezones",
      hours: "24/7 Support Available",
      icon: Globe,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including finance, healthcare, manufacturing, retail, and technology. Our AI and quantum solutions are adaptable to any sector."
    },
    {
      question: "How quickly can you implement solutions?",
      answer: "Implementation timelines vary based on complexity. Simple integrations can be completed in weeks, while comprehensive enterprise solutions typically take 3-6 months."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support, regular maintenance, and continuous optimization to ensure your systems perform at peak efficiency."
    },
    {
      question: "What security measures do you implement?",
      answer: "We implement enterprise-grade security including quantum-resistant encryption, zero-trust architecture, and regular security audits to protect your data."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Contact Us — Zion Tech Group | Get in Touch with AI & Quantum Experts</title>
        <meta name="description" content="Contact Zion Tech Group for AI, quantum computing, and technology solutions. Get expert consultation, support, and personalized demos." />
        <meta property="og:title" content="Contact Zion Tech Group" />
        <meta property="og:description" content="Get in touch with AI and quantum technology experts." />
        <meta name="keywords" content="contact, support, consultation, AI experts, quantum technology" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge AI and quantum technology? 
              Our team of experts is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Multiple Ways to Connect</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the communication method that works best for you. We&apos;re here to help 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{method.description}</p>
                <div className="text-blue-400 font-medium mb-4">{method.contact}</div>
                <a
                  href={method.href}
                  className="inline-block px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Locations</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategically located to serve our global client base with local expertise and 24/7 support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${office.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <office.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{office.city}</h3>
                <div className="space-y-3 text-slate-300">
                  <p><span className="font-medium">Address:</span> {office.address}</p>
                  <p><span className="font-medium">Timezone:</span> {office.timezone}</p>
                  <p><span className="font-medium">Hours:</span> {office.hours}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services and support.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <EnhancedContactForm />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already transforming their business with our technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-started"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View Success Stories
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}