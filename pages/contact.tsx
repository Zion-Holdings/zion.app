import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, Globe,
  ArrowRight, Send, CheckCircle, Star, Users, Award,
  Shield, Zap, Sparkles, Rocket, Brain, Atom
} from 'lucide-react';
import UltraFuturisticNavigation2033 from '../components/layout/UltraFuturisticNavigation2033';
import UltraFuturisticFooter2033 from '../components/layout/UltraFuturisticFooter2033';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    value: contactInfo.mobile,
    href: `tel:${contactInfo.mobile}`,
    description: 'Call us directly for immediate assistance',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Mail,
    title: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    description: 'Send us a detailed message',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: contactInfo.address,
    href: '#',
    description: 'Visit our headquarters',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Globe,
    title: 'Website',
    value: contactInfo.website,
    href: contactInfo.website,
    description: 'Explore our online presence',
    color: 'from-orange-500 to-red-600'
  }
];

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
  { day: 'Sunday', hours: 'Closed' }
];

const supportFeatures = [
  {
    icon: Shield,
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance and monitoring'
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Average response time under 2 hours'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with deep expertise'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: '100% satisfaction or your money back'
  }
];

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for cutting-edge AI consciousness, quantum computing, space technology, and innovative micro SAAS solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact, Zion Tech Group, AI consciousness, quantum computing, space technology, support" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group for revolutionary technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <UltraFuturisticNavigation2033 />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                The Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-400 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to experience the next generation of technology? Get in touch with our team of experts and discover how we can transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={method.href}
                  className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105 h-full"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} bg-opacity-20 rounded-2xl mb-4 group-hover:bg-opacity-30 transition-all duration-300`}>
                    <method.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    {method.value}
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-white/70">Tell us about your project and we'll get back to you within 2 hours.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-white/80">{schedule.day}</span>
                      <span className="text-cyan-400 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Features */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Why Choose Us</h3>
                </div>
                <div className="space-y-4">
                  {supportFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start space-x-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-cyan-500/20 rounded-lg flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{feature.title}</h4>
                        <p className="text-white/70 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h3>
                  <p className="text-white/80 mb-6">Call us directly for urgent technical support</p>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/80 text-xl mb-8 max-w-3xl mx-auto">
                Join thousands of technology leaders who are already shaping tomorrow with our revolutionary AI consciousness, quantum computing, and space technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {contactInfo.mobile}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-bold text-lg rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <UltraFuturisticFooter2033 />
    </>
  );
}