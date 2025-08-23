import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Globe,
  Send,
  Building,
  Users,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to transform your business with cutting-edge technology? Let's discuss how Zion Tech Group can help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                <Phone className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Call Us</h3>
              <p className="text-gray-400 mb-4">Speak directly with our experts</p>
              <a 
                href="tel:+1-800-ZION-TECH" 
                className="text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors"
              >
                +1 (800) ZION-TECH
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600/30 transition-colors">
                <Mail className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
              <p className="text-gray-400 mb-4">Send us a detailed message</p>
              <a 
                href="mailto:hello@ziontechgroup.com" 
                className="text-purple-400 hover:text-purple-300 text-lg font-semibold transition-colors"
              >
                hello@ziontechgroup.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-cyan-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-600/30 transition-colors">
                <MapPin className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Visit Us</h3>
              <p className="text-gray-400 mb-4">Our headquarters</p>
              <p className="text-cyan-400 text-lg font-semibold">
                Zion Tech Group<br />
                Innovation District<br />
                Tech Valley, CA 94000
              </p>
            </motion.div>
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold">Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM PST</p>
                </div>
                <div>
                  <p className="font-semibold">Saturday</p>
                  <p>10:00 AM - 4:00 PM PST</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Emergency support available 24/7 for enterprise clients
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-300">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block text-white font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-white font-semibold mb-2">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="ai-automation">AI & Automation</option>
                <option value="quantum-computing">Quantum Computing</option>
                <option value="space-technology">Space Technology</option>
                <option value="it-solutions">IT Solutions</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud-infrastructure">Cloud Infrastructure</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about your project, requirements, or questions..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Other Ways to Connect</h2>
            <p className="text-xl text-gray-300">
              Choose the method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Live Chat",
                description: "Chat with our team in real-time",
                action: "Start Chat",
                href: "#",
                color: "from-green-600 to-emerald-600"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Enterprise Sales",
                description: "Dedicated account management",
                action: "Contact Sales",
                href: "/enterprise-sales",
                color: "from-blue-600 to-cyan-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Partnership",
                description: "Explore partnership opportunities",
                action: "Partner With Us",
                href: "/partners",
                color: "from-purple-600 to-pink-600"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Demo Request",
                description: "See our solutions in action",
                action: "Request Demo",
                href: "/demo",
                color: "from-orange-600 to-red-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <Link
                  href={item.href}
                  className={`inline-flex items-center bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}
                >
                  {item.action}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
