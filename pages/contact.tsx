import React from 'react';
import Layout from '../components/layout/Layout';
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
      <Head>
        <title>Contact Us | Zion Tech Group - Get Started Today</title>
        <meta name="description" content="Get in touch with Zion Tech Group to discuss your AI and automation needs. Our experts are ready to help transform your business." />
        <meta property="og:title" content="Contact Us | Zion Tech Group" />
        <meta property="og:description" content="Get in touch to discuss your AI and automation needs." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Contact Us
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI-powered solutions? Let&apos;s start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Multiple Ways to Connect
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the method that works best for you. Our team is ready to help with your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="card-hover text-center group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${method.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${method.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${method.color}`}>
                  {method.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {method.description}
                </p>
                <p className="text-white font-medium">
                  {method.contact}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-responsive-lg font-bold mb-6 gradient-text text-shadow">
                  Send Us a Message
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cursor-light border border-cursor-lighter rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cursor-light border border-cursor-lighter rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cursor-light border border-cursor-lighter rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cursor-light border border-cursor-lighter rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-2xl hover-glow"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <h2 className="text-responsive-lg font-bold mb-6 gradient-text text-shadow">
                  Our Offices
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Visit us at one of our global locations or schedule a virtual meeting.
=======
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '', service: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Contact Us | Zion Tech Group"
        description="Get in touch with Zion Tech Group. Contact us for AI, quantum computing, cybersecurity, and IT solutions. We're here to help transform your business."
        keywords={["contact", "Zion Tech Group", "AI solutions", "quantum computing", "cybersecurity", "IT services"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
=======
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
