=======
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
=======
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

            {/* FAQ Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">How quickly can you start a project?</h3>
                  <p className="text-white/80 text-sm">
                    We can typically begin small projects within 2-4 weeks. For larger enterprise implementations, 
                    we usually start within 6-8 weeks after initial consultation and planning.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">What industries do you specialize in?</h3>
                  <p className="text-white/80 text-sm">
                    We work across multiple industries including manufacturing, healthcare, finance, retail, 
                    and technology. Our AI solutions are adaptable to any business domain.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Do you provide ongoing support?</h3>
                  <p className="text-white/80 text-sm">
                    Yes, we offer comprehensive support packages including 24/7 monitoring, 
                    regular updates, performance optimization, and technical support.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Can you work with existing systems?</h3>
                  <p className="text-white/80 text-sm">
                    Absolutely! We specialize in integrating AI solutions with existing infrastructure. 
                    We'll assess your current systems and design solutions that work seamlessly.
                  </p>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">
                  Successful implementations across industries worldwide
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-3xl p-12 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  Let's discuss how our AI automation solutions can transform your business and drive innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                    Start Your Project
                  </a>
                  <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-cyan-400/50 text-white font-bold rounded-xl transition-all duration-300">
                    View Case Studies
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
