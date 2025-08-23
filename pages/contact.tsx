import React from 'react';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Star, Award, Zap, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      title: 'Phone',
      value: '+1 302 464 0950',
      icon: Phone,
      description: 'Call us directly for immediate assistance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      icon: Mail,
      description: 'Send us a detailed message',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Address',
      value: '364 E Main St STE 1008 Middletown DE 19709',
      icon: MapPin,
      description: 'Visit our headquarters',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      icon: Clock,
      description: 'We\'re here when you need us',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const contactForm = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  };

  const services = [
    'AI Consciousness & Evolution',
    'Quantum Technology',
    'Cybersecurity',
    'Business Solutions',
    'IT Infrastructure',
    'Space Technology',
    'Other'
  ];

  return (
    <Layout
      title="Contact Us | Zion Tech Group"
      description="Get in touch with Zion Tech Group for AI consciousness, quantum computing, cybersecurity, and space technology solutions. Contact our expert team today."
      keywords="contact Zion Tech Group, AI consciousness, quantum computing, cybersecurity, space technology, business solutions"
      canonicalUrl="https://ziontechgroup.com/contact"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <MessageSquare className="mx-auto h-20 w-20 text-green-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Ready to transform your business with revolutionary technology? 
                Get in touch with our expert team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to reach our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center">
                  <div className={`p-4 bg-gradient-to-r ${method.color} rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                    <method.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-green-400 font-semibold mb-2">{method.value}</p>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tell us about your project and we\'ll get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  placeholder="Tell us about your project, goals, and how we can help..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 mx-auto"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading the technology revolution with innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-green-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Star className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Specialists in AI consciousness, quantum computing, and space technology
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">
                  Cutting-edge solutions that push the boundaries of what's possible
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">
                  Successful implementations across industries worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the technology revolution and transform your business with 
              cutting-edge AI, quantum computing, and space technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Project
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
